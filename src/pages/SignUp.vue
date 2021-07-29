<template>
  <div class="row">
    <div class="col-8">
      <q-page :style="colorManipulation(tab)" class="flex flex-center">
        <div class="q-pa-md">
          <q-tabs
            v-model="tab"
            content-class="text-white"
            indicator-color="grey-9"
            dense
            no-caps
            inline-label
          >
            <q-tab name="worker" icon="person" label="Signup as Worker" />
            <q-tab name="employer" icon="person" label="Signup as Employer" />
          </q-tabs>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="worker">
              <Card name="worker" />
            </q-tab-panel>
            <q-tab-panel name="employer">
              <Card name="employer" />
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </q-page>
    </div>
    <div class="col-4 flex flex-center q-pa-xl">
      <q-img :src="require(`../assets/photos/${imageManipulation(tab)}`)"> </q-img>
      <div
        class="text-h2 text-weight-bolder text-uppercase"
        :class="tab == 'worker' ? 'text-blue-3' : 'text-pink-3'"
      >
        {{ tab }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Card from 'src/components/signupcard.vue';
@Component({
  components: {
    Card,
  },
})
export default class PageIndex extends Vue {
  step = 1;
  fName = '';
  mName = '';
  lName = '';
  dateofbirth = '';
  pAddress = '';
  eAddress = '';
  number = '';
  password = '';
  isPwd = '';
  tab = 'worker';

  colorManipulation(tab: string) {
    if (tab == 'worker') {
      return 'background: linear-gradient(to bottom left, #0066eb 0%, #ff8ab3 100%);';
    } else {
      return 'background: linear-gradient(to bottom, #238ffb 29%, #ffffff 100%);';
    }
  }
  imageManipulation(tab: string) {
    if (tab == 'worker') {
      return 'photo10.svg';
    } else {
      return 'photo11.svg';
    }
  }
}
</script>

<style scoped>
.backdrop-filter {
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  background-color: #ffffff23;
}
</style>
