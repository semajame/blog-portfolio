<template>
  <Header />
  <main v-if="items">
    <div class="main__blog">
      <h1>{{ items.blogTitle }}</h1>

      <p>
        {{ items.mainBlogContent }}
      </p>

      <img :src="items.blogImage" alt="Technology" />

      <p>
        {{ items.mainBlogContentTwo }}
      </p>

      <br />

      <p>
        {{ items.mainBlogContentThree }}
      </p>
    </div>

    <div class="share__container">
      <h3>Share</h3>

      <div class="share__links">
        <a
          :href="socials.url"
          v-for="(socials, index) in socials"
          :key="index"
          target="_blank"
        >
          <img
            :src="socials.socialPic"
            :alt="socials.alt"
            class="social__icons"
          />
        </a>
      </div>
    </div>
  </main>

  <div v-else class="loading">Loading...</div>
  <Newsletter />

  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import MoreBlogs from "../components/MoreBlogs.vue";
import Newsletter from "../components/Newsletter.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    MoreBlogs,
    Footer,
    Newsletter,
  },

  props: ["id"],

  data() {
    return {
      items: null,

      socials: [
        {
          socialPic: "/assets/facebook-f.svg",
          url: "https://www.facebook.com/",
          alt: "Facebook Icon",
        },
        {
          socialPic: "/assets/twitter.svg",
          url: "https://www.twitter.com/",
          alt: "Twitter Icon",
        },
        {
          socialPic: "/assets/linkedin.svg",
          url: "https://www.linkedin.com/",
          alt: "Linked Icon",
        },
        {
          socialPic: "/assets/pinterest.svg",
          url: "https://www.pinterest.com/",
          alt: "Pinterest Icon",
        },
      ],
    };
  },

  mounted() {
    fetch("http://localhost:3000/posts/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.items = data))
      .catch((err) => (err = console.log("error")));
  },
};
</script>
