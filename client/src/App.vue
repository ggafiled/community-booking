<template>
  <v-layout id="layout" style="background-color:#fafafa;">
    <Sidebar />
    <router-view></router-view>
  </v-layout>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  export default {
    name: 'App',
    components: {
      Sidebar
    }
  }

</script>
<style>
  .layout {
    width: 100vw;
    height: 100vh;
  }

</style>
