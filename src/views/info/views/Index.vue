<template>
  <div>
    <navHeader></navHeader>
    <div class="page-info">
        <div class="content">
          <h3>GUIDING INFORMATION</h3>
          <ul class="infolist">
            <li v-for="item in info" :key="item.id">
                <h4>{{item.title}}</h4>
                <div @click="toDetails(item.id)" v-for="item2 in item.desc" :key="item2.id">
                    <p>{{item2.zh}}</p>
                    <p>{{item2.en}}</p>
                </div>
                <p class="more" @click="toDetails(item.id)">查看更多院校</p>
            </li>
          </ul>
          <!-- <p class="linkus">了解更多信息，或预约试听</p> -->
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
        info:[
          {
            id:1,
            title:'表演',
            desc:[
               {
                 id:1,
                 en:'The Central Academy of Drama',
                 zh:'中央戏剧学院'
               },
               {
                 id:2,
                 en:'Beijing Film Academy',
                 zh:'北京电影学院'
               },
               {
                 id:3,
                 en:'Shanghai Theatre Academy',
                 zh:'上海戏剧学院'
               },
               {
                 id:4,
                 en:'The Central Academy Of Drama',
                 zh:'中央戏剧学院'
                },
                {
                 id:5,
                 en:'Communication University of China',
                 zh:'中国传媒大学	浙江传媒学院	南京艺术学院'
               }
            ]
          },
          {
            id:2,
            title:'舞蹈',
            desc:[
               {
                 id:1,
                 en:'Capital University of Physical Education and Sports',
                 zh:'首都体育大学'
               },
               {
                 id:2,
                 en:'Wuhan Conservatory Of Music',
                 zh:'武汉音乐学院'
               },
               {
                 id:3,
                 en:'Xinghai Conservatory of Music',
                 zh:'星海音乐学院'
               },
               {
                 id:4,
                 en:'Xi’an Conservatory of Music',
                 zh:'西安音乐学院'
               },{
                 id:5,
                 en:'Communication University of Zhejiang',
                 zh:'浙江传媒学院'
               }
            ]
          },
          {
            id:3,
            title:'播音主持',
            desc:[
               {
                 id:1,
                 en:'Communication University of China',
                 zh:'中国传媒大学'
               },
               {
                 id:2,
                 en:'Communication University of Zhejiang',
                 zh:'浙江传媒学院'
               },
               {
                 id:3,
                 en:'The Central Academy of Drama',
                 zh:'中央戏剧学院'
               },
               {
                 id:4,
                 en:'Shanghai Theatre Academy',
                 zh:'上海戏剧学院'
               },{
                 id:5,
                 en:'anjing University of the Arts',
                 zh:'南京艺术学院'
               }
            ]
          },
          {
            id:4,
            title:'影视编导',
            desc:[
               {
                 id:1,
                 en:'The Central Academy of Drama',
                 zh:'中央戏剧学院'
               },
               {
                 id:2,
                 en:'Beijing Film Academy',
                 zh:'北京电影学院'
               },
               {
                 id:3,
                 en:'Shanghai Theatre Academy',
                 zh:'上海戏剧学院'
               },
               {
                 id:4,
                 en:'Communication University of China',
                 zh:'中国传媒大学'
               },{
                 id:5,
                 en:'Meishi Film Academy of ChongQing University',
                 zh:'重庆大学美视电影学院'
               }
            ]
          }
        ]
    }
  },
  components:{
    'navHeader':navHeader
  },
  methods:{
    toDetails(id){
      window.location.href = `/infoDetails.html?id=${id}`
    }
  }
}
</script>
<style lang="scss" scoped>
    .page-info{
      padding-top:80px;
      min-height:calc(100vh - 80px);
    }
    .content{
      width: 90%;
      margin:0 auto;
      height: 100%;
      padding-top:50px;
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
      .infolist{
        margin-top:40px;
        li{
          
          padding:20px;
          background-color:rgba(100, 148, 173, .15);
          // color:#6494ad;
          font-size: 14px;
          position: relative;
          padding-bottom:60px;
          >div{
            margin-bottom:15px;
          }
          p{
            line-height: 20px;
            
            // color:#6494ad;
            &:last-child{
              font-size:12px;
            }
          }
          h4{
            margin-bottom:20px;
            font-size: 16px;
            // color:#6494ad;
          }
        }
        .more{
          font-size: 16px;
          background-color:rgba(100, 148, 173, .25);
          // color:;
          margin-top:10px;
          position: absolute;
          bottom:20px;
          padding:10px 0;
          width:calc(100% - 40px);
         
        }
      }
    }
    @media screen and (min-width:769px){
        .page-info{
          
          .infolist{
            display: flex;
            
            li{
              flex:1;
             
              margin-right: 20px;
             
              &:last-child{
                margin-right: 0px;
              }
            }
            .more{
              font-size: 16px;
              margin-top:10px;
              position: absolute;
              bottom:20px;
              padding:10px 0;
              width:calc(100% - 40px);
            
            }
          }
        }
    }
    @media screen and (max-width:768px){
      .page-info{
        h3{
            padding-top:0px;
            text-align: left;
            font-size: 30px;
            letter-spacing: 3px;
            
          }
        .infolist{
          li{
            margin-bottom:30px;
            
          }
        }
      }
      .content{
        width:96%;
        margin:0 auto;
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
