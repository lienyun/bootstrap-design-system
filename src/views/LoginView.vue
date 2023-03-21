<template lang="">
  <Header></Header>
  <div class="login-wrapper d-flex justify-content-center align-items-center">
    <div class="card p-5 col-4">
      <h1>登入</h1>
      <form class="mt-5">
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="請輸入帳號"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="請輸入密碼"  
          />
        </div>
        <div class="mb-3 form-check d-flex justify-content-between">
          <div>
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >在往後自動登入</label
            >
          </div>
          <a href="#" class="text-center">忘記密碼</a>
        </div>
        <button type="submit" class="btn btn-primary mt-3">登入</button>
      </form>
    </div>
  </div>
  <Footer></Footer>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue"

export default {
  name: "login",
  components: {
    Header,
    Footer
  },
};
</script>
<style lang="scss" scoped>
button {
  width: 100%;
}

.login-wrapper {
    width: 100%;
    height: 100vh;
}
</style>
