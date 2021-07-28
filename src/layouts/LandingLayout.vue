<template>
  <q-layout view="hhh LpR lFf">
    <q-header elevated>
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
            icon-right="how_to_reg"
            label="SIgnup"
            to="signup"
          />
          <q-btn
            color="white"
            text-color="primary"
            icon-right="login"
            label="Login"
            to="/login"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class EmployerLayout extends Vue {}
</script>
