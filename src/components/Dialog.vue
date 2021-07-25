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
        <q-input outlined dense v-model="job.description" label="Job Description">
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
        <q-input
          outlined
          dense
          v-model="job.salary"
          mask="################"
          label="Salary"
        >
          <template v-slot:prepend>
            <q-icon name="paid" />
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn label="Post Job" color="primary" @click="addJob()" />
        <!--
        <q-dialog v-model="confirm" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <q-avatar icon="info" color="primary" text-color="white" />
              <span class="q-ml-sm">Confirm Posting Job?</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Cancel" color="red" v-close-popup />
              <q-btn flat label="Post" color="blue" @click="addJob()" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog> -->
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import {JobDto, UserDto} from 'src/services/rest-api';
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
import {mapActions, mapState} from 'vuex';

@Component({
  computed: {
    ...mapState('user', ['user']),
  },
  methods: {
    ...mapActions('job', ['createJob']),
    ...mapActions('user', ['getProfile']),
  },
})
export default class Dialog extends Vue {
  @Prop({type: Boolean, required: false}) readonly dialogOpened!: boolean;
  @Watch('dialogOpened')
  onChange(val: boolean, oldVal: string) {
    console.log(val, oldVal);
    this.dialogValue = val;
  }

  createJob!: (payload: JobDto) => Promise<void>;
  getProfile!: () => Promise<void>;
  user!: UserDto;

  job: JobDto = {
    title: '',
    description: '',
    location: '',
    salary: '',
    status: 'pending',
    coverPhoto: '',
    datePosted: '2021-07-22',
    employerID: 1,
  };
  confirm = false;

  alert = false;
  dialogValue = false;
  model = null;

  jobOptions = [
    'Carpentry',
    'Plumber',
    'Construction Site',
    'Production Line',
    'Driving',
    'Machine Operator',
  ];
  locate = ['Marantao', , 'Marawi', 'Saguiran', 'Wato', 'Malutlut', 'Bario Green'];
  quantity = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  mounted() {
    // this.dialogValue = this.dialogOpened;
  }

  async addJob() {
    if (this.job.title == 'Carpentry') {
      this.job = {
        ...this.job,
        coverPhoto: 'carpentry.jpg',
      };
    } else if (this.job.title == 'Plumber') {
      this.job = {
        ...this.job,
        coverPhoto: 'plumber.jpeg',
      };
    }
    const res: any = await this.getProfile();
    await this.createJob({...this.job, employerID: res.id});
    this.alert = false;
    this.dialogValue = false;
  }

  hideDialog() {
    this.$emit('hideDialog', false);
  }
}
</script>

<style></style>
