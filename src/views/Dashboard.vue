<template>
  <div class="dashboard-container">
    <navbar :logged="true" />
    <div class="container mt-4">
      <div class="col-md-8 mx-auto">
        <div class="card">
          <div class="card-header">Dashboard</div>
          <div class="card-body">Your application's Dashboard</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>

<style scoped>
</style>