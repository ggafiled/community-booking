<template>
  <v-container fluid>
      <p class="card-title">{{name}}</p>
      <div class="d-flex flex-wrap mb-3">
        <v-card class="child" v-for="item in document.length" :key="item" outlined ripple light hover>
          <div class="overline mb-4 mt-4 ml-4">OVERLINE</div>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-card>
      </div>
  </v-container>
</template>
<script>
  export default {
    props: ['name', 'document']
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
