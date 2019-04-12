<template>
    <header>
        <div class="content">
            <h1>SAC</h1>
            <div class="pHeader" @click="navShow()">
                <img src="../assets/headerTitle.jpg" alt="">
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
      body,html,ul,li,p,h1,h2,h3,h4,h5,h6{
          padding:0px;
          margin:0px;
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
        font:normal normal 700 19px/1.4em poppins-semibold,poppins,sans-serif;
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
          box-shadow: 0px 2px 6px #313030;
          background-color:#000;
          .content{
            display: flex;
            width:80%;
            margin:0 auto;
          }
      }
      h1{
          margin:0px;
          padding:8px;
          flex:2;
          color:#fff;
          font-size: 40px;
          text-align: left;
      }
      
      @media screen and (min-width:769px){
            .pHeader{
              display: none
            }
            .tab{
                display:block !important;
                flex:10;
                ul{
                    display: flex;
                    height: 100%;
                    li{
                        
                        flex: 1;
                        text-align: right;
                        a{      
                            display: inline-block;
                            margin-top:16px;
                            padding:8px 10px; 
                        }
                        .active{
                            border-top:4px solid rgba(237,179,7,1);
                            color:rgba(237,179,7,1)
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
                    top:-2px;

                }
                .content{
                    width:98%;
                    margin:0 auto;
                    position: relative;
                    
                }
                img{

                    margin-top:8px;
                    width:30px;
                    height: 20px;
                }
            }
            .pHeader{
              padding:6px 0;
              width: 100%;
              text-align: center;
              
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
                   name:'首页',
                   url:'/index.html'
               },
               {
                   id:2,
                   name:'课程',
                   url:'/course.html'
               },
               {
                   id:3,
                   name:'视频',
                   url:'/video.html'
               },
               {
                   id:4,
                   name:'资讯',
                   url:'/info.html'
               },
               {
                   id:5,
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


