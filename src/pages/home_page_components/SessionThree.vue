<template lang="">
    <section class="about_section layout_padding-bottom">
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
</style>