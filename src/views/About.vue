<template>
  <Header />
  <main class="about">
    <section class="team__members__container">
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
    </section>
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
