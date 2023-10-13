<template>
  <section class="more__blogs__container">
    <div class="more__blogs" v-for="items in posts" :key="items.id">
      <router-link
        :to="{ name: 'Blogs', params: { id: items.id } }"
        class="more__blogs__links"
      >
        <img :src="items.blogImage" alt="Image" class="blog__image" />
        <div class="more__blogs__right">
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
  </section>
</template>

<script>
export default {
  name: "MoreBlogs",
  data() {
    return {
      posts: [],
    };
  },

  mounted() {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => (this.posts = data))
      .catch((err) => (err = console.log("error")));
  },
};
</script>

<style></style>
