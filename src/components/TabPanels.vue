<template>
  <div class="q-gutter-y-md" style="width: 600px">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="notif" label="Notification" />
        <q-tab
          v-if="$route.path == '/workerprofile'"
          name="about"
          label="About Me"
        />
        <q-tab
          v-if="$route.path == '/workerprofile'"
          name="exp"
          label="Experience"
        />
        <q-tab name="rev" label="Reviews" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated style="height: 554px">
        <q-tab-panel name="notif">
          <div class="text-h6">Notifications:</div>

          <q-list class="rounded-borders" style="max-width: 600px">
            <q-item>
              <q-item-section avatar top>
                <!-- <q-icon name="account_tree" color="black" size="34px" /> -->
                <q-avatar>
                  <img src="~assets/employer2.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section top class="col-2 gt-sm">
                <q-item-label class="q-mt-sm">Omair</q-item-label>
              </q-item-section>

              <q-item-section top>
                <q-item-label lines="1">
                  <span class="text-weight-medium"
                    >[quasarframework/quasar]</span
                  >
                  <span class="text-grey-8"> - GitHub repository</span>
                </q-item-label>
                <q-item-label caption lines="1">
                  @rstoenescu in #3: > Generic type parameter for props
                </q-item-label>
                <q-item-label
                  lines="1"
                  class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                >
                  <span class="cursor-pointer">Show info</span>
                </q-item-label>
              </q-item-section>

              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    icon="delete"
                  />
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    icon="done"
                  />
                  <q-btn size="12px" flat dense round icon="more_vert" />
                </div>
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item>
              <q-item-section avatar top>
                <q-avatar>
                  <img src="~assets/employer2.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section top class="col-2 gt-sm">
                <q-item-label class="q-mt-sm">Omair</q-item-label>
              </q-item-section>

              <q-item-section top>
                <q-item-label lines="1">
                  <span class="text-weight-medium"
                    >[quasarframework/quasar]</span
                  >
                  <span class="text-grey-8"> - GitHub repository</span>
                </q-item-label>
                <q-item-label caption lines="1">
                  @rstoenescu in #1: > The build system
                </q-item-label>
                <q-item-label
                  lines="1"
                  class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                >
                  <span class="cursor-pointer">Show Info</span>
                </q-item-label>
              </q-item-section>

              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    icon="delete"
                  />
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    icon="done"
                  />
                  <q-btn size="12px" flat dense round icon="more_vert" />
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>

        <q-tab-panel name="about">
          <div class="text-h5 text-weight-bold">About Me:</div>
          <div class="text-subtitle2 q-pt-md">
            I am a talented, ambitious and hardworking individual, with broad
            skills and experience in digital and printed marketing, social media
            and leading projects. Furthermore, I am adept at handling multiple
            tasks on a daily basis competently and at working well under
            pressure. A key strength is communication; building strong
            relationships with people in order to deliver the best results.
            Recently, I completed an Open degree, including Business and Design
            modules at the Open University and I am now fully employed by
            Clearly Presented as a Digital Media Manager.
          </div>
        </q-tab-panel>

        <q-tab-panel name="exp">
          <div class="text-h5 text-weight-bold">Experience:</div>
          <div class="text-subtitle2 q-pt-md">
            <div>
              Designed and developed up to 10 applications projects per year.
            </div>
            <div>
              Designed project requirements in cooperation with data analysis
              teams.
            </div>
            <div>
              Participated in project meetings, with technical staff members,
              business analysts, and external stakeholders.
            </div>
            <div>
              Trained and mentored over 15 junior programmers and developers.
            </div>
            <div>
              Key achievement: Developed a test automation tool that reduced
              testing time by 55%.
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="rev">
          <div class="text-h6">Reviews:</div>

          <q-list class="rounded-borders" style="max-width: 600px">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="~/assets/employer1.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">Excellent</q-item-label>
                <q-item-label caption lines="2">
                  <span class="text-weight-bold">Amjad</span>
                  -- Active and very good worker! Nice working with him!
                </q-item-label>
              </q-item-section>

              <q-item-section side top> 2 weeks ago </q-item-section>
            </q-item>

            <q-separator inset="item" />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="~/assets/anonymous.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">Poor</q-item-label>
                <q-item-label caption lines="2">
                  <span class="text-weight-bold">Anonymous</span>
                  -- Don't like this guy! Don't wanna work with him again!
                </q-item-label>
              </q-item-section>

              <q-item-section side top> 1 month ago </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'TabPanels',
  data() {
    return {
      tab: 'notif'
    };
  }
};
</script>
