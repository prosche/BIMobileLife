/**
 * Created by Administrator on 2015/8/10.
 */
angular.module(constVar.appName)
    .service('MobileLifeService',['ResourceVisitService','$q','$rootScope',function (ResourceVisitService,$q,$rootScope){

        var MobileLifeService={
            myData:{},
            loadMyData:function  (phoneNum){
                var deferred = $q.defer();
                var ResourceService = ResourceVisitService.getResourceService("/Process/MobileLife/MyData");
                ResourceService.visitProcess({
                    phoneNum:phoneNum
                }).then(function (data){
                    if(data){
                        //console.log(data);
                        MobileLifeService.parseUserType(MobileLifeService.myData,data);
                        MobileLifeService.parseDosageMonth(MobileLifeService.myData,data);
                        MobileLifeService.parseDosageHour(MobileLifeService.myData,data);
                        MobileLifeService.parseBasic(MobileLifeService.myData,data);
                        MobileLifeService.parseCallTaskTime(MobileLifeService.myData,data);
                        MobileLifeService.parseFee(MobileLifeService.myData,data);
                        MobileLifeService.parseContactPersonArpu(MobileLifeService.myData,data);
                        MobileLifeService.parseContactPersonGender(MobileLifeService.myData,data);
                        MobileLifeService.myData.dataMonth=data.dataMonth;
                        MobileLifeService.businessRecommend(MobileLifeService.myData,data);
                        //console.log(JSON.stringify(MobileLifeService.myData));
                        deferred.resolve(MobileLifeService.myData);
                    }
                });
                return deferred.promise;
            },
            parseUserType:function (myData,srcData){
                myData.userType=srcData.userType;
                if(srcData.userType=="1"){
                    myData.userTypeDesc="流量达人";
                }else{
                    myData.userTypeDesc="语音达人";
                }
            },
            parseDosageMonth:function (myData,srcData){
                var dataMonth = srcData.dataMonth;
                var formatStr="YYYY年MM月";
                var thisMonth =   moment(dataMonth, "YYYYMM");
                var thisMonthStr =  thisMonth.format(formatStr);
                var upMonthStr =  thisMonth.subtract(1,'months').format(formatStr);
                var upUpMonthStr =  thisMonth.subtract(1,'months').format(formatStr);
                var datas= [];
                datas[0]=[upUpMonthStr,srcData.dosageMonth2];
                datas[1]=[upMonthStr,srcData.dosageMonth1];
                datas[2]=[thisMonthStr,srcData.dosageMonth0];
                var dosageMonth = [
                    [
                        {
                            "text": srcData.userType=="1"?"近三个月计费流量":"近三个月语音时长"
                        }
                    ],
                    [
                        {
                            "name": srcData.userType=="1"?" 计费流量(M)":" 语音时长（分）",
                            "data": datas,
                            "type": "pie"
                        }
                    ]
                ];
                myData.dosageMonthChart=dosageMonth;
                myData.dataMonth=thisMonthStr;

            },

            parseDosageHour:function (myData,srcData){
                var dataMonth = srcData.dataMonth;
                var formatStr="YYYY年MM月";
                var thisMonth =   moment(dataMonth, "YYYYMM");
                var thisMonthStr =  thisMonth.format(formatStr);
                var upMonthStr =  thisMonth.subtract(1,'months').format(formatStr);
                var upUpMonthStr =  thisMonth.subtract(1,'months').format(formatStr);
                var datas= [];

                for(var i=0;i<24;i++){
                    var key = "dosageHour"+i;
                    var hourData =[i+'点',srcData[key]];
                    datas.push(hourData);
                }
                var dosageHour = [
                    [
                        {
                            "text": srcData.userType=="1"?"流量时段分析":"语音时段分析"
                        }
                    ],
                    [
                        {
                            "name": srcData.userType=="1"?" 计费流量(M)":" 语音时长（分）",
                            "data": datas,
                            "type": "pie"
                        }
                    ]
                ];
                myData.dosageHourChart=dosageHour;

            },

            parseBasic:function(myData,srcData){
                myData.smsAmount = srcData.smsAmount;
                myData.calledAmount = srcData.calledAmount;
                myData.dialingAmount = srcData.dialingAmount;
                myData.talkAvgAmount = srcData.talkAvgAmount;
            },
            parseTaskTime:function(myData,srcData){

                var datas=[
                    ['本地通话',srcData.taskLocalAmount],
                    ['漫游通话',srcData.taskRoamAmount],
                    ['长途通话',srcData.taskRemoteAmount],
                    ['其它',srcData.taskOtherAmount],
                ]
                var taskTimeChart = [
                    [
                        {
                            "text": ""
                        }
                    ],
                    [
                        {
                            "name": "通话时长",
                            "data": datas,
                            "type": "pie"
                        }
                    ]
                ];
                myData.taskTimeChart=taskTimeChart;

            },
            parseCallTaskTime:function(myData,srcData){

                var datas=[
                    ['本地主叫',srcData.taskLocaPercent.charAt(0)=='.'?'0'+srcData.taskLocaPercent:srcData.taskLocaPercent],
                    ['本地被叫',srcData.calledLocalPercent.charAt(0)=='.'?'0'+srcData.calledLocalPercent:srcData.calledLocalPercent],
                    ['漫游主叫',srcData.taskRoamPercent.charAt(0)=='.'?'0'+srcData.taskRoamPercent:srcData.taskRoamPercent],
                    ['漫游被叫',srcData.calledRoamPercent.charAt(0)=='.'?'0'+srcData.calledRoamPercent:srcData.calledRoamPercent],
                    ['长途被叫',srcData.calledRemotePercent.charAt(0)=='.'?'0'+srcData.calledRemotePercent:srcData.calledRemotePercent],
                    ['长途主叫',srcData.taskRemotePercent.charAt(0)=='.'?'0'+srcData.taskRemotePercent:srcData.taskRemotePercent]
                ]
                var taskTimeChart = [
                    [
                        {
                            "text": ""
                        }
                    ],
                    [
                        {
                            "name": "通话时长",
                            "data": datas,
                            "type": "pie"
                        }
                    ]
                ];
                myData.taskTimeChart=taskTimeChart;

            },
            parseFee:function(myData,srcData){

                var datas=[
                    ['月租费',srcData.feeMonthBase],
                    ['省内营销案话费',srcData.feeMarketing],
                    ['长话费',srcData.feeTaskRemote],
                    ['漫游通话费',srcData.feeRoam],

                    ['新功能费',srcData.feeNewFunction],
                    ['数据通信费',srcData.feeData],
                    ['代收费',srcData.feeCollection],
                    ['信息费',srcData.feeInfo],
                    ['其他费用',srcData.feeOther]
                ]
                var feeChart = [
                    [
                        {
                            "text": ""
                        }
                    ],
                    [
                        {
                            "name": "话费细分",
                            "data": datas,
                            "type": "pie"
                        }
                    ]
                ];
                myData.feeChart=feeChart;

            },
            parseContactPersonArpu:function(myData,srcData){

                var datas=[
                    ['土豪',srcData.userArpuHigh],
                    ['吊丝',srcData.userArpuLow],
                    ['小康',srcData.userArpuMiddle]
                ]
                var contactPersonArpuChart = [
                    [
                        {
                            "text": ""
                        }
                    ],
                    [
                        {
                            "name": "朋友圈子价值",
                            "data": datas,
                            "type": "pie"
                        }
                    ]
                ];
                myData.contactPersonArpuChart=contactPersonArpuChart;

            },
            parseContactPersonGender:function(myData,srcData){

                var datas=[
                    ['男',srcData.userGenderBoy],
                    ['女',srcData.userGenderGril]
                ]
                var contactPersonGenderChart = [
                    [
                        {
                            "text": ""
                        }
                    ],
                    [
                        {
                            "name": "朋友圈男女比例",
                            "data": datas,
                            "type": "pie"
                        }
                    ]
                ];
                myData.contactPersonGenderChart=contactPersonGenderChart;

            },
            businessRecommend:function(myData,srcData){

                var recommend={
                    taskBusinessRecommend:{
                        taskBusIdRecommend:srcData.taskBusIdRecommend,
                        taskBusNameRecommend:srcData.taskBusNameRecommend
                    },
                    flowBusinessRecommend:{
                        flowBusIdRecommend:srcData.flowBusIdRecommend,
                        flowBusNameRecommend:srcData.flowBusNameRecommend
                    }
                }

                myData.businessRecommend=recommend;

            },
            sendVerifyCode:function(phoneNum){
                var ResourceService = ResourceVisitService.getResourceService("/Process/MobileLife/VerifyCode");
                return ResourceService.visitProcess({
                    phoneNum:phoneNum
                });
            },
            login:function (phoneNum,verifyCode){
                var deferred = $q.defer();
                var ResourceService = ResourceVisitService.getResourceService("/Process/MobileLife/Login");
                ResourceService.visitProcess({
                    phoneNum:phoneNum,
                    verifyCode:verifyCode
                }).then(function (token){
                        ResourceVisitService.setToken(token);
                        deferred.resolve(token)
                    },
                    function(){
                        deferred.reject();
                    });
                return  deferred.promise;

            },
            setLoginTimeOutFun:function (loginTimeOutFun){
                ResourceVisitService.setLoginTimeOutFun(loginTimeOutFun);
            },
            queryUserMessage:function (){
                var ResourceService = ResourceVisitService.getResourceService("/Process/MobileLife/QueryUserMessage");
                return ResourceService.visitProcess({});
            },
            orderProduct:function (offerId){
                var ResourceService = ResourceVisitService.getResourceService("/Process/MobileLife/OrderProduct");
                return ResourceService.visitProcess({offerId:offerId});
            }

        };

        return MobileLifeService;
    }]);