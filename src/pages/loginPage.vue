<template>
  <q-page   style="background: linear-gradient(to bottom, #238ffb 29%,#FF8AB3 40%, #ffffff 100%);" 
  class="flex flex-center">
    <div>
      <q-card class="my-card no-shadow">
        <div class="pic-text absolute-bottom-left text-white q-gutter-xl"></div>
      </q-card>
    </div>x

    <div class="col-4">
      <q-card-section class="q-pa-xl  " >
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
            filled
            :type="isPwd ? 'password' : 'text'"
            label="Password"
            standout="bg-white text-primary"
          >
          <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
          </template>
         </q-input>
            <q-checkbox size="xs" v-model="val" label = " I have read and accepted the User Notice and Privacy"/>
          <q-btn class="full-width" color="primary" label="Login" to = "/home" />
        </div>
      </q-card-section>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({})
export default class PageIndex extends Vue {
  val = false; 
  username = '';
  password = '';
  signup = '';
  isPwd = true;
}
</script>
<style scoped>
.pic-text {
  padding-bottom: 120px;
  padding-left: 50px;
}
</style>
