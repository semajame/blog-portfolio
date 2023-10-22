<template>
  <section class="partners__container">
    <div class="partners__choose">
      <h2>Why choose us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Suscipit vel pharetra auctor
        nibh convallis ac turpis. Eu eget amet ornare aliquet vel eu id id. Enim
        eget nullam elit magna massa consequat.
      </p>
    </div>
    <div class="partners__numbers__container">
      <div v-for="(items, index) in partners" :key="index">
        <h3>
          {{ items.partnersHeader }}
        </h3>
        <span>
          {{ items.partnersInfo }}
        </span>
      </div>
    </div>
    <div class="partners">
      <img
        :src="items.logo"
        alt="Company"
        v-for="(items, index) in partnersPic"
        :key="index"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          partnersHeader: "400+",
          partnersInfo: "Projects Completed",
        },
        {
          partnersHeader: "600%",
          partnersInfo: "Return on investment",
        },
        {
          partnersHeader: "1M",
          partnersInfo: "Global reads",
        },
        {
          partnersHeader: "200+",
          partnersInfo: "5-star reviews",
        },
      ],

      partnersPic: [
        {
          logo: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63e22e7e5665c75d55c692c5_Fictional%20company%20logo.png",
        },
        {
          logo: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63e22e7eba5e96e13f1fd1cd_Fictional%20company%20logo%20(1).png",
        },
        {
          logo: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63e22e7e39035a1923fa1c43_Fictional%20company%20logo%20(2).png",
        },
        {
          logo: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63e22e7f77ff37a6b079b28c_Fictional%20company%20logo%20(4).png",
        },
        {
          logo: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63e22e7eda4d5edecce3117d_Fictional%20company%20logo%20(3).png",
        },
        {
          logo: "https://assets.website-files.com/63cd075e763a9e7ef450a5b6/63e22e7f962bf12e1d2dff45_Fictional%20company%20logo%20(5).png",
        },
      ],
    };
  },
};
</script>

<style></style>
