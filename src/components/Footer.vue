<template>
  <footer class="footer__container">
    <div class="top__footer__container">
      <div class="left__footer">
        <router-link to="/">
          <img :src="logo" alt="Logo Image" class="logo__img" />
        </router-link>
      </div>
      <nav>
        <ul>
          <li>
            <router-link
              v-for="(links, index) in routerLink"
              :key="index"
              :to="links.path"
              class="router__link"
            >
              {{ links.component }}</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="socials__container">
        <div class="share__links">
          <a
            :href="socials.url"
            v-for="(socials, index) in socials"
            :key="index"
            target="_blank"
          >
            <img
              :src="socials.socialPic"
              :alt="socials.alt"
              class="social__icons"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="bottom__footer__container">
      <p>© All Rights Reserved 2023.</p>
    </div>
  </footer>
</template>

<script>
import logoImg from "/public/assets/logo.png";
export default {
  data() {
    return {
      routerLink: [
        {
          path: "/",
          name: "home",
          component: "Home",
        },
        {
          path: "/latest",
          name: "latest",
          component: "Latest",
        },
        {
          path: "/about",
          name: "about",
          component: "About",
        },
      ],

      socials: [
        {
          socialPic: "/assets/facebook-f.svg",
          url: "https://www.facebook.com/",
          alt: "Facebook Icon",
        },
        {
          socialPic: "/assets/twitter.svg",
          url: "https://www.twitter.com/",
          alt: "Twitter Icon",
        },
        {
          socialPic: "/assets/linkedin.svg",
          url: "https://www.linkedin.com/",
          alt: "Linked Icon",
        },
      ],

      logo: logoImg,
    };
  },
};
</script>

<style></style>
