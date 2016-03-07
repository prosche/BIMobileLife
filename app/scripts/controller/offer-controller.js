/**
 * Created by Administrator on 2015/8/6.
 */
angular.module(constVar.appName)
    .controller('OfferCtrl', function ($scope, ngDialog,$timeout,MobileLifeService,resetDataService) {
        $scope.dialogModel = {
            message : 'message from passed scope'
        };
        $scope.openSecond = function (offerId) {
            var offerId = resetDataService.offer + '';
            MobileLifeService.orderProduct(offerId).then(
                function (data){
                    $scope.orderProductResult=data;

                    $timeout(function(){ngDialog.close();},1000);

                    ngDialog.open({
                        template: '<h3><a href="" ng-click="closeSecond()" >恭喜您，订购成功</a></h3>',
                        plain: true,
                        closeByEscape: false,
                        controller: 'SecondModalCtrl'
                    });

                    $timeout(function(){ngDialog.close();},1000);
                },function (error){
                }
            );
            ngDialog.open({
                template: '<h3><a href="" ng-click="closeSecond()" >马上办理，稍息一下..</a></h3>',
                plain: true,
                closeByEscape: true,
                controller: 'SecondModalCtrl'
            });
        };
    })
    .controller('SecondModalCtrl', function ($scope, ngDialog) {
        $scope.closeSecond = function () {
            ngDialog.close();
        };
    });