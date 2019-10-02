<template>
  <v-container>
    <v-layout text-center wrap>


      <h1>Welcome {{employeeName}} !!</h1>


    </v-layout>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
      name: 'HomeC',

      data: function() {
        return {
          employeeName: 'yo'
        }
      },
      computed: {
        ...mapGetters(["userProfile"])
      },
    mounted() {
      var profile = this.$store.getters.userProfile;
      this.employeeName = profile.username
    }
  };
</script>
