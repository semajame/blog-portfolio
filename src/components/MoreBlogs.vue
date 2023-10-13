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
      posts: [
        {
          id: 2,
          blogDate: "July 31, 2023",
          blogImage:
            "https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62e8f5cadbfdcca6a9d289a5_work-5.jpg",
          blogTitle:
            "The Role of Artificial Intelligence in Transforming Healthcare",
          blogContent:
            "Artificial Intelligence (AI) is revolutionizing various industries, and one sector where its impact is particularly significant is healthcare. ",
          authorPic:
            "https://preview.colorlib.com/theme/magdesign/images/person_1.jpg.webp",
          authorName: "Sergy Campbell",
        },
        {
          id: 3,
          blogDate: "June 1, 2023",
          blogImage:
            "https://preview.colorlib.com/theme/magdesign/images/img_4.jpg.webp",
          blogTitle:
            "Transforming Customer Service: The Rise of Artificial Intelligence",
          blogContent:
            "In a world dominated by technology and innovation, artificial intelligence (AI) has emerged as a groundbreaking force revolutionizing various industries. ",
          authorPic:
            "https://preview.colorlib.com/theme/magdesign/images/person_1.jpg.webp",
          authorName: "Sergy Campbell",
        },
        {
          id: 4,
          blogDate: "January 27, 2023",
          blogImage:
            "https://preview.colorlib.com/theme/magdesign/images/img_3.jpg.webp",
          blogTitle:
            "Transforming Customer Service: The Rise of Artificial Intelligence",
          blogContent:
            "In a world dominated by technology and innovation, artificial intelligence (AI) has emerged as a groundbreaking force revolutionizing various industries. ",
          authorPic:
            "https://preview.colorlib.com/theme/magdesign/images/person_1.jpg.webp",
          authorName: "Sergy Campbell",
        },
      ],
    };
  },

  // mounted() {
  //   fetch("http://localhost:3000/posts")
  //     .then((res) => res.json())
  //     .then((data) => (this.posts = data))
  //     .catch((err) => (err = console.log("error")));
  // },
};
</script>

<style></style>
