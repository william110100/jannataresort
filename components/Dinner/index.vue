<template>
  <section
    id="block-card-overlap"
    data-name="BlockCardOverlapComponent"
    class="
      section
      bg-vanilla bg-image-section-one
      block-card-section block-card-overlap
      reveal
      section___container
      q_active
    "
  >
    <div class="q-container container-inner">
      <div class="columns overlap-wrapper type-1">
        <div class="column block-picture wide">
          <figure
            class="picture"
            :style="{
              height: heightPic,
            }"
          >
            <div class="rev_clip" style="clip-path: inset(0px); opacity: 1">
              <img
                :src="
                  data.model.featured.aws_file_url +
                  '/' +
                  data.model.featured.path +
                  '/' +
                  data.model.featured.filename.raw
                "
                alt=""
                data-scroll
                data-scroll-speed="-2"
                class="clip_image is-inview"
                v-rellax="rellax.picture"
              />
            </div>
          </figure>
        </div>
        <div
          v-rellax="rellax.card"
          data-scroll
          data-scroll-speed="-2"
          class="column block-entry bg-white vs-div is-inview"
        >
          <div class="inner">
            <h2 class="title">
              <span class="q_split"
                ><span class="q_split_wrap rev_item">{{
                  data.model.title_one
                }}</span>

                <span class="q_split text-green"
                  ><span class="q_split_wrap rev_item">{{
                    data.model.title_two
                  }}</span></span
                >
              </span>
            </h2>
            <div class="title-line"></div>
            <div v-html="data.model.description"></div>
            <div class="rev_item">
              <ButtonMagnetic :title="data.model.link.title" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "@/data/jannata-resort-spa.json";
import ButtonMagnetic from "../Banner/ButtonMagnetic.vue";

export default {
  data() {
    return {
      rellax: {
        picture: {
          speed: 4,
          center: true,
        },
        card: {
          speed: -4,
          center: true,
        },
      },
      heightPic: "590px",
      data: data.components[3],
    };
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 768) {
        this.heightPic = "250px";
        this.rellax.card = {
          speed: -2,
          center: true,
        };
        this.rellax.picture = {
          speed: 2,
          center: true,
        };
      } else {
        this.heightPic = "590px";
        this.rellax.card = {
          speed: -4,
          center: true,
        };
        this.rellax.picture = {
          speed: 4,
          center: true,
        };
      }
    },
  },
  components: { ButtonMagnetic },
};
</script>
