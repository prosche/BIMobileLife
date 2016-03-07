/**
 * Created by Administrator on 2015/8/26.
 */

'use strict';
angular.module(constVar.appName)
    .controller('ngInfiniteScrollController',function($scope) {

        $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

        $scope.scrollModel = {
            myPagingFunction : function(){
                var last = $scope.images[$scope.images.length - 1];
                for(var i = 1; i <= 8; i++) {
                    $scope.images.push(last + i);
                }
            }
        };

    });