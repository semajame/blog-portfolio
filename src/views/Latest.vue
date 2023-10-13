<template>
  <Header />
  <h1 class="trending">Latest</h1>
  <section class="latest__container">
    <MoreBlogs />
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import MoreBlogs from "../components/MoreBlogs.vue";
export default {
  name: "Latest",
  components: {
    Header,
    MoreBlogs,
  },
};
</script>
