<template lang="">
    <section class="service_section layout_padding">
    <div class="container ">
      <div class="heading_container heading_center">
        <h2> Our Services </h2>
      </div>
      <div class="row">
          <div class="box " :class="{'box-active': getBoxActive=='Maintenance'}" @click="selectBox('Maintenance')">
            <div class="img-box">
              <img src="@/assets/s1.png" alt="">
            </div>
            <div class="detail-box">
              <h5>
                Maintenance
              </h5>
              <p>
                when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal
              </p>
          </div>
        </div>
          <div class="box " :class="{'box-active': getBoxActive=='Electrical'}" @click="selectBox('Electrical')">
            <div class="img-box">
              <img src="@/assets/s2.png" alt="">
            </div>
            <div class="detail-box">
              <h5>
                Electrical
              </h5>
              <p>
                when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal
              </p>
            </div>
        </div>
          <div class="box " :class="{'box-active': getBoxActive=='Plumbing'}" @click="selectBox('Plumbing')">
            <div class="img-box">
              <img src="@/assets/s3.png" alt="">
            </div>
            <div class="detail-box">
              <h5>
                Plumbing
              </h5>
              <p>
                when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal
              </p>
            </div>
        </div>
      </div>
      <div class="btn-box">
        <a href="">
          View More
        </a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      boxActive: ""
    }
  },
  computed: {
    getBoxActive() {
      return this.boxActive;
    }
  },
  methods: {
    selectBox(item) {
      this.boxActive = this.boxActive == item ? "" : item;
    },

  },
}
</script>
<style lang="scss" scoped>
.heading_container.heading_center {
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
}

.heading_container {
  margin-bottom: 30px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;

  h2 {
    font-weight: bold;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-transform: uppercase;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 2rem;
  }
}

.box {
  -webkit-box-flex: 1;
  flex: 1;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  margin: 0 10px;
  padding: 45px 15px;
  background-color: #ffffff;
  transition: all 0.3s;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    @extend .box-active;
  }

  .img-box {
    width: 65px;
    height: 65px;

    img {
      width: 100%;
      height: auto;
      max-height: 100%;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
    }
  }

  .detail-box {
    margin-top: 15px;

    h5 {
      font-size: 1.25rem;
    }
  }
}

.box-active {
  background-color: #ff8a1d;
  color: #ffffff;
}

.btn-box {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 45px;

  a {
    font-family: 'Merriweather Sans', sans-serif;
    text-transform: uppercase;
    padding: 10px 45px;
    background-color: #0355cc;
    border: 1px solid #0355cc;
    border-radius: 0;
    color: #ffffff;

    &:hover {
      color: #0355cc;
    }
  }
}
</style>