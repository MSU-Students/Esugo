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
        <q-tab name="Approved Accounts" icon="person" label="Approved Accounts" />
        <q-tab name="Pending Accounts" icon="person" label="Pending Accounts" />
        <q-tab name="Reported Accounts" icon="warning" label="Reported Accounts" />
      </q-tabs>
      <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Approved Accounts">
            <Table1/>
          </q-tab-panel>

          <q-tab-panel name="Pending Accounts">
           <Table2/>
          </q-tab-panel>

          <q-tab-panel name="Reported Accounts">
          <Table3/>
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
  components: { Table1,Table2, Table3},
data () {
    return {
      tab: [],
      selected: [],
    
    }
  }
}
</script>

<style>

</style>