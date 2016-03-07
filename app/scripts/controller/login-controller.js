/**
 * Created by Administrator on 2015/6/17.
 */
'use strict';
angular.module(constVar.appName)
    .controller('loginController',function($scope,$location,$timeout,ngDialog,resetDataService,MobileLifeService,wxs){
        var timeOver;
        $scope.loginModel = {
            getReal : "获取",
            passwdStyle : {},
            loginName : "",
            passwd : "",
            loginVisible : "false",

            sendVerifyCode : function (callBackFun){
                MobileLifeService.sendVerifyCode($scope.loginModel.loginName+"").then(
                    function (){
                        if(callBackFun)callBackFun();
                    },function (){
                    }
                );
            },

            login : function (callBackFun){
                $scope.loginModel.openLoadingWindow();
                var loginFun =  MobileLifeService.login(this.loginName+"",this.passwd+"");
                loginFun.then(
                    function (token){
                        if(callBackFun)callBackFun();
                        $scope.loginModel.openLoadingWindow();
                        resetDataService.name = $scope.loginModel.loginName;
                        $location.path('/my').search('userId='+ $scope.loginModel.loginName + '&&passwd=' + $scope.loginModel.passwd);
                    },function (){
                        $scope.loginModel.errorMsg = "您当前网络较缓慢，请重新尝试";
                        $scope.loginModel.openLoadingWindow();
                        $location.path("/nologin");
                    }
                );
            },

            onclick : function(){
                if($scope.loginModel.passwd !=null && $scope.loginModel.loginName != null){
                    this.login();
                    $scope.loginModel.loginVisible = "false";
                    $timeout(function() {
                        $scope.loginModel.loginVisible = "true";
                    }, 10000)
                } else if($scope.loginModel.loginName !=null){
                    $scope.loginModel.errorMsg = "用户名错误";
                } else {
                    $scope.loginModel.errorMsg = "验证码错误";
                }
            },

            getPasswd :  function(){
                if(timeOver == null){
                    timeOver = "60";
                    $scope.loginModel.getReal = "已发送(" + timeOver + ")";
                    this.sendVerifyCode();
                    $scope.loginModel.getTime(timeOver);
                    $scope.loginModel.errorMsg = null;
                }
            },

            timeoutFun : function() {
                timeOver = (parseInt(timeOver) - 1).toString();
                $scope.loginModel.getTime(timeOver);
            },

            getTime :  function(time){
                if(parseInt(time) <= 0){
                    $scope.loginModel.getReal = "获取";
                    timeOver = null;
                } else {
                    $timeout(function() {
                        $scope.loginModel.timeoutFun();
                    }, 1000);
                    $scope.loginModel.getReal = "已发送(" + time.toString() + ")";
                }
            },

            createCode : function () {
                var code = "";
                var codeLength = 6;//验证码的长度
                var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);//所有候选组成验证码的字符，当然也可以用中文的

                for (var i = 0; i < codeLength; i++) {
                    var charIndex = Math.floor(Math.random() * 10);
                    code += selectChar[charIndex];
                }
                $scope.loginModel.passwdReal = code;
            },

            openLoadingWindow : function (){
                var str='';
                str += '<div id="pop-content" class="loading">'+'请稍后'+'</div>';
                $scope.loginModel.getNode("loading").innerHTML = str;
                $scope.loginModel.getNode("loading").style.display='block';

            },
            closeLoadingWindow : function (){
                $scope.loginModel.getNode("loading").style.display='none';
            },

            getNode :function(id) {
                return document.getElementById(id);
            }

        };
        $scope.$watch('$viewContentLoaded', function() {
            //wxs.wxConfig(ShareWords.getCampaignWords());
            wxs.hideAllNonBaseMenuItem();
            var object={
                title : "123",
                desc : "asd"
            }
            wxs.wxConfig(object);
        });
    });