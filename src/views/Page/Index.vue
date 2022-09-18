<template>
  <div>
    <page-appbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageAppbar from "@/components/Appbar/PageAppbar.vue";

@Component({
  components: {
    PageAppbar,
  },
})
export default class extends Vue {}
</script>

<style scoped></style>
