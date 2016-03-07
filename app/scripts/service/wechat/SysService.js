angular.module(constVar.appName)
    .factory('wxs', function ($location,GmtService) {
        return {
            wxConfig: function(object) {
                object.callback= object.callback || {};
                GmtService.getJsApidSignature($location.absUrl()).success(function(data){
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: 'wx17f735b1796a5e52', // 必填，公众号的唯一标识
                        timestamp:data.timestamp , // 必填，生成签名的时间戳
                        nonceStr: data.noncestr, // 必填，生成签名的随机串
                        signature: data.signature,// 必填，签名，见附录1
                        jsApiList: [
                            'checkJsApi',
                            'onMenuShareAppMessage',
                            'onMenuShareTimeline',
                            'hideAllNonBaseMenuItem'
                        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });

                    wx.ready(function(){
                        wx.onMenuShareAppMessage({
                            title: object.title,
                            desc:  object.desc,
                            link:  object.url,
                            imgUrl: object.msgImg,
                            trigger: function (res) {
                            },
                            success: object.callback,
                            cancel: function (res) {
                            },
                            fail: function (res) {
                                alert(JSON.stringify(res));
                            }
                        });
                        wx.onMenuShareTimeline({
                            title: object.title, // 分享标题
                            link:  object.url,
                            imgUrl:  object.msgImg,
                            success: object.callback,
                            cancel: function () {
                            },
                            fail: function (res) {

                            }
                        });

                    });
                    wx.error(function(res){

                    });
                });

            },
            hideAllNonBaseMenuItem: function() {
                GmtService.getJsApidSignature($location.absUrl()).success(function(data){
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: 'wx17f735b1796a5e52', // 必填，公众号的唯一标识
                        timestamp:data.timestamp , // 必填，生成签名的时间戳
                        nonceStr: data.noncestr, // 必填，生成签名的随机串
                        signature: data.signature,// 必填，签名，见附录1
                        jsApiList: [
                            'checkJsApi',
                            'onMenuShareAppMessage',
                            'onMenuShareTimeline',
                            'hideAllNonBaseMenuItem'
                        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });

                    wx.ready(function(){
                        wx.hideAllNonBaseMenuItem({
                            success: function () {

                            }
                        });

                    });
                    wx.error(function(res){

                    });
                });

            }
        }
    });