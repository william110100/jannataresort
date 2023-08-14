<template>
  <section
    id="home_accommodation"
    data-name="BlockFullscreenComponent"
    class="
      section
      block-fullscreen
      bg-blue-dark bg-image-section-two
      reveal
      section___container
      q_active
    "
  >
    <div class="q-container container-inner">
      <div class="columns">
        <div class="column">&nbsp;</div>
        <div class="column is-7">
          <h1 class="section-headline rev_item">THE STAY</h1>
          <div class="rev_item">
            <p v-html="data.model.description"></p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column villas-container">
          <GridImage :data="data" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "@/data/jannata-resort-spa.json";
import GridImage from "./GridImage.vue";

export default {
  data() {
    return {
      data: data.components[2],
    };
  },

  components: { GridImage },
};
</script>

<style>
#home_accommodation {
  padding: 150px 0;
}
.bg-image-section-two {
  position: relative;
  overflow: hidden;
}

.bg-blue-dark {
  background-color: #5f5c68;
}
.bg-image-section-two:before {
  background-image: url("https://jannataresort.com/_nuxt/img/a989adf.png");
  top: -1%;
  left: 20%;
  height: 100%;
  width: 300px;
}
.bg-image-section-two:after,
.bg-image-section-two:before {
  content: "";
  display: inline-block;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.4;
}
.bg-image-section-two:after {
  background-image: url("https://jannataresort.com/_nuxt/img/33d233c.png");
  bottom: -20%;
  right: 25%;
  height: 500px;
  width: 300px;
}
.bg-blue-dark .section-headline {
  color: #f0f0f5;
}
.bg-blue-dark p {
  color: #d8d6e2;
}
#home_accommodation .accommodations .accommodation-type {
  width: 33.33333%;
  float: left;
  height: 500px;
  position: relative;
}
#home_accommodation .accommodations .accommodation-type a {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
#home_accommodation
  .accommodations
  .accommodation-type
  a
  h4.accommodation-name {
  color: #fff;
  position: absolute;
  left: 20%;
  right: 20%;
  z-index: 2;
  bottom: 5%;
  font-size: 11px;
  line-height: 30px;
  text-align: left;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0 0 35px;
  letter-spacing: 2px;
}
#home_accommodation .accommodations .accommodation-type a .accommodation-bg,
#home_accommodation
  .accommodations
  .accommodation-type
  a
  .accommodation-bg-change,
#home_accommodation .accommodations .accommodation-type a h4.accommodation-name,
#home_accommodation
  .accommodations
  .accommodation-type
  a
  h4.accommodation-name:before {
  transition: all 0.3s ease;
}
#home_accommodation .accommodations .accommodation-type a .accommodation-bg {
  width: 98%;
  position: absolute;
  right: 0;
  height: 100%;
  z-index: 1;
  background-color: transparent;
  overflow: hidden;
  background-size: 95%;
  background-position: 50%;
  background-repeat: no-repeat;
  margin: auto;
  background-size: auto 100%;
  transition: all 0.4s ease;
}
#home_accommodation
  .accommodations:hover
  .accommodation-type
  a
  .accommodation-bg-change {
  background-size: 300% 100%;
  transform: translateX(0);
  width: 100%;
}

#home_accommodation
  .accommodations
  .accommodation-type
  a
  .accommodation-bg-change {
  content: "";
  width: 98%;
  position: absolute;
  height: 100%;
  transform: translateX(-105%);
  background-color: #333107;
  background-size: cover;
}

#home_accommodation
  .accommodations
  .accommodation-type:first-child
  a
  .accommodation-bg-change {
  background-position: 0;
}
#home_accommodation
  .accommodations
  .accommodation-type:nth-child(2)
  a
  .accommodation-bg-change {
  background-position: 50%;
}
#home_accommodation
  .accommodations
  .accommodation-type:nth-child(3)
  a
  .accommodation-bg-change {
  background-position: 100%;
}
#home_accommodation
  .accommodations:hover
  .accommodation-type
  a
  h4.accommodation-name {
  transform: translateX(10px);
  opacity: 0.3;
}
#home_accommodation
  .accommodations
  .accommodation-type
  a
  h4.accommodation-name:before {
  content: "";
  display: block;
  height: 1px;
  width: 100px;
  background-color: hsla(0, 0%, 100%, 0.8);
  margin: 10px 0 0;
  position: relative;
  left: 0;
}

@media screen and (max-width: 1024px) {
  #home_accommodation .accommodations .accommodation-type {
    height: 360px;
  }
  #home_accommodation
    .accommodations:hover
    .accommodation-type
    a
    h4.accommodation-name {
    opacity: 1;
    transform: translateX(0);
  }
  #home_accommodation
    .accommodations:hover
    .accommodation-type
    a:hover
    h4.accommodation-name:before {
    width: 100px;
  }
  #home_accommodation
    .accommodations:hover
    .accommodation-type
    a
    .accommodation-bg-change {
    transform: translateX(-105%);
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  #home_accommodation .accommodations .accommodation-type {
    margin: 0 auto 50px;
    height: 185px;
    width: calc(100% - 40px);
    float: none;
  }
  #home_accommodation .accommodations .accommodation-type a .accommodation-bg {
    background-size: 100%;
  }
  #home_accommodation
    .accommodations
    .accommodation-type
    a
    h4.accommodation-name {
    left: 10%;
  }
}
@media screen and (max-width: 540px) {
  #home_accommodation {
    padding: 50px 0;
  }
  #home_accommodation .section-headline {
    margin-bottom: 40px;
  }
  #home_accommodation .accommodations .accommodation-type {
    padding: 0;
    height: 150px;
    margin-bottom: 40px;
    width: 100%;
  }
}
</style>