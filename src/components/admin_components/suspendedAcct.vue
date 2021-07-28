<template>
  <div class="q-pa-md">
    <q-card bg-blue>
      <q-table
        title="List of Suspended Accounts"
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
              auto-width
              class="text-center"
            >
              <q-btn
                :text-color="colorManipulation(props.row.status)"
                color="white"
                :label="labelManipulation(props.row.status)"
              >
                <q-menu anchor="center middle" self="center middle">
                  <q-list class="text-center" style="min-width: 50px">
                    <q-item
                      class="text-green"
                      clickable
                      @click="approveAccount(props.row.id)"
                      v-close-popup
                    >
                      <q-item-section>Able</q-item-section>
                    </q-item>
                    <q-item
                      class="text-orange"
                      clickable
                      @click="suspendAccount(props.row.id)"
                      v-close-popup
                    >
                      <q-item-section>Suspend</q-item-section>
                    </q-item>
                    <q-item
                      class="text-red"
                      clickable
                      @click="disapproveAccount(props.row.id)"
                      v-close-popup
                    >
                      <q-item-section>Ban</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </q-td>

            <template >
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
import { IUser } from 'src/interfaces/user.interface2';

@Component({
  computed: {
    ...mapState('user', ['users'])
  },
  methods: {
    ...mapActions('user', ['getAllUser', 'updateUser'])
  }
})
export default class approvedAcct extends Vue {
  greenModel = 'suspended';
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
      field: 'type',
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
    this.data = this.users.filter(i => i.status == 'suspended' && i.type != 'admin' && i.type != 'moderator');
  }

  async approveAccount(id: number) {
    await this.updateUser({
      id,
      status: 'available'
    });
    this.data = this.users.filter(i => i.status == 'suspended' && i.type != 'admin' && i.type != 'moderator');
  }
async suspendAccount(id: number) {
    await this.updateUser({
      id,
      status: 'suspended'
    });
    this.data = this.users.filter(i => i.status == 'suspended' && i.type != 'admin' && i.type != 'moderator');
  }

  async disapproveAccount(id: number) {
    await this.updateUser({
      id,
      status: 'banned'
    });
    this.data = this.users.filter(i => i.status == 'suspended' && i.type != 'admin' && i.type != 'moderator');
  }

  colorManipulation(status: string) {
    if (status == 'suspended') {
      return 'orange';
    } else if (status == 'banned') {
      return 'red';
    } else {
      return 'green';
    }
  }

  labelManipulation(status: string) {
    if (status == 'suspended') {
      return 'suspended';
    } else if (status == 'banned') {
      return 'Banned';
    } else {
      return 'abled';
    }
  }
}
</script>

<style></style>
