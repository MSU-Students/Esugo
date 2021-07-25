<template>
  <q-layout view="hhh LpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="onDrawerEvent" />
        <q-toolbar-title class="row items-center cursor-pointer">
          <img class="q-pl-md" src="~/assets/Esugo2.png" height="25px" />
        </q-toolbar-title>
        <div class="q-gutter-x-md">
          <q-btn
            flat
            color="white "
            icon="person"
            label="Profile"
            to="/employerProfile"
          />
          <q-btn flat color="white " icon="person" label="Log-out" to="/" />
        </div>
      </q-toolbar>
    </q-header>
    <ADrawer
      v-if="$route.path == '/admin/home' || $route.path == '/admin/accounts'"
      :drawerOpen="drawerOpen"
    />
    <MDrawer
      v-if="$route.path == '/moderator/jobs' || $route.path == '/moderator/home'"
      :drawerOpen="drawerOpen"
    />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import ADrawer from 'src/components/admin_components/drawer.vue';
import MDrawer from 'src/components/moderator_components/drawer.vue';

@Component({
  components: {MDrawer, ADrawer},
})
export default class AdminLayout extends Vue {
  drawerOpen = true;

  onDrawerEvent() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.drawerOpen = !this.drawerOpen;
  }
}
</script>
