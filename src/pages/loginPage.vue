<template>
  <q-page
    style="background: linear-gradient(to bottom, #238ffb 29%, #ffffff 100%)"
    class="flex flex-center"
  >
    <div>
      <q-card class="my-card no-shadow">
        <div class="pic-text absolute-bottom-left text-white q-gutter-xl"></div>
      </q-card>
    </div>

    <div class="col-4">
      <q-card-section class="q-pa-xl">
        <div class="text-center">
          <img src="~/assets/ESUGO.png" width="370px" />
        </div>
        <h5 class="text-weight-bolder text-center text-white">Sign in to your account</h5>
        <div class="q-gutter-md">
          <q-input
            rounded
            outlined
            v-model="username"
            label="Username"
            standout="bg-white text-primary"
          />

          <q-input
            rounded
            color="blue-9"
            outlined
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            label="Password"
            standout="bg-white text-primary"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-checkbox
            size="xs"
            v-model="val"
            label=" I have read and accepted the User Notice and Privacy"
          />
          <div>
          <q-btn rounded class="full-width" color="primary" label="Login" @click="loginUser()" />
          </div>
        </div>
      </q-card-section>
    </div>
  </q-page>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {AUser} from 'src/store/auth/state';
import {mapActions} from 'vuex';
import helperService from 'src/services/helper.service';
import userService from 'src/services/user.service';
import loginService from 'src/services/login.service';

@Component({
  methods: {
    ...mapActions('auth', ['login']),
  },
})
export default class Login extends Vue {
  val = false;
  username = '';
  password = '';
  signup = '';
  isPwd = true;
  type = '';

  login!: (auth: {username: string; password: string; type: string}) => Promise<AUser>;

  async loginUser() {
    try {
      const res: any = await this.login({
        username: this.username,
        password: this.password,
        type: this.type,
      });
      if (res.type == 'admin') {
        await this.$router.replace('/admin/');
      } else if (res.type == 'moderator') {
        await this.$router.replace('/moderator/');
      } else if (res.type == 'worker') {
        await this.$router.replace('/worker/');
      } else if (res.type == 'employer') {
        await this.$router.replace('/employer/');
      }
      helperService.notify({
        type: 'positive',
        message: `Welcome ${res.firstName} ${res.lastName}`,
      });
    } catch (error) {
      helperService.notify({
        type: 'negative',
        message:
          error.response.data.message == 'Unauthorized'
            ? 'Wrong username or password'
            : 'Something went wrong!',
        caption: error.message,
      });
    }
  }
}
</script>
<style scoped>
.pic-text {
  padding-bottom: 120px;
  padding-left: 50px;
}
.radius{
  border-radius: 10%;
}
</style>
