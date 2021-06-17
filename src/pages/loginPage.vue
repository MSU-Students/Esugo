<template>
  <q-page   style="background: linear-gradient(to bottom, #238ffb 29%, #ffffff 100%);" 
  class="flex flex-center">
    <div>
      <q-card class="my-card no-shadow">
        <div class="pic-text absolute-bottom-left text-white q-gutter-xl"></div>
      </q-card>
    </div>

    <div class="col-4">
      <q-card-section class="q-pa-xl">
        <div class="text-center">
          <img src="~/assets/ESUGO.png" width="370px" />
        </div>
        <h5 class="text-weight-bolder text-center text-white" >
          Sign in to your account
        </h5>
        <div class="q-gutter-md">
          <q-input outlined v-model="username" label="Username" standout="bg-white text-primary"/>
          <q-input
            color="blue-9"
            outlined
            v-model="password"
            type="password"
            label="Password"
            standout="bg-white text-primary"
          />
            
            <q-checkbox size="xs" v-model="val" label = " By signing up, you confirm that you've read and accepted our User
            Notice and Privacy"/>
          

          <q-btn class="full-width" color="primary" label="Login" to = "/" />
        </div>
      </q-card-section>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({})
export default class PageIndex extends Vue {
  val = true;
  username = '';
  password = '';
  signup = '';
}
</script>
<style scoped>
.pic-text {
  padding-bottom: 120px;
  padding-left: 50px;
}
</style>
