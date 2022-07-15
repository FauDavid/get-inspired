
<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        playMusic() {
            //TODO: Play music
        },
    },
}
</script>

<template>
    <v-container fill-height fluid>
        <v-row align="center" justify="center">
            <v-col class="d-flex justify-center align-center">
                <v-card dark max-width="400">
                    <v-list-item>
                        <v-row align="center" justify="end">
                            <v-btn icon @click="playMusic">
                                <v-icon icon>
                                    mdi-play
                                </v-icon>
                            </v-btn>
                        </v-row>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
