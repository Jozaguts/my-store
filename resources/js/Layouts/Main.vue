<template>
    <v-app>
        <NabBar app/>
        <navigationLeft app/>
        <navigationRight app/>
        <v-main class="accent main-container">
            <v-container fluid>
                <div class="pa-0 pa-md-12">
                    <Banner/>
                </div>
                <router-view></router-view>
            </v-container>
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

<style lang="sass">
.main-container
    padding-top: 116px !important
    min-height: 100vh
</style>
