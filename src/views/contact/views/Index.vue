<template>
  
  <div>
    <navHeader></navHeader>
    <div class="page">
      <div class="bg"></div>
      <div class="content">
        <h4 class="bTitle">联系我们</h4>
        <div class="underline">
          <h5>联系电话</h5>
          <p>电话：010-XXXXXXXX</p>
          <h5>邮箱地址</h5>
          <p>邮箱：010-XXXXXXXX</p>
          <h5>公司地址</h5>
          <p>公司：XX市XX区XXX街道XX号</p>
        </div>
        <h4 class="bTitle" style="padding-top:20px;">留言联系</h4>
        <div class="say">
          <div class="msg clearfix">
            <div class="item">
              <input type="text" v-model="name" placeholder="姓名">
            </div>
            <div class="item">
              <input type="text" v-model="pro" placeholder="专业">
            </div>
            <div class="item">
              <input type="text" v-model="email" placeholder="邮箱">
            </div>
            <div class="item">
              <input type="text" v-model="phone" placeholder="联系电话">
            </div>
          </div>
          <div class="know">
            <textarea name="" id="" v-model="desc" placeholder="有什么想了解的"></textarea>
          </div>
          <button class="submit" @click="submitMsg()">提交</button>
        </div>
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
       name:'',
       email:'',
       pro:'',
       phone:'',
       desc:''
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
   .page{
      padding-top:80px;
      min-height:calc(100vh - 80px);
      .content{
        .bTitle{
          font-size: 40px;
          font-weight: bold;
          text-align: left;
          color:#fff;
          padding-bottom:20px;
          border-bottom:1px dashed #808080;
        }
        .underline{
          h5{
            font-size: 30px;
            font-weight: bold;
            color:#fff;
            text-align: left;
            padding-left:40px;
            margin:20px 0;
          }
          p{
            color:#808080;
            font-size: 20px;
            padding:10px 40px;
            background-color:rgba(255,255,255,.1);
            text-align: left;
          }
        }
        .say{
          width: 70%;
          padding:3%;
          margin:20px auto;
          background-color:rgba(255,255,255,.2);
          .msg{
            .item{
              float: left;
              width: 50%;
              input{
                width:calc(100% - 12px);
                height: 40px;
                padding-left:10px;
                border:2px solid #808080;
                font-size: 16px;
              }
            }
          }
          .know{
            textarea{
              width:calc(100% - 12px);
              height: 100px;
              padding-left:10px;
              font-size: 16px;
            }
          }
          .submit{
            width:120px;
            height: 48px;
            font-size: 20px;
            border:0px;
            background-color:#edb307;
            color:#fff;
            margin:10px 0;
            border-radius: 6px;
          }
        }
      }
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
      width: 80%;
      margin:0 auto;
      height: 100%;
      background-color:rgba(0,0,0,0.4);
    }
    @media screen and (min-width:769px){
       .bTitle{
         padding-top:40px;
       }
    }
    @media screen and (max-width:768px){
      .page{
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
