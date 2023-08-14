<template>
  <section
    id="q_slide"
    autoplay
    animate
    mousefollow
    parallax
    opacity=".3"
    class="q_slide_section"
  >
    <div class="q_slide-inner">
      <div class="slides">
        <div
          class="slide"
          :class="{ q_current: index === 0 }"
          id="page-top-banner"
          v-for="(item, index) in data.model.dataSlider"
          :key="item.title + index.toString()"
        >
          <div class="slide-content">
            <div class="caption">
              <h1 class="q_splitText">
                {{ item.title.replace(" ", "&nbsp;") }}
              </h1>
              <p>
                {{ item.description }}
              </p>
              <ButtonMagnetic
                :title="item.link.title"
                type="button"
                style="padding: 3rem"
              />
            </div>
          </div>
          <ImageBanner :data="item.featured" />
        </div>
      </div>

      <!-- Pagination -->

      <div class="pagination">
        <div class="item q_current">
          <span class="icon">1</span>
        </div>
        <div class="item">
          <span class="icon">2</span>
        </div>
        <div class="item">
          <span class="icon">3</span>
        </div>
        <div class="item">
          <span class="icon">4</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "@/data/jannata-resort-spa.json";
import ImageBanner from "./ImageBanner.vue";
import ButtonMagnetic from "./ButtonMagnetic.vue";

export default {
  components: { ImageBanner, ButtonMagnetic },
  data() {
    return {
      data: data.components[0],
    };
  },
};
</script>
