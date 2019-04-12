<template>
  <div>
    <navHeader></navHeader>
    <div class="page">
        <div class="bg"></div>
        <div>
          <h1>{{data1.title}}</h1>
          <ul>
            <li v-for="item1 in data1.list" :key="item1.id">
              <h3>{{item1.title}}</h3>
              <div v-for="(item2,index1) in item1.data" :key="index1">
                <h5></h5>
                <div>
                  <p></p>
                </div>
              </div>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import navHeader from '../../../components/navHeader'
export default {
  name: 'info',
  data(){
    return{
      data1:{
        title:'播音主持重点院校招生简章',
        list:[
          { 
            id:1,
            title:'中国传媒大学',
            data:[
              {
                title:'院校介绍',
                desc:'中国传媒大学（Communication University of China）简称“中传”，位于首都北京，是中华人民共和国教育部直属的语言艺术类行业特色大学。是国家“世界一流学科建设高校”，“211工程”重点建设大学，“985工程优势学科创新平台”重点建设高校，“111计划”，“国家建设高水平大学公派研究生项目”入选高校，传媒高等教育国际联盟发起单位。知名校友白岩松、李咏等。'
              },
              {
                title:'专业介绍',
                desc:'播音主持艺术：男生50名、女生50名，面向全国招生。'
              },
              {
                title:'考试内容',
                desc:[
                  {
                    title:'（一）初试：',
                    desc:[
                      '1. 时间：2019年1月1日9:00-11:30；',
                      '2.考试要求：考生须持本人身份证和初试准考证参加考试；',
                      '3.考试内容：文化素养基础测试，分为语数英和文史哲两种类别，考生可自主选择其中一类参加考试。'
                    ]
                  },
                  {
                    title:'（二）复试：',
                    desc:[
                      '1. 时间：2019年2月15日-2月22日；',
                      '2. 面试：①指定稿件播读；②现场应答或展示。',
                    ]
                  },
                  {
                    title:'（三）三试：',
                    desc:[
                      '1. 时间：2019年3月15日-3月17日；',
                      '2. 面试：（考试过程录像，考生不允许化妆）①指定稿件一播读；②指定稿件二播读并评述；③现场应答或展示。',
                    ]
                  }
                ]
              },
              {
                title:'18年录取情况',
                desc:'在考生文化折算比值达到学校确定的本专业最低折算比值情况下，按照综合分（综合分=文化折算比值+专业折算比值）择优录取。在综合分相同的情况下，按专业排名择优录取。最低文化折算比值是0.75。录取率为180:1。'
              },
            ],
          },
          { 
            id:1,
            title:'中国传媒大学',
            data:[
              {
                title:'院校介绍',
                desc:'中国传媒大学（Communication University of China）简称“中传”，位于首都北京，是中华人民共和国教育部直属的语言艺术类行业特色大学。是国家“世界一流学科建设高校”，“211工程”重点建设大学，“985工程优势学科创新平台”重点建设高校，“111计划”，“国家建设高水平大学公派研究生项目”入选高校，传媒高等教育国际联盟发起单位。知名校友白岩松、李咏等。'
              },
              {
                title:'专业介绍',
                desc:'播音主持艺术：男生50名、女生50名，面向全国招生。'
              },
              {
                title:'考试内容',
                desc:[
                  {
                    title:'（一）初试：',
                    desc:[
                      '1. 时间：2019年1月1日9:00-11:30；',
                      '2.考试要求：考生须持本人身份证和初试准考证参加考试；',
                      '3.考试内容：文化素养基础测试，分为语数英和文史哲两种类别，考生可自主选择其中一类参加考试。'
                    ]
                  },
                  {
                    title:'（二）复试：',
                    desc:[
                      '1. 时间：2019年2月15日-2月22日；',
                      '2. 面试：①指定稿件播读；②现场应答或展示。',
                    ]
                  },
                  {
                    title:'（三）三试：',
                    desc:[
                      '1. 时间：2019年3月15日-3月17日；',
                      '2. 面试：（考试过程录像，考生不允许化妆）①指定稿件一播读；②指定稿件二播读并评述；③现场应答或展示。',
                    ]
                  }
                ]
              },
              {
                title:'18年录取情况',
                desc:'在考生文化折算比值达到学校确定的本专业最低折算比值情况下，按照综合分（综合分=文化折算比值+专业折算比值）择优录取。在综合分相同的情况下，按专业排名择优录取。最低文化折算比值是0.75。录取率为180:1。'
              },
            ],
          },
        ]
      }
    }
  },
  components:{
    'navHeader':navHeader
  },
}
</script>
<style lang="scss" scoped>
    .page{
      padding-top:80px;
      min-height:calc(100vh - 80px);
    }
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
      width: 60%;
      margin:0 auto;
      height: 100%;
      background-color:rgba(0,0,0,0.4);
      padding-top:50px;
      .infolist{
        margin-bottom:30px;
        
        >div{
          width: 50%;
          &:first-child{
            position: relative;
            float:left;
          }
          &:last-child{
            padding-left:20px;
            width:calc(50% - 20px);
            float:right;
            img{
              border-left: 6px solid #edb307;
              border-bottom:6px solid #edb307
            }
          }
        }
        &:nth-of-type(2){
          >div{
            &:first-child{
              float:right;
              padding-left:20px;
              width:calc(50% - 20px);
            }
            &:last-child{
              float:left;
              img{
                border-right: 6px solid #edb307;
                border-bottom:6px solid #edb307;
                border-left: none;
              }
            }
          }
        }
        &:nth-of-type(3){
          >div{
            &:last-child{
              height: 200%;
              img{
                height: 100%;
              }
            }
          }
        }
        img{
          width: 100%;
        }
        h2{
          font-size: 26px;
          color:#fff;
          text-align: left;
          margin-bottom:20px;
        }
        p{
          text-align: left;
          color:#fff;
          font-size: 16px;
          padding-left:10px;
          line-height: 40px;
        }
        .big{
          font-size: 24px;
          font-weight: bold;
          margin-right: 4px;
        }
        .more{
          position: absolute;
          top:0px;
          right:0px;
          color:#fff;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
    @media screen and (min-width:769px){

    }
    @media screen and (max-width:768px){
      .content{
        width:96%;
        padding-top:20px;
        .infolist{
          p{
            font-size: 14px;
            line-height: 30px;
          }
          .big{
            font-size: 18px;
          }
          h2{
            font-size: 20px;
          }
        }
      }
    }
</style>
