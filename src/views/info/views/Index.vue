<template>
  <div>
    <navHeader></navHeader>
    <div class="page">
        <div class="bg"></div>
        <div class="content">
          <ul>
            <li class="clearfix infolist" v-for="item in infoList" :key="item.id">
                <div>
                 <h2>{{item.title}}</h2>
                  <span class="more" @click="toDetails(item.id)">More</span>
                  <p v-for="item2 in item.list" :key="item2.id"><span class="big">{{item2.id}}</span>{{item2.desc}}</p>
                </div>
                <div>
                  <img v-if="item.url" :src="item.url" alt="">
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
        infoList:[
          {
            id:1,
            title:'表演资讯',
            url:require('../../../assets/info1.jpg'),
            list:[
              {
                id:1,
                desc:'中央戏剧学院招生简章'
              },
              {
                id:2,
                desc:'北京电影学院招生简章'
              },
              {
                id:3,
                desc:'上海戏剧学院招生简章'
              },
              {
                id:4,
                desc:'中国传媒大学招生简章'
              }
            ]
          },
          // {
          //   id:2,
          //   title:'舞蹈资讯',
          //   url:require('../../../assets/info2.jpg'),
          //   list:[
          //     {
          //       id:1,
          //       desc:''
          //     },
          //     {
          //       id:2,
          //       desc:''
          //     },
          //     {
          //       id:3,
          //       desc:''
          //     },
          //     {
          //       id:4,
          //       desc:''
          //     }
          //   ]
          // },
          {
            id:3,
            title:'播音资讯',
            url:require('../../../assets/info3.jpg'),
            list:[
              {
                id:1,
                desc:'中国传媒大学招生简章'
              },
              {
                id:2,
                desc:'浙江传媒学院招生简章'
              },
              {
                id:3,
                desc:'中央戏剧学院招生简章'
              },
              {
                id:4,
                desc:'上海戏剧学院招生简章'
              }
            ]
          },
          // {
          //   id:4,
          //   title:'服装表演资讯',
          //   url:'',
          //   list:[
          //     {
          //       id:1,
          //       desc:''
          //     },
          //     {
          //       id:2,
          //       desc:''
          //     },
          //     {
          //       id:3,
          //       desc:''
          //     },
          //     {
          //       id:4,
          //       desc:''
          //     }
          //   ]
          // }
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
      width: 70%;
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
