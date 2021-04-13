<template>
  <div id="app">
    <!-- <VideoJS :url="url" /> -->
    <!-- <video
      id="myVideo"
      class="video-js vjs-default-skin vjs-big-play-centered"
      controls
      preload="auto"
      data-setup="{}"
      style="width: 100%;height: auto"
    >
      <source id="source" :src="url" type="application/x-mpegURL" />
    </video> -->

    <!-- <video id="video" muted></video> -->
    <span>test-video</span>
  </div>
</template>

<script>
// import VideoJS from './components/VideoJS.vue'
// import Hls from 'hls.js'
export default {
  name: 'app',
  data() {
    return {
      url:
        '/api/vms/v1/webuas/media-server/Local/livestream.m3u8?camera_id=15010102001311000015&stream_type=0&visit_ip=&id=sMulXNswlIrzoHVrAv9J' // '/api/vms/v1/webuas/media-server/Local/livestream.m3u8?camera_id=15010102001311000006&stream_type=0&visit_ip=&id=3Rg2cXsAxzghfjueVPGt'
    }
  },
  mounted() {
    // var video = document.getElementById('video')
    // var videoSrc = this.url
    // if (Hls.isSupported()) {
    //   var hls = new Hls()
    //   hls.loadSource(videoSrc)
    //   hls.attachMedia(video)
    //   hls.on(Hls.Events.MANIFEST_PARSED, function() {
    //     // this.$nextTick(() => {
    //     video.play()
    //     // })
    //   })
    // }
    // hls.js is not supported on platforms that do not have Media Source
    // Extensions (MSE) enabled.
    //
    // When the browser has built-in HLS support (check using `canPlayType`),
    // we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video
    // element through the `src` property. This is using the built-in support
    // of the plain video element, without using hls.js.
    //
    // Note: it would be more normal to wait on the 'canplay' event below however
    // on Safari (where you are most likely to find built-in HLS support) the
    // video.src URL must be on the user-driven white-list before a 'canplay'
    // event will be emitted; the last video event that can be reliably
    // listened-for when the URL is not on the white-list is 'loadedmetadata'.
    // else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    //   video.src = videoSrc
    // }
  }
  // components: {
  //   VideoJS
  // }
  // mounted(){
  //   setTimeout(()=>{
  //     this.url =  'http://172.16.1.221:8060/api/vms/v1/webuas/media-server/Local/livestream.m3u8?camera_id=15010100001319999950&stream_type=0&visit_ip=&id=5YdU7cZ4JDTL0Pd1T901'
  //   },100 * 1000)
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
video {
  /* width: 800px;
  height: 800px; */
}
</style>
