<template>
  <section class="help__container">
    <div class="left__help">
      <div
        id="carouselExampleControls"
        class="carousel slide help-carousel"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://assets.website-files.com/63cd075e763a9e7ef450a5b6/6419a6d1e767ef406984d925_group%20project.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://assets.website-files.com/63cd075e763a9e7ef450a5b6/6419a6d103e13c456fe5a1a4_office%20work.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://assets.website-files.com/63cd075e763a9e7ef450a5b6/6419a6d1240df84a10a03114_team%20hands.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="right__help">
      <h2>How can we help you?</h2>

      <div class="right__help__container">
        <div
          class="right__help__content"
          v-for="(items, index) in helpContent"
          :key="index"
        >
          <div class="right__help__header">
            <h3>{{ items.helpHeader }}</h3>
            <img alt="Arrow Icon" loading="lazy" :src="items.helpArrow" />
          </div>
          <p>
            {{ items.helpPara }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      helpContent: [
        {
          helpHeader: "We create quality posts for our audience",
          helpPara:
            "Lorem ipsum dolor sit amet consectetur. Suscipit vel pharetra auctor nibh convallis.",
          helpArrow:
            "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63da6d21d9e8c831ff9dad6d_Icon%20(1).svg",
        },
        {
          helpHeader: "We will help you understand which field suits you.",
          helpPara:
            "Lorem ipsum dolor sit amet consectetur. Suscipit vel pharetra auctor nibh convallis.",
          helpArrow:
            "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63da6d21d9e8c831ff9dad6d_Icon%20(1).svg",
        },
        {
          helpHeader: "The latest news from the IT world and beyond",
          helpPara:
            "Lorem ipsum dolor sit amet consectetur. Suscipit vel pharetra auctor nibh convallis.",
          helpArrow:
            "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63da6d21d9e8c831ff9dad6d_Icon%20(1).svg",
        },
      ],
    };
  },
};
</script>

<style></style>
