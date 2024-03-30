<template lang="">
    <section class="about_section" :class="getClass">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-6">
          <div class="detail-box">
            <h2>
              About us
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
        <div class="col-lg-7 col-md-6">
          <div class="img-box">
            <img src="@/assets/about-img.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["parentCompo"],
  computed: {
    getClass() {
      if (this.parentCompo == "HomePage") {
        return "layout_padding-bottom"
      } else if (this.parentCompo == "AboutPage") {
        return "layout_padding"
      }
      return ""
    }
  },
}
</script>
<style lang="scss" scoped>
.layout_padding-bottom {
  padding-bottom: 120px;

  .img-box img {
    width: 100%;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
}

h2 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
}

a {
  margin-top: 15px;
  font-family: 'Merriweather Sans', sans-serif;
  text-transform: uppercase;
  padding: 10px 45px;
  background-color: #0355cc;
  border: 1px solid #0355cc;
  border-radius: 2px;
  color: #ffffff;

  &:hover {
    color: #0355cc;
  }
}
</style>