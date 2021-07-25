<template>
  <q-layout view="hhh LpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="onDrawerEvent" />
        <q-toolbar-title class="row items-center cursor-pointer">
          <img class="q-pl-md" src="~/assets/Esugo2.png" height="25px" />
        </q-toolbar-title>
        <div class="q-gutter-x-md">
          <q-btn flat color="white " icon="person" label="Profile" to="/worker/profile" />
          <q-btn flat color="white " icon="person" label="Log-out" @click="logout()" />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import loginService from 'src/services/login.service';
import {Vue, Component} from 'vue-property-decorator';

@Component({
  components: {},
})
export default class WorkerLayout extends Vue {
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
