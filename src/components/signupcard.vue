<template>
<q-card>
                    <div style="width:400px">
                      <q-input
                        dense
                        filled
                        v-model="fName"
                        label="First name *"
                        lazy-rules
                        :rules="[
                          val =>
                            (val && val.length > 0) || 'Please type something'
                        ]"
                      />
                      <q-input
                        dense
                        filled
                        v-model="mName"
                        label="Middle name *"
                        lazy-rules
                        :rules="[
                          val =>
                            (val && val.length > 0) || 'Please type something'
                        ]"
                      />
                      <q-input
                        dense
                        filled
                        v-model="lName"
                        label="Surname *"
                        lazy-rules
                        :rules="[
                          val =>
                            (val && val.length > 0) || 'Please type something'
                        ]"
                      />
                      <q-input
                        filled
                        v-model="dateofbirth"
                        mask="date"
                        label="Birth Day *"
                        :rules="[
                          val =>
                            (val && val.length > 0) || 'Please type something'
                        ]"
                      >
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-date v-model="dateofbirth">
                                <div class="row items-center justify-end">
                                  <q-btn
                                    v-close-popup
                                    label="Close"
                                    color="primary"
                                    flat
                                  />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                      <q-input
                        dense
                        filled
                        v-model="pAddress"
                        label="Permanent Address *"
                        lazy-rules
                        :rules="[
                          val =>
                            (val && val.length > 0) || 'Please type something'
                        ]"
                      />
                      <q-input
                        filled
                        dense
                        v-model="eAddress"
                        label="Email Address *"
                        lazy-rules
                        :rules="[
                          val =>
                            (val && val.length > 0) || 'Please type something'
                        ]"
                      />
                      <q-input
                        filled
                        dense
                        v-model="number"
                        label="Contact Number*"
                        lazy-rules
                        :rules="[
                          val =>
                            (val && val.length > 0) || 'Please type something'
                        ]"
                      />
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
                    </div>  
                    <q-btn class="full-width" color="primary" label="sign-up"/>  
              </q-card>        
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({})
export default class PageIndex extends Vue {
  fName = '';
  mName = '';
  lName = '';
  dateofbirth = '';
  pAddress = '';
  eAddress = '';
  number = '';
  password = '';
  isPwd = '';
}
</script>