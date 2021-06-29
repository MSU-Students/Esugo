<template>
  <q-layout view="hhh LpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="onDrawerEvent"/>
         <q-toolbar-title class="row items-center cursor-pointer">
        <img class="q-pl-md" src="~/assets/Esugo2.png" height="25px" />
        </q-toolbar-title>
      <div class="q-gutter-x-md">
         <q-btn flat color="white " 
        icon = person
        label="Log-out" to="/"/>
      </div>
      </q-toolbar>
    </q-header>
    <ADrawer v-if="$route.path == '/admins/accounts'" :drawerOpen="drawerOpen"/>
    <MDrawer v-if="$route.path == '/admins/jobs'" :drawerOpen="drawerOpen"/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ADrawer from 'components/admin_components/drawer.vue';
import MDrawer from 'components/moderator_components/drawer.vue';


export default {
  name: 'Mainlayout',
  components: { MDrawer,ADrawer },
  data() {
    return {
      drawerOpen: true,
    };
  },
  methods: {
    onDrawerEvent(value) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.drawerOpen = value;
    },
  },
};
</script>
