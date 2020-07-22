<template>
  <div>
    <navbar />
    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="card text-left">
            <div class="card-header">Reset Password</div>
            <div class="card-body">
              <form role="form">
                <div class="form-group row">
                  <label class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
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
                <div class="form-group row mb-0">
                  <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">Send Password Reset Link</button>
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
  name: "Password"
};
</script>