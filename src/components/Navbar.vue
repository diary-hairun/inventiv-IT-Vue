<template>
  <nav class="navbar navbar-expand-md">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/spark-logo.png" alt="Spark" />
      </router-link>
      <div v-if="!logged" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
        </ul>
      </div>
      <div v-if="logged">
        <div class="collapse navbar-collapse">
          <a href="#" class="btn btn-link">
            <img src="../assets/icon_notification.png" role="presentation" />
            <span class="ml-2">0</span>
          </a>
          <ul class="navbar-nav ml-2 mt-2 mt-lg-0">
            <li class="nav-item dropdown">
              <button
                type="button"
                class="btn dropdown-toggle"
                id="navbar-menu"
                data-toggle="dropdown"
                @click="handleDropdown"
              >
                <img
                  src="../assets/icon_user.jpg"
                  alt="User Photo"
                  class="dropdown-toggle-image profile-photo"
                />
                <span class="ml-md-2">Username</span>
              </button>
              <div :class="['dropdown-menu', { 'show': open }]" aria-labelledby="navbar-menu">
                <h6 class="dropdown-header">Trial</h6>
                <router-link to="/settings" class="dropdown-item">
                  <i class="fa fa-fw text-left fa-btn fa-shopping-bag"></i> Subscribe
                </router-link>
                <div class="dropdown-divider"></div>
                <h6 class="dropdown-header">Settings</h6>
                <router-link to="/settings" class="dropdown-item">
                  <i class="fa fa-fw text-left fa-btn fa-cog"></i> Your Settings
                </router-link>
                <div class="dropdown-divider"></div>
                <router-link to="/logout" class="dropdown-item">
                  <i class="fa fa-fw text-left fa-btn fa-sign-out-alt"></i> Logout
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    logged: Boolean
  },
  data: () => {
    return {
      open: false
    };
  },
  methods: {
    handleDropdown() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(55, 63, 67, 0.04);
}

.navbar-brand img {
  width: 30px;
}

.navbar-expand-md .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  color: inherit;
  font-weight: 500;
}

.navbar .btn.btn-link {
  padding-left: 1rem;
  padding-right: 1rem;
  color: inherit;
  border-radius: 20px;
  background-color: #f4f5f6;
}

.profile-photo {
  width: 35px;
  border-radius: 50%;
}

.btn-dropdown-toggle {
  position: relative;
}

.btn-dropdown-toggle {
  position: absolute;
  top: 5px;
}

.navbar-nav .dropdown-toggle::after {
  margin-left: 1rem;
}

.navbar-nav .dropdown-menu .dropdown-item {
  color: #49545a;
}
.navbar-nav .dropdown-menu .dropdown-item i {
  opacity: 0.6;
}

@media (min-width: 768px) {
  .btn-dropdown-toggle {
    align-items: center;
  }
}
</style>