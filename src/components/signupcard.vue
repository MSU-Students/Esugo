<template>
  <q-card flat class="signupcard  bg-transparent">
    <div class="q-gutter-sm" style="width:400px">
      <q-input
        standout="bg-blue text-white"
        filled
        v-model="user.firstName"
        label="First name *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
        hide-bottom-space
      />
      <q-input
        standout="bg-blue text-white"
        dense
        filled
        v-model="user.middleName"
        label="Middle name *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
        hide-bottom-space
      />
      <q-input
        standout="bg-blue text-white"
        dense
        filled
        v-model="user.lastName"
        label="Surname *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
        hide-bottom-space
      />
      <q-input
        standout="bg-blue text-white"
        filled
        v-model="user.birthdate"
        mask="date"
        label="Birth Day *"
        :rules="[val => (val && val.length > 0) || 'Please type something']"
        hide-bottom-space
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="user.birthdate">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input
        standout="bg-blue text-white"
        dense
        filled
        v-model="user.gender"
        label="Gender *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
        hide-bottom-space
      />
      <q-input
        standout="bg-blue text-white"
        dense
        filled
        v-model="user.address"
        label="Permanent Address *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
        hide-bottom-space
      />
      <q-input
        standout="bg-blue text-white"
        filled
        dense
        v-model="user.contact"
        label="Contact Number*"
        lazy-rules
        :rules="[val => val.length <= 3 || 'Please type something']"
        prefix="+63"
        mask="##########"
        hide-bottom-space
      />
      <q-input
        standout="bg-blue text-white"
        filled
        dense
        v-model="user.email"
        label="Email Address*"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
        hide-bottom-space
      />
      <q-input
        standout="bg-blue text-white"
        dense
        filled
        v-model="user.username"
        label="Usernane*"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
        hide-bottom-space
      />
      <q-input
        standout="bg-blue text-white"
        color="blue-9"
        outlined
        v-model="user.password"
        filled
        :type="isPwd ? 'password' : 'text'"
        label="Password"
        hide-bottom-space
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </div>
    <div class="q-pt-sm">
      <q-btn
        class="full-width"
        color="primary"
        label="sign-up"
        :loading="loading"
        :disabl="loading"
        @click="addUser()"
      />
    </div>
  </q-card>
</template>

<script lang="ts">
import { UserDto } from 'src/services/rest-api';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import helperService from '../services/helper.service';

@Component({
  methods: {
    ...mapActions('user', ['createUser'])
  }
})
export default class singupCard extends Vue {
  @Prop({ type: String, required: true }) readonly name!: string;

  isPwd = '';
  createUser!: (payload: UserDto) => Promise<void>;
  user: UserDto = {
    firstName: 'Pandi',
    middleName: 'Pogi',
    lastName: 'Panontongan',
    birthdate: '',
    gender: 'Male',
    address: 'MSU Main, Marawi City',
    contact: '',
    email: 'example@gmail.com',
    company: 'example co',
    location: 'Marawi city',
    type: this.name,
    status: 'pending',
    username: 'worker',
    password: 'password',
    refreshToken: ''
  };

  loading = false;

  async addUser() {
    try {
      this.loading = true;
      await this.createUser(this.user);
      await this.$router.replace('/login');
      this.loading = false;
      helperService.notify({
        type: 'positive',
        message: 'Successfully registered!'
      });
    } catch (error) {
      helperService.notify({
        type: 'negative',
        message: error.response.data.message,
        caption: error.message
      });
      this.loading = false;
    }
  }
}
</script>
