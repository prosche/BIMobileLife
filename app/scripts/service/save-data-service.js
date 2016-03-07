/**
 * Created by Administrator on 2015/8/17.
 */
'use strict';
angular.module(constVar.appName)
    .factory('saveDataService', function($http) { // injectables go here
        var backendUrl = constVar.backstageUrl;
        var service = {    // our factory definition
            MyBigData: {},
            billid : "",
            setMyBigData: function(data,billId) {
                service.MyBigData = data;
                service.billid = billId;
                console.log(service.MyBigData)
            },
            save: function() {
                return $http.post(backendUrl + '/my-' + service.billid, {
                    MyBigData : service.MyBigData
                });
            },
            getMyBigData : function(){
                return service.MyBigData;
            }
        };
        return service;
    });