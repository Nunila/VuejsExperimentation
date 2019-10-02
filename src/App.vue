<template>
  <v-app>
    <v-content class="background">

      <router-view></router-view>
    </v-content>
  </v-app>
</template>


<style>
  .background {
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(74,186,58,1) 0%, rgba(81,207,159,1) 100%);
    }
</style>

<!--<script>-->
<!--import HelloWorld from './components/HelloWorld';-->

<!--export default {-->
  <!--name: 'App',-->
  <!--components: {-->
    <!--HelloWorld,-->
  <!--},-->
  <!--data: () => ({-->
    <!--//-->
  <!--}),-->
<!--};-->
<!--</script>-->
