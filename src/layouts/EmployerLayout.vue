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
        <q-btn flat color="white " icon="person" label="Profile" to="/employer/profile" />
        <q-btn flat color="white " icon="logout" label="Log-out" to="/" />
      </q-toolbar>
    </q-header>
    <ADrawer
      v-if="$route.path == '/employer/' || $route.path == '/employer/profile' || $route.path == '/employer/applicants'"
      :drawerOpen="drawerOpen"
    />
    <MDrawer
      v-if="$route.path == '/moderator/' || $route.path == '/moderator/home'"
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
import ADrawer from 'src/components/employer_components/drawer.vue';
// import MDrawer from 'src/components/moderator_components/drawer.vue';

@Component({
  components: {ADrawer},
})
export default class EmployerLayout extends Vue {
  drawerOpen = true;

  onDrawerEvent() {
    this.drawerOpen = !this.drawerOpen;
  }
}
</script>
