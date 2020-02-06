<template>
  <v-container>
    <Sidebar />
    <v-content>
      <v-container fluid style="color:#fafafa;">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-container>
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
