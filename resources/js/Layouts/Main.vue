<template>
    <v-app>
        <NabBar app/>
        <navigationLeft app/>
        <navigationRight app/>
        <v-main class=" main-container">
            <v-container >
                <v-row>
                    <v-col align="center" justify="center">
                        <Banner/>
                    </v-col>
                </v-row>
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

.banner-container
    max-height: 240px
</style>
