<template>
  <div>
    <q-table
      title="Approved Jobs"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width class="bg-grey-3 text-blue">
            Action
          </q-th>
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-if="$q.platform.is.mobile" v-slot:item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''"
        >
          <q-card :class="props.selected ? 'bg-grey-2' : ''">
            <q-card-section>
              <span class="text-weight-bold">{{ props.row.name }}</span>
              <q-space />
            </q-card-section>
            <q-separator />
            <q-list dense>
              <q-item
                v-for="col in props.cols.filter(col => col.name !== 'desc')"
                :key="col.name"
                class="row"
              >
                <q-item-section class="col-6">
                  <q-item-label>{{ col.label }}</q-item-label>
                </q-item-section>
                <q-item-section side class="col-6">
                  <q-item-label caption>{{ col.value }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <q-separator />
            <q-card-actions class="q-py-md" align="center">
              <q-btn
                style="width: 120px"
                size="sm"
                color="blue"
                icon="pageview"
                label="View Job Posted"
              />
            </q-card-actions>
          </q-card>
        </div>
      </template>

      <template v-else v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width class="text-center">
            <q-btn size="sm" color="blue" icon="pageview" round dense>
              <q-tooltip content-class="bg-grey-9" :offset="[10, 10]">
                View Job Posted
              </q-tooltip>
            </q-btn>
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            style="cursor:pointer"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">
              <q-img :src="props.row.heritagePicture" />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class ApprovedJobs extends Vue {
  tab = 'mails';
  columns = [
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
      name: 'Account Name',
      label: 'Account Name',
      field: 'accountname',
      sortable: true,
      align: 'left'
    }
  ];
  data = [
    {
      name: 'Capentry',
      dateposted: '03-16-2021',
      accountname: 'Yasser Gania Bashier',
    },
    {
      name: 'Cook',
      dateposted: '03-22-2021',
      accountname: 'Yasser Gania Bashier',
    },
    {
      name: 'Encoder',
      dateposted: '03-05-2021',
      accountname: 'Yasser Gania Bashier',
    }
  ];
}
</script>
