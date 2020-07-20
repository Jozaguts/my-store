<template>
    <v-container class="main-container">
        <v-row justify="center">
            <v-col align="center">
                <header>
                    <h1>Login</h1>
                </header>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" align="center">
                <ValidationObserver v-slot="valid">
                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <ValidationProvider v-slot="{ errors }" name="Email" rules="required">
                                        <v-text-field
                                            type="text"
                                            name="Email"
                                            label="Email"
                                            :error-messages="errors"
                                            v-model="credentials.email"
                                        ></v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12">
                                    <ValidationProvider v-slot="{ errors }" name="password" rules="required">
                                        <v-text-field
                                            type="password"
                                            name="Password"
                                            label="Password"
                                            :error-messages="errors"
                                            v-model="credentials.password"
                                        ></v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn
                                        color="primary"
                                        :block="true"
                                        height="50"
                                        :loading="loading"
                                        @click="login(credentials)"
                                        :disabled="!valid"
                                    >Login
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </ValidationObserver>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col align="center">
                <small class="text-capitalize font-weight-bold">
                    user:
                    <span class="text-lowercase font-weight-light">admin@mystore.com</span>
                </small>
                <small class="text-capitalize font-weight-bold">
                    password:
                    <span class="text-lowercase font-weight-light">password</span>
                </small>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import {mapActions} from "vuex";

    export default {
        data() {
            return {
                credentials: {
                    email: null,
                    password: null
                },

            };
        },
        computed: {
            loading() {
                return this.$store.getters['global/getLoadingStatus'];
            }
        },
        methods: {
            login(credentials) {
                this.$store.dispatch("auth/login", credentials);
            }
        },
        created() {
            this.$store.commit("global/SET_LAYOUT", "AdminLayout");
        }
    };
</script>
<style scoped>
    .main-container {
        max-width: 600px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
