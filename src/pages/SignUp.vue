<template>
  <div class="row">
    <div class="col-8">
      <q-page :style="colorManipulation(tab)" class="flex flex-center">
        <div class="q-pa-md">
          <q-tabs
            v-model="tab"
            dense
            no-caps
            inline-label
            class=" text-primary bg-white shadow-2 __border-radius"
          >
            <q-tab name="worker" icon="person" label="Signup as Worker" />
            <q-tab
              name="employer"
              icon="person"
              label="Signup as Employer"
            />
          </q-tabs>
          <q-tab-panels class="backdrop-filter" v-model="tab" animated>
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
    <div class="col-4">
      <q-img :src="imageManipulation(tab)" style="max-width: 800px; height: 600px;" />
    </div>  
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Card from 'src/components/signupcard.vue';
@Component({
  components: {
    Card
  }
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
      return 'background: linear-gradient(to bottom, #ffffff 5%, #238ffb 100%);';
    } else {
      return 'background: linear-gradient(to bottom, #238ffb 29%, #ffffff 100%);';
    }
  }
   imageManipulation(tab: string) {
    if (tab == 'worker') {
      return '~assets/bg2.jpg';
    } else {
      return '~assets/bg.jpg';
    }
  }
}
</script>

<style scoped>

.backdrop-filter{
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  background-color: #ffffff23 ;
}

</style>
