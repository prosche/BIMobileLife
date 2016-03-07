/**
 * Created by Administrator on 2015/6/15.
 */
angular.module(constVar.appName)
    .factory('loadingService',
    function($scope) {
        $scope.loadingService = {
            openLoadingWindow : function () {
                var str = '';
                str += '<div id="pop-content" class="loading">' + '请稍后' + '</div>';
                $scope.getNode("loading").innerHTML = str;
                $scope.getNode("loading").style.display = 'block';

            },
            closeLoadingWindow : function () {
                $scope.getNode("loading").style.display = 'none';
            },

            getNode : function (id) {
                return document.getElementById(id);
            }

        }
    });