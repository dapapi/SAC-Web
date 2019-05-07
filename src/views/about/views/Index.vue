<template>
  <div>
    <navHeader></navHeader>
    <div class="page-about">
      <div class="light"><img src="https://res-crm.papitube.com/light.jpg" alt=""></div>
        <div class="content">
          
           <h3>ABOUT US</h3>
           <div class="about-desc">
             <p>星冕艺术中心是一所经教育主管部门批准、成立于2019年的创新型教育培训机构。</p>
             <p>我们致力于树立艺考培训行业最高标准，坚持培养学生德艺双面发展，</p>
             <p>为各大国内名校输送高层次艺术人才</p>
           </div>
           <div class="about-desc">
             <p>我们秉信：每一滴付出的汗水都值得最好的回报，</p>
             <p>希望通过课程不仅传授学生知识，更能够激发学生对艺术的热情和信仰，</p>
             <p>致敬每一份献给舞台的青春。</p>
           </div>
           <div class="about-sign">
            <img src="https://res-crm.papitube.com/us.png" alt="">
           </div>
           <!-- <p @click="toLink()" class="linkus">了解更多信息，或预约试听</p> -->
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
    }
  },
  components:{
    'navHeader':navHeader
  },
  mounted(){

  },
  methods:{
    toLink(){
      window.location.href = `/contact.html`
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-about{
    width:80%;
    margin-left:10%;
      .light{
        width: 60%;
        position: fixed;
        right:0px;
        top:15%;
        z-index:-10000;
        min-height: 600px;
        img{
          min-height: 600px;
        }
      }
      h3{
        padding-top:50px;
        text-align: left;
        font-size: 30px;
        letter-spacing: 3px;
       
      }
    .about-desc{
      margin-top:40px;
      font-size: 14px;
      p{
        text-align: left;
        letter-spacing: 1px;
        line-height: 30px;
        
      }
    }
    .about-sign{
      text-align: left;
      margin-top:30px;
      span{
        color:#fff;
        font-size: 12px;
        display: inline-block;
        padding:4px 8px;
        background:rgba(18,125,243,0.3);
        margin-right:10px;
        margin-bottom:10px;
        
      }
    }
    .linkus{
      border:1px solid #dcdddd;
      width: 100%;
      padding:5px 0;
      color:#dcdddd;
      font-size: 14px;
      text-align:center;
      margin-top:30px;
      letter-spacing: 2px;
      
    }
  }
  
  @media screen  and(min-width:769px){
    .page-about{
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
      }
     }
  }
  @media screen and(max-width:768px){
     .page-about{
       height:calc(100vh - 70px);
       margin:0px;
       width: 100%;
       overflow:hidden;
       .content{
         width: 96%;
         margin:0 auto;
         height: 100%;
         position: relative;
         h3{
           margin-top:40px;
           font-size: 24px;
         }
       }
       .about-desc{
         margin-top:20px;
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
