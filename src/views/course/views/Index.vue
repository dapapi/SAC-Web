<template>
  <div>
    <navHeader></navHeader>
    <div class="page">
        <div class="bg"></div>
        <div class="link">
          <ul>
            <li v-for="item in link" :key="item.id" :class="item.id === isActive?'active':''" @click="changeActive(item.id)">
              <a :href="item.url">{{item.name}}</a>
            </li>
          </ul>
        </div>
        <div class="content">
            <div class="list" id="Info">
                <h1>课程介绍</h1>
                <p>Course introduces about different areas. Performance，dance，scenarist，broadcasting and model.  We hope through these course can help student improve major skills and get dream school offer.</p>
            </div>
            <div class="list" id="Performance">
                <h2>表演</h2>
                <ul class="clearfix">
                  <li @click="changeShow(1)" v-for="item in performance" :key="item.id">
                     <img :src="item.url" alt="">
                     <p>{{item.name}}</p>
                  </li>
                </ul>
            </div>
            <div class="list" id="Dance">
                <h2>舞蹈</h2>
                <ul class="clearfix">
                  <li @click="changeShow(2)" v-for="item in dance" :key="item.id">
                    <img :src="item.url" alt="">
                    <p>{{item.name}}</p>
                  </li>
                </ul>
            </div>
            <div class="list" id="Scenarist">
                <h2>编导/播音</h2>
                <ul class="clearfix">
                  <li @click="changeShow(3)" v-for="item in scenarist" :key="item.id">
                    <img :src="item.url" alt="">
                    <p>{{item.name}}</p>
                  </li>
                </ul>
            </div>
            <div class="list" id="Model">
                <h2>服装表演</h2>
                <ul class="clearfix">
                  <li @click="changeShow(4)" v-for="item in modelType" :key="item.id">
                    <img :src="item.url" alt="">
                    <p>{{item.name}}</p>
                  </li>
                </ul>
            </div>
        </div>
    </div>
    <modal :show="isShow" :model="model" @change="changeStatus"></modal>
  </div>
</template>
<script>
import navHeader from '../../../components/navHeader'
import modal from '../../../components/courseModal'
export default {
  name: 'home',
  data(){
    return{
       isActive:1,
       isShow:false,
       model:1,
       link:[
         {
           id:1,
           name:'Info',
           url:'#Info'
         },
         {
           id:2,
           name:'Performance',
           url:'#Performance'
         },
         {
           id:3,
           name:'Dance',
           url:'#Dance'
         },
         {
           id:4,
           name:'Scenarist/Broadcasting',
           url:'#Scenarist'
         },
         {
           id:5,
           name:'Model',
           url:'#Model'
         }
       ],
       performance:[
         {
           id:1,
           name:'暑假课程',
           url:require('../../../assets/performance1.jpg')
         },
         {
           id:2,
           name:'全程班课程',
           url:require('../../../assets/performance2.jpg')
         },
         {
           id:3,
           name:'S计划',
           url:require('../../../assets/performance3.jpg')
         }
       ],
       dance:[
         {
           id:1,
           name:'暑假课程',
           url:require('../../../assets/dance1.jpg')
         },
         {
           id:2,
           name:'全程班课程',
           url:require('../../../assets/dance2.jpg')
         },
         {
           id:3,
           name:'S计划',
           url:require('../../../assets/dance3.jpg')
         }
       ],
       scenarist:[
         {
           id:1,
           name:'提高课程',
           url:require('../../../assets/scenarist1.jpg')
         },
         {
           id:2,
           name:'全程班课程',
           url:require('../../../assets/scenarist2.jpg')
         },
       ],
       modelType:[
         {
           id:1,
           name:'全程班课程',
           url:require('../../../assets/model1.jpg')
         },
       ]
    }
  },
  components:{
    'navHeader':navHeader,
    'modal':modal
  },
  mounted(){
    window.addEventListener('scroll',()=>{
      let sHeight = document.documentElement.scrollTop
      let cHeight = document.documentElement.clientHeight
      let nHeight = Math.floor(sHeight/cHeight)
      if((sHeight%cHeight)<=(cHeight/2)){
          this.isActive = Math.floor(sHeight/cHeight)+1
      }
    })
  },
  methods:{
    changeActive(id){
       this.isActive = id
    },
    changeShow(id){
      console.log(id)
      this.model=id
      this.isShow = true
    },
    changeStatus(value){
      this.isShow = value
    }
  }
}
</script>

<style lang="scss" scoped>
   
  .page{
    .bg{
      height: 100vh;
      width:100%;
      position: fixed;
      z-index:-100;
      background-image:url('../../../assets/bgCourse.jpg');
      background-repeat: no-repeat;
      background-size: cover cover;
    }
    .content{
      width: 80%;
      margin:0 auto;
      height: 100%;
      background-color:rgba(0,0,0,0.4);
    }
    .link{
      position: fixed;
      top:40%;
      right:20px;
      font-size: 14px;
      li{
        text-align: right;
        margin-bottom:5px;
        cursor: pointer;
        a{
          color:#808080;
          &::after{
            content: '';
            display: inline-block;
            margin-left:6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border:2px solid #808080;
            background-color:rgba(0,0,0,0);
          }
        }
        &:hover{
          a{
            color:#fff;
            &::after{
              border:2px solid #fff;
              background-color:#fff;
            }
          }
        }
      }
      .active{
        a{
          color:#fff;
          &::after{
            border:2px solid #fff;
            background-color:#fff;
          }
        }
      }
    }
  }
  @media screen  and(min-width:769px){
    .page{
      .content{
        .list{
          padding-top:80px;
          min-height:calc(100vh - 80px);

          h1{
            font-size: 50px;
            margin-top:100px;
            margin-left:100px;
            text-align: center;
          }
          h2{
            text-align: left;
            font-size: 40px;
            color:#fff;
          }
          ul{
            width: 100%;
          }
          li{
            float:left;
            margin-right:60px;
            margin-bottom:60px;
            img{
              width: 250px;
              height: 250px;
              border-radius: 50%;
            }
            p{
              margin-top:20px;
              color:#fff;
              font-size: 30px;
            }
          }
        }
        #Info{
          position: relative;
          p{
            font-size: 26px;
            text-indent: 0.2em;
            line-height: 40px;
            width:64%;
            color:rgba(255,255,255,.8);
            margin:0 auto;
            margin-top:50px;
          }
        }
      }
    }
  }
  @media screen and(max-width:768px){
    .link{
      display: none;
    }
    .bg{
      background-position: 60% 30%;
      background-size: 140% 100%;
    }
    #Info{
      
      h1{
        margin-top:40px;
        font-size: 36px;
        text-align:center;
        margin-bottom:20px;
      }
      p{
        color:#fff;
        font-size: 20px;
      }
    }
    .list{
      padding-top:30px;
      margin-bottom:30px;
      h2{
        color:#fff;
        font-size: 30px;
        margin-bottom:30px;
      }
      ul{
        li {
          margin-bottom:30px;
          p{
            color:#fff;
            padding:10px 0; 
            font-size: 24px;
          }
          img{
            width: 260px;
            height: 260px;
            border-radius: 50%;
          }
        }
      }
    }
  }
</style>
