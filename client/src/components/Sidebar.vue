<template>
  <v-flex style="margin:0;max-width:56px;padding:0;" v-if="this.$store.getters.isLoggedIn">
    <v-navigation-drawer id="navigation-drawer" clipped mini-variant-width="60" permanent>
      <v-list-item class="px-2">
        <!-- <b-tooltip type="is-dark" position="is-right" label="Your profile" animated style="position:fixed;"> -->
        <v-list-item-avatar>
          <v-img :src="userInformation.u_imgUrl"></v-img>
        </v-list-item-avatar>
        <!-- </b-tooltip> -->
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item link v-for="item in items" :key="item.title">
          <!-- <b-tooltip type="is-dark" position="is-right" :label="item.title" animated> -->
          <a>
            <router-link tag="li" :to="item.to">
              <span link>
                <v-icon style="color:#bdbdbd;">{{ item.icon }}</v-icon>
              </span>
            </router-link>
          </a>
          <!-- </b-tooltip> -->
        </v-list-item>
        <v-list-item @click="logout">
          <span link>
            <v-icon style="color:#bdbdbd;">mdi-logout-variant</v-icon>
          </span>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-flex>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
            title: 'Home',
            icon: 'mdi-home-city',
            to: '/home'
          },
          {
            title: 'Calendar',
            icon: 'mdi-alarm',
            to: '/calendar'
          },
          {
            title: 'My Account',
            icon: 'mdi-account',
            to: '/'
          },
          {
            title: 'Users',
            icon: 'mdi-account-group-outline',
            to: '/'
          }
        ],
        userInformation: {
          u_imgUrl: this.$store.getters.userInformation.u_imgUrl ||
            'https://pickaface.net/gallery/avatar/20140501_004912_2217_comm.png'
        }
      }
    },
    methods: {
      logout: function () {
        this.$store
          .dispatch("logout")
          .then(() => this.$router.push({
            name: 'Home'
          }))
          .catch(err => {
            this.$router.push({
              name: 'Home'
            })
            console.log(err)
          });
      }
    },
    
  }
</script>
<style scoped>
  * {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }

  li,
  a {
    text-decoration: none;
    list-style-type: none;
  }

  #navigation-drawer {
    height: 100%;
  }

</style>
