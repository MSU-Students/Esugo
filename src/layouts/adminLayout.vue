<template>
  <q-layout view="hhh LpR lFf">
    <q-header :class="$route.path == '/login' ? 'bg-transparent' : ''">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="onDrawerEvent" />
        <q-toolbar-title
          class="row items-center cursor-pointer"
          @click="$router.replace('/')"
        >
          <img class="q-pl-md" src="~/assets/Esugo2.png" height="25px" />
        </q-toolbar-title>
        <q-btn flat color="white " icon="person" label="Profile" to="/employerProfile" />
        <q-btn flat color="white " icon="logout" label="Log-out" @click="logout()" />
      </q-toolbar>
    </q-header>
    <AdminDrawer
      v-if="$route.path == '/admin/' || $route.path == '/admin/accounts'"
      :drawerOpen="drawerOpen"
    />
    <q-page-container
      :style="$route.path == '/login' ? 'padding-top: 0 !important;' : ''"
    >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import AdminDrawer from 'src/components/admin_components/drawer.vue';
import loginService from 'src/services/login.service';

@Component({
  components: {AdminDrawer},
})
export default class AdminLayout extends Vue {
  drawerOpen = true;

  onDrawerEvent() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.drawerOpen = !this.drawerOpen;
  }

  async logout() {
    await loginService.logoutUser();
    await this.$router.replace('/');
  }
}
</script>
