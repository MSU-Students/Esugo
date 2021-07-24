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
          v-model="job.title"
          :options="jobOptions"
          label="Job Title"
        >
          <template v-slot:prepend>
            <q-icon name="work" />
          </template>
        </q-select>
        <q-input
          outlined
          dense
          v-model="job.description"
          label="Job Description"
        >
          <template v-slot:prepend>
            <q-icon name="description" />
          </template>
        </q-input>
        <q-select
          outlined
          dense
          v-model="job.location"
          :options="locate"
          label="Job Location"
        >
          <template v-slot:prepend>
            <q-icon name="location_on" />
          </template>
        </q-select>
        <q-input outlined dense v-model="job.salary" label="Salary">
          <template v-slot:prepend>
            <q-icon name="paid" />
          </template>
        </q-input>
        <!-- <q-select
          outlined
          dense
          v-model="hire"
          :options="quantity"
          label="How many hires?"
        >
          <template v-slot:prepend>
            <q-icon name="attribution" />
          </template>
        </q-select> -->
      </q-card-section>

      <q-card-actions align="center">
        <q-btn label="Post Job" color="primary" @click="addJob()" />

        <q-dialog v-model="alert">
          <q-card>
            <q-card-section>
              <div class="text-h6">
                Job is waiting to be approved by the moderator
              </div>
            </q-card-section>

            <!-- <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
              perferendis totam, ea at omnis vel numquam exercitationem aut,
              natus minima, porro labore.
            </q-card-section> -->

            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary"   />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { JobDto } from 'src/services/rest-api';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  methods: {
    ...mapActions('job', ['createJob'])
  }
})
export default class Dialog extends Vue {
  @Prop({ type: Boolean, required: true }) readonly dialogOpened!: boolean;
  @Watch('dialogOpened')
  onChange(val: boolean, oldVal: string) {
    console.log(val, oldVal);
    this.dialogValue = val;
  }

  createJob!: (payload: JobDto) => Promise<void>;

  job: JobDto = {
    title: '',
    description: '',
    location: '',
    salary: '',
    status: 'pending',
    coverPhoto: '',
    datePosted: '2021-07-22',
   employerID: 1
  };

  alert = false;
  dialogValue = true;
  model = null;

  jobOptions = [
    'Carpentry',
    'Plumber',
    'Construction Site',
    'Production Line',
    'Driving',
    'Machine Operator'
  ];
  locate = ['Marantao',, 'Marawi', 'Saguiran', 'Wato', 'Malutlut', 'Bario Green'];
  quantity = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  mounted() {
    // this.dialogValue = this.dialogOpened;
  }

  async addJob() {
    if (this.job.title == 'Carpentry') {
      this.job = {
        ...this.job,
        coverPhoto: 'carpentry.jpg'
      };
    }
    await this.createJob(this.job);
    this.alert = false;
  }

  hideDialog() {
    this.$emit('hideDialog', false);
  }
}
</script>

<style></style>
