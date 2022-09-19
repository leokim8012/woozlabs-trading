<template>
  <v-card class="surface rounded-lg overflow-hidden" height="100%" flat>
    <v-card-title>
      <div class="vue-draggable-handle"></div>
      Empty Panel
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TradesPanel extends Vue {}
</script>

<style></style>
