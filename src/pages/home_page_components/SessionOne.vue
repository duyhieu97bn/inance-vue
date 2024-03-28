<template lang="">
    <div class="home-session1">
        <div class="container">
            <div class="content_left">
                <div class="detail-box">
                <h1>
                    Repair and <br>
                    Maintenance <br>
                    Services
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.
                </p>
                <a href="">
                    Contact Us
                </a>
                </div>
            </div>
            <div class="content_right">
                <img src="@/assets/slider-img.png" />
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.home-session1 {
    width: 100%;
    height: 788px;
    background-color: #d1e3ff;

    .container {
        margin: auto;
        @include flexcenter;

        .content_left {
            padding: 0 15px;

            h1,
            a {
                font-family: 'Merriweather Sans', sans-serif;

            }

            h1 {
                text-align: unset;
                font-weight: bold;
                margin-bottom: 25px;
                color: #0355cc;
                font-size: 2.5rem;
            }

            a {
                display: inline-block;
                text-transform: uppercase;
                padding: 10px 45px;
                background-color: #ff8a1d;
                border: 1px solid #ff8a1d;
                border-radius: 5px;
                color: #ffffff;
                margin-top: 15px;
                text-decoration: none;

                &:hover {
                    background-color: transparent;
                    color: #ff8a1d;
                }
            }
        }

        .content_right {
            img {
                height: 788px;
                vertical-align: middle;
                border-style: none;
                overflow-clip-margin: content-box;
                overflow: clip;
            }
        }
    }
}
</style>