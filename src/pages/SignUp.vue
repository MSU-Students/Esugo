<template>
  <div class="q-pa-md">
    <q-btn
      label="Reset"
      push
      color="white"
      text-color="primary"
      @click="step = 1"
      class="q-mb-md"
    />

    <q-stepper v-model="step" header-nav ref="stepper" color="primary" animated>
      <!-- <q-step
        :name="1"
        title="Select campaign settings"
        icon="settings"
        :done="step > 1"
        :header-nav="step > 1"
      >
        For each ad campaign that you create, you can control how much you're willing to
        spend on clicks and conversions, which networks and geographical locations you want
        your ads to show on, and more.

        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step> -->
      <q-step
        :name="1"
        title="Personal Information"
        icon="settings"
        :done="step > 1"
        :header-nav="step > 1"
      >
        <div class="row">
          <div class="col">
            <div style="width:400px">
              <q-input
                dense
                filled
                v-model="fName"
                label="First name *"
                hint="Given Name"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />

              <q-input
                dense
                filled
                v-model="mName"
                label="Middle name *"
                hint="Middle name"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />

              <q-input
                dense
                filled
                v-model="lName"
                label="Surname *"
                hint="Surname"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />
              <q-input
                dense
                filled
                type="number"
                v-model="age"
                label="Your age *"
                lazy-rules
                :rules="[
                  val =>
                    (val !== null && val !== '') || 'Please type your agee',

                  val =>
                    (val > 17 && val < 100) ||
                    'Please type a real age or you are under ag'
                ]"
              />
              <q-input
                dense
                filled
                v-model="pAddress"
                label="Permanent Address *"
                hint="Address"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />
              <q-input
                filled
                dense
                v-model="eAddress"
                label="Email Address *"
                hint="Electronic Mailing Address"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />
              <q-input
                filled
                dense
                v-model="number"
                label="Contact Number*"
                hint="Mobile Number"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />
            </div>
          </div>
        </div>
        <div class="row"></div>

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done1 = true;
                step = 2;
              }
            "
            color="primary"
            label="Continue"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Skill set"
        caption="Optional"
        icon="Github_Outlined"
        :done="step > 2"
        :header-nav="step > 2"
      >
        An ad group contains one or more ads which target a shared set of
        keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done2 = true;
                step = 3;
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn
            flat
            @click="step = 1"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Finish"
        icon="add_comment"
        :header-nav="step > 3"
      >
        Try out different ad text to see what brings in the most customers, and
        learn how to enhance your ads using features like ad extensions. If you
        run into any problems with your ads, find out how to tell if they're
        running and how to resolve approval issues.

        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="Finish" />
          <q-btn
            flat
            @click="step = 2"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class PageIndex extends Vue {
  step: number = 1;
  fName: string = '';
  mName: string = '';
  lName: string = '';
  age: string = '';
  pAddress: string = '';
  eAddress: string = '';
  number: number = 1;

  //  addStudebt(): void {
  //  }
}
</script>

<style></style>
