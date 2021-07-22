<template>
  <q-page
    class="flex flex-center"
    padding
    style="background: linear-gradient(to bottom left,  #0066eb 0%, #ff8ab3 100%  );"
  >
    <div class="q-pa-md q-gutter-sm">
      <div class="row">
        <div class="col-4">
          <q-card bordered class="my-card" style="height: 700px">
            <q-card-section class="flex flex-center">
              <q-avatar size="230px">
                <img src="~/assets/employer1.jpg" />
              </q-avatar>
            </q-card-section>

            <q-separator inset />

            <q-card-section>
              <q-list>
                <q-item dense>
                  <q-item-section>
                    <div class="q-gutter-sm text-h6 text-weight-bold ">
                      CONTACT ME

                      <q-btn label=". . .">
                        <q-menu>
                          <q-list style="min-width: 100px">
                            <q-item clickable v-close-popup>
                              <q-item-section>
                                <div
                                  class="q-gutter-sm text-h8 text-weight-bold "
                                >
                                  Edit Profile
                                </div>
                              </q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                              <q-item-section>
                                <div
                                  class="q-gutter-sm text-h8 text-weight-bold "
                                >
                                  Edit Profile
                                </div>
                              </q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                      </q-btn>
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
                    <div class="q-gutter-sm text-h7 text-weight-bold ">
                      Amjad_Yasin010109@gmail.com
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
                      Poblacion Saguiaran Lanao del Sur
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>

            <q-separator inset />
            <q-card-section>
              <q-list>
                <q-item dense>
                  <q-item-section>
                    <div class="q-gutter-sm text-h6 text-weight-bold">
                      Company Details
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
                      icon="business"
                    />
                  </q-item-section>

                  <q-item-section>
                    <div class="q-gutter-sm text-h7 text-weight-bold ">
                      Private Company
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
                    <div class="q-gutter-sm text-h7 text-weight-bold ">
                      Poblacion Saguiaran Lanao del Sur
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>

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
                  <div class="q-gutter-sm text-h7 text-weight-bold ">
                    yassinCompany@gmail.com
                  </div>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
        <div class="col q-pa-md">
          <q-btn
            class="float-right"
            color="purple"
            icon="add"
            icon-right="work"
            label="Post job"
            @click="() => (dialogOpened = true)"
          />
          <!-- <q-btn
            class="float-right"
            color="primary"
            icon="add"
            label="Post job"
            @click="() => (dialogOpened = true)"
          /> -->
          <div class="q-gutter-md">
            <div class="text-h4 text-white text-weight-medium">
              Yassin B. Amjad
              <q-btn flat round color="white" icon="edit" size="8px" />
            </div>
          </div>
          <div>
            <q-chip color="blue-5" text-color="white">
              Private Company
            </q-chip>
          </div>
          <div class="q-pt-md">
            <TabPanels />
          </div>
        </div>
      </div>
    </div>
    <Dialog :dialogOpened="dialogOpened" @hideDialog="hideDialog" />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TabPanels from 'components/employer_components/TabPanels.vue';
import Dialog from 'src/components/Dialog.vue';

@Component({
  components: {
    TabPanels,
    Dialog
  }
})
export default class EmployerProfile extends Vue {
  dialogOpened = false;

  hideDialog(value: boolean) {
    this.dialogOpened = value;
  }
}
</script>

<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid #027be3
</style>
