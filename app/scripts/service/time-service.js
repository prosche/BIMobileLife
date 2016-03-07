/**
 * Created by Administrator on 2015/8/20.
 */

'use strict';
angular.module(constVar.appName)
    .service('timeService',function ($http,$q){

        function resultObject(status,errorMessage,result){
            this.status= status;// true/false
            this.errorMessage = errorMessage;//错误信息
            this.result = result;//结果对象 可能为数组
        };
        var myService=   {

            nowTime : function ()
            {
                var now = new Date();
                var year = now.getFullYear();       //年
                var month = now.getMonth() + 1;     //月
                var day = now.getDate();            //日

                var hh = now.getHours();            //时
                var mm = now.getMinutes();          //分
                var ss = now.getSeconds();          //秒

                var clock = year + "年";

                if(month < 10)
                    clock += "0";

                clock += month + "月";

                if(day < 10)
                    clock += "0";

                clock += day + "日 ";

                if(hh < 10)
                    clock += "0";

                clock += hh + ":";
                if (mm < 10) clock += '0';
                clock += mm + ":";
                if (ss < 10) clock += '0';
                clock += ss;
                return(clock);
            }
        };
        return myService;
    });