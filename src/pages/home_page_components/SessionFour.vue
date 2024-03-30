<template lang="">
    <section class="professional_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="img-box">
            <img src="@/assets/professional-img.png" alt="">
          </div>
        </div>
        <div class="col-md-6 ">
          <div class="detail-box">
            <h2>
              We Provide Professional <br>
              Home Services.
            </h2>
            <p>
              randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly
            </p>
            <a href="">
              Read More
            </a>
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
.professional_section {
    width: 100%;
    background-color: #d1e3ff;

    h2 {
        text-transform: uppercase;
        font-weight: bold;
        color: #0355cc;
        font-size: 2rem;
    }

    a {
        text-transform: uppercase;
        padding: 10px 45px;
        background-color: #ff8a1d;
        border: 1px solid #ff8a1d;
        border-radius: 5px;
        color: #ffffff;
        margin-top: 15px;

        &:hover {
            color: #ff8a1d;
        }
    }
}
</style>