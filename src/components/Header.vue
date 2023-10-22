<template>
  <header>
    <div class="left__header">
      <router-link to="/" class="logo"> TechTalk</router-link>
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
    <div class="contact__header">
      <button class="contact__button" id="contact">Contact Us</button>
    </div>
  </header>
</template>

<script>
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
    };
  },
};
</script>
