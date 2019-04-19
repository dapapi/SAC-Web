<template>
  <div>
    <navHeader></navHeader>
    <div class="page-course">
      <div class="light"><img src="../../../assets/images/light.jpg" alt=""></div>
        <div class="content">
          <h3>SUBJECTS&PROGRAMME</h3>
          <swiper :options="swiperOption">
            <swiper-slide v-for="item in data" :key="item.id">
              <div class="swiperList" :class="`swiper-list${item.id}`">
                  <div class="top">
                    <h4 class="title">
                      <span class="zh">{{item.zhTitle}}</span>
                      <span class="en">{{item.title}}</span>
                    </h4>
                    <p>{{item.desc}}</p>
                  </div>
                  <div class="center">
                    <h4>考试内容</h4>
                    <p v-for="(item2,index) in item.content" :key="index">{{item2}}</p>
                  </div>
                  <ul class="bottom">
                    <li v-for="item3 in item.class" :key="item3.id">
                      <h4>{{item3.title}}</h4>
                      <p v-for="item4 in item3.desc" :key="item4.id">
                        <span v-if="item4.title">{{item4.title}}:</span>
                        <span>{{item4.desc}}</span>
                      </p>
                    </li>
                  </ul>
                  <div class="vip" v-if="item.vip">
                      <h4>{{item.vip.title}}</h4>
                      <ul>
                        <li>
                            <p v-for="item5 in item.vip.left" :key="item5.id">
                              <span>{{item5.title}}</span>
                              <span>{{item5.desc}}</span>
                            </p>
                        </li>
                        <li>
                            <div>{{item.vip.center.title}}</div>
                            <div>
                              <p v-for="(item6,index2) in item.vip.center.desc" :key="index2">
                                <span>{{item6.title}}</span>
                                <span>{{item6.desc}}</span>
                              </p>
                            </div>
                        </li>
                        <li>
                           <div>{{item.vip.center.title}}</div>
                            <div>
                              <p v-for="(item7,index3) in item.vip.right.desc" :key="index3">
                                <span>{{item7.title}}</span>
                                <span>{{item7.desc}}</span>
                              </p>
                            </div>
                        </li>
                      </ul>
                  </div>
                  <p @click="toLink()" class="linkus">了解更多信息，或预约试听</p>
              </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import navHeader from '../../../components/navHeader'
