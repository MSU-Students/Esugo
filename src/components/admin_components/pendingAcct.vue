<template>
  <div class="q-pa-md">
    <q-card bg-blue>
      <q-table
        title="Pending Accounts"
        :data="data"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width>Account Status</q-th>
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width class="text-center">
              <q-btn
                v-if="
                  greenModel == 'Approved' && props.rowIndex == selectedIndex
                "
                color="white"
                label="Approved"
                text-color="green"
              >
                <q-menu anchor="center middle" self="center middle">
                  <q-list class="text-center" style="min-width: 50px">
                    <q-item
                      class="text-green"
                      clickable
                      @click="approveAccount(props.rowIndex)"
                      v-close-popup
                    >
                      <q-item-section>Approve</q-item-section>
                    </q-item>
                    <q-item
                      class="text-red"
                      clickable
                      @click="disapproveAccount(props.rowIndex)"
                      v-close-popup
                    >
                      <q-item-section>Disapprove</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
              <q-btn
                v-else-if="
                  greenModel == 'Disapproved' && props.rowIndex == selectedIndex
                "
                color="white"
                label="Disapproved"
                text-color="red"
              >
                <q-menu anchor="center middle" self="center middle">
                  <q-list class="text-center" style="min-width: 50px">
                    <q-item
                      class="text-green"
                      clickable
                      @click="approveAccount(props.rowIndex)"
                      v-close-popup
                    >
                      <q-item-section>Approve</q-item-section>
                    </q-item>
                    <q-item
                      class="text-red"
                      clickable
                      @click="disapproveAccount(props.rowIndex)"
                      v-close-popup
                    >
                      <q-item-section>Disapprove</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
              <q-btn v-else color="white" label="Pending" text-color="black">
                <q-menu anchor="center middle" self="center middle">
                  <q-list class="text-center" style="min-width: 50px">
                    <q-item
                      class="text-green"
                      clickable
                      @click="approveAccount(props.rowIndex)"
                      v-close-popup
                    >
                      <q-item-section>Approve</q-item-section>
                    </q-item>
                    <q-item
                      class="text-red"
                      clickable
                      @click="disapproveAccount(props.rowIndex)"
                      v-close-popup
                    >
                      <q-item-section>Disapprove</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </q-td>

            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.value }}
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
export default class PendingAccount extends Vue {
  greenModel = 'Pending';
  selectedIndex = 0;
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Account Name',
      align: 'left',
      field: (row: any) => row.name,
      format: (val: any) => `${val}`,
      sortable: true
    },
    {
      name: 'Date Joined',
      align: 'left',
      label: 'Date Joined',
      field: 'datejoined',
      sortable: true
    },
    {
      name: 'Account Category',
      label: 'Account Category',
      field: 'acctCategory',
      sortable: true,
      align: 'left'
    }
  ];
  data = [
    {
      name: 'Yasser Gania Bashier',
      datejoined: '03-16-2020',
      acctCategory: 'worker',
      acctStatus: 'Pending'
    },
    {
      name: 'Yassin B. Amjad',
      datejoined: '03-27-2021',
      acctCategory: 'employer',
      acctStatus: 'Pending'
    }
  ];

  approveAccount(id: number) {
    console.log(id);
    this.data[id].acctStatus = 'Approved';
    this.greenModel = 'Approved';
    this.selectedIndex = id;
  }
  disapproveAccount(id: number) {
    this.data[id].acctStatus = 'Disapproved';
    this.greenModel = 'Disapproved';
    this.selectedIndex = id;
  }
}
</script>

<style></style>
