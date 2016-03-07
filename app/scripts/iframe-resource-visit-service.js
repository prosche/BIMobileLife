'use strict';
angular.module('iframe.service',[])
    .constant('IframeConstants',{
        resourceVisitContext:constVar.backstageUrl,
        resourceVisitFrontContext:'http://localhost:3000/views/iframe'
    })
    .service('ResourceVisitService',['$http','$q','IframeConstants','$location','$window',function ($http,$q,IframeConstants,$location,$window){

  var resourceVisitContext = IframeConstants.resourceVisitContext;
      var   resourceVisitService ={
        resourceMapping :{},
        token:null,
        setToken:function (token){
            resourceVisitService.token = token;
            $window.sessionStorage.token = token;
        },
        loginTimeOutFun:null,
        setLoginTimeOutFun:function(loginTimeOutFun){
            resourceVisitService.loginTimeOutFun = loginTimeOutFun;
        },
        getResourceService:function (resource){
            if(!resource){
                return null;
            }
            if(!this.resourceMapping[resource]){

                this.resourceMapping[resource]=function(){
                    var resourceVisitAddress= resourceVisitContext + '/' + resource;
                    var  resourceDataStruct=null;
                    return {

                            getRequestUrl:function (){
                                return resourceVisitAddress;
                            },
                            getPageCommandUrl: function () {
                                return resourceVisitAddress + '?command=PAGE';
                            },
                            getResourceVisitUrl: function () {
                                return resourceVisitAddress;
                            },
                            loadDataStruct: function () {
                                var deferred = $q.defer();
                                if (resourceDataStruct) {
                                    deferred.resolve(resourceDataStruct);
                                } else {
                                    var resourceVisitDataStructAddress = resourceVisitAddress + "?command=DATASTRUCT";
                                    this.visit(resourceVisitDataStructAddress,{},deferred);
                                }
                                return deferred.promise;
                            },
                            translateList:function(paramMap){
                                var deferred = $q.defer();
                                this.visit(resourceVisitAddress,{
                                    paramsMap:paramMap
                                },deferred);

                                return deferred.promise;
                            },
                            visit:function(url,searchObj,deferred){
                                if(!deferred){
                                    deferred = $q.defer();
                                }
                                var options = {
                                    method: 'POST',
                                    url: url,
                                    data:searchObj
                                };
                                if(resourceVisitService.token){
                                    options.headers={'token':resourceVisitService.token}
                                }else  if($window.sessionStorage.token){
                                    options.headers={'token':$window.sessionStorage.token}
                                }else  if(!$window.sessionStorage.token){
                                    $location.path('/')
                                }
                                $http(options).success(function (data, status, headers, config) {
                                    if (data.status == 1 && data.result ) {
                                        if(data.result instanceof Array && data.result.length==0){
                                            deferred.reject(data.errorMessage);
                                        }else{
                                            var dataModel = data.result;
                                            deferred.resolve(dataModel);
                                        }
                                    } else {

                                        deferred.reject(data.errorMessage);
                                        if(data.failCode=="1003001" && resourceVisitService.loginTimeOutFun){
                                            resourceVisitService.loginTimeOutFun();
                                        }
                                    }
                                    // 当相应准备就绪时调用
                                }).error(function (data, status, headers, config) {
                                    deferred.reject('http.status='+status);
                                    // 当响应以错误状态返回时调用
                                });
                                return deferred.promise;
                            },
                            visitProcess:function(paramsMap){
                                return this.visit(resourceVisitAddress,paramsMap);
                            },
                            queryList:function(paramsMap){
                                var searchObj = {
                                    command:'query',
                                    resultType:'LISTMAP',
                                    paramsMap:paramsMap
                                };

                                return this.visit(resourceVisitAddress,searchObj);
                            },

                            download:function(paramsMap,fileParams){
                                var searchObj = {
                                    command:'query',
                                    resultType:'file',
                                    paramsMap:paramsMap,
                                    file:fileParams
                                };
                               return   this.visit(resourceVisitAddress,searchObj);
                            },
                            getDownloadParams:function (paramsMap,fileParams){
                                var searchObj = {
                                    command:'query',
                                    resultType:'file',
                                    paramsMap:paramsMap,
                                    file:fileParams
                                };

                              return resourceVisitAddress+"?command="+searchObj.command+"&resultType="+searchObj.resultType+"&paramsMap="+searchObj.paramsMap+"&file="+searchObj.file;
                            },
                            queryPage:function(paramsMap, pageId, rowsOfPage){
                                var searchObj = {
                                    command:'PAGE',
                                    paramsMap:paramsMap,
                                    pageId:'1',
                                    rowsOfPage:'10'
                                };
                                if(pageId){
                                    searchObj.pageId =pageId;
                                }
                                if(rowsOfPage){
                                    searchObj.rowsOfPage =rowsOfPage;
                                }
                                return this.visit(resourceVisitAddress,searchObj);
                            },
                            queryOne:function(paramsMap){
                                var searchObj = {
                                    command:'query',
                                    resultType:'ONEMAP',
                                    paramsMap:paramsMap
                                };
                                return this.visit(resourceVisitAddress,searchObj);
                            },
                            inheritedList:function(paramsMap,queryObj){
                                var searchObj = {
                                    command:'query',
                                    resultType:'INHERITEDLIST'
                                };
                                searchObj = angular.extend(searchObj,queryObj);
                                searchObj.paramsMap = paramsMap;
                                return this.visit(resourceVisitAddress,searchObj);
                            },
                            loadResourceById:function (resourceId){

                                var resourceVisitByIdAddress = resourceVisitAddress+"/"+resourceId;
                               return  this.visit(resourceVisitByIdAddress,{ });

                            },
                            saveResource:function (resourceModel){

                                return this.visit(resourceVisitAddress,{paramsMap: resourceModel,command:'INSERT'})

                            },
                            updateResource:function (resourceModel){

                                return this.visit(resourceVisitAddress,{paramsMap: resourceModel,command:'UPDATE'})

                            },
                           deleteResource:function (resourceId){
                               return this.visit(resourceVisitAddress+"/"+resourceId,{command:'DELETE'})
                        }
                    }

                    }();
                };

            return this.resourceMapping[resource];
        }




    };

        return resourceVisitService;

}]);