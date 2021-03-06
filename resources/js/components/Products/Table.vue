<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="products"
            sort-by="calories"
            class="elevation-1"
            item-key="slug"
            :page.sync="page"
            :items-per-page="9"
        >
            <template v-slot:item.price="{ item }">{{item.price | money }}</template>
            <template v-slot:item.status="{ item }" v-text="item.status">
                <span v-if="item.status == 1" class="green--text">Active</span>
                <span v-else class="red--text">Disabled</span>
            </template>
            <template v-slot:item.publicUrl="{ item }">
                <v-img contain max-width="100" max-height="80" :src="item.publicUrl"></v-img>
            </template>
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>PRODUCTS</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New product</v-btn>
                        </template>
                        <ValidationObserver v-slot="{valid}" ref="form">
                            <v-card>
                                <v-card-title>
                                    <span class="headline">{{ formTitle }}</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="6">
                                                <ValidationProvider v-slot="{errors}" name="Name" rules="required">
                                                    <v-text-field
                                                        v-model="editedItem.name"
                                                        label="Name"
                                                        :error-messages="errors"
                                                    ></v-text-field>
                                                </ValidationProvider>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <ValidationProvider v-slot="{errors}" name="Slug" rules="required">
                                                    <v-text-field
                                                        :value="slug"
                                                        readonly
                                                        label="slug"
                                                        :error-messages="errors"
                                                    ></v-text-field>
                                                </ValidationProvider>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <ValidationProvider v-slot="{errors}" name="Description"
                                                                    rules="required">
                                                    <v-textarea
                                                        v-model="editedItem.description"
                                                        label="description"
                                                        :error-messages="errors"
                                                    ></v-textarea>
                                                </ValidationProvider>
                                            </v-col>
                                            <v-col cols="2" sm="6" md="4">
                                                <ValidationProvider v-slot="{errors}" name="Image" rules="required_if:editedIndex,>-1">
                                                    <v-file-input
                                                        label="Image Input"
                                                        accept="image/png, image/jpeg, image/bmp"
                                                        v-model="image"
                                                        :error-messages="errors"
                                                    ></v-file-input>
                                                </ValidationProvider>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <ValidationProvider
                                                    v-slot="{errors}"
                                                    name="Price"
                                                    rules="required|decimal:2"
                                                >
                                                    <v-text-field
                                                        type="text"
                                                        v-model="editedItem.price "
                                                        label="Price "
                                                        :error-messages="errors"
                                                    ></v-text-field>
                                                </ValidationProvider>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <ValidationProvider
                                                    v-slot="{errors}"
                                                    name="Stock"
                                                    rules="required|numeric"
                                                >
                                                    <v-text-field
                                                        type="text"
                                                        v-model="editedItem.stock "
                                                        label="Stock "
                                                        :error-messages="errors"
                                                    ></v-text-field>
                                                </ValidationProvider>
                                            </v-col>

                                            <v-col cols="12" sm="6" md="4">
                                                <v-switch v-model="editedItem.status" label="Status"></v-switch>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="save" :loading="loading"
                                           :disabled="!valid">Save
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </ValidationObserver>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
                <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
            <!-- <template v-slot:no-data>
              <v-btn color="primary" @click="getProductsData">Reset</v-btn>
            </template>-->
        </v-data-table>
        <v-pagination :value="page" :length="length" @input="next" total-visible="10"></v-pagination>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from "vuex";

    export default {
        data: () => ({
            dialog: false,
            headers: [
                {
                    text: "Name",
                    align: "start",
                    sortable: false,
                    value: "name"
                },
                {text: "Slug", value: "slug", sortable: true},
                {text: "Description", value: "description", sortable: false},
                {text: "Price", value: "price", sortable: true},
                {text: "Status", value: "status", sortable: true},
                {text: "Media", value: "publicUrl", sortable: true},
                {text: "Stock", value: "stock", sortable: true},
                {text: "Actions", value: "actions", sortable: false}
            ],
            editedIndex: -1,
            editedItem: {
                id: "",
                name: "",
                slug: "",
                description: "",
                price: "",
                status: 1,
                stock: ''
            },
            image: null,
            defaultItem: {
                id: "",
                name: "",
                slug: "",
                description: "",
                price: "",
                status: 1,
                stock: ''
            }
        }),

        computed: {
            products() {
                return this.$store.getters["products/getProductsData"].data;
            },
            page() {
                return this.$store.getters["products/getProductsData"].current_page;
            },
            length() {
                return this.$store.getters["products/getProductsData"].last_page;
            },
            slug() {
                return (this.editedItem.slug = this.editedItem.name.replace(/\s/g, "-"));
            },
            formTitle() {
                return this.editedIndex === -1 ? "New product" : "Edit product";
            },
            loading() {
                return this.$store.getters['global/getLoadingStatus'];
            }
        },
        watch: {
            dialog(val) {
                val || this.close();
            }
        },
        created() {
            this.init();
        },

        methods: {
            init() {
                this.$store.dispatch("products/asyncGetProducts", {page: this.page, items:9});
            },
            ...mapActions({
                productCreate: "products/productCreate",
                productEdit: "products/productEdit",
                productDelete: "products/productDelete"
            }),
            next(page) {
                this.$store.dispatch("products/asyncGetProducts", page);
            },

            editItem(item) {
                this.editedIndex = this.products.indexOf(item);
                this.editedItem = Object.assign({}, item);
                this.dialog = true;
            },

            deleteItem(item) {
                confirm("Are you sure you want to delete this item?") &&
                this.productDelete({id: item.id});
            },

            close() {
                this.dialog = false;
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem);
                    this.editedIndex = -1;
                });
            },

            save() {
                const formData = new FormData();
                formData.append("name", this.editedItem.name);
                formData.append("description", this.editedItem.description);
                formData.append("slug", this.editedItem.slug);
                formData.append("price", this.editedItem.price);
                formData.append("stock", this.editedItem.stock);
                formData.append("status", this.editedItem.status ? 1 : 0);
                formData.append("image", this.image);
                if (this.editedIndex > -1) {
                    formData.append("_method", "PUT");
                    this.productEdit({data: formData, id: this.editedItem.id}).then(()=>{
                        this.$refs.form.reset()
                        this.image=null
                    })
                } else {
                    this.productCreate(formData).then(()=>{
                        this.$refs.form.reset()
                        this.image=null
                    })
                }
                this.close();
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            }
        }
    };
</script>
