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
      trendingBlog: [
        //   {
        //     id: 1,
        //     blogDate: "February 7, 2023",
        //     blogImage:
        //       "https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62e8f5cadbfdcc7383d289a3_work-3.jpg",
        //     blogTitle: "The Importance of Cybersecurity in Today's Digital World",
        //     blogIntro:
        //       "In today's interconnected world, where technology plays an integral role in our personal and professional lives, the importance of cybersecurity cannot be emphasized enough. Cyber threats are becoming increasingly sophisticated and prevalent, posing significant risks to individuals, businesses, and even nations. In this blog post, we will delve deeper into why cybersecurity is crucial in our digital landscape.",
        //     authorPic:
        //       "https://preview.colorlib.com/theme/magdesign/images/person_1.jpg.webp",
        //     authorName: "Sergy Campbell",
        //   },
      ],
    };
  },

  mounted() {
    fetch("http://localhost:3000/trendingPost")
      .then((res) => res.json())
      .then((data) => (this.trendingBlog = data))
      .catch((error) => (error = console.log("error")));
  },
};
</script>
