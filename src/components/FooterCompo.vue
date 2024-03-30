<template>
  <section class="info_section">
    <div class="container">
      <h4>
        Get In Touch
      </h4>
      <div class="row row-one">
        <div class="item" v-for="item in listContact" :key="item">
          <div class="img-box ">
            <i class="fa" :class="item.class" aria-hidden="true"></i>
          </div>
          <p>
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="social-box">
      <h4>
        Follow Us
      </h4>
      <div class="box">
        <div class="icon-social" v-for="item in listSocicals" :key="item">
          <i class="fa" :class="item" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </section>
  <footer class="footer_section">
    <div class="container">
      <p>
        © <span id="displayDateYear">2024</span> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      listContact: [
        { text: "Lorem Ipsum is simply dummy text", class: "fa-map-marker" },
        { text: "+02 1234567890", class: "fa-phone" },
        { text: "demo@gmail.com", class: "fa-envelope" }
      ],
      listSocicals: [
        "fa-facebook",
        "fa-twitter",
        "fa-youtube",
        "fa-instagram"
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.info_section {
  padding: 75px 0;
  background-color: #0a0f43;
  text-align: center;
  color: #fff;

  h4 {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 25px;
  }

  .row-one {
    margin-right: auto;
    margin-left: auto;
    max-width: 83.333333%;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 40px;
      width: 75%;
      height: 1px;
      background-color: #fff;
      left: 50%;
      transform: translateX(-50%);
    }

    .item {
      z-index: 1;
      width: 33.333333%;
      display: flex;
      flex-direction: column;
      align-items: center;

      &:hover {
        cursor: pointer;

        .img-box {
          background-color: #ff8a1d;
        }
      }

      .img-box {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        background-color: #0355cc;
        text-align: center;
        line-height: 80px;
      }

      p {
        margin: 25px 0 0 0;
        font-size: 1rem;
      }
    }
  }

  .social-box {
    margin-top: 35px;

    .box {
      @include flexcenter;
      background-color: #ffffff;
      padding: 5px 15px;
      width: 137px;
      margin: auto;

      .icon-social {
        margin: 0 5px;
        color: #0355cc;

        &:hover {
          cursor: pointer;
          color: #ff8a1d;
        }

        i {
          font-size: 18px;
        }
      }
    }
  }
}

.footer_section {
  background-color: #0a0f43;

  p {
    margin: 0;
    padding: 25px 0;
    color: #ffffff;
    text-align: center;
    border-top: 0.8px solid #ffffff;
  }

  a {
    color: inherit;
  }
}
</style>