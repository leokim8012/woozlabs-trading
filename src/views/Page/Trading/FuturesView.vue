<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="pa-0">
        <grid-layout
          ref="gridLayout"
          :layout.sync="layout"
          :layouts="layouts"
          :responsive-layouts="layouts"
          :margin="[$vuetify.breakpoint.xs ? 0 : 4, 4]"
          :col-num="24"
          :row-height="30"
          :is-draggable="$vuetify.breakpoint.smAndUp"
          :is-resizable="$vuetify.breakpoint.smAndUp"
          :responsive="responsive"
          :vertical-compact="true"
          :use-css-transforms="true"
        >
          <grid-item
            v-for="item in layout"
            :key="item.name"
            :static="item.static"
            :isResizable="$vuetify.breakpoint.smAndUp ? item.resizable : false"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
            :style="
              $vuetify.breakpoint.smAndUp
                ? 'touch-action: none;'
                : 'touch-action: pan-y;'
            "
            drag-allow-from=".vue-draggable-handle"
            :drag-ignore-from="$vuetify.breakpoint.smAndUp ? '.no-drag' : ''"
          >
            <resize-observer :name="item.name" />

            <component :ref="item.name" :is="item.component" />
          </grid-item>
        </grid-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { GridLayout, GridItem } from "vue-grid-layout";
import { layoutGrid } from "@/types/layoutGrid";
import ResizeObserver from "@/components/Common/ResizeObserver.vue";
import { ChartPanel, OrderPanel, InformationPanel } from "@/containers/panels";
@Component({
  components: {
    GridLayout,
    GridItem,
    ResizeObserver,
    ChartPanel,
    OrderPanel,
    InformationPanel,
  },
})
export default class FuturesView extends Vue {
  layouts = layoutGrid;
  layout = layoutGrid.lg;
  responsive = true;
  draggable = true;
  resizable = true;
  index = 0;
  checkAPILoading = false;
}
</script>

<style scoped></style>
