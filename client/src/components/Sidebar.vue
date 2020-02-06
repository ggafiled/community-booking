<template>
  <v-navigation-drawer stateless mini-variant-width="60" mini-variant="true" permanent height="100%" fixed>
    <v-list-item class="px-2">
      <b-tooltip type="is-dark" position="is-right" label="Your profile" animated delay="100" style="position:fixed;">
      <v-list-item-avatar>
        <v-img src="https://miro.medium.com/fit/c/210/210/1*cpAB54ovIg7HQ3OTXZkSmA.jpeg"></v-img>
      </v-list-item-avatar>
      </b-tooltip>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item link v-for="item in items" :key="item.title" >
      <b-tooltip  type="is-dark" position="is-right" :label="item.title" animated delay="100">
        <v-span link>
            <v-icon style="color:#bdbdbd;">{{ item.icon }}</v-icon>
        </v-span>
      </b-tooltip>
      </v-list-item >
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
            title: 'Home',
            icon: 'mdi-home-city'
          },
          {
            title: 'My Account',
            icon: 'mdi-account'
          },
          {
            title: 'Users',
            icon: 'mdi-account-group-outline'
          },
        ]
      }
    },
  }

</script>
<style scoped>
  * {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }
  b-tooltip {
    position: fixed;
  }
</style>
