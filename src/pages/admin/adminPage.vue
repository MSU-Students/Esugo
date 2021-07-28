<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          no-caps
          inline-label
          class=" text-primary shadow-2"
        >
          <q-tab name="pending" icon="person" label="Pending Accounts" />
          <q-tab name="approve" icon="person" label="Approved Accounts" />
          <q-tab name="disapproved" icon="warning" label="Banned Accounts" />
          <q-tab name="suspended" icon="warning" label="Suspended Accounts" />
        </q-tabs>
        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="pending">
            <Table2 />
          </q-tab-panel>
          <q-tab-panel name="approve">
            <Table1 />
          </q-tab-panel>
           <q-tab-panel name="disapproved">
            <Table3 />
          </q-tab-panel>
          <q-tab-panel name="suspended">
            <Table4 />
          </q-tab-panel>
          
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import Table1 from 'components/admin_components/approvedAcct.vue';
import Table2 from 'components/admin_components/pendingAcct.vue';
import Table3 from 'components/admin_components/deapprovedAcct.vue';
import Table4 from 'components/admin_components/suspendedAcct.vue';
export default {
  name: 'adminLayout',
  components: { Table1, Table2, Table3, Table4},
  data() {
    return {
      tab: 'pending',
      selected: []
    };
  }
};
</script>

<style></style>
