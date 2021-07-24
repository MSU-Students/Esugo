<template>
  <div class="q-pa-md">
    <q-card bg-blue>
      <q-table
        title="Pending Jobs"
        :data="data"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width>Job Status</q-th>
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td
              auto-width
              class="text-center"
            >
              <q-btn
                :text-color="colorManipulation(props.row.status)"
                color="white"
                :label="labelManipulation(props.row.status)"
              >
                <q-menu anchor="center middle" self="center middle">
                  <q-list class="text-center" style="min-width: 50px">
                    <q-item
                      class="text-green"
                      clickable
                      @click="approve(props.row.id)"
                      v-close-popup
                    >
                      <q-item-section>Approve</q-item-section>
                    </q-item>
                    <q-item
                      class="text-red"
                      clickable
                      @click="disapprove(props.row.id)"
                      v-close-popup
                    >
                      <q-item-section>Disapprove</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </q-td>

            <template>
              <q-td v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.value }}
              </q-td>
            </template>
          </q-tr>
        </template>
      </q-table>
    </q-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';
import { IJob } from 'src/interfaces/job.interface2';
import { IUser } from 'src/interfaces/user.interface2';
import { JobDto } from 'src/services/rest-api';

@Component({
  computed: {
    ...mapState('job', ['jobs']),
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapActions('job', ['getAllJob', 'updateJob']),
    ...mapActions('user', ['getOneUser'])
  }
})
export default class pendingJob extends Vue {
  selectedIndex = null;
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Job Title',
      align: 'left',
      field: (row: IJob) => row.title,
      format: (val: any) => `${val}`,
      sortable: true
    },
    {
      name: 'jobdesc',
      align: 'left',
      label: 'Job Description',
      field: 'description',
      sortable: true
    },
    {
      name: 'location',
      label: 'Location',
      field: 'location',
      sortable: true,
      align: 'left'
    },
    {
      name: 'dateposted',
      label: 'Date Posted',
      field: 'datePosted',
      sortable: true,
      align: 'left'
    },
    {
      name: 'employer',
      label: 'Employer',
      field: 'employer',
      sortable: true,
      align: 'left'
    }
  ];
  jobs!: IJob[];
  data: any = [];
  user!: IUser;
  status = '';
  getAllJob!: () => Promise<JobDto>;
  getOneUser!: (id: number) => Promise<void>;
  updateJob!: (payload: any) => Promise<void>;

  async mounted() {
    await this.getAllJob();
    const jobs = this.jobs.filter(i => i.status == 'pending');
    const newJob = jobs.map((i) => {
      return {
        ...i,
        employer: i.user.firstName + ' ' + i.user.lastName
      };
    });
    this.data = newJob;
  }

  async approve(id: number) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { user, employer,  ...newJob } = this.data.find((i: any) => i.id == id);
    console.log(newJob)
    await this.updateJob({
      ...newJob,
      status: 'approved'
    });
    this.data = this.jobs.filter(i => i.status == 'pending');
  }

  async disapprove(id: number) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
     const { user, employer,  ...newJob } = this.data.find((i: any) => i.id == id);
    console.log(newJob)
    await this.updateJob({
      ...newJob,
      status: 'disapproved'
    });
    this.data = this.jobs.filter(i => i.status == 'pending');
  }

  colorManipulation(status: string) {
    if (status == 'pending') {
      return 'orange';
    } else if (status == 'disapproved') {
      return 'red';
    } else {
      return 'green';
    }
  }

  labelManipulation(status: string) {
    if (status == 'pending') {
      return 'Pending';
    } else if (status == 'disapproved') {
      return 'Disapproved';
    } else {
      return 'Approved';
    }
  }
}
</script>

<style></style>
