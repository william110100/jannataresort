import Vue from "vue";

export const store = Vue.observable({
  isInitialPageLoad: true,
  splashScreenEnabled: true,
  pageTransitionEnabled: false,
  isNavSmall: false,
});

export const mutations = {
  initalPageLoadDone() {
    store.isInitialPageLoad = false;
  },
  hideSplashScreen() {
    store.splashScreenEnabled = false;
  },
  enablePageTransition(yesno) {
    store.pageTransitionEnabled = yesno;
  },
  shrinkNav() {
    store.isNavSmall = true;
  },
  growNav() {
    store.isNavSmall = false;
  },
};
