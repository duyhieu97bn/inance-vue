<template lang="">
    <section class="feature_section">
    <div class="container">
      <div class="feature_container">
        <div class="box" :class="{'box-active': getBoxActive=='Repair'}" @click="selectBox('Repair')">
          <div class="img-box">
            <img src="@/assets/svg/Tool.svg"/>
          </div>
          <h5 class="name">
            Repair
          </h5>
        </div>
        <div class="box" :class="{'box-active': getBoxActive=='Improve'}" @click="selectBox('Improve')">
          <div class="img-box">
            <img src="@/assets/svg/Improve.svg"/>
          </div>
          <h5 class="name">
            Improve
          </h5>
        </div>
        <div class="box" :class="{'box-active': getBoxActive=='Maintain'}" @click="selectBox('Maintain')">
          <div class="img-box">
            <img src="@/assets/svg/Maintain.svg"/>
          </div>
          <h5 class="name">
            Maintain
          </h5>
        </div>
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
.feature_section {
  transform: translateY(-50%);

  .feature_container {
    @include flexcenter;



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
      color: #555089;
      transition: all 0.3s;
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);

      &:hover {
        @extend .box-active;
      }

      .img-box {
        width: 90px;
        height: 90px;

        img {
          width: 100%;
          height: auto;
          max-height: 100%;
          fill: #726dae;
          -webkit-transition: all 0.3s;
          transition: all 0.3s;
        }
      }
    }

    .box-active {
      background-color: #ff8a1d;
      color: #ffffff;
    }

  }
}
</style>