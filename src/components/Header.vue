<template>
  <header>
    <div class="left__header">
      <router-link to="/" class="logo">
        <img :src="logo" alt="" class="logo__img" />
      </router-link>
    </div>
    <div class="right__header">
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
    </div>
  </header>
</template>

<script>
import logoImg from "/public/assets/logo.png";
export default {
  setup() {
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

      logo: logoImg,
    };
  },
};
</script>
