<template>
  <Header />
  <div class="content">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="row align-items-center">
            <div class="col-lg-7 mb-5 mb-lg-0">
              <h2 class="mb-5">
                Fill the form. <br />
                It's easy.
              </h2>

              <form
                class="border-right pr-5 mb-5"
                method="post"
                id="contactForm"
                action="https://formsubmit.co/e24b0f01cd97a5986592ab64c1f28c72"
                name="contactForm"
              >
                <div class="row mb-4">
                  <div class="col-md-12 form-group">
                    <input
                      type="text"
                      class="form-control p-2"
                      name="fname"
                      id="fname"
                      placeholder="Full name"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-md-12 form-group">
                    <input
                      type="email"
                      class="form-control p-2"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-md-12 form-group">
                    <textarea
                      class="form-control p-2 h-100"
                      name="message"
                      id="message"
                      cols="50"
                      rows="7"
                      placeholder="Write your message"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <input
                      type="submit"
                      value="Send Message"
                      class="btn btn-primary rounded-0 py-2 px-4"
                    />
                    <span class="submitting"></span>
                  </div>
                </div>
              </form>

              <div id="form-message-warning mt-4"></div>
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>
            </div>
            <div class="col-lg-4 ml-auto">
              <h3 class="mb-4">Let's talk about everything.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                deleniti itaque similique magni. Magni, laboriosam perferendis
                maxime!
              </p>
              <p><a href="#">Read more</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  data() {
    return {};
  },

  components: {
    Header,
  },
};
</script>

<style>
body {
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  background-color: #fff !important;
  color: #000;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: "Poppins", sans-serif;
}

a {
  transition: 0.3s all ease;
}
a,
a:hover {
  text-decoration: none !important;
}

.content {
  padding: 7rem 0;
}

h2 {
  font-size: 3.5rem;
  font-weight: 700;
}

h3 {
  font-size: 2rem;
  font-weight: 700;
}

.form-control {
  border: none;
  border-bottom: 1px solid #d9d9d9;
  padding-left: 0;
  padding-right: 0;
  border-radius: 0;
}
.form-control:active,
.form-control:focus {
  outline: none;
  box-shadow: none;
  border-color: #000;
}

.btn,
.form-control {
  height: 55px;
}

form.border-right {
  padding-right: 6rem !important;
}
@media (max-width: 991.98px) {
  form.border-right {
    padding-right: 0 !important;
    border-right: none !important;
  }
}

label.error {
  font-size: 12px;
  color: red;
}

#message {
  resize: vertical;
}

#form-message-warning,
#form-message-success {
  display: none;
}

#form-message-warning {
  color: #b90b0b;
}

#form-message-success {
  color: #55a44e;
  font-size: 18px;
  font-weight: bold;
}

.submitting {
  float: left;
  width: 100%;
  padding: 10px 0;
  display: none;
  font-weight: bold;
  font-size: 12px;
  color: #000;
} /*# sourceMappingURL=contact.css.map */
</style>
