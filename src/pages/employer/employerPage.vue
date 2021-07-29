<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs v-model="tab" dense no-caps inline-label class="text-primary shadow-2">
          <q-tab name="Pending" icon="work" label="Pending Applicant" />
          <q-tab name="Approved" icon="work" label="Job In Progress" />
          <q-tab name="Completed" icon="work" label="Job Completed" />
          <q-tab name="Cancelled" icon="work" label="Job Cancelled" />
        </q-tabs>
        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Pending">
            <Table2 />
          </q-tab-panel>
          <q-tab-panel name="Approved">
            <Table1 />
          </q-tab-panel>
          <q-tab-panel name="Completed">
            <Table3 />
          </q-tab-panel>
          <q-tab-panel name="Cancelled">
            <Table4 />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import Table1 from 'components/employer_components/approvedApplicant.vue';
import Table2 from 'components/employer_components/pendingApplicants.vue';
import Table3 from 'components/employer_components/completedApplicant.vue';
import Table4 from 'components/employer_components/cancelledApplicant.vue';
export default {
  name: 'adminLayout',
  components: {Table1, Table2,Table3, Table4},
  data() {
    return {
      tab: 'Pending',
      selected: [],
    };
  },
};
</script>

<style></style>
