/**
 * Created by Administrator on 2015/8/26.
 */
'use strict';
angular.module(constVar.appName)
    .service('Reddit',function ($http) {
        var Reddit = function () {
            this.items = [];
            this.busy = false;
            this.after = '';
        };

        Reddit.prototype.nextPage = function () {
            if (this.busy) return;
            this.busy = true;

            var url = constVar.backstageUrl + "data/cpe_users_2015-06-01_999_days.json";
            $http.jsonp(url).success(function (data) {
                var items = data.data.children;
                for (var i = 0; i < items.length; i++) {
                    this.items.push(items[i].data);
                }
                this.after = "t3_" + this.items[this.items.length - 1].id;
                this.busy = false;
            } .bind(this));
        };

        return Reddit;
    });