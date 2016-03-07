/**
 * Created by Administrator on 2015/6/15.
 */
angular.module(constVar.appName).directive('loadingDirective', [
    function($scope) {

        $scope.openLoadingWindow = function (){
            var str='';
            str += '<div id="pop-content" class="loading">'+'«Î…‘∫Û'+'</div>';
            $scope.getNode("loading").innerHTML = str;
            $scope.getNode("loading").style.display='block';

        };
            $scope.closeLoadingWindow = function (){
            $scope.getNode("loading").style.display='none';
        };

        $scope.getNode = function(id) {
            return document.getElementById(id);
        }
    }]);