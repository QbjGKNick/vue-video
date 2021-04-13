<template>
        <div id="video-content">
        <video  ref="video" muted class="video-js vjs-default-skin">
        </video>
      </div>
</template>

<script>
import videoJs from 'video.js'
import 'videojs-contrib-hls'

import 'video.js/dist/video-js.css';

export default {
  name: "VideoJS",
  props: {
    url:{
      type: String,
    },
    videoType: {
      type: String,
      default: 'application/x-mpegURL' //hls: 'application/x-mpegURL' mp4: 'video/mp4' rtmp: 'rtmp/flv'
    }
  },
  data(){

    return {

    }
  },
  watch: {
    url(value){
      if(!this.player){
        this.initPlayer()
      }

      // eslint-disable-next-line no-console
      console.log('teste',value)
      this.play()
      this.player.load()
    }
  },
  methods:{
    initPlayer(){
      this.player = videoJs(this.$refs.video, {
                autoplay: true, // 是否自动播放
                controls: true, // 是否显示控件
            })
    },
    play(){
      this.player.src({
          src: this.url,
          type: this.videoType, // 这个type值必写, 告诉videojs这是一个hls流视频
      })
      
    }
  },
  mounted(){
    this.$nextTick(()=>{
       this.initPlayer()
       this.play()
    })
   
  },
  beforeDestroy(){
    if(this.player){
      this.player.dispose()
    }
  }
}
</script>

<style>
  .video-js{
    width: 300px;
    height: 300px;
  }
</style>