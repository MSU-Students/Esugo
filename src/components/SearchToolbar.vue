<template>
  <div>
    <q-toolbar
      class="text-white "
      style="background: linear-gradient(to bottom left, #0066eb 0%, #ff8ab3 100%);"
    >
      <q-toolbar-title :class="$q.screen.lt.md ? 'text-caption' : 'text-h4'">
        <div>Find the <strong>jobs </strong> that matter to you</div>
        <div
          class="row q-col-gutter-x-md items-center q-pt-sm"
          :style="$q.screen.lt.md ? 'width: 95%' : ''"
        >
          <div class="col-11">
            <div
              class=" justify-between q-col-gutter-x-md q-pt-none"
              :class="!$q.screen.lt.md ? 'row' : 'q-gutter-y-sm'"
            >
              <div class="col-4">
                <q-input
                  outlined
                  v-model="jobTitle"
                  bg-color="white"
                  type="text"
                  label="Job title, keyword or company"
                >
                  <template v-slot:prepend>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </div>
              <div class="col-4">
                <q-select
                  outlined
                  v-model="jobLocation"
                  :options="[
                    'Malutlut',
                    'Sarimanok',
                    'Lancaf',
                    'Brgy.Green',
                    'Datu Saber',
                    'Matampay'
                  ]"
                  bg-color="white"
                  type="text"
                  label="Area, city or town"
                  ><template v-slot:prepend>
                    <q-icon name="place" />
                  </template>
                </q-select>
              </div>
              <div class="col-4">
                <q-select
                  outlined
                  v-model="jobSpecialization"
                  :options="['Carpentry', 'Driver', 'Cooker']"
                  bg-color="white"
                  type="text"
                  label="All Job Specialization"
                  ><template v-slot:prepend>
                    <q-icon name="work_outline" />
                  </template>
                </q-select>
              </div>
            </div>
          </div>
          <div class="col-1">
            <q-btn
              round
              color="primary"
              icon="search"
              size="md"
              @click="searchTap = !searchTap"
            />
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>
    <div v-if="searchTap" class="search-img text-center text-primary">
      <img height="250px" src="..\..\src\assets\searchjobs.png" />
      <div class="text-h5">Search Jobs!</div>
    </div>
    <div v-else class="text-center q-pa-xl">
      <div class="text-h4 q-pb-lg text-primary">Job Results!</div>

      <div>
        <div class="row q-gutter-md flex flex-center">
          <Card
            v-for="(items, index) in getData2"
            :key="index"
            v-bind="items"
          />
        </div>
        <div class="flex flex-center q-pt-lg">
          <q-pagination
            v-model="page"
            :min="currentPage"
            :max="Math.ceil(getData().length / totalPages)"
            :input="true"
            input-class="text-grey-9"
            icon-first="skip_previous"
            icon-last="skip_next"
            icon-prev="fast_rewind"
            icon-next="fast_forward"
            color="primary"
          >
          </q-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Card from 'components/Card.vue';

const items = [
  {
    id: 1,
    jobPhoto: 'carpentry.jpg',
    profilePic: 'employer1.jpg',
    job: 'Carpentry',
    stars: 5,
    salary: 100,
    jobDesc: 'Make a 5 feet tall cabinet with 2 doors and a mirror.',
    to: '/employerprofile/1'
  },
  {
    id: 2,
    jobPhoto: 'cook.jpg',
    profilePic: 'employer2.jpg',
    job: 'Cook',
    stars: 5,
    salary: 450,
    jobDesc: 'Looking for 2 experienced cooks.',
    to: '/employerprofile/2'
  },
  {
    id: 8,
    jobPhoto: 'ITspecialist.jpg',
    profilePic: 'employer2.jpg',
    job: 'Computer Technician',
    stars: 5,
    salary: 1500,
    jobDesc: 'Need Computer specialist.',
    to: '/employerprofile/7'
  },
  {
    id: 9,
    jobPhoto: 'sport&fitness.jpg',
    profilePic: 'employer1.jpg',
    job: 'Gym Instructor',
    stars: 5,
    salary: 1500,
    jobDesc: 'Must have a valid certificate for Gym Instructions.',
    to: '/employerprofile/7'
  }
];

@Component({
  components: {
    Card
  },
  computed: {}
})
export default class SearchToolbar extends Vue {
  jobTitle = '';
  jobLocation = '';
  jobSpecialization = '';
  searchTap = true;
  cardItems = items;
  log = false;
  type = 'All';
  page = 1;
  currentPage = 1;
  nextPage = null;
  totalPages = 6;

  get getData2() {
    return this.getData().slice(
      (this.page - 1) * this.totalPages,
      (this.page - 1) * this.totalPages + this.totalPages
    );
  }

  getData() {
    if (this.type == 'All') {
      if (this.$q.screen.lt.sm) {
        this.totalPages = 4;
      }
      return items;
    } else {
      let self = this;
      return items.filter(function(item: any) {
        return item.type.toLowerCase() == self.type.toLowerCase();
      });
    }
  }
}
</script>

<style scoped>
.q-toolbar-desktop {
  background: linear-gradient(to bottom left, #0066eb 0%, #ff8ab3 100%);
  padding: 0px 100px 0px 100px;
}

.q-toolbar-mobile {
  background: linear-gradient(to bottom left, #0066eb 0%, #ff8ab3 100%);
  padding: 0px 20px 0px 20px;
}

.q-toolbar {
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-img {
  flex-grow: 1;
  flex-flow: column;
  margin-top: 50px;
}
</style>
