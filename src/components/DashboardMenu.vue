<script>
import TopToolbar from './TopToolbar.vue';
import BottomNav from './BottomNav.vue';
export default {
    components: {
        TopToolbar, BottomNav
    },
    data() {
        return {
            items: [
                { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                { title: 'Photos', icon: 'mdi-image' },
                { title: 'About', icon: 'mdi-help-box' },
            ],
            username: this.$route.params.username
        }
    },
    mounted() {
        this.$router.replace({ name: 'home' })
    },
    methods: {
        logout() {
            this.$router.replace({ name: 'login' })
        }
    }
}
</script>

<template>
    <v-app>
        <TopToolbar></TopToolbar>
        <v-main>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </v-main>
        <BottomNav></BottomNav>
    </v-app>
</template>