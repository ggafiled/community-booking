<template>
  <div class="layout">
    <Sidebar />
    <router-view></router-view>
  </div>
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
    background-color: #fafafa;
    min-width: 100vw;
    min-height: 100vh;
  }

</style>
