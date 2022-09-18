<template>
  <v-container class="base-container">
    <v-card flat class="text-center transparent">
      <v-card-title class="justify-center headline">
        There is no page. you are looking for.
      </v-card-title>

      <v-card-text>
        Invalid access or the requested page could not be found. Please double
        check that the address on the page you entered is correct.
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn
          @click="routerPush('/page')"
          class="font-weight-bold body-2 pa-5"
          :ripple="false"
          x-large
          depressed
          rounded
        >
          Go to Home
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import RouterPush from "@/mixins/routerPush";
import setMeta from "@/utils/setMeta";
@Component({
  components: {},
})
export default class NotFound extends Mixins(RouterPush) {
  mounted() {
    setMeta({ title: "404", description: "Page Not Found" });
  }
}
</script>

<style scoped></style>
