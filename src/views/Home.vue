<template>
  <Header />
  <main class="home__main">
    <!-- <h1 class="trending">Trending</h1>

    <div
      class="trending__blog__container"
      v-for="items in trendingBlog"
      :key="items.id"
    >
      <router-link
        class="trending__blog"
        :to="{ name: 'Blogs', params: { id: items.id } }"
      >
        <img :src="items.blogImage" alt="Image" />
        <div class="trending__right__container">
          <div class="category">
            <p>
              <span>{{ items.blogContent }}</span
              >,
              <span>{{ items.blogContent2 }}</span>
              - {{ items.blogDate }}
            </p>
          </div>
          <div class="blog__info">
            <h2>{{ items.blogTitle }}</h2>
            <p>{{ items.blogIntro }}</p>

            <div class="author">
              <div class="author__image">
                <img :src="items.authorPic" alt="Author" />
              </div>
              <div class="author__name">
                <span>{{ items.authorName }}</span>
                <span> Blog Writer </span>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div> -->

    <h1>Let's Get In Touch With Latest Blogs</h1>

    <p class="home__paragraph">
      In a world where technological advancements are at the forefront of our
      daily lives, it's imperative to stay informed about the latest
      breakthroughs and trends that are shaping the future.
    </p>

    <div class="home__buttons__container">
      <button class="get__started__button">Get Started</button>
    </div>
  </main>

  <MoreBlogs />
  <section class="partners__container">
    <div class="partners">
      <img
        :src="items.logo"
        alt="Company"
        v-for="(items, index) in partnersPic"
        :key="index"
      />
    </div>
    <div class="partners__numbers__container">
      <div v-for="(items, index) in partners" :key="index">
        <h3>
          {{ items.partnersHeader }}
        </h3>
        <span>
          {{ items.partnersInfo }}
        </span>
      </div>
    </div>
  </section>
  <Newsletter />
  <Footer />
</template>

<script>
import Newsletter from "../components/Newsletter.vue";
import MoreBlogs from "../components/MoreBlogs.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    MoreBlogs,
    Newsletter,
    Footer,
  },

  data() {
    return {
      partners: [
        {
          partnersHeader: "400+",
          partnersInfo: "Projects Completed",
        },
        {
          partnersHeader: "600%",
          partnersInfo: "Return on investment",
        },
        {
          partnersHeader: "10k",
          partnersInfo: "Global downloads",
        },
        {
          partnersHeader: "200+",
          partnersInfo: "5-star reviews",
        },
      ],

      partnersPic: [
        {
          logo: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63e22e7e5665c75d55c692c5_Fictional%20company%20logo.png",
        },
        {
          logo: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63e22e7eba5e96e13f1fd1cd_Fictional%20company%20logo%20(1).png",
        },
        {
          logo: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63e22e7e39035a1923fa1c43_Fictional%20company%20logo%20(2).png",
        },
        {
          logo: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63e22e7f77ff37a6b079b28c_Fictional%20company%20logo%20(4).png",
        },
        {
          logo: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63e22e7eda4d5edecce3117d_Fictional%20company%20logo%20(3).png",
        },
        {
          logo: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63e22e7f962bf12e1d2dff45_Fictional%20company%20logo%20(5).png",
        },
      ],
    };
  },
};
</script>
