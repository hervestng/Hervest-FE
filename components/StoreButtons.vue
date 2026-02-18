<template>
  <div class="store-buttons-container button-wrapper">
    <a :href="androidUrl" target="_blank" class="button google-play w-inline-block" aria-label="Get it on Google Play"></a>
    <a :href="iosUrl" target="_blank" class="button app-store w-inline-block" aria-label="Download on App Store"></a>
  </div>
</template>

<script>
import { IOS_WEB_URL, ANDROID_WEB_URL } from '~/commons/deep-link-utils'

export default {
  data() {
    return {
      iosUrl: IOS_WEB_URL,
      androidUrl: ANDROID_WEB_URL
    }
  }
}
</script>

<style scoped>
.store-buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

/* Ensure buttons display correctly if Webflow styles are missing or behave differently */
.button {
  text-indent: -9999px; /* Hide text if any, though standard implementation is empty */
}

/* Override potential margins from global CSS to ensure centering works well */
.button.app-store {
  margin-left: 20px;
}

@media (max-width: 479px) {
  .store-buttons-container {
    flex-direction: column;
    gap: 15px;
  }
  
  .button.app-store {
    margin-left: 0;
  }
}
</style>
