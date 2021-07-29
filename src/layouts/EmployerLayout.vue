<template>
  <q-layout view="hhh LpR lFf">
    <q-header :class="$route.path == '/login' ? 'bg-transparent' : ''">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="onDrawerEvent" />
        <q-toolbar-title
          class="row items-center cursor-pointer"

        >
          <img class="q-pl-md" src="~/assets/Esugo2.png" height="25px" />
        </q-toolbar-title>

        <q-btn v-if="$route.path == '/employer/applicants' || $route.path == '/employer/' " flat color="white " icon="person" label="Profile" to="/employer/profile" />
        <q-btn v-if="$route.path == '/employer/profile'" flat color="white " icon="person" label="home" to="/employer/" />
        <q-btn flat color="white " icon="logout" label="Log-out" @click="logout()" />
      </q-toolbar>
    </q-header>
    <EmployerDrawer
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
import EmployerDrawer from 'src/components/employer_components/drawer.vue';
import loginService from 'src/services/login.service';

@Component({
  components: {EmployerDrawer},
})
export default class EmployerLayout extends Vue {
  drawerOpen = true;

  onDrawerEvent() {
    this.drawerOpen = !this.drawerOpen;
  }

  async logout() {
    await loginService.logoutUser();
    await this.$router.replace('/home');
  }
}
</script>
