<template>
  <q-page>
    <SearchToolbar />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SearchToolbar from 'components/SearchToolbar.vue';

@Component({
  components: {
    SearchToolbar
  }
})
export default class LandingPage extends Vue {}
</script>

<style scoped>
.q-page {
  display: flex;
  flex-flow: column;
  height: 100%;
}
</style>
