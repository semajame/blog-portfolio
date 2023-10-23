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

    <h1>{{ homeHeader }}</h1>

    <p class="home__paragraph">
      {{ homePara }}
    </p>

    <div class="home__buttons__container">
      <button class="get__started__button">Get Started</button>
      <button class="contact__button" id="contact">Contact Us</button>
    </div>
  </main>

  <MoreBlogs />

  <Newsletter />
  <Footer />
</template>

<script>
import Newsletter from "../components/Newsletter.vue";
import MoreBlogs from "../components/MoreBlogs.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Partners from "../components/Partners.vue";

export default {
  name: "Home",
  components: {
    Header,
    MoreBlogs,
    Newsletter,
    Footer,
    Partners,
  },

  data() {
    return {
      homePara:
        " In a world where technological advancements are at the forefront of our daily lives, it's imperative to stay informed about the latest breakthroughs and trends that are shaping the future.",
      homeHeader: "Let's Get In Touch With Latest Technology",
    };
  },
};
</script>
