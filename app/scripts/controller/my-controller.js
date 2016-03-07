/**
 * Created by Administrator on 2015/6/17.
 */
angular.module(constVar.appName)
    .controller('myController',function($scope,echartsService,httpDataService,ngDialog,$timeout,$rootScope,$location,MobileLifeService,resetDataService,saveDataService,timeService,wxs){
        $scope.myDataModel = {
            myDataName : "mobile data !",
            billId : resetDataService.name,
            balance : "",
            flows : "",
            userType : "",
            smsCounts : "",
            callInDuration : "",
            callOutDuration : "",
            callAvgDayDuration : "",
            callInScale : "",
            callOutScale : "",
            headPhoto : "dataImg.png",
            callOffer : "",
            gprsOffer : "",
            taskAmount : "",
            taskUsed : "",
            taskLast : "",
            flowAmount : "",
            flowUsed : "",
            flowLast : "",
            charts1Title : "",
            charts2Title : "",
            month : "",

            inOutCall : function(){
                this.callOutScale = Math.round(parseInt($scope.myDataModel.resultDate.dialingAmount) / (parseInt($scope.myDataModel.resultDate.calledAmount) + parseInt($scope.myDataModel.resultDate.dialingAmount)) * 100);
                this.callInScale = Math.round(parseInt($scope.myDataModel.resultDate.calledAmount) / (parseInt($scope.myDataModel.resultDate.calledAmount) + parseInt($scope.myDataModel.resultDate.dialingAmount)) * 100);
                var canvas=document.getElementById("userCall");  //读取canvas元素的id
                var context=canvas.getContext("2d");
                context.fillStyle="#2ec7c9";  //填充的颜色
                context.fillRect(0,0,1800,180 * 0.01 * this.callInScale);  //填充颜色 x y坐标 宽 高
                context.fillStyle="#b6a2de";  //填充的颜色
                context.fillRect(0,180 * 0.01 * this.callInScale,1800,180 * 0.01 * this.callOutScale);  //填充颜色 x y坐标 宽 高
            },

            showBar : function(){
                var resultDate = $scope.myDataModel.resultDate;
                this.inOutCall();
                //console.log(resultDate);

                $scope.myDataModel.month = parseInt(resultDate.dataMonth.substr(4,2));
                $scope.myDataModel.callOffer = resultDate.businessRecommend.taskBusinessRecommend.taskBusNameRecommend;
                $scope.myDataModel.gprsOffer = resultDate.businessRecommend.flowBusinessRecommend.flowBusNameRecommend;
                $scope.myDataModel.callofferId = resultDate.businessRecommend.taskBusinessRecommend.taskBusIdRecommend;
                $scope.myDataModel.gprsofferId = resultDate.businessRecommend.flowBusinessRecommend.flowBusIdRecommend;
                var dataType = resultDate.userType;
                this.userType = resultDate.userTypeDesc;
                if(dataType == 1){
                    this.headPhoto = "dataImg.png";
                    this.charts1Title = "近三个月计费流量";
                    this.charts2Title = "流量时段分析";
                } else {
                    this.headPhoto = "callImg.png";
                    this.charts1Title = "近三个月计费通话";
                    this.charts2Title = "语音时段分析";
                }
                this.smsCounts = resultDate.smsAmount;
                this.callOutDuration = resultDate.dialingAmount;
                this.callInDuration = resultDate.calledAmount;
                this.callAvgDayDuration = resultDate.talkAvgAmount;

                require.config({
                    paths: {
                        'echarts': './vender/echarts'
                    }
                });
                require(
                    [
                        'echarts',
                        'echarts/chart/bar',
                        'echarts/chart/pie',
                        'echarts/chart/radar'
                    ],
                    function(ec) {

                        var bar = 'bar';
                        var radar = 'radar';
                        var pie = 'pie';

                        var myChart1 = ec.init(document.getElementById('charts1'));
                        var titleName1 = resultDate.dosageMonthChart[0][0].text;
                        var option1 = echartsService.echartsConfigFun(resultDate.dosageMonthChart[1],titleName1,bar).result;
                        myChart1.setOption(option1);

                        var myChart2 = ec.init(document.getElementById('charts2'));
                        var titleName2 = resultDate.dosageHourChart[0][0].text;
                        var option2 = echartsService.echartsConfigFun(resultDate.dosageHourChart[1],titleName2,bar).result;
                        myChart2.setOption(option2);

                        var myChart3 = ec.init(document.getElementById('charts3'));
                        var titleName3 = resultDate.feeChart[0][0].text;
                        var option3 = echartsService.echartsConfigFun(resultDate.feeChart[1],titleName3,bar).result;
                        myChart3.setOption(option3);

                        var myChart4 = ec.init(document.getElementById('charts4'));
                        var titleName4 = resultDate.taskTimeChart[1][0].name;
                        var option4 = echartsService.echartsConfigFun(resultDate.taskTimeChart[1],titleName4,radar).result;
                        myChart4.setOption(option4);

                        var myChart5 = ec.init(document.getElementById('charts5'));
                        var titleName5 = resultDate.contactPersonArpuChart[0][0].text;
                        var option5 = echartsService.echartsConfigFun(resultDate.contactPersonArpuChart[1],titleName5,pie).result;
                        myChart5.setOption(option5);

                        var myChart8 = ec.init(document.getElementById('charts8'));
                        var titleName8 = resultDate.contactPersonGenderChart[0][0].text;
                        var option8 = echartsService.echartsConfigFun(resultDate.contactPersonGenderChart[1],titleName8,pie).result;
                        myChart8.setOption(option8);

                        var myChart6 = ec.init(document.getElementById('charts6'));
                        var titleName6 = '语音使用情况';
                        var type = 'pie5';
                        var charts6Data = echartsService.chartsDataFun("","其他",$scope.myDataModel.taskLast,"语音使用情况",$scope.myDataModel.taskUsed,"pie5").result;

                        var option6 = echartsService.echartsConfigFun(charts6Data,titleName6,type).result;
                        myChart6.setOption(option6);

                        var myChart7 = ec.init(document.getElementById('charts7'));
                        var titleName7 = '流量使用情况';
                        var charts7Data = echartsService.chartsDataFun("","其他",$scope.myDataModel.flowLast,"流量使用情况",$scope.myDataModel.flowUsed,"pie5").result;
                        var option7 = echartsService.echartsConfigFun(charts7Data,titleName7,type).result;
                        myChart7.setOption(option7);
                    }
                );
            },

            queryUserMessage : function (){
                MobileLifeService.queryUserMessage().then(
                    function (data){
                        //console.log(data);
                        $scope.myDataModel.balance = data.RealBalance;
                        $scope.myDataModel.flows = data.remainFlow;
                        $scope.myDataModel.taskAmount = data.talkResource.taskAmount;
                        $scope.myDataModel.taskUsed = data.talkResource.taskUsed;
                        $scope.myDataModel.taskLast = data.talkResource.taskLast;
                        $scope.myDataModel.flowAmount = data.flowResource.flowAmount;
                        $scope.myDataModel.flowUsed = data.flowResource.flowUsed;
                        $scope.myDataModel.flowLast = data.flowResource.flowLast;
                        $scope.myDataModel.taskDetailLists = data.talkResource.taskDetailList;
                        $scope.myDataModel.flowDetailLists = data.flowResource.flowDetailList;
                        $scope.myDataModel.computerflows = Math.round(parseInt(data.remainFlow) * 5.8254/20,0);
                        $scope.myDataModel.musicflows = Math.round(parseInt(data.remainFlow) * 0.05833,0);
                        $scope.myDataModel.movieflows = Math.round(parseInt(data.remainFlow) / 150,0);
                        $scope.myDataModel.wechatflows = Math.round(parseInt(data.remainFlow) /10,0);
                        $scope.myDataModel.weiboflows = Math.round(parseInt(data.remainFlow) / 0.006,0);
                        $scope.myDataModel.gameflows = Math.round(parseInt(data.remainFlow) /10,0);
                        $scope.myDataModel.readflows = Math.round(parseInt(data.remainFlow) * 26.2144/20,0);
                        $scope.myDataModel.sharesflows = Math.round(parseInt(data.remainFlow) * 100,0);
                    },function (error){
                        //console.log("userMessage:fail:"+error);
                    }
                );
            },

            loadMyData : function(callBackFun){
                ngDialog.open({
                    template: 'views/loading.html',
                    className : 'ngdialog-theme-plain custom-loading-width'
                });
                $scope.myDataModel.billId = $location.search().userId;

                MobileLifeService.loadMyData($scope.myDataModel.billId+"").then(
                    function(data){
                        ngDialog.close();
                        $scope.myDataModel.resultDate = data;
                        if(callBackFun)callBackFun();
                        $scope.myDataModel.showBar();
                    },
                    function (){
                        ngDialog.close();
                    }
                );
                $timeout(function() {
                    ngDialog.close();
                }, 2000);
                $scope.myDataModel.queryUserMessage();
                $scope.myDataModel.nowTime = timeService.nowTime();
            },
            clickOffer : function(type,offerId){
                if(type == "1"){
                    $rootScope.theme = "您即将订购"+offerId;
                    //$rootScope.theme = "您即将订购"+offerId+"的通话时长";
                    resetDataService.offer = $scope.myDataModel.callofferId;
                } else if (type == "2"){
                    $rootScope.theme = "您即将订购"+offerId;
                    resetDataService.offer = $scope.myDataModel.gprsofferId;
                }
                var new_dialog = ngDialog.open({
                    template: 'firstDialogId',
                    controller: 'OfferCtrl',
                    className : 'ngdialog-theme-plain custom-width'
                    //className : 'ngdialog-theme-plain'
                });

                // example on checking whether created `new_dialog` is open
                $timeout(function() {
                    //console.log(ngDialog.isOpen(new_dialog.id));
                }, 2000)
            }
        };
        $scope.myDataModel.loadMyData();
        $scope.$watch('$viewContentLoaded', function() {
            wxs.hideAllNonBaseMenuItem();
        });
    });