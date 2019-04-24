<template>
  <div>
    <navHeader></navHeader>
    <div class="page-teach">
      <div class="light"><img src="../../../assets/images/light.jpg" alt=""></div>
        <div class="content">
          <h3>TEACHING MODELS</h3>
          <div class="teach-desc">
            <p>你可以和艺术中心的专业辅导老师单独进行意向沟通和定标，</p>
            <p>以学生和家长的理想院校为目标，制定详细的个性化训练学习计划</p>
            <p>采取专业课和文化课相结合的授课方式</p>
          </div>
          <div class="teach-line">
             <img src="../../../assets/images/teachModel.png" />
             <!-- <ul class="teach-line1">
               <li v-for="item in line1" :key="item.id">
                 <h4>{{item.title}}</h4>
                 <p>{{item.desc}}</p>
               </li>
             </ul>
             <div class="teach-border">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
             </div>
             <ul class="teach-line2">
               <li v-for="item in line2" :key="item.id">
                 <h4>{{item.title}}</h4>
                 <p>{{item.desc}}</p>
               </li>
             </ul> -->
             
          </div>
          <div class="teach">
            <img src="../../../assets/images/teach.png" alt="">
          </div>
          
          <ul class="way">
            <li v-for="item in teach" :key="item.id">
              <div>
                <h4 class="title1">{{item.title}}</h4>
              <p class="title2">{{item.title2}}</p>
              <p>{{item.desc}}</p>
              </div>
            </li>
          </ul>
          <!-- <div class="way-vip">
              <h4>VIP—对一</h4>
              <p>针对学生专项能力提高、专精领域的答疑和突破，艺术中心设计了高效、高质量的辅导式一对一课程。通过集中训练和学习，对学生的重点项目有的放矢，帮 助学生达到段时间内能力的跃升。</p>
          </div> -->
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
       desc:[
         '将生命委以艺术',
         '以技艺之初探体验其芳华',
         '愿S艺考成为一颗星辰',
         '闪在晨曦 闪在黄昏',
         '在尘世的喧嚣里 摇曳着芬芳',
         '存于浓情  淡韵',
         '最终凝成时光的芳醇'
       ],
       line1:[
         {
           id:1,
           title:'入学综合测评',
           desc:'外在形象条件、专业素养、学习意 愿及动力等综合能力测评，给出报 考建议和个性化学习计划。'
         },
         {
           id:2,
           title:'能力进阶',
           desc:'夯实基本功，螺旋式对各项能力、 技能进行深造，提升综合素质。'
         },
         {
           id:3,
           title:'重点能力冲刺',
           desc:'根据阶段成果、个人目标，进童 点能力、重点项目的冲刺和集训， 达到个人特长的最优化发展。'
         },
         {
           id:4,
           title:'考前答疑',
           desc:'艺考知识点考前串讲，根据不同院校不同专业的考试进行考前答疑。'
         },
       ],
       line2:[
         {
           id:1,
           title:'基本功训练',
           desc:'各专业的基本功训练，扎实的基础 是进步的基石。'
         },
         {
           id:2,
           title:'文化课同步',
           desc:'文化课与专业课同步，保证专业技 能训练的同时，确保文化课成绩能 有稳步提升。'
         },
         {
           id:1,
           title:'模拟训练',
           desc:'艺考考场全真模拟，往年真题实 践，反常规训练让学生具备应急处 理能力。'
         },
       ],
       teach:[
         {
           id:1,
           title:'短期双师班',
           title2:'每班学生： 25人',
           desc:'采取专业课老师授课+课程顾问辅导 跟踪的双师教学模式，除了专业课教 师外，还为每一名学生配备一位辅导 教师，全程跟踪每一位学生在艺术中 心的学习和生活过程，指导答疑、跟 进听课和学习情况，真正做到让学生 每一堂课都有确实收获。'
         },
         {
           id:2,
           title:'长期创新班',
           title2:'每班学生： 10人',
           desc:'长期创新班的课程相较短期双师班课 程，有更多创新型技巧的拓展训练， 注重学生创意能力的培养。在专业课安排之外，还安排与艺考科 目相匹配的文化课程，让学生在艺术 中心一步到位完成艺考准备。'
         },
         {
           id:3,
           title:'S计划',
           title2:'每班学生： 5人',
           desc:'S计划针对向顶级名校的顶级专业发 起冲刺的学生，除了专业课、文化课 外，还安排了多节一对一专家指导课 程，强化学生个性化优势，打造明星 学员。S计划的需要通过面试申请。'
         }
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
  .page-teach{
    width:80%;
    margin-left:10%;
    text-align: left;
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
    .teach-desc{
      margin-top:40px;
      p{
        text-align: left;
        letter-spacing: 1px;
        line-height: 30px;
        
      }
    }
    .teach-line{
      img{
        width:100%;
      }
    }
    .teach{
     background-color:rgba(100, 148, 173, .15);
    }
    .teach-line1,.teach-line2{
      margin:20px 0;
      display: flex;
      
      li{
        flex: 1;
        padding:0 10px;
        font-size: 14px;
       
        &:first-child{
          padding-left:0px;
        }
        &:last-child{
          padding-right: 0px;
        }
        h4{
          color:#6494ad;
        }
        p{
           color:#6494ad;
        }
      }
    }
    .teach-border{
      display: flex;
      span{
        flex: 1;
        height: 1px;
        width: 100%;
        background:#fff;
        &::before{
          content:'';
          display: inline-block;
          position: relative;
          top:-13px;
          width:6px;
          height: 6px;
          border-radius: 50%;
          background-color:#fff;
          
        }
      }
    }
    
    ul.way{
      
      margin:20px 0 ;
      li{
        background-color:rgba(100, 148, 173, .15);
        color:#6494ad;
        padding:20px;
        .title1{
          text-align: center;
          font-size: 16px;
          color:#6494ad;
        }
        .title2{
          margin:20px 0;
          color:#6494ad;
        }
        p{
          letter-spacing: 1px;
          line-height: 22px;
          font-size: 14px;
          color:#6494ad;
        }
      }
    }
    .way-vip{
      padding:20px;
      background-color:rgba(100, 148, 173, .15);
      
      h4{
        text-align: center;
        margin-bottom:20px;
        color:#6494ad;
        
      }
      p{
        font-size: 14px;
        color:#6494ad;
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
    .page-teach{
       height: calc(100vh - 140px);
       margin-top:110px;
       margin-bottom:30px;
       
       .content{
          width: 96%;
          margin:0 auto;
          height: 100%;
          position: relative;
          ul.way{
          margin:20px 0 ;
          display: flex;
          li{
            flex: 1;
            
            margin-right:20px;
            &:last-child{
              margin-right: 0px;
            }
          }
        }
      }
     }
  }
  @media screen and(max-width:768px){
     .page-teach{
       height:calc(100vh - 70px);
       margin:0px;
       width: 100%;
       .content{
         width: 96%;
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
        ul.way{
          li{
            margin-bottom:20px;
          }
        }
       }
       .pic{
          display: none;
       }
     }
  }
</style>
