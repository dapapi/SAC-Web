<template>
    <div class="modal" v-show="isShow">
       <div class="modal-content">
            <div class="modal-scroll">
                <span class="close" @click="hide">x</span>
                <ul class="list clearfix" v-show="whichModel ==1||whichModel == 2">
                    <li v-for="item in list" :key="item.id">
                    <span class="type">{{item.name}}</span>
                    <img :src="item.img" alt="">
                    <h3>{{item.title}}</h3>
                    <p v-for="(desc,index) in item.data" :key="index">{{desc}}</p>
                    </li>
                </ul>
                <div class="scenarist" v-show="whichModel ===3">
                    <ul>
                        <li v-for="item in scenarist" :key="item.id">
                            <span class="type">{{item.name}}</span>
                            <img :src="item.img" alt="">
                            <h3>{{item.title}}</h3>
                            <p v-for="(desc,index) in item.data" :key="index">
                                <span class="blod">{{desc.title}}</span>
                                <span class="desc">{{desc.desc}}</span>
                            </p>
                        </li>
                    </ul>
                    <div class="course-time">
                        <div class="con">
                            <p>授课内容： </p>
                            <p>播音主持：</p>
                            <p>新闻评述 80小时 影评分析 80小时  文化常识 20小时 指定稿件 20小时  文化课 36小时</p>
                        </div>
                        <div class="con">
                            <p>编 导：</p>
                            <p>影评 90小时  艺术常识 90小时  表演基础60小时  文化课 36小时</p>
                        </div>
                    </div>
                    <div class="course-time">
                        <p>上课时间：上午 8:30-10:00 / 10:30-12:00       下午 14:00-15:30 / 16:00-17:30 晚自习   18:30-20:00 / 20:15-21:45</p>
                    </div>
                    <div class="course-time">
                         <div class="con">
                            <div>
                                <span>价格：42800</span>
                                <span>班容：20人</span>
                            </div>
                            <div>
                                <span>上课周期：41天 </span>
                                <span>总课次：322小时</span>
                            </div>
                         </div>
                         <div class="con">
                            <div>
                                <span>价格：92800</span>
                                <span>班容：20-25人</span>
                            </div>
                            <div>
                                <span>上课周期：70天</span>
                                <span>总课次：460小时</span>
                            </div>
                         </div>
                    </div>
                    <div class="course-time">
                        <p>课时费: 400/节 64400 800/节 192000</p>
                        <p>提成: 28920   Total 268920  2人 695080</p>
                    </div>
                </div>
                <div class="scenarist modelType" v-show="whichModel ===4">
                    <ul>
                        <li>
                            <span class="type">服装</span>
                            <img src="../assets/model1.jpg" alt="">
                            <h3>全程班课程</h3>
                        </li>
                    </ul>
                    <div class="course-time">
                        <div class="con">
                            <p>授课内容： </p>
                            <p>台步基础  站姿 台步  镜前造型 平面基础  素颜拍 棚拍  外拍 身体机能 形体训练 塑性训练体能 化妆技巧</p>
                        </div>
                    </div>
                    <div class="course-time">
                        <p>上课时间：上午 8:30-10:00 / 10:30-12:00       下午 14:00-15:30 / 16:00-17:30 </p>
                    </div>
                    <div class="course-time">
                         <div class="con">
                            <div>
                                <span>价格：13800</span>
                                <span>班容：20-25人</span>
                            </div>
                            <div>
                                <span>上课周期：4周 /28天</span>
                                <span>总课次：88小时</span>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
