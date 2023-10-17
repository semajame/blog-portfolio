<template>
  <Header />
  <main>
    <h1 class="trending">Blogs</h1>
    <section class="latest__container">
      <MoreBlogs />
    </section>
  </main>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import MoreBlogs from "../components/MoreBlogs.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Latest",
  components: {
    Header,
    MoreBlogs,
    Footer,
  },
};
</script>
