<template>
  <div>
    <navHeader></navHeader>
    <div class="page-team">
        <div class="content">
          <h3>OUR TUTORS</h3>
          <div class="team-desc">
             <p v-for="(item,index) in team1" :key="index">{{item}}</p>
          </div>
          <div class="team-desc">
             <p v-for="(item,index) in team2" :key="index">{{item}}</p>
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
       team1:[
         '所有专业课教师均毕业于中戏、中传、北影、北舞等专业相关的顶级院校，',
         '上岗前均经过初试、复试、培训、终试等4轮严格筛选，',
         '平均拥有5年以上的实际教学经验，',
         '不仅注重知识和技艺的传授，更注重对学生德育的培养。',
         '同时，课程大纲由名校优秀教师辅导指点。'

       ],
       team2:[
         '艺术中心同时邀请各大院校的名师、名家作为客座讲师，',
         '为学生拓展行业视野、提高艺术鉴赏能力，',
         '实现人才与高校的直接链接。'
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
  .page-team{
    width:80%;
    margin-left:10%;
    text-align: left;
    background-image:url("../../../assets/images/teachbg.png");
    background-repeat:no-repeat;
    background-position:0 0;
    background-size:contain;
    .linkus{
      border:1px solid #dcdddd;
      width: 100%;
      padding:5px 0;
      color:#dcdddd;
      font-size: 14px;
      text-align:center;
      margin-top:30px;
      letter-spacing: 2px;
      margin-bottom:20px;
    }
    h3{
        padding-top:50px;
        text-align: left;
        font-size: 30px;
        letter-spacing: 3px;
        
      }
    .team-desc{
      margin-top:40px;
      p{
        text-align: left;
        letter-spacing: 1px;
        line-height: 30px;
      }
    }
  }
  
  @media screen  and(min-width:769px){
    .page-team{
       height: calc(100vh - 140px);
       margin-top:110px;
       margin-bottom:30px;
       
       .content{
          width: 100%;
          height: 100%;
          position: relative;
          
      }
     }
  }
  @media screen and(max-width:768px){
     .page-team{
       height:calc(100vh - 70px);
       margin:0px;
       width: 100%;
       .content{
         width: 94%;
         margin:0 auto;
         height: 100%;
         position: relative;
         h3{
          padding-top:50px;
          margin-top:40px;
          text-align: left;
          font-size: 30px;
          letter-spacing: 3px;
          
        }
       }
       
       img{
         height: 100%;
       }
       
     }
  }
</style>
