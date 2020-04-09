<template>
  <v-flex style="margin:0;max-width:56px;padding:0;" v-if="this.$store.state.auth === true">
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
        <!-- <b-tooltip type="is-dark" position="is-right" :label="item.title" animated> -->
        <a>
          <router-link tag="li" :to="item.to" v-for="item in items" :key="item.title">
            <v-list-item link :class="item.to == $store.state.routePath ? 'bg-secondary text-white' : ''">
              <span link>
                <v-icon style="color:#bdbdbd;">{{ item.icon }}</v-icon>
              </span>
            </v-list-item>
          </router-link>
        </a>
        <!-- </b-tooltip> -->
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
            to: `/@${this.$store.getters.userInformation.u_name}`
          },
          {
            title: 'Calendar',
            icon: 'mdi-alarm',
            to: '/calendar'
          },
          {
            title: 'Announce',
            icon: 'mdi-card-bulleted-outline',
            to: '/announce'
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
            name: 'Root'
          }))
          .catch(err => {
            this.$router.push({
              name: 'Root'
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
