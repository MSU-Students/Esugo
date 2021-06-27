<template>
  <div >
    <q-table
      title="Reported Jobs"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width class="bg-grey-3 text-blue">Action</q-th>
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
          <q-th auto-width>Post Status</q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width class="text-center">
            <q-btn
              icon="more_horiz"
              text-color="grey-8"
              size="sm"
              dense
              round
              flat
            >
              <q-menu>
                <q-list class="text-center" style="min-width: 100px">
                  <q-item
                    class="text-green"
                    :disable="!props.row.disabled"
                    :class="!props.row.disabled ? 'no-pointer-events' : ''"

                  >
                    <q-item-section>Allow</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item
                    class="text-red"
                    :disable="props.row.disabled"
                    :class="props.row.disabled ? 'no-pointer-events' : ''"
        
                  >
                    <q-item-section>Delete</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
          <q-td auto-width class="text-center">
            <q-chip
              v-if="props.row.disabled"
              class="text-caption text-bold"
              color="red"
              text-color="white"
              label="Delete"
            />
            <q-chip
              v-else
              class="text-caption text-bold"
              color="green"
              text-color="white"
              label="Allow"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          name: "Priority level",
          label: "Priority Level",
          field: "prioritylevel",
          align: "left",
          width: 100,
          sortable: true
        },
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
          name: "Date Reported",
          label: "Date Reported",
          field: "datereported",
          sortable: true,
          align: "left"
        },
        { name: "Remark",
         label: "Remark", 
         field: "remark",
         align: "left", }
      ],
      data: [
        {
          name: "Capentry",
          dateposted: "03-16-2021",
          datereported: "03-17-2021",
          remark: "Scam",
          prioritylevel: "low",
          Action: ""
        },
            {
          name: "Cook",
          dateposted: "03-22-2021",
          datereported: "03-27-2021",
          remark: "Scam",
          prioritylevel: "moderate",
          Action: ""
        },  
            {
          name: "Encoder",
          dateposted: "03-05-2021",
          datereported: "03-08-2021",
          remark: "Scam",
          prioritylevel: "high",
          Action: ""
        }
      ]
    };
  }
};
</script>