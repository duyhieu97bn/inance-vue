<template lang="">
    <section class="client_section ">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>
                What Our Clients Say
                </h2>
            </div>
            <div class="box">
                <div class="item">
                    <div class="client_id">
                        <div class="img-box">
                            <img src="@/assets/client-1.jpg" alt="">
                        </div>
                        <div class="client_detail">
                            <div class="client_info">
                                <h6>
                                Jorch morik
                                </h6>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <i class="fa fa-quote-left" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="client_text">
                        <p>
                        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="client_id">
                        <div class="img-box">
                            <img src="@/assets/client-2.jpg" alt="">
                        </div>
                        <div class="client_detail">
                            <div class="client_info">
                                <h6>
                                Jorch morik
                                </h6>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <i class="fa fa-quote-left" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="client_text">
                        <p>
                        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                        </p>
                    </div>
                </div>
            </div>
            <div class="owl-nav">
                <button type="button" role="presentation" class="owl-prev">
                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                </button>
                <button type="button" role="presentation" class="owl-next">
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.heading_container {
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;

    h2 {
        text-transform: uppercase;
        font-family: 'Merriweather Sans', sans-serif;
        font-size: 2rem;
    }
}

.box {
    @include flexcenter;

    .item {
        margin: 15px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        padding: 25px;

        .client_id {
            @include flexcenter;

            .img-box {
                width: 125px;
                min-width: 125px;
                margin-right: 15px;

                img {
                    width: 100%;
                    border-radius: 100%;
                }
            }

            .client_detail {
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: justify;
                justify-content: space-between;
                -webkit-box-flex: 1;
                flex: 1;
                padding-right: 25px;

                .client_info {
                    h6 {
                        font-size: 1rem;
                        font-weight: 500;
                        line-height: 1.2;
                    }

                    i {
                        color: #fbaf5d;
                    }
                }
            }
        }
    }
}

.owl-nav {
    @include flexcenter;
    justify-content: center;
    margin-top: 20px;

    button {
        width: 50px;
        height: 50px;
        background-color: #0355cc;
        outline: none;
        margin: 0 20px;
        color: #ffffff;
        cursor: pointer;
    }
}
</style>