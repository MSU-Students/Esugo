<template>
  <div class="q-pa-md">
    <q-card bg-blue>
    <q-table
      title="Pending Jobs"
      :data="data"
      :columns="columns"
      row-key="name"
       >
   <template v-slot:header="props">
          <q-tr :props="props">
             <q-th auto-width>Status</q-th>
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
           
          </q-tr>
        </template>

      <template v-slot:body="props">
      <q-tr :props="props">
        <q-td auto-width class="text-center">
          
        <q-btn  v-if="greenModel == 'Approved' && props.rowIndex == selectedIndex"
        color="white" label= "Approved" text-color="green"> 
        <q-menu
          anchor="center middle"
          self="center middle"
        >
          <q-list class="text-center" style="min-width: 50px">
            <q-item class="text-green" clickable @click="approveAccount(props.rowIndex)" v-close-popup>
              <q-item-section >Approve</q-item-section>
            </q-item>
            <q-item class="text-red" clickable @click="disapproveAccount(props.rowIndex)" v-close-popup>
              <q-item-section>Disapprove</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn  v-else-if="greenModel == 'Disapproved' && props.rowIndex == selectedIndex"
        color="white" label= "Disapproved" text-color="red"> 
        <q-menu
          anchor="center middle"
          self="center middle"
        >
          <q-list class="text-center" style="min-width: 50px">
            <q-item class="text-green" clickable @click="approveAccount(props.rowIndex)" v-close-popup>
              <q-item-section >Approve</q-item-section>
            </q-item>
            <q-item class="text-red" clickable @click="disapproveAccount(props.rowIndex)" v-close-popup>
              <q-item-section>Disapprove</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn  v-else color="white" label= "Pending" text-color="black"> 
        <q-menu
          anchor="center middle"
          self="center middle"
        >
          <q-list class="text-center" style="min-width: 50px">
            <q-item class="text-green" clickable @click="approveAccount(props.rowIndex)" v-close-popup>
              <q-item-section >Approve</q-item-section>
            </q-item>
            <q-item class="text-red" clickable @click="disapproveAccount(props.rowIndex)" v-close-popup>
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


<script>
export default {
data() {
    return {
      tab: "mails",
      greenModel: 'Pending',
      selectedIndex: null,
      columns: [
        {
          name: "name",
          required: true,
          label: "Description",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
            name: "Date Posted",
          align: "left",
          label: "Date Posted",
          field: "dateposted",
          sortable: true
        },
        {
          name: "Account Name",
          label: "Account Name",
          field: "accountname",
          sortable: true,
          align: "left"
        }
      ],
      data: [
        {
          name: "Capentry",
          dateposted: "03-16-2021",
          accountname: "Yasser Gania Bashier"
        },
        {
          name: "Cook",
          dateposted: "03-22-2021",
          accountname: "Yasser Gania Bashier"
        },
        {
          name: "Encoder",
          dateposted: "03-05-2021",
          accountname: "Yasser Gania Bashier"
        }
      ]
    }
  },
   methods: {
    approveAccount(id) {
      console.log(id)
      this.data[id].acctStatus = 'Approved';
      this.greenModel = 'Approved';
      this.selectedIndex = id;
    },
    disapproveAccount(id) {
      this.data[id].acctStatus = 'Disapproved';
      this.greenModel = 'Disapproved';
      this.selectedIndex = id;
    }
  }
}
</script>           

<style>

</style>