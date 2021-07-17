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
          <q-tab name="approve" icon="person" label="Approved Accounts" />
          <q-tab name="pending" icon="person" label="Pending Accounts" />
          <q-tab name="reported" icon="warning" label="Reported Accounts" />
        </q-tabs>
        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="approve">
            <Table1 />
          </q-tab-panel>

          <q-tab-panel name="pending">
            <Table2 />
          </q-tab-panel>

          <q-tab-panel name="reported">
            <Table3 />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import Table1 from 'components/admin_components/approvedAcct.vue';
import Table2 from 'components/admin_components/pendingAcct.vue';
import Table3 from 'components/admin_components/reportedAcct.vue';
export default {
  name: 'adminLayout',
  components: { Table1, Table2, Table3 },
  data() {
    return {
      tab: 'approve',
      selected: []
    };
  }
};
</script>

<style></style>
