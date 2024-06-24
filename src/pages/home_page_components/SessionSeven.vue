<template lang="">
    <section class="contact_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          Contact Us
        </h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <form action="">
            <div>
              <input type="text" placeholder="Name">
            </div>
            <div>
              <input type="text" placeholder="Phone Number">
            </div>
            <div>
              <input type="email" placeholder="Email">
            </div>
            <div>
              <input type="text" class="message-box" placeholder="Message">
            </div>
            <div class="d-flex ">
              <button>
                SEND
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <div class="map_container">
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29778.07253498506!2d105.92967667039117!3d21.102235294009958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313507f25be4761d%3A0xb26a276517caf9d0!2zxJDDrG5oIELhuqNuZywgVOG7qyBTxqFuLCBC4bqvYyBOaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1711810628405!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
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
.contact_section {
    .heading_container {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-align: start;
        align-items: flex-start;
        margin-bottom: 30px;

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

    input {
        width: 100%;
        border: none;
        height: 50px;
        margin-bottom: 25px;
        padding-left: 25px;
        outline: none;
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.2);
    }

    .message-box {
        height: 135px;
    }

    button {
        border: none;
        display: inline-block;
        font-family: 'Merriweather Sans', sans-serif;
        text-transform: uppercase;
        padding: 10px 55px;
        background-color: #0355cc;
        border: 1px solid #0355cc;
        border-radius: 0;
        color: #ffffff;
        margin-top: 15px;
        cursor: pointer;

        &:hover {
            background-color: transparent;
            color: #0355cc;
        }
    }
}
</style>