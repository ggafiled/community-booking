<template>
  <div class="d-flex flex-wrap mb-3">
    <v-card class="child align-items-center d-flex justify-content-center" outlined ripple light hover>
        <div class="card-block text-center">
          <v-icon large style="color:#bdbdbd;">mdi-calendar-plus</v-icon>
          <p>Add items</p>
        </div>
    </v-card>
  </div>
</template>
<script>
export default {
  props: []
};
</script>
<style scoped>
.child {
  margin: 5px;
  height: 145px;
  min-width: 200px;
  max-width: (100 - (1 * box-width-percent)) / 4;
}
</style>
