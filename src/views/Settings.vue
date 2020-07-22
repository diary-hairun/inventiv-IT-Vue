<template>
  <div class="dashboard-container">
    <navbar :logged="true" />
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-3">
          <div class="settigns-tabs">
            <aside>
              <h3 class="nav-heading">Settings</h3>
              <ul class="nav flex-column mb-4">
                <li class="nav-item">
                  <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" class="nav-link"
                    aria-selected="true">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 20C4.4772 20 0 15.5228 0 10S4.4772 0 10 0s10 4.4772 10 10-4.4772 10-10 10zm0-17C8.343 3 7
              4.343 7 6v2c0 1.657 1.343 3 3 3s3-1.343 3-3V6c0-1.657-1.343-3-3-3zM3.3472 14.4444C4.7822 16.5884 7.2262 18 10
              18c2.7737 0 5.2177-1.4116 6.6528-3.5556C14.6268 13.517 12.3738 13 10 13s-4.627.517-6.6528 1.4444z " />
                    </svg>
                    Profile
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#security" aria-controls="security" role="tab" data-toggle="tab" class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20">
                      <path
                        d="M3 8V6c0-3.3 2.7-6 6-6s6 2.7 6 6v2h1c1 0 2 1 2 2v8c0 1-1 2-2 2H2c-1 0-2-1-2-2v-8c0-1 1-2 2-2h1zm5
              6.7V17h2v-2.3c.6-.3 1-1 1-1.7 0-1-1-2-2-2s-2 1-2 2c0 .7.4 1.4 1 1.7zM6 6v2h6V6c0-1.7-1.3-3-3-3S6 4.3 6 6z " />
                    </svg>
                    Security
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#api" aria-controls="api" role="tab" data-toggle="tab" class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M20 14v4c0 1-1 2-2 2h-4v-2c0-1-1-2-2-2s-2 1-2 2v2H6c-1 0-2-1-2-2v-4H2c-1 0-2-1-2-2s1-2 2-2h2V6c0-1
              1-2 2-2h4V2c0-1 1-2 2-2s2 1 2 2v2h4c1 0 2 1 2 2v4h-2c-1 0-2 1-2 2s1 2 2 2h2z " />
                    </svg>API
                  </a>
                </li>
              </ul>
            </aside>
            <aside>
              <h3 class="nav-heading">Billing</h3>
              <ul class="nav flex-column mb-4">
                <li class="nav-item">
                  <a href="#subscription" aria-controls="subscription" role="tab" data-toggle="tab" class="nav-link"
                    aria-selected="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 20 ">
                      <path d="M7 3v2c-2.8 0-5 2.2-5 5 0 1.4.6 2.6 1.5 3.5L2 15c-1.2-1.3-2-3-2-5 0-4 3-7 7-7zm5 2c1.2 1.3 2 3
              2 5 0 4-3 7-7 7v-2c2.8 0 5-2.2 5-5 0-1.4-.6-2.6-1.5-3.5L12 5zM7 20l-4-4 4-4v8zM7 8V0l4 4-4 4z" />
                    </svg>
                    Subscription
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#payment-method" aria-controls="payment-method" role="tab" data-toggle="tab"
                    class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16 ">
                      <path d="M18 4V2H2v2h16zm0 4H2v6h16V8zM0 2c0-1 1-2 2-2h16c1 0 2 1 2 2v12c0 1-1 2-2 2H2c-1 0-2-1-2-2V2zm4
              8h4v2H4v-2z" />
                    </svg>
                    Payment Method
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#invoices" aria-controls="invoices" role="tab" data-toggle="tab" class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20 ">
                      <path d="M4 2h16l-3 9H4c-.6 0-1 .4-1 1s.5 1 1 1h13v2H4c-1.7 0-3-1.3-3-3s1.3-3 3-3h.3L3 5 2 2H0V0h3c.5 0
              1 .5 1 1v1zm1 18c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm10 0c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z" />
                    </svg>
                    Invoices
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div class="col-md-9">
          <div class="tab-content">
            <div role="tabcard" id="profile" class="tab-pane">
              <div>
                <div class="card card-default">
                  <div class="card-header">Profile Photo</div>
                  <div class="card-body">
                    <form role="form">
                      <div class="form-group row justify-content-center">
                        <div class="col-md-6 d-flex align-items-center">
                          <div class="image-placeholder mr-4"><span role="img" class="profile-photo-preview"
                              style="background-image: url(&quot;https://www.gravatar.com/avatar/dd551f77b51b6be0e35f126bd150fbd1.jpg?s=200&amp;d=mm&quot;);"></span>
                          </div>
                          <div class="spark-uploader mr-4"><input type="file" name="photo"
                              class="spark-uploader-control">
                            <div class="btn btn-outline-dark">Update Photo</div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="card card-default">
                  <div class="card-header">Contact Information</div>
                  <div class="card-body">
                    <!---->
                    <form role="form">
                      <div class="form-group row"><label class="col-md-4 col-form-label text-md-right">Name</label>
                        <div class="col-md-6"><input type="text" name="name" class="form-control"> <span
                            class="invalid-feedback" style="display: none;">

                          </span></div>
                      </div>
                      <div class="form-group row"><label class="col-md-4 col-form-label text-md-right">E-Mail
                          Address</label>
                        <div class="col-md-6"><input type="email" name="email" class="form-control"> <span
                            class="invalid-feedback" style="display: none;">

                          </span></div>
                      </div>
                      <div class="form-group row mb-0">
                        <div class="col-md-6 offset-md-4"><button type="submit" class="btn btn-primary">

                            Update
                          </button></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabcard" id="security" class="tab-pane">
              <div>
                <div class="card card-default">
                  <div class="card-header">Update Password</div>
                  <div class="card-body">
                    <!---->
                    <form role="form">
                      <div class="form-group row"><label class="col-md-4 col-form-label text-md-right">Current
                          Password</label>
                        <div class="col-md-6"><input type="password" name="current_password" class="form-control"> <span
                            class="invalid-feedback" style="display: none;">

                          </span></div>
                      </div>
                      <div class="form-group row"><label class="col-md-4 col-form-label text-md-right">Password</label>
                        <div class="col-md-6"><input type="password" name="password" class="form-control"> <span
                            class="invalid-feedback" style="display: none;">

                          </span></div>
                      </div>
                      <div class="form-group row"><label class="col-md-4 col-form-label text-md-right">Confirm
                          Password</label>
                        <div class="col-md-6"><input type="password" name="password_confirmation" class="form-control">
                          <span class="invalid-feedback" style="display: none;">

                          </span></div>
                      </div>
                      <div class="form-group row mb-0">
                        <div class="col-md-6 offset-md-4"><button type="submit" class="btn btn-primary">

                            Update
                          </button></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabcard" id="api" class="tab-pane">
              <div>
                <div>
                  <div>
                    <div class="card card-default">
                      <div class="card-header">
                        Create API Token
                      </div>
                      <div class="card-body">
                        <form role="form">
                          <div class="form-group row"><label class="col-md-4 col-form-label text-md-right">Token
                              Name</label>
                            <div class="col-md-6"><input type="text" name="name" class="form-control"> <span
                                class="invalid-feedback" style="display: none;">

                              </span></div>
                          </div>
                          <!---->
                          <div class="form-group row mb-0">
                            <div class="offset-md-4 col-md-6"><button type="submit" class="btn btn-primary">

                                Create
                              </button></div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div id="modal-show-token" tabindex="-1" role="dialog" class="modal">
                      <!---->
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <!---->
                    </div>
                    <div id="modal-update-token" tabindex="-1" role="dialog" class="modal">
                      <!---->
                    </div>
                    <div id="modal-delete-token" tabindex="-1" role="dialog" class="modal">
                      <!---->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabcard" id="subscription" class="tab-pane">
              <div>
                <div>
                  <div>
                    <div class="alert alert-warning mb-4">
                      You are currently within your free trial period. Your trial will expire on <strong>July 30th,
                        2020</strong>. </div>
                    <div>
                      <div>
                        <div class="card card-default">
                          <div class="card-header">
                            <div class="float-left">
                              Subscribe
                            </div>
                            <div class="float-right">
                              <!---->
                            </div>
                            <div class="clearfix"></div>
                          </div>
                          <div class="table-responsive">
                            <!---->
                            <table class="table table-responsive-sm table-valign-middle mb-0 ">
                              <thead></thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center"><i class="radio-select mr-2"></i>
                                      Basic
                                    </div>
                                  </td>
                                  <td><button class="btn btn-default"><i class="fa fa-btn fa-star-o"></i> Features
                                    </button></td>
                                  <td><span class="table-plan-text"><strong class="table-plan-price">$10.00</strong>




                                      / Monthly
                                    </span></td>
                                  <td class="table-plan-price table-plane-text text-right">
                                    <!---->
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div class="card card-default" style="display: none;">
                          <div class="card-header">Billing Information</div>
                          <div class="card-body">
                            <!---->
                            <form role="form">
                              <!---->
                              <div class="form-group row"><label for="name"
                                  class="col-md-4 col-form-label text-md-right">Cardholder's Name</label>
                                <div class="col-md-6"><input type="text" name="name" class="form-control"></div>
                              </div>
                              <div class="form-group row"><label for="subscription-card-element"
                                  class="col-md-4 col-form-label text-md-right">Card</label>
                                <div class="col-md-6">
                                  <div id="subscription-card-element"></div> <input type="hidden" class="form-control">
                                  <span class="invalid-feedback" style="display: none;">

                                  </span>
                                </div>
                              </div>
                              <div class="form-group row"><label for="number"
                                  class="col-md-4 col-form-label text-md-right">ZIP / Postal Code</label>
                                <div class="col-md-6"><input type="text" name="zip" class="form-control"></div>
                              </div>
                              <div class="form-group row"><label
                                  class="col-md-4 col-form-label text-md-right">Coupon</label>
                                <div class="col-md-6"><input type="text" class="form-control"> <span
                                    class="invalid-feedback" style="display: none;">

                                  </span></div>
                              </div>
                              <!---->
                              <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4"><button type="submit" class="btn btn-primary"><span>
                                      Subscribe
                                    </span></button></div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!---->
                    <!---->
                    <!---->
                  </div>
                  <div id="modal-plan-details" tabindex="-1" role="dialog" class="modal fade">
                    <div class="modal-dialog modal-sm">
                      <!---->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabcard" id="payment-method" class="tab-pane">
              <div>
                <div>
                  <!---->
                  <div class="card card-default">
                    <div class="card-header">
                      <div class="float-left">
                        Update Payment Method
                      </div>
                      <div class="float-right">
                        <!---->
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="card-body">
                      <!---->
                      <!---->
                      <form role="form">
                        <div class="form-group row"><label for="name"
                            class="col-md-4 col-form-label text-md-right">Cardholder's Name</label>
                          <div class="col-md-6"><input type="text" class="form-control"></div>
                        </div>
                        <div class="form-group row"><label for="payment-card-element"
                            class="col-md-4 col-form-label text-md-right">Card</label>
                          <div class="col-md-6">
                            <div id="payment-card-element"></div> <input type="hidden" class="form-control"> <span
                              class="invalid-feedback" style="display: none;">

                            </span>
                          </div>
                        </div>
                        <div class="form-group row"><label for="zip" class="col-md-4 col-form-label text-md-right">ZIP /
                            Postal Code</label>
                          <div class="col-md-6"><input type="text" class="form-control"></div>
                        </div>
                        <div class="form-group row mb-0">
                          <div class="col-md-6 offset-md-4"><button type="submit" class="btn btn-primary"><span>
                                Update
                              </span></button></div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div>
                    <!---->
                  </div>
                </div>
              </div>
            </div>
            <div role="tabcard" id="invoices" class="tab-pane">
              <div>
                <div>
                  <div class="card card-default">
                    <div class="card-header">Extra Billing Information</div>
                    <div class="card-body">
                      <div class="alert alert-info">
                        This information will appear on all of your receipts, and is a great place to add your full
                        business name, VAT number, or address of record. Do not include any confidential or financial
                        information such as credit card numbers.
                      </div>
                      <!---->
                      <form role="form">
                        <div class="form-group row">
                          <div class="col-md-12"><textarea rows="7" class="form-control"
                              style="font-family: monospace;"></textarea> <span class="invalid-feedback"
                              style="display: none;">

                            </span></div>
                        </div>
                        <div class="form-group row mb-0">
                          <div class="offset-md-4 col-md-8 text-right"><button type="submit" class="btn btn-primary">
                              Update
                            </button></div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <!---->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Setings"
  };
</script>
<style scoped>
  .settigns-tabs h3 {
    text-transform: uppercase;
    font-size: 14px;
    color: #9aa5ac;
    letter-spacing: 1px;
  }

  .nav-item .nav-link {
    padding: 5px 0 10px;
    color: inherit;
    font-weight: 600;
  }

  .nav-item .nav-link.active {
    color: #42a2dc;
  }

  svg {
    width: 20px;
    margin-right: 1rem;
    fill: currentColor;
    color: #9aa5ac;
  }
</style>