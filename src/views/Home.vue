<template>
  <Header />
  <main class="main">
    <h1 class="trending">Trending</h1>

    <router-link
      class="trending__blog"
      to="blogs"
      v-for="items in blog"
      :key="items.id"
    >
      <img :src="items.image" alt="Image" />
      <div class="trending__right__container">
        <div class="category">
          <p>
            <span>Technology</span>,
            <span>Business</span>
            - {{ items.blogDate }}
          </p>
        </div>
        <div class="blog__info">
          <h2>{{ items.blogTitle }}</h2>
          <p>{{ items.blogContent }}</p>

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
  </main>
  <MoreBlogs />
</template>

<script>
import MoreBlogs from "../components/MoreBlogs.vue";
import Header from "../components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
    MoreBlogs,
  },

  data() {
    return {
      blog: [],
    };
  },

  mounted() {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => (this.blog = data))
      .catch((err) => (err = console.log("error")));
  },
};
</script>
