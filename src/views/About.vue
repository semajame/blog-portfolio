<template>
  <Header />
  <main class="about">
    <div class="weare__container">
      <h2>{{ weareHeader }}</h2>

      <p>
        {{ wearePara }}
      </p>

      <div class="weare__images__container">
        <img
          :src="items.img"
          alt="People Images"
          v-for="(items, index) in weareImages"
          :key="index"
        />
      </div>
    </div>
    <div class="about__container">
      <div class="left__about">
        <h2>{{ aboutHeader }}</h2>
        <p>
          {{ aboutPara }}
        </p>

        <div class="about__button__container">
          <router-link to="/" class="about__started__button"
            >Get Started</router-link
          >
        </div>
      </div>
      <div class="right__about">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=1398&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="d-block w-100"
                alt="Person"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Cody Fisher</h5>
                <p>Software Developer</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="d-block w-100"
                alt="Person"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Esther Howard</h5>
                <p>UI/UX Developer</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1587397845856-e6cf49176c70?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="d-block w-100"
                alt="Person"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Sergy Campbell</h5>
                <p>Blog Writer</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </main>
  <Partners />
  <Newsletter />

  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Newsletter from "../components/Newsletter.vue";
import Partners from "../components/Partners.vue";

export default {
  name: "About",
  components: {
    Header,
    Footer,
    Newsletter,
    Partners,
  },

  data() {
    return {
      weareHeader: "We are the people who compelling the stories",
      wearePara:
        "Lorem ipsum dolor sit amet consectetur. Suscipit vel pharetra auctor nibh convallis ac turpis. Eu eget amet ornare aliquet vel eu id id. Enimeget nullam elit magna massa consequat.",

      weareImages: [
        {
          img: " https://assets.website-files.com/63cd075e763a9e7ef450a5b6/6419a6d1e767ef406984d925_group%20project.webp",
        },
        {
          img: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/6419a6d103e13c456fe5a1a4_office%20work.webp",
        },
        {
          img: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/6419a6d1240df84a10a03114_team%20hands.webp",
        },
        {
          img: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/6419a6d1e767ef22de84d926_handshaking.webp",
        },
        {
          img: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/6419a6d1753feb01b642a55e_team%20work-p-500.webp",
        },
      ],

      aboutHeader: "About Our Blog",
      aboutPara:
        "Lorem ipsum dolor sit amet consectetur. Suscipit vel pharetra auctor nibh convallis ac turpis. Eu eget amet ornare aliquet vel eu id id. Enim eget nullam elit magna massa consequat.",
    };
  },
};
</script>
