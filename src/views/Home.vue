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
      trendingBlog: [
        {
          id: 1,
          blogDate: "February 7, 2023",
          blogImage:
            "https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62e8f5cadbfdcc7383d289a3_work-3.jpg",
          blogTitle: "The Importance of Cybersecurity in Today's Digital World",
          blogContent:
            "In today's interconnected world, where technology plays an integral role in our personal and professional lives, the importance of cybersecurity cannot be emphasized enough. Cyber threats are becoming increasingly sophisticated and prevalent, posing significant risks to individuals, businesses, and even nations. In this blog post, we will delve deeper into why cybersecurity is crucial in our digital landscape.",
          authorPic:
            "https://preview.colorlib.com/theme/magdesign/images/person_1.jpg.webp",
          authorName: "Sergy Campbell",
        },
      ],
    };
  },

  // mounted() {
  //   fetch("/data/blog.json")
  //     .then((res) => res.json())
  //     .then((data) => (this.trendingBlog = data))
  //     .catch((error) => (error = console.log("error")));
  // },
};
</script>
