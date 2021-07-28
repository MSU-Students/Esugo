<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="$route.path == '/login' ? 'bg-transparent' : ''">
      <q-toolbar>
        <q-toolbar-title
          class="row items-center cursor-pointer"
          @click="$router.replace('/home')"
        >
          <img class="q-pl-md" src="~/assets/Esugo2.png" height="25px" />
        </q-toolbar-title>

        <div v-if="$route.path == '/home'" class="q-gutter-x-md">
          <q-btn flat color="white" icon="person" label="Sign-up" to="/signup" />

          <span>|</span>
          <q-btn flat color="white" icon="person" label="Log-in" to="/login" />
        </div>
        <div
          v-if="$route.path == '/review' || $route.path == '/home'"
          class="q-gutter-x-md"
        >
          <q-btn
            flat
            color="white "
            icon="person"
            label="Profile"
            to="/employerProfile"
          />
          <q-btn flat color="white " icon="logout" label="Log-out" @click="logout()" />
        </div>

        <div v-if="$route.path == '/employerProfile'" class="q-gutter-x-md">
          <q-btn flat round dense icon="logout">
            <q-menu>
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <div class="text-h6 q-mb-md">LOGOUT</div>
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="column items-center">
                  <q-avatar size="72px">
                    <img src="~/assets/employer1.jpg/" />
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs">Amjad</div>

                  <q-btn color="primary" label="Logout" size="sm" to="/home" />
                </div>
              </div>
            </q-menu>
          </q-btn>
        </div>

        <div v-if="$route.path == '/workerProfile'" class="q-gutter-x-md">
          <q-btn flat round dense icon="logout">
            <q-menu>
              <div class="row no-wrap q-pa-md">
                <!-- <div class="column">
                 <q-btn color="primary" label="Logout" size="m" to="/home" />
                  <q-btn class="p-b-xl"  color="primary" label="Profile" size="m" to="/home" />
                </div> -->

                <!-- <q-separator vertical inset class="q-mx-lg" /> -->

                <div class="column items-center">
                  <q-avatar size="72px">
                    <img src="~/assets/profilepic.jpg/" />
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs">Yassier</div>
                  <q-btn color="primary" label="Logout" size="m" to="/home" />
                </div>
              </div>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container
      :style="$route.path == '/login' ? 'padding-top: 0 !important;' : ''"
    >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import loginService from 'src/services/login.service';
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  signup = false;

  async logout() {
    await loginService.logoutUser();
    await this.$router.replace('/home');
  }
}
</script>
