<template>
  <q-page class="flex flex-center">
    <div>
      <q-card class="my-card no-shadow">
        <div class="pic-text absolute-bottom-left text-white q-gutter-xl">
          <div class="row">
            <div class=" text col-6">
              <!-- <h3>
                Choose a job you love, and you will never have to work a day in
                your life.
              </h3> -->
              <!-- <div class="text-h6 text-red q-pb-md">Sign in as:</div> -->
            </div>
          </div>
          <q-btn label="Sign-up" color="primary" @click="signup = true" />

          <q-dialog v-model="signup">
            <q-card>
              <q-card-section>
                <div class="text-center text-h6">Sign in as</div>
              </q-card-section>

              <q-card-section class="q-pt-none q-gutter-md">
                <q-btn
                  color="primary"
                  icon="engineering"
                  label="WORKER"
                  to="/registerworker"
                />
                <q-btn
                  color="secondary"
                  icon-right="people"
                  label="EMPLOYER"
                  to="/registeremployer"
                />
              </q-card-section>

              <!-- <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" v-close-popup />
              </q-card-actions> -->
            </q-card>
          </q-dialog>
        </div>
        <div class="row">
          <!-- <img class="col-8" src="~/assets/employee.jpg" /> -->
          <div class="col-4">
            <q-card-section class="q-pa-xl">
              <div class="text-center">
                <img src="~/assets/Esugo2.png" width="370px" />
              </div>
              <h5 class="text-weight-bolder text-center">
                Sign in to your account
              </h5>
              <div class="q-gutter-md">
                <q-input outlined v-model="username" label="Username" />
                <q-input
                  color="blue-9"
                  outlined
                  v-model="password"
                  type="password"
                  label="Password"
                  @keypress.enter="login()"
                />

                <p class="text-overline">
                  By signing up, you confirm that you've read and accepted our
                  User Notice and Privacy.
                </p>

                <q-btn
                  class="full-width"
                  color="primary"
                  label="Login"
                  @click="login()"
                />
              </div>
            </q-card-section>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class PageIndex extends Vue {
  // name: 'Login',

  username = '';
  password = '';
  signup = false;

  async login() {
    if (this.username == 'worker' && this.password == 'worker') {
      await this.$router.replace('/worker');
    } else if (this.username == 'employer' && this.password == 'employer') {
      await this.$router.replace('/employer');
    } else if (this.username == 'moderator' && this.password == 'moderator') {
      await this.$router.replace('/moderator/job-posted');
    } else if (this.username == 'admin' && this.password == 'admin') {
      await this.$router.replace('/admin/manage-acct');
    } else {
      alert('Wrong Password!!!');
    }
  }
}
</script>

<style scoped>
.pic-text {
  padding-bottom: 120px;
  padding-left: 50px;
}
</style>
