<template>
    <v-carousel hide-delimiters height="auto">
        <v-carousel-item
            reverse-transition="fade-transition"
            transition="fade-transition"
            v-for="(img, i) in images"
            :key="i"
        >
<!--            <template v-if="this.$vuetify.breakpoint.width >= 1024" contain>-->
                <v-img width="auto" class="rounded " contain :src="img.src"></v-img>
<!--                <v-img width="auto" class="rounded" contain :src="require('../assets/img/mobileBanner.png')"></v-img>-->
<!--            </template>-->
<!--            <template v-else>-->
<!--                <v-img width="340" class="rounded " contain :src="require('../assets/img/mobileBanner2.png')"></v-img>-->
<!--                <v-img width="340" class="rounded" contain :src="require('../assets/img/mobileBanner.png')"></v-img>-->
<!--            </template>-->
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data: function () {
        return {
            images: [
                {
                    src: require('../assets/img/mobileBanner.png')
                },
                {
                    src: require('../assets/img/mobileBanner2.png')
                },
            ]
        }
    },
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
