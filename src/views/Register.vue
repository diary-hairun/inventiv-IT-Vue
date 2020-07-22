<template>
  <div>
    <navbar />
    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="card text-left">
            <div class="card-header">Register</div>
            <div class="card-body">
              <form>
                <div class="form-group row">
                  <label class="col-md-4 col-form-label text-md-right">Name</label>
                  <div class="col-md-6">
                    <input type="text" name="name" autofocus="autofocus" class="form-control" />
                    <span class="invalid-feedback" style="display: none;"></span>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                  <div class="col-md-6">
                    <input type="email" name="email" class="form-control" />
                    <span class="invalid-feedback" style="display: none;"></span>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-md-4 col-form-label text-md-right">Password</label>
                  <div class="col-md-6">
                    <input type="password" name="password" class="form-control" />
                    <span class="invalid-feedback" style="display: none;"></span>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                  <div class="col-md-6">
                    <input type="password" name="password_confirmation" class="form-control" />
                    <span class="invalid-feedback" style="display: none;"></span>
                  </div>
                </div>
                <div>
                  <div class="form-group row">
                    <div class="col-md-6 offset-md-4">
                      <div class="form-check">
                        <input type="checkbox" id="terms" class="form-check-input" />
                        <label for="terms" class="form-check-label">
                          I Accept
                          <router-link to="/terms" target="_blank">The Terms Of Service</router-link>
                        </label>
                        <input type="hidden" class="form-control" />
                        <div class="invalid-feedback" style="display: none;">
                          <strong></strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <div class="col-md-6 offset-md-4">
                      <button class="btn btn-primary">
                        <span>
                          <i class="fa fa-btn fa-check-circle"></i> Register
                        </span>
                      </button>
                    </div>
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
  name: "Register"
};
</script>