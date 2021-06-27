<template>
  <q-layout view="hhh LpR lFf">
    
    <q-header elevated>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
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

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="250"
      :breakpoint="500"
      elevated
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section>
                Approved Accounts
              </q-item-section>
            </q-item>
             <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section>
                Pending Accounts
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="warning" />
              </q-item-section>
              <q-item-section>
                Reported Accounts
              </q-item-section>
            </q-item>


          </q-list>
        </q-scroll-area>
      </q-drawer>

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
  drawer = false;
  miniState = true;
  toggleLeftDrawer () {
        this.drawer = !this.drawer
      }
}

</script>
