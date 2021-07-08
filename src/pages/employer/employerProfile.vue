<template>
  <q-page class="flex flex-center" padding style="background: linear-gradient(to bottom left,  #0066eb 0%, #ff8ab3 100%  );">
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
                    <div class="q-gutter-sm text-h6 text-weight-bold">
                      CONTACT INFO
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

                  <q-item-section>Amjad_Yasin010109@gmail.com</q-item-section>
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

                  <q-item-section>+63 965 084 7310</q-item-section>
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

                  <q-item-section
                    >Poblacion Saguiaran Lanao del Sur</q-item-section
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
                      icon="Business"
                    />
                  </q-item-section>

                  <q-item-section>Private Company</q-item-section>
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

                  <q-item-section
                    >Poblacion Saguiaran Lanao del Sur</q-item-section
                  >
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
                <q-item-section>yassinCompany@gmail.com</q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
        <div class="col q-pa-md">
          <q-btn
            class="float-right"
            color="primary"
            icon="add"
            label="Post job"
            @click="() => (dialogOpened = true)"
          />
          <div class="q-gutter-md">
            <div class="text-h4 text-white text-weight-medium">Yassin B. Amjad</div>
          </div>
          <div>
            <q-chip color="blue-5" text-color="white"> Private Company </q-chip>
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

<script>
import TabPanels from "components/TabPanels.vue";
import Dialog from "src/components//Dialog.vue";

export default {
  name: "EmployerProfile",
  components: {
    TabPanels,
    Dialog,
  },
   data() {
    return {
      dialogOpened: false
    };
  },
  methods: {
    hideDialog(value) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.dialogOpened = value;
    }
  }
};
</script>

<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid #027be3
</style>
