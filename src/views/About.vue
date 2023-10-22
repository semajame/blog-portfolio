<template>
  <Header />
  <main class="about">
    <div class="about__container">
      <div class="left__about">
        <h2>About Our Blog</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Suscipit vel pharetra auctor
          nibh convallis ac turpis. Eu eget amet ornare aliquet vel eu id id.
          Enim eget nullam elit magna massa consequat.
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
    <!-- <section class="team__members__container">
      <h3>Team Members</h3>
      <span>Winning starts with a team</span>

      <div class="team__members">
        <div class="members" v-for="(items, index) in members" :key="index">
          <img :src="items.memberPhoto" alt="Profile Pic" />
          <div class="member__name__container">
            <p class="member__name">
              {{ items.memberName }}
            </p>
            <p class="member__title">
              {{ items.memberTitle }}
            </p>
          </div>
        </div>
      </div>
    </section> -->
  </main>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "About",
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      members: [
        {
          memberPhoto:
            "https://assets.website-files.com/621d3c0126be8c7b596780fe/621f358c1fead8edf7574cc6_team05.jpg",
          memberName: "Cody Fisher",
          memberTitle: "Software Developer",
        },
        {
          memberPhoto:
            "https://assets.website-files.com/621d3c0126be8c7b596780fe/621d422d4e09607168f68e06_author07.jpg",
          memberName: "Courtney Henry",
          memberTitle: "Blog Writer",
        },
        {
          memberPhoto:
            "https://preview.colorlib.com/theme/magdesign/images/person_1.jpg.webp",
          memberName: "Sergy Campbell",
          memberTitle: "Blog Writer",
        },
        {
          memberPhoto:
            "https://assets.website-files.com/621d3c0126be8c7b596780fe/621d41be3fef4a8c7a1b0f49_author01.jpg",
          memberName: "Esther Howard",
          memberTitle: "Software Developer",
        },
        {
          memberPhoto:
            "https://assets.website-files.com/621d3c0126be8c7b596780fe/621d421b7f79c2192dfe617a_author06.jpg",
          memberName: "Jenny Wilson",
          memberTitle: "Blog Writer",
        },
        {
          memberPhoto:
            "https://assets.website-files.com/621d3c0126be8c7b596780fe/621d420721efea4682f07081_author04.jpg",
          memberName: "Ronald Richards",
          memberTitle: "UI/UX Designer",
        },
      ],
    };
  },
};
</script>
