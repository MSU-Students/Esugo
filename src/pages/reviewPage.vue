<template>
  <div class="q-pa-md">
    <q-table
      title="Pending Accounts "
      :data="data"
      :columns="columns"
      row-key="name"
      selection= "single"
    >


      <template v-slot:body-selection="scope">
        <q-btn v-model="scope.greenModel" color="white" :label= "greenModel" text-color="black">
        <q-menu
          anchor="center middle"
          self="center middle"
        >
          <q-list style="min-width: 50px">
            <q-item clickable v-close-popup>
              <q-item-section v-model="scope.greenModel" class = "text-green text-bold" @click="greenModel = 'Approved'" >Approve</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section v-model="scope.greenModel" class = "text-red text-bold" @click="greenModel = 'Disapproved'">Disapprove</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      </template>
    </q-table>
  </div>
</template>


<script>
export default {
data () {
    return {
      greenModel: 'Pending',
      selected: [],
     columns: [
        {
          name: "name",
          required: true,
          label: "Accout Name",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "Date Joined",
          align: "left",
          label: "Date Joined",
          field: "datejoined",
          sortable: true
        },
        {
          name: "Account Category",
          label: "Account Category",
          field: "acctCategory",
          sortable: true,
          align: "left"
        }
      ],
      data: [
        {
          name: "Yasser Gania Bashier",
          datejoined: "03-16-2020",
          acctCategory: "worker",
          acctStatus: "Pending"
        },
      ]
    }
  }
}
</script>           

<style>

</style>