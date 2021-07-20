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
          <q-tab name="Approved Jobs" icon="work" label="Approved Jobs" />
          <q-tab name="Pending Jobs" icon="work" label="Pending Jobs" />
          <q-tab name="Reported Jobs" icon="warning" label="Reported Jobs" />
        </q-tabs>
        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Approved Jobs">
            <Table1 />
          </q-tab-panel>

          <q-tab-panel name="Pending Jobs">
            <Table2 />
          </q-tab-panel>

          <q-tab-panel name="Reported Jobs">
            <Table3 />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Table1 from 'src/components/moderator_components/ApprovedJobs.vue';
import Table2 from 'src/components/moderator_components/PendingJobs.vue';
import Table3 from 'src/components/moderator_components/ReportedJobs.vue';

@Component({
  components: { Table1, Table2, Table3 }
})
export default class ModeratorPage extends Vue {
  tab = [];
  selected = [];
}
</script>

<style></style>
