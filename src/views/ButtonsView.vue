<template lang="">

      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Primary</th>
            <th scope="col">Secondary</th>
            <th scope="col">Special</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Medium</th>
            <td>
                <button type="button" class="btn btn-primary">Button Title</button>
            </td>
            <td>
                <button type="button" class="btn btn-secondary">Button Title</button>
            </td>
            <td>
                <button type="button" class="btn btn-warning">Button Title</button>
            </td>
          </tr>
          <tr>
            <th scope="row">Large</th>
            <td><button type="button" class="btn btn-primary btn-lg">Button Title</button></td>
            <td><button type="button" class="btn btn-secondary btn-lg">Button Title</button></td>
            <td><button type="button" class="btn btn-warning btn-lg">Button Title</button></td>
          </tr>
          <tr>
            <th scope="row">Small</th>
            <td><button type="button" class="btn btn-primary btn-sm">Button Title</button></td>
            <td><button type="button" class="btn btn-secondary btn-sm">Button Title</button></td>
            <td><button type="button" class="btn btn-warning btn-sm">Button Title</button></td>
          </tr>
          <tr>
            <th scope="row">Disabled</th>
            <td>
                <button type="button" class="btn btn-primary" disabled>Button Title</button>
            </td>
            <td>
                <button type="button" class="btn btn-secondary" disabled>Button Title</button>
            </td>
            <td>
                <button type="button" class="btn btn-warning" disabled>Button Title</button>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Outline Primary</th>
            <th scope="col">Outline Secondary</th>
            <th scope="col">Outline Special</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Medium</th>
            <td>
                <button type="button" class="btn btn-outline-primary">Button Title</button>
            </td>
            <td>
                <button type="button" class="btn btn-outline-secondary">Button Title</button>
            </td>
            <td>
                <button type="button" class="btn btn-outline-warning">Button Title</button>
            </td>
          </tr>
          <tr>
            <th scope="row">Large</th>
            <td><button type="button" class="btn btn-outline-primary btn-lg">Button Title</button></td>
            <td><button type="button" class="btn btn-outline-secondary btn-lg">Button Title</button></td>
            <td><button type="button" class="btn btn-outline-warning btn-lg">Button Title</button></td>
          </tr>
          <tr>
            <th scope="row">Small</th>
            <td><button type="button" class="btn btn-outline-primary btn-sm">Button Title</button></td>
            <td><button type="button" class="btn btn-outline-secondary btn-sm">Button Title</button></td>
            <td><button type="button" class="btn btn-outline-warning btn-sm">Button Title</button></td>
          </tr>
          <tr>
            <th scope="row">Disabled</th>
            <td>
                <button type="button" class="btn btn-primary" disabled>Button Title</button>
            </td>
            <td>
                <button type="button" class="btn btn-secondary" disabled>Button Title</button>
            </td>
            <td>
                <button type="button" class="btn btn-warning" disabled>Button Title</button>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Medium</th>
            <td>
                <button type="button" class="btn btn-link p-0">Button Title</button>
            </td>
          </tr>
          <tr>
            <th scope="row">Large</th>
            <td><button type="button" class="btn btn-link btn-lg p-0">Button Title</button></td>
          </tr>
          <tr>
            <th scope="row">Small</th>
            <td><button type="button" class="btn btn-link btn-sm p-0">Button Title</button></td>
          </tr>
          <tr>
            <th scope="row">Disabled</th>
            <td>
                <button type="button" class="btn btn-link p-0" disabled>Button Title</button>
            </td>
          </tr>
        </tbody>
      </table>
      
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.bg-primary {
  width: 100px;
  height: 100px;
}

</style>
