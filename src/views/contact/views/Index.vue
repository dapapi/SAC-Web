<template>
  
  <div>
    <navHeader></navHeader>
    <div class="page-contact">
      
      <div class="content">
        <h3>CONTACT US</h3>
        <div class="contact-desc">
           <p>更多信息、预约试听，欢迎与我们专业的课程顾问沟通。 </p>
           <p> 相信我们，为每一个热爱艺术的孩子。</p>
        </div>
        <ul class="link">
          <li v-for="item in desc" :key="item.id">
            <p>{{item.name}}</p>
            <p>{{item.phone}}</p>
            <img :src="item.img" alt="">
            <p class="text-right">扫一扫微信咨询</p>
          </li>
        </ul>
        <p class="mb-10 small">冬枫德必WE人工智能创新基地</p>
        <p class="small">Copyright 2010-2020. All right reserved. 2010-2020	星冕艺术中心 S Art Centre.</p>
      </div>
    </div>
  </div>
</template>

<script>

import navHeader from '../../../components/navHeader'
export default {
  name: 'contact',
  data(){
    return{
       desc:[
         {
           id:1,
           phone:'188 1036 0206',
           name:'雪昱老师',
           img:require('https://res-crm.papitube.com/wechat2.png'),
         },
         {
           id:2,
           phone:'139 2846 0192',
           name:'乐褀老师',
           img:require('https://res-crm.papitube.com/git wechat1.png'),
         }
       ]
    }
  },
  components:{
    'navHeader':navHeader
  },
  methods:{
    submitMsg(){
   
    }
  }
}
</script>

<style lang="scss" scoped>
   .page-contact{
      padding-top:80px;
      min-height:calc(100vh - 80px);
      text-align: left;
      .content{
        width: 80%;
        margin:0 auto;
        height: 100%;
        background-color:rgba(0,0,0,0.4);
        .link{
          display: flex;
          width: 80%;
          li{
            flex: 1;
            &:first-child{
              margin-right: 10px;
            }
            img{
              width:150px;
              height: 150px;
            }
          }
        }
        h3{
          padding-top:50px;
          text-align: left;
          font-size: 30px;
          letter-spacing: 3px;
          
        }
        .contact-desc{
          margin-top:40px;
          p{
            text-align: left;
            letter-spacing: 1px;
            line-height: 30px;
          }
        }
        .link{
          margin-bottom:40px;
          margin-top:50px;
          p{
            margin:5px 0;
          }
          .text-right{
            // text-align: right;
            width: 80%;
          }
        }
        .mb-10{
          margin-bottom: 10px;
        }
      }
      .small{
        font-size:12px;
      }
   }
    @media screen and (min-width:769px){
       .bTitle{
         padding-top:40px;
       }
    }
    @media screen and (max-width:768px){
      .page-contact{
        .content{
          width: 96%;
          .bTitle{
            font-size: 24px;
            padding-bottom:10px;
          }
          .underline{
            h5{
              font-size: 20px;
            }
          }
          .say{
            width:90%;
          }
        }
      }
    }
</style>
