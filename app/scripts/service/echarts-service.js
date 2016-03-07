/**
 * Created by Administrator on 2015/7/22.
 */
'use strict';
angular.module(constVar.appName)
    .service('echartsService',function ($http,$q){

        function resultObject(status,errorMessage,result){
            this.status= status;// true/false
            this.errorMessage = errorMessage;//错误信息
            this.result = result;//结果对象 可能为数组
        };
        var gridy2data = 60;
        var echartsData = {

            radarXParamsMax : function (dateList){
                var max = 0;
                for (var j = 0 ; j < dateList.length; j++){
                    if(parseInt(max) < parseInt(dateList[j][1])){
                        max =  parseInt(dateList[j][1]);
                    }
                };
                return max;
            },

            chartsDataFun : function (titlename,name1,value1,name2,value2,type){
                var resultData;
                if(type=="pie5"){
                    resultData =
                        [
                            {"name": titlename,
                                "data": [
                                    {name: name1, value:Math.round(parseInt(value1)/(parseInt(value1)+parseInt(value2))*100,0)},
                                    {name:name2, value:Math.round(parseInt(value2)/(parseInt(value1)+parseInt(value2))*100,0)}
                                ],
                                "type": type.substr(0,3)}
                        ]
                } else {
                    resultData =
                        [
                            {"name": titlename,
                                "data": [
                                    {name: name1, value:value1},
                                    {name:name2, value:vlaue2}
                                ],
                                "type": type}
                        ]
                }
                return new resultObject(true, "输出charts数据", resultData);
            },

            xAxisFun : function(xArrayList,xAxisData){
                if(xArrayList.length > 6){
                    xAxisData[0].axisLabel.rotate = 60;
                    for(var i = 1 ; i < xAxisData[0].data.length ; i++){
                        if(xAxisData[0].data[i].length > 5){
                            gridy2data = 100;
                            break;
                        }
                        break;
                    }
                }
            },

            echartsConfigFun: function (data,titleName,type) {
                var i = parseInt(data.length) -1 ;
                if(type == 'bar'){
                    var xArrayList = new Array();
                    var dataArrayList = new Array();
                    for (var j = 0 ; j < data[i].data.length; j++){
                        xArrayList[j] = data[i].data[j][0];
                        dataArrayList[j] = data[i].data[j][1];
                    }

                } else if (type == 'radar'){

                    var xArrayList = new Array();
                    var dataArrayList = new Array();
                    var maxdate = echartsData.radarXParamsMax(data[i].data);
                    for (var j = 0 ; j < data[i].data.length; j++){
                        var xParams = {
                            text : "",
                            max : maxdate + 10
                        }
                        xParams.text = data[i].data[j][0];
                        xArrayList[j] = xParams;
                        dataArrayList[j] = data[i].data[j][1];
                    }
                } else if (type == 'pie'){
                    var dataArrayList = new Array();
                    var legendDataName = new Array();
                    for (var j = 0 ; j < data[i].data.length; j++){
                        var xParams = {
                            value : 0,
                            name : ""
                        }
                        xParams.name = data[i].data[j][0];
                        xParams.value = data[i].data[j][1];
                        dataArrayList[j] = xParams;
                        legendDataName[j] = xParams.name;
                    }
                } else {
                    var xArrayList = new Array();
                    var dataArrayList = new Array();
                    for (var j = 0 ; j < data[i].data.length; j++){
                        xArrayList[j] = data[i].data[j][0];
                        dataArrayList[j] = data[i].data[j][1];
                    }
                }
                var titleData = {
                    text: '',
                    textStyle:{
                        fontSize: 10,
                        fontWeight: 'bolder',
                        color: '#008080'
                    },
                    x :'',
                    show : true
                };

                var tooltipData = {
                    show : false,
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                };
                var labelTop = {
                    normal : {
                        color: 'rgb(255,206,167)',
                        label : {
                            show : true,
                            position : 'center',
                            formatter : '{b}',
                            textStyle: {
                                baseline : 'bottom'
                            }
                        },
                        labelLine : {
                            show : false
                        }
                    }
                };
                var labelFromatter = {
                    normal : {
                        label : {
                            formatter : function (params){
                                return 100 - params.value + '%'
                            },
                            textStyle: {
                                baseline : 'top'
                            }
                        }
                    }
                };
                var labelBottom = {
                    normal : {
                        color: '#ccc',
                        label : {
                            show : true,
                            position : 'center'
                        },
                        labelLine : {
                            show : false
                        }
                    },
                    emphasis: {
                        color: 'rgba(0,0,0,0)'
                    }
                };
                var legendData = {
                    data: [data[0].name],
                    x: 'center',
                    y: 'top',
                    show : true
                };
                var toolboxData = {
                    show : false,
                        feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                };

                var xAxisData = [
                    {
                        type : 'category',
                        data: xArrayList ,
                        axisLabel:{
                            rotate: 0
                        }
                    }
                ];

                var yAxisData = [
                    {
                        type: 'value'
                    }
                ];
                var radius = [35, 45];
                var seriesData = [
                    {
                        name: data[0].name,
                        type: type,
                        stack: '总量',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    position: 'insideRight'
                                },
                                color:'#16A2A9' //图例颜色设置
                            }
                        },
                        data: dataArrayList
                        /*,
                        markPoint : {
                            data:[
                                {type : 'max', name: '最大值',symbolSize: 10,symbol: 'pin'},
                                {type : 'min', name: '最小值',symbolSize: 10,symbol: 'pin'}
                            ]
                        },
                        markLine : {
                            data : [
                                {
                                    type : 'average',
                                    name: '平均值',
                                    itemStyle:{
                                        normal:{
                                            label:{
                                                position:'right',
                                                distance : 10,
                                                textStyle : {
                                                    fontSize : 1
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        }*/
                    }
                ];
                var resultData;

                if(type == 'bar'){
                    echartsData.xAxisFun(xArrayList,xAxisData);
                    resultData = {
                        title : titleData,
                        tooltip :tooltipData,
                        legend: legendData,
                        toolbox: toolboxData,
                        calculable : true,
                        grid: {
                            x: 40,
                            x2: 10,
                            y2: gridy2data
                        },
                        xAxis : xAxisData,
                        yAxis : yAxisData,
                        series : seriesData
                    };
                } else if (type == 'radar'){
                    resultData = {
                        title : titleData,
                        tooltip : tooltipData,
                        //legend: legendData,
                        toolbox: toolboxData,
                        calculable : true,
                        polar : [
                            {
                                indicator : xArrayList,
                                radius : 45
                            }
                        ],
                        series : [
                            {
                                name: "",
                                type: type,
                                itemStyle: {
                                    normal: {
                                        areaStyle: {
                                            type: 'default'
                                        },
                                        color : '#2ec7c9'
                                    }
                                },
                                data : [
                                    {
                                        value : dataArrayList,
                                        name : ''
                                    }
                                ]
                            }
                        ]
                    };

                } else if (type == 'pie'){
                    titleData.text = data[0].name;
                    titleData.x = 'center';
                    resultData = {
                        title : titleData,
                        tooltip : {
                            trigger: 'item'
                        },
                        legend: {
                            data: legendDataName,
                            show : false
                        },
                        calculable : true,
                        series : [
                            {
                                name: data[0].name,
                                type: type,
                                radius : '50%',
                                center: ['50%', '60%'],
                                itemStyle : {
                                    normal : {
                                        label : {
                                            show : true,
                                            formatter : "{b}\n{d}%"
                                        },
                                        labelLine : {
                                            show : true
                                        },
                                        color : function(params) {
                                            var colorList = [
                                                '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980',
                                                '#d87a80', '#8d98b3', '#e5cf0d', '#97b552'
                                            ];
                                            return colorList[params.dataIndex]
                                        }
                                    },
                                    emphasis : {
                                        label : {
                                            show : true,
                                            position : 'inner',
                                            formatter : function (params) {
                                                return (params.percent - 0).toFixed(0) + '%'
                                            }
                                        }
                                    }
                                },
                                data: dataArrayList
                            }
                        ]
                    }
                } else if (type == 'pie5') {
                    var serieslabeldata = [
                        {name:data[0].data[0].name, value:data[0].data[0].value, itemStyle : labelBottom},
                        {name:data[0].data[1].name, value:data[0].data[1].value,itemStyle : labelTop}
                    ];
                    titleData.show = false;
                    legendData.show = false;
                    legendData.y = 'center';
                    if(data[0].data[1].name == '流量使用情况'){
                        labelTop.normal.color = 'rgb(201,198,255)';
                    }
                    resultData = {
                        legend: legendData,
                        title : titleData,
                        series: [
                            {
                                type: 'pie',
                                center: ['50%', '50%'],
                                radius: radius,
                                x: '0%', // for funnel
                                itemStyle: labelFromatter,
                                data: serieslabeldata
                            }
                        ]
                    }
                } else {
                    resultData = {
                        title : titleData,
                        tooltip :tooltipData,
                        legend: legendData,
                        toolbox: toolboxData,
                        calculable : true,
                        xAxis : xAxisData,
                        yAxis : yAxisData,
                        series : seriesData
                    };
                }

                return new resultObject(true, "输出函数", resultData);
            }
        };
        return echartsData;
    }
);