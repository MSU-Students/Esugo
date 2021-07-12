<template>
  <q-dialog v-model="dialogValue" @hide="hideDialog()">
    <q-card style="width: 560px">
      <q-toolbar>
        <q-toolbar-title>
          <span class="text-weight-bold">Post</span> Job
        </q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section class="q-gutter-sm">
        <q-select
          outlined
          dense
          v-model="jobTitle"
          :options="jobs"
          label="Job Title"
        >
          <template v-slot:prepend>
            <q-icon name="work" />
          </template>
        </q-select>
        <q-input outlined dense v-model="jobDesc" label="Job Description">
          <template v-slot:prepend>
            <q-icon name="description" />
          </template>
        </q-input>
        <q-select
          outlined
          dense
          v-model="location"
          :options="locate"
          label="Job Location"
        >
          <template v-slot:prepend>
            <q-icon name="location_on" />
          </template>
        </q-select>
        <q-input outlined dense v-model="salary" label="Salary">
          <template v-slot:prepend>
            <q-icon name="paid" />
          </template>
        </q-input>
        <q-select
          outlined
          dense
          v-model="hire"
          :options="quantity"
          label="How many hires?"
        >
          <template v-slot:prepend>
            <q-icon name="attribution" />
          </template>
        </q-select>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn label="Post Job" color="primary" @click="alert = true" />

        <q-dialog v-model="alert">
          <q-card>
            <q-card-section>
              <div class="text-h6">Job Posted Successfully</div>
            </q-card-section>

            <!-- <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
              perferendis totam, ea at omnis vel numquam exercitationem aut,
              natus minima, porro labore.
            </q-card-section> -->

            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'Dialog',
  props: ['dialogOpened'],
  data() {
    return {
      jobTitle: '',
      salary: '',
      jobDesc: '',
      location: '',
      hire: '',
      alert: false,
      dialogValue: true,
      model: null,

      jobs: [
        'Plumber',
        'Construction Site',
        'Production Line',
        'Driving',
        'Machine Operator'
      ],
      locate: ['Marantao', 'Saguiran', 'Wato', 'Malutlut', 'Bario Green'],
      quantity: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    };
  },
  watch: {
    dialogOpened(value) {
      console.log(value);
      this.dialogValue = value;
    }
  },
  mounted() {
    this.dialogValue = this.dialogOpened;
  },
  methods: {
    hideDialog() {
      this.$emit('hideDialog', false);
    }
  }
};
</script>

<style></style>
