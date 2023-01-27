<template>
  <div class="app-section">
    <div class="app-inner-block">
      <div class="mockup-wrapper">
        <div class="phone-mockup" />
        <div class="phone-mockup small" />
      </div>
      <div class="app-details-block">
        <div class="smat-header">
          Start your investment journey <br>
          with these steps:
        </div>
        <div class="value-wrappper">
          <div class="value-block">
            <div>Step 1 - Create a free account</div>
          </div>
          <h4 class="no-margin">
            Sign up to HerVest with your name, email and phone number.
          </h4>
        </div>
        <div class="value-wrappper">
          <div class="value-block">
            <div>Step 2 - Set up your Purse account</div>
          </div>
          <h4 class="no-margin">
            Register your BVN to generate a unique account number. This allows you to instantly receive and transfer funds.
          </h4>
        </div>
        <div class="value-wrappper">
          <div class="value-block">
            <div>Step 3 - Start a savings plan</div>
          </div>
          <h4 class="no-margin">
            Add a debit card or transfer funds to your purse account to activate your short or long-term financial goals.
          </h4>
        </div>
        <div class="value-wrappper">
          <div class="value-block">
            <div>Step 4 - Get your money working</div>
          </div>
          <h4 class="no-margin step-bottom">
            Relax and watch your money grow with juicy interest on the go.
          </h4>
          <div class="app-buttons-wrapper">
            <div class="cta-button-wrapper">
              <a class="cta-inline-block-filled-signup" href="https://staging--hervestapp.netlify.app/Signup" target="_blank">
                <!-- Get Started 🚀 --> Get Started
              </a>
            </div>
            <!-- <div class="button-wrapper">
              <a class="button-playstore w-inline-block" href="https://play.google.com/store/apps/details?id=com.hervest&amp;hl=en" target="_blank" />
              <a class="button-appstore w-inline-block" href="https://apps.apple.com/ng/app/hervest/id1509714516" target="_blank" />
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* .phone-mockup {
  background-image: url('@/static/assets/images/App_Mockup_Website.png');
  width: 24rem;
} */

.step-bottom{
  margin-bottom: 50px;
}

.value-block{
    padding: 20px !important;
}

.app-buttons-wrapper {
  display: block;
  margin: 0 auto;
}
</style>
