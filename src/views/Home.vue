<template>
  <Header />
  <main class="main">
    <h1 class="trending">Trending</h1>

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
    </div>
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
      trendingBlog: [],
    };
  },

  mounted() {
    fetch("http://localhost:3000/trendingPost")
      .then((res) => res.json())
      .then((data) => (this.trendingBlog = data))
      .catch((err) => (err = console.log("error")));
  },
};
</script>
