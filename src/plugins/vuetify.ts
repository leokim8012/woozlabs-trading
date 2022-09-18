import Vue from "vue";
import Vuetify from "vuetify";

import "@/styles/sass/style.scss"; // style.scss를 한번만 불러오면 자동으로 css로 컴파일 해줌

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    default: "dark",
    dark: true,

    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#8C3BFF",
        secondary: "#637AB0",

        surface: "#f5f5f5",
        onSurface: "#000",
        background: "#fff",
        onBackground: "#000",

        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
      dark: {
        primary: "#8C3BFF",
        secondary: "#637AB0",

        surface: "#1E1E1E",
        onSurface: "#fff",
        background: "#000",
        onBackground: "#fff",

        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
});
