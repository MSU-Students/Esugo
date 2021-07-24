<template>
  <q-card>
    <div style="width:400px">
      <q-input
        dense
        filled
        v-model="user.firstName"
        label="First name *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        dense
        filled
        v-model="user.middleName"
        label="Middle name *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        dense
        filled
        v-model="user.lastName"
        label="Surname *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="user.birthdate"
        mask="date"
        label="Birth Day *"
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
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
        dense
        filled
        v-model="user.gender"
        label="Gender *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        dense
        filled
        v-model="user.address"
        label="Permanent Address *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        dense
        v-model="user.contact"
        label="Contact Number*"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        dense
        v-model="user.email"
        label="Email Address*"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        dense
        filled
        v-model="user.username"
        label="Usernane*"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        color="blue-9"
        outlined
        v-model="user.password"
        filled
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
    </div>
    <q-btn class="full-width" color="primary" label="sign-up" @click="addUser()" />
  </q-card>
</template>

<script lang="ts">
import { UserDto } from 'src/services/rest-api';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mapActions } from 'vuex';

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
    birthdate: '2021-08-11',
    gender: 'Male',
    address: 'MSU Main, Marawi City',
    contact: '+639990001111',
    email: 'example@gmail.com',
    company: 'example co',
    location: 'Marawi city',
    type: this.name,
    status: 'pending',
    username: 'worker',
    password: 'password',
    refreshToken: ''
  };  
  async addUser() {
    console.log(this.user )
    await this.createUser(this.user);
  }
  }
</script>