// import modal from '../../../components/courseModal'
export default {
  name: 'home',
  data(){
    return{
       data:[
         {
           id:1,
           title:'Performance',
           zhTitle:'影视表演',
           pic:require('../../../assets/images/course1.png'),
           desc:'多视表演是塑造人物形象的艺术。针对演员的考试，既注重外部形象条件的选择，又要对考生内部素质进行严格的考察。考试内容可分为声乐、（朗诵）台词、形体、表演，即我们经常说的“声、台、形、表”四门功课',
           content:[
             '考试内容 初试：朗诵（体裁任选一种、每人限3-5分钟）;多人命题练习',
             '复试：语言（朗诵诗歌、散文、小说、戏剧影视独白）；声乐（自备歌曲或戏曲唱段）；形体（舞蹈、武术、体操等）；表演（多人命题小品',
             '三试：声乐、语言、形体综合会试；即兴多人或双人命题小品；口试；才能展示（考生自备）'
           ],
           class:[
             {
               id:1,
               title:'短期双师班',
               desc:[
                 {
                   id:1,
                   title:'开课时间',
                   desc:'7月'
                 },
                 {
                   id:2,
                   title:'课时单价',
                   desc:'300～350元/节'
                 },
                 {
                   id:3,
                   title:'课程周期',
                   desc:' 6周'
                 },{
                   id:4,
                   title:'班级容量',
                   desc:' 10人'
                 },
                 {
                   id:5,
                   title:'课程安排',
                   desc:'形体训练，声乐，表演基础及实践，台词，指导练习。'
                 }
               ]
             },
             {
               id:2,
               title:'长期创新班',
               desc:[
                 {
                   id:1,
                   title:'开课时间',
                   desc:'7月'
                 },
                 {
                   id:2,
                   title:'课时单价',
                   desc:'250～300元/节'
                 },
                 {
                   id:3,
                   title:'课程周期',
                   desc:' 24周'
                 },{
                   id:4,
                   title:'班级容量',
                   desc:' 10人'
                 },
                 {
                   id:5,
                   title:'课程安排',
                   desc:'形体训练，声乐，表演基础及实践，台词，指导练习，文化课。'
                 }
               ]
             },
             {
               id:3,
               title:'S计划',
               desc:[
                 {
                   id:1,
                   title:'开课时间',
                   desc:'7月'
                 },
                 {
                   id:2,
                   title:'课时单价',
                   desc:'200～250元/节'
                 },
                 {
                   id:3,
                   title:'课程周期',
                   desc:' 6周'
                 },{
                   id:4,
                   title:'班级容量',
                   desc:' 5人'
                 },
                 {
                   id:5,
                   title:'课程安排',
                   desc:'形体训练，声乐，表演基础及实践，台词，指导练习，文化课，名师一对一。'
                 }
               ]
             }
           ],
           vip:{
             title:'VIP—对一',
             left:[
               {
                 id:1,
                 title:'开课时间',
                 desc:'7月开始预约'
               },
               {
                 id:2,
                 title:'单节课时',
                 desc:'90分钟'
               }
             ],
             center:{
                title:'优秀教师',
                desc:[
                  {
                    title:'10节',
                    desc:'1000元/节'
                  },
                  {
                    title:'20节',
                    desc:'900元/节'
                  },
                  {
                    title:'30节',
                    desc:'750元/节'
                  }
                ]
              }
             ,
             right:{
              title:'行业名师',
              desc:[
                {
                  title:'10节',
                  desc:'3000元/节'
                },
                {
                  title:'15节',
                  desc:'2500元/节'
                }
              ]
            }
           }
         },
         {
           id:2,
           title:'Dance',
           zhTitle:'舞蹈',
           pic:require('../../../assets/images/course2.png'),
           desc:'舞蹈为八大艺术之一，是于三度空间中以身体为语言作“心智交流”现象之人体的运动表达艺术，本专业培养具备能从事中外舞蹈史、舞蹈理论的研究、舞蹈教学以及编辑等工作的高等专门人才。',
           content:[
             '初试： 1、舞蹈基本功测试； 2、技巧； 3、自选舞蹈作品表演',
             '复试： 1、舞蹈基本功测试； 2、自选舞蹈作品表演； 3、即兴表演（规定音乐）'
           ],
           class:[
             {
               id:1,
               title:'短期双师班',
               desc:[
                 {
                   id:1,
                   title:'开课时间',
                   desc:'7月'
                 },
                 {
                   id:2,
                   title:'课时单价',
                   desc:'150～200元/节 '
                 },
                 {
                   id:3,
                   title:'课程周期',
                   desc:' 6周'
                 },{
                   id:4,
                   title:'班级容量',
                   desc:' 10人'
                 },
                 {
                   id:5,
                   title:'课程安排',
                   desc:'基础训练，技巧，1v2剧目，1v8剧目，指导练习。'
                 },
                 {
                   id:6,
                   title:'',
                   desc:'以各大院校考试内容为核心，以每位学员一个 剧目、一个技巧组合为结课目标。'
                 }
               ]
             },
             {
               id:2,
               title:'长期创新班',
               desc:[
                 {
                   id:1,
                   title:'开课时间',
                   desc:'7月'
                 },
                 {
                   id:2,
                   title:'课时单价',
                   desc:'200～250元/节'
                 },
                 {
                   id:3,
                   title:'课程周期',
                   desc:' 16周'
                 },{
                   id:4,
                   title:'班级容量',
                   desc:' 10人'
                 },
                 {
                   id:5,
                   title:'课程安排',
                   desc:'基础训练，技巧，1v2剧目，1v8剧目，指导练习，素质，即兴编导。'
                 },
                 {
                   id:6,
                   title:'',
                   desc:'以每位学员一个剧目、一个技巧组合为结课目 标，同时提高即兴编舞能力。'
                 }
               ]
             },
             {
               id:3,
               title:'S计划',
               desc:[
                 {
                   id:1,
                   title:'开课时间',
                   desc:'7月'
                 },
                 {
                   id:2,
                   title:'课时单价',
                   desc:'300～350元/节'
                 },
                 {
                   id:3,
                   title:'课程周期',
                   desc:' 16周'
                 },{
                   id:4,
                   title:'班级容量',
                   desc:' 5人'
                 },
                 {
                   id:5,
                   title:'课程安排',
                   desc:'基础训练，技巧，1v2剧目，1v8剧目，指导练习，素质，即兴编导，1v1剧目。'
                 },
                 {
                   id:6,
                   title:'',
                   desc:'以每位学员一个剧目、一个技巧组合为结课目 标，同时提高即兴编舞能力，稳步迈向顶级名校。'
                 }
               ]
             }
           ],
           vip:{
             title:'VIP—对一',
             left:[
               {
                 id:1,
                 title:'开课时间',
                 desc:'7月开始预约'
               },
               {
                 id:2,
                 title:'单节课时',
                 desc:'90分钟'
               }
             ],
             center:{
                title:'优秀教师',
                desc:[
                  {
                    title:'10节',
                    desc:'1000元/节'
                  },
                  {
                    title:'20节',
                    desc:'900元/节'
                  },
                  {
                    title:'30节',
                    desc:'750元/节'
                  }
                ]
              }
             ,
             right:{
              title:'行业名师',
              desc:[
                {
                  title:'10节',
                  desc:'3000元/节'
                },
                {
                  title:'15节',
                  desc:'2500元/节'
                }
              ]
            }
           }
         },
         {
           id:3,
           title:'Radio and TV Editing',
           zhTitle:'编导',
           pic:require('../../../assets/images/course3.png'),
           desc:'本专业是培养具备广播电视节目策划、编导创作专业知识与技能，具备较高理论修养和艺术鉴赏能力，能够从事广播电视网络文艺节目、栏目及频道策划，综艺节目模式研发与创意设计，节目编导、文案写作、制作实施及节目主持人等领域工作的高级复合型人才。',
           content:[
             '考试程序上主要分为笔试和面试，笔试部分主要有文学艺术常识、故事创作、影视作品分析; ',
             '面试部分主要有：自我介绍、才艺展示以及回答考官提问。',
             '编导类不同专业不同院校的考试内容略有不同。'
           ],
           class:[
             {
               id:1,
               title:'短期双师班',
               desc:[
                 {
                   id:1,
                   title:'开课时间',
                   desc:'7月'
                 },
                 {
                   id:2,
                   title:'课时单价',
                   desc:'100～150元/节'
                 },
                 {
                   id:3,
                   title:'课程周期',
                   desc:'6周'
                 },{
                   id:4,
                   title:'班级容量',
                   desc:'15人'
                 },
                 {
                   id:5,
                   title:'课程安排',
                   desc:'声韵母发声、呼吸与共 鸣控制、口腔控制、基础理论课程、 新闻播读、即兴评述、模拟主持、 回答考官提问、文学常识等近40门课程。'
                 }
               ]
             },
             {
               id:2,
               title:'长期创新班',
               desc:[
                 {
                   id:1,
                   title:'开课时间',
                   desc:'7月'
                 },
                 {
                   id:2,
                   title:'课时单价',
                   desc:'200～250元/节'
                 },
                 {
                   id:3,
                   title:'课程周期',
                   desc:'12周'
                 },{
                   id:4,
                   title:'班级容量',
                   desc:'15人'
                 },
                 {
                   id:5,
                   title:'课程安排',
                   desc:'声韵母发声、呼吸与共 鸣控制、口腔控制、基础理论课程、 新闻播读、即兴评述、模拟主持、 回答考官提问、文学常识、文化课等近40门课程。'
                 }
               ]
             }
           ]
         },
         {
           id:4,
           title:'Broadcasting and Hosting Art',
           zhTitle:'播音主持',
           pic:require('../../../assets/images/course4.png'),
           desc:'本专业是培养具备中国播音学、新闻传播学、中国语言文学、哲学美学、 艺术学等多学科知识与能力，从事新闻播音主持、综艺主持、专题主持、 体育评论解说、影视配音、文艺演播，以及播音主持教学与研究工作的复合型语言传播专门人才。',
           content:[
             '考生程序主要分为初试和复试',
             '初试内容主要包括：指定稿件朗读以及回答提问；',
             '复试内容包括：指定稿件播读、模拟主持、即兴评述。'
           ],
           class:[
             {
               id:1,
               title:'短期双师班',
               desc:[
                 {
                   id:1,
                   title:'开课时间',
                   desc:'7月'
                 },
                 {
                   id:2,
                   title:'课时单价',
                   desc:'100～150元/节'
                 },
                 {
                   id:3,
                   title:'课程周期',
                   desc:' 6周'
                 },{
                   id:4,
                   title:'班级容量',
                   desc:' 20~25人'
                 },
                 {
                   id:5,
                   title:'课程安排',
                   desc:'传播学、传媒艺术概论、 电视艺术概论、戏剧艺术概论、中国戏曲、影视作品分析、视听语言、 电视节目策划、纪录片创作、广播 电视节目主持。'
                 }
               ]
             },
             {
               id:2,
               title:'长期创新班',
               desc:[
                 {
                   id:1,
                   title:'开课时间',
                   desc:'7月'
                 },
                 {
                   id:2,
                   title:'课时单价',
                   desc:'200～250元/节'
                 },
                 {
                   id:3,
                   title:'课程周期',
                   desc:' 12周'
                 },{
                   id:4,
                   title:'班级容量',
                   desc:' 20～25人'
                 },
                 {
                   id:5,
                   title:'课程安排',
                   desc:'传播学、传媒艺术概论、 电视艺术概论、戏剧艺术概论、中国戏曲、影视作品分析、视听语言、 电视节目策划、纪录片创作、广播电视节目主持、文化课。'
                 }
               ]
             }
           ]
         },
         {
           id:5,
           title:'Broadcasting and Hosting Art',
           zhTitle:'服装表演',
           pic:require('../../../assets/images/course5.png'),
           desc:'本专业是培养能掌握服装表演的基础知识，具有服装表演能力和技巧，能在服装行业从事服装营销与策划及形象展示等工作的高级技术应用性专门人才。',
           content:[
             '考生程序主要分为初试和复试。',
             '初试内容主要为量体：测量身高、体重、三围尺寸、肩宽、体差等;',
             '复试内容主要为模特技巧：模特步态、造型、乐感、表演能力等。'
           ],
           class:[
             {
               id:1,
               title:'短期双师班',
               desc:[
                 {
                   id:1,
                   title:'开课时间',
                   desc:'7月'
                 },
                 {
                   id:2,
                   title:'课时单价',
                   desc:'120～180元/节'
                 },
                 {
                   id:3,
                   title:'课程周期',
                   desc:' 4周'
                 },{
                   id:4,
                   title:'班级容量',
                   desc:' 20~25人'
                 },
                 {
                   id:5,
                   title:'课程安排',
                   desc:'台步基础、站姿、台步、镜前、 造型、平面基础、素颜拍、棚拍、外拍、 身体机能、形体训练、塑性训练、体能、 化妆技巧'
                 }
               ]
             }
           ]
         },
       ],
       swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false
        // },
        navigation: {
          nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
          prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
        }
      }
    }
  },
  components:{
    'navHeader':navHeader,
    // 'modal':modal
  },
  mounted(){
    // window.addEventListener('scroll',()=>{
    //   let sHeight = document.documentElement.scrollTop
    //   let cHeight = document.documentElement.clientHeight
    //   let nHeight = Math.floor(sHeight/cHeight)
    //   if((sHeight%cHeight)<=(cHeight/2)){
    //       this.isActive = Math.floor(sHeight/cHeight)+1
    //   }
    // })
  },
  methods:{
    toLink(){
      window.location.href = `/contact.html`
    }
    // changeActive(id){
    //    this.isActive = id
    // },
    // changeShow(id){
    //   console.log(id)
    //   this.model=id
    //   this.isShow = true
    // },
    // changeStatus(value){
    //   this.isShow = value
    // }
  }
}
</script>

