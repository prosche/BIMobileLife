/**
 * Created by Administrator on 2015/6/18.
 */
'use strict';
angular.module(constVar.appName)
    .service('httpDataService',function ($http,$q){

        function resultObject(status,errorMessage,result){
            this.status= status;// true/false
            this.errorMessage = errorMessage;//错误信息
            this.result = result;//结果对象 可能为数组
        };
        var myService=   {

            //using now
            requestUrl:function (url,data,methodType){
                var deferred = $q.defer();
                var httpOptions =  {
                    url : url,
                    method : methodType,
                    headers : {
                        'Content-type' : 'application/json;charset=UTF-8'
                    },
                    data : data
                };
                $http(httpOptions)
                    .success(function (data, status, headers,
                                       config){
                        if(data){
                            deferred.resolve(data, status, headers,
                                config);
                        }else{
                            deferred.reject(status, headers,
                                config);
                        }
                    })
                    .error(function (data, status, headers,
                                     config){
                        deferred.reject(status, headers,
                            config);
                    });
                return deferred.promise;
            },

            postUrlData : function getData(url,data,methodType){
                var methodType = methodType;
                return myService.requestUrl(url,data,methodType);
            }
        };
        return myService;
    })