<template>
  <Header />
  <main v-if="items">
    <div class="author blog__author__container">
      <div class="author__image">
        <img :src="items.authorPic" alt="Author" class="blog__author__image" />
      </div>
      <div class="author__name blog__author">
        <span class="blog__name">{{ items.authorName }}</span>
        <span class="blog__date"> {{ items.blogDate }} </span>
      </div>
    </div>

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

      <div
        class="images__container"
        v-for="(pictures, index) in blogPictures"
        :key="index"
      >
        <img :src="pictures.image" alt="pictures" />
      </div>
    </div>
  </main>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },

  props: ["id"],

  data() {
    return {
      items: null,
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

<style></style>
