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
              v-if="props.row.jobstatus == 'pending'"      
              auto-width
              class="text-center"
            >
              <q-btn
                :text-color="colorManipulation(props.row.jobstatus)"
                color="white"
                :label="labelManipulation(props.row.jobstatus)"
              >
                <q-menu anchor="center middle" self="center middle">
                  <q-list class="text-center" style="min-width: 50px">
                    <q-item
                      class="text-green"
                      clickable
                      @click="approve(props.rowIndex)"
                      v-close-popup
                    >
                      <q-item-section>Approve</q-item-section>
                    </q-item>
                    <q-item
                      class="text-red"
                      clickable
                      @click="disapprove(props.rowIndex)"
                      v-close-popup
                    >
                      <q-item-section>Disapprove</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </q-td>

            <template v-if="props.row.jobstatus == 'pending'">
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
import { IJob } from 'src/interfaces/job.interface';

@Component({
  computed: {
    ...mapState('job', ['jobs'])
  },
  methods: {
    ...mapActions('job', ['getAllJob', 'updateJob'])
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
      field: (row: IJob) => row.jobtitle,
      format: (val: any) => `${val}`,
      sortable: true
    },
    {
      name: 'jobdesc',
      align: 'left',
      label: 'Job Description',
      field: 'jobdesc',
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
      field: 'dateposted',
      sortable: true,
      align: 'left'
    },
  ];
  jobs!: IJob[];
  data: IJob[] = [];
  status = '';
  getAllJob!: () => Promise<void>;
  updateJob!: (payload: any) => Promise<void>;

  async mounted() {
    await this.getAllJob();
    console.log(this.jobs);
    this.data = this.jobs;
  }

  async approve(id: number) {
    console.log(id);
    await this.updateJob({
      ...this.jobs[id],
      jobstatus: 'approved'
    });
    this.data = this.jobs;
  }

  async disapprove(id: any) {
    await this.updateJob({
      ...this.jobs[id],
      jobstatus:'disapproved'
    });
    this.data = this.jobs;
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
