<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="products"
      sort-by="calories"
      class="elevation-1"
      :page.sync="page"
      :items-per-page="9"
    >
      <template v-slot:item.price="{ item }">{{item.price | money }}</template>
      <template v-slot:item.status="{ item }" v-text="item.status">
        <span v-if="item.status == 1" class="green--text">Active</span>
        <span v-else class="red--text">Disabled</span>
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
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field :value="slug" readonly label="slug"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-textarea v-model="editedItem.description" label="description"></v-textarea>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field type="price" v-model="editedItem.price " label="Price "></v-text-field>
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
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
    <v-pagination :value="page" :length="length" @input="next"></v-pagination>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

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
      { text: "Slug", value: "slug", sortable: true },
      { text: "Description", value: "description", sortable: false },
      { text: "Price", value: "price", sortable: true },
      { text: "Status", value: "status", sortable: true },
      { text: "Actions", value: "actions", sortable: false }
    ],
    editedIndex: -1,
    editedItem: {
      name: "",
      slug: "",
      description: "",
      price: "",
      status: 1
    },
    defaultItem: {
      name: "",
      slug: "",
      description: "",
      price: "",
      status: 1
    }
  }),

  computed: {
    ...mapGetters({
      getPaginatedProducts: "products/getPaginatedProducts",
      page: "products/getCurrentPage",
      length: "products/getLastPage"
    }),
    // page: {
    //   get(val) {
    //     return this.getPaginatedProducts.paginate.current_page;
    //   },
    //   set(val) {
    //     return;
    //   }
    // },
    // itemsPerPage: {
    //   get(val) {
    //     return this.getPaginatedProducts.paginate.per_page;
    //   },
    //   set(val) {
    //     return;
    //   }
    // },
    products: {
      get(val) {
        return this.getPaginatedProducts.products;
      },
      set(val) {
        return;
      }
    },
    slug() {
      return (this.editedItem.slug = this.editedItem.name.replace(/\s/g, "-"));
    },
    formTitle() {
      return this.editedIndex === -1 ? "New product" : "Edit product";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    ...mapActions({
      initialize: "products/asyncGetProducts",
      productCreate: "products/productCreate",
      productEdit: "products/productEdit",
      userDelete: "users/userDelete",
      changePage: "products/asyncChangePage"
    }),
    next(page) {
      this.$store.commit("products/SET_CURRENT_PAGE", page);
      this.changePage(page);
    },

    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      confirm("Are you sure you want to delete this item?") &&
        this.userDelete({ id: item.id });
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        this.productEdit(this.editedItem);
      } else {
        this.productCreate(this.editedItem);
      }
      this.close();
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    }
  }
};
</script>
<style scoped>
</style>>

