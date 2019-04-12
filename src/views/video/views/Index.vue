<template>
  <div>
    <navHeader></navHeader>
    <div class="page">
        <div class="bg"></div>
        <div class="content">
          <h3>Video Channel Name</h3>
          <ul class="videolist clearfix">
            <li v-for="item in videoList" :key="item.id" @click="goSwiper()">
              <div class="pic">
                <img :src="item.url" alt="">
                <div class="play"></div>
              </div>
              <p class="important"><span class="name">{{item.name}}</span>|<span class="time">{{item.time}}</span></p>
              <p class="overflowMuch desc">{{item.desc}}</p>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>
<script>
import navHeader from '../../../components/navHeader'
export default {
  name: 'shipin',
  data(){
    return{
       videoList:[
         {
           id:1,
           url:require('../../../assets/performance2.jpg'),
           name:'Video Title',
           time:'00:32',
           desc:'This is a great space to update your audience with a description of your video. Include informati'
         },
         {
           id:2,
           url:require('../../../assets/performance2.jpg'),
           name:'Video Title',
           time:'00:32',
           desc:'This is a great space to update your audience with a description of your video. Include informati'
         },
         {
           id:3,
           url:require('../../../assets/performance2.jpg'),
           name:'Video Title',
           time:'00:32',
           desc:'This is a great space to update your audience with a description of your video. Include informati'
         },
         {
           id:4,
           url:require('../../../assets/performance2.jpg'),
           name:'Video Title',
           time:'00:32',
           desc:'This is a great space to update your audience with a description of your video. Include informati'
         },
         {
           id:5,
           url:require('../../../assets/performance2.jpg'),
           name:'Video Title',
           time:'00:32',
           desc:'This is a great space to update your audience with a description of your video. Include informati'
         }
       ]
    }
  },
  components:{
    'navHeader':navHeader
  },
  methods:{
    goSwiper(){
      this.$router.push({
          path:`/swiper`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .page{
        padding-top:80px;
        min-height:calc(100vh - 80px);
        .bg{
          height: 100vh;
          width:100%;
          position: fixed;
          z-index:-100;
          background-image:url('../../../assets/bgCourse.jpg');
          background-repeat: no-repeat;
          background-size: cover;
        }
        .content{
          width:80%;
          margin:0 auto;
          .videolist{

            li{
              float:left;
              width: 33.3%;
              margin-bottom:40px;
              p{
                color:#fff;
                text-align: left;
              }
              .important{
                color:#808080;
                padding:8px 0;
                .name{
                  margin-right:4px;
                  color:#fff
                }
                .time{
                  margin-left:4px;
                }
              }
              .pic{
                position: relative;
                img{
                  width:100%;
                }
                &:hover{
                  .play{
                    display: block;
                  }
                }
                .play{
                  display: none;
                  position: absolute;
                  top:0px;
                  left:0px;
                  width: 100%;
                  height: 100%;
                  background-color:rgba(0,0,0,0.3);
                  background-image: url('../../../assets/headerTitle.jpg');
                  background-repeat: no-repeat;
                  background-position: center center;
                }
              }
            }
          }
        }
        h3{
          text-align: left;
          font-size: 24px;
          color:#fff;
        }
    }
    .overflowMuch{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
</style>
