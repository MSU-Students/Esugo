<template>
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
        <q-item clickable to="/moderator/" v-ripple>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section> Home </q-item-section>
        </q-item>
        <q-item clickable to="/moderator/jobs" v-ripple>
          <q-item-section avatar>
            <q-icon name="work" />
          </q-item-section>
          <q-item-section> Jobs </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class MainLayout extends Vue {
  drawer = false;
  miniState = true;
}
</script>
