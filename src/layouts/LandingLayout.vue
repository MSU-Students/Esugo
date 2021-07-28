<template>
  <q-layout view="hhH LpR lFf">
    <q-header elevated class="backdrop-filter" style="background-color: #c947478f">
      <q-toolbar>
        <q-toolbar-title
          class="row items-center cursor-pointer"
          @click="$router.replace('/home')"
        >
          <img class="q-pl-md" src="~/assets/Esugo2.png" height="25px" />
        </q-toolbar-title>
        <q-space />
        <div class="q-gutter-x-md">
          <q-btn
            color="white"
            text-color="primary"
            label="Sign Up"
            to="signup"
            style="width: 150px"
            push
          />
          <q-btn
            color="white"
            text-color="primary"
            label="Login"
            to="/login"
            style="width: 150px"
            push
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container style="padding-top: 0 !important">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class EmployerLayout extends Vue {}
</script>

<style scoped>
.backdrop-filter {
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  background-color: #fe7a1500;
}
</style>