export default {
    props:['show','model'],
    data(){
        return {
            isShow:false,
            list:[],
            whichModel:1,
            performance:[
               {
                   id:1,
                   name:'表演',
                   title:'暑期课程',
                   img:require('../assets/performance1.jpg'),
                   data:[
                       '6周课程培训',
                       '行业顶级教师指导，名师授课',
                       '全面教学，定期反馈',
                       '小班授课，关注度高'
                   ]
               },
               {
                   id:2,
                   name:'表演',
                   title:'全程班课程',
                   img:require('../assets/performance2.jpg'),
                   data:[
                       '6个月全方位辅导',
                       '冲击一本院校',
                       '基础夯实，能力提高，考前冲刺',
                       '专业课+文化课高强度培训',
                       '10人小班授课，定期反馈'
                   ]
               },
               {
                   id:3,
                   name:'表演',
                   title:'S计划',
                   img:require('../assets/performance3.jpg'),
                   data:[
                       '6个月高端课程',
                       '冲刺专业最顶尖院校',
                       '专业课+文化课高强度培训名师一对一+班课辅导',
                       '直击考点，查漏补缺考核进入高端计划，名校录取可获高额奖金',
                       '5人精英班容，定期反馈'
                   ]
               },
            ],
            dance:[
                {
                    id:1,
                    name:'舞蹈',
                    title:'暑期课程',
                    img:require('../assets/dance1.jpg'),
                    data:[
                        '小班容授课，关注度高',
                        '行业名师辅导，高效提升',
                        '班课+vip1对1+1对2，课程结合',
                        '短期课程，灵活安排，定期反馈'
                    ]
                },
                {
                    id:2,
                    name:'舞蹈',
                    title:'全程班课程',
                    img:require('../assets/dance2.jpg'),
                    data:[
                        '集中授课，分层教学',
                        '基训、技巧、剧目、编舞全面授课',
                        '3个月专业课+文化课高强度培训',
                        '剧目定制 VIP一对一课程',
                        '考前提高 冲击一本院校',
                        '10人小班授课，定期反馈'
                    ]
                },
                {
                    id:3,
                    name:'舞蹈',
                    title:'S计划',
                    img:require('../assets/dance3.jpg'),
                    data:[
                        '3个月高端课程',
                        '全方位培训，冲刺专业最顶尖院校',
                        '专业课+文化课高强度培训',
                        '名师一对一辅导，直击考点',
                        '考核进入高端计划，名校录取可获高额奖学金',
                        '5人精英班容，定期反馈'
                    ]
                },
            ],
            scenarist:[
                {
                    id:1,
                    name:'播/导',
                    title:'提高课程',
                    img:require('../assets/scenarist1.jpg'),
                    data:[
                        {
                            title:'课程简介:',
                            desc:'为艺考学员提供系统、完整的培训课程，进行学科普及，基础铺垫，课程讲练结合，集中授课。',
                        },
                        {
                            title:'适用学员:',
                            desc:'意向进行播音主持、编导专业艺考学员',
                        },
                        {
                            title:'教学目标:',
                            desc:'以各大院校考试内容为核心，通过系统化、完整化培训，以新闻评述、影评分析，艺术常识，制定稿件为授课主线进行课程。',
                        },
                        {
                            title:'课程特色:',
                            desc:'行业名师授课。 内容全面，直击考点',
                        }
                    ]
                },
                {
                    id:2,
                    name:'播/导',
                    title:'全程班课程',
                    img:require('../assets/scenarist2.jpg'),
                    data:[
                        {
                            title:'课程简介:',
                            desc:'为艺考学员提供系统、完整的培训课程，进行学科普及，基础铺垫，课程讲练结合，集中授课。',
                        },
                        {
                            title:'适用学员:',
                            desc:'意向进行播音主持、编导专业艺考学员',
                        },
                        {
                            title:'教学目标:',
                            desc:'以各大院校考试内容为核心，通过系统化、完整化培训，以新闻评述、影评分析，艺术常识，制定稿件为授课主线进行课程。',
                        },
                        {
                            title:'课程特色:',
                            desc:'行业名师授课。 内容全面，直击考点。 暑假提高+网络课程+考前冲刺',
                        }
                    ]
                },
            ]

        }
    },
    mounted(){
        this.whichModel = this.model
        if(this.model ===1){
            this.list = this.performance
        }
        if(this.model === 2){
            this.list = this.dance
        }
    },
    watch:{
        show(){
            // alert(555)
            // if(this.show){
                this.isShow = this.show
            // }
        },
        model(){
            this.whichModel = this.model
            if(this.model ===1){
                this.list = this.performance
            }
            if(this.model === 2){
                this.list = this.dance
            }
        }
    },
    methods:{
        hide(){  
            this.isShow = false;
            this.$emit('change',false)
        },
        changeShow(){
            this.isShow = !this.isShow
        }
    }
}
</script>
<style lang="scss" scoped>
    .modal{
        position: fixed;
        background-color:rgba(255,255,255,0.4);
        width: 100%;
        height: 100vh;
        z-index:30000;
        left:0px;
        top:0px;
        right:0px;
        bottom:0px;
        .modal-content{
            height: 90%;
            width: 60%;
            margin:5% 20%;
            background-color:#fff;
            position: relative;
            overflow: hidden;
            .modal-scroll{
                height: 100%;
                overflow-y: scroll;
            }
            .close{
                position: absolute;
                right:14px;
                top:4px;
                z-index:1000;
                font-size:24px;
                cursor: pointer;
            }
            ul{
                width:100%;
                height: 100%;
                li{
                    position: relative;
                    width: 94%;
                    padding:0 3%;
                    padding-top:60px;
                    text-align:center;
                    span.type{
                        position: absolute;
                        left:3%;
                        top:70px;
                        display: inline-block;
                        width:60px;
                        height: 60px;
                        border-radius: 50%;
                        color:#fff;
                        font-size: 20px;
                        line-height: 60px;
                        font-weight: bold;
                        text-align: center;
                        background-color:rgb(237, 179, 7);
                    }
                    img{
                        width:150px;
                        height: 150px;
                        border-radius: 50%;
                        border:6px solid rgba(50,50,50,0.6)
                    }
                    h3{
                        font-size: 30px;
                        margin:20px 0;
                    }
                }
            }
            ul.list{ 
                li{
                    &:nth-of-type(2){
                        background-color:rgba(41,41,41,1);
                        color:#fff;
                        p{
                          color:#fff;
                          border-bottom:1px dashed #fff;
                        }
                    }
                    h3{
                        font-size: 30px;
                        margin:20px 0;
                    }
                    p{
                        font-size: 16px;
                        color:#2A2A2A;
                        padding:8px 0;
                        border-bottom:1px dashed #2A2A2A;
                    }
                }
            }
            .scenarist{
                .blod{
                    font-weight: bold;
                    color:#000;
                }
                ul{
                    li{
                        span.type{
                            position: absolute;
                            left:18%;
                            top:70px;
                            display: inline-block;
                            width:60px;
                            height: 60px;
                            border-radius: 50%;
                            color:#fff;
                            font-size: 20px;
                            line-height: 60px;
                            font-weight: bold;
                            text-align: center;
                            background-color:rgb(237, 179, 7);
                        }
                        p{
                            text-align: left;
                            margin-bottom:10px;
                        }
                    }
                }
                .course-time{
                    background-color:rgba(239, 240, 244, 1);
                    display: flex;
                    width: 94%;
                    margin:0 3%;
                     margin-bottom:20px;
                    .con{
                        flex:1;
                        position: relative;
                        text-align:left;
                        padding:10px 16px;
                    }
                }
            }
            .modelType{
                ul{
                    li{
                        span.type{
                            
                            left:36%;
                           
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width:769px){
        .modal{
            .modal-content{
                ul{
                    display: flex;
                    li{
                        flex:1
                    }
                }
            }
        }
    }
    @media screen and (max-width:768px){
        .modal{
            .modal-content{
                width: 90%;
                margin:5% 5%;
                ul{
                    display: block;
                    li{
                    span.type{
                        left:20%
                    }
                    }
                }
            }
            
            
        }
    }
</style>



