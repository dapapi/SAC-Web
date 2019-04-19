<template>
    <header>
        <div class="content">
            <h1>
                <img src="../assets/images/logo.png" alt="">
            </h1>
            <div class="pHeader" @click="navShow()">
                <img src="../assets/images/headerTitle.jpg" alt="">
            </div>
            <div class="tab" v-show="isShow" @click="navShow()">
                <ul>
                    <li v-for="item in nav" :key="item.id">
                        <!-- <router-link :class="item.url === path?'active':''" :to="item.url">{{item.name}}</router-link> -->
                        <a :class="item.url === path?'active':''"  :href="item.url">{{item.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<style lang="scss">
      @font-face {
          font-family: 'pingfang';
          src: url('../assets/font/苹方黑体-准-简.ttf');
      }
      body,html,ul,li,p,h1,h2,h3,h4,h5,h6{
          padding:0px;
          margin:0px;
          font-family: 'pingfang';
          color:#dcdddd;
      }
      li{
          list-style:none;
      }
      img{
          max-width: 100%;
      }
      a{
        text-decoration: none;
        color:#ccc;
        font-size: 16px;
      }
      body{
        background-color:#000;
        color:#fff;

      }
      .clearfix:before,.clearfix:after{
        content:"";
        display:table;
        }
        .clearfix:after{
        clear:both;
        }
        .clearfix{ /*照顾ie6*/
        zoom:1;
      }
      header{
          position: fixed;
          width: 100%;
          top:0px;
          z-index: 20000;
          background-color:#000;
          .content{
            width:90%;
            margin:0 auto;
          }
          
      }
      
      
      @media screen and (min-width:769px){
            .pHeader{
              display: none
            }
            header{
                h1{   
                    position: absolute;
                    right: 76%;
                    top:38%;
                    img{
                        max-width: 90%;
                    
                    }
                }
            }
            .tab{
                display:block !important;
                ul{
                    display: flex;
                    height: 100%;
                    margin-top:4%;
                    margin-left:30%;
                    li{
                        flex: 1;
                        text-align: right;
                        a{      
                            display: inline-block;
                            margin-top:16px;
                            padding:8px 14px; 
                            font-size: 15px;
                            color:#dcdddd;
                            letter-spacing: 2px;
                            opacity: .7;
                            
                        }
                        .active{
                            border-bottom:2px solid #dcdddd;
                            color:#dcdddd
                        }
                    
                    }
                }
            }
      }
      @media screen and (max-width:768px){
            .tab{
                position: fixed;
                z-index:1000;
                top:51px;
                left:0px;
                background-color:rgba(0,0,0,0.8);
                width:100%;
                height:calc(100vh - 64px);
                ul{
                   a{   
                       display: inline-block;
                       padding:10px 0;
                       margin:0 10px;
                       width:calc(100% - 20px);
                       border-bottom:1px solid rgba(255,255,255,.2);
                       font-size:14px;
                        color:#fff;
                   }
                }
            }
            header{
                height:50px;
                h1{
                    font-size: 30px;
                    position: absolute;
                    left:0px;
                    top:0px;
                    height: 50px;
                    img{
                       height:50px;
                    }

                }
                .content{
                    width:98%;
                    margin:0 auto;
                    position: relative;
                }
                img{

                    margin-top:8px;
                }
            }
            .pHeader{
              padding:6px 0;
              width: 100%;
              text-align: center;
              img{
                  width: 30px;
                  height: 20px;
                  margin-top:10px;
              }
            }
      }
</style>
<script>
export default {
    data(){
        return {
           nav:[
               {
                   id:1,
                   name:'欢迎首页',
                   url:'/index.html'
               },
               {
                   id:2,
                   name:'关于我们',
                   url:'/about.html'
               },
               {
                   id:3,
                   name:'师资团队',
                   url:'/team.html'
               },
               {
                   id:4,
                   name:'教学模式',
                   url:'/teach.html'
               },
               {
                   id:5,
                   name:'课程介绍',
                   url:'/course.html'
               },
               {
                   id:6,
                   name:'资讯指南',
                   url:'/info.html'
               },
               {
                   id:7,
                   name:'星跃计划',
                   url:'/starplan.html'
               },
               {
                   id:8,
                   name:'联系我们',
                   url:'/contact.html'
               },

           ],
           path:this.$route.path,
           isShow:false,
        }
    },
    created(){
        if(this.$route.path == '/infoDetails.html'){
            this.path = '/info.html'
        }
    },
    mounted(){

    },
    methods:{
        navShow(){
            // alert(222)
            // alert(this.isShow)
            this.isShow = !this.isShow
        }
    }
}
</script>


