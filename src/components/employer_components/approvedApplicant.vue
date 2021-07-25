<template>
  <div class="q-pa-md">
    <q-card bg-blue>
      <q-table
        title="Job Applied"
        :data="data"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width>Job status</q-th>
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width class="text-center">
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
                      @click="complete(props.row.id)"
                      v-close-popup
                    >
                      <q-item-section>Done</q-item-section>
                    </q-item>
                    <q-item
                      class="text-red"
                      clickable
                      @click="cancelled(props.row.id)"
                      v-close-popup
                    >
                      <q-item-section>Cancel</q-item-section>
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

@Component({
  computed: {
    ...mapState('application', ['applications'])
  },
  methods: {
    ...mapActions('application', ['getAllApplication', 'updateApplication'])
  }
})
export default class pendingApplicants extends Vue {
  selectedIndex = null;
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Applicant Name',
      align: 'left',
      field: (row: any) => row.name,
      format: (val: any) => `${val}`,
      sortable: true
    },
    {
      name: 'email',
      label: 'Email',
      field: 'email',
      sortable: true,
      align: 'left'
    },
    {
      name: 'contact',
      label: 'Contact Number',
      field: 'contact',
      sortable: true,
      align: 'left'
    },
    {
      name: 'title',
      label: 'Job Title',
      field: 'title',
      sortable: true,
      align: 'left'
    }
  ];
  applications!: any[];
  data: any = [];
  status = '';
  getAllApplication!: () => Promise<void>;
  updateApplication!: (payload: any) => Promise<void>;
async mounted() {
    this.data = await this.getAllApplications();
    console.log(this.data);
  }

  async getAllApplications() {
    await this.getAllApplication();
    this.data = this.applications
      .filter(i => i.status != 'pending')
      .map((a: any) => {
        return {
          id: a.id,
          name: a.worker.firstName + ' ' + a.worker.lastName,
          email: a.worker.email,
          contact: a.worker.contact,
          title: a.job.title,
          status: a.status
        };
      });
    console.log(this.data);
  }
  async complete(id: number) {
    console.log(id);
    await this.updateApplication({
      id,
      status: 'completed'
    });
    this.data = await this.getAllApplications();
  }

  async cancelled(id: number) {
    console.log(this.applications[id]);
    await this.updateApplication({
      id,
      status: 'cancelled'
    });
    this.data = await this.getAllApplications();
  }

  colorManipulation(status: string) {
    console.log(status);
    if (status == 'accepted') {
      return 'orange';
    } else if (status == 'cancelled') {
      return 'red';
    } else if (status == 'completed') {
      return 'green';
    }
  }
  labelManipulation(status: string) {
    if (status == 'accepted') {
      return 'In progress';
    } else if (status == 'cancelled') {
      return 'Cancelled';
    } else if (status == 'completed') {
      return 'Done';
    }
  }
}
</script>

<style></style>
