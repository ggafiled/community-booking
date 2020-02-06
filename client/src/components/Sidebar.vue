<template>
  <v-navigation-drawer stateless mini-variant-width="60" mini-variant="true" permanent height="100%" hide-overlay fixed>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://miro.medium.com/fit/c/210/210/1*cpAB54ovIg7HQ3OTXZkSmA.jpeg"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-tooltip right>
          <template slot="activator">
            <v-list-item-icon>
              <v-icon style="color:#bdbdbd;">{{ item.icon }}</v-icon>
            </v-list-item-icon>
          </template>
          <span>{{ item.title }}</span>
        </v-tooltip>
      </v-list-item>
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

</style>
