<template>
  <section
    id="page_summary"
    data-name="SlideTestimonialComponent"
    class="
      section
      our-story-summary
      bg-image-section-one
      testi
      section___container
    "
  >
    <div class="q-container container-inner">
      <div class="columns type-1">
        <div id="testimonial" class="column" tabindex="0">
          <div
            class="slide"
            v-for="(item, index) in data.model.dataSlider"
            :key="item.title + index"
          >
            <p>
              {{ item.description }}
            </p>
            <small>{{ item.title }}</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "@/data/jannata-resort-spa.json";

export default {
  data() {
    return {
      data: data.components[5],
    };
  },
};
</script>

<style>
#page_summary {
  position: relative;
  z-index: 1;
  background: #f0f0f5;
}
.our-story-summary {
  padding-bottom: 150px;
}
#page_summary .type-1 .column {
  max-width: 570px;
  margin: auto;
  text-align: center;
}
#testiTwo {
  position: relative;
}
.testi .slide {
  width: 100%;
  padding-bottom: 50px;
}
#page_summary .type-1 p {
  text-align: center;
  margin: 0;
  font-size: 20px;
}

#page_summary .type-1 small {
  display: block;
  font-size: 15px;
  margin-top: 30px;
}

@media screen and (max-width: 768px) {
  .our-story-summary {
    padding-bottom: 40px;
  }
  #page_summary .type-1 p {
    font-size: 14px;
    line-height: 26px;
  }
}

@media screen and (max-width: 540px) {
  #page_summary .type-1 p {
    text-align: left;
    font-size: 12px;
    line-height: 24px;
  }
  #page_summary .type-1 small {
    font-size: 12px;
  }
}
</style>