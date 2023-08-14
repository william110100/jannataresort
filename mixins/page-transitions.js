import { store, mutations } from "~/store/store.js";

const enterSplashScreenTransition = [
  {
    targets: ".splashScreen",
    translateY: "0",
    opacity: 1,
    easing: "easeInExpo",
  },
  {
    targets: ".splashScreen",
    translateY: "-100%",
    delay: 100,
    duration: 1300,
    easing: "easeInOutQuad",
  },
];

const enterPageTransition = {
  targets: ".pageTransScreen",
  opacity: 0,
  easing: "easeInOutQuad",
  translateY: "-100%",
  duration: 1300,
  delay: 500,
};

const leavePageTransition = {
  targets: ".pageTransScreen",
  opacity: 1,
  easing: "easeInOutCubic",
  duration: 200,
};

const PageTransitions = (enterChild, leaveChild) => ({
  transition: {
    mode: "out-in",
    css: false,
    enter(el, done) {
      let opt = {};
      if (store.isInitialPageLoad) {
        opt = enterSplashScreenTransition;
        mutations.initalPageLoadDone();
      } else {
        opt = enterPageTransition;
      }

      if (Array.isArray(opt)) {
        let tl = this.$anime.timeline({ autoPlay: false });
        if (enterChild !== undefined) {
          opt[opt.length - 1].complete = () => {
            mutations.hideSplashScreen();
            mutations.enablePageTransition(false);
            enterChild(el, done);
          };
        } else {
          opt[opt.length - 1].complete = () => {
            mutations.hideSplashScreen();
            mutations.enablePageTransition(false);
            done();
          };
        }
        for (const anim of opt) {
          tl.add(anim);
        }
        tl.play();
      } else {
        if (enterChild !== undefined) {
          opt.complete = () => {
            mutations.enablePageTransition(false);
            enterChild(el, done);
          };
        } else {
          opt.complete = () => {
            mutations.enablePageTransition(false);
            done();
          };
        }
        this.$anime(opt);
      }
    },
    leave(el, done) {
      let opt = {};
      if (!store.isInitialPageLoad) {
        opt = leavePageTransition;
      }
      if (leaveChild !== undefined) {
        opt.complete = () => {
          mutations.enablePageTransition(true);
          leaveChild(el, done);
        };
      } else {
        opt.complete = () => {
          mutations.enablePageTransition(true);
          done();
        };
      }
      this.$anime(opt);
    },
  },
});

export default PageTransitions;
