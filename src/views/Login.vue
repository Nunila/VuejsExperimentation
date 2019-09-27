<template>
  <v-container class="container-fluid">


         <v-card class="mx-auto middle-of-screen" raised>
             <v-card-title >I'm a title</v-card-title>

              <v-card-text>I'm card text</v-card-text>
                <v-layout text-center wrap>
                <v-col>

                    <v-text-field
                    solo
                    label="Username"
                    prepend-inner-icon="mdi-account"
                  ></v-text-field>

                <v-text-field
                    solo
                    label="Password"
                    prepend-inner-icon="mdi-lock"
                  ></v-text-field>

                </v-col>
                </v-layout>

              <v-card-actions>
                  <v-btn class="ma-2" tile color="indigo" dark>Login</v-btn>
              </v-card-actions>
        </v-card>


  </v-container>
</template>

<style>

    .middle-of-screen {
        width: 60%;
        height: 50%;
        align-self: center;
        justify-self: center;
    }

</style>