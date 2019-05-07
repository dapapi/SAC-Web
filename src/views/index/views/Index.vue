<template>
  <div>
    <navHeader></navHeader>
    <div class="page">
        <div class="content">
          <swiper :options="swiperOption">
            <swiper-slide v-for="item in swiperData" :key="item.id">
              
              <div class="swiperList" :class="`swiper-list${item.id}`">
                  <img :src="item.url" alt="">
                  <!-- <p>{{item.title}}</p> -->
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import navHeader from '../../../components/navHeader'
export default {
  name: 'home',
  data(){
    return{
       swiperData:[
         {
           id:1,
           title:'致敬献给舞台的青春',
           url:'https://res-crm.papitube.com/home1.jpg'
         },
         {
           id:2,
           title:'为每一个至臻闪耀的时刻',
           url:'https://res-crm.papitube.com/home2.jpg'
         },
         {
           id:3,
           title:'激发闪耀人生',
           url:'https://res-crm.papitube.com/home3.jpg'
         }
       ],
       swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components:{
    'navHeader':navHeader
  },
  mounted(){

  },
  methods:{

  }
}
</script>
<style lang="scss">
  .page{
    width:100%;
    height: 100vh;
    overflow: hidden;
    // .pic{
    //   width: 100%;
    //   height: 100%;
    //   background-image:url("../../../assets/images/home.jpg");
    //   background-repeat: no-repeat;
    //   background-size:100% 100%;

    // }
  }
  .swiper-container{
     height: 100%;
  }
  .swiperList{
      position: relative;
      height:100%;
      display: flex;
      img{
        justify-content: center;
        align-items: center; 
      }
      p{
        position: absolute;
        font-size: 24px;
        font-weight: 100;
        letter-spacing:6px;
        
      }

  }
  .swiper-list1{
    p{
        right:20%;
        top:55%;
    }
  }
  .swiper-list2{
    p{
        left:36%;
        top:64%;
    }
  }
  .swiper-list3{
    p{
        right:20%;
        top:27%;
    }
  }
  
  .page .content .swiper-pagination-bullet{
    background-color:rgba(0,0,0,0);
    border:1px solid #dcdddd;
    opacity:1;
  }
  .page .content .swiper-pagination-bullet-active{
    background:#dcdddd;
  }
  @media screen  and(min-width:769px){
    .page{
       .content{
          width: 100%;
          height: 100%;
          position: relative;
      }
     }
  }
  @media screen and(max-width:768px){
     .page{
       margin:0px;
       width: 100%;
       overflow:hidden;
       .content{
         width: 100%;
         height: 100%;
         position: relative;
       }
       img{
         height: 100%;
       }
       .swiper-list2{
          p{
              left:16%;
              top:64%;
          }
        }
     }
  }
</style>
