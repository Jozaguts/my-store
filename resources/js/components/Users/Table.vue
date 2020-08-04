<template>
    <v-data-table :headers="headers" :items="users" sort-by="email" class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-toolbar-title>USERS</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New User</v-btn>
                    </template>
                    <ValidationObserver v-slot="{valid}" ref="form">
                        <v-stepper v-model="stepper">
                            <v-stepper-header>
                                <v-stepper-step step="1" :complete="stepper>1" editable></v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step step="2" editable></v-stepper-step>
                            </v-stepper-header>
                            <v-stepper-items>
                                <v-stepper-content step="1">
                                    <v-form>
                                        <v-container>

                                            <v-row>
                                                <v-col cols="12"><h3 class="primary--text">Main Information</h3></v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <ValidationProvider v-slot="{errors}" name="Full name"
                                                                        rules="required">
                                                        <v-text-field
                                                            v-model="editedItem.name"
                                                            label="Full Name"
                                                            :error-messages="errors"
                                                        ></v-text-field>
                                                    </ValidationProvider>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <ValidationProvider v-slot="{errors}" name="Email"
                                                                        rules="required|email">
                                                        <v-text-field
                                                            v-model="editedItem.email"
                                                            label="Email"
                                                            :error-messages="errors"
                                                        ></v-text-field>
                                                    </ValidationProvider>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <ValidationProvider
                                                        v-slot="{errors}"
                                                        name="Password"
                                                        rules="confirmed:confirmation"
                                                    >
                                                        <v-text-field
                                                            :error-messages="errors"
                                                            type="password"
                                                            v-model="editedItem.password"
                                                            label="Password"
                                                        ></v-text-field>
                                                    </ValidationProvider>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <ValidationProvider v-slot="{ errors }" vid="confirmation">
                                                        <v-text-field
                                                            type="password"
                                                            v-model="editedItem.password_confirmation "
                                                            label="Confirm Password "
                                                            :error-messages="errors"
                                                        ></v-text-field>
                                                    </ValidationProvider>
                                                </v-col>
                                                <v-col cols="12">
                                                    <div class="container-buttons d-flex justify-space-between">
                                                        <div class="main-buttons">
                                                            <v-btn color="blue darken-1" text @click="close">Cancel
                                                            </v-btn>
                                                            <v-btn color="blue darken-1"  @click="save"
                                                                   :disabled="!valid">
                                                                Save
                                                            </v-btn>
                                                        </div>
                                                        <div class="secondary-buttons">
                                                            <v-btn color="secondary-text" class="align-self-baseline"

                                                                   @click="stepper = 2">
                                                                next
                                                            </v-btn>
                                                        </div>
                                                    </div>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-form>
                                </v-stepper-content>
                                <v-stepper-content step="2">
                                    <v-form>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12"><h2 class="primary--text">Personal Information</h2>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-form>
                                </v-stepper-content>
                            </v-stepper-items>
                        </v-stepper>
                    </ValidationObserver>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.name="{item}">
            {{item.first_name}}
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
    </v-data-table>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from "vuex";

    export default {
        data: () => ({
            dialog: false,
            stepper: 1,
            headers: [
                {
                    text: "Name",
                    align: "start",
                    sortable: false,
                    value: "name"
                },
                {text: "Email", value: "email"},
                {text: "Actions", value: "actions", sortable: false}
            ],
            editedIndex: -1,
            editedItem: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            defaultItem: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            }
        }),

        computed: {
            ...mapGetters({
                users: "users/getUsers"
            }),
            formTitle() {
                return this.editedIndex === -1 ? "New User" : "Edit User";
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
                initialize: "users/asyncUsers",
                userCreate: "users/userCreate",
                userEdit: "users/userEdit",
                userDelete: "users/userDelete"
            }),

            editItem(item) {
                this.editedIndex = this.users.indexOf(item);
                this.editedItem = Object.assign({}, item);
                this.dialog = true;
            },

            deleteItem(item) {
                confirm("Are you sure you want to delete this item?") &&
                this.userDelete({id: item.id});
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
                    this.userEdit(this.editedItem).then(() => {
                        this.$refs.form.reset()
                    })
                    // Object.assign(this.users[this.editedIndex], this.editedItem);
                } else {
                    this.userCreate(this.editedItem).then(() => {
                        this.$refs.form.reset()
                    })
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

