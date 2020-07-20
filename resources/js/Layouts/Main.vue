<template>
    <v-app>
        <NabBar/>
        <navigationLeft/>
        <navigationRight/>
        <v-main>
            <v-container fluid>
                <Banner/>
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

<style>
</style>
