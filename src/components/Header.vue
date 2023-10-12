<template>
  <header>
    <div class="left__header">
      <router-link to="/" class="router__link logo"> Blog </router-link>
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
export default {
  setup() {
    return {
      routerLink: [
        {
          path: "/",
          name: "home",
          component: "home",
        },
        {
          path: "/latest",
          name: "latest",
          component: "latest",
        },
        {
          path: "/about",
          name: "about",
          component: "about",
        },
      ],
    };
  },
};
</script>
