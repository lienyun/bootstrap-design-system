<template lang="">
  <div class="row mt-5">
    <div class="col-6">
      <div class="primary-color">
        <h2>主色 Primary</h2>
        <p>
          這些色彩賦予產品獨特的身份特徵。這些通常是品牌作為其識別設定的顏色，將其用作主要顏色以增強品牌知名度。
        </p>
        <div class="pallete primary-pallete">
          <div class="primary blue-500 bg-primary mb-2 text-white">
            $blue-500
          </div>
          <div class="blue-100 bg-blue-100">$blue-100</div>
          <div class="blue-200 bg-blue-200">$blue-200</div>
          <div class="blue-300 bg-blue-300">$blue-300</div>
          <div class="blue-400 bg-blue-400">$blue-400</div>
          <div class="blue-500 bg-primary text-white">$blue-500</div>
          <div class="blue-600 bg-blue-600 text-white">$blue-600</div>
          <div class="blue-700 bg-blue-700 text-white">$blue-700</div>
          <div class="blue-800 bg-blue-800 text-white">$blue-800</div>
          <div class="blue-900 bg-blue-900 text-white">$blue-900</div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="secondary-color">
        <h2>輔色 Secondary</h2>
        <p>
          這些顏色可以突出或補充主要顏色。應該謹慎的使用以使UI部分元素顯眼。這些顏色通常也在品牌指南中定義。
        </p>
        <div class="pallete secondary-pallete">
          <div class="secondary bg-secondary mb-2 text-white">$orange-500</div>
          <div class="orange-100 bg-orange-100">$orange-100</div>
          <div class="orange-200 bg-orange-200">$orange-200</div>
          <div class="orange-300 bg-orange-300">$orange-300</div>
          <div class="orange-400 bg-orange-400">$orange-400</div>
          <div class="orange-500 bg-orange-500 text-white">$orange-500</div>
          <div class="orange-600 bg-orange-600 text-white">$orange-600</div>
          <div class="orange-700 bg-orange-700 text-white">$orange-700</div>
          <div class="orange-800 bg-orange-800 text-white">$orange-800</div>
          <div class="orange-900 bg-orange-900 text-white">$orange-900</div>
        </div>
      </div>
    </div>

    <div class="neutral-color mt-5">
      <h2>中立色 Neutral</h2>
      <p>
        這些色彩包括白色、灰色與黑色。它們用於背景、文本顏色等，並且組成了大部分UI界面。
      </p>
      <div class="row">
        <div class="pallete neutral-pallete col-6">
          <div class="neutral-500 mb-2 bg-info border">$neutral-500</div>
          <div class="neutral-100 bg-neutral-100">$neutral-100</div>
          <div class="neutral-200 bg-neutral-200">$neutral-200</div>
          <div class="neutral-300 bg-neutral-300">$neutral-300</div>
          <div class="neutral-400 bg-neutral-400">$neutral-400</div>
          <div class="neutral-500 bg-neutral-500 text-white">$neutral-500</div>
          <div class="neutral-600 bg-neutral-600 text-white">$neutral-600</div>
          <div class="neutral-700 bg-neutral-700 text-white">$neutral-700</div>
          <div class="neutral-800 bg-neutral-800 text-white">$neutral-800</div>
          <div class="neutral-900 bg-neutral-900 text-white">$neutral-900</div>
        </div>

        <div class="pallete bw-pallete col-6">
          <div class="bg-black text-white">$black</div>
          <div class="bg-white border">$white</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pallete > div {
  width: 250px;
  height: 80px;
  padding: 5px 10px;
}
</style>
