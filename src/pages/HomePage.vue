<template lang="">
    <session-one/>
    <session-two/>
    <session-three parentCompo="HomePage"/>
    <session-four/>
    <session-five/>
    <session-six/>
    <session-seven/>
</template>
<script>
import SessionOne from './home_page_components/SessionOne.vue'
import SessionTwo from './home_page_components/SessionTwo.vue'
import SessionThree from './home_page_components/SessionThree.vue'
import SessionFour from './home_page_components/SessionFour.vue'
import SessionFive from './home_page_components/SessionFive.vue'
import SessionSix from './home_page_components/SessionSix.vue'
import SessionSeven from './home_page_components/SessionSeven.vue'
export default {
  components: {
    SessionOne,
    SessionTwo,
    SessionThree,
    SessionFour,
    SessionFive,
    SessionSix,
    SessionSeven,
  }
}
</script>
<style lang="scss" scoped></style>