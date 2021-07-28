<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="$route.path == '/login' ? 'bg-transparent' : ''">
      <q-toolbar>
        <q-toolbar-title
          class="row items-center cursor-pointer"
          @click="$router.replace('/home')"
        >
          <img class="q-pl-md" src="~/assets/Esugo2.png" height="25px" />
        </q-toolbar-title>

        <div
          v-if="$route.path != '/signup' && $route.path != '/review'"
          class="q-gutter-x-md"
        >
          <q-btn
            flat
            color="white"
            icon="person"
            label="Sign-up"
            to="/signup"
          />
          <span>|</span>
          <q-btn flat color="white" icon="person" label="Log-in" to="/login" />
        </div>
        <div v-if="$route.path == '/review'" class="q-gutter-x-md">
          <q-btn flat color="white " icon="person" label="Log-out" to="/home" />
        </div>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container
      :style="$route.path == '/login' ? 'padding-top: 0 !important;' : ''"
    >
      <router-view />
    </q-page-container>
  </q-layout>
</template>
