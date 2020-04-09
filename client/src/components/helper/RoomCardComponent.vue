<template>
  <v-container fluid>
    <div>
      <p class="card-title mb-3 ml-2">{{name}}</p>
      <div class="d-flex flex-wrap mb-3">
        <RoomCardComponentNew/>
        <v-card class="child" v-for="item in document.length" :key="item" outlined ripple light hover>
          <div class="overline mb-4 mt-4 ml-4">OVERLINE</div>
          <v-list-item>
            <div class="justify-space-around mx-auto justify-center" style="width:100%;align-items: center;">
              <v-avatar size="36">
                <v-img src="https://randomuser.me/api/portraits/med/women/85.jpg"></v-img>
              </v-avatar>
              <v-avatar size="36">
                <v-img src="https://randomuser.me/api/portraits/med/women/85.jpg"></v-img>
              </v-avatar>
              <v-avatar size="36">
                <v-img src="https://randomuser.me/api/portraits/med/women/85.jpg"></v-img>
              </v-avatar>
            </div>
          </v-list-item>
        </v-card>
      </div>
    </div>
  </v-container>
</template>
<script>
  import RoomCardComponentNew from '@/components/helper/RoomCardComponentNew'
  export default {
    props: ['name', 'document'],
    components:{
      RoomCardComponentNew
    }
  }

</script>
<style scoped>
  .child {
    margin: 5px;
    height: 145px;
    min-width: 200px;
    max-width: (100 - (1 * box-width-percent)) / 4;
  }

</style>
