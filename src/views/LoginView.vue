<template>
   <v-app>
      <v-main>
         <v-container fill-height fluid>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-img src="..\src\assets\logo-horizontal.svg" max-width="200px"></v-img>
                  <v-card class="elevation-12">
                     <v-toolbar dark>
                        <v-toolbar-title>{{ isRegister ? stateObj.register.name : stateObj.login.name }}
                        </v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <form ref="form" @submit.prevent="isRegister ? register() : login()">
                           <v-text-field v-model="username" name="username" label="Username" type="text"
                              placeholder="Enter your username" required color="gray"></v-text-field>

                           <v-text-field v-model="password" name="password" label="Password" type="password"
                              placeholder="Enter your password" required color="gray"></v-text-field>

                           <v-text-field v-if="isRegister" v-model="confirmPassword" name="confirmPassword"
                              label="Confirm Password" type="password" placeholder="Confirm your password" required
                              color="gray">
                           </v-text-field>
                           <div class="red--text"> {{ errorMessage }}</div>


                           <v-btn :left="true" type="submit" value="log in">
                              {{ isRegister ?stateObj.register.name : stateObj.login.name }}
                           </v-btn>

                           <v-btn :right="true" absolute="true" text plain @click="isRegister = !isRegister;">
                              {{ toggleMessage }}
                           </v-btn>

                        </form>
                     </v-card-text>
                  </v-card>

               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
export default {
   name: "App",
   data() {
      return {
         username: "",
         password: "",
         confirmPassword: "",
         isRegister: false,
         errorMessage: "",
         stateObj: {
            register: {
               name: 'Register',
               message: 'Already have an account? Login'
            },
            login: {
               name: 'Login',
               message: 'Register'
            }
         }
      };
   },
   methods: {
      login() {
         const { username } = this;
         this.$router.replace({ name: "dashboard", params: { username: username } });
      },
      register() {
         if (this.password == this.confirmPassword) {
            this.isRegister = false;
            this.errorMessage = "";
            this.$refs.form.reset();
         }
         else {
            this.errorMessage = "Password did not match. Try again."
         }
      }
   },
   computed: {
      toggleMessage: function () {
         return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message
      }
   }
};
</script>