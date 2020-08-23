<template>
    <v-carousel hide-delimiters height="auto" >
        <v-carousel-item
            reverse-transition="fade-transition"
            transition="fade-transition"
        >
                <v-img  v-if="this.$vuetify.breakpoint.width >= 1024"  :src="require('../assets/img/desktopbanner.jpg')"></v-img>
            <template v-else>
                <v-img :src="require('../assets/img/mobilebanner2.jpg')"></v-img>
                <v-img :src="require('../assets/img/mobilebanner.jpg')"></v-img>
            </template>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    computed: {
        title() {
            switch (this.$route.name) {
                case "home":
                    return "My clothes store";
                    break;
                case "productsDetails":
                    return "Product details";
                    break;
                case "t-shirts":
                    return "All t-shirts";
                case "blouses":
                    return "All blouses";
                default:
                    return this.$route.name;
                    break;
            }
        },
    },

};
</script>

<style>
</style>
