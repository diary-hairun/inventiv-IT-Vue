<template>
  <div>
    <navbar />
    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="card text-left">
            <div class="card-header">Login</div>
            <div class="card-body">
              <form role="form">
                <div class="form-group row">
                  <label class="col-md-4 col-form-label text-md-right">E-Mail</label>
                  <div class="col-md-6">
                    <input
                      type="email"
                      name="email"
                      value
                      autofocus="autofocus"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-md-4 col-form-label text-md-right">Password</label>
                  <div class="col-md-6">
                    <input type="password" name="password" class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6 offset-md-4">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input type="checkbox" name="remember" class="form-check-input" /> Remember Me
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-group row mb-0">
                  <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">Login</button>
                    <router-link to="/password/reset" class="btn btn-link">Forgot Your Password?</router-link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>