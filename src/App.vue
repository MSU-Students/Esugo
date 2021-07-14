<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import jobService from 'src/services/job.service';

@Component
export default class App extends Vue {
  async created() {
    const res = await jobService.getAll();
    console.log(res.data);
  }
}
</script>
