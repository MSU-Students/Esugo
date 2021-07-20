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
          <q-tab
            name="Approved Accounts"
            icon="person"
            label="Approved Accounts"
          />
          <q-tab
            name="Pending Accounts"
            icon="person"
            label="Pending Accounts"
          />
          <q-tab
            name="Reported Accounts"
            icon="warning"
            label="Reported Accounts"
          />
        </q-tabs>
        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Approved Accounts">
            <Table1 />
          </q-tab-panel>

          <q-tab-panel name="Pending Accounts">
            <Table2 />
          </q-tab-panel>

          <q-tab-panel name="Reported Accounts">
            <Table3 />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Table1 from 'src/components/admin_components/ApprovedAcct.vue';
import Table2 from 'src/components/admin_components/PendingAcct.vue';
import Table3 from 'src/components/admin_components/ReportedAcct.vue';

@Component({
  components: { Table1, Table2, Table3 }
})
export default class AdminPage extends Vue {
  tab = [];
  selected = [];
}
</script>

<style></style>
