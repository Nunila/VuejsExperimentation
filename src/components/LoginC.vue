<template>
    <v-layout text-center wrap>

        <v-card class="mx-auto middle-of-screen" raised>
         <!--<v-img  src="../assets/LogosRumboEx/MyStudyCoach.png"></v-img>-->
             <v-card-title class="justify-center">Login</v-card-title>
              <v-card-text>Please login with your credentials.</v-card-text>
                <v-layout text-center wrap>
                <v-col>
                    <v-form>
                        <v-text-field
                            solo v-model="user.username"
                            label="Username"
                            prepend-inner-icon="mdi-account"
                          ></v-text-field>

                        <v-text-field
                            solo v-model="user.password"
                            label="Password"
                            :type="'password'"
                            prepend-inner-icon="mdi-lock"
                          ></v-text-field>
                    </v-form>

                </v-col>
                </v-layout>

              <v-card-actions class="justify-center">
                  <v-btn large class="ma-2" tile color="indigo" v-on:click="login" dark>Login</v-btn>
              </v-card-actions>
        </v-card>

    </v-layout>
</template>

<script>
    import * as flask from '../services/connectivity';
    import authService from '../services/auth';
    export default {
        name: "LoginC",
        data: function() {
            return {
                user : {
                    username: '',
                    password: ''
                }
            }
        },

        methods: {

            login: function() {
                const url = flask.FLASK_URL + '/studentlogin'

                authService(this.user, url).
                    then(result => {
                        console.log("RESULT: " + JSON.stringify(result));
                        this.$store.commit('setProfile', result);
                        //this.$store.commit('setLogin');
                        this.$router.push('/logged')
                        console.log("this is: " + this.$store.getters.userProfile);
                }).catch(er => {
                    console.log("login error: ", er)
                });
            }
        },

    }
</script>

<style>

    .middle-of-screen {
        width: 60%;
        height: 70%;
        align-self: center;
        justify-self: center;
    }

</style>


