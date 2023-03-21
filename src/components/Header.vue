<template lang="">
  <nav
    class="bg-blue-600 d-flex justify-content-between align-items-center"
  >
    <img src="../assets/logo.svg" alt="" />
    <div class="d-flex align-items-center mt-2 mb-2">
      <div class="me-4">
        <select
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
        >
          <option selected>正體中文</option>
          <option value="1">English</option>
          <option value="2">日本語</option>
          <option value="3">한국어</option>
        </select>
        <p class="text-white m-0 mt-2">開發者測試帳號，您好！</p>
      </div>

      <img src="../assets/avatar.png" alt="" class="avatar"/>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
nav {
  width: 100%;
  padding: 0 24px;
  & p{
    font-size: 12px;
  }
}
.avatar {
  width: 56px;
  height: 56px;
}
</style>
