<template>
  <div class="bg-gray-50 overflow-hidden h-screen text-petrol">
    <svg class="absolute blob-1" width="737" height="1073" viewBox="0 0 737 1073" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M360.081 88.0455C418.6 110.022 462.13 173.594 498.748 231.122C535.426 288.818 565.359 340.412 585.361 399.178C605.364 457.945 615.375 523.718 614.937 605.759C614.727 687.908 604.006 786.159 551.815 850.804C499.684 915.616 405.915 946.883 312.368 949.259C218.989 951.575 126.001 924.939 60.7243 869.948C-4.55193 814.957 -42.344 731.504 -89.2732 650.58C-136.202 569.656 -192.557 490.985 -192.818 412.796C-192.911 334.547 -137.139 256.672 -69.8467 205.55C-2.72265 154.488 76.0883 130.119 152.133 108.071C228.177 86.023 301.791 66.1765 360.081 88.0455Z" fill="#FCE9E4"/>
    </svg>

    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
      <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
          <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
      </svg>

      <div class="relative mt-4 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="relative">
          <img class="mb-24 -mt-16" width="160" src="~/assets/jay-logo.svg">
        
          <h4 class="text-6xl font-semibold tracking-tight" style="line-height: 4rem;">
            Jetzt kommt es auf Dich an!
          </h4>
          <p class="mt-3 text-lg leading-7 ">
            Das Coronavirus verändert unsere Welt und unseren Arbeitsmarkt. Wenn du also gerade deinen Job verloren hast oder nur noch eingeschränkt ausüben kannst, hast du nun die Chance in Bereichen auszuhelfen, in denen Hilfe gerade dringend benötigt wird.
          </p>
          <a class="mt-8 block text-lg leading-7 text-salmon" href="mailto:hallo@getjay.de">hallo@getjay.de</a>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0">
          <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
            <defs>
              <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
          </svg>

          <div class="iphone-x">
            <i>Speaker</i>
            <b>Camera</b>

            <iframe src="/?mode=demo" class="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import mobile from 'is-mobile'

export default Vue.extend({
  mounted () {
    document.body.classList.add('demo')
    if (mobile()) this.$router.replace('/')
  }
})
</script>

<style lang="scss">
body.demo {
  overflow: hidden;
}

.blob-1 {
  transform: scale(1.3);
  left: 100px;
  top: 40%;
}

.iphone-x {
  position: relative;
  margin: 40px auto;
  width: 360px;
  height: 780px;
  background-color: #7371ee;
  background-image: linear-gradient(60deg, #7371ee 1%,#a1d9d6 100%);
  border-radius: 40px;
  box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111;
  overflow: hidden;
  
  &:before,
  &:after{
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  // home button indicator
  &:after {
    bottom: 7px;
    width: 140px;
    height: 4px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
  
  // frontal camera/speaker frame
  &:before {
    top: 0px;
    width: 56%;
    height: 30px;
    background-color: #1f1f1f;
    border-radius: 0px 0px 40px 40px;
  }
  
  i,
  b,
  s,
  span {
    position: absolute;
    display: block;
    color: transparent;
  }
  
  // speaker
  i {
    top: 0px;
    left: 50%;
    transform: translate(-50%, 6px);
    height: 8px;
    width: 15%;
    background-color: #101010;
    border-radius: 8px;
    box-shadow: inset 0px -3px 3px 0px rgba(256, 256, 256, 0.2);
  }
  
  // camera
  b {
    left: 10%;
    top: 0px;
    transform: translate(180px, 4px);
    width: 12px;
    height: 12px;
    background-color: #101010;
    border-radius: 12px;
    box-shadow: inset 0px -3px 2px 0px rgba(256, 256, 256, 0.2);
    
    &:after {
      content: '';
      position: absolute;
      background-color: #2d4d76;
      width: 6px;
      height: 6px;
      top: 2px;
      left: 2px;
      top: 3px;
      left: 3px;
      display: block;
      border-radius: 4px;
      box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
    }
  }
  
  // time
  s {
    top: 50px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    width: 100%;
    font-size: 70px;
    font-weight: 100;
    padding-top: 60px;
  }
  
  // action buttons
  span {
    bottom: 50px;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    left: 30px;
    
    & + span {
      left: auto;
      right: 30px;
    }
  }
}
</style>
