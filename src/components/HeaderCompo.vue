<template lang="">
    <div class="container_header">
        <div class="header_contact">
            <div class="header_contact-phonenumber">
                <i class="fa fa-phone" aria-hidden="true"></i>
                Call : +01 123455678990
            </div>
            <div class="header_contact-email">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                Email : demo@gmail.com
            </div>
        </div>
        <div class="header_menu">
            <div class="header_menu-name">INANCE</div>
            <div class="header_menu-list">
                <div 
                    class="header_menu-list_item" 
                    :class="{'is-active': getMenuActive(item.route)}" 
                    @click="selectMenu(item.route)" 
                    v-for="item in itemsMenu" :key="item"
                >
                    {{ item.name }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            itemsMenu: [
                { name: "Home", route: "/" },
                { name: "About", route: "about" },
                { name: "Services", route: "services" },
                { name: "Contact Us", route: "contact-us" }
            ]
        }
    },
    computed: {

    },
    methods: {
        getMenuActive(item) {
            if (this.$route.name == item) {
                return true
            }
            console.log(item, this.$route);
            return false
        },
        selectMenu(route) {
            this.$router.push(route)
        }
    },
}
</script>
<style lang="scss">

.container_header {
    width: 100%;
    height: 118px;

    .header_contact {
        height: 54px;
        padding: 0 25px;
        @include flexcenter;
        background: black;
        color: white;

        i {
            color: #ff8a1d;
        }
    }

    .header_menu {
        height: 64px;
        padding: 0 25px;
        @include flexcenter;
        background-color: #d1e3ff;

        &-name {
            color: #0355cc;
            text-transform: uppercase;
            font-size: 24px;
            font-weight: bold;
        }

        &-list {
            display: flex;

            .header_menu-list_item {
                padding: 10px 25px;

                &:hover {
                    cursor: pointer;
                }
            }

            .is-active {
                color: #0355cc;
            }
        }
    }
}
</style>