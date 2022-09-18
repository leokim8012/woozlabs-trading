/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import Vue from "vue";
declare module "vue-feather";
// declare module "vue-masonry";
// declare module "@egjs/vue-flicking";

// import firebase from "firebase/compat/app";
// import firebaseAuth from "firebase/auth";
import dayjs from "dayjs";
declare module "vue/types/vue" {
  interface Vue {
    // $firebase: typeof firebase;
    // $firebaseAuth: typeof firebaseAuth;
    $dayjs: typeof dayjs;
  }
}
