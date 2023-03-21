<template lang="">
    <div>
        <div class="footer bg-blue-600 d-flex justify-content-center align-items-center">
            <img src="../assets/footer-logo.svg" alt="">
            <p class="footer__text text-white m-0 ms-4"> @ 2023 InSynerger Technology Co., Ltd. All Rights Reserved</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style lang="scss" scoped>
    .footer {
        width: 100%;
        height: 45px;
    }
    .footer__text {
        font-weight: 400;
        font-size: 12px;
    }

</style>