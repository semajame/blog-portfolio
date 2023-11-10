<template>
  <div class="more__blogs__header__container">
    <h2>Latest blog posts</h2>
  </div>
  <section class="more__blogs__container">
    <div class="more__blogs" v-for="items in posts" :key="items.id">
      <router-link
        :to="{
          name: 'Blogs',
          params: { id: items.id },
        }"
        class="more__blogs__links"
      >
        <div class="more__blogs__left">
          <img :src="items.blogImage" alt="Image" class="blog__image" />
        </div>
        <div class="more__blogs__right">
          <div class="author">
            <div class="author__name">
              <span>{{ items.authorName }}</span>
              <span class="author__circle"></span>
              <span> Blog Writer </span>
            </div>

            <div>
              <img
                alt="Arrow Icon"
                loading="lazy"
                src="https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63da6d21d9e8c831ff9dad6d_Icon%20(1).svg"
              />
            </div>
          </div>

          <div class="blog__info">
            <h2>{{ items.blogTitle }}</h2>
            <p>{{ items.blogIntro }}</p>

            <div class="category">
              <p>
                <span>{{ items.blogCategory }}</span
                >,
                <span>{{ items.blogCategory2 }}</span>
                - {{ items.blogDate }}
              </p>
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
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => (this.posts = data))
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>
