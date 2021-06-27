<template>
<q-drawer
      v-model="drawer"
      show-if-above
      :mini='miniState'
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
</template>]
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({
})
export default class MainLayout extends Vue {
  drawer = false;
  miniState = true;
}
</script>