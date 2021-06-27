<template>
  <q-layout view="lHh Lpr lFf">
    
    <q-header :class="$route.path == '/login' ? 'bg-transparent' : ''">
      <q-toolbar>
         <q-toolbar-title class="row items-center cursor-pointer" @click="$router.replace('/')">
        <img class="q-pl-md" src="~/assets/Esugo2.png" height="25px" />
        </q-toolbar-title>

       <div v-if="$route.path == '/'" class="q-gutter-x-md">
        <q-btn flat color="white" 
        icon = person
        label="Sign-up" to="/signup" />
        <span>|</span>
        <q-btn flat color="white" 
        icon = person
        label="Log-in" to="/login" />
      </div>
      <div v-if="$route.path == '/review' || $route.path == '/home'" class="q-gutter-x-md">
         <q-btn flat color="white " 
        icon = person
        label="Log-out" to="/"/>
      </div>
      </q-toolbar>
      
    </q-header>
    <q-page-container :style="$route.path == '/login' ? 'padding-top: 0 !important;' : ''">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
 
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
}
</script>
