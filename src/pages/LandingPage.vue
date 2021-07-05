<template>
  <q-page>
    <SearchToolbar />
  </q-page>
</template>

<script>
import SearchToolbar from 'components/SearchToolbar.vue';

export default {
  name: 'LandingPage',
  components: {
    SearchToolbar,
  },
};
</script>

<style scoped>
.q-page {
  display: flex;
  flex-flow: column;
  height: 100%;
}
</style>
