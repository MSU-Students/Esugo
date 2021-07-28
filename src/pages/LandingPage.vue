<template>
  <q-page>
    <div class="__container">
      <!-- cover photo -->
      <div class="__cover" :style="`height: ${screenHeight}px`">
        <div class="__container row">
          <div class="col-6 q-pl-xl flex flex-center text-h3 text-white">
            <div>
              <div>Hire A Vetted Team To Help You With Your Needs</div>
              <div class="q-pt-md">
                <q-btn
                  class="text-weight-regular text-left"
                  push
                  rounded
                  color="white"
                  text-color="primary"
                  label="Sign up now"
                  size="lg"
                  to="/signup"
                />
              </div>
            </div>
          </div>
          <div class="col-6 flex flex-center">
            <div>photo</div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class LandingPage extends Vue {
  screenHeight = 0;

  created() {
    this.screenHeight = window.screen.height - 160;
    console.log(this.screenHeight);
  }
}
</script>

<style scoped>
.__cover {
  background: linear-gradient(to bottom left, #0066eb 0%, #ff8ab3 100%);
  padding: 0px 100px 0px 100px;
}

.__cover .__container {
  height: 100%;
}
</style>
