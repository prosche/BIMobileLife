/**
 * Created by Administrator on 2015/8/10.
 */
angular.module(constVar.appName)
    .service('GmtService',['$q','$rootScope','ResourceVisitService','$http',function ($q,$rootScope,ResourceVisitService,$http){
        var GmtService={
            //options.api.wx_server = "http://221.180.166.2/nlj_wx_s";
            getJsApidSignature: function(url) {
                return $http.get(constVar.api.wx_server+'/service/1?operate=getJsToken&urlinfo='+url, {},{
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                });
            }
        };

        return GmtService;
    }]);