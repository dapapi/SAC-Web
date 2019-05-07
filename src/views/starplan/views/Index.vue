<template>
  <div class="all-page">
    <navHeader></navHeader>
    <div class="page-plan">
        <div class="content">
          <h3>SHINING PLAN</h3>
          <div class="plan-desc">
             <p v-for="(item,index) in desc1" :key="index">{{item}}</p>
          </div>
          <div class="plan-desc">
             <p v-for="(item,index) in desc2" :key="index">{{item}}</p>
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
       desc1:[
         '为了推进文化艺术教育发展，星冕艺术中心推出专项扶持计划——“星跃计划”',
         '旨在大力扶持中国文化艺术教育产业发展，',
         '帮助更多的优秀艺术类专业考生得到更加正规系统的学习，',
         '进入理想的大学，成为文化艺术领域优秀专业人才。',
         
       ],
       desc2:[
         '你可以成为优秀学员代表，加入星跃计划，为课程减免学费。',
         '最高减免比例达到学费的30%。',
         
       ]
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
  .all-page{
    background-image:url("https://res-crm.papitube.com/starplan.png");
    background-repeat:no-repeat;
    background-position:0 0;
    background-size:100% 100%;
    width:100%;
  }
  .page-plan{
    width:80%;
    margin-left:10%;
    
    
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
    h3{
        padding-top:50px;
        text-align: left;
        font-size: 30px;
        letter-spacing: 3px;
        
      }
    .plan-desc{
      margin-top:40px;
      p{
        text-align: left;
        letter-spacing: 1px;
        line-height: 30px;
      }
    }
  }
  
  @media screen  and(min-width:769px){
    .page-plan{
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
     .page-plan{
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
        }
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
