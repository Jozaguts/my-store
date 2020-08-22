<template>
    <v-app>
        <NabBar app/>
        <navigationLeft app/>
        <navigationRight app/>

        <v-main class="accent">
            <div class="pa-0 py-md-12">
                <v-container fluid>
                    <Banner/>
                    <router-view></router-view>
                </v-container>
            </div>
        </v-main>

        <FooterComponent/>
    </v-app>
</template>
<script>
import FooterComponent from '../components/Footer';
import NabBar from "../components/NabBar";
import Banner from "../components/Banner";
import NavigationLeft from "../components/NavigationLeft";
import NavigationRight from "../components/NavigationRight";

export default {
    components: {
        FooterComponent,
        NabBar,
        Banner,
        NavigationLeft,
        NavigationRight
    }
};
</script>

<style>
</style>
