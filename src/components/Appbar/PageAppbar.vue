<template>
  <v-app-bar height="64" flat width="100%">
    <v-app-bar-title class="mr-2">
      <v-img
        style="cursor: pointer"
        :style="
          $vuetify.theme.dark
            ? 'filter :brightness(1);'
            : 'filter: brightness(0);'
        "
        @click="routerPush('Home')"
        contain
        max-width="256"
        :src="require('@/assets/logo.svg')"
      />
    </v-app-bar-title>
    <v-btn text class="subtitle-1" :ripple="false">
      {{ $dayjs().format("MM/DD - hh:mm:ss") }}
    </v-btn>

    <v-spacer></v-spacer>

    <!-- <v-btn class="rounded-lg" @click="syncData()" icon :ripple="false">
      <vue-feather type="terminal" />
    </v-btn> -->
  </v-app-bar>
</template>

<script lang="ts">
import RouterPush from "@/mixins/routerPush";
import { Component, Mixins } from "vue-property-decorator";
@Component
export default class PageAppbar extends Mixins(RouterPush) {}
</script>

<style scoped></style>
