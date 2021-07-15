<template>
  <q-page
    class="flex flex-center"
    padding
    style="background: linear-gradient(to top right, #0066eb 0%, #71f4e4 100%);"
  >
    <!-- <q-btn
      class="float-right"
      color="primary"
      icon="add"
      label="add job"
      @click="() => (dialogOpened = true)"
    /> -->
    <div class="q-pa-md ">
      <div class="row">
        <div class="col-4 ">
          <q-card bordered class="my-card" style="height: 700px">
            <q-card-section class="flex flex-center">
              <q-avatar size="230px">
                <img src="~/assets/profilepic.jpg" />
              </q-avatar>
            </q-card-section>

            <q-separator inset />

            <q-card-section>
              <q-list>
                <q-item dense>
                  <q-item-section>
                    <div class="q-gutter-sm text-h6 text-weight-bold ">
                      CONTACT ME
                    </div>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar>
                    <q-avatar
                      size="28px"
                      font-size="14px"
                      color="primary"
                      text-color="white"
                      icon="contact_mail"
                    />
                  </q-item-section>

                  <q-item-section>
                    <div class="q-gutter-sm text-h6 text-weight-bold ">
                      yassiergania09@gmail.com
                    </div>
                    </q-item-section
                  >
                </q-item>

                <q-item>
                  <q-item-section avatar>
                    <q-avatar
                      size="28px"
                      font-size="14px"
                      color="primary"
                      text-color="white"
                      icon="phone_iphone"
                    />
                  </q-item-section>

                  <q-item-section>
                    <div class="q-gutter-sm text-h6 text-weight-bold ">
                      +63 963 820 8955
                    </div>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar>
                    <q-avatar
                      size="28px"
                      font-size="14px"
                      color="primary"
                      text-color="white"
                      icon="location_on"
                    />
                  </q-item-section>

                  <q-item-section>
                     <div class="q-gutter-sm text-h9 text-weight-bold ">
                       0072 Tubacan Pumping St. Marawi City Lanao Del
                    Sur
                    </div>
                   
                    </q-item-section
                  >
                </q-item>
              </q-list>
            </q-card-section>

            <q-separator inset />
            <q-card-section>
              <q-list>
                <q-item dense>
                  <q-item-section>
                    <div class="q-gutter-sm text-h6 text-weight-bold">
                      SKILLS
                    </div>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar>
                    <q-avatar
                      size="28px"
                      font-size="14px"
                      color="primary"
                      text-color="white"
                      icon="task_alt"
                    />
                  </q-item-section>

                  <q-item-section>
                    <div class="q-gutter-sm text-h6 text-weight-bold ">
                      Editor
                    </div>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar>
                    <q-avatar
                      size="28px"
                      font-size="14px"
                      color="primary"
                      text-color="white"
                      icon="phone_iphone"
                    />
                  </q-item-section>

                  <q-item-section>
                     <div class="q-gutter-sm text-h6 text-weight-bold ">
                      Programmer
                    </div>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar>
                    <q-avatar
                      size="28px"
                      font-size="14px"
                      color="primary"
                      text-color="white"
                      icon="location_on"
                    />
                  </q-item-section>

                  <q-item-section>
                     <div class="q-gutter-sm text-h6 text-weight-bold ">
                      Trouble Shooter
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>

        <div class="col q-pa-md">
          <div class="q-gutter-md">
            <div class="text-h4 text-white text-weight-medium">
              Yassier Gania Bashier
            </div>
          </div>

          <div>
            <q-chip color="blue-5" text-color="white"> Worker </q-chip>
          </div>

          <div class="q-pt-md">
            <TabPanels />
          </div>
        </div>
      </div>
    </div>
    <!-- <Dialog :dialogOpened="dialogOpened" @hideDialog="hideDialog" /> -->
  </q-page>
</template>

<script>
import TabPanels from 'components/TabPanels.vue';
export default {
  name: 'EmpolerProfile',
  components: {
    TabPanels
  }
};
</script>
<style scoped>
.pic-text {
  padding-bottom: 120px;
  padding-left: 50px;
}
</style>
