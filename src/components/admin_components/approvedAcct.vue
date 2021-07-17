<template>
  <div class="q-pa-md">
    <q-card bg-blue>
      <q-table
        title="List of Accounts"
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
            <q-td
              v-if="props.row.acctStatus != 'pending'"
              auto-width
              class="text-center"
            >
              <q-btn
                text-color="white"
                :color="colorManipulation(props.row.acctStatus)"
                :label="labelManipulation(props.row.acctStatus)"
              >
                <q-menu anchor="center middle" self="center middle">
                  <q-list class="text-center" style="min-width: 50px">
                    <q-item
                      class="text-green"
                      clickable
                      @click="approveAccount(props.rowIndex)"
                      v-close-popup
                    >
                      <q-item-section>able</q-item-section>
                    </q-item>
                    <q-item
                      class="text-red"
                      clickable
                      @click="disapproveAccount(props.rowIndex)"
                      v-close-popup
                    >
                      <q-item-section>disable</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </q-td>

            <template v-if="props.row.acctStatus != 'pending'">
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
import { IUser } from 'src/interfaces/user.interface';

@Component({
  computed: {
    ...mapState('user', ['users'])
  },
  methods: {
    ...mapActions('user', ['getAllUser', 'updateUser'])
  }
})
export default class pendingAcct extends Vue {
  greenModel = 'Pending';
  selectedIndex = null;
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Account Name',
      align: 'left',
      field: (row: IUser) => row.firstName,
      format: (val: any) => `${val}`,
      sortable: true
    },
    {
      name: 'gender',
      align: 'left',
      label: 'Gender',
      field: 'gender',
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
      name: 'acctCategory',
      label: 'Account Category',
      field: 'acctCategory',
      sortable: true,
      align: 'left'
    },
  ];
  users!: IUser[];
  data: IUser[] = [];
  status = '';
  getAllUser!: () => Promise<void>;
  updateUser!: (payload: any) => Promise<void>;

  async mounted() {
    await this.getAllUser();
    this.data = this.users;
  }

  async approveAccount(id: number) {
    await this.updateUser({
      ...this.users[id],
      acctStatus: 'approved'
    });
    this.data = this.users;
  }

  async disapproveAccount(id: any) {
    await this.updateUser({
      ...this.users[id],
      acctStatus: 'disapproved'
    });
    this.data = this.users;
  }

  colorManipulation(status: string) {
    if (status == 'pending') {
      return 'orange';
    } else if (status == 'disapproved') {
      return 'red';
    } else {
      return 'green';
    }
  }

  labelManipulation(status: string) {
    if (status == 'pending') {
      return 'Pending';
    } else if (status == 'disapproved') {
      return 'disable';
    } else {
      return 'able';
    }
  }
}
</script>

<style></style>
