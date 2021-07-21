<template>
  <div class="q-pa-md">
    <q-card bg-blue>
      <q-table
        title="Jobs Reported"
        :data="data"
        :columns="columns"
        row-key="name"
        class="q-pa-md"
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width class="bg-grey-3 text-blue">Action</q-th>
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
            <q-th auto-width>Account Status</q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width class="text-center">
              <q-btn
                icon="more_horiz"
                text-color="grey-8"
                size="sm"
                dense
                round
                flat
              >
                <q-menu>
                  <q-list class="text-center" style="min-width: 100px">
                    <q-item
                      class="text-green"
                      :disable="!btnAccount"
                      :class="!btnAccount ? 'no-pointer-events' : ''"
                      clickable
                      @click="activeAccount(props.rowIndex)"
                    >
                      <q-item-section>Enable</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item
                      class="text-red"
                      :disable="btnAccount"
                      :class="btnAccount ? 'no-pointer-events' : ''"
                      clickable
                      @click="deactiveAccount(props.rowIndex)"
                    >
                      <q-item-section>Disable</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </q-td>
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.value }}
            </q-td>
            <q-td auto-width class="text-center">
              <q-chip
                v-if="btnAccount && props.rowIndex == selectedIndex"
                class="text-caption text-bold"
                color="red"
                text-color="white"
                label="Disable"
              />
              <q-chip
                v-else
                class="text-caption text-bold"
                color="green"
                text-color="white"
                label="Enable"
              />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class ReportedJobs extends Vue {
  tab = 1;
  btnAccount = false;
  selectedIndex = null;
  columns = [
    {
      name: 'Priority level',
      label: 'Priority Level',
      field: 'prioritylevel',
      align: 'left',
      width: 100,
      sortable: true
    },
    {
      name: 'name',
      required: true,
      label: 'Description',
      align: 'left',
      field: (row: any) => row.name,
      format: (val: any) => `${val}`,
      sortable: true
    },
    {
      name: 'Date Posted',
      align: 'left',
      label: 'Date Posted',
      field: 'dateposted',
      sortable: true
    },
    {
      name: 'Date Reported',
      label: 'Date Reported',
      field: 'datereported',
      sortable: true,
      align: 'left'
    },
    { name: 'Remark', label: 'Remark', field: 'remark', align: 'left' }
  ];
  data = [
    {
      name: 'Capentry',
      dateposted: '03-16-2021',
      datereported: '03-17-2021',
      remark: 'Scam',
      prioritylevel: 'low',
      Action: '',
      status: false
    },
    {
      name: 'Cook',
      dateposted: '03-22-2021',
      datereported: '03-27-2021',
      remark: 'Scam',
      prioritylevel: 'moderate',
      Action: '',
      status: false
    },
    {
      name: 'Encoder',
      dateposted: '03-05-2021',
      datereported: '03-08-2021',
      remark: 'Scam',
      prioritylevel: 'high',
      Action: '',
      status: false
    }
  ];

  activeAccount(id: any) {
    this.data[id].status = false;
    this.btnAccount = false;
    this.selectedIndex = id;
  }

  deactiveAccount(id: any) {
    this.data[id].status = true;
    this.btnAccount = true;
    this.selectedIndex = id;
  }
}
</script>
