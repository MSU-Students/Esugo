<template>
  <div>
    <q-toolbar
      class="text-white"
      style="background: linear-gradient(to bottom left, #0066eb 0%, #ff8ab3 100%)"
    >
      <q-toolbar-title :class="$q.screen.lt.md ? 'text-caption' : 'text-h4'">
        <div>Find the <strong>jobs </strong> that matter to you</div>
        <div
          class="row q-col-gutter-x-md justify-between items-center q-pt-sm"
          :style="$q.screen.lt.md ? 'width: 95%' : ''"
        >
          <div class="col-11">
            <div
              class="justify-between q-col-gutter-x-md q-pt-none"
              :class="!$q.screen.lt.md ? 'row' : 'q-gutter-y-sm'"
            >
              <div class="col">
                <q-input
                  outlined
                  v-model="jobTitle"
                  bg-color="white"
                  type="text"
                  label="Job title, keyword or company"
                  @keyup.enter="searchJob()"
                >
                  <template v-slot:prepend>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </div>
              <div class="col">
                <q-select
                  outlined
                  v-model="jobLocation"
                  :options="locationOption"
                  bg-color="white"
                  type="text"
                  label="Area, city or town"
                  ><template v-slot:prepend>
                    <q-icon name="place" />
                  </template>
                </q-select>
              </div>
            </div>
          </div>
          <div class="col text-center">
            <q-btn round color="primary" icon="search" size="md" @click="searchJob()" />
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>
    <div v-if="!searchTap" class="search-img text-center text-primary">
      <img height="250px" src="..\..\src\assets\searchjobs.png" />
      <div class="text-h5">Search Jobs!</div>
    </div>
    <!-- <div v-else-if="searchTap && cardItems.length == 0" class="text-center q-pa-xl">
      <div class="text-h4 q-pb-lg text-primary">No Content!</div>
    </div> -->
    <div v-else class="text-center q-pa-xl">
      <div class="text-h4 q-pb-lg text-primary">Job Results!</div>

      <div>
        <div class="row q-gutter-md flex flex-center">
          <Card v-for="(items, index) in getData2" :key="index" v-bind="items" />
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
import {Vue, Component} from 'vue-property-decorator';
import {mapState, mapActions} from 'vuex';
import Card from 'components/Card.vue';
import {JobDto} from 'src/services/rest-api';
import loginService from 'src/services/login.service';
import jobService from 'src/services/job.service';
import userService from 'src/services/user.service';

let items: JobDto[] = [];

@Component({
  components: {
    Card,
  },
  computed: {
    ...mapState('job', ['jobs']),
  },
  methods: {
    ...mapActions('job', ['getAllJob', 'updateJob']),
  },
})
export default class SearchToolbar extends Vue {
  jobTitle = '';
  jobLocation = '';
  locationOption: any = [];
  jobSpecialization = '';
  searchTap = false;
  type = 'All';
  cardItems = items;
  log = false;
  page = 1;
  currentPage = 1;
  nextPage = null;
  totalPages = 6;
  jobs!: JobDto[];
  getAllJob!: () => Promise<JobDto>;

  async created() {
    await this.getAllJob();
    items = this.jobs.filter((i) => i.status == 'approved');
    this.locationOption = items.map((i) => {
      if (i.status == 'approved') {
        return i.location;
      }
    });
  }

  get getData2() {
    return this.getData().slice(
      (this.page - 1) * this.totalPages,
      (this.page - 1) * this.totalPages + this.totalPages
    );
  }

  getData() {
    const result = (items = this.jobs.filter(
      (i) =>
        (i.location == this.jobLocation &&
          i.title.toLowerCase() == this.jobTitle.toLowerCase()) ||
        (i.location == this.jobLocation && this.jobTitle == '') ||
        (i.title.toLowerCase() == this.jobTitle.toLowerCase() &&
          this.jobLocation == '') ||
        (this.jobTitle == '' && this.jobLocation == '')
    ));
    this.cardItems = result;
    return result;
  }

  searchJob() {
    //
    this.searchTap = true;
    this.getData2;
  }
}
</script>

<style scoped>
.q-toolbar-d esktop {
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
