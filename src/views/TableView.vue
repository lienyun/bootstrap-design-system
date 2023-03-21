<template lang="">
  <div>
    <h4>AI模組配置設定</h4>
    <p>請先選擇要查詢的場域，再選擇是否依照其他條件來進階篩選搜尋結果</p>
    <div class="d-flex justify-content-between border p-4">
      
        <div class="location me-5">
          <h5 class="text-orange-500">隸屬場域</h5>
          <select class="form-select" aria-label="Default select example">
            <option selected>測試場域001</option>
            <option value="1">測試場域002</option>
            <option value="2">測試場域003</option>
            <option value="3">測試場域004</option>
          </select>
        </div>

        <div class="device">
          <label for="">篩選設備名稱</label>
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="冰水主機001"
          />
          <br />
          <label for="">篩選AI模組類型</label>
          <select
            class="form-select form-select-sm"
            aria-label="Default select example"
          >
            <option selected>冰水設定優化</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <br />
          <label for="">篩選訓練期間類型</label>
          <select
            class="form-select form-select-sm"
            aria-label="Default select example"
          >
            <option selected>固定期間</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      

      <div class="buttons">
        <button class="btn btn-primary">進階篩選</button>
        <button class="btn btn-secondary">進階篩選</button>
      </div>
    </div>
  </div>

  <div>
    <h5>模組配置列表</h5>
    <p>
      每頁顯示
      <select
        class="form-select form-select-sm"
        aria-label="Default select example"
      >
        <option selected>10</option>
        <option value="1">20</option>
        <option value="2">30</option>
        <option value="3">40</option>
      </select>
      項
    </p>
    <EasyDataTable
      :headers="headers"
      :items="items"
      table-class-name="customize-table"
    >
      <template #item-statusAI="item" v-model="items.statusAI">
        <label class="switch">
          <input
            type="checkbox"
            :checked="item.statusAI"
            @click="switchStatus(item)"
          />
          <span class="slider round"></span>
        </label>
      </template>

      <template #item-title="item">
        <button class="btn btn-link p-0 pe-2" @click="editItem(item)">
          編輯
        </button>
        <button class="btn btn-link p-0" @click="deleteItem(item)">刪除</button>
      </template>
    </EasyDataTable>
  </div>
</template>
<script>
import { Header, Item } from "vue3-easy-data-table";
import { reactive } from "vue";

export default {
  name: "table",
  setup() {
    const headers = [
      { text: "隸屬場域", value: "location", sortable: true },
      { text: "系統名稱", value: "systemName", sortable: true },
      { text: "設備名稱", value: "deviceName", sortable: true },
      { text: "AI模組類型", value: "AI", sortable: true },
      { text: "訓練期間類型", value: "training", sortable: true },
      { text: "配對ID", value: "matchingID", sortable: true },
      { text: "AI建模狀態", value: "statusAI" },
      { text: "Title  ", value: "title" },
    ];

    const items = reactive([
      {
        location: "測試場域001",
        systemName: "空調系統001",
        deviceName: "冰水主機001",
        AI: "冰水設定優化",
        training: "固定期間 2022-01-01 ~ 2022-03-28",
        matchingID: "01",
        statusAI: true,
      },
      {
        location: "測試場域002",
        systemName: "空調系統001",
        deviceName: "冰水主機001",
        AI: "冰水設定優化",
        training: "固定期間 2022-01-01 ~ 2022-03-28",
        matchingID: "03",
        statusAI: false,
      },
      {
        location: "測試場域003",
        systemName: "空調系統001",
        deviceName: "冰水主機001",
        AI: "冰水設定優化",
        training: "固定期間 2022-01-01 ~ 2022-03-28",
        matchingID: "01",
        statusAI: true,
      },
      {
        location: "測試場域004",
        systemName: "空調系統001",
        deviceName: "冰水主機001",
        AI: "冰水設定優化",
        training: "固定期間 2022-01-01 ~ 2022-03-28",
        matchingID: "01",
        statusAI: true,
      },
      {
        location: "測試場域005",
        systemName: "空調系統001",
        deviceName: "冰水主機001",
        AI: "冰水設定優化",
        training: "固定期間 2022-01-01 ~ 2022-03-28",
        matchingID: "01",
        statusAI: true,
      },
    ]);
    const switchStatus = (item) => {
      console.log(item.statusAI);
      if (item.statusAI === true) {
        item.statusAI = false;
      } else {
        item.statusAI = true;
      }
    };
    const editItem = (item) => {
      alert(`修改 ${item.location}`);
    };
    const deleteItem = (item) => {
      alert(`刪除 ${item.location}`);
    };
    return { headers, items, switchStatus, editItem, deleteItem };
  },
};
</script>
<style lang="scss" scoped>
select {
  width: 100px;
  display: inline-block;
}
.customize-table {
  --easy-table-header-font-size: 16px;
  --easy-table-header-height: 41px;
  --easy-table-header-font-color: white;
  --easy-table-header-background-color: #004e92;

  --easy-table-body-row-font-size: 16px;
}

//select

.location {
    width: 25%;
    & select {
        width: 100%;
    }
}
.device {
    width: 50%;

}

.buttons {
    width: 25%;

    & button {
        display: block;
        margin: 0 0 0 auto;
    }

}
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 16px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #347ab6;
}

input:focus + .slider {
  box-shadow: 0 0 1px #347ab6;
}

input:checked + .slider:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
