<template>
  <v-app id="app">
    <v-app-bar app>
      <Sidebar />
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
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