<style lang="scss" scoped>
   .swiper-button-prev, .swiper-button-next{
    //  position: fixed;
     top:20%;
     width: 30px;
     height: 30px;
     background-size: 60% 60%;
     background-position: center center;
     border-radius: 50%;
     background-color: rgba(255,255,255,.6);
     
   }
  
  .page-course{
    .light{
      width: 40%;
      position: fixed;
      right:0px;
      top:20%;
      z-index:-10000;
      min-height: 600px;
      img{
        min-height: 600px;
      }
    }
    .content{
      width: 100%;
      margin:0 auto;
      margin-top:200px;
      height: 100%;
      h3{
        text-align: left;
        font-size: 30px;
        letter-spacing: 3px;
        width: 70%;
        margin:0 auto;
        margin-bottom:40px;
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
      .swiperList{
        
        width: 70%;
        margin:0 auto;
        text-align:left;
        .top{
          position: relative;
          min-height: 200px;
          width:100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          .title{
            padding-top:50px;
          }
          .zh{
            font-size: 20px;
          }
          .en{
            font-size: 12px;
            margin-left:20px;
          }
          p{
            width: 60%;
            margin-top:20px;
            line-height: 22px;
            font-size: 14px;
            
          }
        }
        .center{
          margin-top:20px;
          border-top:1px solid #dcdddd;
          border-bottom:1px solid #dcdddd;
          padding:20px 0 12px 0;
          position: relative;
          h4{
            position: absolute;
            left:0px;
            top:-12px;
            padding-right:10px;
            background-color:black;
          }
          p{
            line-height: 24px;
            font-size: 14px;
            
            
          }
          
        }
        .bottom{
          
          margin-top:20px;
          li{
            padding:20px;
            background-color:rgba(100, 148, 173, .15);
            line-height: 24px;
            font-size: 14px;
            h4{
              font-size: 16px;
              text-align: center;
              margin-bottom:10px;
              color:#6494ad;
            }
            p{
              margin-bottom:4px;
              color:#6494ad;
              span{
                &:first-child{
                  margin-right:10px;
                }
              }
            }
          }
        }
        .vip{
          padding:20px;
          padding-left:0px;
          margin-top:20px;
          background-color:rgba(100, 148, 173, .15);
          color:#6494ad;
          font-size: 14px;
          h4{
              font-size: 16px;
              margin-bottom:20px;
              text-align: center;
             color:#6494ad;
            }
          ul{
            display: flex;
            
            li{
              flex: 1;
              padding:0 20px;
              border-right:1px solid #dcdddd;
              color:#6494ad;
              &:last-child{
                border-right:0px;
              }
              p{
                line-height: 24px;
                color:#6494ad;
                span{
                  &:first-child{
                    margin-right: 10px;
                    color:#6494ad;
                  }
                }
              }
            }
          }
        }
      }
      .swiper-list1{
        .top{
          background-image:url('../../../assets/images/course1.png')
        }
      }
      .swiper-list2{
        .top{
          background-image:url('../../../assets/images/course2.png')
        }
      }
      .swiper-list3{
        .top{
          background-image:url('../../../assets/images/course3.png')
        }
      }
      .swiper-list4{
        .top{
          background-image:url('../../../assets/images/course4.png')
        }
      }
      .swiper-list5{
        .top{
          background-image:url('../../../assets/images/course5.png')
        }
      }
    }
  }
  @media screen  and(min-width:769px){
          .swiper-button-prev, .swiper-button-next{
          //  position: fixed;
          top:18%;
          width: 30px;
          height: 30px;
          background-size: 60% 60%;
          background-position: center center;
          border-radius: 50%;
          background-color: rgba(255,255,255,.6);
          
        }
          .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
              left:68%;
              
            }
        .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
              right:25%
          }
       .bottom{
          display: flex;
          margin-top:20px;
          li{
            flex:1;
            margin-right:20px;
            &:last-child{
              margin-right:0px;
            }
          }
        }
  }
  @media screen and(max-width:768px){
    .swiper-button-prev, .swiper-button-next{
    //  position: fixed;
     top:11%;
     width: 30px;
     height: 30px;
     background-size: 60% 60%;
     background-position: center center;
     border-radius: 50%;
     background-color: rgba(255,255,255,.6);
     
   }
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
        left:70%;
        
      }
   .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
        right:10%
    }
      .page-course{
        .content{
          margin-top:100px;
          h3{
            text-align: left;
            font-size: 24px;
            letter-spacing: 3px;
            width: 96%;
            margin:0 auto;
            margin-bottom:40px;
          }
          .swiperList{
            width:100%;
            .top{
              padding-left:2%;
              .title{
                padding-top:10px;
              }
              p{
                width: 80%;
              }
            }
            .center,.bottom{
              width: 96%;
              margin-left:2%;
            }
            .bottom{
              li{
                margin-bottom:20px;
              }
            }
            .vip{
              width:calc(96% - 20px);
              margin-left:2%;
            }
          }
          .linkus{
          
            width: 96%;
            margin-left:2%;
            
          }
        }
        
      }
  }
  
</style>
