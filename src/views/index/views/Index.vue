<template>
  <div>
    <navHeader></navHeader>
    <div class="page">
        <div class="content">
          <div class="pic"></div>
          <img src="../../../assets/phoneHomeBanner.jpg" alt="">
          <div class="desc">
              <p v-for="(item,index) in desc" :key="index">{{item}}</p>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import navHeader from '../../../components/navHeader'
export default {
  name: 'home',
  data(){
    return{
       desc:[
         '将生命委以艺术',
         '以技艺之初探体验其芳华',
         '愿S艺考成为一颗星辰',
         '闪在晨曦 闪在黄昏',
         '在尘世的喧嚣里 摇曳着芬芳',
         '存于浓情  淡韵',
         '最终凝成时光的芳醇'
       ]
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

<style lang="scss" scoped>
  .page{
    width:80%;
    margin-left:10%;
    .pic{
      width: 100%;
      height: 100%;
      background-image:url("../../../assets/home.jpg");
      background-repeat: no-repeat;
      background-size:100% 100%;

    }
    .desc{
      position: absolute;
      background-color:rgba(255,255,255,0.18);
      p{
        font-size: 20px;
        font-family:'微软雅黑';
        font-weight: bold;
        margin-bottom:20px;
        padding-left:8%;
        text-align:left;
        color:#fff
      }

    }
  }
  
  @media screen  and(min-width:769px){
    .page{
       height: calc(100vh - 140px);
       margin-top:110px;
       margin-bottom:30px;
       
       .content{
          width: 100%;
          height: 100%;
          position: relative;
          &:hover{
            .desc{
              display: block;
            }
          }
          img{
            display: none;
          }
      }
      .desc{
        display: none;
        width: 100%;
        height:100%;
        top:0px;
        p{
          &:first-child{
             margin-top:4%;
          }
        }
      }
     }
  }
  @media screen and(max-width:768px){
     .page{
       height:calc(100vh - 70px);
       margin:0px;
       width: 100%;
       overflow:hidden;
       .content{
         width: 100%;
         height: 100%;
         position: relative;
       }
       .desc{
         display: block;
         background-color:rgba(0,0,0,0.4);
         bottom:0px;
         left:0px;
         padding:4% 0;
         width:100%;
        //  height: 100%;
       }
       img{
         height: 100%;
       }
       .pic{
          display: none;
       }
     }
  }
</style>
