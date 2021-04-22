<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item exact @click="logout">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Log out'" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="primary">
      <v-app-bar-nav-icon
        v-show="$auth.loggedIn"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title class="white--text" v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main class="grey lighten-5">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Index',
          to: '/',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Inspect & Trace Dojo',
    }
  },

  methods: {
    logout() {
      this.drawer = false
      this.$router.push('/login')
      this.$auth.logout()
    },
  },
}
</script>
