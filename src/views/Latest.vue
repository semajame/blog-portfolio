<template>
  <Header />
  <h1 class="trending">Latest</h1>
  <section class="latest__container">
    <MoreBlogsVue />
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import MoreBlogsVue from "@/components/MoreBlogs.vue";
export default {
  name: "Latest",
  components: {
    Header,
    MoreBlogsVue,
  },
};
</script>
