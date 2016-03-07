// Copyright 2006 Google Inc.

//   http://www.apache.org/licenses/LICENSE-2.0

// (c) 2010-2013 Thomas Fuchs

// Zepto.js may be freely distributed under the MIT license.

/*!
 * ZRender, a lightweight canvas library with a MVC architecture, data-driven
 * and provides an event model like DOM.
 *
 * Copyright (c) 2013, Baidu Inc.
 * All rights reserved.
 *
 * LICENSE
 * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
 */

/*!
 * ECharts, a javascript interactive chart library.
 *
 * Copyright (c) 2014, Baidu Inc.
 * All rights reserved.
 *
 * LICENSE
 * https://github.com/ecomfe/echarts/blob/master/LICENSE.txt
 */

define("echarts/config", [], function() {
	var e = {
		CHART_TYPE_LINE: "line",
		CHART_TYPE_BAR: "bar",
		CHART_TYPE_SCATTER: "scatter",
		CHART_TYPE_PIE: "pie",
		CHART_TYPE_RADAR: "radar",
		CHART_TYPE_MAP: "map",
		CHART_TYPE_K: "k",
		CHART_TYPE_ISLAND: "island",
		CHART_TYPE_FORCE: "force",
		CHART_TYPE_CHORD: "chord",
		CHART_TYPE_GAUGE: "gauge",
		CHART_TYPE_FUNNEL: "funnel",
		COMPONENT_TYPE_TITLE: "title",
		COMPONENT_TYPE_LEGEND: "legend",
		COMPONENT_TYPE_DATARANGE: "dataRange",
		COMPONENT_TYPE_DATAVIEW: "dataView",
		COMPONENT_TYPE_DATAZOOM: "dataZoom",
		COMPONENT_TYPE_TOOLBOX: "toolbox",
		COMPONENT_TYPE_TOOLTIP: "tooltip",
		COMPONENT_TYPE_GRID: "grid",
		COMPONENT_TYPE_AXIS: "axis",
		COMPONENT_TYPE_POLAR: "polar",
		COMPONENT_TYPE_X_AXIS: "xAxis",
		COMPONENT_TYPE_Y_AXIS: "yAxis",
		COMPONENT_TYPE_AXIS_CATEGORY: "categoryAxis",
		COMPONENT_TYPE_AXIS_VALUE: "valueAxis",
		COMPONENT_TYPE_TIMELINE: "timeline",
		backgroundColor: "rgba(0,0,0,0)",
		color: ["#ff7f50", "#87cefa", "#da70d6", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "#ffd700", "#6699FF", "#ff6666", "#3cb371", "#b8860b", "#30e0e0"],
		title: {
			text: "",
			subtext: "",
			x: "left",
			y: "top",
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "#ccc",
			borderWidth: 0,
			padding: 5,
			itemGap: 5,
			textStyle: {
				fontSize: 18,
				fontWeight: "bolder",
				color: "#333"
			},
			subtextStyle: {
				color: "#aaa"
			}
		},
		legend: {
			orient: "horizontal",
			x: "center",
			y: "top",
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "#ccc",
			borderWidth: 0,
			padding: 5,
			itemGap: 10,
			itemWidth: 20,
			itemHeight: 14,
			textStyle: {
				color: "#333"
			},
			selectedMode: !0
		},
		dataRange: {
			orient: "vertical",
			x: "left",
			y: "bottom",
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "#ccc",
			borderWidth: 0,
			padding: 5,
			itemGap: 10,
			itemWidth: 20,
			itemHeight: 14,
			precision: 0,
			splitNumber: 5,
			calculable: !1,
			realtime: !0,
			color: ["#006edd", "#e0ffff"],
			textStyle: {
				color: "#333"
			}
		},
		toolbox: {
			show: !1,
			orient: "horizontal",
			x: "right",
			y: "top",
			color: ["#1e90ff", "#22bb22", "#4b0082", "#d2691e"],
			disableColor: "#ddd",
			effectiveColor: "red",
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "#ccc",
			borderWidth: 0,
			padding: 5,
			itemGap: 10,
			itemSize: 16,
			showTitle: !0,
			feature: {
				mark: {
					show: !1,
					title: {
						mark: "辅助线开关",
						markUndo: "删除辅助线",
						markClear: "清空辅助线"
					},
					lineStyle: {
						width: 1,
						color: "#1e90ff",
						type: "dashed"
					}
				},
				dataZoom: {
					show: !1,
					title: {
						dataZoom: "区域缩放",
						dataZoomReset: "区域缩放后退"
					}
				},
				dataView: {
					show: !1,
					title: "数据视图",
					readOnly: !1,
					lang: ["Data View", "close", "refresh"]
				},
				magicType: {
					show: !1,
					title: {
						line: "折线图切换",
						bar: "柱形图切换",
						stack: "堆积",
						tiled: "平铺"
					},
					type: []
				},
				restore: {
					show: !1,
					title: "还原"
				},
				saveAsImage: {
					show: !1,
					title: "保存为图片",
					type: "png",
					lang: ["点击保存"]
				}
			}
		},
		tooltip: {
			show: !0,
			showContent: !0,
			trigger: "item",
			islandFormatter: "{a} <br/>{b} : {c}",
			showDelay: 20,
			hideDelay: 100,
			transitionDuration: .4,
			backgroundColor: "rgba(0,0,0,0.7)",
			borderColor: "#333",
			borderRadius: 4,
			borderWidth: 0,
			padding: 5,
			axisPointer: {
				type: "line",
				lineStyle: {
					color: "#48b",
					width: 2,
					type: "solid"
				},
				crossStyle: {
					color: "#1e90ff",
					width: 1,
					type: "dashed"
				},
				shadowStyle: {
					color: "rgba(150,150,150,0.3)",
					width: "auto",
					type: "default"
				}
			},
			textStyle: {
				color: "#fff"
			}
		},
		dataZoom: {
			show: !1,
			orient: "horizontal",
			backgroundColor: "rgba(0,0,0,0)",
			dataBackgroundColor: "#eee",
			fillerColor: "rgba(144,197,237,0.2)",
			handleColor: "rgba(70,130,180,0.8)",
			realtime: !0
		},
		grid: {
			x: 80,
			y: 60,
			x2: 80,
			y2: 60,
			backgroundColor: "rgba(0,0,0,0)",
			borderWidth: 1,
			borderColor: "#ccc"
		},
		categoryAxis: {
			position: "bottom",
			name: "",
			nameLocation: "end",
			nameTextStyle: {},
			boundaryGap: !0,
			axisLine: {
				show: !0,
				onZero: !0,
				lineStyle: {
					color: "#48b",
					width: 2,
					type: "solid"
				}
			},
			axisTick: {
				show: !0,
				interval: "auto",
				inside: !1,
				length: 5,
				lineStyle: {
					color: "#333",
					width: 1
				}
			},
			axisLabel: {
				show: !0,
				interval: "auto",
				rotate: 0,
				margin: 8,
				textStyle: {
					color: "#333"
				}
			},
			splitLine: {
				show: !0,
				lineStyle: {
					color: ["#ccc"],
					width: 1,
					type: "solid"
				}
			},
			splitArea: {
				show: !1,
				areaStyle: {
					color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
				}
			}
		},
		valueAxis: {
			position: "left",
			name: "",
			nameLocation: "end",
			nameTextStyle: {},
			boundaryGap: [0, 0],
			precision: 0,
			power: 100,
			splitNumber: 5,
			axisLine: {
				show: !0,
				onZero: !0,
				lineStyle: {
					color: "#48b",
					width: 2,
					type: "solid"
				}
			},
			axisTick: {
				show: !1,
				inside: !1,
				length: 5,
				lineStyle: {
					color: "#333",
					width: 1
				}
			},
			axisLabel: {
				show: !0,
				rotate: 0,
				margin: 8,
				textStyle: {
					color: "#333"
				}
			},
			splitLine: {
				show: !0,
				lineStyle: {
					color: ["#ccc"],
					width: 1,
					type: "solid"
				}
			},
			splitArea: {
				show: !1,
				areaStyle: {
					color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
				}
			}
		},
		polar: {
			center: ["50%", "50%"],
			radius: "75%",
			startAngle: 90,
			splitNumber: 5,
			name: {
				show: !0,
				textStyle: {
					color: "#333"
				}
			},
			axisLine: {
				show: !0,
				lineStyle: {
					color: "#ccc",
					width: 1,
					type: "solid"
				}
			},
			axisLabel: {
				show: !1,
				textStyle: {
					color: "#333"
				}
			},
			splitArea: {
				show: !0,
				areaStyle: {
					color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
				}
			},
			splitLine: {
				show: !0,
				lineStyle: {
					width: 1,
					color: "#ccc"
				}
			},
			type: "polygon"
		},
		timeline: {
			show: !0,
			type: "time",
			notMerge: !1,
			realtime: !0,
			x: 80,
			x2: 80,
			y2: 0,
			height: 50,
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "#ccc",
			borderWidth: 0,
			padding: 5,
			controlPosition: "left",
			autoPlay: !1,
			loop: !0,
			playInterval: 2e3,
			lineStyle: {
				width: 1,
				color: "#666",
				type: "dashed"
			},
			label: {
				show: !0,
				interval: "auto",
				rotate: 0,
				textStyle: {
					color: "#333"
				}
			},
			checkpointStyle: {
				symbol: "auto",
				symbolSize: "auto",
				color: "auto",
				borderColor: "auto",
				borderWidth: "auto",
				label: {
					show: !1,
					textStyle: {
						color: "auto"
					}
				}
			},
			controlStyle: {
				normal: {
					color: "#333"
				},
				emphasis: {
					color: "#1e90ff"
				}
			},
			symbol: "emptyDiamond",
			symbolSize: 4,
			currentIndex: 0
		},
		bar: {
			xAxisIndex: 0,
			yAxisIndex: 0,
			barMinHeight: 0,
			barGap: "30%",
			barCategoryGap: "20%",
			itemStyle: {
				normal: {
					borderColor: "#fff",
					borderRadius: 0,
					borderWidth: 0,
					label: {
						show: !1
					}
				},
				emphasis: {
					borderColor: "#fff",
					borderRadius: 0,
					borderWidth: 0,
					label: {
						show: !1
					}
				}
			}
		},
		line: {
			xAxisIndex: 0,
			yAxisIndex: 0,
			itemStyle: {
				normal: {
					label: {
						show: !1
					},
					lineStyle: {
						width: 2,
						type: "solid",
						shadowColor: "rgba(0,0,0,0)",
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowOffsetY: 0
					}
				},
				emphasis: {
					label: {
						show: !1
					}
				}
			},
			symbolSize: 2,
			showAllSymbol: !1
		},
		k: {
			xAxisIndex: 0,
			yAxisIndex: 0,
			itemStyle: {
				normal: {
					color: "#fff",
					color0: "#00aa11",
					lineStyle: {
						width: 1,
						color: "#ff3200",
						color0: "#00aa11"
					}
				},
				emphasis: {}
			}
		},
		scatter: {
			xAxisIndex: 0,
			yAxisIndex: 0,
			symbolSize: 4,
			large: !1,
			largeThreshold: 2e3,
			itemStyle: {
				normal: {
					label: {
						show: !1,
						formatter: function(e, t, n) {
							return typeof n[2] != "undefined" ? n[2] : n[0] + " , " + n[1]
						}
					}
				},
				emphasis: {
					label: {
						show: !1,
						formatter: function(e, t, n) {
							return typeof n[2] != "undefined" ? n[2] : n[0] + " , " + n[1]
						}
					}
				}
			}
		},
		radar: {
			polarIndex: 0,
			itemStyle: {
				normal: {
					label: {
						show: !1
					},
					lineStyle: {
						width: 2,
						type: "solid"
					}
				},
				emphasis: {
					label: {
						show: !1
					}
				}
			},
			symbolSize: 2
		},
		pie: {
			center: ["50%", "50%"],
			radius: [0, "75%"],
			clockWise: !0,
			startAngle: 90,
			minAngle: 0,
			selectedOffset: 10,
			itemStyle: {
				normal: {
					borderColor: "rgba(0,0,0,0)",
					borderWidth: 1,
					label: {
						show: !0,
						position: "outer"
					},
					labelLine: {
						show: !0,
						length: 20,
						lineStyle: {
							width: 1,
							type: "solid"
						}
					}
				},
				emphasis: {
					borderColor: "rgba(0,0,0,0)",
					borderWidth: 1,
					label: {
						show: !1
					},
					labelLine: {
						show: !1,
						length: 20,
						lineStyle: {
							width: 1,
							type: "solid"
						}
					}
				}
			}
		},
		map: {
			mapType: "china",
			mapValuePrecision: 0,
			showLegendSymbol: !0,
			hoverable: !0,
			itemStyle: {
				normal: {
					borderColor: "rgba(0,0,0,0)",
					borderWidth: 1,
					areaStyle: {
						color: "#ccc"
					},
					label: {
						show: !1,
						textStyle: {
							color: "rgb(139,69,19)"
						}
					}
				},
				emphasis: {
					borderColor: "rgba(0,0,0,0)",
					borderWidth: 1,
					areaStyle: {
						color: "rgba(255,215,0,0.8)"
					},
					label: {
						show: !1,
						textStyle: {
							color: "rgb(100,0,0)"
						}
					}
				}
			}
		},
		force: {
			center: ["50%", "50%"],
			size: "100%",
			coolDown: .99,
			minRadius: 10,
			maxRadius: 20,
			ratioScaling: !1,
			large: !1,
			useWorker: !1,
			steps: 1,
			scaling: 1,
			gravity: 1,
			symbol: "circle",
			symbolSize: 0,
			linkSymbol: null,
			linkSymbolSize: [10, 15],
			draggable: !0,
			categories: [{}],
			itemStyle: {
				normal: {
					label: {
						show: !1
					},
					nodeStyle: {
						brushType: "both",
						color: "#f08c2e",
						strokeColor: "#5182ab",
						lineWidth: 1
					},
					linkStyle: {
						strokeColor: "#5182ab"
					}
				},
				emphasis: {
					label: {
						show: !1
					},
					nodeStyle: {},
					linkStyle: {
						opacity: 0
					}
				}
			}
		},
		chord: {
			radius: ["65%", "75%"],
			center: ["50%", "50%"],
			padding: 2,
			sort: "none",
			sortSub: "none",
			startAngle: 90,
			clockWise: !0,
			showScale: !1,
			showScaleText: !1,
			itemStyle: {
				normal: {
					label: {
						show: !0,
						rotate: !1,
						distance: 10
					},
					lineStyle: {
						width: 0,
						color: "#000"
					},
					chordStyle: {
						lineStyle: {
							width: 1,
							color: "#999"
						}
					}
				},
				emphasis: {
					lineStyle: {
						width: 0,
						color: "#000"
					},
					chordStyle: {
						lineStyle: {
							width: 1,
							color: "#666"
						}
					}
				}
			},
			matrix: []
		},
		gauge: {
			center: ["50%", "50%"],
			radius: "75%",
			startAngle: 225,
			endAngle: -45,
			min: 0,
			max: 100,
			precision: 0,
			splitNumber: 10,
			axisLine: {
				show: !0,
				lineStyle: {
					color: [
						[.2, "#228b22"],
						[.8, "#48b"],
						[1, "#ff4500"]
					],
					width: 30
				}
			},
			axisTick: {
				show: !0,
				splitNumber: 5,
				length: 8,
				lineStyle: {
					color: "#eee",
					width: 1,
					type: "solid"
				}
			},
			axisLabel: {
				show: !0,
				textStyle: {
					color: "auto"
				}
			},
			splitLine: {
				show: !0,
				length: 30,
				lineStyle: {
					color: "#eee",
					width: 2,
					type: "solid"
				}
			},
			pointer: {
				show: !0,
				length: "80%",
				width: 8,
				color: "auto"
			},
			title: {
				show: !0,
				offsetCenter: [0, "-40%"],
				textStyle: {
					color: "#333",
					fontSize: 15
				}
			},
			detail: {
				show: !0,
				backgroundColor: "rgba(0,0,0,0)",
				borderWidth: 0,
				borderColor: "#ccc",
				width: 100,
				height: 40,
				offsetCenter: [0, "40%"],
				textStyle: {
					color: "auto",
					fontSize: 30
				}
			}
		},
		funnel: {
			x: 80,
			y: 60,
			x2: 80,
			y2: 60,
			min: 0,
			max: 100,
			minSize: "0%",
			maxSize: "100%",
			sort: "descending",
			gap: 0,
			itemStyle: {
				normal: {
					borderColor: "#fff",
					borderWidth: 1,
					label: {
						show: !0,
						position: "outer"
					},
					labelLine: {
						show: !0,
						length: 10,
						lineStyle: {
							width: 1,
							type: "solid"
						}
					}
				},
				emphasis: {
					borderColor: "rgba(0,0,0,0)",
					borderWidth: 1,
					label: {
						show: !0
					},
					labelLine: {
						show: !0
					}
				}
			}
		},
		island: {
			r: 15,
			calculateStep: .1
		},
		markPoint: {
			symbol: "pin",
			symbolSize: 10,
			large: !1,
			effect: {
				show: !1,
				loop: !0,
				period: 15,
				scaleSize: 2
			},
			itemStyle: {
				normal: {
					borderWidth: 2,
					label: {
						show: !0,
						position: "inside"
					}
				},
				emphasis: {
					label: {
						show: !0
					}
				}
			}
		},
		markLine: {
			symbol: ["circle", "arrow"],
			symbolSize: [2, 4],
			large: !1,
			effect: {
				show: !1,
				loop: !0,
				period: 15,
				scaleSize: 2
			},
			itemStyle: {
				normal: {
					borderWidth: 1.5,
					label: {
						show: !0,
						position: "end"
					},
					lineStyle: {
						type: "dashed"
					}
				},
				emphasis: {
					label: {
						show: !1
					},
					lineStyle: {}
				}
			}
		},
		textStyle: {
			decoration: "none",
			fontFamily: "Arial, Verdana, sans-serif",
			fontFamily2: "微软雅黑",
			fontSize: 12,
			fontStyle: "normal",
			fontWeight: "normal"
		},
		EVENT: {
			REFRESH: "refresh",
			RESTORE: "restore",
			RESIZE: "resize",
			CLICK: "click",
			HOVER: "hover",
			DATA_CHANGED: "dataChanged",
			DATA_ZOOM: "dataZoom",
			DATA_RANGE: "dataRange",
			LEGEND_SELECTED: "legendSelected",
			MAP_SELECTED: "mapSelected",
			PIE_SELECTED: "pieSelected",
			MAGIC_TYPE_CHANGED: "magicTypeChanged",
			DATA_VIEW_CHANGED: "dataViewChanged",
			TIMELINE_CHANGED: "timelineChanged",
			MAP_ROAM: "mapRoam",
			TOOLTIP_HOVER: "tooltipHover",
			TOOLTIP_IN_GRID: "tooltipInGrid",
			TOOLTIP_OUT_GRID: "tooltipOutGrid"
		},
		DRAG_ENABLE_TIME: 120,
		EFFECT_ZLEVEL: 7,
		symbolList: ["circle", "rectangle", "triangle", "diamond", "emptyCircle", "emptyRectangle", "emptyTriangle", "emptyDiamond"],
		loadingText: "Loading...",
		calculable: !1,
		calculableColor: "rgba(255,165,0,0.6)",
		calculableHolderColor: "#ccc",
		nameConnector: " & ",
		valueConnector: " : ",
		animation: !0,
		addDataAnimation: !0,
		animationThreshold: 2e3,
		animationDuration: 2e3,
		animationEasing: "ExponentialOut"
	};
	return e
}), define("zrender/lib/excanvas", ["require"], function(e) {
	return document.createElement("canvas").getContext ? G_vmlCanvasManager = !1 : function() {
		function f() {
			return this.context_ || (this.context_ = new I(this))
		}

		function c(e, t, n) {
			var r = l.call(arguments, 2);
			return function() {
				return e.apply(t, r.concat(l.call(arguments)))
			}
		}

		function h(e) {
			return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
		}

		function p(e, t, n) {
			e.namespaces[t] || e.namespaces.add(t, n, "#default#VML")
		}

		function d(e) {
			p(e, "g_vml_", "urn:schemas-microsoft-com:vml"), p(e, "g_o_", "urn:schemas-microsoft-com:office:office");
			if (!e.styleSheets.ex_canvas_) {
				var t = e.createStyleSheet();
				t.owningElement.id = "ex_canvas_", t.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"
			}
		}

		function m(e) {
			var t = e.srcElement;
			switch (e.propertyName) {
				case "width":
					t.getContext().clearRect(), t.style.width = t.attributes.width.nodeValue + "px", t.firstChild.style.width = t.clientWidth + "px";
					break;
				case "height":
					t.getContext().clearRect(), t.style.height = t.attributes.height.nodeValue + "px", t.firstChild.style.height = t.clientHeight + "px"
			}
		}

		function g(e) {
			var t = e.srcElement;
			t.firstChild && (t.firstChild.style.width = t.clientWidth + "px", t.firstChild.style.height = t.clientHeight + "px")
		}

		function E() {
			return [
				[1, 0, 0],
				[0, 1, 0],
				[0, 0, 1]
			]
		}

		function S(e, t) {
			var n = E();
			for (var r = 0; r < 3; r++)
				for (var i = 0; i < 3; i++) {
					var s = 0;
					for (var o = 0; o < 3; o++) s += e[r][o] * t[o][i];
					n[r][i] = s
				}
			return n
		}

		function x(e, t) {
			t.fillStyle = e.fillStyle, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.lineWidth = e.lineWidth, t.miterLimit = e.miterLimit, t.shadowBlur = e.shadowBlur, t.shadowColor = e.shadowColor, t.shadowOffsetX = e.shadowOffsetX, t.shadowOffsetY = e.shadowOffsetY, t.strokeStyle = e.strokeStyle, t.globalAlpha = e.globalAlpha, t.font = e.font, t.textAlign = e.textAlign, t.textBaseline = e.textBaseline, t.arcScaleX_ = e.arcScaleX_, t.arcScaleY_ = e.arcScaleY_, t.lineScale_ = e.lineScale_
		}

		function N(e) {
			var t = e.indexOf("(", 3),
				n = e.indexOf(")", t + 1),
				r = e.substring(t + 1, n).split(",");
			if (r.length != 4 || e.charAt(3) != "a") r[3] = 1;
			return r
		}

		function C(e) {
			return parseFloat(e) / 100
		}

		function k(e, t, n) {
			return Math.min(n, Math.max(t, e))
		}

		function L(e) {
			var t, n, r, i, s, o;
			i = parseFloat(e[0]) / 360 % 360, i < 0 && i++, s = k(C(e[1]), 0, 1), o = k(C(e[2]), 0, 1);
			if (s == 0) t = n = r = o;
			else {
				var u = o < .5 ? o * (1 + s) : o + s - o * s,
					a = 2 * o - u;
				t = A(a, u, i + 1 / 3), n = A(a, u, i), r = A(a, u, i - 1 / 3)
			}
			return "#" + y[Math.floor(t * 255)] + y[Math.floor(n * 255)] + y[Math.floor(r * 255)]
		}

		function A(e, t, n) {
			return n < 0 && n++, n > 1 && n--, 6 * n < 1 ? e + (t - e) * 6 * n : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
		}

		function M(e) {
			if (e in O) return O[e];
			var t, n = 1;
			e = String(e);
			if (e.charAt(0) == "#") t = e;
			else if (/^rgb/.test(e)) {
				var r = N(e),
					t = "#",
					i;
				for (var s = 0; s < 3; s++) r[s].indexOf("%") != -1 ? i = Math.floor(C(r[s]) * 255) : i = +r[s], t += y[k(i, 0, 255)];
				n = +r[3]
			} else if (/^hsl/.test(e)) {
				var r = N(e);
				t = L(r), n = r[3]
			} else t = T[e] || e;
			return O[e] = {
				color: t,
				alpha: n
			}
		}

		function P(e) {
			if (D[e]) return D[e];
			var t = document.createElement("div"),
				n = t.style,
				r;
			try {
				n.font = e, r = n.fontFamily.split(",")[0]
			} catch (i) {}
			return D[e] = {
				style: n.fontStyle || _.style,
				variant: n.fontVariant || _.variant,
				weight: n.fontWeight || _.weight,
				size: n.fontSize || _.size,
				family: r || _.family
			}
		}

		function H(e, t) {
			var n = {};
			for (var r in e) n[r] = e[r];
			var i = parseFloat(t.currentStyle.fontSize),
				s = parseFloat(e.size);
			return typeof e.size == "number" ? n.size = e.size : e.size.indexOf("px") != -1 ? n.size = s : e.size.indexOf("em") != -1 ? n.size = i * s : e.size.indexOf("%") != -1 ? n.size = i / 100 * s : e.size.indexOf("pt") != -1 ? n.size = s / .75 : n.size = i, n
		}

		function B(e) {
			return e.style + " " + e.variant + " " + e.weight + " " + e.size + "px '" + e.family + "'"
		}

		function F(e) {
			return j[e] || "square"
		}

		function I(e) {
			this.m_ = E(), this.mStack_ = [], this.aStack_ = [], this.currentPath_ = [], this.strokeStyle = "#000", this.fillStyle = "#000", this.lineWidth = 1, this.lineJoin = "miter", this.lineCap = "butt", this.miterLimit = o * 1, this.globalAlpha = 1, this.font = "12px 微软雅黑", this.textAlign = "left", this.textBaseline = "alphabetic", this.canvas = e;
			var t = "width:" + e.clientWidth + "px;height:" + e.clientHeight + "px;overflow:hidden;position:absolute",
				n = e.ownerDocument.createElement("div");
			n.style.cssText = t, e.appendChild(n);
			var r = n.cloneNode(!1);
			r.style.backgroundColor = "#fff", r.style.filter = "alpha(opacity=0)", e.appendChild(r), this.element_ = n, this.arcScaleX_ = 1, this.arcScaleY_ = 1, this.lineScale_ = 1
		}

		function R(e, t, n, r) {
			e.currentPath_.push({
				type: "bezierCurveTo",
				cp1x: t.x,
				cp1y: t.y,
				cp2x: n.x,
				cp2y: n.y,
				x: r.x,
				y: r.y
			}), e.currentX_ = r.x, e.currentY_ = r.y
		}

		function U(e, t) {
			var n = M(e.strokeStyle),
				r = n.color,
				i = n.alpha * e.globalAlpha,
				s = e.lineScale_ * e.lineWidth;
			s < 1 && (i *= s), t.push("<g_vml_:stroke", ' opacity="', i, '"', ' joinstyle="', e.lineJoin, '"', ' miterlimit="', e.miterLimit, '"', ' endcap="', F(e.lineCap), '"', ' weight="', s, 'px"', ' color="', r, '" />')
		}

		function z(t, n, r, i) {
			var s = t.fillStyle,
				u = t.arcScaleX_,
				a = t.arcScaleY_,
				f = i.x - r.x,
				l = i.y - r.y;
			if (s instanceof $) {
				var c = 0,
					h = {
						x: 0,
						y: 0
					},
					p = 0,
					d = 1;
				if (s.type_ == "gradient") {
					var v = s.x0_ / u,
						m = s.y0_ / a,
						g = s.x1_ / u,
						y = s.y1_ / a,
						b = W(t, v, m),
						w = W(t, g, y),
						E = w.x - b.x,
						S = w.y - b.y;
					c = Math.atan2(E, S) * 180 / Math.PI, c < 0 && (c += 360), c < 1e-6 && (c = 0)
				} else {
					var b = W(t, s.x0_, s.y0_);
					h = {
						x: (b.x - r.x) / f,
						y: (b.y - r.y) / l
					}, f /= u * o, l /= a * o;
					var x = e.max(f, l);
					p = 2 * s.r0_ / x, d = 2 * s.r1_ / x - p
				}
				var T = s.colors_;
				T.sort(function(e, t) {
					return e.offset - t.offset
				});
				var N = T.length,
					C = T[0].color,
					k = T[N - 1].color,
					L = T[0].alpha * t.globalAlpha,
					A = T[N - 1].alpha * t.globalAlpha,
					O = [];
				for (var _ = 0; _ < N; _++) {
					var D = T[_];
					O.push(D.offset * d + p + " " + D.color)
				}
				n.push('<g_vml_:fill type="', s.type_, '"', ' method="none" focus="100%"', ' color="', C, '"', ' color2="', k, '"', ' colors="', O.join(","), '"', ' opacity="', A, '"', ' g_o_:opacity2="', L, '"', ' angle="', c, '"', ' focusposition="', h.x, ",", h.y, '" />')
			} else if (s instanceof J) {
				if (f && l) {
					var P = -r.x,
						H = -r.y;
					n.push("<g_vml_:fill", ' position="', P / f * u * u, ",", H / l * a * a, '"', ' type="tile"', ' src="', s.src_, '" />')
				}
			} else {
				var B = M(t.fillStyle),
					j = B.color,
					F = B.alpha * t.globalAlpha;
				n.push('<g_vml_:fill color="', j, '" opacity="', F, '" />')
			}
		}

		function W(e, t, n) {
			var r = e.m_;
			return {
				x: o * (t * r[0][0] + n * r[1][0] + r[2][0]) - u,
				y: o * (t * r[0][1] + n * r[1][1] + r[2][1]) - u
			}
		}

		function X(e) {
			return isFinite(e[0][0]) && isFinite(e[0][1]) && isFinite(e[1][0]) && isFinite(e[1][1]) && isFinite(e[2][0]) && isFinite(e[2][1])
		}

		function V(e, t, n) {
			if (!X(t)) return;
			e.m_ = t;
			if (n) {
				var r = t[0][0] * t[1][1] - t[0][1] * t[1][0];
				e.lineScale_ = s(i(r))
			}
		}

		function $(e) {
			this.type_ = e, this.x0_ = 0, this.y0_ = 0, this.r0_ = 0, this.x1_ = 0, this.y1_ = 0, this.r1_ = 0, this.colors_ = []
		}

		function J(e, t) {
			Q(e);
			switch (t) {
				case "repeat":
				case null:
				case "":
					this.repetition_ = "repeat";
					break;
				case "repeat-x":
				case "repeat-y":
				case "no-repeat":
					this.repetition_ = t;
					break;
				default:
					K("SYNTAX_ERR")
			}
			this.src_ = e.src, this.width_ = e.width, this.height_ = e.height
		}

		function K(e) {
			throw new G(e)
		}

		function Q(e) {
			(!e || e.nodeType != 1 || e.tagName != "IMG") && K("TYPE_MISMATCH_ERR"), e.readyState != "complete" && K("INVALID_STATE_ERR")
		}

		function G(e) {
			this.code = this[e], this.message = e + ": DOM Exception " + this.code
		}
		var e = Math,
			t = e.round,
			n = e.sin,
			r = e.cos,
			i = e.abs,
			s = e.sqrt,
			o = 10,
			u = o / 2,
			a = +navigator.userAgent.match(/MSIE ([\d.]+)?/)[1],
			l = Array.prototype.slice;
		d(document);
		var v = {
			init: function(e) {
				var t = e || document;
				t.createElement("canvas"), t.attachEvent("onreadystatechange", c(this.init_, this, t))
			},
			init_: function(e) {
				var t = e.getElementsByTagName("canvas");
				for (var n = 0; n < t.length; n++) this.initElement(t[n])
			},
			initElement: function(e) {
				if (!e.getContext) {
					e.getContext = f, d(e.ownerDocument), e.innerHTML = "", e.attachEvent("onpropertychange", m), e.attachEvent("onresize", g);
					var t = e.attributes;
					t.width && t.width.specified ? e.style.width = t.width.nodeValue + "px" : e.width = e.clientWidth, t.height && t.height.specified ? e.style.height = t.height.nodeValue + "px" : e.height = e.clientHeight
				}
				return e
			}
		};
		v.init();
		var y = [];
		for (var b = 0; b < 16; b++)
			for (var w = 0; w < 16; w++) y[b * 16 + w] = b.toString(16) + w.toString(16);
		var T = {
				aliceblue: "#F0F8FF",
				antiquewhite: "#FAEBD7",
				aquamarine: "#7FFFD4",
				azure: "#F0FFFF",
				beige: "#F5F5DC",
				bisque: "#FFE4C4",
				black: "#000000",
				blanchedalmond: "#FFEBCD",
				blueviolet: "#8A2BE2",
				brown: "#A52A2A",
				burlywood: "#DEB887",
				cadetblue: "#5F9EA0",
				chartreuse: "#7FFF00",
				chocolate: "#D2691E",
				coral: "#FF7F50",
				cornflowerblue: "#6495ED",
				cornsilk: "#FFF8DC",
				crimson: "#DC143C",
				cyan: "#00FFFF",
				darkblue: "#00008B",
				darkcyan: "#008B8B",
				darkgoldenrod: "#B8860B",
				darkgray: "#A9A9A9",
				darkgreen: "#006400",
				darkgrey: "#A9A9A9",
				darkkhaki: "#BDB76B",
				darkmagenta: "#8B008B",
				darkolivegreen: "#556B2F",
				darkorange: "#FF8C00",
				darkorchid: "#9932CC",
				darkred: "#8B0000",
				darksalmon: "#E9967A",
				darkseagreen: "#8FBC8F",
				darkslateblue: "#483D8B",
				darkslategray: "#2F4F4F",
				darkslategrey: "#2F4F4F",
				darkturquoise: "#00CED1",
				darkviolet: "#9400D3",
				deeppink: "#FF1493",
				deepskyblue: "#00BFFF",
				dimgray: "#696969",
				dimgrey: "#696969",
				dodgerblue: "#1E90FF",
				firebrick: "#B22222",
				floralwhite: "#FFFAF0",
				forestgreen: "#228B22",
				gainsboro: "#DCDCDC",
				ghostwhite: "#F8F8FF",
				gold: "#FFD700",
				goldenrod: "#DAA520",
				grey: "#808080",
				greenyellow: "#ADFF2F",
				honeydew: "#F0FFF0",
				hotpink: "#FF69B4",
				indianred: "#CD5C5C",
				indigo: "#4B0082",
				ivory: "#FFFFF0",
				khaki: "#F0E68C",
				lavender: "#E6E6FA",
				lavenderblush: "#FFF0F5",
				lawngreen: "#7CFC00",
				lemonchiffon: "#FFFACD",
				lightblue: "#ADD8E6",
				lightcoral: "#F08080",
				lightcyan: "#E0FFFF",
				lightgoldenrodyellow: "#FAFAD2",
				lightgreen: "#90EE90",
				lightgrey: "#D3D3D3",
				lightpink: "#FFB6C1",
				lightsalmon: "#FFA07A",
				lightseagreen: "#20B2AA",
				lightskyblue: "#87CEFA",
				lightslategray: "#778899",
				lightslategrey: "#778899",
				lightsteelblue: "#B0C4DE",
				lightyellow: "#FFFFE0",
				limegreen: "#32CD32",
				linen: "#FAF0E6",
				magenta: "#FF00FF",
				mediumaquamarine: "#66CDAA",
				mediumblue: "#0000CD",
				mediumorchid: "#BA55D3",
				mediumpurple: "#9370DB",
				mediumseagreen: "#3CB371",
				mediumslateblue: "#7B68EE",
				mediumspringgreen: "#00FA9A",
				mediumturquoise: "#48D1CC",
				mediumvioletred: "#C71585",
				midnightblue: "#191970",
				mintcream: "#F5FFFA",
				mistyrose: "#FFE4E1",
				moccasin: "#FFE4B5",
				navajowhite: "#FFDEAD",
				oldlace: "#FDF5E6",
				olivedrab: "#6B8E23",
				orange: "#FFA500",
				orangered: "#FF4500",
				orchid: "#DA70D6",
				palegoldenrod: "#EEE8AA",
				palegreen: "#98FB98",
				paleturquoise: "#AFEEEE",
				palevioletred: "#DB7093",
				papayawhip: "#FFEFD5",
				peachpuff: "#FFDAB9",
				peru: "#CD853F",
				pink: "#FFC0CB",
				plum: "#DDA0DD",
				powderblue: "#B0E0E6",
				rosybrown: "#BC8F8F",
				royalblue: "#4169E1",
				saddlebrown: "#8B4513",
				salmon: "#FA8072",
				sandybrown: "#F4A460",
				seagreen: "#2E8B57",
				seashell: "#FFF5EE",
				sienna: "#A0522D",
				skyblue: "#87CEEB",
				slateblue: "#6A5ACD",
				slategray: "#708090",
				slategrey: "#708090",
				snow: "#FFFAFA",
				springgreen: "#00FF7F",
				steelblue: "#4682B4",
				tan: "#D2B48C",
				thistle: "#D8BFD8",
				tomato: "#FF6347",
				turquoise: "#40E0D0",
				violet: "#EE82EE",
				wheat: "#F5DEB3",
				whitesmoke: "#F5F5F5",
				yellowgreen: "#9ACD32"
			},
			O = {},
			_ = {
				style: "normal",
				variant: "normal",
				weight: "normal",
				size: 12,
				family: "微软雅黑"
			},
			D = {},
			j = {
				butt: "flat",
				round: "round"
			},
			q = I.prototype;
		q.clearRect = function() {
			this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null), this.element_.innerHTML = ""
		}, q.beginPath = function() {
			this.currentPath_ = []
		}, q.moveTo = function(e, t) {
			var n = W(this, e, t);
			this.currentPath_.push({
				type: "moveTo",
				x: n.x,
				y: n.y
			}), this.currentX_ = n.x, this.currentY_ = n.y
		}, q.lineTo = function(e, t) {
			var n = W(this, e, t);
			this.currentPath_.push({
				type: "lineTo",
				x: n.x,
				y: n.y
			}), this.currentX_ = n.x, this.currentY_ = n.y
		}, q.bezierCurveTo = function(e, t, n, r, i, s) {
			var o = W(this, i, s),
				u = W(this, e, t),
				a = W(this, n, r);
			R(this, u, a, o)
		}, q.quadraticCurveTo = function(e, t, n, r) {
			var i = W(this, e, t),
				s = W(this, n, r),
				o = {
					x: this.currentX_ + 2 / 3 * (i.x - this.currentX_),
					y: this.currentY_ + 2 / 3 * (i.y - this.currentY_)
				},
				u = {
					x: o.x + (s.x - this.currentX_) / 3,
					y: o.y + (s.y - this.currentY_) / 3
				};
			R(this, o, u, s)
		}, q.arc = function(e, t, i, s, a, f) {
			i *= o;
			var l = f ? "at" : "wa",
				c = e + r(s) * i - u,
				h = t + n(s) * i - u,
				p = e + r(a) * i - u,
				d = t + n(a) * i - u;
			c == p && !f && (c += .125);
			var v = W(this, e, t),
				m = W(this, c, h),
				g = W(this, p, d);
			this.currentPath_.push({
				type: l,
				x: v.x,
				y: v.y,
				radius: i,
				xStart: m.x,
				yStart: m.y,
				xEnd: g.x,
				yEnd: g.y
			})
		}, q.rect = function(e, t, n, r) {
			this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.closePath()
		}, q.strokeRect = function(e, t, n, r) {
			var i = this.currentPath_;
			this.beginPath(), this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.closePath(), this.stroke(), this.currentPath_ = i
		}, q.fillRect = function(e, t, n, r) {
			var i = this.currentPath_;
			this.beginPath(), this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.closePath(), this.fill(), this.currentPath_ = i
		}, q.createLinearGradient = function(e, t, n, r) {
			var i = new $("gradient");
			return i.x0_ = e, i.y0_ = t, i.x1_ = n, i.y1_ = r, i
		}, q.createRadialGradient = function(e, t, n, r, i, s) {
			var o = new $("gradientradial");
			return o.x0_ = e, o.y0_ = t, o.r0_ = n, o.x1_ = r, o.y1_ = i, o.r1_ = s, o
		}, q.drawImage = function(n, r) {
			var i, s, u, a, f, l, c, h, p = n.runtimeStyle.width,
				d = n.runtimeStyle.height;
			n.runtimeStyle.width = "auto", n.runtimeStyle.height = "auto";
			var v = n.width,
				m = n.height;
			n.runtimeStyle.width = p, n.runtimeStyle.height = d;
			if (arguments.length == 3) i = arguments[1], s = arguments[2], f = l = 0, c = u = v, h = a = m;
			else if (arguments.length == 5) i = arguments[1], s = arguments[2], u = arguments[3], a = arguments[4], f = l = 0, c = v, h = m;
			else {
				if (arguments.length != 9) throw Error("Invalid number of arguments");
				f = arguments[1], l = arguments[2], c = arguments[3], h = arguments[4], i = arguments[5], s = arguments[6], u = arguments[7], a = arguments[8]
			}
			var g = W(this, i, s),
				y = c / 2,
				b = h / 2,
				w = [],
				E = 10,
				S = 10,
				x = scaleY = 1;
			w.push(" <g_vml_:group", ' coordsize="', o * E, ",", o * S, '"', ' coordorigin="0,0"', ' style="width:', E, "px;height:", S, "px;position:absolute;");
			if (this.m_[0][0] != 1 || this.m_[0][1] || this.m_[1][1] != 1 || this.m_[1][0]) {
				var T = [];
				x = Math.sqrt(this.m_[0][0] * this.m_[0][0] + this.m_[0][1] * this.m_[0][1]), scaleY = Math.sqrt(this.m_[1][0] * this.m_[1][0] + this.m_[1][1] * this.m_[1][1]), T.push("M11=", this.m_[0][0] / x, ",", "M12=", this.m_[1][0] / scaleY, ",", "M21=", this.m_[0][1] / x, ",", "M22=", this.m_[1][1] / scaleY, ",", "Dx=", t(g.x / o), ",", "Dy=", t(g.y / o), "");
				var N = g,
					C = W(this, i + u, s),
					k = W(this, i, s + a),
					L = W(this, i + u, s + a);
				N.x = e.max(N.x, C.x, k.x, L.x), N.y = e.max(N.y, C.y, k.y, L.y), w.push("padding:0 ", t(N.x / o), "px ", t(N.y / o), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", T.join(""), ", sizingmethod='clip');")
			} else w.push("top:", t(g.y / o), "px;left:", t(g.x / o), "px;");
			w.push(' ">'), (f || l) && w.push('<div style="overflow: hidden; width:', Math.ceil((u + f * u / c) * x), "px;", " height:", Math.ceil((a + l * a / h) * scaleY), "px;", " filter:progid:DxImageTransform.Microsoft.Matrix(Dx=", -f * u / c * x, ",Dy=", -l * a / h * scaleY, ');">'), w.push('<div style="width:', Math.round(x * v * u / c), "px;", " height:", Math.round(scaleY * m * a / h), "px;", " filter:"), this.globalAlpha < 1 && w.push(" progid:DXImageTransform.Microsoft.Alpha(opacity=" + this.globalAlpha * 100 + ")"), w.push(" progid:DXImageTransform.Microsoft.AlphaImageLoader(src=", n.src, ',sizingMethod=scale)">'), (f || l) && w.push("</div>"), w.push("</div></div>"), this.element_.insertAdjacentHTML("BeforeEnd", w.join(""))
		}, q.stroke = function(e) {
			var n = [],
				r = !1,
				i = 10,
				s = 10;
			n.push("<g_vml_:shape", ' filled="', !!e, '"', ' style="position:absolute;width:', i, "px;height:", s, 'px;"', ' coordorigin="0,0"', ' coordsize="', o * i, ",", o * s, '"', ' stroked="', !e, '"', ' path="');
			var u = !1,
				a = {
					x: null,
					y: null
				},
				f = {
					x: null,
					y: null
				};
			for (var l = 0; l < this.currentPath_.length; l++) {
				var c = this.currentPath_[l],
					h;
				switch (c.type) {
					case "moveTo":
						h = c, n.push(" m ", t(c.x), ",", t(c.y));
						break;
					case "lineTo":
						n.push(" l ", t(c.x), ",", t(c.y));
						break;
					case "close":
						n.push(" x "), c = null;
						break;
					case "bezierCurveTo":
						n.push(" c ", t(c.cp1x), ",", t(c.cp1y), ",", t(c.cp2x), ",", t(c.cp2y), ",", t(c.x), ",", t(c.y));
						break;
					case "at":
					case "wa":
						n.push(" ", c.type, " ", t(c.x - this.arcScaleX_ * c.radius), ",", t(c.y - this.arcScaleY_ * c.radius), " ", t(c.x + this.arcScaleX_ * c.radius), ",", t(c.y + this.arcScaleY_ * c.radius), " ", t(c.xStart), ",", t(c.yStart), " ", t(c.xEnd), ",", t(c.yEnd))
				}
				if (c) {
					if (a.x == null || c.x < a.x) a.x = c.x;
					if (f.x == null || c.x > f.x) f.x = c.x;
					if (a.y == null || c.y < a.y) a.y = c.y;
					if (f.y == null || c.y > f.y) f.y = c.y
				}
			}
			n.push(' ">'), e ? z(this, n, a, f) : U(this, n), n.push("</g_vml_:shape>"), this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
		}, q.fill = function() {
			this.stroke(!0)
		}, q.closePath = function() {
			this.currentPath_.push({
				type: "close"
			})
		}, q.save = function() {
			var e = {};
			x(this, e), this.aStack_.push(e), this.mStack_.push(this.m_), this.m_ = S(E(), this.m_)
		}, q.restore = function() {
			this.aStack_.length && (x(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
		}, q.translate = function(e, t) {
			var n = [
				[1, 0, 0],
				[0, 1, 0],
				[e, t, 1]
			];
			V(this, S(n, this.m_), !1)
		}, q.rotate = function(e) {
			var t = r(e),
				i = n(e),
				s = [
					[t, i, 0],
					[-i, t, 0],
					[0, 0, 1]
				];
			V(this, S(s, this.m_), !1)
		}, q.scale = function(e, t) {
			this.arcScaleX_ *= e, this.arcScaleY_ *= t;
			var n = [
				[e, 0, 0],
				[0, t, 0],
				[0, 0, 1]
			];
			V(this, S(n, this.m_), !0)
		}, q.transform = function(e, t, n, r, i, s) {
			var o = [
				[e, t, 0],
				[n, r, 0],
				[i, s, 1]
			];
			V(this, S(o, this.m_), !0)
		}, q.setTransform = function(e, t, n, r, i, s) {
			var o = [
				[e, t, 0],
				[n, r, 0],
				[i, s, 1]
			];
			V(this, o, !0)
		}, q.drawText_ = function(e, n, r, i, s) {
			var u = this.m_,
				a = 1e3,
				f = 0,
				l = a,
				c = {
					x: 0,
					y: 0
				},
				p = [],
				d = H(P(this.font), this.element_),
				v = B(d),
				m = this.element_.currentStyle,
				g = this.textAlign.toLowerCase();
			switch (g) {
				case "left":
				case "center":
				case "right":
					break;
				case "end":
					g = m.direction == "ltr" ? "right" : "left";
					break;
				case "start":
					g = m.direction == "rtl" ? "right" : "left";
					break;
				default:
					g = "left"
			}
			switch (this.textBaseline) {
				case "hanging":
				case "top":
					c.y = d.size / 1.75;
					break;
				case "middle":
					break;
				default:
				case null:
				case "alphabetic":
				case "ideographic":
				case "bottom":
					c.y = -d.size / 2.25
			}
			switch (g) {
				case "right":
					f = a, l = .05;
					break;
				case "center":
					f = l = a / 2
			}
			var y = W(this, n + c.x, r + c.y);
			p.push('<g_vml_:line from="', -f, ' 0" to="', l, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !s, '" stroked="', !!s, '" style="position:absolute;width:1px;height:1px;">'), s ? U(this, p) : z(this, p, {
				x: -f,
				y: 0
			}, {
				x: l,
				y: d.size
			});
			var b = u[0][0].toFixed(3) + "," + u[1][0].toFixed(3) + "," + u[0][1].toFixed(3) + "," + u[1][1].toFixed(3) + ",0,0",
				w = t(y.x / o) + "," + t(y.y / o);
			p.push('<g_vml_:skew on="t" matrix="', b, '" ', ' offset="', w, '" origin="', f, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', h(e), '" style="v-text-align:', g, ";font:", h(v), '" /></g_vml_:line>'), this.element_.insertAdjacentHTML("beforeEnd", p.join(""))
		}, q.fillText = function(e, t, n, r) {
			this.drawText_(e, t, n, r, !1)
		}, q.strokeText = function(e, t, n, r) {
			this.drawText_(e, t, n, r, !0)
		}, q.measureText = function(e) {
			if (!this.textMeasureEl_) {
				var t = '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';
				this.element_.insertAdjacentHTML("beforeEnd", t), this.textMeasureEl_ = this.element_.lastChild
			}
			var n = this.element_.ownerDocument;
			return this.textMeasureEl_.innerHTML = "", this.textMeasureEl_.style.font = this.font, this.textMeasureEl_.appendChild(n.createTextNode(e)), {
				width: this.textMeasureEl_.offsetWidth
			}
		}, q.clip = function() {}, q.arcTo = function() {}, q.createPattern = function(e, t) {
			return new J(e, t)
		}, $.prototype.addColorStop = function(e, t) {
			t = M(t), this.colors_.push({
				offset: e,
				color: t.color,
				alpha: t.alpha
			})
		};
		var Y = G.prototype = new Error;
		Y.INDEX_SIZE_ERR = 1, Y.DOMSTRING_SIZE_ERR = 2, Y.HIERARCHY_REQUEST_ERR = 3, Y.WRONG_DOCUMENT_ERR = 4, Y.INVALID_CHARACTER_ERR = 5, Y.NO_DATA_ALLOWED_ERR = 6, Y.NO_MODIFICATION_ALLOWED_ERR = 7, Y.NOT_FOUND_ERR = 8, Y.NOT_SUPPORTED_ERR = 9, Y.INUSE_ATTRIBUTE_ERR = 10, Y.INVALID_STATE_ERR = 11, Y.SYNTAX_ERR = 12, Y.INVALID_MODIFICATION_ERR = 13, Y.NAMESPACE_ERR = 14, Y.INVALID_ACCESS_ERR = 15, Y.VALIDATION_ERR = 16, Y.TYPE_MISMATCH_ERR = 17, G_vmlCanvasManager = v, CanvasRenderingContext2D = I, CanvasGradient = $, CanvasPattern = J, DOMException = G
	}(), G_vmlCanvasManager
}), define("zrender/tool/util", ["require", "../lib/excanvas"], function(e) {
	function n(e) {
		if (typeof e == "object" && e !== null) {
			var r = e;
			if (e instanceof Array) {
				r = [];
				for (var i = 0, s = e.length; i < s; i++) r[i] = n(e[i])
			} else if (!t[Object.prototype.toString.call(e)]) {
				r = {};
				for (var o in e) e.hasOwnProperty(o) && (r[o] = n(e[o]))
			}
			return r
		}
		return e
	}

	function r(e, n, r, s) {
		if (n.hasOwnProperty(r))
			if (typeof e[r] == "object" && !t[Object.prototype.toString.call(e[r])]) i(e[r], n[r], s);
			else if (s || !(r in e)) e[r] = n[r]
	}

	function i(e, t, n) {
		for (var i in t) r(e, t, i, n);
		return e
	}

	function o() {
		if (!s) {
			e("../lib/excanvas");
			if (G_vmlCanvasManager) {
				var t = document.createElement("div");
				t.style.position = "absolute", t.style.top = "-1000px", document.body.appendChild(t), s = G_vmlCanvasManager.initElement(t).getContext("2d")
			} else s = document.createElement("canvas").getContext("2d")
		}
		return s
	}

	function p() {
		return a || (u = document.createElement("canvas"), f = u.width, l = u.height, a = u.getContext("2d")), a
	}

	function d(e, t) {
		var n = 100,
			r;
		e + c > f && (f = e + c + n, u.width = f, r = !0), t + h > l && (l = t + h + n, u.height = l, r = !0), e < -c && (c = Math.ceil(-e / n) * n, f += c, u.width = f, r = !0), t < -h && (h = Math.ceil(-t / n) * n, l += h, u.height = l, r = !0), r && a.translate(c, h)
	}

	function v() {
		return {
			x: c,
			y: h
		}
	}

	function m(e, t) {
		if (e.indexOf) return e.indexOf(t);
		for (var n = 0, r = e.length; n < r; n++)
			if (e[n] === t) return n;
		return -1
	}

	function g(e, t) {
		function r() {}
		var n = e.prototype;
		r.prototype = t.prototype, e.prototype = new r;
		for (var i in n) e.prototype[i] = n[i];
		e.constructor = e
	}
	var t = {
			"[object Function]": 1,
			"[object RegExp]": 1,
			"[object Date]": 1,
			"[object Error]": 1,
			"[object CanvasGradient]": 1
		},
		s, u, a, f, l, c = 0,
		h = 0;
	return {
		inherits: g,
		clone: n,
		merge: i,
		getContext: o,
		getPixelContext: p,
		getPixelOffset: v,
		adjustCanvasSize: d,
		indexOf: m
	}
}), define("zrender/tool/event", [], function() {
	function e(e) {
		return typeof e.zrenderX != "undefined" && e.zrenderX || typeof e.offsetX != "undefined" && e.offsetX || typeof e.layerX != "undefined" && e.layerX || typeof e.clientX != "undefined" && e.clientX
	}

	function t(e) {
		return typeof e.zrenderY != "undefined" && e.zrenderY || typeof e.offsetY != "undefined" && e.offsetY || typeof e.layerY != "undefined" && e.layerY || typeof e.clientY != "undefined" && e.clientY
	}

	function n(e) {
		return typeof e.wheelDelta != "undefined" && e.wheelDelta || typeof e.detail != "undefined" && -e.detail
	}

	function i() {
		this._handlers = {}
	}
	var r = typeof window.addEventListener == "function" ? function(e) {
		e.preventDefault(), e.stopPropagation()
	} : function(e) {
		e.returnValue = !1, e.cancelBubble = !0
	};
	return i.prototype.one = function(e, t, n) {
		var r = this._handlers;
		return !t || !e ? this : (r[e] || (r[e] = []), r[e].push({
			h: t,
			one: !0,
			ctx: n || this
		}), this)
	}, i.prototype.bind = function(e, t, n) {
		var r = this._handlers;
		return !t || !e ? this : (r[e] || (r[e] = []), r[e].push({
			h: t,
			one: !1,
			ctx: n || this
		}), this)
	}, i.prototype.unbind = function(e, t) {
		var n = this._handlers;
		if (!e) return this._handlers = {}, this;
		if (t) {
			if (n[e]) {
				var r = [];
				for (var i = 0, s = n[e].length; i < s; i++) n[e][i]["h"] != t && r.push(n[e][i]);
				n[e] = r
			}
			n[e] && n[e].length === 0 && delete n[e]
		} else delete n[e];
		return this
	}, i.prototype.dispatch = function(e) {
		var t = arguments,
			n = t.length;
		n > 3 && (t = Array.prototype.slice.call(t, 1));
		if (this._handlers[e]) {
			var r = this._handlers[e],
				i = r.length;
			for (var s = 0; s < i;) {
				switch (n) {
					case 1:
						r[s].h.call(r[s].ctx);
						break;
					case 2:
						r[s].h.call(r[s].ctx, t[1]);
						break;
					case 3:
						r[s].h.call(r[s].ctx, t[1], t[2]);
						break;
					default:
						r[s].h.apply(r[s].ctx, t)
				}
				r[s].one ? (r.splice(s, 1), i--) : s++
			}
		}
		return this
	}, i.prototype.dispatchWithContext = function(e) {
		var t = arguments,
			n = t.length;
		n > 4 && (t = Array.prototype.slice.call(t, 1, t.length - 1));
		var r = t[t.length - 1];
		if (this._handlers[e]) {
			var i = this._handlers[e],
				s = i.length;
			for (var o = 0; o < s;) {
				switch (n) {
					case 1:
						i[o].h.call(r);
						break;
					case 2:
						i[o].h.call(r, t[1]);
						break;
					case 3:
						i[o].h.call(r, t[1], t[2]);
						break;
					default:
						i[o].h.apply(r, t)
				}
				i[o].one ? (i.splice(o, 1), s--) : o++
			}
		}
		return this
	}, {
		getX: e,
		getY: t,
		getDelta: n,
		stop: r,
		Dispatcher: i
	}
}), define("zrender/tool/env", [], function() {
	function e(e) {
		var t = this.os = {},
			n = this.browser = {},
			r = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
			i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
			s = e.match(/(iPad).*OS\s([\d_]+)/),
			o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
			u = !s && e.match(/(iPhone\sOS)\s([\d_]+)/),
			a = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
			f = a && e.match(/TouchPad/),
			l = e.match(/Kindle\/([\d.]+)/),
			c = e.match(/Silk\/([\d._]+)/),
			h = e.match(/(BlackBerry).*Version\/([\d.]+)/),
			p = e.match(/(BB10).*Version\/([\d.]+)/),
			d = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
			v = e.match(/PlayBook/),
			m = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
			g = e.match(/Firefox\/([\d.]+)/),
			y = e.match(/MSIE ([\d.]+)/),
			b = r && e.match(/Mobile\//) && !m,
			w = e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !m,
			y = e.match(/MSIE\s([\d.]+)/);
		if (n.webkit = !!r) n.version = r[1];
		return i && (t.android = !0, t.version = i[2]), u && !o && (t.ios = t.iphone = !0, t.version = u[2].replace(/_/g, ".")), s && (t.ios = t.ipad = !0, t.version = s[2].replace(/_/g, ".")), o && (t.ios = t.ipod = !0, t.version = o[3] ? o[3].replace(/_/g, ".") : null), a && (t.webos = !0, t.version = a[2]), f && (t.touchpad = !0), h && (t.blackberry = !0, t.version = h[2]), p && (t.bb10 = !0, t.version = p[2]), d && (t.rimtabletos = !0, t.version = d[2]), v && (n.playbook = !0), l && (t.kindle = !0, t.version = l[1]), c && (n.silk = !0, n.version = c[1]), !c && t.android && e.match(/Kindle Fire/) && (n.silk = !0), m && (n.chrome = !0, n.version = m[1]), g && (n.firefox = !0, n.version = g[1]), y && (n.ie = !0, n.version = y[1]), b && (e.match(/Safari/) || !!t.ios) && (n.safari = !0), w && (n.webview = !0), y && (n.ie = !0, n.version = y[1]), t.tablet = !!(s || v || i && !e.match(/Mobile/) || g && e.match(/Tablet/) || y && !e.match(/Phone/) && e.match(/Touch/)), t.phone = !!(!t.tablet && !t.ipod && (i || u || a || h || p || m && e.match(/Android/) || m && e.match(/CriOS\/([\d.]+)/) || g && e.match(/Mobile/) || y && e.match(/Touch/))), {
			browser: n,
			os: t,
			canvasSupported: document.createElement("canvas").getContext ? !0 : !1
		}
	}
	return e(navigator.userAgent)
}), define("zrender/config", {
	EVENT: {
		RESIZE: "resize",
		CLICK: "click",
		MOUSEWHEEL: "mousewheel",
		MOUSEMOVE: "mousemove",
		MOUSEOVER: "mouseover",
		MOUSEOUT: "mouseout",
		MOUSEDOWN: "mousedown",
		MOUSEUP: "mouseup",
		GLOBALOUT: "globalout",
		DRAGSTART: "dragstart",
		DRAGEND: "dragend",
		DRAGENTER: "dragenter",
		DRAGOVER: "dragover",
		DRAGLEAVE: "dragleave",
		DROP: "drop",
		touchClickDelay: 300
	},
	catchBrushException: !1,
	debugMode: 0
}), define("zrender/tool/log", ["require", "../config"], function(e) {
	var t = e("../config");
	return function() {
		if (t.debugMode === 0) return;
		if (t.debugMode == 1)
			for (var e in arguments) throw new Error(arguments[e]);
		else if (t.debugMode > 1)
			for (var e in arguments) console.log(arguments[e])
	}
}), define("zrender/tool/guid", [], function() {
	var e = 2311;
	return function() {
		return "zrender__" + e++
	}
}), define("zrender/Handler", ["require", "./config", "./tool/env", "./tool/event", "./tool/util"], function(e) {
	function a(e, t) {
		return function(n) {
			return e.call(t, n)
		}
	}

	function f(e) {
		var t = o.length;
		while (t--) {
			var n = o[t];
			e["_" + n + "Handler"] = a(u[n], e)
		}
	}

	function l(e, t, i) {
		r.Dispatcher.call(this), this.root = e, this.storage = t, this.painter = i, this._lastX = this._lastY = this._mouseX = this._mouseY = 0, this._findHover = a(h, this), this._domHover = i.getDomHover(), f(this), window.addEventListener ? (window.addEventListener("resize", this._resizeHandler), n.os.tablet || n.os.phone ? (e.addEventListener("touchstart", this._touchstartHandler), e.addEventListener("touchmove", this._touchmoveHandler), e.addEventListener("touchend", this._touchendHandler)) : (e.addEventListener("click", this._clickHandler), e.addEventListener("mousewheel", this._mousewheelHandler), e.addEventListener("mousemove", this._mousemoveHandler), e.addEventListener("mousedown", this._mousedownHandler), e.addEventListener("mouseup", this._mouseupHandler)), e.addEventListener("DOMMouseScroll", this._mousewheelHandler), e.addEventListener("mouseout", this._mouseoutHandler)) : (window.attachEvent("onresize", this._resizeHandler), e.attachEvent("onclick", this._clickHandler), e.attachEvent("onmousewheel", this._mousewheelHandler), e.attachEvent("onmousemove", this._mousemoveHandler), e.attachEvent("onmouseout", this._mouseoutHandler), e.attachEvent("onmousedown", this._mousedownHandler), e.attachEvent("onmouseup", this._mouseupHandler))
	}

	function h(e) {
		if (this._draggingTarget && this._draggingTarget.id == e.id || e.isSilent()) return !1;
		var t = this._event;
		if (e.isCover(this._mouseX, this._mouseY)) {
			e.hoverable && this.storage.addHover(e);
			var n = e.parent;
			while (n) {
				if (n.clipShape && !n.clipShape.isCover(this._mouseX, this._mouseY)) return !1;
				n = n.parent
			}
			return this._lastHover != e && (this._processOutShape(t), this._processDragLeave(t), this._lastHover = e, this._processDragEnter(t)), this._processOverShape(t), this._processDragOver(t), this._hasfound = 1, !0
		}
		return !1
	}
	var t = e("./config"),
		n = e("./tool/env"),
		r = e("./tool/event"),
		i = e("./tool/util"),
		s = t.EVENT,
		o = ["resize", "click", "mousewheel", "mousemove", "mouseout", "mouseup", "mousedown", "touchstart", "touchend", "touchmove"],
		u = {
			resize: function(e) {
				e = e || window.event, this._lastHover = null, this._isMouseDown = 0, this.dispatch(s.RESIZE, e)
			},
			click: function(e) {
				e = this._zrenderEventFixed(e);
				var t = this._lastHover;
				(t && t.clickable || !t) && this._dispatchAgency(t, s.CLICK, e), this._mousemoveHandler(e)
			},
			mousewheel: function(e) {
				e = this._zrenderEventFixed(e), this._dispatchAgency(this._lastHover, s.MOUSEWHEEL, e), this._mousemoveHandler(e)
			},
			mousemove: function(e) {
				if (this.painter.isLoading()) return;
				e = this._zrenderEventFixed(e), this._lastX = this._mouseX, this._lastY = this._mouseY, this._mouseX = r.getX(e), this._mouseY = r.getY(e), this._processDragStart(e), this._hasfound = 0, this._event = e, this.storage.iterShape(this._findHover, {
					normal: "down"
				});
				if (!this._hasfound) {
					if (!this._draggingTarget || this._lastHover && this._lastHover != this._draggingTarget) this._processOutShape(e), this._processDragLeave(e);
					this._lastHover = null, this.storage.delHover(), this.painter.clearHover()
				}
				this._draggingTarget && (this.storage.drift(this._draggingTarget.id, this._mouseX - this._lastX, this._mouseY - this._lastY), this.storage.addHover(this._draggingTarget));
				var t = "default";
				this._draggingTarget || this._hasfound && this._lastHover.draggable ? t = "move" : this._hasfound && this._lastHover.clickable && (t = "pointer"), this.root.style.cursor = t, this._dispatchAgency(this._lastHover, s.MOUSEMOVE, e), (this._draggingTarget || this._hasfound || this.storage.hasHoverShape()) && this.painter.refreshHover()
			},
			mouseout: function(e) {
				e = this._zrenderEventFixed(e);
				var t = e.toElement || e.relatedTarget;
				if (t != this.root)
					while (t && t.nodeType != 9) {
						if (t == this.root) {
							this._mousemoveHandler(e);
							return
						}
						t = t.parentNode
					}
				e.zrenderX = this._lastX, e.zrenderY = this._lastY, this.root.style.cursor = "default", this._isMouseDown = 0, this._processOutShape(e), this._processDrop(e), this._processDragEnd(e), this.painter.isLoading() || this.painter.refreshHover(), this.dispatch(s.GLOBALOUT, e)
			},
			mousedown: function(e) {
				if (this._lastDownButton == 2) {
					this._lastDownButton = e.button, this._mouseDownTarget = null;
					return
				}
				this._lastMouseDownMoment = new Date, e = this._zrenderEventFixed(e), this._isMouseDown = 1, this._mouseDownTarget = this._lastHover, this._dispatchAgency(this._lastHover, s.MOUSEDOWN, e), this._lastDownButton = e.button
			},
			mouseup: function(e) {
				e = this._zrenderEventFixed(e), this.root.style.cursor = "default", this._isMouseDown = 0, this._mouseDownTarget = null, this._dispatchAgency(this._lastHover, s.MOUSEUP, e), this._processDrop(e), this._processDragEnd(e)
			},
			touchstart: function(e) {
				e = this._zrenderEventFixed(e, !0), this._lastTouchMoment = new Date, this._mobildFindFixed(e), this._mousedownHandler(e)
			},
			touchmove: function(e) {
				e = this._zrenderEventFixed(e, !0), this._mousemoveHandler(e), this._isDragging && r.stop(e)
			},
			touchend: function(e) {
				e = this._zrenderEventFixed(e, !0), this._mouseupHandler(e), new Date - this._lastTouchMoment < s.touchClickDelay && (this._mobildFindFixed(e), this._clickHandler(e)), this.painter.clearHover()
			}
		};
	l.prototype.on = function(e, t) {
		return this.bind(e, t), this
	}, l.prototype.un = function(e, t) {
		return this.unbind(e, t), this
	}, l.prototype.trigger = function(e, t) {
		switch (e) {
			case s.RESIZE:
			case s.CLICK:
			case s.MOUSEWHEEL:
			case s.MOUSEMOVE:
			case s.MOUSEDOWN:
			case s.MOUSEUP:
			case s.MOUSEOUT:
				this["_" + e + "Handler"](t)
		}
	}, l.prototype.dispose = function() {
		var e = this.root;
		window.removeEventListener ? (window.removeEventListener("resize", this._resizeHandler), n.os.tablet || n.os.phone ? (e.removeEventListener("touchstart", this._touchstartHandler), e.removeEventListener("touchmove", this._touchmoveHandler), e.removeEventListener("touchend", this._touchendHandler)) : (e.removeEventListener("click", this._clickHandler), e.removeEventListener("mousewheel", this._mousewheelHandler), e.removeEventListener("mousemove", this._mousemoveHandler), e.removeEventListener("mousedown", this._mousedownHandler), e.removeEventListener("mouseup", this._mouseupHandler)), e.removeEventListener("DOMMouseScroll", this._mousewheelHandler), e.removeEventListener("mouseout", this._mouseoutHandler)) : (window.detachEvent("onresize", this._resizeHandler), e.detachEvent("onclick", this._clickHandler), e.detachEvent("onmousewheel", this._mousewheelHandler), e.detachEvent("onmousemove", this._mousemoveHandler), e.detachEvent("onmouseout", this._mouseoutHandler), e.detachEvent("onmousedown", this._mousedownHandler), e.detachEvent("onmouseup", this._mouseupHandler)), this.root = this._domHover = this.storage = this.painter = null, this.un()
	}, l.prototype._processDragStart = function(e) {
		var t = this._lastHover;
		if (this._isMouseDown && t && t.draggable && !this._draggingTarget && this._mouseDownTarget == t) {
			if (t.dragEnableTime && new Date - this._lastMouseDownMoment < t.dragEnableTime) return;
			var n = t;
			this._draggingTarget = n, this._isDragging = 1, n.invisible = !0, this.storage.mod(n.id), this._dispatchAgency(n, s.DRAGSTART, e), this.painter.refresh()
		}
	}, l.prototype._processDragEnter = function(e) {
		this._draggingTarget && this._dispatchAgency(this._lastHover, s.DRAGENTER, e, this._draggingTarget)
	}, l.prototype._processDragOver = function(e) {
		this._draggingTarget && this._dispatchAgency(this._lastHover, s.DRAGOVER, e, this._draggingTarget)
	}, l.prototype._processDragLeave = function(e) {
		this._draggingTarget && this._dispatchAgency(this._lastHover, s.DRAGLEAVE, e, this._draggingTarget)
	}, l.prototype._processDrop = function(e) {
		this._draggingTarget && (this._draggingTarget.invisible = !1, this.storage.mod(this._draggingTarget.id), this.painter.refresh(), this._dispatchAgency(this._lastHover, s.DROP, e, this._draggingTarget))
	}, l.prototype._processDragEnd = function(e) {
		this._draggingTarget && (this._dispatchAgency(this._draggingTarget, s.DRAGEND, e), this._lastHover = null), this._isDragging = 0, this._draggingTarget = null
	}, l.prototype._processOverShape = function(e) {
		this._dispatchAgency(this._lastHover, s.MOUSEOVER, e)
	}, l.prototype._processOutShape = function(e) {
		this._dispatchAgency(this._lastHover, s.MOUSEOUT, e)
	}, l.prototype._dispatchAgency = function(e, t, n, r) {
		var i = "on" + t,
			s = {
				type: t,
				event: n,
				target: e,
				cancelBubble: !1
			},
			o = e;
		r && (s.dragged = r);
		while (o) {
			o[i] && o[i](s), o.dispatch(t, s), o = o.parent;
			if (s.cancelBubble) break
		}
		e ? s.cancelBubble || this.dispatch(t, s) : r || this.dispatch(t, {
			type: t,
			event: n
		})
	};
	var c = [{
		x: 10
	}, {
		x: -20
	}, {
		x: 10,
		y: 10
	}, {
		y: -20
	}];
	return l.prototype._mobildFindFixed = function(e) {
		this._lastHover = null, this._mouseX = e.zrenderX, this._mouseY = e.zrenderY, this._event = e, this.storage.iterShape(this._findHover, {
			normal: "down"
		});
		for (var t = 0; !this._lastHover && t < c.length; t++) {
			var n = c[t];
			n.x && (this._mouseX += n.x), n.y && (this._mouseX += n.y), this.storage.iterShape(this._findHover, {
				normal: "down"
			})
		}
		this._lastHover && (e.zrenderX = this._mouseX, e.zrenderY = this._mouseY)
	}, l.prototype._zrenderEventFixed = function(e, t) {
		if (e.zrenderFixed) return e;
		if (!t) {
			e = e || window.event;
			var n = e.toElement || e.relatedTarget || e.srcElement || e.target;
			n && n != this._domHover && (e.zrenderX = (typeof e.offsetX != "undefined" ? e.offsetX : e.layerX) + n.offsetLeft, e.zrenderY = (typeof e.offsetY != "undefined" ? e.offsetY : e.layerY) + n.offsetTop)
		} else {
			var r = e.type != "touchend" ? e.targetTouches[0] : e.changedTouches[0];
			if (r) {
				var i = this.root.getBoundingClientRect();
				e.zrenderX = r.clientX - i.left, e.zrenderY = r.clientY - i.top
			}
		}
		return e.zrenderFixed = 1, e
	}, i.merge(l.prototype, r.Dispatcher.prototype, !0), l
}), define("zrender/tool/matrix", [], function() {
	var e = typeof Float32Array == "undefined" ? Array : Float32Array,
		t = {
			create: function() {
				var n = new e(6);
				return t.identity(n), n
			},
			identity: function(e) {
				e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0
			},
			copy: function(e, t) {
				e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5]
			},
			mul: function(e, t, n) {
				return e[0] = t[0] * n[0] + t[2] * n[1], e[1] = t[1] * n[0] + t[3] * n[1], e[2] = t[0] * n[2] + t[2] * n[3], e[3] = t[1] * n[2] + t[3] * n[3], e[4] = t[0] * n[4] + t[2] * n[5] + t[4], e[5] = t[1] * n[4] + t[3] * n[5] + t[5], e
			},
			translate: function(e, t, n) {
				return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4] + n[0], e[5] = t[5] + n[1], e
			},
			rotate: function(e, t, n) {
				var r = t[0],
					i = t[2],
					s = t[4],
					o = t[1],
					u = t[3],
					a = t[5],
					f = Math.sin(n),
					l = Math.cos(n);
				return e[0] = r * l + o * f, e[1] = -r * f + o * l, e[2] = i * l + u * f, e[3] = -i * f + l * u, e[4] = l * s + f * a, e[5] = l * a - f * s, e
			},
			scale: function(e, t, n) {
				var r = n[0],
					i = n[1];
				return e[0] = t[0] * r, e[1] = t[1] * i, e[2] = t[2] * r, e[3] = t[3] * i, e[4] = t[4] * r, e[5] = t[5] * i, e
			},
			invert: function(e, t) {
				var n = t[0],
					r = t[2],
					i = t[4],
					s = t[1],
					o = t[3],
					u = t[5],
					a = n * o - s * r;
				return a ? (a = 1 / a, e[0] = o * a, e[1] = -s * a, e[2] = -r * a, e[3] = n * a, e[4] = (r * u - o * i) * a, e[5] = (s * i - n * u) * a, e) : null
			},
			mulVector: function(e, t, n) {
				var r = t[0],
					i = t[2],
					s = t[4],
					o = t[1],
					u = t[3],
					a = t[5];
				return e[0] = n[0] * r + n[1] * i + s, e[1] = n[0] * o + n[1] * u + a, e
			}
		};
	return t
}), define("zrender/shape/mixin/Transformable", ["require", "../../tool/matrix"], function(e) {
	var t = e("../../tool/matrix"),
		n = [0, 0],
		r = function() {
			this.position || (this.position = [0, 0]), typeof this.rotation == "undefined" && (this.rotation = [0, 0, 0]), this.scale || (this.scale = [1, 1, 0, 0]), this.needLocalTransform = !1, this.needTransform = !1
		};
	return r.prototype = {
		constructor: r,
		updateNeedTransform: function() {
			this.needLocalTransform = Math.abs(this.rotation[0]) > 1e-4 || Math.abs(this.position[0]) > 1e-4 || Math.abs(this.position[1]) > 1e-4 || Math.abs(this.scale[0] - 1) > 1e-4 || Math.abs(this.scale[1] - 1) > 1e-4
		},
		updateTransform: function() {
			this.updateNeedTransform(), this.parent ? this.needTransform = this.needLocalTransform || this.parent.needTransform : this.needTransform = this.needLocalTransform;
			if (!this.needTransform) return;
			var e = this.transform || t.create();
			t.identity(e);
			if (this.needLocalTransform) {
				if (this.scale && (this.scale[0] !== 1 || this.scale[1] !== 1)) {
					n[0] = -this.scale[2] || 0, n[1] = -this.scale[3] || 0, (n[0] || n[1]) && t.translate(e, e, n), t.scale(e, e, this.scale);
					if (n[0] || n[1]) n[0] = -n[0], n[1] = -n[1], t.translate(e, e, n)
				}
				if (this.rotation)
					if (this.rotation instanceof Array) {
						if (this.rotation[0] !== 0) {
							n[0] = -this.rotation[1] || 0, n[1] = -this.rotation[2] || 0, (n[0] || n[1]) && t.translate(e, e, n), t.rotate(e, e, this.rotation[0]);
							if (n[0] || n[1]) n[0] = -n[0], n[1] = -n[1], t.translate(e, e, n)
						}
					} else this.rotation !== 0 && t.rotate(e, e, this.rotation);
				this.position && (this.position[0] !== 0 || this.position[1] !== 0) && t.translate(e, e, this.position)
			}
			this.transform = e, this.parent && this.parent.needTransform && (this.needLocalTransform ? t.mul(this.transform, this.parent.transform, this.transform) : t.copy(this.transform, this.parent.transform))
		},
		setTransform: function(e) {
			if (this.needTransform) {
				var t = this.transform;
				e.transform(t[0], t[1], t[2], t[3], t[4], t[5])
			}
		}
	}, r
}), define("zrender/tool/color", ["require", "../tool/util"], function(e) {
	function f(e) {
		r = e
	}

	function l() {
		r = i
	}

	function c(e, t) {
		return e |= 0, t = t || r, t[e % t.length]
	}

	function h(e) {
		s = e
	}

	function p() {
		o = s
	}

	function d() {
		return s
	}

	function v(e, r, i, s, o, u, a) {
		n || (n = t.getContext());
		var f = n.createRadialGradient(e, r, i, s, o, u);
		for (var l = 0, c = a.length; l < c; l++) f.addColorStop(a[l][0], a[l][1]);
		return f.__nonRecursion = !0, f
	}

	function m(e, r, i, s, o) {
		n || (n = t.getContext());
		var u = n.createLinearGradient(e, r, i, s);
		for (var a = 0, f = o.length; a < f; a++) u.addColorStop(o[a][0], o[a][1]);
		return u.__nonRecursion = !0, u
	}

	function g(e, t, n) {
		e = S(e), t = S(t), e = F(e), t = F(t);
		var r = [],
			i = (t[0] - e[0]) / n,
			s = (t[1] - e[1]) / n,
			o = (t[2] - e[2]) / n;
		for (var u = 0, a = e[0], f = e[1], l = e[2]; u < n; u++) r[u] = b([R(Math.floor(a), [0, 255]), R(Math.floor(f), [0, 255]), R(Math.floor(l), [0, 255])]), a += i, f += s, l += o;
		return a = t[0], f = t[1], l = t[2], r[u] = b([a, f, l]), r
	}

	function y(e, t) {
		var n = [],
			r = e.length;
		t === undefined && (t = 20);
		if (r === 1) n = g(e[0], e[0], t);
		else if (r > 1)
			for (var i = 0, s = r - 1; i < s; i++) {
				var o = g(e[i], e[i + 1], t);
				i < s - 1 && o.pop(), n = n.concat(o)
			}
		return n
	}

	function b(e, t) {
		t = t || "rgb";
		if (e && (e.length === 3 || e.length === 4)) {
			e = q(e, function(e) {
				return e > 1 ? Math.ceil(e) : e
			});
			if (t.indexOf("hex") > -1) return "#" + ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1);
			if (t.indexOf("hs") > -1) {
				var n = q(e.slice(1, 3), function(e) {
					return e + "%"
				});
				e[1] = n[0], e[2] = n[1]
			}
			return t.indexOf("a") > -1 ? (e.length === 3 && e.push(1), e[3] = R(e[3], [0, 1]), t + "(" + e.slice(0, 4).join(",") + ")") : t + "(" + e.slice(0, 3).join(",") + ")"
		}
	}

	function w(e) {
		e = _(e), e.indexOf("rgba") < 0 && (e = S(e));
		var t = [],
			n = 0;
		return e.replace(/[\d.]+/g, function(e) {
			n < 3 ? e |= 0 : e = +e, t[n++] = e
		}), t
	}

	function E(e, t) {
		var n = F(e),
			r = n[3];
		return typeof r == "undefined" && (r = 1), e.indexOf("hsb") > -1 ? n = U(n) : e.indexOf("hsl") > -1 && (n = z(n)), t.indexOf("hsb") > -1 || t.indexOf("hsv") > -1 ? n = X(n) : t.indexOf("hsl") > -1 && (n = V(n)), n[3] = r, b(n, t)
	}

	function S(e) {
		return E(e, "rgba")
	}

	function x(e) {
		return E(e, "rgb")
	}

	function T(e) {
		return E(e, "hex")
	}

	function N(e) {
		return E(e, "hsva")
	}

	function C(e) {
		return E(e, "hsv")
	}

	function k(e) {
		return E(e, "hsba")
	}

	function L(e) {
		return E(e, "hsb")
	}

	function A(e) {
		return E(e, "hsla")
	}

	function O(e) {
		return E(e, "hsl")
	}

	function M(e) {
		for (var t in a)
			if (T(a[t]) === T(e)) return t;
		return null
	}

	function _(e) {
		return String(e).replace(/\s+/g, "")
	}

	function D(e) {
		a[e] && (e = a[e]), e = _(e), e = e.replace(/hsv/i, "hsb");
		if (/^#[\da-f]{3}$/i.test(e)) {
			e = parseInt(e.slice(1), 16);
			var t = (e & 3840) << 8,
				n = (e & 240) << 4,
				r = e & 15;
			e = "#" + ((1 << 24) + (t << 4) + t + (n << 4) + n + (r << 4) + r).toString(16).slice(1)
		}
		return e
	}

	function P(e, t) {
		var n = t > 0 ? 1 : -1;
		typeof t == "undefined" && (t = 0), t = Math.abs(t) > 1 ? 1 : Math.abs(t), e = x(e);
		var r = F(e);
		for (var i = 0; i < 3; i++) n === 1 ? r[i] = r[i] * (1 - t) | 0 : r[i] = (255 - r[i]) * t + r[i] | 0;
		return "rgb(" + r.join(",") + ")"
	}

	function H(e) {
		var t = F(S(e));
		return t = q(t, function(e) {
			return 255 - e
		}), b(t, "rgb")
	}

	function B(e, t, n) {
		typeof n == "undefined" && (n = .5), n = 1 - R(n, [0, 1]);
		var r = n * 2 - 1,
			i = F(S(e)),
			s = F(S(t)),
			o = i[3] - s[3],
			u = ((r * o === -1 ? r : (r + o) / (1 + r * o)) + 1) / 2,
			a = 1 - u,
			f = [];
		for (var l = 0; l < 3; l++) f[l] = i[l] * u + s[l] * a;
		var c = i[3] * n + s[3] * (1 - n);
		return c = Math.max(0, Math.min(1, c)), i[3] === 1 && s[3] === 1 ? b(f, "rgb") : (f[3] = c, b(f, "rgba"))
	}

	function j() {
		return "#" + Math.random().toString(16).slice(2, 8)
	}

	function F(e) {
		e = D(e);
		var t = e.match(u);
		if (t === null) throw new Error("The color format error");
		var n, r, i = [],
			s;
		if (t[2]) n = t[2].replace("#", "").split(""), s = [n[0] + n[1], n[2] + n[3], n[4] + n[5]], i = q(s, function(e) {
			return R(parseInt(e, 16), [0, 255])
		});
		else if (t[4]) {
			var o = t[4].split(",");
			r = o[3], s = o.slice(0, 3), i = q(s, function(e) {
				return e = Math.floor(e.indexOf("%") > 0 ? parseInt(e, 0) * 2.55 : e), R(e, [0, 255])
			}), typeof r != "undefined" && i.push(R(parseFloat(r), [0, 1]))
		} else if (t[5] || t[6]) {
			var a = (t[5] || t[6]).split(","),
				f = parseInt(a[0], 0) / 360,
				l = a[1],
				c = a[2];
			r = a[3], i = q([l, c], function(e) {
				return R(parseFloat(e) / 100, [0, 1])
			}), i.unshift(f), typeof r != "undefined" && i.push(R(parseFloat(r), [0, 1]))
		}
		return i
	}

	function I(e, t) {
		t === null && (t = 1);
		var n = F(S(e));
		return n[3] = R(Number(t).toFixed(4), [0, 1]), b(n, "rgba")
	}

	function q(e, t) {
		if (typeof t != "function") throw new TypeError;
		var n = e ? e.length : 0;
		for (var r = 0; r < n; r++) e[r] = t(e[r]);
		return e
	}

	function R(e, t) {
		return e <= t[0] ? e = t[0] : e >= t[1] && (e = t[1]), e
	}

	function U(e) {
		var t = e[0],
			n = e[1],
			r = e[2],
			i, s, o;
		if (n === 0) i = r * 255, s = r * 255, o = r * 255;
		else {
			var u = t * 6;
			u === 6 && (u = 0);
			var a = u | 0,
				f = r * (1 - n),
				l = r * (1 - n * (u - a)),
				c = r * (1 - n * (1 - (u - a))),
				h = 0,
				p = 0,
				d = 0;
			a === 0 ? (h = r, p = c, d = f) : a === 1 ? (h = l, p = r, d = f) : a === 2 ? (h = f, p = r, d = c) : a === 3 ? (h = f, p = l, d = r) : a === 4 ? (h = c, p = f, d = r) : (h = r, p = f, d = l), i = h * 255, s = p * 255, o = d * 255
		}
		return [i, s, o]
	}

	function z(e) {
		var t = e[0],
			n = e[1],
			r = e[2],
			i, s, o;
		if (n === 0) i = r * 255, s = r * 255, o = r * 255;
		else {
			var u;
			r < .5 ? u = r * (1 + n) : u = r + n - n * r;
			var a = 2 * r - u;
			i = 255 * W(a, u, t + 1 / 3), s = 255 * W(a, u, t), o = 255 * W(a, u, t - 1 / 3)
		}
		return [i, s, o]
	}

	function W(e, t, n) {
		return n < 0 && (n += 1), n > 1 && (n -= 1), 6 * n < 1 ? e + (t - e) * 6 * n : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
	}

	function X(e) {
		var t = e[0] / 255,
			n = e[1] / 255,
			r = e[2] / 255,
			i = Math.min(t, n, r),
			s = Math.max(t, n, r),
			o = s - i,
			u = s,
			a, f;
		if (o === 0) a = 0, f = 0;
		else {
			f = o / s;
			var l = ((s - t) / 6 + o / 2) / o,
				c = ((s - n) / 6 + o / 2) / o,
				h = ((s - r) / 6 + o / 2) / o;
			t === s ? a = h - c : n === s ? a = 1 / 3 + l - h : r === s && (a = 2 / 3 + c - l), a < 0 && (a += 1), a > 1 && (a -= 1)
		}
		return a *= 360, f *= 100, u *= 100, [a, f, u]
	}

	function V(e) {
		var t = e[0] / 255,
			n = e[1] / 255,
			r = e[2] / 255,
			i = Math.min(t, n, r),
			s = Math.max(t, n, r),
			o = s - i,
			u = (s + i) / 2,
			a, f;
		if (o === 0) a = 0, f = 0;
		else {
			u < .5 ? f = o / (s + i) : f = o / (2 - s - i);
			var l = ((s - t) / 6 + o / 2) / o,
				c = ((s - n) / 6 + o / 2) / o,
				h = ((s - r) / 6 + o / 2) / o;
			t === s ? a = h - c : n === s ? a = 1 / 3 + l - h : r === s && (a = 2 / 3 + c - l), a < 0 && (a += 1), a > 1 && (a -= 1)
		}
		return a *= 360, f *= 100, u *= 100, [a, f, u]
	}
	var t = e("../tool/util"),
		n, r = ["#ff9277", " #dddd00", " #ffc877", " #bbe3ff", " #d5ffbb", "#bbbbff", " #ddb000", " #b0dd00", " #e2bbff", " #ffbbe3", "#ff7777", " #ff9900", " #83dd00", " #77e3ff", " #778fff", "#c877ff", " #ff77ab", " #ff6600", " #aa8800", " #77c7ff", "#ad77ff", " #ff77ff", " #dd0083", " #777700", " #00aa00", "#0088aa", " #8400dd", " #aa0088", " #dd0000", " #772e00"],
		i = r,
		s = "rgba(255,255,0,0.5)",
		o = s,
		u = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
		a = {
			aliceblue: "#f0f8ff",
			antiquewhite: "#faebd7",
			aqua: "#0ff",
			aquamarine: "#7fffd4",
			azure: "#f0ffff",
			beige: "#f5f5dc",
			bisque: "#ffe4c4",
			black: "#000",
			blanchedalmond: "#ffebcd",
			blue: "#00f",
			blueviolet: "#8a2be2",
			brown: "#a52a2a",
			burlywood: "#deb887",
			cadetblue: "#5f9ea0",
			chartreuse: "#7fff00",
			chocolate: "#d2691e",
			coral: "#ff7f50",
			cornflowerblue: "#6495ed",
			cornsilk: "#fff8dc",
			crimson: "#dc143c",
			cyan: "#0ff",
			darkblue: "#00008b",
			darkcyan: "#008b8b",
			darkgoldenrod: "#b8860b",
			darkgray: "#a9a9a9",
			darkgrey: "#a9a9a9",
			darkgreen: "#006400",
			darkkhaki: "#bdb76b",
			darkmagenta: "#8b008b",
			darkolivegreen: "#556b2f",
			darkorange: "#ff8c00",
			darkorchid: "#9932cc",
			darkred: "#8b0000",
			darksalmon: "#e9967a",
			darkseagreen: "#8fbc8f",
			darkslateblue: "#483d8b",
			darkslategray: "#2f4f4f",
			darkslategrey: "#2f4f4f",
			darkturquoise: "#00ced1",
			darkviolet: "#9400d3",
			deeppink: "#ff1493",
			deepskyblue: "#00bfff",
			dimgray: "#696969",
			dimgrey: "#696969",
			dodgerblue: "#1e90ff",
			firebrick: "#b22222",
			floralwhite: "#fffaf0",
			forestgreen: "#228b22",
			fuchsia: "#f0f",
			gainsboro: "#dcdcdc",
			ghostwhite: "#f8f8ff",
			gold: "#ffd700",
			goldenrod: "#daa520",
			gray: "#808080",
			grey: "#808080",
			green: "#008000",
			greenyellow: "#adff2f",
			honeydew: "#f0fff0",
			hotpink: "#ff69b4",
			indianred: "#cd5c5c",
			indigo: "#4b0082",
			ivory: "#fffff0",
			khaki: "#f0e68c",
			lavender: "#e6e6fa",
			lavenderblush: "#fff0f5",
			lawngreen: "#7cfc00",
			lemonchiffon: "#fffacd",
			lightblue: "#add8e6",
			lightcoral: "#f08080",
			lightcyan: "#e0ffff",
			lightgoldenrodyellow: "#fafad2",
			lightgray: "#d3d3d3",
			lightgrey: "#d3d3d3",
			lightgreen: "#90ee90",
			lightpink: "#ffb6c1",
			lightsalmon: "#ffa07a",
			lightseagreen: "#20b2aa",
			lightskyblue: "#87cefa",
			lightslategray: "#789",
			lightslategrey: "#789",
			lightsteelblue: "#b0c4de",
			lightyellow: "#ffffe0",
			lime: "#0f0",
			limegreen: "#32cd32",
			linen: "#faf0e6",
			magenta: "#f0f",
			maroon: "#800000",
			mediumaquamarine: "#66cdaa",
			mediumblue: "#0000cd",
			mediumorchid: "#ba55d3",
			mediumpurple: "#9370d8",
			mediumseagreen: "#3cb371",
			mediumslateblue: "#7b68ee",
			mediumspringgreen: "#00fa9a",
			mediumturquoise: "#48d1cc",
			mediumvioletred: "#c71585",
			midnightblue: "#191970",
			mintcream: "#f5fffa",
			mistyrose: "#ffe4e1",
			moccasin: "#ffe4b5",
			navajowhite: "#ffdead",
			navy: "#000080",
			oldlace: "#fdf5e6",
			olive: "#808000",
			olivedrab: "#6b8e23",
			orange: "#ffa500",
			orangered: "#ff4500",
			orchid: "#da70d6",
			palegoldenrod: "#eee8aa",
			palegreen: "#98fb98",
			paleturquoise: "#afeeee",
			palevioletred: "#d87093",
			papayawhip: "#ffefd5",
			peachpuff: "#ffdab9",
			peru: "#cd853f",
			pink: "#ffc0cb",
			plum: "#dda0dd",
			powderblue: "#b0e0e6",
			purple: "#800080",
			red: "#f00",
			rosybrown: "#bc8f8f",
			royalblue: "#4169e1",
			saddlebrown: "#8b4513",
			salmon: "#fa8072",
			sandybrown: "#f4a460",
			seagreen: "#2e8b57",
			seashell: "#fff5ee",
			sienna: "#a0522d",
			silver: "#c0c0c0",
			skyblue: "#87ceeb",
			slateblue: "#6a5acd",
			slategray: "#708090",
			slategrey: "#708090",
			snow: "#fffafa",
			springgreen: "#00ff7f",
			steelblue: "#4682b4",
			tan: "#d2b48c",
			teal: "#008080",
			thistle: "#d8bfd8",
			tomato: "#ff6347",
			turquoise: "#40e0d0",
			violet: "#ee82ee",
			wheat: "#f5deb3",
			white: "#fff",
			whitesmoke: "#f5f5f5",
			yellow: "#ff0",
			yellowgreen: "#9acd32"
		};
	return {
		customPalette: f,
		resetPalette: l,
		getColor: c,
		getHighlightColor: d,
		customHighlight: h,
		resetHighlight: p,
		getRadialGradient: v,
		getLinearGradient: m,
		getGradientColors: y,
		getStepColors: g,
		reverse: H,
		mix: B,
		lift: P,
		trim: _,
		random: j,
		toRGB: x,
		toRGBA: S,
		toHex: T,
		toHSL: O,
		toHSLA: A,
		toHSB: L,
		toHSBA: k,
		toHSV: C,
		toHSVA: N,
		toName: M,
		toColor: b,
		toArray: w,
		alpha: I,
		getData: F
	}
}), define("zrender/shape/Base", ["require", "../tool/matrix", "../tool/guid", "../tool/util", "./mixin/Transformable", "../tool/event", "../tool/area", "../tool/area", "../tool/color", "../tool/area"], function(e) {
	function o(t, n, r, i, s, o, a) {
		s && (t.font = s), t.textAlign = o, t.textBaseline = a;
		var f = u(n, r, i, s, o, a);
		n = (n + "").split("\n");
		var l = e("../tool/area").getTextHeight("国", s);
		switch (a) {
			case "top":
				i = f.y;
				break;
			case "bottom":
				i = f.y + l;
				break;
			default:
				i = f.y + l / 2
		}
		for (var c = 0, h = n.length; c < h; c++) t.fillText(n[c], r, i), i += l
	}

	function u(t, n, r, i, s, o) {
		var u = e("../tool/area"),
			a = u.getTextWidth(t, i),
			f = u.getTextHeight("国", i);
		t = (t + "").split("\n");
		switch (s) {
			case "end":
			case "right":
				n -= a;
				break;
			case "center":
				n -= a / 2
		}
		switch (o) {
			case "top":
				break;
			case "bottom":
				r -= f * t.length;
				break;
			default:
				r -= f * t.length / 2
		}
		return {
			x: n,
			y: r,
			width: a,
			height: f * t.length
		}
	}

	function a(e) {
		e = e || {}, this.id = e.id || n();
		for (var t in e) this[t] = e[t];
		this.style = this.style || {}, this.parent = null, this.__dirty = !0, i.call(this), s.call(this)
	}
	var t = e("../tool/matrix"),
		n = e("../tool/guid"),
		r = e("../tool/util"),
		i = e("./mixin/Transformable"),
		s = e("../tool/event").Dispatcher;
	a.prototype.invisible = !1, a.prototype.ignore = !1, a.prototype.zlevel = 0, a.prototype.draggable = !1, a.prototype.clickable = !1, a.prototype.hoverable = !0, a.prototype.z = 0, a.prototype.brush = function(e, t) {
		var n = this.style;
		this.brushTypeOnly && (n.brushType = this.brushTypeOnly), t && (n = this.getHighlightStyle(n, this.highlightStyle || {}, this.brushTypeOnly)), this.brushTypeOnly == "stroke" && (n.strokeColor = n.strokeColor || n.color), e.save(), this.setContext(e, n), this.setTransform(e), e.beginPath(), this.buildPath(e, n), this.brushTypeOnly != "stroke" && e.closePath();
		switch (n.brushType) {
			case "both":
				e.fill();
			case "stroke":
				n.lineWidth > 0 && e.stroke();
				break;
			default:
				e.fill()
		}
		this.drawText(e, n, this.style), e.restore()
	};
	var f = [
		["color", "fillStyle"],
		["strokeColor", "strokeStyle"],
		["opacity", "globalAlpha"],
		["lineCap", "lineCap"],
		["lineJoin", "lineJoin"],
		["miterLimit", "miterLimit"],
		["lineWidth", "lineWidth"],
		["shadowBlur", "shadowBlur"],
		["shadowColor", "shadowColor"],
		["shadowOffsetX", "shadowOffsetX"],
		["shadowOffsetY", "shadowOffsetY"]
	];
	return a.prototype.setContext = function(e, t) {
		for (var n = 0, r = f.length; n < r; n++) {
			var i = f[n][0],
				s = t[i],
				o = f[n][1];
			typeof s != "undefined" && (e[o] = s)
		}
	}, a.prototype.getHighlightStyle = function(t, n, r) {
		var i = {};
		for (var s in t) i[s] = t[s];
		var o = e("../tool/color"),
			u = o.getHighlightColor();
		t.brushType != "stroke" ? (i.strokeColor = u, i.lineWidth = (t.lineWidth || 1) + this.getHighlightZoom(), i.brushType = "both") : r != "stroke" ? (i.strokeColor = u, i.lineWidth = (t.lineWidth || 1) + this.getHighlightZoom()) : i.strokeColor = n.strokeColor || o.mix(t.strokeColor, o.toRGB(u));
		for (var s in n) typeof n[s] != "undefined" && (i[s] = n[s]);
		return i
	}, a.prototype.getHighlightZoom = function() {
		return this.type != "text" ? 6 : 2
	}, a.prototype.drift = function(e, t) {
		this.position[0] += e, this.position[1] += t
	}, a.prototype.getTansform = function() {
		var e = [];
		return function(n, r) {
			var i = [n, r];
			return this.needTransform && this.transform && (t.invert(e, this.transform), t.mulVector(i, e, [n, r, 1]), n == i[0] && r == i[1] && this.updateNeedTransform()), i
		}
	}(), a.prototype.isCover = function(t, n) {
		var r = this.getTansform(t, n);
		t = r[0], n = r[1];
		var i = this.style.__rect;
		return i || (i = this.style.__rect = this.getRect(this.style)), t >= i.x && t <= i.x + i.width && n >= i.y && n <= i.y + i.height ? e("../tool/area").isInside(this, this.style, t, n) : !1
	}, a.prototype.drawText = function(e, t, n) {
		if (typeof t.text == "undefined" || t.text === !1) return;
		var r = t.textColor || t.color || t.strokeColor;
		e.fillStyle = r;
		var i = 10,
			s, u, a, f, l = t.textPosition || this.textPosition || "top";
		switch (l) {
			case "inside":
			case "top":
			case "bottom":
			case "left":
			case "right":
				if (this.getRect) {
					var c = (n || t).__rect || this.getRect(n || t);
					switch (l) {
						case "inside":
							a = c.x + c.width / 2, f = c.y + c.height / 2, s = "center", u = "middle", t.brushType != "stroke" && r == t.color && (e.fillStyle = "#fff");
							break;
						case "left":
							a = c.x - i, f = c.y + c.height / 2, s = "end", u = "middle";
							break;
						case "right":
							a = c.x + c.width + i, f = c.y + c.height / 2, s = "start", u = "middle";
							break;
						case "top":
							a = c.x + c.width / 2, f = c.y - i, s = "center", u = "bottom";
							break;
						case "bottom":
							a = c.x + c.width / 2, f = c.y + c.height + i, s = "center", u = "top"
					}
				}
				break;
			case "start":
			case "end":
				var h, p, d, v;
				if (typeof t.pointList != "undefined") {
					var m = t.pointList;
					if (m.length < 2) return;
					var g = m.length;
					switch (l) {
						case "start":
							h = m[0][0], p = m[1][0], d = m[0][1], v = m[1][1];
							break;
						case "end":
							h = m[g - 2][0], p = m[g - 1][0], d = m[g - 2][1], v = m[g - 1][1]
					}
				} else h = t.xStart || 0, p = t.xEnd || 0, d = t.yStart || 0, v = t.yEnd || 0;
				switch (l) {
					case "start":
						s = h < p ? "end" : "start", u = d < v ? "bottom" : "top", a = h, f = d;
						break;
					case "end":
						s = h < p ? "start" : "end", u = d < v ? "top" : "bottom", a = p, f = v
				}
				i -= 4, h != p ? a -= s == "end" ? i : -i : s = "center", d != v ? f -= u == "bottom" ? i : -i : u = "middle";
				break;
			case "specific":
				a = t.textX || 0, f = t.textY || 0, s = "start", u = "middle"
		}
		a != null && f != null && o(e, t.text, a, f, t.textFont, t.textAlign || s, t.textBaseline || u)
	}, a.prototype.isSilent = function() {
		return !(this.hoverable || this.draggable || this.onmousemove || this.onmouseover || this.onmouseout || this.onmousedown || this.onmouseup || this.onclick || this.ondragenter || this.ondragover || this.ondragleave || this.ondrop)
	}, r.merge(a.prototype, i.prototype, !0), r.merge(a.prototype, s.prototype, !0), a
}), define("zrender/shape/Path", ["require", "./Base", "../tool/util"], function(e) {
	function n(e) {
		t.call(this, e)
	}
	var t = e("./Base");
	return n.prototype = {
		type: "path",
		_parsePathData: function(e) {
			if (!e) return [];
			var t = e,
				n = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"];
			t = t.replace(/-/g, " -"), t = t.replace(/  /g, " "), t = t.replace(/ /g, ","), t = t.replace(/,,/g, ",");
			var r;
			for (r = 0; r < n.length; r++) t = t.replace(new RegExp(n[r], "g"), "|" + n[r]);
			var i = t.split("|"),
				s = [],
				o = 0,
				u = 0;
			for (r = 1; r < i.length; r++) {
				var a = i[r],
					f = a.charAt(0);
				a = a.slice(1), a = a.replace(new RegExp("e,-", "g"), "e-");
				var l = a.split(",");
				l.length > 0 && l[0] === "" && l.shift();
				for (var c = 0; c < l.length; c++) l[c] = parseFloat(l[c]);
				while (l.length > 0) {
					if (isNaN(l[0])) break;
					var h = null,
						p = [],
						d, v, m, g, y, b, w, E, S = o,
						x = u;
					switch (f) {
						case "l":
							o += l.shift(), u += l.shift(), h = "L", p.push(o, u);
							break;
						case "L":
							o = l.shift(), u = l.shift(), p.push(o, u);
							break;
						case "m":
							o += l.shift(), u += l.shift(), h = "M", p.push(o, u), f = "l";
							break;
						case "M":
							o = l.shift(), u = l.shift(), h = "M", p.push(o, u), f = "L";
							break;
						case "h":
							o += l.shift(), h = "L", p.push(o, u);
							break;
						case "H":
							o = l.shift(), h = "L", p.push(o, u);
							break;
						case "v":
							u += l.shift(), h = "L", p.push(o, u);
							break;
						case "V":
							u = l.shift(), h = "L", p.push(o, u);
							break;
						case "C":
							p.push(l.shift(), l.shift(), l.shift(), l.shift()), o = l.shift(), u = l.shift(), p.push(o, u);
							break;
						case "c":
							p.push(o + l.shift(), u + l.shift(), o + l.shift(), u + l.shift()), o += l.shift(), u += l.shift(), h = "C", p.push(o, u);
							break;
						case "S":
							d = o, v = u, m = s[s.length - 1], m.command === "C" && (d = o + (o - m.points[2]), v = u + (u - m.points[3])), p.push(d, v, l.shift(), l.shift()), o = l.shift(), u = l.shift(), h = "C", p.push(o, u);
							break;
						case "s":
							d = o, v = u, m = s[s.length - 1], m.command === "C" && (d = o + (o - m.points[2]), v = u + (u - m.points[3])), p.push(d, v, o + l.shift(), u + l.shift()), o += l.shift(), u += l.shift(), h = "C", p.push(o, u);
							break;
						case "Q":
							p.push(l.shift(), l.shift()), o = l.shift(), u = l.shift(), p.push(o, u);
							break;
						case "q":
							p.push(o + l.shift(), u + l.shift()), o += l.shift(), u += l.shift(), h = "Q", p.push(o, u);
							break;
						case "T":
							d = o, v = u, m = s[s.length - 1], m.command === "Q" && (d = o + (o - m.points[0]), v = u + (u - m.points[1])), o = l.shift(), u = l.shift(), h = "Q", p.push(d, v, o, u);
							break;
						case "t":
							d = o, v = u, m = s[s.length - 1], m.command === "Q" && (d = o + (o - m.points[0]), v = u + (u - m.points[1])), o += l.shift(), u += l.shift(), h = "Q", p.push(d, v, o, u);
							break;
						case "A":
							g = l.shift(), y = l.shift(), b = l.shift(), w = l.shift(), E = l.shift(), S = o, x = u, o = l.shift(), u = l.shift(), h = "A", p = this._convertPoint(S, x, o, u, w, E, g, y, b);
							break;
						case "a":
							g = l.shift(), y = l.shift(), b = l.shift(), w = l.shift(), E = l.shift(), S = o, x = u, o += l.shift(), u += l.shift(), h = "A", p = this._convertPoint(S, x, o, u, w, E, g, y, b)
					}
					s.push({
						command: h || f,
						points: p
					})
				}(f === "z" || f === "Z") && s.push({
					command: "z",
					points: []
				})
			}
			return s
		},
		_convertPoint: function(e, t, n, r, i, s, o, u, a) {
			var f = a * (Math.PI / 180),
				l = Math.cos(f) * (e - n) / 2 + Math.sin(f) * (t - r) / 2,
				c = -1 * Math.sin(f) * (e - n) / 2 + Math.cos(f) * (t - r) / 2,
				h = l * l / (o * o) + c * c / (u * u);
			h > 1 && (o *= Math.sqrt(h), u *= Math.sqrt(h));
			var p = Math.sqrt((o * o * u * u - o * o * c * c - u * u * l * l) / (o * o * c * c + u * u * l * l));
			i === s && (p *= -1), isNaN(p) && (p = 0);
			var d = p * o * c / u,
				v = p * -u * l / o,
				m = (e + n) / 2 + Math.cos(f) * d - Math.sin(f) * v,
				g = (t + r) / 2 + Math.sin(f) * d + Math.cos(f) * v,
				y = function(e) {
					return Math.sqrt(e[0] * e[0] + e[1] * e[1])
				},
				b = function(e, t) {
					return (e[0] * t[0] + e[1] * t[1]) / (y(e) * y(t))
				},
				w = function(e, t) {
					return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(b(e, t))
				},
				E = w([1, 0], [(l - d) / o, (c - v) / u]),
				S = [(l - d) / o, (c - v) / u],
				x = [(-1 * l - d) / o, (-1 * c - v) / u],
				T = w(S, x);
			return b(S, x) <= -1 && (T = Math.PI), b(S, x) >= 1 && (T = 0), s === 0 && T > 0 && (T -= 2 * Math.PI), s === 1 && T < 0 && (T += 2 * Math.PI), [m, g, o, u, E, T, f, s]
		},
		buildPath: function(e, t) {
			var n = t.path,
				r = this.pathArray || this._parsePathData(n),
				i = t.x || 0,
				s = t.y || 0,
				o, u = t.pointList = [],
				a = [];
			for (var f = 0, l = r.length; f < l; f++) {
				r[f].command.toUpperCase() == "M" && (a.length > 0 && u.push(a), a = []), o = r[f].points;
				for (var c = 0, h = o.length; c < h; c += 2) a.push([o[c] + i, o[c + 1] + s])
			}
			a.length > 0 && u.push(a);
			var p;
			for (var f = 0, l = r.length; f < l; f++) {
				p = r[f].command, o = r[f].points;
				for (var c = 0, h = o.length; c < h; c++) c % 2 === 0 ? o[c] += i : o[c] += s;
				switch (p) {
					case "L":
						e.lineTo(o[0], o[1]);
						break;
					case "M":
						e.moveTo(o[0], o[1]);
						break;
					case "C":
						e.bezierCurveTo(o[0], o[1], o[2], o[3], o[4], o[5]);
						break;
					case "Q":
						e.quadraticCurveTo(o[0], o[1], o[2], o[3]);
						break;
					case "A":
						var d = o[0],
							v = o[1],
							m = o[2],
							g = o[3],
							y = o[4],
							b = o[5],
							w = o[6],
							E = o[7],
							S = m > g ? m : g,
							x = m > g ? 1 : m / g,
							T = m > g ? g / m : 1;
						e.translate(d, v), e.rotate(w), e.scale(x, T), e.arc(0, 0, S, y, y + b, 1 - E), e.scale(1 / x, 1 / T), e.rotate(-w), e.translate(-d, -v);
						break;
					case "z":
						e.closePath()
				}
			}
			return
		},
		getRect: function(e) {
			if (e.__rect) return e.__rect;
			var t;
			e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0;
			var n = Number.MAX_VALUE,
				r = Number.MIN_VALUE,
				i = Number.MAX_VALUE,
				s = Number.MIN_VALUE,
				o = e.x || 0,
				u = e.y || 0,
				a = this.pathArray || this._parsePathData(e.path);
			for (var f = 0; f < a.length; f++) {
				var l = a[f].points;
				for (var c = 0; c < l.length; c++) c % 2 === 0 ? (l[c] + o < n && (n = l[c] + o), l[c] + o > r && (r = l[c] + o)) : (l[c] + u < i && (i = l[c] + u), l[c] + u > s && (s = l[c] + u))
			}
			var h;
			return n === Number.MAX_VALUE || r === Number.MIN_VALUE || i === Number.MAX_VALUE || s === Number.MIN_VALUE ? h = {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			} : h = {
				x: Math.round(n - t / 2),
				y: Math.round(i - t / 2),
				width: r - n + t,
				height: s - i + t
			}, e.__rect = h, h
		}
	}, e("../tool/util").inherits(n, t), n
}), define("zrender/tool/area", ["require", "../tool/util", "../shape/Path"], function(e) {
	function a(e, r, i, s) {
		if (!r || !e) return !1;
		var o = e.type;
		n = n || t.getContext();
		if (!g(r.__rect || e.getRect(r), i, s)) return !1;
		var u = f(o, r, i, s);
		if (typeof u != "undefined") return u;
		if (o != "bezier-curve" && e.buildPath && n.isPointInPath) return l(e, n, r, i, s);
		if (n.getImageData) return c(e, r, i, s);
		switch (o) {
			case "heart":
			case "droplet":
			case "ellipse":
				return !0;
			case "trochoid":
				var a = r.location == "out" ? r.r1 + r.r2 + r.d : r.r1 - r.r2 + r.d;
				return y(r, i, s, a);
			case "rose":
				return y(r, i, s, r.maxr);
			default:
				return !1
		}
	}

	function f(e, t, n, r) {
		switch (e) {
			case "line":
				return d(t, n, r);
			case "broken-line":
				return v(t, n, r);
			case "text":
				return !0;
			case "ring":
				return m(t, n, r);
			case "rectangle":
				return !0;
			case "circle":
				return y(t, n, r, t.r);
			case "sector":
				return b(t, n, r);
			case "path":
				return E(t, n, r);
			case "polygon":
			case "star":
			case "isogon":
				return w(t, n, r);
			case "image":
				return !0
		}
	}

	function l(e, t, n, r, i) {
		return t.beginPath(), e.buildPath(t, n), t.closePath(), t.isPointInPath(r, i)
	}

	function c(e, n, r, i) {
		var s = n.__rect || e.getRect(n),
			o = t.getPixelContext(),
			u = t.getPixelOffset();
		return t.adjustCanvasSize(r, i), o.clearRect(s.x, s.y, s.width, s.height), o.beginPath(), e.brush(o, {
			style: n
		}), o.closePath(), h(o, r + u.x, i + u.y)
	}

	function h(e, t, n, r) {
		var i;
		typeof r != "undefined" ? (r = (r || 1) >> 1, i = e.getImageData(t - r, n - r, r + r, r + r).data) : i = e.getImageData(t, n, 1, 1).data;
		var s = i.length;
		while (s--)
			if (i[s] !== 0) return !0;
		return !1
	}

	function p(e, t, n, r) {
		return !a(e, t, n, r)
	}

	function d(e, t, n) {
		var r = e.xStart,
			i = e.yStart,
			s = e.xEnd,
			o = e.yEnd,
			u = Math.max(e.lineWidth, 5),
			a = 0,
			f = r,
			l, c;
		r < s ? (l = r - u, c = s + u) : (l = s - u, c = r + u);
		var h, p;
		i < o ? (h = i - u, p = o + u) : (h = o - u, p = i + u);
		if (t < l || t > c || n < h || n > p) return !1;
		if (r === s) return Math.abs(t - r) <= u / 2;
		a = (i - o) / (r - s), f = (r * o - s * i) / (r - s);
		var d = (a * t - n + f) * (a * t - n + f) / (a * a + 1);
		return d <= u / 2 * u / 2
	}

	function v(e, t, n) {
		var r = e.pointList,
			i = {
				xStart: 0,
				yStart: 0,
				xEnd: 0,
				yEnd: 0,
				lineWidth: 0
			};
		for (var s = 0, o = r.length - 1; s < o; s++) {
			i.xStart = r[s][0], i.yStart = r[s][1], i.xEnd = r[s + 1][0], i.yEnd = r[s + 1][1], i.lineWidth = Math.max(e.lineWidth, 10);
			if (d(i, t, n)) return !0
		}
		return !1
	}

	function m(e, t, n) {
		return y(e, t, n, e.r) && !y({
			x: e.x,
			y: e.y
		}, t, n, e.r0 || 0)
	}

	function g(e, t, n) {
		return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height
	}

	function y(e, t, n, r) {
		return (t - e.x) * (t - e.x) + (n - e.y) * (n - e.y) < r * r
	}

	function b(e, t, n) {
		if (!y(e, t, n, e.r) || e.r0 > 0 && y({
			x: e.x,
			y: e.y
		}, t, n, e.r0)) return !1;
		if (Math.abs(e.endAngle - e.startAngle) >= 360) return !0;
		var r = (360 - Math.atan2(n - e.y, t - e.x) / Math.PI * 180) % 360,
			i = (360 + e.endAngle) % 360,
			s = (360 + e.startAngle) % 360;
		return i > s ? r >= s && r <= i : !(r >= i && r <= s)
	}

	function w(e, t, n) {
		var r, i, s = e.pointList,
			o = s.length,
			u = !1,
			a = !0,
			f;
		for (r = 0; r < o; ++r)
			if (s[r][0] == t && s[r][1] == n) {
				a = !1, u = !0;
				break
			}
		if (a) {
			a = !1, u = !1;
			for (r = 0, i = o - 1; r < o; i = r++)
				if (s[r][1] < n && n < s[i][1] || s[i][1] < n && n < s[r][1]) {
					if (t <= s[r][0] || t <= s[i][0]) {
						f = (n - s[r][1]) * (s[i][0] - s[r][0]) / (s[i][1] - s[r][1]) + s[r][0];
						if (t < f) u = !u;
						else if (t == f) {
							u = !0;
							break
						}
					}
				} else if (n == s[r][1]) {
				if (t < s[r][0]) {
					s[r][1] > s[i][1] ? --n : ++n;
					break
				}
			} else if (s[r][1] == s[i][1] && n == s[r][1] && (s[r][0] < t && t < s[i][0] || s[i][0] < t && t < s[r][0])) {
				u = !0;
				break
			}
		}
		return u
	}

	function E(t, r, i) {
		t.pointList || e("../shape/Path").prototype.buildPath(n, t);
		var s = t.pointList,
			o = !1;
		for (var u = 0, a = s.length; u < a; u++) {
			o = w({
				pointList: s[u]
			}, r, i);
			if (o) break
		}
		return o
	}

	function S(e, i) {
		var o = e + ":" + i;
		if (r[o]) return r[o];
		n = n || t.getContext(), n.save(), i && (n.font = i), e = (e + "").split("\n");
		var a = 0;
		for (var f = 0, l = e.length; f < l; f++) a = Math.max(n.measureText(e[f]).width, a);
		return n.restore(), r[o] = a, ++s > u && (s = 0, r = {}), a
	}

	function x(e, r) {
		var s = e + ":" + r;
		if (i[s]) return i[s];
		n = n || t.getContext(), n.save(), r && (n.font = r), e = (e + "").split("\n");
		var a = (n.measureText("国").width + 2) * e.length;
		return n.restore(), i[s] = a, ++o > u && (o = 0, i = {}), a
	}
	var t = e("../tool/util"),
		n, r = {},
		i = {},
		s = 0,
		o = 0,
		u = 2e4;
	return {
		isInside: a,
		isOutside: p,
		getTextWidth: S,
		getTextHeight: x
	}
}), define("zrender/shape/Text", ["require", "../tool/area", "./Base", "../tool/util"], function(e) {
	function r(e) {
		n.call(this, e)
	}
	var t = e("../tool/area"),
		n = e("./Base");
	return r.prototype = {
		type: "text",
		brush: function(e, n) {
			var r = this.style;
			n && (r = this.getHighlightStyle(r, this.highlightStyle || {}));
			if (typeof r.text == "undefined" || r.text === !1) return;
			e.save(), this.setContext(e, r), this.setTransform(e), r.textFont && (e.font = r.textFont), e.textAlign = r.textAlign || "start", e.textBaseline = r.textBaseline || "middle";
			var i = (r.text + "").split("\n"),
				s = t.getTextHeight("国", r.textFont),
				o = this.getRect(r),
				u = r.x,
				a;
			r.textBaseline == "top" ? a = o.y : r.textBaseline == "bottom" ? a = o.y + s : a = o.y + s / 2;
			for (var f = 0, l = i.length; f < l; f++) {
				if (r.maxWidth) switch (r.brushType) {
					case "fill":
						e.fillText(i[f], u, a, r.maxWidth);
						break;
					case "stroke":
						e.strokeText(i[f], u, a, r.maxWidth);
						break;
					case "both":
						e.fillText(i[f], u, a, r.maxWidth), e.strokeText(i[f], u, a, r.maxWidth);
						break;
					default:
						e.fillText(i[f], u, a, r.maxWidth)
				} else switch (r.brushType) {
					case "fill":
						e.fillText(i[f], u, a);
						break;
					case "stroke":
						e.strokeText(i[f], u, a);
						break;
					case "both":
						e.fillText(i[f], u, a), e.strokeText(i[f], u, a);
						break;
					default:
						e.fillText(i[f], u, a)
				}
				a += s
			}
			e.restore();
			return
		},
		getRect: function(e) {
			if (e.__rect) return e.__rect;
			var n = t.getTextWidth(e.text, e.textFont),
				r = t.getTextHeight(e.text, e.textFont),
				i = e.x;
			e.textAlign == "end" || e.textAlign == "right" ? i -= n : e.textAlign == "center" && (i -= n / 2);
			var s;
			return e.textBaseline == "top" ? s = e.y : e.textBaseline == "bottom" ? s = e.y - r : s = e.y - r / 2, e.__rect = {
				x: i,
				y: s,
				width: n,
				height: r
			}, e.__rect
		}
	}, e("../tool/util").inherits(r, n), r
}), define("zrender/shape/Rectangle", ["require", "./Base", "../tool/util"], function(e) {
	function n(e) {
		t.call(this, e)
	}
	var t = e("./Base");
	return n.prototype = {
		type: "rectangle",
		_buildRadiusPath: function(e, t) {
			var n = t.x,
				r = t.y,
				i = t.width,
				s = t.height,
				o = t.radius,
				u, a, f, l;
			typeof o == "number" ? u = a = f = l = o : o instanceof Array ? o.length === 1 ? u = a = f = l = o[0] : o.length === 2 ? (u = f = o[0], a = l = o[1]) : o.length === 3 ? (u = o[0], a = l = o[1], f = o[2]) : (u = o[0], a = o[1], f = o[2], l = o[3]) : u = a = f = l = 0, e.moveTo(n + u, r), e.lineTo(n + i - a, r), a !== 0 && e.quadraticCurveTo(n + i, r, n + i, r + a), e.lineTo(n + i, r + s - f), f !== 0 && e.quadraticCurveTo(n + i, r + s, n + i - f, r + s), e.lineTo(n + l, r + s), l !== 0 && e.quadraticCurveTo(n, r + s, n, r + s - l), e.lineTo(n, r + u), u !== 0 && e.quadraticCurveTo(n, r, n + u, r)
		},
		buildPath: function(e, t) {
			t.radius ? this._buildRadiusPath(e, t) : (e.moveTo(t.x, t.y), e.lineTo(t.x + t.width, t.y), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x, t.y));
			return
		},
		getRect: function(e) {
			if (e.__rect) return e.__rect;
			var t;
			return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, e.__rect = {
				x: Math.round(e.x - t / 2),
				y: Math.round(e.y - t / 2),
				width: e.width + t,
				height: e.height + t
			}, e.__rect
		}
	}, e("../tool/util").inherits(n, t), n
}), define("zrender/loadingEffect/Base", ["require", "../tool/util", "../shape/Text", "../shape/Rectangle"], function(e) {
	function o(e) {
		this.setOptions(e)
	}
	var t = e("../tool/util"),
		n = e("../shape/Text"),
		r = e("../shape/Rectangle"),
		i = "Loading...",
		s = "normal 16px Arial";
	return o.prototype.createTextShape = function(e) {
		return new n({
			highlightStyle: t.merge({
				x: this.canvasWidth / 2,
				y: this.canvasHeight / 2,
				text: i,
				textAlign: "center",
				textBaseline: "middle",
				textFont: s,
				color: "#333",
				brushType: "fill"
			}, e, !0)
		})
	}, o.prototype.createBackgroundShape = function(e) {
		return new r({
			highlightStyle: {
				x: 0,
				y: 0,
				width: this.canvasWidth,
				height: this.canvasHeight,
				brushType: "fill",
				color: e
			}
		})
	}, o.prototype.start = function(e) {
		function t(t) {
			e.storage.addHover(t)
		}

		function n() {
			e.refreshHover()
		}
		this.canvasWidth = e._width, this.canvasHeight = e._height, this.loadingTimer = this._start(t, n)
	}, o.prototype._start = function() {
		return setInterval(function() {}, 1e4)
	}, o.prototype.stop = function() {
		clearInterval(this.loadingTimer)
	}, o.prototype.setOptions = function(e) {
		this.options = e || {}
	}, o.prototype.adjust = function(e, t) {
		return e <= t[0] ? e = t[0] : e >= t[1] && (e = t[1]), e
	}, o
}), define("zrender/shape/Image", ["require", "./Base", "../tool/util"], function(e) {
	function s(e) {
		i.call(this, e)
	}
	var t = {},
		n = [],
		r, i = e("./Base");
	return s.prototype = {
		type: "image",
		brush: function(e, i, s) {
			var o = this.style || {};
			i && (o = this.getHighlightStyle(o, this.highlightStyle || {}));
			var u = o.image,
				a = this;
			if (typeof u == "string") {
				var f = u;
				t[f] ? u = t[f] : (u = new Image, u.onload = function() {
					u.onload = null, clearTimeout(r), n.push(a), r = setTimeout(function() {
						s && s(n), n = []
					}, 10)
				}, t[f] = u, u.src = f)
			}
			if (u) {
				if (u.nodeName.toUpperCase() == "IMG")
					if (window.ActiveXObject) {
						if (u.readyState != "complete") return
					} else if (!u.complete) return;
				var l = o.width || u.width,
					c = o.height || u.height,
					h = o.x,
					p = o.y;
				if (!u.width || !u.height) return;
				e.save(), this.setContext(e, o), this.setTransform(e);
				if (o.sWidth && o.sHeight) {
					var d = o.sx || 0,
						v = o.sy || 0;
					e.drawImage(u, d, v, o.sWidth, o.sHeight, h, p, l, c)
				} else if (o.sx && o.sy) {
					var d = o.sx,
						v = o.sy,
						m = l - d,
						g = c - v;
					e.drawImage(u, d, v, m, g, h, p, l, c)
				} else e.drawImage(u, h, p, l, c);
				o.width = l, o.height = c, this.style.width = l, this.style.height = c, this.drawText(e, o, this.style), e.restore()
			}
		},
		buildPath: function(e, t) {
			e.rect(t.x, t.y, t.width, t.height);
			return
		},
		getRect: function(e) {
			return {
				x: e.x,
				y: e.y,
				width: e.width,
				height: e.height
			}
		}
	}, e("../tool/util").inherits(s, i), s
}), define("zrender/Painter", ["require", "./config", "./tool/util", "./tool/log", "./tool/matrix", "./loadingEffect/Base", "./shape/Image"], function(e) {
	function a() {
		return !1
	}

	function f() {}

	function l(e, t) {
		this.root = e, this.storage = t, e.innerHTML = "", this._width = this._getWidth(), this._height = this._getHeight();
		var n = document.createElement("div");
		this._domRoot = n, n.style.position = "relative", n.style.overflow = "hidden", n.style.width = this._width + "px", n.style.height = this._height + "px", e.appendChild(n), this._layers = {}, this._layerConfig = {}, this._loadingEffect = new s({}), this.shapeToImage = this._createShapeToImageProcessor(), this._bgDom = c("bg", "div", this), n.appendChild(this._bgDom);
		var r = new h("_zrender_hover_", this);
		this._layers.hover = r, n.appendChild(r.dom), r.initContext(), r.onselectstart = a;
		var i = this;
		this.updatePainter = function(e, t) {
			i.update(e, t)
		}
	}

	function c(e, t, n) {
		var r = document.createElement(t),
			i = n._width,
			s = n._height;
		return r.style.position = "absolute", r.style.left = 0, r.style.top = 0, r.style.width = i + "px", r.style.height = s + "px", r.setAttribute("width", i * o), r.setAttribute("height", s * o), r.setAttribute("data-zr-dom-id", e), r
	}

	function h(e, t) {
		this.dom = c(e, "canvas", t), u && u.initElement(this.dom), this.domBack = null, this.ctxBack = null, this.painter = t, this.unusedCount = 0, this.config = null, this.dirty = !0, this.elCount = 0
	}
	var t = e("./config"),
		n = e("./tool/util"),
		r = e("./tool/log"),
		i = e("./tool/matrix"),
		s = e("./loadingEffect/Base"),
		o = window.devicePixelRatio || 1;
	o = Math.max(o, 1);
	var u = window.G_vmlCanvasManager;
	return l.prototype.render = function(e) {
		return this.isLoading() && this.hideLoading(), this.refresh(e, !0), this
	}, l.prototype.refresh = function(e, t) {
		var n = this.storage.getShapeList(!0);
		return this._paintList(n, t), typeof e == "function" && e(), this
	}, l.prototype._paintList = function(e, n) {
		typeof n == "undefined" && (n = !1), this._updateLayerStatus(e);
		var s, o, a;
		for (var f in this._layers) f !== "hover" && this._layers[f].unusedCount++;
		var l = [];
		for (var c = 0, h = e.length; c < h; c++) {
			var p = e[c];
			o !== p.zlevel && (s = this.getLayer(p.zlevel, s), a = s.ctx, o = p.zlevel, s.unusedCount = 0, (s.dirty || n) && s.clear());
			if (p.__startClip && !u) {
				var d = p.__startClip;
				a.save();
				if (d.needTransform) {
					var v = d.transform;
					i.invert(l, v), a.transform(v[0], v[1], v[2], v[3], v[4], v[5])
				}
				a.beginPath(), d.buildPath(a, d.style), a.clip();
				if (d.needTransform) {
					var v = l;
					a.transform(v[0], v[1], v[2], v[3], v[4], v[5])
				}
			}
			if ((s.dirty || n) && !p.invisible)
				if (!p.onbrush || p.onbrush && !p.onbrush(a, !1))
					if (t.catchBrushException) try {
						p.brush(a, !1, this.updatePainter)
					} catch (m) {
						r(m, "brush error of " + p.type, p)
					} else p.brush(a, !1, this.updatePainter);
			p.__stopClip && !u && a.restore(), p.__dirty = !1
		}
		for (var f in this._layers)
			if (f !== "hover") {
				var g = this._layers[f];
				g.dirty = !1, g.unusedCount >= 500 ? (delete this._layers[f], g.dom.parentNode.removeChild(g.dom)) : g.unusedCount == 1 && g.clear()
			}
	}, l.prototype.getLayer = function(e, t) {
		var n = this._layers[e];
		if (!n) {
			n = new h(e, this);
			var r = t ? t.dom : this._bgDom;
			r.nextSibling ? r.parentNode.insertBefore(n.dom, r.nextSibling) : r.parentNode.appendChild(n.dom), n.initContext(), this._layers[e] = n, n.config = this._layerConfig[e]
		}
		return n
	}, l.prototype._updateLayerStatus = function(e) {
		var t = this._layers,
			n = {};
		for (var r in t) r !== "hover" && (n[r] = t[r].elCount, t[r].elCount = 0);
		for (var i = 0, s = e.length; i < s; i++) {
			var o = e[i],
				u = o.zlevel,
				a = t[u];
			if (a) {
				a.elCount++;
				if (a.dirty) continue;
				a.dirty = o.__dirty
			}
		}
		for (var r in t) r !== "hover" && n[r] !== t[r].elCount && (t[r].dirty = !0)
	}, l.prototype.update = function(e, t) {
		for (var n = 0, r = e.length; n < r; n++) {
			var i = e[n];
			this.storage.mod(i.id)
		}
		return this.refresh(t), this
	}, l.prototype.setLoadingEffect = function(e) {
		return this._loadingEffect = e, this
	}, l.prototype.clear = function() {
		for (var e in this._layers) {
			if (e == "hover") continue;
			this._layers[e].clear()
		}
		return this
	}, l.prototype.modLayer = function(e, t) {
		if (t) {
			this._layerConfig[e] ? n.merge(this._layerConfig[e], t, !0) : this._layerConfig[e] = t;
			var r = this._layers[e];
			r && (r.config = this._layerConfig[e])
		}
	}, l.prototype.refreshHover = function() {
		this.clearHover();
		var e = this.storage.getHoverShapes(!0);
		for (var t = 0, n = e.length; t < n; t++) this._brushHover(e[t]);
		return this.storage.delHover(), this
	}, l.prototype.clearHover = function() {
		var e = this._layers.hover;
		return e && e.clear(), this
	}, l.prototype.showLoading = function(e) {
		return this._loadingEffect && this._loadingEffect.stop(), e && this.setLoadingEffect(e), this._loadingEffect.start(this), this.loading = !0, this
	}, l.prototype.hideLoading = function() {
		return this._loadingEffect.stop(), this.clearHover(), this.loading = !1, this
	}, l.prototype.isLoading = function() {
		return this.loading
	}, l.prototype.resize = function() {
		var e = this._domRoot;
		e.style.display = "none";
		var t = this._getWidth(),
			n = this._getHeight();
		e.style.display = "";
		if (this._width != t || n != this._height) {
			this._width = t, this._height = n, e.style.width = t + "px", e.style.height = n + "px";
			for (var r in this._layers) this._layers[r].resize(t, n);
			this.refresh(null, !0)
		}
		return this
	}, l.prototype.clearLayer = function(e) {
		var t = this._layers[e];
		t && t.clear()
	}, l.prototype.dispose = function() {
		this.isLoading() && this.hideLoading(), this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
	}, l.prototype.getDomHover = function() {
		return this._layers.hover.dom
	}, l.prototype.toDataURL = function(e, n, i) {
		if (u) return null;
		var s = c("image", "canvas", this);
		this._bgDom.appendChild(s);
		var a = s.getContext("2d");
		o != 1 && a.scale(o, o), a.fillStyle = n || "#fff", a.rect(0, 0, this._width * o, this._height * o), a.fill(), this.storage.iterShape(function(e) {
			if (!e.invisible)
				if (!e.onbrush || e.onbrush && !e.onbrush(a, !1))
					if (t.catchBrushException) try {
						e.brush(a, !1, this.updatePainter)
					} catch (n) {
						r(n, "brush error of " + e.type, e)
					} else e.brush(a, !1, this.updatePainter)
		}, {
			normal: "up",
			update: !0
		});
		var f = s.toDataURL(e, i);
		return a = null, this._bgDom.removeChild(s), f
	}, l.prototype.getWidth = function() {
		return this._width
	}, l.prototype.getHeight = function() {
		return this._height
	}, l.prototype._getWidth = function() {
		var e = this.root,
			t = e.currentStyle || document.defaultView.getComputedStyle(e);
		return ((e.clientWidth || parseInt(t.width, 10)) - parseInt(t.paddingLeft, 10) - parseInt(t.paddingRight, 10)).toFixed(0) - 0
	}, l.prototype._getHeight = function() {
		var e = this.root,
			t = e.currentStyle || document.defaultView.getComputedStyle(e);
		return ((e.clientHeight || parseInt(t.height, 10)) - parseInt(t.paddingTop, 10) - parseInt(t.paddingBottom, 10)).toFixed(0) - 0
	}, l.prototype._brushHover = function(e) {
		var n = this._layers.hover.ctx;
		if (!e.onbrush || e.onbrush && !e.onbrush(n, !0))
			if (t.catchBrushException) try {
				e.brush(n, !0, this.updatePainter)
			} catch (i) {
				r(i, "hoverBrush error of " + e.type, e)
			} else e.brush(n, !0, this.updatePainter)
	}, l.prototype._shapeToImage = function(t, n, r, i, s) {
		var o = document.createElement("canvas"),
			u = o.getContext("2d"),
			s = window.devicePixelRatio || 1;
		o.style.width = r + "px", o.style.height = i + "px", o.setAttribute("width", r * s), o.setAttribute("height", i * s), u.clearRect(0, 0, r * s, i * s);
		var a = {
			position: n.position,
			rotation: n.rotation,
			scale: n.scale
		};
		n.position = [0, 0, 0], n.rotation = 0, n.scale = [1, 1], n && n.brush(u, !1);
		var f = e("./shape/Image"),
			l = new f({
				id: t,
				style: {
					x: 0,
					y: 0,
					image: o
				}
			});
		return a.position != null && (l.position = n.position = a.position), a.rotation != null && (l.rotation = n.rotation = a.rotation), a.scale != null && (l.scale = n.scale = a.scale), l
	}, l.prototype._createShapeToImageProcessor = function() {
		if (u) return f;
		var e = this;
		return function(t, n, r, i) {
			return e._shapeToImage(t, n, r, i, o)
		}
	}, h.prototype.initContext = function() {
		this.ctx = this.dom.getContext("2d"), o != 1 && this.ctx.scale(o, o)
	}, h.prototype.createBackBuffer = function() {
		if (u) return;
		this.domBack = c("back-" + this.id, "canvas", this.painter), this.ctxBack = this.domBack.getContext("2d"), o != 1 && this.ctxBack.scale(o, o)
	}, h.prototype.resize = function(e, t) {
		this.dom.style.width = e + "px", this.dom.style.height = t + "px", this.dom.setAttribute("width", e * o), this.dom.setAttribute("height", t * o), o != 1 && this.ctx.scale(o, o), this.domBack && (this.domBack.setAttribute("width", e * o), this.domBack.setAttribute("height", t * o), o != 1 && this.ctxBack.scale(o, o))
	}, h.prototype.clear = function() {
		var e = this.config,
			t = this.dom,
			n = this.ctx,
			r = t.width,
			i = t.height;
		if (e) {
			var s = typeof e.clearColor != "undefined" && !u,
				a = e.motionBlur && !u,
				f = e.lastFrameAlpha;
			typeof f == "undefined" && (f = .7), a && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(t, 0, 0, r / o, i / o)), s ? (n.save(), n.fillStyle = this.config.clearColor, n.fillRect(0, 0, r / o, i / o), n.restore()) : n.clearRect(0, 0, r / o, i / o);
			if (a) {
				var l = this.domBack;
				n.save(), n.globalAlpha = f, n.drawImage(l, 0, 0, r / o, i / o), n.restore()
			}
		} else n.clearRect(0, 0, r / o, i / o)
	}, l
}), define("zrender/shape/Group", ["require", "../tool/guid", "../tool/util", "../tool/event", "./mixin/Transformable"], function(e) {
	function s(e) {
		e = e || {}, this.id = e.id || t();
		for (var n in e) this[n] = e[n];
		this.type = "group", this.clipShape = null, this._children = [], this._storage = null, this.__dirty = !0, i.call(this), r.call(this)
	}
	var t = e("../tool/guid"),
		n = e("../tool/util"),
		r = e("../tool/event").Dispatcher,
		i = e("./mixin/Transformable");
	return s.prototype.ignore = !1, s.prototype.children = function() {
		return this._children.slice()
	}, s.prototype.childAt = function(e) {
		return this._children[e]
	}, s.prototype.addChild = function(e) {
		if (e == this) return;
		if (e.parent == this) return;
		e.parent && e.parent.removeChild(e), this._children.push(e), e.parent = this, this._storage && this._storage !== e._storage && (this._storage.addToMap(e), e instanceof s && e.addChildrenToStorage(this._storage))
	}, s.prototype.removeChild = function(e) {
		var t = n.indexOf(this._children, e);
		this._children.splice(t, 1), e.parent = null, e._storage && (this._storage.delFromMap(e.id), e instanceof s && e.delChildrenFromStorage(e._storage))
	}, s.prototype.each = function(e, t) {
		var n = !!t;
		for (var r = 0; r < this._children.length; r++) {
			var i = this._children[r];
			n ? e.call(t, i) : e(i)
		}
	}, s.prototype.iterate = function(e, t) {
		var n = !!t;
		for (var r = 0; r < this._children.length; r++) {
			var i = this._children[r];
			n ? e.call(t, i) : e(i), i.type === "group" && i.iterate(e, t)
		}
	}, s.prototype.addChildrenToStorage = function(e) {
		for (var t = 0; t < this._children.length; t++) {
			var n = this._children[t];
			e.addToMap(n), n.type === "group" && n.addChildrenToStorage(e)
		}
	}, s.prototype.delChildrenFromStorage = function(e) {
		for (var t = 0; t < this._children.length; t++) {
			var n = this._children[t];
			e.delFromMap(n), n.type === "group" && n.delChildrenFromStorage(e)
		}
	}, n.merge(s.prototype, i.prototype, !0), n.merge(s.prototype, r.prototype, !0), s
}), define("zrender/Storage", ["require", "./tool/util", "./shape/Group"], function(e) {
	function i(e, t) {
		return e.zlevel == t.zlevel ? e.z == t.z ? e.__renderidx - t.__renderidx : e.z - t.z : e.zlevel - t.zlevel
	}

	function s() {
		this._elements = {}, this._hoverElements = [], this._roots = [], this._shapeList = [], this._shapeListOffset = 0
	}
	var t = e("./tool/util"),
		n = e("./shape/Group"),
		r = {
			hover: !1,
			normal: "down",
			update: !1
		};
	return s.prototype.iterShape = function(e, t) {
		t || (t = r);
		if (t.hover)
			for (var n = 0, i = this._hoverElements.length; n < i; n++) {
				var s = this._hoverElements[n];
				s.updateTransform();
				if (e(s)) return this
			}
		t.update && this.updateShapeList();
		switch (t.normal) {
			case "down":
				var i = this._shapeList.length;
				while (i--)
					if (e(this._shapeList[i])) return this;
				break;
			default:
				for (var n = 0, i = this._shapeList.length; n < i; n++)
					if (e(this._shapeList[n])) return this
		}
		return this
	}, s.prototype.getHoverShapes = function(e) {
		if (e)
			for (var t = 0, n = this._hoverElements.length; t < n; t++) this._hoverElements[t].updateTransform();
		return this._hoverElements
	}, s.prototype.getShapeList = function(e) {
		return e && this.updateShapeList(), this._shapeList
	}, s.prototype.updateShapeList = function() {
		this._shapeListOffset = 0;
		for (var e = 0, t = this._roots.length; e < t; e++) {
			var n = this._roots[e];
			this._updateAndAddShape(n)
		}
		this._shapeList.length = this._shapeListOffset;
		for (var e = 0, t = this._shapeList.length; e < t; e++) this._shapeList[e].__renderidx = e;
		this._shapeList.sort(i)
	}, s.prototype._updateAndAddShape = function(e) {
		if (e.ignore) return;
		e.updateTransform();
		if (e.type == "group") {
			if (e.clipShape) {
				e.clipShape.parent = e, e.clipShape.updateTransform();
				var t = e._children[0];
				t && (t.__startClip = e.clipShape)
			}
			for (var n = 0; n < e._children.length; n++) {
				var r = e._children[n];
				r.__dirty = e.__dirty || r.__dirty, this._updateAndAddShape(r)
			}
			if (e.clipShape) {
				var i = this._shapeList[this._shapeListOffset - 1];
				i && (i.__stopClip = !0)
			}
			e.__dirty = !1
		} else this._shapeList[this._shapeListOffset++] = e
	}, s.prototype.mod = function(e, r) {
		var i = this._elements[e];
		if (i) {
			i instanceof n || (i.style.__rect = null), i.__dirty = !0;
			if (r)
				if (r.parent || r._storage || r.__startClip) {
					var s = {};
					for (var o in r) {
						if (o == "parent" || o == "_storage" || o == "__startClip") continue;
						r.hasOwnProperty(o) && (s[o] = r[o])
					}
					t.merge(i, s, !0)
				} else t.merge(i, r, !0)
		}
		return this
	}, s.prototype.drift = function(e, t, n) {
		var r = this._elements[e];
		return r && (r.needTransform = !0, (!r.ondrift || r.ondrift && !r.ondrift(t, n)) && r.drift(t, n)), this
	}, s.prototype.addHover = function(e) {
		return e.updateNeedTransform(), this._hoverElements.push(e), this
	}, s.prototype.delHover = function() {
		return this._hoverElements = [], this
	}, s.prototype.hasHoverShape = function() {
		return this._hoverElements.length > 0
	}, s.prototype.addRoot = function(e) {
		e instanceof n && e.addChildrenToStorage(this), this.addToMap(e), this._roots.push(e)
	}, s.prototype.delRoot = function(e) {
		if (typeof e == "undefined") {
			for (var r = 0; r < this._roots.length; r++) {
				var i = this._roots[r];
				i instanceof n && i.delChildrenFromStorage(this)
			}
			this._elements = {}, this._hoverElements = [], this._roots = [];
			return
		}
		if (e instanceof Array) {
			for (var r = 0, s = e.length; r < s; r++) this.delRoot(e[r]);
			return
		}
		var o;
		typeof e == "string" ? o = this._elements[e] : o = e;
		var u = t.indexOf(this._roots, o);
		u >= 0 && (this.delFromMap(o.id), this._roots.splice(u, 1), o instanceof n && o.delChildrenFromStorage(this))
	}, s.prototype.addToMap = function(e) {
		return e instanceof n ? e._storage = this : e.style.__rect = null, this._elements[e.id] = e, this
	}, s.prototype.get = function(e) {
		return this._elements[e]
	}, s.prototype.delFromMap = function(e) {
		var t = this._elements[e];
		return t && (delete this._elements[e], t instanceof n && (t._storage = null)), this
	}, s.prototype.dispose = function() {
		this._elements = this._renderList = this._roots = this._hoverElements = null
	}, s
}), define("zrender/animation/easing", [], function() {
	var e = {
		Linear: function(e) {
			return e
		},
		QuadraticIn: function(e) {
			return e * e
		},
		QuadraticOut: function(e) {
			return e * (2 - e)
		},
		QuadraticInOut: function(e) {
			return (e *= 2) < 1 ? .5 * e * e : -0.5 * (--e * (e - 2) - 1)
		},
		CubicIn: function(e) {
			return e * e * e
		},
		CubicOut: function(e) {
			return --e * e * e + 1
		},
		CubicInOut: function(e) {
			return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
		},
		QuarticIn: function(e) {
			return e * e * e * e
		},
		QuarticOut: function(e) {
			return 1 - --e * e * e * e
		},
		QuarticInOut: function(e) {
			return (e *= 2) < 1 ? .5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2)
		},
		QuinticIn: function(e) {
			return e * e * e * e * e
		},
		QuinticOut: function(e) {
			return --e * e * e * e * e + 1
		},
		QuinticInOut: function(e) {
			return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
		},
		SinusoidalIn: function(e) {
			return 1 - Math.cos(e * Math.PI / 2)
		},
		SinusoidalOut: function(e) {
			return Math.sin(e * Math.PI / 2)
		},
		SinusoidalInOut: function(e) {
			return .5 * (1 - Math.cos(Math.PI * e))
		},
		ExponentialIn: function(e) {
			return e === 0 ? 0 : Math.pow(1024, e - 1)
		},
		ExponentialOut: function(e) {
			return e === 1 ? 1 : 1 - Math.pow(2, -10 * e)
		},
		ExponentialInOut: function(e) {
			return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
		},
		CircularIn: function(e) {
			return 1 - Math.sqrt(1 - e * e)
		},
		CircularOut: function(e) {
			return Math.sqrt(1 - --e * e)
		},
		CircularInOut: function(e) {
			return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
		},
		ElasticIn: function(e) {
			var t, n = .1,
				r = .4;
			return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r)))
		},
		ElasticOut: function(e) {
			var t, n = .1,
				r = .4;
			return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * e) * Math.sin((e - t) * 2 * Math.PI / r) + 1)
		},
		ElasticInOut: function(e) {
			var t, n = .1,
				r = .4;
			return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), (e *= 2) < 1 ? -0.5 * n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r) * .5 + 1)
		},
		BackIn: function(e) {
			var t = 1.70158;
			return e * e * ((t + 1) * e - t)
		},
		BackOut: function(e) {
			var t = 1.70158;
			return --e * e * ((t + 1) * e + t) + 1
		},
		BackInOut: function(e) {
			var t = 2.5949095;
			return (e *= 2) < 1 ? .5 * e * e * ((t + 1) * e - t) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
		},
		BounceIn: function(t) {
			return 1 - e.BounceOut(1 - t)
		},
		BounceOut: function(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
		},
		BounceInOut: function(t) {
			return t < .5 ? e.BounceIn(t * 2) * .5 : e.BounceOut(t * 2 - 1) * .5 + .5
		}
	};
	return e
}), define("zrender/animation/Clip", ["require", "./easing"], function(e) {
	function n(e) {
		this._targetPool = e.target || {}, this._targetPool instanceof Array || (this._targetPool = [this._targetPool]), this._life = e.life || 1e3, this._delay = e.delay || 0, this._startTime = (new Date).getTime() + this._delay, this._endTime = this._startTime + this._life * 1e3, this.loop = typeof e.loop == "undefined" ? !1 : e.loop, this.gap = e.gap || 0, this.easing = e.easing || "Linear", this.onframe = e.onframe, this.ondestroy = e.ondestroy, this.onrestart = e.onrestart
	}
	var t = e("./easing");
	return n.prototype = {
		step: function(e) {
			var n = (e - this._startTime) / this._life;
			if (n < 0) return;
			n = Math.min(n, 1);
			var r = typeof this.easing == "string" ? t[this.easing] : this.easing,
				i = typeof r == "function" ? r(n) : n;
			return this.fire("frame", i), n == 1 ? this.loop ? (this.restart(), "restart") : (this._needsRemove = !0, "destroy") : null
		},
		restart: function() {
			var e = (new Date).getTime(),
				t = (e - this._startTime) % this._life;
			this._startTime = (new Date).getTime() - t + this.gap
		},
		fire: function(e, t) {
			for (var n = 0, r = this._targetPool.length; n < r; n++) this["on" + e] && this["on" + e](this._targetPool[n], t)
		},
		constructor: n
	}, n
}), define("zrender/animation/Animation", ["require", "./Clip", "../tool/color", "../tool/util", "../tool/event"], function(e) {
	function u(e) {
		e = e || {}, this.stage = e.stage || {}, this.onframe = e.onframe || function() {}, this._clips = [], this._running = !1, this._time = 0, i.call(this)
	}

	function a(e, t) {
		return e[t]
	}

	function f(e, t, n) {
		e[t] = n
	}

	function l(e, t, n) {
		return (t - e) * n + e
	}

	function c(e, t, n, r, i) {
		var s = e.length;
		if (i == 1)
			for (var o = 0; o < s; o++) r[o] = l(e[o], t[o], n);
		else {
			var u = e[0].length;
			for (var o = 0; o < s; o++)
				for (var a = 0; a < u; a++) r[o][a] = l(e[o][a], t[o][a], n)
		}
	}

	function h(e) {
		switch (typeof e) {
			case "undefined":
			case "string":
				return !1
		}
		return typeof e.length != "undefined"
	}

	function p(e, t, n, r, i, s, o, u, a) {
		var f = e.length;
		if (a == 1)
			for (var l = 0; l < f; l++) u[l] = d(e[l], t[l], n[l], r[l], i, s, o);
		else {
			var c = e[0].length;
			for (var l = 0; l < f; l++)
				for (var h = 0; h < c; h++) u[l][h] = d(e[l][h], t[l][h], n[l][h], r[l][h], i, s, o)
		}
	}

	function d(e, t, n, r, i, s, o) {
		var u = (n - e) * .5,
			a = (r - t) * .5;
		return (2 * (t - n) + u + a) * o + (-3 * (t - n) - 2 * u - a) * s + u * i + t
	}

	function v(e) {
		if (h(e)) {
			var t = e.length;
			if (h(e[0])) {
				var n = [];
				for (var r = 0; r < t; r++) n.push(o.call(e[r]));
				return n
			}
			return o.call(e)
		}
		return e
	}

	function m(e) {
		return e[0] = Math.floor(e[0]), e[1] = Math.floor(e[1]), e[2] = Math.floor(e[2]), "rgba(" + e.join(",") + ")"
	}

	function g(e, t, n, r) {
		this._tracks = {}, this._target = e, this._loop = t || !1, this._getter = n || a, this._setter = r || f, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
	}
	var t = e("./Clip"),
		n = e("../tool/color"),
		r = e("../tool/util"),
		i = e("../tool/event").Dispatcher,
		s = window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
			setTimeout(e, 16)
		},
		o = Array.prototype.slice;
	return u.prototype = {
		add: function(e) {
			this._clips.push(e)
		},
		remove: function(e) {
			var t = r.indexOf(this._clips, e);
			t >= 0 && this._clips.splice(t, 1)
		},
		update: function() {
			var e = (new Date).getTime(),
				t = e - this._time,
				n = this._clips,
				r = n.length,
				i = [],
				s = [];
			for (var o = 0; o < r; o++) {
				var u = n[o],
					a = u.step(e);
				a && (i.push(a), s.push(u))
			}
			this.stage.update && this.stage.update();
			for (var o = 0; o < r;) n[o]._needsRemove ? (n[o] = n[r - 1], n.pop(), r--) : o++;
			r = i.length;
			for (var o = 0; o < r; o++) s[o].fire(i[o]);
			this._time = e, this.onframe(t), this.dispatch("frame", t)
		},
		start: function() {
			function t() {
				e._running && (e.update(), s(t))
			}
			var e = this;
			this._running = !0, this._time = (new Date).getTime(), s(t)
		},
		stop: function() {
			this._running = !1
		},
		clear: function() {
			this._clips = []
		},
		animate: function(e, t) {
			t = t || {};
			var n = new g(e, t.loop, t.getter, t.setter);
			return n.animation = this, n
		},
		constructor: u
	}, r.merge(u.prototype, i.prototype, !0), g.prototype = {
		when: function(e, t) {
			for (var n in t) this._tracks[n] || (this._tracks[n] = [], e !== 0 && this._tracks[n].push({
				time: 0,
				value: v(this._getter(this._target, n))
			})), this._tracks[n].push({
				time: parseInt(e, 10),
				value: t[n]
			});
			return this
		},
		during: function(e) {
			return this._onframeList.push(e), this
		},
		start: function(e) {
			var r = this,
				i = this._setter,
				s = this._getter,
				o = r._onframeList.length,
				u = e === "spline",
				a = function() {
					r._clipCount--;
					if (r._clipCount === 0) {
						r._tracks = {};
						var e = r._doneList.length;
						for (var t = 0; t < e; t++) r._doneList[t].call(r)
					}
				},
				f = function(f, v) {
					var g = f.length;
					if (!g) return;
					var y = f[0].value,
						b = h(y),
						w = !1,
						E = b && h(y[0]) ? 2 : 1;
					f.sort(function(e, t) {
						return e.time - t.time
					});
					var S;
					if (!g) return;
					S = f[g - 1].time;
					var x = [],
						T = [];
					for (var N = 0; N < g; N++) {
						x.push(f[N].time / S);
						var C = f[N].value;
						typeof C == "string" && (C = n.toArray(C), C.length === 0 && (C[0] = C[1] = C[2] = 0, C[3] = 1), w = !0), T.push(C)
					}
					var k = 0,
						L = 0,
						A, N, O, M, _, D, P;
					if (w) var H = [0, 0, 0, 0];
					var B = function(e, t) {
							if (t < L) {
								A = Math.min(k + 1, g - 1);
								for (N = A; N >= 0; N--)
									if (x[N] <= t) break;
								N = Math.min(N, g - 2)
							} else {
								for (N = k; N < g; N++)
									if (x[N] > t) break;
								N = Math.min(N - 1, g - 2)
							}
							k = N, L = t;
							var n = x[N + 1] - x[N];
							if (n === 0) return;
							O = (t - x[N]) / n;
							if (u) {
								_ = T[N], M = T[N === 0 ? N : N - 1], D = T[N > g - 2 ? g - 1 : N + 1], P = T[N > g - 3 ? g - 1 : N + 2];
								if (b) p(M, _, D, P, O, O * O, O * O * O, s(e, v), E);
								else {
									var a;
									w ? (a = p(M, _, D, P, O, O * O, O * O * O, H, 1), a = m(H)) : a = d(M, _, D, P, O, O * O, O * O * O), i(e, v, a)
								}
							} else if (b) c(T[N], T[N + 1], O, s(e, v), E);
							else {
								var a;
								w ? (c(T[N], T[N + 1], O, H, 1), a = m(H)) : a = l(T[N], T[N + 1], O), i(e, v, a)
							}
							for (N = 0; N < o; N++) r._onframeList[N](e, t)
						},
						j = new t({
							target: r._target,
							life: S,
							loop: r._loop,
							delay: r._delay,
							onframe: B,
							ondestroy: a
						});
					e && e !== "spline" && (j.easing = e), r._clipList.push(j), r._clipCount++, r.animation.add(j)
				};
			for (var v in this._tracks) f(this._tracks[v], v);
			return this
		},
		stop: function() {
			for (var e = 0; e < this._clipList.length; e++) {
				var t = this._clipList[e];
				this.animation.remove(t)
			}
			this._clipList = []
		},
		delay: function(e) {
			return this._delay = e, this
		},
		done: function(e) {
			return this._doneList.push(e), this
		}
	}, u
}), define("zrender/zrender", ["require", "./lib/excanvas", "./tool/util", "./tool/log", "./tool/guid", "./Handler", "./Painter", "./Storage", "./animation/Animation", "./tool/env"], function(e) {
	function l(e) {
		return function() {
			var t = e.animatingShapes;
			for (var n = 0, r = t.length; n < r; n++) e.storage.mod(t[n].id);
			(t.length || e._needsRefreshNextFrame) && e.refresh()
		}
	}

	function c(t, n) {
		this.id = t, this.env = e("./tool/env"), this.storage = new o, this.painter = new s(n, this.storage), this.handler = new i(n, this.storage, this.painter), this.animatingShapes = [], this.animation = new u({
			stage: {
				update: l(this)
			}
		}), this.animation.start(), this._needsRefreshNextFrame = !1
	}
	e("./lib/excanvas");
	var t = e("./tool/util"),
		n = e("./tool/log"),
		r = e("./tool/guid"),
		i = e("./Handler"),
		s = e("./Painter"),
		o = e("./Storage"),
		u = e("./animation/Animation"),
		a = {},
		f = {};
	return f.version = "2.0.2", f.init = function(e, t) {
		var n = new c(r(), e, t || {});
		return a[n.id] = n, n
	}, f.dispose = function(e) {
		if (e) e.dispose();
		else {
			for (var t in a) a[t].dispose();
			a = {}
		}
		return f
	}, f.getInstance = function(e) {
		return a[e]
	}, f.delInstance = function(e) {
		return delete a[e], f
	}, c.prototype.getId = function() {
		return this.id
	}, c.prototype.addShape = function(e) {
		return this.storage.addRoot(e), this
	}, c.prototype.addGroup = function(e) {
		return this.storage.addRoot(e), this
	}, c.prototype.delShape = function(e) {
		return this.storage.delRoot(e), this
	}, c.prototype.delGroup = function(e) {
		return this.storage.delRoot(e), this
	}, c.prototype.modShape = function(e, t) {
		return this.storage.mod(e, t), this
	}, c.prototype.modGroup = function(e, t) {
		return this.storage.mod(e, t), this
	}, c.prototype.modLayer = function(e, t) {
		return this.painter.modLayer(e, t), this
	}, c.prototype.addHoverShape = function(e) {
		return this.storage.addHover(e), this
	}, c.prototype.render = function(e) {
		return this.painter.render(e), this._needsRefreshNextFrame = !1, this
	}, c.prototype.refresh = function(e) {
		return this.painter.refresh(e), this._needsRefreshNextFrame = !1, this
	}, c.prototype.refreshNextFrame = function() {
		return this._needsRefreshNextFrame = !0, this
	}, c.prototype.refreshHover = function(e) {
		return this.painter.refreshHover(e), this
	}, c.prototype.update = function(e, t) {
		return this.painter.update(e, t), this
	}, c.prototype.resize = function() {
		return this.painter.resize(), this
	}, c.prototype.animate = function(e, r, i) {
		var s = this.storage.get(e);
		if (s) {
			var o;
			if (r) {
				var u = r.split("."),
					a = s;
				for (var f = 0, l = u.length; f < l; f++) {
					if (!a) continue;
					a = a[u[f]]
				}
				a && (o = a)
			} else o = s; if (!o) {
				n('Property "' + r + '" is not existed in shape ' + e);
				return
			}
			var c = this.animatingShapes;
			return typeof s.__aniCount == "undefined" && (s.__aniCount = 0), s.__aniCount === 0 && c.push(s), s.__aniCount++, this.animation.animate(o, {
				loop: i
			}).done(function() {
				s.__aniCount--;
				if (s.__aniCount === 0) {
					var e = t.indexOf(c, s);
					c.splice(e, 1)
				}
			})
		}
		n('Shape "' + e + '" not existed')
	}, c.prototype.clearAnimation = function() {
		this.animation.clear()
	}, c.prototype.showLoading = function(e) {
		return this.painter.showLoading(e), this
	}, c.prototype.hideLoading = function() {
		return this.painter.hideLoading(), this
	}, c.prototype.getWidth = function() {
		return this.painter.getWidth()
	}, c.prototype.getHeight = function() {
		return this.painter.getHeight()
	}, c.prototype.toDataURL = function(e, t, n) {
		return this.painter.toDataURL(e, t, n)
	}, c.prototype.shapeToImage = function(e, t, n) {
		var i = r();
		return this.painter.shapeToImage(i, e, t, n)
	}, c.prototype.on = function(e, t) {
		return this.handler.on(e, t), this
	}, c.prototype.un = function(e, t) {
		return this.handler.un(e, t), this
	}, c.prototype.trigger = function(e, t) {
		return this.handler.trigger(e, t), this
	}, c.prototype.clear = function() {
		return this.storage.delRoot(), this.painter.clear(), this
	}, c.prototype.dispose = function() {
		this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.animatingShapes = this.storage = this.painter = this.handler = null, f.delInstance(this.id)
	}, f
}), define("zrender", ["zrender/zrender"], function(e) {
	return e
}), define("echarts/util/ecQuery", ["zrender/tool/util"], function() {
	function t(e, t) {
		if (typeof e == "undefined") return;
		if (!t) return e;
		t = t.split(".");
		var n = t.length,
			r = 0;
		while (r < n) {
			e = e[t[r]];
			if (typeof e == "undefined") return;
			r++
		}
		return e
	}

	function n(e, n) {
		var r;
		for (var i = 0, s = e.length; i < s; i++) {
			r = t(e[i], n);
			if (typeof r != "undefined") return r
		}
	}

	function r(n, r) {
		var i, s = n.length;
		while (s--) {
			var o = t(n[s], r);
			typeof o != "undefined" && (typeof i == "undefined" ? i = e.clone(o) : e.merge(i, o, !0))
		}
		return i
	}
	var e = require("zrender/tool/util");
	return {
		query: t,
		deepQuery: n,
		deepMerge: r
	}
}), define("echarts/util/number", [], function() {
	function e(e) {
		return e.replace(/^\s+/, "").replace(/\s+$/, "")
	}

	function t(t, n) {
		return typeof t == "string" ? e(t).match(/%$/) ? parseFloat(t) / 100 * n : parseFloat(t) : t
	}

	function n(e, n) {
		return [t(n[0], e.getWidth()), t(n[1], e.getHeight())]
	}

	function r(e, n) {
		n instanceof Array || (n = [0, n]);
		var r = Math.min(e.getWidth(), e.getHeight()) / 2;
		return [t(n[0], r), t(n[1], r)]
	}

	function i(e) {
		return isNaN(e) ? "-" : (e = (e + "").split("."), e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (e.length > 1 ? "." + e[1] : ""))
	}
	return {
		parsePercent: t,
		parseCenter: n,
		parseRadius: r,
		addCommas: i
	}
}), define("echarts/component/base", ["require", "../config", "../util/ecQuery", "../util/number", "zrender/tool/util", "zrender/tool/env"], function(e) {
	function s(e, t, n, r, i) {
		this.ecTheme = e, this.messageCenter = t, this.zr = n, this.option = r, this.series = r.series, this.myChart = i, this.component = i.component, this._zlevelBase = this.getZlevelBase(), this.shapeList = [], this.effectList = [];
		var s = this;
		s.hoverConnect = function(e) {
			var t = (e.target || {}).hoverConnect;
			if (t) {
				var n = 10,
					r;
				if (t instanceof Array)
					for (var i = 0, o = t.length; i < o; i++) r = s.getShapeById(t[i]), s.zr.addHoverShape(r), n = Math.min(n, r.zlevel);
				else r = s.getShapeById(t), r && (s.zr.addHoverShape(r), n = Math.min(n, r.zlevel));
				n < e.target.zlevel && s.zr.addHoverShape(e.target)
			}
		}
	}
	var t = e("../config"),
		n = e("../util/ecQuery"),
		r = e("../util/number"),
		i = e("zrender/tool/util");
	return s.prototype = {
		canvasSupported: e("zrender/tool/env").canvasSupported,
		getZlevelBase: function(e) {
			e = e || this.type + "";
			switch (e) {
				case t.COMPONENT_TYPE_GRID:
				case t.COMPONENT_TYPE_AXIS_CATEGORY:
				case t.COMPONENT_TYPE_AXIS_VALUE:
				case t.COMPONENT_TYPE_POLAR:
					return 0;
				case t.CHART_TYPE_LINE:
				case t.CHART_TYPE_BAR:
				case t.CHART_TYPE_SCATTER:
				case t.CHART_TYPE_PIE:
				case t.CHART_TYPE_RADAR:
				case t.CHART_TYPE_MAP:
				case t.CHART_TYPE_K:
				case t.CHART_TYPE_CHORD:
				case t.CHART_TYPE_GUAGE:
				case t.CHART_TYPE_FUNNEL:
					return 2;
				case t.COMPONENT_TYPE_LEGEND:
				case t.COMPONENT_TYPE_DATARANGE:
				case t.COMPONENT_TYPE_DATAZOOM:
				case t.COMPONENT_TYPE_TIMELINE:
					return 4;
				case t.CHART_TYPE_ISLAND:
					return 5;
				case t.COMPONENT_TYPE_TOOLBOX:
				case t.COMPONENT_TYPE_TITLE:
					return 6;
				case t.COMPONENT_TYPE_TOOLTIP:
					return 8;
				default:
					return 0
			}
		},
		reformOption: function(e) {
			return i.merge(e || {}, i.clone(this.ecTheme[this.type] || {}))
		},
		reformCssArray: function(e) {
			if (!(e instanceof Array)) return [e, e, e, e];
			switch (e.length + "") {
				case "4":
					return e;
				case "3":
					return [e[0], e[1], e[2], e[1]];
				case "2":
					return [e[0], e[1], e[0], e[1]];
				case "1":
					return [e[0], e[0], e[0], e[0]];
				case "0":
					return [0, 0, 0, 0]
			}
		},
		getShapeById: function(e) {
			for (var t = 0, n = this.shapeList.length; t < n; t++)
				if (this.shapeList[t].id == e) return this.shapeList[t];
			return null
		},
		getFont: function(e) {
			var t = i.merge(i.clone(e) || {}, this.ecTheme.textStyle);
			return t.fontStyle + " " + t.fontWeight + " " + t.fontSize + "px " + t.fontFamily
		},
		getItemStyleColor: function(e, t, n, r) {
			return typeof e == "function" ? e(t, n, r) : e
		},
		subPixelOptimize: function(e, t) {
			return t % 2 == 1 ? e = Math.floor(e) + .5 : e = Math.round(e), e
		},
		resize: function() {
			this.refresh && this.refresh(), this.clearEffectShape && this.clearEffectShape(!0);
			var e = this;
			setTimeout(function() {
				e.animationEffect && e.animationEffect()
			}, 200)
		},
		clear: function() {
			this.clearEffectShape && this.clearEffectShape(), this.zr && this.zr.delShape(this.shapeList), this.shapeList = []
		},
		dispose: function() {
			this.clear(), this.shapeList = null, this.effectList = null
		},
		query: n.query,
		deepQuery: n.deepQuery,
		deepMerge: n.deepMerge,
		parsePercent: r.parsePercent,
		parseCenter: r.parseCenter,
		parseRadius: r.parseRadius,
		numAddCommas: r.addCommas
	}, s
}), define("zrender/tool/math", [], function() {
	function t(t, n) {
		return Math.sin(n ? t * e : t)
	}

	function n(t, n) {
		return Math.cos(n ? t * e : t)
	}

	function r(t) {
		return t * e
	}

	function i(t) {
		return t / e
	}
	var e = Math.PI / 180;
	return {
		sin: t,
		cos: n,
		degreeToRadian: r,
		radianToDegree: i
	}
}), define("zrender/shape/Star", ["require", "../tool/math", "./Base", "../tool/util"], function(e) {
	function o(e) {
		s.call(this, e)
	}
	var t = e("../tool/math"),
		n = t.sin,
		r = t.cos,
		i = Math.PI,
		s = e("./Base");
	return o.prototype = {
		type: "star",
		buildPath: function(e, t) {
			var s = t.n;
			if (!s || s < 2) return;
			var o = t.x,
				u = t.y,
				a = t.r,
				f = t.r0;
			f == null && (f = s > 4 ? a * r(2 * i / s) / r(i / s) : a / 3);
			var l = i / s,
				c = -i / 2,
				h = o + a * r(c),
				p = u + a * n(c);
			c += l;
			var d = t.pointList = [];
			d.push([h, p]);
			for (var v = 0, m = s * 2 - 1, g; v < m; v++) g = v % 2 === 0 ? f : a, d.push([o + g * r(c), u + g * n(c)]), c += l;
			d.push([h, p]), e.moveTo(d[0][0], d[0][1]);
			for (var v = 0; v < d.length; v++) e.lineTo(d[v][0], d[v][1]);
			return
		},
		getRect: function(e) {
			if (e.__rect) return e.__rect;
			var t;
			return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, e.__rect = {
				x: Math.round(e.x - e.r - t / 2),
				y: Math.round(e.y - e.r - t / 2),
				width: e.r * 2 + t,
				height: e.r * 2 + t
			}, e.__rect
		}
	}, e("../tool/util").inherits(o, s), o
}), define("zrender/shape/Heart", ["require", "./Base", "../tool/util"], function(e) {
	function n(e) {
		t.call(this, e)
	}
	var t = e("./Base");
	return n.prototype = {
		type: "heart",
		buildPath: function(e, t) {
			e.moveTo(t.x, t.y), e.bezierCurveTo(t.x + t.a / 2, t.y - t.b * 2 / 3, t.x + t.a * 2, t.y + t.b / 3, t.x, t.y + t.b), e.bezierCurveTo(t.x - t.a * 2, t.y + t.b / 3, t.x - t.a / 2, t.y - t.b * 2 / 3, t.x, t.y);
			return
		},
		getRect: function(e) {
			if (e.__rect) return e.__rect;
			var t;
			return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, e.__rect = {
				x: Math.round(e.x - e.a - t / 2),
				y: Math.round(e.y - e.b / 4 - t / 2),
				width: e.a * 2 + t,
				height: e.b * 5 / 4 + t
			}, e.__rect
		}
	}, e("../tool/util").inherits(n, t), n
}), define("zrender/shape/Droplet", ["require", "./Base", "../tool/util"], function(e) {
	function n(e) {
		t.call(this, e)
	}
	var t = e("./Base");
	return n.prototype = {
		type: "droplet",
		buildPath: function(e, t) {
			e.moveTo(t.x, t.y + t.a), e.bezierCurveTo(t.x + t.a, t.y + t.a, t.x + t.a * 3 / 2, t.y - t.a / 3, t.x, t.y - t.b), e.bezierCurveTo(t.x - t.a * 3 / 2, t.y - t.a / 3, t.x - t.a, t.y + t.a, t.x, t.y + t.a)
		},
		getRect: function(e) {
			if (e.__rect) return e.__rect;
			var t;
			return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, e.__rect = {
				x: Math.round(e.x - e.a - t / 2),
				y: Math.round(e.y - e.b - t / 2),
				width: e.a * 2 + t,
				height: e.a + e.b + t
			}, e.__rect
		}
	}, e("../tool/util").inherits(n, t), n
}), define("echarts/util/shape/Icon", ["require", "zrender/tool/util", "zrender/shape/Star", "zrender/shape/Heart", "zrender/shape/Droplet", "zrender/shape/Image", "zrender/shape/Base"], function(e) {
	function n(e, t) {
		var n = t.width / 16,
			r = t.height / 16;
		e.moveTo(t.x, t.y + t.height), e.lineTo(t.x + 5 * n, t.y + 14 * r), e.lineTo(t.x + t.width, t.y + 3 * r), e.lineTo(t.x + 13 * n, t.y), e.lineTo(t.x + 2 * n, t.y + 11 * r), e.lineTo(t.x, t.y + t.height), e.moveTo(t.x + 6 * n, t.y + 10 * r), e.lineTo(t.x + 14 * n, t.y + 2 * r), e.moveTo(t.x + 10 * n, t.y + 13 * r), e.lineTo(t.x + t.width, t.y + 13 * r), e.moveTo(t.x + 13 * n, t.y + 10 * r), e.lineTo(t.x + 13 * n, t.y + t.height), e.moveTo(t.x, t.y)
	}

	function r(e, t) {
		var n = t.width / 16,
			r = t.height / 16;
		e.moveTo(t.x, t.y + t.height), e.lineTo(t.x + 5 * n, t.y + 14 * r), e.lineTo(t.x + t.width, t.y + 3 * r), e.lineTo(t.x + 13 * n, t.y), e.lineTo(t.x + 2 * n, t.y + 11 * r), e.lineTo(t.x, t.y + t.height), e.moveTo(t.x + 6 * n, t.y + 10 * r), e.lineTo(t.x + 14 * n, t.y + 2 * r), e.moveTo(t.x + 10 * n, t.y + 13 * r), e.lineTo(t.x + t.width, t.y + 13 * r), e.moveTo(t.x, t.y)
	}

	function i(e, t) {
		var n = t.width / 16,
			r = t.height / 16;
		e.moveTo(t.x + 4 * n, t.y + 15 * r), e.lineTo(t.x + 9 * n, t.y + 13 * r), e.lineTo(t.x + 14 * n, t.y + 8 * r), e.lineTo(t.x + 11 * n, t.y + 5 * r), e.lineTo(t.x + 6 * n, t.y + 10 * r), e.lineTo(t.x + 4 * n, t.y + 15 * r), e.moveTo(t.x + 5 * n, t.y), e.lineTo(t.x + 11 * n, t.y), e.moveTo(t.x + 5 * n, t.y + r), e.lineTo(t.x + 11 * n, t.y + r), e.moveTo(t.x, t.y + 2 * r), e.lineTo(t.x + t.width, t.y + 2 * r), e.moveTo(t.x, t.y + 5 * r), e.lineTo(t.x + 3 * n, t.y + t.height), e.lineTo(t.x + 13 * n, t.y + t.height), e.lineTo(t.x + t.width, t.y + 5 * r), e.moveTo(t.x, t.y)
	}

	function s(e, t) {
		var n = t.width / 16,
			r = t.height / 16;
		e.moveTo(t.x, t.y + 3 * r), e.lineTo(t.x + 6 * n, t.y + 3 * r), e.moveTo(t.x + 3 * n, t.y), e.lineTo(t.x + 3 * n, t.y + 6 * r), e.moveTo(t.x + 3 * n, t.y + 8 * r), e.lineTo(t.x + 3 * n, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x + t.width, t.y + 3 * r), e.lineTo(t.x + 8 * n, t.y + 3 * r), e.moveTo(t.x, t.y)
	}

	function o(e, t) {
		var n = t.width / 16,
			r = t.height / 16;
		e.moveTo(t.x + 6 * n, t.y), e.lineTo(t.x + 2 * n, t.y + 3 * r), e.lineTo(t.x + 6 * n, t.y + 6 * r), e.moveTo(t.x + 2 * n, t.y + 3 * r), e.lineTo(t.x + 14 * n, t.y + 3 * r), e.lineTo(t.x + 14 * n, t.y + 11 * r), e.moveTo(t.x + 2 * n, t.y + 5 * r), e.lineTo(t.x + 2 * n, t.y + 13 * r), e.lineTo(t.x + 14 * n, t.y + 13 * r), e.moveTo(t.x + 10 * n, t.y + 10 * r), e.lineTo(t.x + 14 * n, t.y + 13 * r), e.lineTo(t.x + 10 * n, t.y + t.height), e.moveTo(t.x, t.y)
	}

	function u(e, t) {
		var n = t.width / 16,
			r = t.height / 16,
			i = t.width / 2;
		e.lineWidth = 1.5, e.arc(t.x + i, t.y + i, i - n, 0, Math.PI * 2 / 3), e.moveTo(t.x + 3 * n, t.y + t.height), e.lineTo(t.x + 0 * n, t.y + 12 * r), e.lineTo(t.x + 5 * n, t.y + 11 * r), e.moveTo(t.x, t.y + 8 * r), e.arc(t.x + i, t.y + i, i - n, Math.PI, Math.PI * 5 / 3), e.moveTo(t.x + 13 * n, t.y), e.lineTo(t.x + t.width, t.y + 4 * r), e.lineTo(t.x + 11 * n, t.y + 5 * r), e.moveTo(t.x, t.y)
	}

	function a(e, t) {
		var n = t.width / 16,
			r = t.height / 16;
		e.moveTo(t.x, t.y), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.moveTo(t.x + 2 * n, t.y + 14 * r), e.lineTo(t.x + 7 * n, t.y + 6 * r), e.lineTo(t.x + 11 * n, t.y + 11 * r), e.lineTo(t.x + 15 * n, t.y + 2 * r), e.moveTo(t.x, t.y)
	}

	function f(e, t) {
		var n = t.width / 16,
			r = t.height / 16;
		e.moveTo(t.x, t.y), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.moveTo(t.x + 3 * n, t.y + 14 * r), e.lineTo(t.x + 3 * n, t.y + 6 * r), e.lineTo(t.x + 4 * n, t.y + 6 * r), e.lineTo(t.x + 4 * n, t.y + 14 * r), e.moveTo(t.x + 7 * n, t.y + 14 * r), e.lineTo(t.x + 7 * n, t.y + 2 * r), e.lineTo(t.x + 8 * n, t.y + 2 * r), e.lineTo(t.x + 8 * n, t.y + 14 * r), e.moveTo(t.x + 11 * n, t.y + 14 * r), e.lineTo(t.x + 11 * n, t.y + 9 * r), e.lineTo(t.x + 12 * n, t.y + 9 * r), e.lineTo(t.x + 12 * n, t.y + 14 * r), e.moveTo(t.x, t.y)
	}

	function l(e, t) {
		var n = t.x,
			r = t.y,
			i = t.width,
			s = t.height,
			o = Math.round(s / 3),
			u = 3;
		while (u--) e.rect(n, r + o * u + 2, i, 2);
		e.moveTo(t.x, t.y)
	}

	function c(e, t) {
		var n = t.x,
			r = t.y,
			i = t.width,
			s = t.height,
			o = Math.round(i / 3),
			u = 3;
		while (u--) e.rect(n + o * u, r, 2, s);
		e.moveTo(t.x, t.y)
	}

	function h(e, t) {
		var n = t.width / 16;
		e.moveTo(t.x + n, t.y), e.lineTo(t.x + n, t.y + t.height), e.lineTo(t.x + 15 * n, t.y + t.height), e.lineTo(t.x + 15 * n, t.y), e.lineTo(t.x + n, t.y), e.moveTo(t.x + 3 * n, t.y + 3 * n), e.lineTo(t.x + 13 * n, t.y + 3 * n), e.moveTo(t.x + 3 * n, t.y + 6 * n), e.lineTo(t.x + 13 * n, t.y + 6 * n), e.moveTo(t.x + 3 * n, t.y + 9 * n), e.lineTo(t.x + 13 * n, t.y + 9 * n), e.moveTo(t.x + 3 * n, t.y + 12 * n), e.lineTo(t.x + 9 * n, t.y + 12 * n), e.moveTo(t.x, t.y)
	}

	function p(e, t) {
		var n = t.width / 16,
			r = t.height / 16;
		e.moveTo(t.x, t.y), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x + t.width, t.y), e.lineTo(t.x, t.y), e.moveTo(t.x + 4 * n, t.y), e.lineTo(t.x + 4 * n, t.y + 8 * r), e.lineTo(t.x + 12 * n, t.y + 8 * r), e.lineTo(t.x + 12 * n, t.y), e.moveTo(t.x + 6 * n, t.y + 11 * r), e.lineTo(t.x + 6 * n, t.y + 13 * r), e.lineTo(t.x + 10 * n, t.y + 13 * r), e.lineTo(t.x + 10 * n, t.y + 11 * r), e.lineTo(t.x + 6 * n, t.y + 11 * r), e.moveTo(t.x, t.y)
	}

	function d(e, t) {
		var n = t.x,
			r = t.y,
			i = t.width,
			s = t.height;
		e.moveTo(n, r + s / 2), e.lineTo(n + i, r + s / 2), e.moveTo(n + i / 2, r), e.lineTo(n + i / 2, r + s)
	}

	function v(e, t) {
		var n = t.width / 2,
			r = t.height / 2,
			i = Math.min(n, r);
		e.moveTo(t.x + n + i, t.y + r), e.arc(t.x + n, t.y + r, i, 0, Math.PI * 2)
	}

	function m(e, t) {
		e.rect(t.x, t.y, t.width, t.height)
	}

	function g(e, t) {
		var n = t.width / 2,
			r = t.height / 2,
			i = t.x + n,
			s = t.y + r,
			o = Math.min(n, r);
		e.moveTo(i, s - o), e.lineTo(i + o, s + o), e.lineTo(i - o, s + o), e.lineTo(i, s - o)
	}

	function y(e, t) {
		var n = t.width / 2,
			r = t.height / 2,
			i = t.x + n,
			s = t.y + r,
			o = Math.min(n, r);
		e.moveTo(i, s - o), e.lineTo(i + o, s), e.lineTo(i, s + o), e.lineTo(i - o, s), e.lineTo(i, s - o)
	}

	function b(e, t) {
		var n = t.x,
			r = t.y,
			i = t.width / 16;
		e.moveTo(n + 8 * i, r), e.lineTo(n + i, r + t.height), e.lineTo(n + 8 * i, r + t.height / 4 * 3), e.lineTo(n + 15 * i, r + t.height), e.lineTo(n + 8 * i, r)
	}

	function w(t, n) {
		var r = e("zrender/shape/Star"),
			i = n.width / 2,
			s = n.height / 2;
		r.prototype.buildPath(t, {
			x: n.x + i,
			y: n.y + s,
			r: Math.min(i, s),
			n: n.n || 5
		})
	}

	function E(t, n) {
		var r = e("zrender/shape/Heart");
		r.prototype.buildPath(t, {
			x: n.x + n.width / 2,
			y: n.y + n.height * .2,
			a: n.width / 2,
			b: n.height * .8
		})
	}

	function S(t, n) {
		var r = e("zrender/shape/Droplet");
		r.prototype.buildPath(t, {
			x: n.x + n.width * .5,
			y: n.y + n.height * .5,
			a: n.width * .5,
			b: n.height * .8
		})
	}

	function x(e, t) {
		var n = t.x,
			r = t.y - t.height / 2 * 1.5,
			i = t.width / 2,
			s = t.height / 2,
			o = Math.min(i, s);
		e.arc(n + i, r + s, o, Math.PI / 5 * 4, Math.PI / 5), e.lineTo(n + i, r + s + o * 1.5)
	}

	function T(t, n) {
		setTimeout(function() {
			var r = e("zrender/shape/Image"),
				i = new r({
					style: n
				});
			i.brush(t)
		}, 100)
	}

	function C(e) {
		N.call(this, e)
	}
	var t = e("zrender/tool/util"),
		N = e("zrender/shape/Base");
	return C.prototype = {
		type: "icon",
		iconLibrary: {
			mark: n,
			markUndo: r,
			markClear: i,
			dataZoom: s,
			dataZoomReset: o,
			restore: u,
			lineChart: a,
			barChart: f,
			stackChart: l,
			tiledChart: c,
			dataView: h,
			saveAsImage: p,
			cross: d,
			circle: v,
			rectangle: m,
			triangle: g,
			diamond: y,
			arrow: b,
			star: w,
			heart: E,
			droplet: S,
			pin: x,
			image: T
		},
		buildPath: function(e, t) {
			this.iconLibrary[t.iconType] ? this.iconLibrary[t.iconType](e, t) : (e.moveTo(t.x, t.y), e.lineTo(t.x + t.width, t.y), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x, t.y));
			return
		},
		getRect: function(e) {
			return e.__rect ? e.__rect : (e.__rect = {
				x: Math.round(e.x),
				y: Math.round(e.y - (e.iconType == "pin" ? e.height / 2 * 1.5 : 0)),
				width: e.width,
				height: e.height
			}, e.__rect)
		},
		isCover: function(e, t) {
			var n = this.getTansform(e, t);
			e = n[0], t = n[1];
			var r = this.style.__rect;
			r || (r = this.style.__rect = this.getRect(this.style));
			var i = r.height < 8 || r.width < 8 ? 4 : 0;
			return e >= r.x - i && e <= r.x + r.width + i && t >= r.y - i && t <= r.y + r.height + i ? !0 : !1
		}
	}, t.inherits(C, N), C
}), define("zrender/shape/util/dashedLineTo", [], function() {
	var e = [5, 5];
	return function(t, n, r, i, s, o) {
		if (t.setLineDash) {
			e[0] = e[1] = o, t.setLineDash(e), t.moveTo(n, r), t.lineTo(i, s);
			return
		}
		o = typeof o != "number" ? 5 : o;
		var u = i - n,
			a = s - r,
			f = Math.floor(Math.sqrt(u * u + a * a) / o);
		u /= f, a /= f;
		var l = !0;
		for (var c = 0; c < f; ++c) l ? t.moveTo(n, r) : t.lineTo(n, r), l = !l, n += u, r += a;
		t.lineTo(i, s)
	}
}), define("zrender/shape/Line", ["require", "./Base", "./util/dashedLineTo", "../tool/util"], function(e) {
	function r(e) {
		this.brushTypeOnly = "stroke", this.textPosition = "end", t.call(this, e)
	}
	var t = e("./Base"),
		n = e("./util/dashedLineTo");
	return r.prototype = {
		type: "line",
		buildPath: function(e, t) {
			if (!t.lineType || t.lineType == "solid") e.moveTo(t.xStart, t.yStart), e.lineTo(t.xEnd, t.yEnd);
			else if (t.lineType == "dashed" || t.lineType == "dotted") {
				var r = (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
				n(e, t.xStart, t.yStart, t.xEnd, t.yEnd, r)
			}
		},
		getRect: function(e) {
			if (e.__rect) return e.__rect;
			var t = e.lineWidth || 1;
			return e.__rect = {
				x: Math.min(e.xStart, e.xEnd) - t,
				y: Math.min(e.yStart, e.yEnd) - t,
				width: Math.abs(e.xStart - e.xEnd) + t,
				height: Math.abs(e.yStart - e.yEnd) + t
			}, e.__rect
		}
	}, e("../tool/util").inherits(r, t), r
}), define("zrender/tool/vector", [], function() {
	var e = typeof Float32Array == "undefined" ? Array : Float32Array,
		t = {
			create: function(t, n) {
				var r = new e(2);
				return r[0] = t || 0, r[1] = n || 0, r
			},
			copy: function(e, t) {
				e[0] = t[0], e[1] = t[1]
			},
			set: function(e, t, n) {
				e[0] = t, e[1] = n
			},
			add: function(e, t, n) {
				return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e
			},
			scaleAndAdd: function(e, t, n, r) {
				return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e
			},
			sub: function(e, t, n) {
				return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e
			},
			length: function(e) {
				return Math.sqrt(this.lengthSquare(e))
			},
			lengthSquare: function(e) {
				return e[0] * e[0] + e[1] * e[1]
			},
			mul: function(e, t, n) {
				return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e
			},
			dot: function(e, t) {
				return e[0] * t[0] + e[1] * t[1]
			},
			scale: function(e, t, n) {
				return e[0] = t[0] * n, e[1] = t[1] * n, e
			},
			normalize: function(e, n) {
				var r = t.length(n);
				return r === 0 ? (e[0] = 0, e[1] = 0) : (e[0] = n[0] / r, e[1] = n[1] / r), e
			},
			distance: function(e, t) {
				return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))
			},
			negate: function(e, t) {
				e[0] = -t[0], e[1] = -t[1]
			},
			middle: function(e, t, n) {
				return e[0] = (t[0] + n[0]) / 2, e[1] = (t[1] + n[1]) / 2, e
			},
			applyTransform: function(e, t, n) {
				var r = t[0],
					i = t[1];
				return e[0] = n[0] * r + n[2] * i + n[4], e[1] = n[1] * r + n[3] * i + n[5], e
			}
		};
	return t.len = t.length, t.dist = t.distance, t
}), define("zrender/shape/util/smoothSpline", ["require", "../../tool/vector"], function(e) {
	function n(e, t, n, r, i, s, o) {
		var u = (n - e) * .5,
			a = (r - t) * .5;
		return (2 * (t - n) + u + a) * o + (-3 * (t - n) - 2 * u - a) * s + u * i + t
	}
	var t = e("../../tool/vector");
	return function(e, r) {
		var i = e.length,
			s = [],
			o = 0;
		for (var u = 1; u < i; u++) o += t.distance(e[u - 1], e[u]);
		var a = o / 5;
		a = a < i ? i : a;
		for (var u = 0; u < a; u++) {
			var f = u / (a - 1) * (r ? i : i - 1),
				l = Math.floor(f),
				c = f - l,
				h, p = e[l % i],
				d, v;
			r ? (h = e[(l - 1 + i) % i], d = e[(l + 1) % i], v = e[(l + 2) % i]) : (h = e[l === 0 ? l : l - 1], d = e[l > i - 2 ? i - 1 : l + 1], v = e[l > i - 3 ? i - 1 : l + 2]);
			var m = c * c,
				g = c * m;
			s.push([n(h[0], p[0], d[0], v[0], c, m, g), n(h[1], p[1], d[1], v[1], c, m, g)])
		}
		return s
	}
}), define("zrender/shape/util/smoothBezier", ["require", "../../tool/vector"], function(e) {
	var t = e("../../tool/vector");
	return function(e, n, r) {
		var i = [],
			s = [],
			o = [],
			u = [],
			a, f;
		for (var l = 0, c = e.length; l < c; l++) {
			var h = e[l],
				a, f;
			if (r) a = e[l ? l - 1 : c - 1], f = e[(l + 1) % c];
			else {
				if (l === 0 || l === c - 1) {
					i.push(e[l]);
					continue
				}
				a = e[l - 1], f = e[l + 1]
			}
			t.sub(s, f, a), t.scale(s, s, n);
			var p = t.distance(h, a),
				d = t.distance(h, f),
				v = p + d;
			p /= v, d /= v, t.scale(o, s, -p), t.scale(u, s, d), i.push(t.add([], h, o)), i.push(t.add([], h, u))
		}
		return r && i.push(i.shift()), i
	}
}), define("zrender/shape/Polygon", ["require", "./Base", "./util/smoothSpline", "./util/smoothBezier", "./util/dashedLineTo", "../tool/util"], function(e) {
	function s(e) {
		t.call(this, e)
	}
	var t = e("./Base"),
		n = e("./util/smoothSpline"),
		r = e("./util/smoothBezier"),
		i = e("./util/dashedLineTo");
	return s.prototype = {
		type: "polygon",
		brush: function(e, t) {
			var n = this.style;
			t && (n = this.getHighlightStyle(n, this.highlightStyle || {})), e.save(), this.setContext(e, n), this.setTransform(e);
			var r = !1;
			if (n.brushType == "fill" || n.brushType == "both" || typeof n.brushType == "undefined") e.beginPath(), n.lineType == "dashed" || n.lineType == "dotted" ? (this.buildPath(e, {
				lineType: "solid",
				lineWidth: n.lineWidth,
				pointList: n.pointList
			}), r = !1) : (this.buildPath(e, n), r = !0), e.closePath(), e.fill();
			n.lineWidth > 0 && (n.brushType == "stroke" || n.brushType == "both") && (r || (e.beginPath(), this.buildPath(e, n), e.closePath()), e.stroke()), this.drawText(e, n, this.style), e.restore();
			return
		},
		buildPath: function(e, t) {
			var s = t.pointList;
			if (s.length < 2) return;
			if (t.smooth && t.smooth !== "spline") {
				var o = r(s, t.smooth, !0);
				e.moveTo(s[0][0], s[0][1]);
				var u, a, f, l = s.length;
				for (var c = 0; c < l; c++) u = o[c * 2], a = o[c * 2 + 1], f = s[(c + 1) % l], e.bezierCurveTo(u[0], u[1], a[0], a[1], f[0], f[1])
			} else {
				t.smooth === "spline" && (s = n(s, !0));
				if (!t.lineType || t.lineType == "solid") {
					e.moveTo(s[0][0], s[0][1]);
					for (var c = 1, h = s.length; c < h; c++) e.lineTo(s[c][0], s[c][1]);
					e.lineTo(s[0][0], s[0][1])
				} else if (t.lineType == "dashed" || t.lineType == "dotted") {
					var p = t._dashLength || (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
					t._dashLength = p, e.moveTo(s[0][0], s[0][1]);
					for (var c = 1, h = s.length; c < h; c++) i(e, s[c - 1][0], s[c - 1][1], s[c][0], s[c][1], p);
					i(e, s[s.length - 1][0], s[s.length - 1][1], s[0][0], s[0][1], p)
				}
			}
			return
		},
		getRect: function(e) {
			if (e.__rect) return e.__rect;
			var t = Number.MAX_VALUE,
				n = Number.MIN_VALUE,
				r = Number.MAX_VALUE,
				i = Number.MIN_VALUE,
				s = e.pointList;
			for (var o = 0, u = s.length; o < u; o++) s[o][0] < t && (t = s[o][0]), s[o][0] > n && (n = s[o][0]), s[o][1] < r && (r = s[o][1]), s[o][1] > i && (i = s[o][1]);
			var a;
			return e.brushType == "stroke" || e.brushType == "fill" ? a = e.lineWidth || 1 : a = 0, e.__rect = {
				x: Math.round(t - a / 2),
				y: Math.round(r - a / 2),
				width: n - t + a,
				height: i - r + a
			}, e.__rect
		}
	}, e("../tool/util").inherits(s, t), s
}), define("zrender/shape/BrokenLine", ["require", "./Base", "./util/smoothSpline", "./util/smoothBezier", "./util/dashedLineTo", "./Polygon", "../tool/util"], function(e) {
	function s(e) {
		this.brushTypeOnly = "stroke", this.textPosition = "end", t.call(this, e)
	}
	var t = e("./Base"),
		n = e("./util/smoothSpline"),
		r = e("./util/smoothBezier"),
		i = e("./util/dashedLineTo");
	return s.prototype = {
		type: "broken-line",
		buildPath: function(e, t) {
			var s = t.pointList;
			if (s.length < 2) return;
			var o = Math.min(t.pointList.length, Math.round(t.pointListLength || t.pointList.length));
			if (t.smooth && t.smooth !== "spline") {
				var u = r(s, t.smooth);
				e.moveTo(s[0][0], s[0][1]);
				var a, f, l;
				for (var c = 0; c < o - 1; c++) a = u[c * 2], f = u[c * 2 + 1], l = s[c + 1], e.bezierCurveTo(a[0], a[1], f[0], f[1], l[0], l[1])
			} else {
				t.smooth === "spline" && (s = n(s), o = s.length);
				if (!t.lineType || t.lineType == "solid") {
					e.moveTo(s[0][0], s[0][1]);
					for (var c = 1; c < o; c++) e.lineTo(s[c][0], s[c][1])
				} else if (t.lineType == "dashed" || t.lineType == "dotted") {
					var h = (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
					e.moveTo(s[0][0], s[0][1]);
					for (var c = 1; c < o; c++) i(e, s[c - 1][0], s[c - 1][1], s[c][0], s[c][1], h)
				}
			}
			return
		},
		getRect: function(t) {
			return e("./Polygon").prototype.getRect(t)
		}
	}, e("../tool/util").inherits(s, t), s
}), define("echarts/util/shape/MarkLine", ["require", "zrender/shape/Base", "./Icon", "zrender/shape/Line", "zrender/shape/BrokenLine", "zrender/tool/matrix", "zrender/tool/area", "zrender/shape/util/dashedLineTo", "zrender/shape/util/smoothSpline", "zrender/tool/util"], function(e) {
	function h(e) {
		t.call(this, e)
	}
	var t = e("zrender/shape/Base"),
		n = e("./Icon"),
		r = e("zrender/shape/Line"),
		i = new r({}),
		s = e("zrender/shape/BrokenLine"),
		o = new s({}),
		u = e("zrender/tool/matrix"),
		a = e("zrender/tool/area"),
		f = e("zrender/shape/util/dashedLineTo"),
		l = e("zrender/shape/util/smoothSpline"),
		c = e("zrender/tool/util");
	return h.prototype = {
		type: "mark-line",
		brush: function(e, t) {
			var n = this.style;
			t && (n = this.getHighlightStyle(n, this.highlightStyle || {})), e.save(), this.setContext(e, n), this.setTransform(e), e.beginPath(), this.buildLinePath(e, n), e.stroke(), this.brushSymbol(e, n, 0), this.brushSymbol(e, n, 1), this.drawText(e, n, this.style), e.restore()
		},
		buildLinePath: function(e, t) {
			var n = t.pointList || this.getPointList(t);
			t.pointList = n;
			var r = Math.min(t.pointList.length, Math.round(t.pointListLength || t.pointList.length));
			if (!t.lineType || t.lineType == "solid") {
				e.moveTo(n[0][0], n[0][1]);
				for (var i = 1; i < r; i++) e.lineTo(n[i][0], n[i][1])
			} else if (t.lineType == "dashed" || t.lineType == "dotted")
				if (t.smooth !== "spline") {
					var s = (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
					e.moveTo(n[0][0], n[0][1]);
					for (var i = 1; i < r; i++) f(e, n[i - 1][0], n[i - 1][1], n[i][0], n[i][1], s)
				} else
					for (var i = 1; i < r; i += 2) e.moveTo(n[i - 1][0], n[i - 1][1]), e.lineTo(n[i][0], n[i][1])
		},
		brushSymbol: function(e, t, r) {
			if (t.symbol[r] == "none") return;
			e.save(), e.beginPath(), e.lineWidth = t.symbolBorder, e.strokeStyle = t.symbolBorderColor, t.iconType = t.symbol[r].replace("empty", "").toLowerCase(), t.symbol[r].match("empty") && (e.fillStyle = "#fff");
			var i = Math.min(t.pointList.length, Math.round(t.pointListLength || t.pointList.length)),
				s = r === 0 ? t.pointList[0][0] : t.pointList[i - 1][0],
				o = r === 0 ? t.pointList[0][1] : t.pointList[i - 1][1],
				a = typeof t.symbolRotate[r] != "undefined" ? t.symbolRotate[r] - 0 : 0,
				f;
			a !== 0 && (f = u.create(), u.identity(f), (s || o) && u.translate(f, f, [-s, -o]), u.rotate(f, f, a * Math.PI / 180), (s || o) && u.translate(f, f, [s, o]), e.transform.apply(e, f));
			if (t.iconType == "arrow" && a === 0) this.buildArrawPath(e, t, r);
			else {
				var l = t.symbolSize[r];
				t.x = s - l, t.y = o - l, t.width = l * 2, t.height = l * 2, n.prototype.buildPath(e, t)
			}
			e.closePath(), e.fill(), e.stroke(), e.restore()
		},
		buildArrawPath: function(e, t, n) {
			var r = Math.min(t.pointList.length, Math.round(t.pointListLength || t.pointList.length)),
				i = t.symbolSize[n] * 2,
				s = t.pointList[0][0],
				o = t.pointList[r - 1][0],
				u = t.pointList[0][1],
				a = t.pointList[r - 1][1],
				f = 0;
			t.smooth === "spline" && (f = .2);
			var l = Math.atan(Math.abs((a - u) / (s - o)));
			n === 0 ? o > s ? a > u ? l = Math.PI * 2 - l + f : l += f : a > u ? l += Math.PI - f : l = Math.PI - l - f : s > o ? u > a ? l = Math.PI * 2 - l + f : l += f : u > a ? l += Math.PI - f : l = Math.PI - l - f;
			var c = Math.PI / 8,
				h = n === 0 ? s : o,
				p = n === 0 ? u : a,
				d = [
					[h + i * Math.cos(l - c), p - i * Math.sin(l - c)],
					[h + i * .6 * Math.cos(l), p - i * .6 * Math.sin(l)],
					[h + i * Math.cos(l + c), p - i * Math.sin(l + c)]
				];
			e.moveTo(h, p);
			for (var v = 0, m = d.length; v < m; v++) e.lineTo(d[v][0], d[v][1]);
			e.lineTo(h, p)
		},
		getPointList: function(e) {
			var t = [
				[e.xStart, e.yStart],
				[e.xEnd, e.yEnd]
			];
			if (e.smooth === "spline") {
				var n = t[1][0],
					r = t[1][1];
				t[3] = [n, r], t[1] = this.getOffetPoint(t[0], t[3]), t[2] = this.getOffetPoint(t[3], t[0]), t = l(t, !1), t[t.length - 1] = [n, r]
			}
			return t
		},
		getOffetPoint: function(e, t) {
			var n = Math.sqrt(Math.round((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))) / 3,
				r = [e[0], e[1]],
				i, s = .2;
			if (e[0] != t[0] && e[1] != t[1]) {
				var o = (t[1] - e[1]) / (t[0] - e[0]);
				i = Math.atan(o)
			} else e[0] == t[0] ? i = (e[1] <= t[1] ? 1 : -1) * Math.PI / 2 : i = 0;
			var u, a;
			return e[0] <= t[0] ? (i -= s, u = Math.round(Math.cos(i) * n), a = Math.round(Math.sin(i) * n), r[0] += u, r[1] += a) : (i += s, u = Math.round(Math.cos(i) * n), a = Math.round(Math.sin(i) * n), r[0] -= u, r[1] -= a), r
		},
		getRect: function(e) {
			if (e.__rect) return e.__rect;
			var t = e.lineWidth || 1;
			return e.__rect = {
				x: Math.min(e.xStart, e.xEnd) - t,
				y: Math.min(e.yStart, e.yEnd) - t,
				width: Math.abs(e.xStart - e.xEnd) + t,
				height: Math.abs(e.yStart - e.yEnd) + t
			}, e.__rect
		},
		isCover: function(e, t) {
			var n = this.getTansform(e, t);
			e = n[0], t = n[1];
			var r = this.style.__rect;
			return r || (r = this.style.__rect = this.getRect(this.style)), e >= r.x && e <= r.x + r.width && t >= r.y && t <= r.y + r.height ? this.style.smooth !== "spline" ? a.isInside(i, this.style, e, t) : a.isInside(o, this.style, e, t) : !1
		}
	}, c.inherits(h, t), h
}), define("echarts/util/shape/normalIsCover", [], function() {
	return function(e, t) {
		var n = this.getTansform(e, t);
		e = n[0], t = n[1];
		var r = this.style.__rect;
		return r || (r = this.style.__rect = this.getRect(this.style)), e >= r.x && e <= r.x + r.width && t >= r.y && t <= r.y + r.height
	}
}), define("echarts/util/shape/Symbol", ["require", "zrender/shape/Base", "zrender/shape/Polygon", "zrender/tool/util", "./normalIsCover"], function(e) {
	function s(e) {
		t.call(this, e)
	}
	var t = e("zrender/shape/Base"),
		n = e("zrender/shape/Polygon"),
		r = new n({}),
		i = e("zrender/tool/util");
	return s.prototype = {
		type: "symbol",
		buildPath: function(e, t) {
			var n = t.pointList,
				r = n.length;
			if (r === 0) return;
			var i = 1e4,
				s = Math.ceil(r / i),
				o, u, a = n[0] instanceof Array,
				f = t.size ? t.size : 2,
				l = f,
				c = f / 2,
				h = Math.PI * 2,
				p, d, v;
			for (var m = 0; m < s; m++) {
				e.beginPath(), o = m * i, u = o + i, u = u > r ? r : u;
				for (var g = o; g < u; g++) {
					t.random && (p = t["randomMap" + g % 20] / 100, l = f * p * p, c = l / 2), a ? (d = n[g][0], v = n[g][1]) : (d = n[g].x, v = n[g].y);
					if (l < 3) e.rect(d - c, v - c, l, l);
					else switch (t.iconType) {
						case "circle":
							e.moveTo(d, v), e.arc(d, v, c, 0, h, !0);
							break;
						case "diamond":
							e.moveTo(d, v - c), e.lineTo(d + c / 3, v - c / 3), e.lineTo(d + c, v), e.lineTo(d + c / 3, v + c / 3), e.lineTo(d, v + c), e.lineTo(d - c / 3, v + c / 3), e.lineTo(d - c, v), e.lineTo(d - c / 3, v - c / 3), e.lineTo(d, v - c);
							break;
						default:
							e.rect(d - c, v - c, l, l)
					}
				}
				e.closePath();
				if (m < s - 1) switch (t.brushType) {
					case "both":
						e.fill(), t.lineWidth > 0 && e.stroke();
						break;
					case "stroke":
						t.lineWidth > 0 && e.stroke();
						break;
					default:
						e.fill()
				}
			}
		},
		getRect: function(e) {
			return e.__rect || r.getRect(e)
		},
		isCover: e("./normalIsCover")
	}, i.inherits(s, t), s
}), define("echarts/util/ecData", [], function() {
	function e(e, t, n, r, i, s, o, u) {
		var a;
		return typeof r != "undefined" && (a = r.value == null ? r : r.value), e._echartsData = {
			_series: t,
			_seriesIndex: n,
			_data: r,
			_dataIndex: i,
			_name: s,
			_value: a,
			_special: o,
			_special2: u
		}, e._echartsData
	}

	function t(e, t) {
		var n = e._echartsData;
		if (!t) return n;
		switch (t) {
			case "series":
			case "seriesIndex":
			case "data":
			case "dataIndex":
			case "name":
			case "value":
			case "special":
			case "special2":
				return n && n["_" + t]
		}
		return null
	}

	function n(e, t, n) {
		e._echartsData = e._echartsData || {};
		switch (t) {
			case "series":
			case "seriesIndex":
			case "data":
			case "dataIndex":
			case "name":
			case "value":
			case "special":
			case "special2":
				e._echartsData["_" + t] = n
		}
	}

	function r(e, t) {
		t._echartsData = {
			_series: e._echartsData._series,
			_seriesIndex: e._echartsData._seriesIndex,
			_data: e._echartsData._data,
			_dataIndex: e._echartsData._dataIndex,
			_name: e._echartsData._name,
			_value: e._echartsData._value,
			_special: e._echartsData._special,
			_special2: e._echartsData._special2
		}
	}
	return {
		pack: e,
		set: n,
		get: t,
		clone: r
	}
}), define("echarts/util/ecAnimation", ["require", "zrender/tool/util", "zrender/shape/Polygon"], function(e) {
	function n(e, n, r, i, s) {
		var o = r.style.pointList,
			u = o.length,
			a;
		if (!n) {
			a = [];
			if (r._orient != "vertical") {
				var f = o[0][1];
				for (var l = 0; l < u; l++) a[l] = [o[l][0], f]
			} else {
				var c = o[0][0];
				for (var l = 0; l < u; l++) a[l] = [c, o[l][1]]
			}
			r.type == "half-smooth-polygon" && (a[u - 1] = t.clone(o[u - 1]), a[u - 2] = t.clone(o[u - 2])), n = {
				style: {
					pointList: a
				}
			}
		}
		a = n.style.pointList;
		var h = a.length;
		h == u ? r.style.pointList = a : h < u ? r.style.pointList = a.concat(o.slice(h)) : r.style.pointList = a.slice(0, u), e.addShape(r), e.animate(r.id, "style").when(i, {
			pointList: o
		}).start(s)
	}

	function r(e, t) {
		var n = arguments.length;
		for (var r = 2; r < n; r++) {
			var i = arguments[r];
			e.style[i] = t.style[i]
		}
	}

	function i(e, t, n, i, s) {
		var o = n.style;
		t || (t = {
			style: {
				x: o.x,
				y: n._orient == "vertical" ? o.y + o.height : o.y,
				width: n._orient == "vertical" ? o.width : 0,
				height: n._orient != "vertical" ? o.height : 0
			}
		});
		var u = o.x,
			a = o.y,
			f = o.width,
			l = o.height;
		r(n, t, "x", "y", "width", "height"), e.addShape(n), e.animate(n.id, "style").when(i, {
			x: u,
			y: a,
			width: f,
			height: l
		}).start(s)
	}

	function s(e, t, n, r, i) {
		if (!t) {
			var s = n.style.y;
			t = {
				style: {
					y: [s[0], s[0], s[0], s[0]]
				}
			}
		}
		var o = n.style.y;
		n.style.y = t.style.y, e.addShape(n), e.animate(n.id, "style").when(r, {
			y: o
		}).start(i)
	}

	function o(e, t, n, r, i) {
		var s = n.style.x,
			o = n.style.y,
			u = n.style.r0,
			a = n.style.r;
		n._animationAdd != "r" ? (n.style.r0 = 0, n.style.r = 0, n.rotation = [Math.PI * 2, s, o], e.addShape(n), e.animate(n.id, "style").when(r, {
			r0: u,
			r: a
		}).start(i), e.animate(n.id, "").when(Math.round(r / 3 * 2), {
			rotation: [0, s, o]
		}).start(i)) : (n.style.r0 = n.style.r, e.addShape(n), e.animate(n.id, "style").when(r, {
			r0: u
		}).start(i))
	}

	function u(e, t, n, i, s) {
		t || (n._animationAdd != "r" ? t = {
			style: {
				startAngle: n.style.startAngle,
				endAngle: n.style.startAngle
			}
		} : t = {
			style: {
				r0: n.style.r
			}
		});
		var o = n.style.startAngle,
			u = n.style.endAngle;
		r(n, t, "startAngle", "endAngle"), e.addShape(n), e.animate(n.id, "style").when(i, {
			startAngle: o,
			endAngle: u
		}).start(s)
	}

	function a(e, t, n, i, s) {
		t || (t = {
			style: {
				x: n.style.textAlign == "left" ? n.style.x + 100 : n.style.x - 100,
				y: n.style.y
			}
		});
		var o = n.style.x,
			u = n.style.y;
		r(n, t, "x", "y"), e.addShape(n), e.animate(n.id, "style").when(i, {
			x: o,
			y: u
		}).start(s)
	}

	function f(t, n, r, i, s) {
		var o = e("zrender/shape/Polygon").prototype.getRect(r.style),
			u = o.x + o.width / 2,
			a = o.y + o.height / 2;
		r.scale = [.1, .1, u, a], t.addShape(r), t.animate(r.id, "").when(i, {
			scale: [1, 1, u, a]
		}).start(s)
	}

	function l(e, t, n, i, s) {
		t || (t = {
			style: {
				source0: 0,
				source1: 360,
				target0: 0,
				target1: 360
			}
		});
		var o = n.style.source0,
			u = n.style.source1,
			a = n.style.target0,
			f = n.style.target1;
		t.style && r(n, t, "source0", "source1", "target0", "target1"), e.addShape(n), e.animate(n.id, "style").when(i, {
			source0: o,
			source1: u,
			target0: a,
			target1: f
		}).start(s)
	}

	function c(e, t, n, r, i) {
		t || (t = {
			style: {
				angle: n.style.startAngle
			}
		});
		var s = n.style.angle;
		n.style.angle = t.style.angle, e.addShape(n), e.animate(n.id, "style").when(r, {
			angle: s
		}).start(i)
	}

	function h(e, t, n, r, s) {
		n.style._x = n.style.x, n.style._y = n.style.y, n.style._width = n.style.width, n.style._height = n.style.height;
		if (!t) {
			var o = n._x || 0,
				u = n._y || 0;
			n.scale = [0, 0, o, u], e.addShape(n), e.animate(n.id, "").when(r, {
				scale: [1, 1, o, u]
			}).start(s || "QuinticOut")
		} else i(e, t, n, r, s)
	}

	function p(e, t, n, i, s) {
		t || (t = {
			style: {
				xEnd: n.style.xStart,
				yEnd: n.style.yStart
			}
		});
		var o = n.style.xStart,
			u = n.style.xEnd,
			a = n.style.yStart,
			f = n.style.yEnd;
		r(n, t, "xStart", "xEnd", "yStart", "yEnd"), e.addShape(n), e.animate(n.id, "style").when(i, {
			xStart: o,
			xEnd: u,
			yStart: a,
			yEnd: f
		}).start(s)
	}

	function d(e, t, n, r, i) {
		n.style.smooth ? (n.style.pointListLength = 1, e.addShape(n), n.style.pointList = n.style.pointList || n.getPointList(n.style), e.animate(n.id, "style").when(r, {
			pointListLength: n.style.pointList.length
		}).start(i || "QuinticOut")) : (n.style.pointList = t ? t.style.pointList : [
			[n.style.xStart, n.style.yStart],
			[n.style.xStart, n.style.yStart]
		], e.addShape(n), e.animate(n.id, "style").when(r, {
			pointList: [
				[n.style.xStart, n.style.yStart],
				[n._x || 0, n._y || 0]
			]
		}).start(i || "QuinticOut"))
	}
	var t = e("zrender/tool/util");
	return {
		pointList: n,
		rectangle: i,
		candle: s,
		ring: o,
		sector: u,
		text: a,
		polygon: f,
		chord: l,
		gaugePointer: c,
		icon: h,
		line: p,
		markline: d
	}
}), define("zrender/shape/Circle", ["require", "./Base", "../tool/util"], function(e) {
	function n(e) {
		t.call(this, e)
	}
	var t = e("./Base");
	return n.prototype = {
		type: "circle",
		buildPath: function(e, t) {
			e.arc(t.x, t.y, t.r, 0, Math.PI * 2, !0);
			return
		},
		getRect: function(e) {
			if (e.__rect) return e.__rect;
			var t;
			return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, e.__rect = {
				x: Math.round(e.x - e.r - t / 2),
				y: Math.round(e.y - e.r - t / 2),
				width: e.r * 2 + t,
				height: e.r * 2 + t
			}, e.__rect
		}
	}, e("../tool/util").inherits(n, t), n
}), define("echarts/util/ecEffect", ["require", "../util/ecData", "zrender/shape/Circle", "zrender/shape/Image", "../util/shape/Icon", "../util/shape/Symbol", "zrender/tool/env"], function(e) {
	function u(e, n, s, u) {
		var a = s.effect,
			f = a.color || s.style.strokeColor || s.style.color,
			l = a.shadowColor || f,
			c = a.scaleSize,
			h = typeof a.shadowBlur != "undefined" ? a.shadowBlur : c,
			p = new i({
				zlevel: u,
				style: {
					brushType: "stroke",
					iconType: s.style.iconType != "pin" && s.style.iconType != "droplet" ? s.style.iconType : "circle",
					x: h + 1,
					y: h + 1,
					n: s.style.n,
					width: s.style.width * c,
					height: s.style.height * c,
					lineWidth: 1,
					strokeColor: f,
					shadowColor: l,
					shadowBlur: h
				},
				draggable: !1,
				hoverable: !1
			});
		o && (p.style.image = e.shapeToImage(p, p.style.width + h * 2 + 2, p.style.height + h * 2 + 2).style.image, p = new r({
			zlevel: p.zlevel,
			style: p.style,
			draggable: !1,
			hoverable: !1
		})), t.clone(s, p), p.position = s.position, n.push(p), e.addShape(p);
		var d = window.devicePixelRatio || 1,
			v = (p.style.width / d - s.style.width) / 2;
		p.style.x = s.style._x - v, p.style.y = s.style._y - v;
		var m = (a.period + Math.random() * 10) * 100;
		e.modShape(s.id, {
			invisible: !0
		});
		var g = p.style.x + p.style.width / 2 / d,
			y = p.style.y + p.style.height / 2 / d;
		e.modShape(p.id, {
			scale: [.1, .1, g, y]
		}), e.animate(p.id, "", a.loop).when(m, {
			scale: [1, 1, g, y]
		}).done(function() {
			s.effect.show = !1, e.delShape(p.id)
		}).start()
	}

	function a(e, t, n, r) {
		var i = n.effect,
			o = i.color || n.style.strokeColor || n.style.color,
			u = i.scaleSize,
			a = i.shadowColor || o,
			f = typeof i.shadowBlur != "undefined" ? i.shadowBlur : u * 2,
			l = window.devicePixelRatio || 1,
			c = new s({
				zlevel: r,
				position: n.position,
				scale: n.scale,
				style: {
					pointList: n.style.pointList,
					iconType: n.style.iconType,
					color: o,
					strokeColor: o,
					shadowColor: a,
					shadowBlur: f * l,
					random: !0,
					brushType: "fill",
					lineWidth: 1,
					size: n.style.size
				},
				draggable: !1,
				hoverable: !1
			});
		t.push(c), e.addShape(c), e.modShape(n.id, {
			invisible: !0
		});
		var h = Math.round(i.period * 100),
			p = {},
			d = {};
		for (var v = 0; v < 20; v++) c.style["randomMap" + v] = 0, p = {}, p["randomMap" + v] = 100, d = {}, d["randomMap" + v] = 0, c.style["randomMap" + v] = Math.random() * 100, e.animate(c.id, "style", !0).when(h, p).when(h * 2, d).when(h * 3, p).when(h * 4, p).delay(Math.random() * h * v).start()
	}

	function f(e, i, s, u) {
		var a = s.effect,
			f = a.color || s.style.strokeColor || s.style.color,
			l = a.shadowColor || s.style.strokeColor || f,
			c = s.style.lineWidth * a.scaleSize,
			h = typeof a.shadowBlur != "undefined" ? a.shadowBlur : c,
			p = new n({
				zlevel: u,
				style: {
					x: h,
					y: h,
					r: c,
					color: f,
					shadowColor: l,
					shadowBlur: h
				},
				draggable: !1,
				hoverable: !1
			}),
			d;
		o ? (p.style.image = e.shapeToImage(p, (c + h) * 2, (c + h) * 2).style.image, p = new r({
			zlevel: p.zlevel,
			style: p.style,
			draggable: !1,
			hoverable: !1
		}), d = h) : d = 0, t.clone(s, p), p.position = s.position, i.push(p), e.addShape(p), p.style.x = s.style.xStart - d, p.style.y = s.style.yStart - d;
		var v = (s.style.xStart - s.style.xEnd) * (s.style.xStart - s.style.xEnd) + (s.style.yStart - s.style.yEnd) * (s.style.yStart - s.style.yEnd),
			m = Math.round(Math.sqrt(Math.round(v * a.period * a.period)));
		if (!s.style.smooth) e.animate(p.id, "style", a.loop).when(m, {
			x: s._x - d,
			y: s._y - d
		}).done(function() {
			s.effect.show = !1, e.delShape(p.id)
		}).start();
		else {
			var g = s.style.pointList || s.getPointList(s.style),
				y = g.length;
			m = Math.round(m / y);
			var b = e.animate(p.id, "style", a.loop),
				w = Math.ceil(y / 8);
			for (var E = 0; E < y - w; E += w) b.when(m * (E + 1), {
				x: g[E][0] - d,
				y: g[E][1] - d
			});
			b.when(m * y, {
				x: g[y - 1][0] - d,
				y: g[y - 1][1] - d
			}), b.done(function() {
				s.effect.show = !1, e.delShape(p.id)
			}), b.start("spline")
		}
	}
	var t = e("../util/ecData"),
		n = e("zrender/shape/Circle"),
		r = e("zrender/shape/Image"),
		i = e("../util/shape/Icon"),
		s = e("../util/shape/Symbol"),
		o = e("zrender/tool/env").canvasSupported;
	return {
		point: u,
		largePoint: a,
		line: f
	}
}), define("echarts/util/accMath", [], function() {
	function e(e, n) {
		return t(e, 1 / n)
	}

	function t(e, t) {
		var n = 0,
			r = e.toString(),
			i = t.toString();
		try {
			n += r.split(".")[1].length
		} catch (s) {}
		try {
			n += i.split(".")[1].length
		} catch (s) {}
		return (r.replace(".", "") - 0) * (i.replace(".", "") - 0) / Math.pow(10, n)
	}

	function n(e, t) {
		var n = 0,
			r = 0;
		try {
			n = e.toString().split(".")[1].length
		} catch (i) {}
		try {
			r = t.toString().split(".")[1].length
		} catch (i) {}
		var s = Math.pow(10, Math.max(n, r));
		return (Math.round(e * s) + Math.round(t * s)) / s
	}

	function r(e, t) {
		return n(e, -t)
	}
	return {
		accDiv: e,
		accMul: t,
		accAdd: n,
		accSub: r
	}
}), define("echarts/chart/base", ["require", "zrender/shape/Image", "../util/shape/Icon", "../util/shape/MarkLine", "../util/shape/Symbol", "../config", "../util/ecData", "../util/ecAnimation", "../util/ecEffect", "../util/accMath", "zrender/tool/util", "zrender/tool/area"], function(e) {
	function h() {
		var e = this;
		this.selectedMap = {}, this.lastShapeList = [], this.shapeHandler = {
			onclick: function() {
				e.isClick = !0
			},
			ondragover: function(t) {
				var n = t.target;
				n.highlightStyle = n.highlightStyle || {};
				var r = n.highlightStyle,
					i = r.brushTyep,
					s = r.strokeColor,
					o = r.lineWidth;
				r.brushType = "stroke", r.strokeColor = e.ecTheme.calculableColor, r.lineWidth = n.type == "icon" ? 30 : 10, e.zr.addHoverShape(n), setTimeout(function() {
					n.highlightStyle && (n.highlightStyle.brushType = i, n.highlightStyle.strokeColor = s, n.highlightStyle.lineWidth = o)
				}, 20)
			},
			ondrop: function(t) {
				typeof o.get(t.dragged, "data") != "undefined" && (e.isDrop = !0)
			},
			ondragend: function() {
				e.isDragend = !0
			}
		}
	}
	var t = e("zrender/shape/Image"),
		n = e("../util/shape/Icon"),
		r = e("../util/shape/MarkLine"),
		i = e("../util/shape/Symbol"),
		s = e("../config"),
		o = e("../util/ecData"),
		u = e("../util/ecAnimation"),
		a = e("../util/ecEffect"),
		f = e("../util/accMath"),
		l = e("zrender/tool/util"),
		c = e("zrender/tool/area");
	return h.prototype = {
		setCalculable: function(e) {
			return e.dragEnableTime = this.ecTheme.DRAG_ENABLE_TIME, e.ondragover = this.shapeHandler.ondragover, e.ondragend = this.shapeHandler.ondragend, e.ondrop = this.shapeHandler.ondrop, e
		},
		ondrop: function(e, t) {
			if (!this.isDrop || !e.target) return;
			var n = e.target,
				r = e.dragged,
				i = o.get(n, "seriesIndex"),
				u = o.get(n, "dataIndex"),
				a = this.series,
				l, c = this.component.legend;
			if (u == -1) {
				l = {
					value: o.get(r, "value"),
					name: o.get(r, "name")
				}, this.type == s.CHART_TYPE_PIE && l.value < 0 && (l.value = 0);
				var h = !1,
					p = a[i].data;
				for (var d = 0, v = p.length; d < v; d++) p[d].name == l.name && p[d].value == "-" && (a[i].data[d].value = l.value, h = !0);
				!h && a[i].data.push(l), c && c.add(l.name, r.style.color || r.style.strokeColor)
			} else {
				l = this.option.series[i].data[u] || "-";
				if (typeof l.value != "undefined") {
					l.value != "-" ? this.option.series[i].data[u].value = f.accAdd(this.option.series[i].data[u].value, o.get(r, "value")) : this.option.series[i].data[u].value = o.get(r, "value");
					if (this.type == s.CHART_TYPE_FUNNEL || this.type == s.CHART_TYPE_PIE) c && c.getRelatedAmount(l.name) == 1 && this.component.legend.del(l.name), l.name += this.option.nameConnector + o.get(r, "name"), c && c.add(l.name, r.style.color || r.style.strokeColor)
				} else l != "-" ? this.option.series[i].data[u] = f.accAdd(this.option.series[i].data[u], o.get(r, "value")) : this.option.series[i].data[u] = o.get(r, "value")
			}
			t.dragIn = t.dragIn || !0, this.isDrop = !1;
			var m = this;
			setTimeout(function() {
				m.zr.trigger("mousemove", e.event)
			}, 300);
			return
		},
		ondragend: function(e, t) {
			if (!this.isDragend || !e.target) return;
			var n = e.target,
				r = o.get(n, "seriesIndex"),
				i = o.get(n, "dataIndex"),
				s = this.series;
			if (typeof s[r].data[i].value != "undefined") {
				s[r].data[i].value = "-";
				var u = s[r].data[i].name;
				this.component.legend && this.component.legend.getRelatedAmount(u) === 0 && this.component.legend.del(u)
			} else s[r].data[i] = "-";
			t.dragOut = !0, t.needRefresh = !0, this.isDragend = !1;
			return
		},
		onlegendSelected: function(e, t) {
			var n = e.selected;
			for (var r in this.selectedMap) this.selectedMap[r] != n[r] && (t.needRefresh = !0), this.selectedMap[r] = n[r];
			return
		},
		addLabel: function(e, t, n, r, i) {
			var s = [n, t],
				o = this.deepMerge(s, "itemStyle.normal.label"),
				u = this.deepMerge(s, "itemStyle.emphasis.label"),
				a = o.textStyle || {},
				f = u.textStyle || {};
			return o.show && (e.style.text = this._getLabelText(t, n, r, "normal"), e.style.textPosition = typeof o.position == "undefined" ? i == "horizontal" ? "right" : "top" : o.position, e.style.textColor = a.color, e.style.textFont = this.getFont(a)), u.show && (e.highlightStyle.text = this._getLabelText(t, n, r, "emphasis"), e.highlightStyle.textPosition = o.show ? e.style.textPosition : typeof u.position == "undefined" ? i == "horizontal" ? "right" : "top" : u.position, e.highlightStyle.textColor = f.color, e.highlightStyle.textFont = this.getFont(f)), e
		},
		_getLabelText: function(e, t, n, r) {
			var i = this.deepQuery([t, e], "itemStyle." + r + ".label.formatter");
			!i && r == "emphasis" && (i = this.deepQuery([t, e], "itemStyle.normal.label.formatter"));
			var s = typeof t != "undefined" ? typeof t.value != "undefined" ? t.value : t : "-";
			if (!i) return s;
			if (typeof i == "function") return i.call(this.myChart, e.name, n, s);
			if (typeof i == "string") return i = i.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}"), i = i.replace("{a0}", e.name).replace("{b0}", n).replace("{c0}", s), i
		},
		buildMark: function(e) {
			var t = this.series[e];
			this.selectedMap[t.name] && (t.markPoint && this._buildMarkPoint(e), t.markLine && this._buildMarkLine(e))
		},
		_buildMarkPoint: function(e) {
			var t = (this.markAttachStyle || {})[e],
				n = this.series[e],
				r = this.getZlevelBase(),
				i, o, u = l.clone(n.markPoint);
			for (var a = 0, f = u.data.length; a < f; a++) i = u.data[a], o = this.getMarkCoord(e, i), u.data[a].x = typeof i.x != "undefined" ? i.x : o[0], u.data[a].y = typeof i.y != "undefined" ? i.y : o[1], i.type && (i.type == "max" || i.type == "min") && (u.data[a].value = o[3], u.data[a].name = i.name || i.type, u.data[a].symbolSize = u.data[a].symbolSize || c.getTextWidth(o[3], this.getFont()) / 2 + 5);
			var h = this._markPoint(e, u);
			for (var a = 0, f = h.length; a < f; a++) {
				h[a].zlevel = r + 1;
				for (var p in t) h[a][p] = l.clone(t[p]);
				this.shapeList.push(h[a])
			}
			if (this.type == s.CHART_TYPE_FORCE || this.type == s.CHART_TYPE_CHORD)
				for (var a = 0, f = h.length; a < f; a++) this.zr.addShape(h[a])
		},
		_buildMarkLine: function(e) {
			var t = (this.markAttachStyle || {})[e],
				n = this.series[e],
				r = this.getZlevelBase(),
				i, o, u = l.clone(n.markLine);
			for (var a = 0, f = u.data.length; a < f; a++) i = u.data[a], !i.type || i.type != "max" && i.type != "min" && i.type != "average" ? o = [this.getMarkCoord(e, i[0]), this.getMarkCoord(e, i[1])] : (o = this.getMarkCoord(e, i), u.data[a] = [l.clone(i), {}], u.data[a][0].name = i.name || i.type, u.data[a][0].value = o[3], o = o[2], i = [{}, {}]), u.data[a][0].x = typeof i[0].x != "undefined" ? i[0].x : o[0][0], u.data[a][0].y = typeof i[0].y != "undefined" ? i[0].y : o[0][1], u.data[a][1].x = typeof i[1].x != "undefined" ? i[1].x : o[1][0], u.data[a][1].y = typeof i[1].y != "undefined" ? i[1].y : o[1][1];
			var c = this._markLine(e, u);
			for (var a = 0, f = c.length; a < f; a++) {
				c[a].zlevel = r + 1;
				for (var h in t) c[a][h] = l.clone(t[h]);
				this.shapeList.push(c[a])
			}
			if (this.type == s.CHART_TYPE_FORCE || this.type == s.CHART_TYPE_CHORD)
				for (var a = 0, f = c.length; a < f; a++) this.zr.addShape(c[a])
		},
		_markPoint: function(e, t) {
			var n = this.series[e],
				r = this.component;
			l.merge(t, this.ecTheme.markPoint), t.name = n.name;
			var i = [],
				u = t.data,
				a, f = r.dataRange,
				c = r.legend,
				h, p, d, v, m, g, y = this.zr.getWidth(),
				b = this.zr.getHeight();
			if (!t.large)
				for (var w = 0, E = u.length; w < E; w++) {
					p = typeof u[w] != "undefined" && typeof u[w].value != "undefined" ? u[w].value : "", c && (h = c.getColor(n.name));
					if (f) {
						h = isNaN(p) ? h : f.getColor(p), d = [u[w], t], v = this.deepQuery(d, "itemStyle.normal.color") || h, m = this.deepQuery(d, "itemStyle.emphasis.color") || v;
						if (v == null && m == null) continue
					}
					u[w].tooltip = u[w].tooltip || {
						trigger: "item"
					}, u[w].name = typeof u[w].name != "undefined" ? u[w].name : "", u[w].value = p, a = this.getSymbolShape(t, e, u[w], w, u[w].name, this.parsePercent(u[w].x, y), this.parsePercent(u[w].y, b), "pin", h, "rgba(0,0,0,0)", "horizontal"), a._mark = "point", g = this.deepMerge([u[w], t], "effect"), g.show && (a.effect = g), n.type == s.CHART_TYPE_MAP && (a._geo = this.getMarkGeo(u[w])), o.pack(a, n, e, u[w], w, u[w].name, p), i.push(a)
				} else a = this.getLargeMarkPoingShape(e, t), a._mark = "largePoint", a && i.push(a);
			return i
		},
		_markLine: function(e, t) {
			var n = this.series[e],
				r = this.component;
			l.merge(t, this.ecTheme.markLine), t.symbol = t.symbol instanceof Array ? t.symbol.length > 1 ? t.symbol : [t.symbol[0], t.symbol[0]] : [t.symbol, t.symbol], t.symbolSize = t.symbolSize instanceof Array ? t.symbolSize.length > 1 ? t.symbolSize : [t.symbolSize[0], t.symbolSize[0]] : [t.symbolSize, t.symbolSize], t.symbolRotate = t.symbolRotate instanceof Array ? t.symbolRotate.length > 1 ? t.symbolRotate : [t.symbolRotate[0], t.symbolRotate[0]] : [t.symbolRotate, t.symbolRotate], t.name = n.name;
			var i = [],
				u = t.data,
				a, f = r.dataRange,
				c = r.legend,
				h, p, d, v, m, g, y = this.zr.getWidth(),
				b = this.zr.getHeight(),
				w;
			for (var E = 0, S = u.length; E < S; E++) {
				c && (h = c.getColor(n.name)), w = this.deepMerge(u[E]), p = typeof w != "undefined" && typeof w.value != "undefined" ? w.value : "";
				if (f) {
					h = isNaN(p) ? h : f.getColor(p), d = [w, t], v = this.deepQuery(d, "itemStyle.normal.color") || h, m = this.deepQuery(d, "itemStyle.emphasis.color") || v;
					if (v == null && m == null) continue
				}
				u[E][0].tooltip = w.tooltip || {
					trigger: "item"
				}, u[E][0].name = typeof u[E][0].name != "undefined" ? u[E][0].name : "", u[E][1].name = typeof u[E][1].name != "undefined" ? u[E][1].name : "", u[E][0].value = typeof u[E][0].value != "undefined" ? u[E][0].value : "", a = this.getLineMarkShape(t, e, u[E], E, this.parsePercent(u[E][0].x, y), this.parsePercent(u[E][0].y, b), this.parsePercent(u[E][1].x, y), this.parsePercent(u[E][1].y, b), h), a._mark = "line", g = this.deepMerge([w, t], "effect"), g.show && (a.effect = g), n.type == s.CHART_TYPE_MAP && (a._geo = [this.getMarkGeo(u[E][0]), this.getMarkGeo(u[E][1])]), o.pack(a, n, e, u[E][0], E, u[E][0].name + (u[E][1].name !== "" ? " > " + u[E][1].name : ""), p), i.push(a)
			}
			return i
		},
		getMarkCoord: function() {
			return [0, 0]
		},
		getSymbolShape: function(e, r, i, s, u, a, f, l, c, h, p) {
			var d = [i, e],
				v = typeof i != "undefined" ? typeof i.value != "undefined" ? i.value : i : "-";
			l = this.deepQuery(d, "symbol") || l;
			var m = this.deepQuery(d, "symbolSize");
			m = typeof m == "function" ? m(v) : m;
			var g = this.deepQuery(d, "symbolRotate"),
				y = this.deepMerge(d, "itemStyle.normal"),
				b = this.deepMerge(d, "itemStyle.emphasis"),
				w = typeof y.borderWidth != "undefined" ? y.borderWidth : y.lineStyle && y.lineStyle.width;
			typeof w == "undefined" && (w = l.match("empty") ? 2 : 0);
			var E = typeof b.borderWidth != "undefined" ? b.borderWidth : b.lineStyle && b.lineStyle.width;
			typeof E == "undefined" && (E = w + 2);
			var S = new n({
				style: {
					iconType: l.replace("empty", "").toLowerCase(),
					x: a - m,
					y: f - m,
					width: m * 2,
					height: m * 2,
					brushType: "both",
					color: l.match("empty") ? h : this.getItemStyleColor(y.color, r, s, i) || c,
					strokeColor: y.borderColor || this.getItemStyleColor(y.color, r, s, i) || c,
					lineWidth: w
				},
				highlightStyle: {
					color: l.match("empty") ? h : this.getItemStyleColor(b.color, r, s, i),
					strokeColor: b.borderColor || y.borderColor || this.getItemStyleColor(y.color, r, s, i) || c,
					lineWidth: E
				},
				clickable: !0
			});
			return l.match("image") && (S.style.image = l.replace(new RegExp("^image:\\/\\/"), ""), S = new t({
				style: S.style,
				highlightStyle: S.highlightStyle,
				clickable: !0
			})), typeof g != "undefined" && (S.rotation = [g * Math.PI / 180, a, f]), l.match("star") && (S.style.iconType = "star", S.style.n = l.replace("empty", "").replace("star", "") - 0 || 5), l == "none" && (S.invisible = !0, S.hoverable = !1), S = this.addLabel(S, e, i, u, p), l.match("empty") && (typeof S.style.textColor == "undefined" && (S.style.textColor = S.style.strokeColor), typeof S.highlightStyle.textColor == "undefined" && (S.highlightStyle.textColor = S.highlightStyle.strokeColor)), o.pack(S, e, r, i, s, u), S._x = a, S._y = f, S._dataIndex = s, S._seriesIndex = r, S
		},
		getLineMarkShape: function(e, t, n, i, s, o, u, a, f) {
			var l = typeof n[0] != "undefined" ? typeof n[0].value != "undefined" ? n[0].value : n[0] : "-",
				c = typeof n[1] != "undefined" ? typeof n[1].value != "undefined" ? n[1].value : n[1] : "-",
				h = [this.query(n[0], "symbol") || e.symbol[0], this.query(n[1], "symbol") || e.symbol[1]],
				p = [this.query(n[0], "symbolSize") || e.symbolSize[0], this.query(n[1], "symbolSize") || e.symbolSize[1]];
			p[0] = typeof p[0] == "function" ? p[0](l) : p[0], p[1] = typeof p[1] == "function" ? p[1](c) : p[1];
			var d = [this.query(n[0], "symbolRotate") || e.symbolRotate[0], this.query(n[1], "symbolRotate") || e.symbolRotate[1]],
				v = [n[0], e],
				m = this.deepMerge(v, "itemStyle.normal");
			m.color = this.getItemStyleColor(m.color, t, i, n);
			var g = this.deepMerge(v, "itemStyle.emphasis");
			g.color = this.getItemStyleColor(g.color, t, i, n);
			var y = m.lineStyle,
				b = g.lineStyle,
				w = y.width;
			typeof w == "undefined" && (w = m.borderWidth);
			var E = b.width;
			typeof E == "undefined" && (typeof g.borderWidth != "undefined" ? E = g.borderWidth : E = w + 2);
			var S = new r({
				style: {
					smooth: e.smooth ? "spline" : !1,
					symbol: h,
					symbolSize: p,
					symbolRotate: d,
					xStart: s,
					yStart: o,
					xEnd: u,
					yEnd: a,
					brushType: "both",
					lineType: y.type,
					shadowColor: y.shadowColor || y.color || m.borderColor || m.color || f,
					shadowBlur: y.shadowBlur,
					shadowOffsetX: y.shadowOffsetX,
					shadowOffsetY: y.shadowOffsetY,
					color: m.color || f,
					strokeColor: y.color || m.borderColor || m.color || f,
					lineWidth: w,
					symbolBorderColor: m.borderColor || m.color || f,
					symbolBorder: m.borderWidth
				},
				highlightStyle: {
					shadowColor: b.shadowColor,
					shadowBlur: b.shadowBlur,
					shadowOffsetX: b.shadowOffsetX,
					shadowOffsetY: b.shadowOffsetY,
					color: g.color || m.color || f,
					strokeColor: b.color || y.color || g.borderColor || m.borderColor || g.color || m.color || f,
					lineWidth: E,
					symbolBorderColor: g.borderColor || m.borderColor || g.color || m.color || f,
					symbolBorder: typeof g.borderWidth == "undefined" ? m.borderWidth + 2 : g.borderWidth
				},
				clickable: !0
			});
			return S = this.addLabel(S, e, n[0], n[0].name + " : " + n[1].name), S._x = u, S._y = a, S
		},
		getLargeMarkPoingShape: function(e, t) {
			var n = this.series[e],
				r = this.component,
				s = t.data,
				o, u = r.dataRange,
				a = r.legend,
				f, l, c = [s[0], t],
				h, p, d;
			a && (f = a.getColor(n.name));
			if (u) {
				l = typeof s[0] != "undefined" ? typeof s[0].value != "undefined" ? s[0].value : s[0] : "-", f = isNaN(l) ? f : u.getColor(l), h = this.deepQuery(c, "itemStyle.normal.color") || f, p = this.deepQuery(c, "itemStyle.emphasis.color") || h;
				if (h == null && p == null) return
			}
			f = this.deepMerge(c, "itemStyle.normal").color || f;
			var v = this.deepQuery(c, "symbol") || "circle";
			v = v.replace("empty", "").replace(/\d/g, ""), d = this.deepMerge([s[0], t], "effect");
			var m = window.devicePixelRatio || 1;
			return o = new i({
				style: {
					pointList: s,
					color: f,
					strokeColor: f,
					shadowColor: d.shadowColor || f,
					shadowBlur: (typeof d.shadowBlur != "undefined" ? d.shadowBlur : 8) * m,
					size: this.deepQuery(c, "symbolSize"),
					iconType: v,
					brushType: "fill",
					lineWidth: 1
				},
				draggable: !1,
				hoverable: !1
			}), d.show && (o.effect = d), o
		},
		backupShapeList: function() {
			this.shapeList && this.shapeList.length > 0 ? (this.lastShapeList = this.shapeList, this.shapeList = []) : this.lastShapeList = []
		},
		addShapeList: function() {
			var e = this.option.animationThreshold / (this.canvasSupported ? 2 : 4),
				t = this.lastShapeList,
				n = this.shapeList,
				r = t.length > 0 ? 500 : this.query(this.option, "animationDuration"),
				i = this.query(this.option, "animationEasing"),
				s, o = {},
				u = {};
			if (this.option.animation && !this.option.renderAsImage && n.length < e && !this.motionlessOnce) {
				for (var a = 0, f = t.length; a < f; a++) s = this._getAnimationKey(t[a]), s.match("undefined") ? this.zr.delShape(t[a].id) : (s += t[a].type, o[s] = t[a]);
				for (var a = 0, f = n.length; a < f; a++) s = this._getAnimationKey(n[a]), s.match("undefined") ? this.zr.addShape(n[a]) : (s += n[a].type, u[s] = n[a]);
				for (s in o) u[s] || this.zr.delShape(o[s].id);
				for (s in u) o[s] ? (this.zr.delShape(o[s].id), this._animateMod(o[s], u[s], r, i)) : this._animateMod(!1, u[s], r, i);
				this.zr.refresh(), this.animationEffect()
			} else {
				this.motionlessOnce = !1, this.zr.delShape(t);
				for (var a = 0, f = n.length; a < f; a++) this.zr.addShape(n[a])
			}
		},
		_getAnimationKey: function(e) {
			return this.type != s.CHART_TYPE_MAP ? o.get(e, "seriesIndex") + "_" + o.get(e, "dataIndex") + (e._mark ? e._mark : "") + (this.type == s.CHART_TYPE_RADAR ? o.get(e, "special") : "") : o.get(e, "seriesIndex") + "_" + o.get(e, "dataIndex") + (e._mark ? e._mark : "undefined")
		},
		_animateMod: function(e, t, n, r) {
			switch (t.type) {
				case "broken-line":
				case "half-smooth-polygon":
					u.pointList(this.zr, e, t, n, r);
					break;
				case "rectangle":
					u.rectangle(this.zr, e, t, n, r);
					break;
				case "icon":
					u.icon(this.zr, e, t, n, r);
					break;
				case "candle":
					n > 500 ? u.candle(this.zr, e, t, n, r) : this.zr.addShape(t);
					break;
				case "ring":
				case "sector":
				case "circle":
					n > 500 ? u.ring(this.zr, e, t, n + (o.get(t, "dataIndex") || 0) % 20 * 100, r) : t.type == "sector" ? u.sector(this.zr, e, t, n, r) : this.zr.addShape(t);
					break;
				case "text":
					u.text(this.zr, e, t, n, r);
					break;
				case "polygon":
					n > 500 ? u.polygon(this.zr, e, t, n, r) : u.pointList(this.zr, e, t, n, r);
					break;
				case "chord":
					u.chord(this.zr, e, t, n, r);
					break;
				case "gauge-pointer":
					u.gaugePointer(this.zr, e, t, n, r);
					break;
				case "mark-line":
					u.markline(this.zr, e, t, n, r);
					break;
				case "line":
					u.line(this.zr, e, t, n, r);
					break;
				default:
					this.zr.addShape(t)
			}
		},
		animationMark: function(e, t, n) {
			var r = n || this.shapeList;
			for (var i = 0, s = r.length; i < s; i++) {
				if (!r[i]._mark) continue;
				this._animateMod(!1, r[i], e, t)
			}
			this.animationEffect(n)
		},
		animationEffect: function(e) {
			!e && this.clearEffectShape();
			var t = e || this.shapeList,
				n = s.EFFECT_ZLEVEL;
			this.canvasSupported && this.zr.modLayer(n, {
				motionBlur: !0,
				lastFrameAlpha: .95
			});
			var r;
			for (var i = 0, o = t.length; i < o; i++) {
				r = t[i];
				if (!(r._mark && r.effect && r.effect.show && a[r._mark])) continue;
				a[r._mark](this.zr, this.effectList, r, n), this.effectList[this.effectList.length - 1]._mark = r._mark
			}
		},
		clearEffectShape: function(e) {
			this.zr && this.effectList && this.effectList.length > 0 && (e && this.zr.modLayer(s.EFFECT_ZLEVEL, {
				motionBlur: !1
			}), this.zr.delShape(this.effectList)), this.effectList = []
		},
		addMark: function(e, t, n) {
			var r = this.series[e];
			if (this.selectedMap[r.name]) {
				var i = 500,
					s = this.query(this.option, "animationEasing"),
					o = r[n].data,
					u = this.shapeList.length;
				r[n].data = t.data, this["_build" + n.replace("m", "M")](e);
				for (var a = u, f = this.shapeList.length; a < f; a++) this.zr.addShape(this.shapeList[a]);
				this.zr.refresh(), this.option.animation && !this.option.renderAsImage && this.animationMark(i, s, this.shapeList.slice(u)), r[n].data = o
			}
		},
		delMark: function(e, t, n) {
			n = n.replace("mark", "").replace("large", "").toLowerCase();
			var r = this.series[e];
			if (this.selectedMap[r.name]) {
				var i = !1,
					s = [this.shapeList, this.effectList],
					u = 2;
				while (u--)
					for (var a = 0, f = s[u].length; a < f; a++)
						if (s[u][a]._mark == n && o.get(s[u][a], "seriesIndex") == e && o.get(s[u][a], "name") == t) {
							this.zr.delShape(s[u][a].id), s[u].splice(a, 1), i = !0;
							break
						}
				i && this.zr.refresh()
			}
		}
	}, h
}), define("echarts/chart", [], function() {
	var e = {},
		t = {};
	return e.define = function(n, r) {
		return t[n] = r, e
	}, e.get = function(e) {
		return t[e]
	}, e
}), define("echarts/chart/island", ["require", "../component/base", "./base", "zrender/shape/Circle", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/event", "zrender/tool/color", "../util/accMath", "../chart"], function(e) {
	function a(e, r, i, o, a) {
		t.call(this, e, r, i, {}, a), n.call(this), this._nameConnector, this._valueConnector, this._zrHeight = this.zr.getHeight(), this._zrWidth = this.zr.getWidth();
		var f = this;
		f.shapeHandler.onmousewheel = function(e) {
			var t = e.target,
				n = e.event,
				r = u.getDelta(n);
			r = r > 0 ? -1 : 1, t.style.r -= r, t.style.r = t.style.r < 5 ? 5 : t.style.r;
			var i = s.get(t, "value"),
				o = i * f.option.island.calculateStep;
			o > 1 ? i = Math.round(i - o * r) : i = (i - o * r).toFixed(2) - 0;
			var a = s.get(t, "name");
			t.style.text = a + ":" + i, s.set(t, "value", i), s.set(t, "name", a), f.zr.modShape(t.id), f.zr.refresh(), u.stop(n)
		}
	}
	var t = e("../component/base"),
		n = e("./base"),
		r = e("zrender/shape/Circle"),
		i = e("../config"),
		s = e("../util/ecData"),
		o = e("zrender/tool/util"),
		u = e("zrender/tool/event");
	return a.prototype = {
		type: i.CHART_TYPE_ISLAND,
		_combine: function(t, n) {
			var r = e("zrender/tool/color"),
				i = e("../util/accMath"),
				o = i.accAdd(s.get(t, "value"), s.get(n, "value")),
				u = s.get(t, "name") + this._nameConnector + s.get(n, "name");
			t.style.text = u + this._valueConnector + o, s.set(t, "value", o), s.set(t, "name", u), t.style.r = this.option.island.r, t.style.color = r.mix(t.style.color, n.style.color)
		},
		refresh: function(e) {
			e && (e.island = this.reformOption(e.island), this.option = e, this._nameConnector = this.option.nameConnector, this._valueConnector = this.option.valueConnector)
		},
		getOption: function() {
			return this.option
		},
		resize: function() {
			var e = this.zr.getWidth(),
				t = this.zr.getHeight(),
				n = e / (this._zrWidth || e),
				r = t / (this._zrHeight || t);
			if (n == 1 && r == 1) return;
			this._zrWidth = e, this._zrHeight = t;
			for (var i = 0, s = this.shapeList.length; i < s; i++) this.zr.modShape(this.shapeList[i].id, {
				style: {
					x: Math.round(this.shapeList[i].style.x * n),
					y: Math.round(this.shapeList[i].style.y * r)
				}
			})
		},
		add: function(e) {
			var t = s.get(e, "name"),
				n = s.get(e, "value"),
				i = typeof s.get(e, "series") != "undefined" ? s.get(e, "series").name : "",
				o = this.getFont(this.option.island.textStyle),
				u = {
					zlevel: this._zlevelBase,
					style: {
						x: e.style.x,
						y: e.style.y,
						r: this.option.island.r,
						color: e.style.color || e.style.strokeColor,
						text: t + this._valueConnector + n,
						textFont: o
					},
					draggable: !0,
					hoverable: !0,
					onmousewheel: this.shapeHandler.onmousewheel,
					_type: "island"
				};
			u.style.color == "#fff" && (u.style.color = e.style.strokeColor), this.setCalculable(u), u.dragEnableTime = 0, s.pack(u, {
				name: i
			}, -1, n, -1, t), u = new r(u), this.shapeList.push(u), this.zr.addShape(u)
		},
		del: function(e) {
			this.zr.delShape(e.id);
			var t = [];
			for (var n = 0, r = this.shapeList.length; n < r; n++) this.shapeList[n].id != e.id && t.push(this.shapeList[n]);
			this.shapeList = t
		},
		ondrop: function(e, t) {
			if (!this.isDrop || !e.target) return;
			var n = e.target,
				r = e.dragged;
			this._combine(n, r), this.zr.modShape(n.id), t.dragIn = !0, this.isDrop = !1;
			return
		},
		ondragend: function(e, t) {
			var n = e.target;
			this.isDragend ? t.dragIn && (this.del(n), t.needRefresh = !0) : t.dragIn || (n.style.x = u.getX(e.event), n.style.y = u.getY(e.event), this.add(n), t.needRefresh = !0), this.isDragend = !1;
			return
		}
	}, o.inherits(a, n), o.inherits(a, t), e("../chart").define("island", a), a
}), define("echarts/component", [], function() {
	var e = {},
		t = {};
	return e.define = function(n, r) {
		return t[n] = r, e
	}, e.get = function(e) {
		return t[e]
	}, e
}), define("echarts/component/dataView", ["require", "./base", "../config", "zrender/tool/util", "../component"], function(e) {
	function i(e, n, r, i, s) {
		t.call(this, e, n, r, i, s), this.dom = s.dom, this._tDom = document.createElement("div"), this._textArea = document.createElement("textArea"), this._buttonRefresh = document.createElement("button"), this._buttonClose = document.createElement("button"), this._hasShow = !1, this._zrHeight = r.getHeight(), this._zrWidth = r.getWidth(), this._tDom.className = "echarts-dataview", this.hide(), this.dom.firstChild.appendChild(this._tDom), window.addEventListener ? (this._tDom.addEventListener("click", this._stop), this._tDom.addEventListener("mousewheel", this._stop), this._tDom.addEventListener("mousemove", this._stop), this._tDom.addEventListener("mousedown", this._stop), this._tDom.addEventListener("mouseup", this._stop), this._tDom.addEventListener("touchstart", this._stop), this._tDom.addEventListener("touchmove", this._stop), this._tDom.addEventListener("touchend", this._stop)) : (this._tDom.attachEvent("onclick", this._stop), this._tDom.attachEvent("onmousewheel", this._stop), this._tDom.attachEvent("onmousemove", this._stop), this._tDom.attachEvent("onmousedown", this._stop), this._tDom.attachEvent("onmouseup", this._stop))
	}
	var t = e("./base"),
		n = e("../config"),
		r = e("zrender/tool/util");
	return i.prototype = {
		type: n.COMPONENT_TYPE_DATAVIEW,
		_lang: ["Data View", "close", "refresh"],
		_gCssText: "position:absolute;display:block;overflow:hidden;transition:height 0.8s,background-color 1s;-moz-transition:height 0.8s,background-color 1s;-webkit-transition:height 0.8s,background-color 1s;-o-transition:height 0.8s,background-color 1s;z-index:1;left:0;top:0;",
		hide: function() {
			this._sizeCssText = "width:" + this._zrWidth + "px;" + "height:" + 0 + "px;" + "background-color:#f0ffff;", this._tDom.style.cssText = this._gCssText + this._sizeCssText
		},
		show: function(e) {
			this._hasShow = !0;
			var t = this.query(this.option, "toolbox.feature.dataView.lang") || this._lang;
			this.option = e, this._tDom.innerHTML = '<p style="padding:8px 0;margin:0 0 10px 0;border-bottom:1px solid #eee">' + (t[0] || this._lang[0]) + "</p>", this._textArea.style.cssText = "display:block;margin:0 0 8px 0;padding:4px 6px;overflow:auto;width:" + (this._zrWidth - 15) + "px;" + "height:" + (this._zrHeight - 100) + "px;";
			var n = this.query(this.option, "toolbox.feature.dataView.optionToContent");
			typeof n != "function" ? this._textArea.value = this._optionToContent() : this._textArea.value = n(this.option), this._tDom.appendChild(this._textArea), this._buttonClose.style.cssText = "float:right;padding:1px 6px;", this._buttonClose.innerHTML = t[1] || this._lang[1];
			var r = this;
			this._buttonClose.onclick = function() {
				r.hide()
			}, this._tDom.appendChild(this._buttonClose), this.query(this.option, "toolbox.feature.dataView.readOnly") === !1 ? (this._buttonRefresh.style.cssText = "float:right;margin-right:10px;padding:1px 6px;", this._buttonRefresh.innerHTML = t[2] || this._lang[2], this._buttonRefresh.onclick = function() {
				r._save()
			}, this._tDom.appendChild(this._buttonRefresh), this._textArea.readOnly = !1, this._textArea.style.cursor = "default") : (this._textArea.readOnly = !0, this._textArea.style.cursor = "text"), this._sizeCssText = "width:" + this._zrWidth + "px;" + "height:" + this._zrHeight + "px;" + "background-color:#fff;", this._tDom.style.cssText = this._gCssText + this._sizeCssText
		},
		_optionToContent: function() {
			var e, t, r, i, s, o, u = [],
				a = "";
			if (this.option.xAxis) {
				this.option.xAxis instanceof Array ? u = this.option.xAxis : u = [this.option.xAxis];
				for (e = 0, i = u.length; e < i; e++)
					if ((u[e].type || "category") == "category") {
						o = [];
						for (t = 0, r = u[e].data.length; t < r; t++) s = u[e].data[t], o.push(typeof s.value != "undefined" ? s.value : s);
						a += o.join(", ") + "\n\n"
					}
			}
			if (this.option.yAxis) {
				this.option.yAxis instanceof Array ? u = this.option.yAxis : u = [this.option.yAxis];
				for (e = 0, i = u.length; e < i; e++)
					if (u[e].type == "category") {
						o = [];
						for (t = 0, r = u[e].data.length; t < r; t++) s = u[e].data[t], o.push(typeof s.value != "undefined" ? s.value : s);
						a += o.join(", ") + "\n\n"
					}
			}
			var f = this.option.series,
				l;
			for (e = 0, i = f.length; e < i; e++) {
				o = [];
				for (t = 0, r = f[e].data.length; t < r; t++) s = f[e].data[t], f[e].type == n.CHART_TYPE_PIE || f[e].type == n.CHART_TYPE_MAP ? l = (s.name || "-") + ":" : l = "", f[e].type == n.CHART_TYPE_SCATTER && (s = typeof s.value != "undefined" ? s.value : s, s = s.join(", ")), o.push(l + (typeof s.value != "undefined" ? s.value : s));
				a += (f[e].name || "-") + " : \n", a += o.join(f[e].type == n.CHART_TYPE_SCATTER ? "\n" : ", "), a += "\n\n"
			}
			return a
		},
		_save: function() {
			var e = this._textArea.value,
				t = this.query(this.option, "toolbox.feature.dataView.contentToOption");
			if (typeof t != "function") {
				e = e.split("\n");
				var r = [];
				for (var i = 0, s = e.length; i < s; i++) e[i] = this._trim(e[i]), e[i] !== "" && r.push(e[i]);
				this._contentToOption(r)
			} else t(e, this.option);
			this.hide();
			var o = this;
			setTimeout(function() {
				o.messageCenter && o.messageCenter.dispatch(n.EVENT.DATA_VIEW_CHANGED, null, {
					option: o.option
				}, o.myChart)
			}, o.canvasSupported ? 800 : 100)
		},
		_contentToOption: function(e) {
			var t, r, i, s, o, u = [],
				a = 0,
				f, l;
			if (this.option.xAxis) {
				this.option.xAxis instanceof Array ? u = this.option.xAxis : u = [this.option.xAxis];
				for (t = 0, s = u.length; t < s; t++)
					if ((u[t].type || "category") == "category") {
						f = e[a].split(",");
						for (r = 0, i = u[t].data.length; r < i; r++) l = this._trim(f[r] || ""), o = u[t].data[r], typeof u[t].data[r].value != "undefined" ? u[t].data[r].value = l : u[t].data[r] = l;
						a++
					}
			}
			if (this.option.yAxis) {
				this.option.yAxis instanceof Array ? u = this.option.yAxis : u = [this.option.yAxis];
				for (t = 0, s = u.length; t < s; t++)
					if (u[t].type == "category") {
						f = e[a].split(",");
						for (r = 0, i = u[t].data.length; r < i; r++) l = this._trim(f[r] || ""), o = u[t].data[r], typeof u[t].data[r].value != "undefined" ? u[t].data[r].value = l : u[t].data[r] = l;
						a++
					}
			}
			var c = this.option.series;
			for (t = 0, s = c.length; t < s; t++) {
				a++;
				if (c[t].type == n.CHART_TYPE_SCATTER)
					for (var r = 0, i = c[t].data.length; r < i; r++) f = e[a], l = f.replace(" ", "").split(","), typeof c[t].data[r].value != "undefined" ? c[t].data[r].value = l : c[t].data[r] = l, a++;
				else {
					f = e[a].split(",");
					for (var r = 0, i = c[t].data.length; r < i; r++) l = (f[r] || "").replace(/.*:/, ""), l = this._trim(l), l = l != "-" && l !== "" ? l - 0 : "-", typeof c[t].data[r].value != "undefined" ? c[t].data[r].value = l : c[t].data[r] = l;
					a++
				}
			}
		},
		_trim: function(e) {
			var t = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
			return e.replace(t, "")
		},
		_stop: function(e) {
			e = e || window.event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
		},
		resize: function() {
			this._zrHeight = this.zr.getHeight(), this._zrWidth = this.zr.getWidth(), this._tDom.offsetHeight > 10 && (this._sizeCssText = "width:" + this._zrWidth + "px;" + "height:" + this._zrHeight + "px;" + "background-color:#fff;", this._tDom.style.cssText = this._gCssText + this._sizeCssText, this._textArea.style.cssText = "display:block;margin:0 0 8px 0;padding:4px 6px;overflow:auto;width:" + (this._zrWidth - 15) + "px;" + "height:" + (this._zrHeight - 100) + "px;")
		},
		dispose: function() {
			window.removeEventListener ? (this._tDom.removeEventListener("click", this._stop), this._tDom.removeEventListener("mousewheel", this._stop), this._tDom.removeEventListener("mousemove", this._stop), this._tDom.removeEventListener("mousedown", this._stop), this._tDom.removeEventListener("mouseup", this._stop), this._tDom.removeEventListener("touchstart", this._stop), this._tDom.removeEventListener("touchmove", this._stop), this._tDom.removeEventListener("touchend", this._stop)) : (this._tDom.detachEvent("onclick", this._stop), this._tDom.detachEvent("onmousewheel", this._stop), this._tDom.detachEvent("onmousemove", this._stop), this._tDom.detachEvent("onmousedown", this._stop), this._tDom.detachEvent("onmouseup", this._stop)), this._buttonRefresh.onclick = null, this._buttonClose.onclick = null, this._hasShow && (this._tDom.removeChild(this._textArea), this._tDom.removeChild(this._buttonRefresh), this._tDom.removeChild(this._buttonClose)), this._textArea = null, this._buttonRefresh = null, this._buttonClose = null, this.dom.firstChild.removeChild(this._tDom), this._tDom = null
		}
	}, r.inherits(i, t), e("../component").define("dataView", i), i
}), define("echarts/component/toolbox", ["require", "./base", "zrender/shape/Line", "zrender/shape/Image", "zrender/shape/Rectangle", "../util/shape/Icon", "../config", "zrender/tool/util", "zrender/config", "zrender/tool/event", "./dataView", "../component"], function(e) {
	function h(e, n, r, i, s) {
		t.call(this, e, n, r, i, s), this.dom = s.dom, this._magicType = {}, this._isSilence = !1, this._iconList, this._iconShapeMap = {}, this._featureTitle = {}, this._featureIcon = {}, this._featureColor = {}, this._enableColor = "red", this._disableColor = "#ccc", this._markShapeList = [];
		var o = this;
		o._onMark = function(e) {
			o.__onMark(e)
		}, o._onMarkUndo = function(e) {
			o.__onMarkUndo(e)
		}, o._onMarkClear = function(e) {
			o.__onMarkClear(e)
		}, o._onDataZoom = function(e) {
			o.__onDataZoom(e)
		}, o._onDataZoomReset = function(e) {
			o.__onDataZoomReset(e)
		}, o._onDataView = function(e) {
			o.__onDataView(e)
		}, o._onRestore = function(e) {
			o.__onRestore(e)
		}, o._onSaveAsImage = function(e) {
			o.__onSaveAsImage(e)
		}, o._onMagicType = function(e) {
			o.__onMagicType(e)
		}, o._onCustomHandler = function(e) {
			o.__onCustomHandler(e)
		}, o._onmousemove = function(e) {
			return o.__onmousemove(e)
		}, o._onmousedown = function(e) {
			return o.__onmousedown(e)
		}, o._onmouseup = function(e) {
			return o.__onmouseup(e)
		}, o._onclick = function(e) {
			return o.__onclick(e)
		}
	}
	var t = e("./base"),
		n = e("zrender/shape/Line"),
		r = e("zrender/shape/Image"),
		i = e("zrender/shape/Rectangle"),
		s = e("../util/shape/Icon"),
		o = e("../config"),
		u = e("zrender/tool/util"),
		a = e("zrender/config"),
		f = e("zrender/tool/event"),
		l = "stack",
		c = "tiled";
	return h.prototype = {
		type: o.COMPONENT_TYPE_TOOLBOX,
		_buildShape: function() {
			this._iconList = [];
			var e = this.option.toolbox;
			this._enableColor = e.effectiveColor, this._disableColor = e.disableColor;
			var t = e.feature,
				n = [];
			for (var r in t)
				if (t[r].show) switch (r) {
					case "mark":
						n.push({
							key: r,
							name: "mark"
						}), n.push({
							key: r,
							name: "markUndo"
						}), n.push({
							key: r,
							name: "markClear"
						});
						break;
					case "magicType":
						for (var i = 0, s = t[r].type.length; i < s; i++) t[r].title[t[r].type[i] + "Chart"] = t[r].title[t[r].type[i]], n.push({
							key: r,
							name: t[r].type[i] + "Chart"
						});
						break;
					case "dataZoom":
						n.push({
							key: r,
							name: "dataZoom"
						}), n.push({
							key: r,
							name: "dataZoomReset"
						});
						break;
					case "saveAsImage":
						this.canvasSupported && n.push({
							key: r,
							name: "saveAsImage"
						});
						break;
					default:
						n.push({
							key: r,
							name: r
						})
				}
				if (n.length > 0) {
					var o, r;
					for (var i = 0, s = n.length; i < s; i++) o = n[i].name, r = n[i].key, this._iconList.push(o), this._featureTitle[o] = t[r].title[o] || t[r].title, t[r].icon && (this._featureIcon[o] = t[r].icon[o] || t[r].icon), t[r].color && (this._featureColor[o] = t[r].color[o] || t[r].color);
					this._itemGroupLocation = this._getItemGroupLocation(), this._buildBackground(), this._buildItem();
					for (var i = 0, s = this.shapeList.length; i < s; i++) this.zr.addShape(this.shapeList[i]);
					this._iconShapeMap.mark && (this._iconDisable(this._iconShapeMap.markUndo), this._iconDisable(this._iconShapeMap.markClear)), this._iconShapeMap.dataZoomReset && this._zoomQueue.length === 0 && this._iconDisable(this._iconShapeMap.dataZoomReset)
				}
		},
		_buildItem: function() {
			var t = this.option.toolbox,
				n = this._iconList.length,
				i = this._itemGroupLocation.x,
				o = this._itemGroupLocation.y,
				u = t.itemSize,
				a = t.itemGap,
				f, l = t.color instanceof Array ? t.color : [t.color],
				c = this.getFont(t.textStyle),
				h, p, d;
			t.orient == "horizontal" ? (h = this._itemGroupLocation.y / this.zr.getHeight() < .5 ? "bottom" : "top", p = this._itemGroupLocation.x / this.zr.getWidth() < .5 ? "left" : "right", d = this._itemGroupLocation.y / this.zr.getHeight() < .5 ? "top" : "bottom") : h = this._itemGroupLocation.x / this.zr.getWidth() < .5 ? "right" : "left", this._iconShapeMap = {};
			var v = this;
			for (var m = 0; m < n; m++) {
				f = {
					type: "icon",
					zlevel: this._zlevelBase,
					style: {
						x: i,
						y: o,
						width: u,
						height: u,
						iconType: this._iconList[m],
						lineWidth: 1,
						strokeColor: this._featureColor[this._iconList[m]] || l[m % l.length],
						brushType: "stroke"
					},
					highlightStyle: {
						lineWidth: 1,
						text: t.showTitle ? this._featureTitle[this._iconList[m]] : undefined,
						textFont: c,
						textPosition: h,
						strokeColor: this._featureColor[this._iconList[m]] || l[m % l.length]
					},
					hoverable: !0,
					clickable: !0
				}, this._featureIcon[this._iconList[m]] && (f.style.image = this._featureIcon[this._iconList[m]].replace(new RegExp("^image:\\/\\/"), ""), f.style.opacity = .8, f.highlightStyle.opacity = 1, f.type = "image"), t.orient == "horizontal" && (m === 0 && p == "left" && (f.highlightStyle.textPosition = "specific", f.highlightStyle.textAlign = p, f.highlightStyle.textBaseline = d, f.highlightStyle.textX = i, f.highlightStyle.textY = d == "top" ? o + u + 10 : o - 10), m == n - 1 && p == "right" && (f.highlightStyle.textPosition = "specific", f.highlightStyle.textAlign = p, f.highlightStyle.textBaseline = d, f.highlightStyle.textX = i + u, f.highlightStyle.textY = d == "top" ? o + u + 10 : o - 10));
				switch (this._iconList[m]) {
					case "mark":
						f.onclick = v._onMark;
						break;
					case "markUndo":
						f.onclick = v._onMarkUndo;
						break;
					case "markClear":
						f.onclick = v._onMarkClear;
						break;
					case "dataZoom":
						f.onclick = v._onDataZoom;
						break;
					case "dataZoomReset":
						f.onclick = v._onDataZoomReset;
						break;
					case "dataView":
						if (!this._dataView) {
							var g = e("./dataView");
							this._dataView = new g(this.ecTheme, this.messageCenter, this.zr, this.option, this.myChart)
						}
						f.onclick = v._onDataView;
						break;
					case "restore":
						f.onclick = v._onRestore;
						break;
					case "saveAsImage":
						f.onclick = v._onSaveAsImage;
						break;
					default:
						this._iconList[m].match("Chart") ? (f._name = this._iconList[m].replace("Chart", ""), f.onclick = v._onMagicType) : f.onclick = v._onCustomHandler
				}
				f.type == "icon" ? f = new s(f) : f.type == "image" && (f = new r(f)), this.shapeList.push(f), this._iconShapeMap[this._iconList[m]] = f, t.orient == "horizontal" ? i += u + a : o += u + a
			}
		},
		_buildBackground: function() {
			var e = this.option.toolbox,
				t = e.padding[0],
				n = e.padding[1],
				r = e.padding[2],
				s = e.padding[3];
			this.shapeList.push(new i({
				zlevel: this._zlevelBase,
				hoverable: !1,
				style: {
					x: this._itemGroupLocation.x - s,
					y: this._itemGroupLocation.y - t,
					width: this._itemGroupLocation.width + s + n,
					height: this._itemGroupLocation.height + t + r,
					brushType: e.borderWidth === 0 ? "fill" : "both",
					color: e.backgroundColor,
					strokeColor: e.borderColor,
					lineWidth: e.borderWidth
				}
			}))
		},
		_getItemGroupLocation: function() {
			var e = this.option.toolbox,
				t = this._iconList.length,
				n = e.itemGap,
				r = e.itemSize,
				i = 0,
				s = 0;
			e.orient == "horizontal" ? (i = (r + n) * t - n, s = r) : (s = (r + n) * t - n, i = r);
			var o, u = this.zr.getWidth();
			switch (e.x) {
				case "center":
					o = Math.floor((u - i) / 2);
					break;
				case "left":
					o = e.padding[3] + e.borderWidth;
					break;
				case "right":
					o = u - i - e.padding[1] - e.borderWidth;
					break;
				default:
					o = e.x - 0, o = isNaN(o) ? 0 : o
			}
			var a, f = this.zr.getHeight();
			switch (e.y) {
				case "top":
					a = e.padding[0] + e.borderWidth;
					break;
				case "bottom":
					a = f - s - e.padding[2] - e.borderWidth;
					break;
				case "center":
					a = Math.floor((f - s) / 2);
					break;
				default:
					a = e.y - 0, a = isNaN(a) ? 0 : a
			}
			return {
				x: o,
				y: a,
				width: i,
				height: s
			}
		},
		__onmousemove: function(e) {
			this._marking && (this._markShape.style.xEnd = f.getX(e.event), this._markShape.style.yEnd = f.getY(e.event), this.zr.addHoverShape(this._markShape)), this._zooming && (this._zoomShape.style.width = f.getX(e.event) - this._zoomShape.style.x, this._zoomShape.style.height = f.getY(e.event) - this._zoomShape.style.y, this.zr.addHoverShape(this._zoomShape), this.dom.style.cursor = "crosshair"), this._zoomStart && this.dom.style.cursor != "pointer" && this.dom.style.cursor != "move" && (this.dom.style.cursor = "crosshair")
		},
		__onmousedown: function(e) {
			if (e.target) return;
			this._zooming = !0;
			var t = f.getX(e.event),
				n = f.getY(e.event),
				r = this.option.dataZoom || {};
			return this._zoomShape = new i({
				zlevel: this._zlevelBase,
				style: {
					x: t,
					y: n,
					width: 1,
					height: 1,
					brushType: "both"
				},
				highlightStyle: {
					lineWidth: 2,
					color: r.fillerColor || o.dataZoom.fillerColor,
					strokeColor: r.handleColor || o.dataZoom.handleColor,
					brushType: "both"
				}
			}), this.zr.addHoverShape(this._zoomShape), !0
		},
		__onmouseup: function() {
			if (!this._zoomShape || Math.abs(this._zoomShape.style.width) < 10 || Math.abs(this._zoomShape.style.height) < 10) return this._zooming = !1, !0;
			if (this._zooming && this.component.dataZoom) {
				this._zooming = !1;
				var e = this.component.dataZoom.rectZoom(this._zoomShape.style);
				e && (this._zoomQueue.push({
					start: e.start,
					end: e.end,
					start2: e.start2,
					end2: e.end2
				}), this._iconEnable(this._iconShapeMap.dataZoomReset), this.zr.refresh())
			}
			return !0
		},
		__onclick: function(e) {
			if (e.target) return;
			if (this._marking) this._marking = !1, this._markShapeList.push(this._markShape), this._iconEnable(this._iconShapeMap.markUndo), this._iconEnable(this._iconShapeMap.markClear), this.zr.addShape(this._markShape), this.zr.refresh();
			else if (this._markStart) {
				this._marking = !0;
				var t = f.getX(e.event),
					r = f.getY(e.event);
				this._markShape = new n({
					zlevel: this._zlevelBase,
					style: {
						xStart: t,
						yStart: r,
						xEnd: t,
						yEnd: r,
						lineWidth: this.query(this.option, "toolbox.feature.mark.lineStyle.width"),
						strokeColor: this.query(this.option, "toolbox.feature.mark.lineStyle.color"),
						lineType: this.query(this.option, "toolbox.feature.mark.lineStyle.type")
					}
				}), this.zr.addHoverShape(this._markShape)
			}
		},
		__onMark: function(e) {
			var t = e.target;
			if (this._marking || this._markStart) this._resetMark(), this.zr.refresh();
			else {
				this._resetZoom(), this.zr.modShape(t.id, {
					style: {
						strokeColor: this._enableColor
					}
				}), this.zr.refresh(), this._markStart = !0;
				var n = this;
				setTimeout(function() {
					n.zr && n.zr.on(a.EVENT.CLICK, n._onclick) && n.zr.on(a.EVENT.MOUSEMOVE, n._onmousemove)
				}, 10)
			}
			return !0
		},
		__onMarkUndo: function() {
			if (this._marking) this._marking = !1;
			else {
				var e = this._markShapeList.length;
				if (e >= 1) {
					var t = this._markShapeList[e - 1];
					this.zr.delShape(t.id), this.zr.refresh(), this._markShapeList.pop(), e == 1 && (this._iconDisable(this._iconShapeMap.markUndo), this._iconDisable(this._iconShapeMap.markClear))
				}
			}
			return !0
		},
		__onMarkClear: function() {
			this._marking && (this._marking = !1);
			var e = this._markShapeList.length;
			if (e > 0) {
				while (e--) this.zr.delShape(this._markShapeList.pop().id);
				this._iconDisable(this._iconShapeMap.markUndo), this._iconDisable(this._iconShapeMap.markClear), this.zr.refresh()
			}
			return !0
		},
		__onDataZoom: function(e) {
			var t = e.target;
			if (this._zooming || this._zoomStart) this._resetZoom(), this.zr.refresh(), this.dom.style.cursor = "default";
			else {
				this._resetMark(), this.zr.modShape(t.id, {
					style: {
						strokeColor: this._enableColor
					}
				}), this.zr.refresh(), this._zoomStart = !0;
				var n = this;
				setTimeout(function() {
					n.zr && n.zr.on(a.EVENT.MOUSEDOWN, n._onmousedown) && n.zr.on(a.EVENT.MOUSEUP, n._onmouseup) && n.zr.on(a.EVENT.MOUSEMOVE, n._onmousemove)
				}, 10), this.dom.style.cursor = "crosshair"
			}
			return !0
		},
		__onDataZoomReset: function() {
			return this._zooming && (this._zooming = !1), this._zoomQueue.pop(), this._zoomQueue.length > 0 ? this.component.dataZoom.absoluteZoom(this._zoomQueue[this._zoomQueue.length - 1]) : (this.component.dataZoom.rectZoom(), this._iconDisable(this._iconShapeMap.dataZoomReset), this.zr.refresh()), !0
		},
		_resetMark: function() {
			this._marking = !1, this._markStart && (this._markStart = !1, this._iconShapeMap.mark && this.zr.modShape(this._iconShapeMap.mark.id, {
				style: {
					strokeColor: this._iconShapeMap.mark.highlightStyle.strokeColor
				}
			}), this.zr.un(a.EVENT.CLICK, this._onclick), this.zr.un(a.EVENT.MOUSEMOVE, this._onmousemove))
		},
		_resetZoom: function() {
			this._zooming = !1, this._zoomStart && (this._zoomStart = !1, this._iconShapeMap.dataZoom && this.zr.modShape(this._iconShapeMap.dataZoom.id, {
				style: {
					strokeColor: this._iconShapeMap.dataZoom.highlightStyle.strokeColor
				}
			}), this.zr.un(a.EVENT.MOUSEDOWN, this._onmousedown), this.zr.un(a.EVENT.MOUSEUP, this._onmouseup), this.zr.un(a.EVENT.MOUSEMOVE, this._onmousemove))
		},
		_iconDisable: function(e) {
			e.type != "image" ? this.zr.modShape(e.id, {
				hoverable: !1,
				clickable: !1,
				style: {
					strokeColor: this._disableColor
				}
			}) : this.zr.modShape(e.id, {
				hoverable: !1,
				clickable: !1,
				style: {
					opacity: .3
				}
			})
		},
		_iconEnable: function(e) {
			e.type != "image" ? this.zr.modShape(e.id, {
				hoverable: !0,
				clickable: !0,
				style: {
					strokeColor: e.highlightStyle.strokeColor
				}
			}) : this.zr.modShape(e.id, {
				hoverable: !0,
				clickable: !0,
				style: {
					opacity: .8
				}
			})
		},
		__onDataView: function() {
			return this._dataView.show(this.option), !0
		},
		__onRestore: function() {
			return this._resetMark(), this._resetZoom(), this.messageCenter.dispatch(o.EVENT.RESTORE, null, null, this.myChart), !0
		},
		__onSaveAsImage: function() {
			var e = this.option.toolbox.feature.saveAsImage,
				t = e.type || "png";
			t != "png" && t != "jpeg" && (t = "png");
			var n;
			this.myChart.isConnected() ? n = this.myChart.getConnectedDataURL(t) : n = this.zr.toDataURL("image/" + t, this.option.backgroundColor && this.option.backgroundColor.replace(" ", "") == "rgba(0,0,0,0)" ? "#fff" : this.option.backgroundColor);
			var r = document.createElement("div");
			r.id = "__echarts_download_wrap__", r.style.cssText = "position:fixed;z-index:99999;display:block;top:0;left:0;background-color:rgba(33,33,33,0.5);text-align:center;width:100%;height:100%;line-height:" + document.documentElement.clientHeight + "px;";
			var i = document.createElement("a");
			i.href = n, i.setAttribute("download", (e.name ? e.name : this.option.title && (this.option.title.text || this.option.title.subtext) ? this.option.title.text || this.option.title.subtext : "ECharts") + "." + t), i.innerHTML = '<img style="vertical-align:middle" src="' + n + '" title="' + (!window.attachEvent || navigator.userAgent.indexOf("Opera") !== -1 ? e.lang ? e.lang[0] : "点击保存" : "右键->图片另存为") + '"/>', r.appendChild(i), document.body.appendChild(r), i = null, r = null, setTimeout(function() {
				var e = document.getElementById("__echarts_download_wrap__");
				e && (e.onclick = function() {
					var e = document.getElementById("__echarts_download_wrap__");
					e.onclick = null, e.innerHTML = "", document.body.removeChild(e), e = null
				}, e = null)
			}, 500);
			return
		},
		__onMagicType: function(e) {
			this._resetMark();
			var t = e.target._name;
			return this._magicType[t] || (this._magicType[t] = !0, t == o.CHART_TYPE_LINE ? this._magicType[o.CHART_TYPE_BAR] = !1 : t == o.CHART_TYPE_BAR && (this._magicType[o.CHART_TYPE_LINE] = !1), t == l ? this._magicType[c] = !1 : t == c && (this._magicType[l] = !1), this.messageCenter.dispatch(o.EVENT.MAGIC_TYPE_CHANGED, e.event, {
				magicType: this._magicType
			}, this.myChart)), !0
		},
		setMagicType: function(e) {
			this._resetMark(), this._magicType = e, !this._isSilence && this.messageCenter.dispatch(o.EVENT.MAGIC_TYPE_CHANGED, null, {
				magicType: this._magicType
			}, this.myChart)
		},
		__onCustomHandler: function(e) {
			var t = e.target.style.iconType,
				n = this.option.toolbox.feature[t].onclick;
			typeof n == "function" && n(this.option)
		},
		reset: function(e, t) {
			t && this.clear();
			if (this.query(e, "toolbox.show") && this.query(e, "toolbox.feature.magicType.show")) {
				var n = e.toolbox.feature.magicType.type,
					r = n.length;
				this._magicMap = {};
				while (r--) this._magicMap[n[r]] = !0;
				r = e.series.length;
				var i, s;
				while (r--) {
					i = e.series[r].type, this._magicMap[i] && (s = e.xAxis instanceof Array ? e.xAxis[e.series[r].xAxisIndex || 0] : e.xAxis, s && (s.type || "category") == "category" && (s.__boundaryGap = typeof s.boundaryGap != "undefined" ? s.boundaryGap : !0), s = e.yAxis instanceof Array ? e.yAxis[e.series[r].yAxisIndex || 0] : e.yAxis, s && s.type == "category" && (s.__boundaryGap = typeof s.boundaryGap != "undefined" ? s.boundaryGap : !0), e.series[r].__type = i, e.series[r].__itemStyle = u.clone(e.series[r].itemStyle || {}));
					if (this._magicMap[l] || this._magicMap[c]) e.series[r].__stack = e.series[r].stack
				}
			}
			this._magicType = t ? {} : this._magicType || {};
			for (var o in this._magicType)
				if (this._magicType[o]) {
					this.option = e, this.getMagicOption();
					break
				}
			var a = e.dataZoom;
			if (a && a.show) {
				var f = typeof a.start != "undefined" && a.start >= 0 && a.start <= 100 ? a.start : 0,
					h = typeof a.end != "undefined" && a.end >= 0 && a.end <= 100 ? a.end : 100;
				f > h && (f += h, h = f - h, f -= h), this._zoomQueue = [{
					start: f,
					end: h,
					start2: 0,
					end2: 100
				}]
			} else this._zoomQueue = []
		},
		getMagicOption: function() {
			var e;
			if (this._magicType[o.CHART_TYPE_LINE] || this._magicType[o.CHART_TYPE_BAR]) {
				var t = this._magicType[o.CHART_TYPE_LINE] ? !1 : !0;
				for (var n = 0, r = this.option.series.length; n < r; n++) this._magicMap[this.option.series[n].type] && (this.option.series[n].type = this._magicType[o.CHART_TYPE_LINE] ? o.CHART_TYPE_LINE : o.CHART_TYPE_BAR, this.option.series[n].itemStyle = u.clone(this.option.series[n].__itemStyle), e = this.option.xAxis instanceof Array ? this.option.xAxis[this.option.series[n].xAxisIndex || 0] : this.option.xAxis, e && (e.type || "category") == "category" && (e.boundaryGap = t ? !0 : e.__boundaryGap), e = this.option.yAxis instanceof Array ? this.option.yAxis[this.option.series[n].yAxisIndex || 0] : this.option.yAxis, e && e.type == "category" && (e.boundaryGap = t ? !0 : e.__boundaryGap))
			}
			if (this._magicType[l] || this._magicType[c])
				for (var n = 0, r = this.option.series.length; n < r; n++) this._magicType[l] ? this.option.series[n].stack = "_ECHARTS_STACK_KENER_2014_" : this._magicType[c] && (this.option.series[n].stack = null);
			return this.option
		},
		silence: function(e) {
			this._isSilence = e
		},
		resize: function() {
			this._resetMark(), this.clear(), this.option && this.option.toolbox && this.option.toolbox.show && this._buildShape(), this._dataView && this._dataView.resize()
		},
		hideDataView: function() {
			this._dataView && this._dataView.hide()
		},
		clear: function(e) {
			this.zr && (this.zr.delShape(this.shapeList), this.shapeList = [], e || (this.zr.delShape(this._markShapeList), this._markShapeList = []))
		},
		dispose: function() {
			this._dataView && (this._dataView.dispose(), this._dataView = null), this.clear(), this.shapeList = null, this._markShapeList = null
		},
		refresh: function(e) {
			e && (this._resetMark(), this._resetZoom(), e.toolbox = this.reformOption(e.toolbox), e.toolbox.padding = this.reformCssArray(e.toolbox.padding), this.option = e, this.clear(!0), e.toolbox.show && this._buildShape(), this.hideDataView())
		}
	}, u.inherits(h, t), e("../component").define("toolbox", h), h
}), define("echarts/component/title", ["require", "./base", "zrender/shape/Text", "zrender/shape/Rectangle", "../config", "zrender/tool/util", "zrender/tool/area", "zrender/tool/color", "../component"], function(e) {
	function a(e, n, r, i, s) {
		t.call(this, e, n, r, i, s), this.refresh(i)
	}
	var t = e("./base"),
		n = e("zrender/shape/Text"),
		r = e("zrender/shape/Rectangle"),
		i = e("../config"),
		s = e("zrender/tool/util"),
		o = e("zrender/tool/area"),
		u = e("zrender/tool/color");
	return a.prototype = {
		type: i.COMPONENT_TYPE_TITLE,
		_buildShape: function() {
			this._itemGroupLocation = this._getItemGroupLocation(), this._buildBackground(), this._buildItem();
			for (var e = 0, t = this.shapeList.length; e < t; e++) this.zr.addShape(this.shapeList[e])
		},
		_buildItem: function() {
			var e = this.titleOption.text,
				t = this.titleOption.link,
				r = this.titleOption.target,
				i = this.titleOption.subtext,
				s = this.titleOption.sublink,
				o = this.titleOption.subtarget,
				a = this.getFont(this.titleOption.textStyle),
				f = this.getFont(this.titleOption.subtextStyle),
				l = this._itemGroupLocation.x,
				c = this._itemGroupLocation.y,
				h = this._itemGroupLocation.width,
				p = this._itemGroupLocation.height,
				d = {
					zlevel: this._zlevelBase,
					style: {
						y: c,
						color: this.titleOption.textStyle.color,
						text: e,
						textFont: a,
						textBaseline: "top"
					},
					highlightStyle: {
						color: u.lift(this.titleOption.textStyle.color, 1),
						brushType: "fill"
					},
					hoverable: !1
				};
			t && (d.hoverable = !0, d.clickable = !0, d.onclick = function() {
				!r || r != "self" ? window.open(t) : window.location = t
			});
			var v = {
				zlevel: this._zlevelBase,
				style: {
					y: c + p,
					color: this.titleOption.subtextStyle.color,
					text: i,
					textFont: f,
					textBaseline: "bottom"
				},
				highlightStyle: {
					color: u.lift(this.titleOption.subtextStyle.color, 1),
					brushType: "fill"
				},
				hoverable: !1
			};
			s && (v.hoverable = !0, v.clickable = !0, v.onclick = function() {
				!o || o != "self" ? window.open(s) : window.location = s
			});
			switch (this.titleOption.x) {
				case "center":
					d.style.x = v.style.x = l + h / 2, d.style.textAlign = v.style.textAlign = "center";
					break;
				case "left":
					d.style.x = v.style.x = l, d.style.textAlign = v.style.textAlign = "left";
					break;
				case "right":
					d.style.x = v.style.x = l + h, d.style.textAlign = v.style.textAlign = "right";
					break;
				default:
					l = this.titleOption.x - 0, l = isNaN(l) ? 0 : l, d.style.x = v.style.x = l
			}
			this.titleOption.textAlign && (d.style.textAlign = v.style.textAlign = this.titleOption.textAlign), this.shapeList.push(new n(d)), i !== "" && this.shapeList.push(new n(v))
		},
		_buildBackground: function() {
			var e = this.titleOption.padding[0],
				t = this.titleOption.padding[1],
				n = this.titleOption.padding[2],
				i = this.titleOption.padding[3];
			this.shapeList.push(new r({
				zlevel: this._zlevelBase,
				hoverable: !1,
				style: {
					x: this._itemGroupLocation.x - i,
					y: this._itemGroupLocation.y - e,
					width: this._itemGroupLocation.width + i + t,
					height: this._itemGroupLocation.height + e + n,
					brushType: this.titleOption.borderWidth === 0 ? "fill" : "both",
					color: this.titleOption.backgroundColor,
					strokeColor: this.titleOption.borderColor,
					lineWidth: this.titleOption.borderWidth
				}
			}))
		},
		_getItemGroupLocation: function() {
			var e = this.titleOption.text,
				t = this.titleOption.subtext,
				n = this.getFont(this.titleOption.textStyle),
				r = this.getFont(this.titleOption.subtextStyle),
				i = Math.max(o.getTextWidth(e, n), o.getTextWidth(t, r)),
				s = o.getTextHeight(e, n) + (t === "" ? 0 : this.titleOption.itemGap + o.getTextHeight(t, r)),
				u, a = this.zr.getWidth();
			switch (this.titleOption.x) {
				case "center":
					u = Math.floor((a - i) / 2);
					break;
				case "left":
					u = this.titleOption.padding[3] + this.titleOption.borderWidth;
					break;
				case "right":
					u = a - i - this.titleOption.padding[1] - this.titleOption.borderWidth;
					break;
				default:
					u = this.titleOption.x - 0, u = isNaN(u) ? 0 : u
			}
			var f, l = this.zr.getHeight();
			switch (this.titleOption.y) {
				case "top":
					f = this.titleOption.padding[0] + this.titleOption.borderWidth;
					break;
				case "bottom":
					f = l - s - this.titleOption.padding[2] - this.titleOption.borderWidth;
					break;
				case "center":
					f = Math.floor((l - s) / 2);
					break;
				default:
					f = this.titleOption.y - 0, f = isNaN(f) ? 0 : f
			}
			return {
				x: u,
				y: f,
				width: i,
				height: s
			}
		},
		refresh: function(e) {
			e && (this.option = e, this.option.title = this.reformOption(this.option.title), this.option.title.padding = this.reformCssArray(this.option.title.padding), this.titleOption = this.option.title, this.titleOption.textStyle = s.merge(this.titleOption.textStyle, this.ecTheme.textStyle), this.titleOption.subtextStyle = s.merge(this.titleOption.subtextStyle, this.ecTheme.textStyle)), this.clear(), this._buildShape()
		}
	}, s.inherits(a, t), e("../component").define("title", a), a
}), define("echarts/util/shape/Cross", ["require", "zrender/shape/Base", "zrender/shape/Line", "zrender/tool/util", "./normalIsCover"], function(e) {
	function i(e) {
		t.call(this, e)
	}
	var t = e("zrender/shape/Base"),
		n = e("zrender/shape/Line"),
		r = e("zrender/tool/util");
	return i.prototype = {
		type: "cross",
		buildPath: function(e, t) {
			var r = t.rect;
			t.xStart = r.x, t.xEnd = r.x + r.width, t.yStart = t.yEnd = t.y, n.prototype.buildPath(e, t), t.xStart = t.xEnd = t.x, t.yStart = r.y, t.yEnd = r.y + r.height, n.prototype.buildPath(e, t)
		},
		getRect: function(e) {
			return e.rect
		},
		isCover: e("./normalIsCover")
	}, r.inherits(i, t), i
}), define("echarts/component/tooltip", ["require", "./base", "../util/shape/Cross", "zrender/shape/Line", "zrender/shape/Rectangle", "../config", "../util/ecData", "zrender/config", "zrender/tool/event", "zrender/tool/area", "zrender/tool/color", "zrender/tool/util", "zrender/shape/Base", "../component"], function(e) {
	function d(e, i, s, o, u) {
		t.call(this, e, i, s, o, u), this.dom = u.dom;
		var f = this;
		f._onmousemove = function(e) {
			return f.__onmousemove(e)
		}, f._onglobalout = function(e) {
			return f.__onglobalout(e)
		}, this.zr.on(a.EVENT.MOUSEMOVE, f._onmousemove), this.zr.on(a.EVENT.GLOBALOUT, f._onglobalout), f._hide = function(e) {
			return f.__hide(e)
		}, f._tryShow = function(e) {
			return f.__tryShow(e)
		}, f._refixed = function(e) {
			return f.__refixed(e)
		}, f._setContent = function(e, t) {
			return f.__setContent(e, t)
		}, this._tDom = this._tDom || document.createElement("div"), this._tDom.onselectstart = function() {
			return !1
		}, this._tDom.style.position = "absolute", this.hasAppend = !1, this._axisLineShape && this.zr.delShape(this._axisLineShape.id), this._axisLineShape = new r({
			zlevel: this._zlevelBase,
			invisible: !0,
			hoverable: !1
		}), this.shapeList.push(this._axisLineShape), this.zr.addShape(this._axisLineShape), this._axisShadowShape && this.zr.delShape(this._axisShadowShape.id), this._axisShadowShape = new r({
			zlevel: 1,
			invisible: !0,
			hoverable: !1
		}), this.shapeList.push(this._axisShadowShape), this.zr.addShape(this._axisShadowShape), this._axisCrossShape && this.zr.delShape(this._axisCrossShape.id), this._axisCrossShape = new n({
			zlevel: this._zlevelBase,
			invisible: !0,
			hoverable: !1
		}), this.shapeList.push(this._axisCrossShape), this.zr.addShape(this._axisCrossShape), this.showing = !1, this.refresh(o)
	}
	var t = e("./base"),
		n = e("../util/shape/Cross"),
		r = e("zrender/shape/Line"),
		i = e("zrender/shape/Rectangle"),
		s = new i({}),
		o = e("../config"),
		u = e("../util/ecData"),
		a = e("zrender/config"),
		f = e("zrender/tool/event"),
		l = e("zrender/tool/area"),
		c = e("zrender/tool/color"),
		h = e("zrender/tool/util"),
		p = e("zrender/shape/Base");
	return d.prototype = {
		type: o.COMPONENT_TYPE_TOOLTIP,
		_gCssText: "position:absolute;display:block;border-style:solid;white-space:nowrap;",
		_style: function(e) {
			if (!e) return "";
			var t = [];
			if (e.transitionDuration) {
				var n = "left " + e.transitionDuration + "s," + "top " + e.transitionDuration + "s";
				t.push("transition:" + n), t.push("-moz-transition:" + n), t.push("-webkit-transition:" + n), t.push("-o-transition:" + n)
			}
			e.backgroundColor && (t.push("background-Color:" + c.toHex(e.backgroundColor)), t.push("filter:alpha(opacity=70)"), t.push("background-Color:" + e.backgroundColor)), typeof e.borderWidth != "undefined" && t.push("border-width:" + e.borderWidth + "px"), typeof e.borderColor != "undefined" && t.push("border-color:" + e.borderColor), typeof e.borderRadius != "undefined" && (t.push("border-radius:" + e.borderRadius + "px"), t.push("-moz-border-radius:" + e.borderRadius + "px"), t.push("-webkit-border-radius:" + e.borderRadius + "px"), t.push("-o-border-radius:" + e.borderRadius + "px"));
			var r = e.textStyle;
			r && (r.color && t.push("color:" + r.color), r.decoration && t.push("text-decoration:" + r.decoration), r.align && t.push("text-align:" + r.align), r.fontFamily && t.push("font-family:" + r.fontFamily), r.fontSize && t.push("font-size:" + r.fontSize + "px"), r.fontSize && t.push("line-height:" + Math.round(r.fontSize * 3 / 2) + "px"), r.fontStyle && t.push("font-style:" + r.fontStyle), r.fontWeight && t.push("font-weight:" + r.fontWeight));
			var i = e.padding;
			return typeof i != "undefined" && (i = this.reformCssArray(i), t.push("padding:" + i[0] + "px " + i[1] + "px " + i[2] + "px " + i[3] + "px")), t = t.join(";") + ";", t
		},
		__hide: function() {
			this._tDom && (this._tDom.style.display = "none");
			var e = !1;
			this._axisLineShape.invisible || (this._axisLineShape.invisible = !0, this.zr.modShape(this._axisLineShape.id), e = !0), this._axisShadowShape.invisible || (this._axisShadowShape.invisible = !0, this.zr.modShape(this._axisShadowShape.id), e = !0), this._axisCrossShape.invisible || (this._axisCrossShape.invisible = !0, this.zr.modShape(this._axisCrossShape.id), e = !0), this._lastTipShape && this._lastTipShape.tipShape.length > 0 && (this.zr.delShape(this._lastTipShape.tipShape), this._lastTipShape = !1, this.shapeList.length = 2), e && this.zr.refresh(), this.showing = !1
		},
		_show: function(e, t, n, r) {
			var i = this._tDom.offsetHeight,
				s = this._tDom.offsetWidth;
			e && (typeof e == "function" && (e = e([t, n])), e instanceof Array && (t = e[0], n = e[1])), t + s > this._zrWidth && (t -= s + 40), n + i > this._zrHeight && (n -= i - 20), n < 20 && (n = 0), this._tDom.style.cssText = this._gCssText + this._defaultCssText + (r ? r : "") + "left:" + t + "px;top:" + n + "px;", (i < 10 || s < 10) && setTimeout(this._refixed, 20), this.showing = !0
		},
		__refixed: function() {
			if (this._tDom) {
				var e = "",
					t = this._tDom.offsetHeight,
					n = this._tDom.offsetWidth;
				this._tDom.offsetLeft + n > this._zrWidth && (e += "left:" + (this._zrWidth - n - 20) + "px;"), this._tDom.offsetTop + t > this._zrHeight && (e += "top:" + (this._zrHeight - t - 10) + "px;"), e !== "" && (this._tDom.style.cssText += e)
			}
		},
		__tryShow: function() {
			var e, t;
			if (!this._curTarget) this._findPolarTrigger() || this._findAxisTrigger();
			else {
				if (this._curTarget._type == "island" && this.option.tooltip.show) {
					this._showItemTrigger();
					return
				}
				var n = u.get(this._curTarget, "series"),
					r = u.get(this._curTarget, "data");
				e = this.deepQuery([r, n, this.option], "tooltip.show"), typeof n == "undefined" || typeof r == "undefined" || e === !1 ? (clearTimeout(this._hidingTicket), clearTimeout(this._showingTicket), this._hidingTicket = setTimeout(this._hide, this._hideDelay)) : (t = this.deepQuery([r, n, this.option], "tooltip.trigger"), t == "axis" ? this._showAxisTrigger(n.xAxisIndex, n.yAxisIndex, u.get(this._curTarget, "dataIndex")) : this._showItemTrigger())
			}
		},
		_findAxisTrigger: function() {
			if (!this.component.xAxis || !this.component.yAxis) {
				this._hidingTicket = setTimeout(this._hide, this._hideDelay);
				return
			}
			var e = this.option.series,
				t, n;
			for (var r = 0, i = e.length; r < i; r++)
				if (this.deepQuery([e[r], this.option], "tooltip.trigger") == "axis") {
					t = e[r].xAxisIndex || 0, n = e[r].yAxisIndex || 0;
					if (this.component.xAxis.getAxis(t) && this.component.xAxis.getAxis(t).type == o.COMPONENT_TYPE_AXIS_CATEGORY) {
						this._showAxisTrigger(t, n, this._getNearestDataIndex("x", this.component.xAxis.getAxis(t)));
						return
					}
					if (this.component.yAxis.getAxis(n) && this.component.yAxis.getAxis(n).type == o.COMPONENT_TYPE_AXIS_CATEGORY) {
						this._showAxisTrigger(t, n, this._getNearestDataIndex("y", this.component.yAxis.getAxis(n)));
						return
					}
					this._showAxisTrigger(t, n, -1);
					return
				}
			this.option.tooltip.axisPointer.type == "cross" && this._showAxisTrigger(-1, -1, -1)
		},
		_findPolarTrigger: function() {
			if (!this.component.polar) return !1;
			var e = f.getX(this._event),
				t = f.getY(this._event),
				n = this.component.polar.getNearestIndex([e, t]),
				r;
			return n ? (r = n.valueIndex, n = n.polarIndex) : n = -1, n != -1 ? this._showPolarTrigger(n, r) : !1
		},
		_getNearestDataIndex: function(e, t) {
			var n = -1,
				r = f.getX(this._event),
				i = f.getY(this._event);
			if (e == "x") {
				var s, o, u = this.component.grid.getXend(),
					a = t.getCoordByIndex(n);
				while (a < u) {
					a <= r && (s = a);
					if (a >= r) break;
					a = t.getCoordByIndex(++n), o = a
				}
				return r - s < o - r ? n -= n !== 0 ? 1 : 0 : typeof t.getNameByIndex(n) == "undefined" && (n -= 1), n
			}
			var l, c, h = this.component.grid.getY(),
				a = t.getCoordByIndex(n);
			while (a > h) {
				a >= i && (c = a);
				if (a <= i) break;
				a = t.getCoordByIndex(++n), l = a
			}
			return i - l > c - i ? n -= n !== 0 ? 1 : 0 : typeof t.getNameByIndex(n) == "undefined" && (n -= 1), n
		},
		_showAxisTrigger: function(e, t, n) {
			!this._event.connectTrigger && this.messageCenter.dispatch(o.EVENT.TOOLTIP_IN_GRID, this._event, null, this.myChart);
			if (typeof this.component.xAxis == "undefined" || typeof this.component.yAxis == "undefined" || typeof e == "undefined" || typeof t == "undefined") {
				clearTimeout(this._hidingTicket), clearTimeout(this._showingTicket), this._hidingTicket = setTimeout(this._hide, this._hideDelay);
				return
			}
			var r = this.option.series,
				i = [],
				s = [],
				u, a, l, c, h, p, d = "";
			if (this.option.tooltip.trigger == "axis") {
				if (this.option.tooltip.show === !1) return;
				c = this.option.tooltip.formatter, h = this.option.tooltip.position
			}
			if (e != -1 && this.component.xAxis.getAxis(e).type == o.COMPONENT_TYPE_AXIS_CATEGORY) {
				u = this.component.xAxis.getAxis(e);
				for (var v = 0, m = r.length; v < m; v++) {
					if (!this._isSelected(r[v].name)) continue;
					r[v].xAxisIndex == e && this.deepQuery([r[v], this.option], "tooltip.trigger") == "axis" && (p = this.query(r[v], "tooltip.showContent") || p, c = this.query(r[v], "tooltip.formatter") || c, h = this.query(r[v], "tooltip.position") || h, d += this._style(this.query(r[v], "tooltip")), i.push(r[v]), s.push(v))
				}
				this.messageCenter.dispatch(o.EVENT.TOOLTIP_HOVER, this._event, {
					seriesIndex: s,
					dataIndex: n
				}, this.myChart), l = f.getY(this._event), a = this.subPixelOptimize(u.getCoordByIndex(n), this._axisLineWidth), this._styleAxisPointer(i, a, this.component.grid.getY(), a, this.component.grid.getYend(), u.getGap(), a, l)
			} else if (t != -1 && this.component.yAxis.getAxis(t).type == o.COMPONENT_TYPE_AXIS_CATEGORY) {
				u = this.component.yAxis.getAxis(t);
				for (var v = 0, m = r.length; v < m; v++) {
					if (!this._isSelected(r[v].name)) continue;
					r[v].yAxisIndex == t && this.deepQuery([r[v], this.option], "tooltip.trigger") == "axis" && (p = this.query(r[v], "tooltip.showContent") || p, c = this.query(r[v], "tooltip.formatter") || c, h = this.query(r[v], "tooltip.position") || h, d += this._style(this.query(r[v], "tooltip")), i.push(r[v]), s.push(v))
				}
				this.messageCenter.dispatch(o.EVENT.TOOLTIP_HOVER, this._event, {
					seriesIndex: s,
					dataIndex: n
				}, this.myChart), a = f.getX(this._event), l = this.subPixelOptimize(u.getCoordByIndex(n), this._axisLineWidth), this._styleAxisPointer(i, this.component.grid.getX(), l, this.component.grid.getXend(), l, u.getGap(), a, l)
			} else a = f.getX(this._event), l = f.getY(this._event), this._styleAxisPointer(r, this.component.grid.getX(), l, this.component.grid.getXend(), l, 0, a, l), n >= 0 ? this._showItemTrigger() : (clearTimeout(this._hidingTicket), clearTimeout(this._showingTicket), this._tDom.style.display = "none"); if (i.length > 0) {
				var g;
				if (typeof c == "function") {
					var y = [];
					for (var v = 0, m = i.length; v < m; v++) g = i[v].data[n], g = typeof g != "undefined" ? typeof g.value != "undefined" ? g.value : g : "-", y.push([i[v].name || "", u.getNameByIndex(n), g]);
					this._curTicket = "axis:" + n, this._tDom.innerHTML = c.call(this.myChart, y, this._curTicket, this._setContent)
				} else if (typeof c == "string") {
					this._curTicket = NaN, c = c.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}");
					for (var v = 0, m = i.length; v < m; v++) c = c.replace("{a" + v + "}", this._encodeHTML(i[v].name || "")), c = c.replace("{b" + v + "}", this._encodeHTML(u.getNameByIndex(n))), g = i[v].data[n], g = typeof g != "undefined" ? typeof g.value != "undefined" ? g.value : g : "-", c = c.replace("{c" + v + "}", g instanceof Array ? g : this.numAddCommas(g));
					this._tDom.innerHTML = c
				} else {
					this._curTicket = NaN, c = this._encodeHTML(u.getNameByIndex(n));
					for (var v = 0, m = i.length; v < m; v++) c += "<br/>" + this._encodeHTML(i[v].name || "") + " : ", g = i[v].data[n], g = typeof g != "undefined" ? typeof g.value != "undefined" ? g.value : g : "-", c += g instanceof Array ? g : this.numAddCommas(g);
					this._tDom.innerHTML = c
				} if (p === !1 || !this.option.tooltip.showContent) return;
				this.hasAppend || (this._tDom.style.left = this._zrWidth / 2 + "px", this._tDom.style.top = this._zrHeight / 2 + "px", this.dom.firstChild.appendChild(this._tDom), this.hasAppend = !0), this._show(h, a + 10, l + 10, d)
			}
		},
		_showPolarTrigger: function(e, t) {
			if (typeof this.component.polar == "undefined" || typeof e == "undefined" || typeof t == "undefined" || t < 0) return !1;
			var n = this.option.series,
				r = [],
				i, s, o, u = "";
			if (this.option.tooltip.trigger == "axis") {
				if (this.option.tooltip.show === !1) return !1;
				i = this.option.tooltip.formatter, s = this.option.tooltip.position
			}
			var a = this.option.polar[e].indicator[t].text;
			for (var l = 0, c = n.length; l < c; l++) {
				if (!this._isSelected(n[l].name)) continue;
				n[l].polarIndex == e && this.deepQuery([n[l], this.option], "tooltip.trigger") == "axis" && (o = this.query(n[l], "tooltip.showContent") || o, i = this.query(n[l], "tooltip.formatter") || i, s = this.query(n[l], "tooltip.position") || s, u += this._style(this.query(n[l], "tooltip")), r.push(n[l]))
			}
			if (r.length > 0) {
				var h, p, d = [];
				for (var l = 0, c = r.length; l < c; l++) {
					h = r[l].data;
					for (var v = 0, m = h.length; v < m; v++) {
						p = h[v];
						if (!this._isSelected(p.name)) continue;
						p = typeof p != "undefined" ? p : {
							name: "",
							value: {
								dataIndex: "-"
							}
						}, d.push([r[l].name || "", p.name, typeof p.value[t].value != "undefined" ? p.value[t].value : p.value[t], a])
					}
				}
				if (d.length <= 0) return;
				if (typeof i == "function") this._curTicket = "axis:" + t, this._tDom.innerHTML = i.call(this.myChart, d, this._curTicket, this._setContent);
				else if (typeof i == "string") {
					i = i.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}").replace("{d}", "{d0}");
					for (var l = 0, c = d.length; l < c; l++) i = i.replace("{a" + l + "}", this._encodeHTML(d[l][0])), i = i.replace("{b" + l + "}", this._encodeHTML(d[l][1])), i = i.replace("{c" + l + "}", this.numAddCommas(d[l][2])), i = i.replace("{d" + l + "}", this._encodeHTML(d[l][3]));
					this._tDom.innerHTML = i
				} else {
					i = this._encodeHTML(d[0][1]) + "<br/>" + this._encodeHTML(d[0][3]) + " : " + this.numAddCommas(d[0][2]);
					for (var l = 1, c = d.length; l < c; l++) i += "<br/>" + this._encodeHTML(d[l][1]) + "<br/>", i += this._encodeHTML(d[l][3]) + " : " + this.numAddCommas(d[l][2]);
					this._tDom.innerHTML = i
				} if (o === !1 || !this.option.tooltip.showContent) return;
				return this.hasAppend || (this._tDom.style.left = this._zrWidth / 2 + "px", this._tDom.style.top = this._zrHeight / 2 + "px", this.dom.firstChild.appendChild(this._tDom), this.hasAppend = !0), this._show(s, f.getX(this._event), f.getY(this._event), u), !0
			}
		},
		_showItemTrigger: function() {
			if (!this._curTarget) return;
			var e = u.get(this._curTarget, "series"),
				t = u.get(this._curTarget, "data"),
				n = u.get(this._curTarget, "name"),
				r = u.get(this._curTarget, "value"),
				i = u.get(this._curTarget, "special"),
				s = u.get(this._curTarget, "special2"),
				a, l, c, h = "",
				p, d = "";
			this._curTarget._type != "island" ? (this.option.tooltip.trigger == "item" && (a = this.option.tooltip.formatter, l = this.option.tooltip.position), this.query(e, "tooltip.trigger") == "item" && (c = this.query(e, "tooltip.showContent") || c, a = this.query(e, "tooltip.formatter") || a, l = this.query(e, "tooltip.position") || l, h += this._style(this.query(e, "tooltip"))), c = this.query(t, "tooltip.showContent") || c, a = this.query(t, "tooltip.formatter") || a, l = this.query(t, "tooltip.position") || l, h += this._style(this.query(t, "tooltip"))) : (c = this.deepQuery([t, e, this.option], "tooltip.showContent"), a = this.deepQuery([t, e, this.option], "tooltip.islandFormatter"), l = this.deepQuery([t, e, this.option], "tooltip.islandPosition"));
			if (typeof a == "function") this._curTicket = (e.name || "") + ":" + u.get(this._curTarget, "dataIndex"), this._tDom.innerHTML = a.call(this.myChart, [e.name || "", n, r, i, s, t], this._curTicket, this._setContent);
			else if (typeof a == "string") this._curTicket = NaN, a = a.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}"), a = a.replace("{a0}", this._encodeHTML(e.name || "")).replace("{b0}", this._encodeHTML(n)).replace("{c0}", r instanceof Array ? r : this.numAddCommas(r)), a = a.replace("{d}", "{d0}").replace("{d0}", i || ""), a = a.replace("{e}", "{e0}").replace("{e0}", u.get(this._curTarget, "special2") || ""), this._tDom.innerHTML = a;
			else {
				this._curTicket = NaN;
				if (e.type == o.CHART_TYPE_SCATTER) this._tDom.innerHTML = (typeof e.name != "undefined" ? this._encodeHTML(e.name) + "<br/>" : "") + (n === "" ? "" : this._encodeHTML(n) + " : ") + r + (typeof i == "undefined" ? "" : " (" + i + ")");
				else if (e.type == o.CHART_TYPE_RADAR && i) {
					p = i, d += this._encodeHTML(n === "" ? e.name || "" : n), d += d === "" ? "" : "<br />";
					for (var v = 0; v < p.length; v++) d += this._encodeHTML(p[v].text) + " : " + this.numAddCommas(r[v]) + "<br />";
					this._tDom.innerHTML = d
				} else if (e.type == o.CHART_TYPE_CHORD)
					if (typeof s == "undefined") this._tDom.innerHTML = this._encodeHTML(n) + " (" + this.numAddCommas(r) + ")";
					else {
						var m = this._encodeHTML(n),
							g = this._encodeHTML(i);
						this._tDom.innerHTML = (typeof e.name != "undefined" ? this._encodeHTML(e.name) + "<br/>" : "") + m + " -> " + g + " (" + this.numAddCommas(r) + ")" + "<br />" + g + " -> " + m + " (" + this.numAddCommas(s) + ")"
					} else this._tDom.innerHTML = (typeof e.name != "undefined" ? this._encodeHTML(e.name) + "<br/>" : "") + this._encodeHTML(n) + " : " + this.numAddCommas(r) + (typeof i == "undefined" ? "" : " (" + this.numAddCommas(i) + ")")
			} if (!this._axisLineShape.invisible || !this._axisShadowShape.invisible) this._axisLineShape.invisible = !0, this.zr.modShape(this._axisLineShape.id), this._axisShadowShape.invisible = !0, this.zr.modShape(this._axisShadowShape.id), this.zr.refresh();
			if (c === !1 || !this.option.tooltip.showContent) return;
			this.hasAppend || (this._tDom.style.left = this._zrWidth / 2 + "px", this._tDom.style.top = this._zrHeight / 2 + "px", this.dom.firstChild.appendChild(this._tDom), this.hasAppend = !0), this._show(l, f.getX(this._event) + 20, f.getY(this._event) - 20, h)
		},
		_styleAxisPointer: function(e, t, n, r, i, s, o, u) {
			if (e.length > 0) {
				var a, f, l = this.option.tooltip.axisPointer,
					c = l.type,
					h = {
						line: {},
						cross: {},
						shadow: {}
					};
				for (var p in h) h[p].color = l[p + "Style"].color, h[p].width = l[p + "Style"].width, h[p].type = l[p + "Style"].type;
				for (var d = 0, v = e.length; d < v; d++) this.deepQuery([e[d], this.option], "tooltip.trigger") == "axis" && (a = e[d], f = this.query(a, "tooltip.axisPointer.type"), c = f || c, f && (h[f].color = this.query(a, "tooltip.axisPointer." + f + "Style.color") || h[f].color, h[f].width = this.query(a, "tooltip.axisPointer." + f + "Style.width") || h[f].width, h[f].type = this.query(a, "tooltip.axisPointer." + f + "Style.type") || h[f].type));
				if (c == "line") this._axisLineShape.style = {
					xStart: t,
					yStart: n,
					xEnd: r,
					yEnd: i,
					strokeColor: h.line.color,
					lineWidth: h.line.width,
					lineType: h.line.type
				}, this._axisLineShape.invisible = !1, this.zr.modShape(this._axisLineShape.id);
				else if (c == "cross") this._axisCrossShape.style = {
					brushType: "stroke",
					rect: this.component.grid.getArea(),
					x: o,
					y: u,
					text: ("( " + this.component.xAxis.getAxis(0).getValueFromCoord(o) + " , " + this.component.yAxis.getAxis(0).getValueFromCoord(u) + " )").replace("  , ", " ").replace(" ,  ", " "),
					textPosition: "specific",
					strokeColor: h.cross.color,
					lineWidth: h.cross.width,
					lineType: h.cross.type
				}, this.component.grid.getXend() - o > 100 ? (this._axisCrossShape.style.textAlign = "left", this._axisCrossShape.style.textX = o + 10) : (this._axisCrossShape.style.textAlign = "right", this._axisCrossShape.style.textX = o - 10), u - this.component.grid.getY() > 50 ? (this._axisCrossShape.style.textBaseline = "bottom", this._axisCrossShape.style.textY = u - 10) : (this._axisCrossShape.style.textBaseline = "top", this._axisCrossShape.style.textY = u + 10), this._axisCrossShape.invisible = !1, this.zr.modShape(this._axisCrossShape.id);
				else if (c == "shadow") {
					if (typeof h.shadow.width == "undefined" || h.shadow.width == "auto" || isNaN(h.shadow.width)) h.shadow.width = s;
					t == r ? Math.abs(this.component.grid.getX() - t) < 2 ? (h.shadow.width /= 2, t = r += h.shadow.width / 2) : Math.abs(this.component.grid.getXend() - t) < 2 && (h.shadow.width /= 2, t = r -= h.shadow.width / 2) : n == i && (Math.abs(this.component.grid.getY() - n) < 2 ? (h.shadow.width /= 2, n = i += h.shadow.width / 2) : Math.abs(this.component.grid.getYend() - n) < 2 && (h.shadow.width /= 2, n = i -= h.shadow.width / 2)), this._axisShadowShape.style = {
						xStart: t,
						yStart: n,
						xEnd: r,
						yEnd: i,
						strokeColor: h.shadow.color,
						lineWidth: h.shadow.width
					}, this._axisShadowShape.invisible = !1, this.zr.modShape(this._axisShadowShape.id)
				}
				this.zr.refresh()
			}
		},
		__onmousemove: function(e) {
			clearTimeout(this._hidingTicket), clearTimeout(this._showingTicket);
			var t = e.target,
				n = f.getX(e.event),
				r = f.getY(e.event);
			if (!t) this._curTarget = !1, this._event = e.event, this._event.zrenderX = n, this._event.zrenderY = r, this._needAxisTrigger && this.component.grid && l.isInside(s, this.component.grid.getArea(), n, r) ? this._showingTicket = setTimeout(this._tryShow, this._showDelay) : this._needAxisTrigger && this.component.polar && this.component.polar.isInside([n, r]) != -1 ? this._showingTicket = setTimeout(this._tryShow, this._showDelay) : (!this._event.connectTrigger && this.messageCenter.dispatch(o.EVENT.TOOLTIP_OUT_GRID, this._event, null, this.myChart), this._hidingTicket = setTimeout(this._hide, this._hideDelay));
			else {
				this._curTarget = t, this._event = e.event, this._event.zrenderX = n, this._event.zrenderY = r;
				var i;
				if (this._needAxisTrigger && this.component.polar && (i = this.component.polar.isInside([n, r])) != -1) {
					var u = this.option.series;
					for (var a = 0, c = u.length; a < c; a++)
						if (u[a].polarIndex == i && this.deepQuery([u[a], this.option], "tooltip.trigger") == "axis") {
							this._curTarget = null;
							break
						}
				}
				this._showingTicket = setTimeout(this._tryShow, this._showDelay)
			}
		},
		__onglobalout: function() {
			clearTimeout(this._hidingTicket), clearTimeout(this._showingTicket), this._hidingTicket = setTimeout(this._hide, this._hideDelay)
		},
		__setContent: function(e, t) {
			if (!this._tDom) return;
			e == this._curTicket && (this._tDom.innerHTML = t), setTimeout(this._refixed, 20)
		},
		ontooltipHover: function(e, t) {
			if (!this._lastTipShape || this._lastTipShape && this._lastTipShape.dataIndex != e.dataIndex) {
				this._lastTipShape && this._lastTipShape.tipShape.length > 0 && (this.zr.delShape(this._lastTipShape.tipShape), this.shapeList.length = 2);
				for (var n = 0, r = t.length; n < r; n++) t[n].zlevel = this._zlevelBase, t[n].style = p.prototype.getHighlightStyle(t[n].style, t[n].highlightStyle), t[n].draggable = !1, t[n].hoverable = !1, t[n].clickable = !1, t[n].ondragend = null, t[n].ondragover = null, t[n].ondrop = null, this.shapeList.push(t[n]), this.zr.addShape(t[n]);
				this._lastTipShape = {
					dataIndex: e.dataIndex,
					tipShape: t
				}
			}
		},
		ondragend: function() {
			this._hide()
		},
		onlegendSelected: function(e) {
			this._selectedMap = e.selected
		},
		_setSelectedMap: function() {
			this.component.legend ? this._selectedMap = h.clone(this.component.legend.getSelectedMap()) : this._selectedMap = {}
		},
		_isSelected: function(e) {
			return typeof this._selectedMap[e] != "undefined" ? this._selectedMap[e] : !0
		},
		showTip: function(e) {
			if (!e) return;
			var t, n = this.option.series;
			if (typeof e.seriesIndex != "undefined") t = e.seriesIndex;
			else {
				var r = e.seriesName;
				for (var i = 0, s = n.length; i < s; i++)
					if (n[i].name == r) {
						t = i;
						break
					}
			}
			var f = n[t];
			if (typeof f == "undefined") return;
			var l = this.myChart.chart[f.type],
				c = this.deepQuery([f, this.option], "tooltip.trigger") == "axis";
			if (!l) return;
			if (c) {
				var h = e.dataIndex;
				switch (l.type) {
					case o.CHART_TYPE_LINE:
					case o.CHART_TYPE_BAR:
					case o.CHART_TYPE_K:
						if (typeof this.component.xAxis == "undefined" || typeof this.component.yAxis == "undefined" || f.data.length <= h) return;
						var p = f.xAxisIndex || 0,
							d = f.yAxisIndex || 0;
						this.component.xAxis.getAxis(p).type == o.COMPONENT_TYPE_AXIS_CATEGORY ? this._event = {
							zrenderX: this.component.xAxis.getAxis(p).getCoordByIndex(h),
							zrenderY: this.component.grid.getY() + (this.component.grid.getYend() - this.component.grid.getY()) / 4
						} : this._event = {
							zrenderX: this.component.grid.getX() + (this.component.grid.getXend() - this.component.grid.getX()) / 4,
							zrenderY: this.component.yAxis.getAxis(d).getCoordByIndex(h)
						}, this._showAxisTrigger(p, d, h);
						break;
					case o.CHART_TYPE_RADAR:
						if (typeof this.component.polar == "undefined" || f.data[0].value.length <= h) return;
						var v = f.polarIndex || 0,
							m = this.component.polar.getVector(v, h, "max");
						this._event = {
							zrenderX: m[0],
							zrenderY: m[1]
						}, this._showPolarTrigger(v, h)
				}
			} else {
				var g = l.shapeList,
					y, b;
				switch (l.type) {
					case o.CHART_TYPE_LINE:
					case o.CHART_TYPE_BAR:
					case o.CHART_TYPE_K:
					case o.CHART_TYPE_SCATTER:
						var h = e.dataIndex;
						for (var i = 0, s = g.length; i < s; i++)
							if (u.get(g[i], "seriesIndex") == t && u.get(g[i], "dataIndex") == h) {
								this._curTarget = g[i], y = g[i].style.x, b = l.type != o.CHART_TYPE_K ? g[i].style.y : g[i].style.y[0];
								break
							}
						break;
					case o.CHART_TYPE_RADAR:
						var h = e.dataIndex;
						for (var i = 0, s = g.length; i < s; i++)
							if (g[i].type == "polygon" && u.get(g[i], "seriesIndex") == t && u.get(g[i], "dataIndex") == h) {
								this._curTarget = g[i];
								var m = this.component.polar.getCenter(f.polarIndex || 0);
								y = m[0], b = m[1];
								break
							}
						break;
					case o.CHART_TYPE_PIE:
						var w = e.name;
						for (var i = 0, s = g.length; i < s; i++)
							if (g[i].type == "sector" && u.get(g[i], "seriesIndex") == t && u.get(g[i], "name") == w) {
								this._curTarget = g[i];
								var E = this._curTarget.style,
									S = (E.startAngle + E.endAngle) / 2 * Math.PI / 180;
								y = this._curTarget.style.x + Math.cos(S) * E.r / 1.5, b = this._curTarget.style.y - Math.sin(S) * E.r / 1.5;
								break
							}
						break;
					case o.CHART_TYPE_MAP:
						var w = e.name,
							x = f.mapType;
						for (var i = 0, s = g.length; i < s; i++)
							if (g[i].type == "text" && g[i]._mapType == x && g[i].style._name == w) {
								this._curTarget = g[i], y = this._curTarget.style.x + this._curTarget.position[0], b = this._curTarget.style.y + this._curTarget.position[1];
								break
							}
						break;
					case o.CHART_TYPE_CHORD:
						var w = e.name;
						for (var i = 0, s = g.length; i < s; i++)
							if (g[i].type == "sector" && u.get(g[i], "name") == w) {
								this._curTarget = g[i];
								var E = this._curTarget.style,
									S = (E.startAngle + E.endAngle) / 2 * Math.PI / 180;
								y = this._curTarget.style.x + Math.cos(S) * (E.r - 2), b = this._curTarget.style.y - Math.sin(S) * (E.r - 2), this.zr.trigger(a.EVENT.MOUSEMOVE, {
									zrenderX: y,
									zrenderY: b
								});
								return
							}
						break;
					case o.CHART_TYPE_FORCE:
						var w = e.name;
						for (var i = 0, s = g.length; i < s; i++)
							if (g[i].type == "circle" && u.get(g[i], "name") == w) {
								this._curTarget = g[i], y = this._curTarget.position[0], b = this._curTarget.position[1];
								break
							}
				}
				typeof y != "undefined" && typeof b != "undefined" && (this._event = {
					zrenderX: y,
					zrenderY: b
				}, this.zr.addHoverShape(this._curTarget), this.zr.refreshHover(), this._showItemTrigger())
			}
		},
		hideTip: function() {
			this._hide()
		},
		refresh: function(e) {
			this._zrHeight = this.zr.getHeight(), this._zrWidth = this.zr.getWidth(), this._lastTipShape && this._lastTipShape.tipShape.length > 0 && this.zr.delShape(this._lastTipShape.tipShape), this._lastTipShape = !1, this.shapeList.length = 2;
			if (e) {
				this.option = e, this.option.tooltip = this.reformOption(this.option.tooltip), this.option.tooltip.textStyle = h.merge(this.option.tooltip.textStyle, this.ecTheme.textStyle), this.option.tooltip.padding = this.reformCssArray(this.option.tooltip.padding), this._needAxisTrigger = !1, this.option.tooltip.trigger == "axis" && (this._needAxisTrigger = !0);
				var t = this.option.series;
				for (var n = 0, r = t.length; n < r; n++)
					if (this.query(t[n], "tooltip.trigger") == "axis") {
						this._needAxisTrigger = !0;
						break
					}
				this._showDelay = this.option.tooltip.showDelay, this._hideDelay = this.option.tooltip.hideDelay, this._defaultCssText = this._style(this.option.tooltip), this._setSelectedMap(), this._axisLineWidth = this.option.tooltip.axisPointer.lineStyle.width
			}
			this.showing && this._tryShow()
		},
		dispose: function() {
			this._lastTipShape && this._lastTipShape.tipShape.length > 0 && this.zr.delShape(this._lastTipShape.tipShape), this.clear(), this.shapeList = null, clearTimeout(this._hidingTicket), clearTimeout(this._showingTicket), this.zr.un(a.EVENT.MOUSEMOVE, this._onmousemove), this.zr.un(a.EVENT.GLOBALOUT, this._onglobalout), this.hasAppend && this.dom.firstChild.removeChild(this._tDom), this._tDom = null
		},
		_encodeHTML: function(e) {
			return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
		}
	}, h.inherits(d, t), e("../component").define("tooltip", d), d
}), define("zrender/shape/Ring", ["require", "./Base", "../tool/util"], function(e) {
	function n(e) {
		t.call(this, e)
	}
	var t = e("./Base");
	return n.prototype = {
		type: "ring",
		buildPath: function(e, t) {
			e.arc(t.x, t.y, t.r, 0, Math.PI * 2, !1), e.moveTo(t.x + t.r0, t.y), e.arc(t.x, t.y, t.r0, 0, Math.PI * 2, !0);
			return
		},
		getRect: function(e) {
			if (e.__rect) return e.__rect;
			var t;
			return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, e.__rect = {
				x: Math.round(e.x - e.r - t / 2),
				y: Math.round(e.y - e.r - t / 2),
				width: e.r * 2 + t,
				height: e.r * 2 + t
			}, e.__rect
		}
	}, e("../tool/util").inherits(n, t), n
}), define("zrender/shape/Sector", ["require", "../tool/math", "./Base", "./Ring", "./Polygon", "../tool/util"], function(e) {
	function r(e) {
		n.call(this, e)
	}
	var t = e("../tool/math"),
		n = e("./Base");
	return r.prototype = {
		type: "sector",
		buildPath: function(e, n) {
			var r = n.x,
				i = n.y,
				s = typeof n.r0 == "undefined" ? 0 : n.r0,
				o = n.r,
				u = n.startAngle,
				a = n.endAngle;
			if (Math.abs(a - u) >= 360) {
				e.arc(r, i, o, 0, Math.PI * 2, !1), s !== 0 && (e.moveTo(r + s, i), e.arc(r, i, s, 0, Math.PI * 2, !0));
				return
			}
			u = t.degreeToRadian(u), a = t.degreeToRadian(a);
			var f = Math.PI * 2,
				l = t.cos(u),
				c = t.sin(u);
			e.moveTo(l * s + r, i - c * s), e.lineTo(l * o + r, i - c * o), e.arc(r, i, o, f - u, f - a, !0), e.lineTo(t.cos(a) * s + r, i - t.sin(a) * s), s !== 0 && e.arc(r, i, s, f - a, f - u, !1);
			return
		},
		getRect: function(n) {
			if (n.__rect) return n.__rect;
			var r = n.x,
				i = n.y,
				s = typeof n.r0 == "undefined" ? 0 : n.r0,
				o = n.r,
				u = n.startAngle,
				a = n.endAngle;
			if (Math.abs(a - u) >= 360) return n.__rect = e("./Ring").prototype.getRect(n), n.__rect;
			u = (720 + u) % 360, a = (720 + a) % 360, a <= u && (a += 360);
			var f = [];
			return u <= 90 && a >= 90 && f.push([r, i - o]), u <= 180 && a >= 180 && f.push([r - o, i]), u <= 270 && a >= 270 && f.push([r, i + o]), u <= 360 && a >= 360 && f.push([r + o, i]), u = t.degreeToRadian(u), a = t.degreeToRadian(a), f.push([t.cos(u) * s + r, i - t.sin(u) * s]), f.push([t.cos(u) * o + r, i - t.sin(u) * o]), f.push([t.cos(a) * o + r, i - t.sin(a) * o]), f.push([t.cos(a) * s + r, i - t.sin(a) * s]), n.__rect = e("./Polygon").prototype.getRect({
				brushType: n.brushType,
				lineWidth: n.lineWidth,
				pointList: f
			}), n.__rect
		}
	}, e("../tool/util").inherits(r, n), r
}), define("echarts/util/shape/Candle", ["require", "zrender/shape/Base", "zrender/tool/util", "./normalIsCover"], function(e) {
	function r(e) {
		t.call(this, e)
	}
	var t = e("zrender/shape/Base"),
		n = e("zrender/tool/util");
	return r.prototype = {
		type: "candle",
		_numberOrder: function(e, t) {
			return t - e
		},
		buildPath: function(e, t) {
			var r = n.clone(t.y).sort(this._numberOrder);
			e.moveTo(t.x, r[3]), e.lineTo(t.x, r[2]), e.moveTo(t.x - t.width / 2, r[2]), e.rect(t.x - t.width / 2, r[2], t.width, r[1] - r[2]), e.moveTo(t.x, r[1]), e.lineTo(t.x, r[0])
		},
		getRect: function(e) {
			if (!e.__rect) {
				var t = 0;
				if (e.brushType == "stroke" || e.brushType == "fill") t = e.lineWidth || 1;
				var r = n.clone(e.y).sort(this._numberOrder);
				e.__rect = {
					x: Math.round(e.x - e.width / 2 - t / 2),
					y: Math.round(r[3] - t / 2),
					width: e.width + t,
					height: r[0] - r[3] + t
				}
			}
			return e.__rect
		},
		isCover: e("./normalIsCover")
	}, n.inherits(r, t), r
}), define("echarts/component/legend", ["require", "./base", "zrender/shape/Text", "zrender/shape/Rectangle", "zrender/shape/Sector", "../util/shape/Icon", "../util/shape/Candle", "../config", "zrender/tool/util", "zrender/tool/area", "../component"], function(e) {
	function l(e, n, r, i, s) {
		if (!this.query(i, "legend.data")) {
			console.error("option.legend.data has not been defined.");
			return
		}
		t.call(this, e, n, r, i, s);
		var o = this;
		o._legendSelected = function(e) {
			o.__legendSelected(e)
		}, this._colorIndex = 0, this._colorMap = {}, this._selectedMap = {}, this.refresh(i)
	}
	var t = e("./base"),
		n = e("zrender/shape/Text"),
		r = e("zrender/shape/Rectangle"),
		i = e("zrender/shape/Sector"),
		s = e("../util/shape/Icon"),
		o = e("../util/shape/Candle"),
		u = e("../config"),
		a = e("zrender/tool/util"),
		f = e("zrender/tool/area");
	l.prototype = {
		type: u.COMPONENT_TYPE_LEGEND,
		_buildShape: function() {
			this._itemGroupLocation = this._getItemGroupLocation(), this._buildBackground(), this._buildItem();
			for (var e = 0, t = this.shapeList.length; e < t; e++) this.zr.addShape(this.shapeList[e])
		},
		_buildItem: function() {
			var e = this.legendOption.data,
				t = e.length,
				r, i, o, u, l = this.legendOption.textStyle,
				c, h, p, d = this.zr.getWidth(),
				v = this.zr.getHeight(),
				m = this._itemGroupLocation.x,
				g = this._itemGroupLocation.y,
				y = this.legendOption.itemWidth,
				b = this.legendOption.itemHeight,
				w = this.legendOption.itemGap,
				E;
			this.legendOption.orient == "vertical" && this.legendOption.x == "right" && (m = this._itemGroupLocation.x + this._itemGroupLocation.width - y);
			for (var S = 0; S < t; S++) {
				c = a.merge(e[S].textStyle || {}, l), h = this.getFont(c), r = this._getName(e[S]), p = this._getFormatterName(r);
				if (r === "") {
					this.legendOption.orient == "horizontal" ? (m = this._itemGroupLocation.x, g += b + w) : (this.legendOption.x == "right" ? m -= this._itemGroupLocation.maxWidth + w : m += this._itemGroupLocation.maxWidth + w, g = this._itemGroupLocation.y);
					continue
				}
				i = e[S].icon || this._getSomethingByName(r).type, E = this.getColor(r), this.legendOption.orient == "horizontal" ? d - m < 200 && y + 5 + f.getTextWidth(p, h) + (S == t - 1 || e[S + 1] === "" ? 0 : w) >= d - m && (m = this._itemGroupLocation.x, g += b + w) : v - g < 200 && b + (S == t - 1 || e[S + 1] === "" ? 0 : w) >= v - g && (this.legendOption.x == "right" ? m -= this._itemGroupLocation.maxWidth + w : m += this._itemGroupLocation.maxWidth + w, g = this._itemGroupLocation.y), o = this._getItemShapeByType(m, g, y, b, this._selectedMap[r] ? E : "#ccc", i, E), o._name = r, o = new s(o), u = {
					zlevel: this._zlevelBase,
					style: {
						x: m + y + 5,
						y: g + b / 2,
						color: this._selectedMap[r] ? c.color === "auto" ? E : c.color : "#ccc",
						text: p,
						textFont: h,
						textBaseline: "middle"
					},
					highlightStyle: {
						color: E,
						brushType: "fill"
					},
					hoverable: !!this.legendOption.selectedMode,
					clickable: !!this.legendOption.selectedMode
				}, this.legendOption.orient == "vertical" && this.legendOption.x == "right" && (u.style.x -= y + 10, u.style.textAlign = "right"), u._name = r, u = new n(u), this.legendOption.selectedMode && (o.onclick = u.onclick = this._legendSelected, o.onmouseover = u.onmouseover = this.hoverConnect, o.hoverConnect = u.id, u.hoverConnect = o.id), this.shapeList.push(o), this.shapeList.push(u), this.legendOption.orient == "horizontal" ? m += y + 5 + f.getTextWidth(p, h) + w : g += b + w
			}
			this.legendOption.orient == "horizontal" && this.legendOption.x == "center" && g != this._itemGroupLocation.y && this._mLineOptimize()
		},
		_getName: function(e) {
			return typeof e.name != "undefined" ? e.name : e
		},
		_getFormatterName: function(e) {
			var t = this.legendOption.formatter,
				n;
			return typeof t == "function" ? n = t.call(this.myChart, e) : typeof t == "string" ? n = t.replace("{name}", e) : n = e, n
		},
		_getFormatterNameFromData: function(e) {
			var t = this._getName(e);
			return this._getFormatterName(t)
		},
		_mLineOptimize: function() {
			var e = [],
				t = this._itemGroupLocation.x;
			for (var n = 2, r = this.shapeList.length; n < r; n++) this.shapeList[n].style.x == t ? e.push((this._itemGroupLocation.width - (this.shapeList[n - 1].style.x + f.getTextWidth(this.shapeList[n - 1].style.text, this.shapeList[n - 1].style.textFont) - t)) / 2) : n == r - 1 && e.push((this._itemGroupLocation.width - (this.shapeList[n].style.x + f.getTextWidth(this.shapeList[n].style.text, this.shapeList[n].style.textFont) - t)) / 2);
			var i = -1;
			for (var n = 1, r = this.shapeList.length; n < r; n++) {
				this.shapeList[n].style.x == t && i++;
				if (e[i] === 0) continue;
				this.shapeList[n].style.x += e[i]
			}
		},
		_buildBackground: function() {
			var e = this.legendOption.padding[0],
				t = this.legendOption.padding[1],
				n = this.legendOption.padding[2],
				i = this.legendOption.padding[3];
			this.shapeList.push(new r({
				zlevel: this._zlevelBase,
				hoverable: !1,
				style: {
					x: this._itemGroupLocation.x - i,
					y: this._itemGroupLocation.y - e,
					width: this._itemGroupLocation.width + i + t,
					height: this._itemGroupLocation.height + e + n,
					brushType: this.legendOption.borderWidth === 0 ? "fill" : "both",
					color: this.legendOption.backgroundColor,
					strokeColor: this.legendOption.borderColor,
					lineWidth: this.legendOption.borderWidth
				}
			}))
		},
		_getItemGroupLocation: function() {
			var e = this.legendOption.data,
				t = e.length,
				n = this.legendOption.itemGap,
				r = this.legendOption.itemWidth + 5,
				i = this.legendOption.itemHeight,
				s = this.legendOption.textStyle,
				o = this.getFont(s),
				u = 0,
				l = 0,
				c = this.legendOption.padding,
				h = this.zr.getWidth() - c[1] - c[3],
				p = this.zr.getHeight() - c[0] - c[2],
				d = 0,
				v = 0;
			if (this.legendOption.orient == "horizontal") {
				l = i;
				for (var m = 0; m < t; m++) {
					if (this._getName(e[m]) === "") {
						d -= n, d > h ? (u = h, l += i + n) : u = Math.max(u, d), l += i + n, d = 0;
						continue
					}
					d += r + f.getTextWidth(this._getFormatterNameFromData(e[m]), e[m].textStyle ? this.getFont(a.merge(e[m].textStyle || {}, s)) : o) + n
				}
				l = Math.max(l, i), d -= n, d > h ? (u = h, l += i + n) : u = Math.max(u, d)
			} else {
				for (var m = 0; m < t; m++) v = Math.max(v, f.getTextWidth(this._getFormatterNameFromData(e[m]), e[m].textStyle ? this.getFont(a.merge(e[m].textStyle || {}, s)) : o));
				v += r, u = v;
				for (var m = 0; m < t; m++) {
					if (this._getName(e[m]) === "") {
						d -= n, d > p ? (l = p, u += v + n) : l = Math.max(l, d), u += v + n, d = 0;
						continue
					}
					d += i + n
				}
				u = Math.max(u, v), d -= n, d > p ? (l = p, u += v + n) : l = Math.max(l, d)
			}
			h = this.zr.getWidth(), p = this.zr.getHeight();
			var g;
			switch (this.legendOption.x) {
				case "center":
					g = Math.floor((h - u) / 2);
					break;
				case "left":
					g = this.legendOption.padding[3] + this.legendOption.borderWidth;
					break;
				case "right":
					g = h - u - this.legendOption.padding[1] - this.legendOption.padding[3] - this.legendOption.borderWidth * 2;
					break;
				default:
					g = this.parsePercent(this.legendOption.x, h)
			}
			var y;
			switch (this.legendOption.y) {
				case "top":
					y = this.legendOption.padding[0] + this.legendOption.borderWidth;
					break;
				case "bottom":
					y = p - l - this.legendOption.padding[0] - this.legendOption.padding[2] - this.legendOption.borderWidth * 2;
					break;
				case "center":
					y = Math.floor((p - l) / 2);
					break;
				default:
					y = this.parsePercent(this.legendOption.y, p)
			}
			return {
				x: g,
				y: y,
				width: u,
				height: l,
				maxWidth: v
			}
		},
		_getSomethingByName: function(e) {
			var t = this.option.series,
				n;
			for (var r = 0, i = t.length; r < i; r++) {
				if (t[r].name == e) return {
					type: t[r].type,
					series: t[r],
					seriesIndex: r,
					data: null,
					dataIndex: -1
				};
				if (t[r].type == u.CHART_TYPE_PIE || t[r].type == u.CHART_TYPE_RADAR || t[r].type == u.CHART_TYPE_CHORD || t[r].type == u.CHART_TYPE_FORCE || t[r].type == u.CHART_TYPE_FUNNEL) {
					n = t[r].type != u.CHART_TYPE_FORCE ? t[r].data : t[r].categories;
					for (var s = 0, o = n.length; s < o; s++)
						if (n[s].name == e) return {
							type: t[r].type,
							series: t[r],
							seriesIndex: r,
							data: n[s],
							dataIndex: s
						}
				}
			}
			return {
				type: "bar",
				series: null,
				seriesIndex: -1,
				data: null,
				dataIndex: -1
			}
		},
		_getItemShapeByType: function(e, t, n, r, i, s, o) {
			var u = i === "#ccc" ? o : i,
				a = {
					zlevel: this._zlevelBase,
					style: {
						iconType: "legendicon" + s,
						x: e,
						y: t,
						width: n,
						height: r,
						color: i,
						strokeColor: i,
						lineWidth: 2
					},
					highlightStyle: {
						color: u,
						strokeColor: u,
						lineWidth: 1
					},
					hoverable: this.legendOption.selectedMode,
					clickable: this.legendOption.selectedMode
				},
				f;
			if (s.match("image")) {
				var f = s.replace(new RegExp("^image:\\/\\/"), "");
				s = "image"
			}
			switch (s) {
				case "line":
					a.style.brushType = "stroke", a.highlightStyle.lineWidth = 3;
					break;
				case "radar":
				case "scatter":
					a.highlightStyle.lineWidth = 3;
					break;
				case "k":
					a.style.brushType = "both", a.highlightStyle.lineWidth = 3, a.highlightStyle.color = a.style.color = this.query(this.ecTheme, "k.itemStyle.normal.color") || "#fff", a.style.strokeColor = i != "#ccc" ? this.query(this.ecTheme, "k.itemStyle.normal.lineStyle.color") || "#ff3200" : i;
					break;
				case "image":
					a.style.iconType = "image", a.style.image = f, i === "#ccc" && (a.style.opacity = .5)
			}
			return a
		},
		__legendSelected: function(e) {
			var t = e.target._name;
			if (this.legendOption.selectedMode === "single")
				for (var n in this._selectedMap) this._selectedMap[n] = !1;
			this._selectedMap[t] = !this._selectedMap[t], this.messageCenter.dispatch(u.EVENT.LEGEND_SELECTED, e.event, {
				selected: this._selectedMap,
				target: t
			}, this.myChart)
		},
		refresh: function(e) {
			if (e) {
				this.option = e || this.option, this.option.legend = this.reformOption(this.option.legend), this.option.legend.padding = this.reformCssArray(this.option.legend.padding), this.legendOption = this.option.legend;
				var t = this.legendOption.data || [],
					n, r, i, s;
				if (this.legendOption.selected)
					for (var o in this.legendOption.selected) this._selectedMap[o] = typeof this._selectedMap[o] != "undefined" ? this._selectedMap[o] : this.legendOption.selected[o];
				for (var a = 0, f = t.length; a < f; a++) {
					n = this._getName(t[a]);
					if (n === "") continue;
					r = this._getSomethingByName(n), r.series ? (!r.data || r.type != u.CHART_TYPE_PIE && r.type != u.CHART_TYPE_FORCE && r.type != u.CHART_TYPE_FUNNEL ? s = [r.series] : s = [r.data, r.series], i = this.getItemStyleColor(this.deepQuery(s, "itemStyle.normal.color"), r.seriesIndex, r.dataIndex, r.data), i && r.type != u.CHART_TYPE_K && this.setColor(n, i), this._selectedMap[n] = typeof this._selectedMap[n] != "undefined" ? this._selectedMap[n] : !0) : this._selectedMap[n] = !1
				}
			}
			this.clear(), this._buildShape()
		},
		getRelatedAmount: function(e) {
			var t = 0,
				n = this.option.series,
				r;
			for (var i = 0, s = n.length; i < s; i++) {
				n[i].name == e && t++;
				if (n[i].type == u.CHART_TYPE_PIE || n[i].type == u.CHART_TYPE_RADAR || n[i].type == u.CHART_TYPE_CHORD || n[i].type == u.CHART_TYPE_FORCE || n[i].type == u.CHART_TYPE_FUNNEL) {
					r = n[i].type != u.CHART_TYPE_FORCE ? n[i].data : n[i].categories;
					for (var o = 0, a = r.length; o < a; o++) r[o].name == e && r[o].value != "-" && t++
				}
			}
			return t
		},
		setColor: function(e, t) {
			this._colorMap[e] = t
		},
		getColor: function(e) {
			return this._colorMap[e] || (this._colorMap[e] = this.zr.getColor(this._colorIndex++)), this._colorMap[e]
		},
		hasColor: function(e) {
			return this._colorMap[e] ? this._colorMap[e] : !1
		},
		add: function(e, t) {
			var n = this.legendOption.data;
			for (var r = 0, i = n.length; r < i; r++)
				if (this._getName(n[r]) == e) return;
			this.legendOption.data.push(e), this.setColor(e, t), this._selectedMap[e] = !0
		},
		del: function(e) {
			var t = this.legendOption.data;
			for (var n = 0, r = t.length; n < r; n++)
				if (this._getName(t[n]) == e) return this.legendOption.data.splice(n, 1)
		},
		getItemShape: function(e) {
			if (typeof e == "undefined") return;
			var t;
			for (var n = 0, r = this.shapeList.length; n < r; n++) {
				t = this.shapeList[n];
				if (t._name == e && t.type != "text") return t
			}
		},
		setItemShape: function(e, t) {
			var n;
			for (var r = 0, i = this.shapeList.length; r < i; r++) n = this.shapeList[r], n._name == e && n.type != "text" && (this._selectedMap[e] || (t.style.color = "#ccc", t.style.strokeColor = "#ccc"), this.zr.modShape(n.id, t))
		},
		isSelected: function(e) {
			return typeof this._selectedMap[e] != "undefined" ? this._selectedMap[e] : !0
		},
		getSelectedMap: function() {
			return this._selectedMap
		},
		setSelected: function(e, t) {
			if (this.legendOption.selectedMode === "single")
				for (var n in this._selectedMap) this._selectedMap[n] = !1;
			this._selectedMap[e] = t, this.messageCenter.dispatch(u.EVENT.LEGEND_SELECTED, null, {
				selected: this._selectedMap,
				target: e
			}, this.myChart)
		},
		onlegendSelected: function(e, t) {
			var n = e.selected;
			for (var r in n) this._selectedMap[r] != n[r] && (t.needRefresh = !0), this._selectedMap[r] = n[r];
			return
		}
	};
	var c = {
		line: function(e, t) {
			var n = t.height / 2;
			e.moveTo(t.x, t.y + n), e.lineTo(t.x + t.width, t.y + n)
		},
		pie: function(e, t) {
			var n = t.x,
				r = t.y,
				s = t.width,
				o = t.height;
			i.prototype.buildPath(e, {
				x: n + s / 2,
				y: r + o + 2,
				r: o + 2,
				r0: 6,
				startAngle: 45,
				endAngle: 135
			})
		},
		k: function(e, t) {
			var n = t.x,
				r = t.y,
				i = t.width,
				s = t.height;
			o.prototype.buildPath(e, {
				x: n + i / 2,
				y: [r + 1, r + 1, r + s - 6, r + s],
				width: i - 6
			})
		},
		bar: function(e, t) {
			var n = t.x,
				r = t.y + 1,
				i = t.width,
				s = t.height - 2,
				o = 3;
			e.moveTo(n + o, r), e.lineTo(n + i - o, r), e.quadraticCurveTo(n + i, r, n + i, r + o), e.lineTo(n + i, r + s - o), e.quadraticCurveTo(n + i, r + s, n + i - o, r + s), e.lineTo(n + o, r + s), e.quadraticCurveTo(n, r + s, n, r + s - o), e.lineTo(n, r + o), e.quadraticCurveTo(n, r, n + o, r)
		},
		force: function(e, t) {
			s.prototype.iconLibrary.circle(e, t)
		},
		radar: function(e, t) {
			var n = 6,
				r = t.x + t.width / 2,
				i = t.y + t.height / 2,
				s = t.height / 2,
				o = 2 * Math.PI / n,
				u = -Math.PI / 2,
				a = r + s * Math.cos(u),
				f = i + s * Math.sin(u);
			e.moveTo(a, f), u += o;
			for (var l = 0, c = n - 1; l < c; l++) e.lineTo(r + s * Math.cos(u), i + s * Math.sin(u)), u += o;
			e.lineTo(a, f)
		}
	};
	c.chord = c.pie, c.map = c.bar;
	for (var h in c) s.prototype.iconLibrary["legendicon" + h] = c[h];
	return a.inherits(l, t), e("../component").define("legend", l), l
}), define("echarts/util/shape/Chain", ["require", "zrender/shape/Base", "./Icon", "zrender/shape/util/dashedLineTo", "zrender/tool/util", "zrender/tool/matrix"], function(e) {
	function o(e) {
		t.call(this, e)
	}
	var t = e("zrender/shape/Base"),
		n = e("./Icon"),
		r = e("zrender/shape/util/dashedLineTo"),
		i = e("zrender/tool/util"),
		s = e("zrender/tool/matrix");
	return o.prototype = {
		type: "chain",
		brush: function(e, t) {
			var n = this.style;
			t && (n = this.getHighlightStyle(n, this.highlightStyle || {})), e.save(), this.setContext(e, n), this.setTransform(e), e.beginPath(), this.buildLinePath(e, n), e.stroke(), this.brushSymbol(e, n), e.restore();
			return
		},
		buildLinePath: function(e, t) {
			var n = t.x,
				i = t.y + 5,
				s = t.width,
				o = t.height / 2 - 10;
			e.moveTo(n, i), e.lineTo(n, i + o), e.moveTo(n + s, i), e.lineTo(n + s, i + o), e.moveTo(n, i + o / 2);
			if (!t.lineType || t.lineType == "solid") e.lineTo(n + s, i + o / 2);
			else if (t.lineType == "dashed" || t.lineType == "dotted") {
				var u = (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
				r(e, n, i + o / 2, n + s, i + o / 2, u)
			}
		},
		brushSymbol: function(e, t) {
			var r = t.y + t.height / 4;
			e.save();
			var i = t.chainPoint,
				s;
			for (var o = 0, u = i.length; o < u; o++) {
				s = i[o];
				if (s.symbol != "none") {
					e.beginPath();
					var a = s.symbolSize;
					n.prototype.buildPath(e, {
						iconType: s.symbol,
						x: s.x - a,
						y: r - a,
						width: a * 2,
						height: a * 2,
						n: s.n
					}), e.fillStyle = s.isEmpty ? "#fff" : t.strokeColor, e.closePath(), e.fill(), e.stroke()
				}
				s.showLabel && (e.font = s.textFont, e.fillStyle = s.textColor, e.textAlign = s.textAlign, e.textBaseline = s.textBaseline, s.rotation ? (e.save(), this._updateTextTransform(e, s.rotation), e.fillText(s.name, s.textX, s.textY), e.restore()) : e.fillText(s.name, s.textX, s.textY))
			}
			e.restore()
		},
		_updateTextTransform: function(e, t) {
			var n = s.create();
			s.identity(n);
			if (t[0] !== 0) {
				var r = t[1] || 0,
					i = t[2] || 0;
				(r || i) && s.translate(n, n, [-r, -i]), s.rotate(n, n, t[0]), (r || i) && s.translate(n, n, [r, i])
			}
			e.transform.apply(e, n)
		},
		isCover: function(e, t) {
			var n = this.style;
			return e >= n.x && e <= n.x + n.width && t >= n.y && t <= n.y + n.height ? !0 : !1
		}
	}, i.inherits(o, t), o
}), define("echarts/component/timeline", ["require", "./base", "zrender/shape/Rectangle", "../util/shape/Icon", "../util/shape/Chain", "../config", "zrender/tool/util", "zrender/tool/area", "zrender/tool/event", "../component"], function(e) {
	function f(e, n, r, i, u) {
		t.call(this, e, n, r, i, u);
		var a = this;
		a._onclick = function(e) {
			return a.__onclick(e)
		}, a._ondrift = function(e, t) {
			return a.__ondrift(this, e, t)
		}, a._ondragend = function() {
			return a.__ondragend()
		}, a._setCurrentOption = function() {
			var e = a.timelineOption;
			a.currentIndex %= e.data.length;
			var t = a.options[a.currentIndex] || {};
			a.myChart.setOption(t, e.notMerge), a.messageCenter.dispatch(s.EVENT.TIMELINE_CHANGED, null, {
				currentIndex: a.currentIndex,
				data: typeof e.data[a.currentIndex].name != "undefined" ? e.data[a.currentIndex].name : e.data[a.currentIndex]
			}, a.myChart)
		}, a._onFrame = function() {
			a._setCurrentOption(), a._syncHandleShape(), a.timelineOption.autoPlay && (a.playTicket = setTimeout(function() {
				a.currentIndex += 1;
				if (!a.timelineOption.loop && a.currentIndex >= a.timelineOption.data.length) {
					a.currentIndex = a.timelineOption.data.length - 1, a.stop();
					return
				}
				a._onFrame()
			}, a.timelineOption.playInterval))
		}, this.setTheme(!1), this.options = this.option.options, this.currentIndex = this.timelineOption.currentIndex % this.timelineOption.data.length, !this.timelineOption.notMerge && this.currentIndex !== 0 && (this.options[this.currentIndex] = o.merge(this.options[this.currentIndex], this.options[0])), this.timelineOption.show && (this._buildShape(), this._syncHandleShape()), this._setCurrentOption();
		if (this.timelineOption.autoPlay) {
			var a = this;
			this.playTicket = setTimeout(function() {
				a.play()
			}, this.ecTheme.animationDuration)
		}
	}

	function l(e, t) {
		var n = 2,
			i = t.x + n,
			s = t.y + n + 2,
			o = t.width - n,
			u = t.height - n,
			a = t.symbol;
		if (a == "last") e.moveTo(i + o - 2, s + u / 3), e.lineTo(i + o - 2, s), e.lineTo(i + 2, s + u / 2), e.lineTo(i + o - 2, s + u), e.lineTo(i + o - 2, s + u / 3 * 2), e.moveTo(i, s), e.lineTo(i, s);
		else if (a == "next") e.moveTo(i + 2, s + u / 3), e.lineTo(i + 2, s), e.lineTo(i + o - 2, s + u / 2), e.lineTo(i + 2, s + u), e.lineTo(i + 2, s + u / 3 * 2), e.moveTo(i, s), e.lineTo(i, s);
		else if (a == "play")
			if (t.status == "stop") e.moveTo(i + 2, s), e.lineTo(i + o - 2, s + u / 2), e.lineTo(i + 2, s + u), e.lineTo(i + 2, s);
			else {
				var f = t.brushType == "both" ? 2 : 3;
				e.rect(i + 2, s, f, u), e.rect(i + o - f - 2, s, f, u)
			} else if (a.match("image")) {
			var l = "";
			l = a.replace(new RegExp("^image:\\/\\/"), ""), a = r.prototype.iconLibrary.image, a(e, {
				x: i,
				y: s,
				width: o,
				height: u,
				image: l
			})
		}
	}
	var t = e("./base"),
		n = e("zrender/shape/Rectangle"),
		r = e("../util/shape/Icon"),
		i = e("../util/shape/Chain"),
		s = e("../config"),
		o = e("zrender/tool/util"),
		u = e("zrender/tool/area"),
		a = e("zrender/tool/event");
	return f.prototype = {
		type: s.COMPONENT_TYPE_TIMELINE,
		_buildShape: function() {
			this._location = this._getLocation(), this._buildBackground(), this._buildControl(), this._chainPoint = this._getChainPoint();
			if (this.timelineOption.label.show) {
				var e = this._getInterval();
				for (var t = 0, n = this._chainPoint.length; t < n; t += e) this._chainPoint[t].showLabel = !0
			}
			this._buildChain(), this._buildHandle();
			for (var t = 0, r = this.shapeList.length; t < r; t++) this.zr.addShape(this.shapeList[t])
		},
		_getLocation: function() {
			var e = this.timelineOption,
				t = e.padding,
				n = this.zr.getWidth(),
				r = this.parsePercent(e.x, n),
				i = this.parsePercent(e.x2, n),
				s;
			typeof e.width == "undefined" ? (s = n - r - i, i = n - i) : (s = this.parsePercent(e.width, n), i = r + s);
			var o = this.zr.getHeight(),
				u = this.parsePercent(e.height, o),
				a, f;
			return typeof e.y != "undefined" ? (a = this.parsePercent(e.y, o), f = a + u) : (f = o - this.parsePercent(e.y2, o), a = f - u), {
				x: r + t[3],
				y: a + t[0],
				x2: i - t[1],
				y2: f - t[2],
				width: s - t[1] - t[3],
				height: u - t[0] - t[2]
			}
		},
		_getReformedLabel: function(e) {
			var t = this.timelineOption,
				n = typeof t.data[e].name != "undefined" ? t.data[e].name : t.data[e],
				r = t.data[e].formatter || t.label.formatter;
			return r && (typeof r == "function" ? n = r.call(this.myChart, n) : typeof r == "string" && (n = r.replace("{value}", n))), n
		},
		_getInterval: function() {
			var e = this._chainPoint,
				t = this.timelineOption,
				n = t.label.interval;
			if (n == "auto") {
				var r = t.label.textStyle.fontSize,
					i = t.data,
					s = t.data.length;
				if (s > 3) {
					var o = !1,
						a, f;
					n = 0;
					while (!o && n < s) {
						n++, o = !0;
						for (var l = n; l < s; l += n) {
							a = e[l].x - e[l - n].x;
							if (t.label.rotate !== 0) f = r;
							else if (i[l].textStyle) f = u.getTextWidth(e[l].name, e[l].textFont);
							else {
								var c = e[l].name + "",
									h = (c.match(/\w/g) || "").length,
									p = c.length - h;
								f = h * r * 2 / 3 + p * r
							} if (a < f) {
								o = !1;
								break
							}
						}
					}
				} else n = 1
			} else n = n - 0 + 1;
			return n
		},
		_getChainPoint: function() {
			function p(e) {
				return typeof a[e].name != "undefined" ? a[e].name : a[e]
			}
			var e = this.timelineOption,
				t = e.symbol.toLowerCase(),
				n = e.symbolSize,
				r = e.label.rotate,
				i = e.label.textStyle,
				s = this.getFont(i),
				u, a = e.data,
				f = this._location.x,
				l = this._location.y + this._location.height / 4 * 3,
				c = this._location.x2 - this._location.x,
				h = a.length,
				d = [];
			if (h > 1) {
				var v = c / h;
				v = v > 50 ? 50 : v < 20 ? 5 : v, c -= v * 2;
				if (e.type == "number")
					for (var m = 0; m < h; m++) d.push(f + v + c / (h - 1) * m);
				else {
					d[0] = new Date(p(0).replace(/-/g, "/")), d[h - 1] = new Date(p(h - 1).replace(/-/g, "/")) - d[0];
					for (var m = 1; m < h; m++) d[m] = f + v + c * (new Date(p(m).replace(/-/g, "/")) - d[0]) / d[h - 1];
					d[0] = f + v
				}
			} else d.push(f + c / 2);
			var g = [],
				y, b, w, E, S;
			for (var m = 0; m < h; m++) f = d[m], y = a[m].symbol && a[m].symbol.toLowerCase() || t, y.match("empty") ? (y = y.replace("empty", ""), w = !0) : w = !1, y.match("star") && (b = y.replace("star", "") - 0 || 5, y = "star"), u = a[m].textStyle ? o.merge(a[m].textStyle || {}, i) : i, E = u.align || "center", r ? (E = r > 0 ? "right" : "left", S = [r * Math.PI / 180, f, l - 5]) : S = !1, g.push({
				x: f,
				n: b,
				isEmpty: w,
				symbol: y,
				symbolSize: a[m].symbolSize || n,
				color: a[m].color,
				borderColor: a[m].borderColor,
				borderWidth: a[m].borderWidth,
				name: this._getReformedLabel(m),
				textColor: u.color,
				textAlign: E,
				textBaseline: u.baseline || "middle",
				textX: f,
				textY: l - (r ? 5 : 0),
				textFont: a[m].textStyle ? this.getFont(u) : s,
				rotation: S,
				showLabel: !1
			});
			return g
		},
		_buildBackground: function() {
			var e = this.timelineOption,
				t = e.padding,
				r = this._location.width,
				i = this._location.height;
			(e.borderWidth !== 0 || e.backgroundColor.replace(/\s/g, "") != "rgba(0,0,0,0)") && this.shapeList.push(new n({
				zlevel: this._zlevelBase,
				hoverable: !1,
				style: {
					x: this._location.x - t[3],
					y: this._location.y - t[0],
					width: r + t[1] + t[3],
					height: i + t[0] + t[2],
					brushType: e.borderWidth === 0 ? "fill" : "both",
					color: e.backgroundColor,
					strokeColor: e.borderColor,
					lineWidth: e.borderWidth
				}
			}))
		},
		_buildControl: function() {
			var e = this,
				t = this.timelineOption,
				n = t.lineStyle,
				i = t.controlStyle;
			if (t.controlPosition == "none") return;
			var s = 15,
				u = 5,
				a;
			t.controlPosition == "left" ? (a = this._location.x, this._location.x += (s + u) * 3) : (a = this._location.x2 - ((s + u) * 3 - u), this._location.x2 -= (s + u) * 3);
			var f = this._location.y,
				l = {
					zlevel: this._zlevelBase + 1,
					style: {
						iconType: "timelineControl",
						symbol: "last",
						x: a,
						y: f,
						width: s,
						height: s,
						brushType: "stroke",
						color: i.normal.color,
						strokeColor: i.normal.color,
						lineWidth: n.width
					},
					highlightStyle: {
						color: i.emphasis.color,
						strokeColor: i.emphasis.color,
						lineWidth: n.width + 1
					},
					clickable: !0
				};
			this._ctrLastShape = new r(l), this._ctrLastShape.onclick = function() {
				e.last()
			}, this.shapeList.push(this._ctrLastShape), a += s + u, this._ctrPlayShape = new r(o.clone(l)), this._ctrPlayShape.style.brushType = "fill", this._ctrPlayShape.style.symbol = "play", this._ctrPlayShape.style.status = this.timelineOption.autoPlay ? "playing" : "stop", this._ctrPlayShape.style.x = a, this._ctrPlayShape.onclick = function() {
				e._ctrPlayShape.style.status == "stop" ? e.play() : e.stop()
			}, this.shapeList.push(this._ctrPlayShape), a += s + u, this._ctrNextShape = new r(o.clone(l)), this._ctrNextShape.style.symbol = "next", this._ctrNextShape.style.x = a, this._ctrNextShape.onclick = function() {
				e.next()
			}, this.shapeList.push(this._ctrNextShape)
		},
		_buildChain: function() {
			var e = this.timelineOption,
				t = e.lineStyle;
			this._timelineShae = {
				zlevel: this._zlevelBase,
				style: {
					x: this._location.x,
					y: this.subPixelOptimize(this._location.y, t.width),
					width: this._location.x2 - this._location.x,
					height: this._location.height,
					chainPoint: this._chainPoint,
					brushType: "both",
					strokeColor: t.color,
					lineWidth: t.width,
					lineType: t.type
				},
				hoverable: !1,
				clickable: !0,
				onclick: this._onclick
			}, this._timelineShae = new i(this._timelineShae), this.shapeList.push(this._timelineShae)
		},
		_buildHandle: function() {
			var e = this._chainPoint[this.currentIndex],
				t = e.symbolSize + 1;
			t = t < 5 ? 5 : t, this._handleShape = {
				zlevel: this._zlevelBase + 1,
				hoverable: !1,
				draggable: !0,
				style: {
					iconType: "diamond",
					n: e.n,
					x: e.x - t,
					y: this._location.y + this._location.height / 4 - t,
					width: t * 2,
					height: t * 2,
					brushType: "both",
					textPosition: "specific",
					textX: e.x,
					textY: this._location.y - this._location.height / 4,
					textAlign: "center",
					textBaseline: "middle"
				},
				highlightStyle: {},
				ondrift: this._ondrift,
				ondragend: this._ondragend
			}, this._handleShape = new r(this._handleShape), this.shapeList.push(this._handleShape)
		},
		_syncHandleShape: function() {
			if (!this.timelineOption.show) return;
			var e = this.timelineOption,
				t = e.checkpointStyle,
				n = this._chainPoint[this.currentIndex];
			this._handleShape.style.text = t.label.show ? n.name : "", this._handleShape.style.textFont = n.textFont, this._handleShape.style.n = n.n, t.symbol == "auto" ? this._handleShape.style.iconType = n.symbol != "none" ? n.symbol : "diamond" : (this._handleShape.style.iconType = t.symbol, t.symbol.match("star") && (this._handleShape.style.n = t.symbol.replace("star", "") - 0 || 5, this._handleShape.style.iconType = "star"));
			var r;
			t.symbolSize == "auto" ? (r = n.symbolSize + 2, r = r < 5 ? 5 : r) : r = t.symbolSize - 0, this._handleShape.style.color = t.color == "auto" ? n.color ? n.color : e.controlStyle.emphasis.color : t.color, this._handleShape.style.textColor = t.label.textStyle.color == "auto" ? this._handleShape.style.color : t.label.textStyle.color, this._handleShape.highlightStyle.strokeColor = this._handleShape.style.strokeColor = t.borderColor == "auto" ? n.borderColor ? n.borderColor : "#fff" : t.borderColor, this._handleShape.style.lineWidth = t.borderWidth == "auto" ? n.borderWidth ? n.borderWidth : 0 : t.borderWidth - 0, this._handleShape.highlightStyle.lineWidth = this._handleShape.style.lineWidth + 1, this.zr.animate(this._handleShape.id, "style").when(500, {
				x: n.x - r,
				textX: n.x,
				y: this._location.y + this._location.height / 4 - r,
				width: r * 2,
				height: r * 2
			}).start("ExponentialOut")
		},
		_findChainIndex: function(e) {
			var t = this._chainPoint,
				n = t.length;
			if (e <= t[0].x) return 0;
			if (e >= t[n - 1].x) return n - 1;
			for (var r = 0; r < n - 1; r++)
				if (e >= t[r].x && e <= t[r + 1].x) return Math.abs(e - t[r].x) < Math.abs(e - t[r + 1].x) ? r : r + 1
		},
		__onclick: function(e) {
			var t = a.getX(e.event),
				n = this._findChainIndex(t);
			if (n == this.currentIndex) return !0;
			this.currentIndex = n, this.timelineOption.autoPlay && this.stop(), clearTimeout(this.playTicket), this._onFrame()
		},
		__ondrift: function(e, t) {
			this.timelineOption.autoPlay && this.stop();
			var n = this._chainPoint,
				r = n.length,
				i;
			e.style.x + t <= n[0].x - n[0].symbolSize ? (e.style.x = n[0].x - n[0].symbolSize, i = 0) : e.style.x + t >= n[r - 1].x - n[r - 1].symbolSize ? (e.style.x = n[r - 1].x - n[r - 1].symbolSize, i = r - 1) : (e.style.x += t, i = this._findChainIndex(e.style.x));
			var s = n[i],
				o = s.symbolSize + 2;
			e.style.iconType = s.symbol, e.style.n = s.n, e.style.textX = e.style.x + o / 2, e.style.y = this._location.y + this._location.height / 4 - o, e.style.width = o * 2, e.style.height = o * 2, e.style.text = s.name;
			if (i == this.currentIndex) return !0;
			this.currentIndex = i;
			if (this.timelineOption.realtime) {
				clearTimeout(this.playTicket);
				var u = this;
				this.playTicket = setTimeout(function() {
					u._setCurrentOption()
				}, 200)
			}
			return !0
		},
		__ondragend: function() {
			this.isDragend = !0
		},
		ondragend: function(e, t) {
			if (!this.isDragend || !e.target) return;
			!this.timelineOption.realtime && this._setCurrentOption(), t.dragOut = !0, t.dragIn = !0, t.needRefresh = !1, this.isDragend = !1, this._syncHandleShape();
			return
		},
		last: function() {
			return this.timelineOption.autoPlay && this.stop(), this.currentIndex -= 1, this.currentIndex < 0 && (this.currentIndex = this.timelineOption.data.length - 1), this._onFrame(), this.currentIndex
		},
		next: function() {
			return this.timelineOption.autoPlay && this.stop(), this.currentIndex += 1, this.currentIndex >= this.timelineOption.data.length && (this.currentIndex = 0), this._onFrame(), this.currentIndex
		},
		play: function(e, t) {
			return this._ctrPlayShape && this._ctrPlayShape.style.status != "playing" && (this._ctrPlayShape.style.status = "playing", this.zr.modShape(this._ctrPlayShape.id), this.zr.refresh()), this.timelineOption.autoPlay = typeof t != "undefined" ? t : !0, this.timelineOption.autoPlay || clearTimeout(this.playTicket), this.currentIndex = typeof e != "undefined" ? e : this.currentIndex + 1, this.currentIndex >= this.timelineOption.data.length && (this.currentIndex = 0), this._onFrame(), this.currentIndex
		},
		stop: function() {
			return this._ctrPlayShape && this._ctrPlayShape.style.status != "stop" && (this._ctrPlayShape.style.status = "stop", this.zr.modShape(this._ctrPlayShape.id), this.zr.refresh()), this.timelineOption.autoPlay = !1, clearTimeout(this.playTicket), this.currentIndex
		},
		resize: function() {
			this.timelineOption.show && (this.clear(), this._buildShape(), this._syncHandleShape())
		},
		setTheme: function(e) {
			this.timelineOption = this.reformOption(o.clone(this.option.timeline)), this.timelineOption.padding = this.reformCssArray(this.timelineOption.padding), this.timelineOption.label.textStyle = o.merge(this.timelineOption.label.textStyle || {}, this.ecTheme.textStyle), this.timelineOption.checkpointStyle.label.textStyle = o.merge(this.timelineOption.checkpointStyle.label.textStyle || {}, this.ecTheme.textStyle), this.timelineOption.show && e && (this.clear(), this._buildShape(), this._syncHandleShape())
		},
		dispose: function() {
			this.clear(), this.shapeList = null, clearTimeout(this.playTicket)
		}
	}, r.prototype.iconLibrary.timelineControl = l, o.inherits(f, t), e("../component").define("timeline", f), f
}), define("zrender/loadingEffect/Bar", ["require", "./Base", "../tool/util", "../tool/color", "../shape/Rectangle"], function(e) {
	function s(e) {
		t.call(this, e)
	}
	var t = e("./Base"),
		n = e("../tool/util"),
		r = e("../tool/color"),
		i = e("../shape/Rectangle");
	return n.inherits(s, t), s.prototype._start = function(e, t) {
		var s = n.merge(this.options, {
				textStyle: {
					color: "#888"
				},
				backgroundColor: "rgba(250, 250, 250, 0.8)",
				effectOption: {
					x: 0,
					y: this.canvasHeight / 2 - 30,
					width: this.canvasWidth,
					height: 5,
					brushType: "fill",
					timeInterval: 100
				}
			}),
			o = this.createTextShape(s.textStyle),
			u = this.createBackgroundShape(s.backgroundColor),
			a = s.effectOption,
			f = new i({
				highlightStyle: n.clone(a)
			});
		f.highlightStyle.color = a.color || r.getLinearGradient(a.x, a.y, a.x + a.width, a.y + a.height, [
			[0, "#ff6400"],
			[.5, "#ffe100"],
			[1, "#b1ff00"]
		]);
		if (s.progress != null) {
			e(u), f.highlightStyle.width = this.adjust(s.progress, [0, 1]) * s.effectOption.width, e(f), e(o), t();
			return
		}
		return f.highlightStyle.width = 0, setInterval(function() {
			e(u), f.highlightStyle.width < a.width ? f.highlightStyle.width += 8 : f.highlightStyle.width = 0, e(f), e(o), t()
		}, a.timeInterval)
	}, s
}), define("zrender/loadingEffect/Bubble", ["require", "./Base", "../tool/util", "../tool/color", "../shape/Circle"], function(e) {
	function s(e) {
		t.call(this, e)
	}
	var t = e("./Base"),
		n = e("../tool/util"),
		r = e("../tool/color"),
		i = e("../shape/Circle");
	return n.inherits(s, t), s.prototype._start = function(e, t) {
		var s = n.merge(this.options, {
				textStyle: {
					color: "#888"
				},
				backgroundColor: "rgba(250, 250, 250, 0.8)",
				effect: {
					n: 50,
					lineWidth: 2,
					brushType: "stroke",
					color: "random",
					timeInterval: 100
				}
			}),
			o = this.createTextShape(s.textStyle),
			u = this.createBackgroundShape(s.backgroundColor),
			a = s.effect,
			f = a.n,
			l = a.brushType,
			c = a.lineWidth,
			h = [],
			p = this.canvasWidth,
			d = this.canvasHeight;
		for (var v = 0; v < f; v++) {
			var m = a.color == "random" ? r.alpha(r.random(), .3) : a.color;
			h[v] = new i({
				highlightStyle: {
					x: Math.ceil(Math.random() * p),
					y: Math.ceil(Math.random() * d),
					r: Math.ceil(Math.random() * 40),
					brushType: l,
					color: m,
					strokeColor: m,
					lineWidth: c
				},
				animationY: Math.ceil(Math.random() * 20)
			})
		}
		return setInterval(function() {
			e(u);
			for (var n = 0; n < f; n++) {
				var r = h[n].highlightStyle;
				r.y - h[n].animationY + r.r <= 0 && (h[n].highlightStyle.y = d + r.r, h[n].highlightStyle.x = Math.ceil(Math.random() * p)), h[n].highlightStyle.y -= h[n].animationY, e(h[n])
			}
			e(o), t()
		}, a.timeInterval)
	}, s
}), define("zrender/loadingEffect/DynamicLine", ["require", "./Base", "../tool/util", "../tool/color", "../shape/Line"], function(e) {
	function s(e) {
		t.call(this, e)
	}
	var t = e("./Base"),
		n = e("../tool/util"),
		r = e("../tool/color"),
		i = e("../shape/Line");
	return n.inherits(s, t), s.prototype._start = function(e, t) {
		var s = n.merge(this.options, {
				textStyle: {
					color: "#fff"
				},
				backgroundColor: "rgba(0, 0, 0, 0.8)",
				effectOption: {
					n: 30,
					lineWidth: 1,
					color: "random",
					timeInterval: 100
				}
			}),
			o = this.createTextShape(s.textStyle),
			u = this.createBackgroundShape(s.backgroundColor),
			a = s.effectOption,
			f = a.n,
			l = a.lineWidth,
			c = [],
			h = this.canvasWidth,
			p = this.canvasHeight;
		for (var d = 0; d < f; d++) {
			var v = -Math.ceil(Math.random() * 1e3),
				m = Math.ceil(Math.random() * 400),
				g = Math.ceil(Math.random() * p),
				y = a.color == "random" ? r.random() : a.color;
			c[d] = new i({
				highlightStyle: {
					xStart: v,
					yStart: g,
					xEnd: v + m,
					yEnd: g,
					strokeColor: y,
					lineWidth: l
				},
				animationX: Math.ceil(Math.random() * 100),
				len: m
			})
		}
		return setInterval(function() {
			e(u);
			for (var n = 0; n < f; n++) {
				var r = c[n].highlightStyle;
				r.xStart >= h && (c[n].len = Math.ceil(Math.random() * 400), r.xStart = -400, r.xEnd = -400 + c[n].len, r.yStart = Math.ceil(Math.random() * p), r.yEnd = r.yStart), r.xStart += c[n].animationX, r.xEnd += c[n].animationX, e(c[n])
			}
			e(o), t()
		}, a.timeInterval)
	}, s
}), define("zrender/loadingEffect/Ring", ["require", "./Base", "../tool/util", "../tool/color", "../shape/Ring", "../shape/Sector"], function(e) {
	function o(e) {
		t.call(this, e)
	}
	var t = e("./Base"),
		n = e("../tool/util"),
		r = e("../tool/color"),
		i = e("../shape/Ring"),
		s = e("../shape/Sector");
	return n.inherits(o, t), o.prototype._start = function(e, t) {
		var o = n.merge(this.options, {
				textStyle: {
					color: "#07a"
				},
				backgroundColor: "rgba(250, 250, 250, 0.8)",
				effect: {
					x: this.canvasWidth / 2,
					y: this.canvasHeight / 2,
					r0: 60,
					r: 100,
					color: "#bbdcff",
					brushType: "fill",
					textPosition: "inside",
					textFont: "normal 30px verdana",
					textColor: "rgba(30, 144, 255, 0.6)",
					timeInterval: 100
				}
			}),
			u = o.effect,
			a = o.textStyle;
		a.x == null && (a.x = u.x), a.y == null && (a.y = u.y + (u.r0 + u.r) / 2 - 5);
		var f = this.createTextShape(o.textStyle),
			l = this.createBackgroundShape(o.backgroundColor),
			c = u.x,
			h = u.y,
			p = u.r0 + 6,
			d = u.r - 6,
			v = u.color,
			m = r.lift(v, .1),
			g = new i({
				highlightStyle: n.clone(u)
			}),
			y = [],
			b = r.getGradientColors(["#ff6400", "#ffe100", "#97ff00"], 25),
			w = 15,
			E = 240;
		for (var S = 0; S < 16; S++) y.push(new s({
			highlightStyle: {
				x: c,
				y: h,
				r0: p,
				r: d,
				startAngle: E - w,
				endAngle: E,
				brushType: "fill",
				color: m
			},
			_color: r.getLinearGradient(c + p * Math.cos(E, !0), h - p * Math.sin(E, !0), c + p * Math.cos(E - w, !0), h - p * Math.sin(E - w, !0), [
				[0, b[S * 2]],
				[1, b[S * 2 + 1]]
			])
		})), E -= w;
		E = 360;
		for (var S = 0; S < 4; S++) y.push(new s({
			highlightStyle: {
				x: c,
				y: h,
				r0: p,
				r: d,
				startAngle: E - w,
				endAngle: E,
				brushType: "fill",
				color: m
			},
			_color: r.getLinearGradient(c + p * Math.cos(E, !0), h - p * Math.sin(E, !0), c + p * Math.cos(E - w, !0), h - p * Math.sin(E - w, !0), [
				[0, b[S * 2 + 32]],
				[1, b[S * 2 + 33]]
			])
		})), E -= w;
		var x = 0;
		if (o.progress != null) {
			e(l), x = this.adjust(o.progress, [0, 1]).toFixed(2) * 100 / 5, g.highlightStyle.text = x * 5 + "%", e(g);
			for (var S = 0; S < 20; S++) y[S].highlightStyle.color = S < x ? y[S]._color : m, e(y[S]);
			e(f), t();
			return
		}
		return setInterval(function() {
			e(l), x += x >= 20 ? -20 : 1, e(g);
			for (var n = 0; n < 20; n++) y[n].highlightStyle.color = n < x ? y[n]._color : m, e(y[n]);
			e(f), t()
		}, u.timeInterval)
	}, o
}), define("zrender/loadingEffect/Spin", ["require", "./Base", "../tool/util", "../tool/color", "../shape/Sector"], function(e) {
	function s(e) {
		t.call(this, e)
	}
	var t = e("./Base"),
		n = e("../tool/util"),
		r = e("../tool/color"),
		i = e("../shape/Sector");
	return n.inherits(s, t), s.prototype._start = function(e, t) {
		var s = n.merge(this.options.effect || {}, {
				x: this.canvasWidth / 2 - 80,
				y: this.canvasHeight / 2,
				r0: 9,
				r: 15,
				n: 18,
				color: "#fff",
				timeInterval: 100
			}),
			o = n.merge(this.options, {
				textStyle: {
					color: "#fff",
					x: s.x + s.r + 10,
					y: s.y,
					textAlign: "start"
				},
				backgroundColor: "rgba(0, 0, 0, 0.8)"
			}),
			u = this.createTextShape(o.textStyle),
			a = this.createBackgroundShape(o.backgroundColor),
			f = s.n,
			l = s.x,
			c = s.y,
			h = s.r0,
			p = s.r,
			d = s.color,
			v = [],
			m = Math.round(180 / f);
		for (var g = 0; g < f; g++) v[g] = new i({
			highlightStyle: {
				x: l,
				y: c,
				r0: h,
				r: p,
				startAngle: m * g * 2,
				endAngle: m * g * 2 + m,
				color: r.alpha(d, (g + 1) / f),
				brushType: "fill"
			}
		});
		var y = [0, l, c];
		return setInterval(function() {
			e(a), y[0] -= .3;
			for (var n = 0; n < f; n++) v[n].rotation = y, e(v[n]);
			e(u), t()
		}, s.timeInterval)
	}, s
}), define("zrender/loadingEffect/Whirling", ["require", "./Base", "../tool/util", "../shape/Ring", "../shape/Droplet", "../shape/Circle"], function(e) {
	function o(e) {
		t.call(this, e)
	}
	var t = e("./Base"),
		n = e("../tool/util"),
		r = e("../shape/Ring"),
		i = e("../shape/Droplet"),
		s = e("../shape/Circle");
	return n.inherits(o, t), o.prototype._start = function(e, t) {
		var o = n.merge(this.options.effect || {}, {
				x: this.canvasWidth / 2 - 80,
				y: this.canvasHeight / 2,
				r: 18,
				colorIn: "#fff",
				colorOut: "#555",
				colorWhirl: "#6cf",
				timeInterval: 50
			}),
			u = n.merge(this.options, {
				textStyle: {
					color: "#888",
					x: o.x + o.r + 10,
					y: o.y,
					textAlign: "start"
				},
				backgroundColor: "rgba(250, 250, 250, 0.8)"
			}),
			a = this.createTextShape(u.textStyle),
			f = this.createBackgroundShape(u.backgroundColor),
			l = new i({
				highlightStyle: {
					a: Math.round(o.r / 2),
					b: Math.round(o.r - o.r / 6),
					brushType: "fill",
					color: o.colorWhirl
				}
			}),
			c = new s({
				highlightStyle: {
					r: Math.round(o.r / 6),
					brushType: "fill",
					color: o.colorIn
				}
			}),
			h = new r({
				highlightStyle: {
					r0: Math.round(o.r - o.r / 3),
					r: o.r,
					brushType: "fill",
					color: o.colorOut
				}
			}),
			p = [0, o.x, o.y];
		return l.highlightStyle.x = c.highlightStyle.x = h.highlightStyle.x = p[1], l.highlightStyle.y = c.highlightStyle.y = h.highlightStyle.y = p[2], setInterval(function() {
			e(f), e(h), p[0] -= .3, l.rotation = p, e(l), e(c), e(a), t()
		}, o.timeInterval)
	}, o
}), define("echarts/theme/default", [], function() {
	var e = {};
	return e
}), define("echarts/echarts", ["require", "./config", "zrender/tool/util", "zrender/tool/event", "zrender/tool/env", "zrender", "zrender/config", "zrender", "./chart/island", "./component/toolbox", "./component", "./component/title", "./component/tooltip", "./component/legend", "./util/ecData", "./chart", "./component", "zrender/tool/color", "./component/timeline", "zrender", "zrender/shape/Image", "zrender/loadingEffect/Bar", "zrender/loadingEffect/Bubble", "zrender/loadingEffect/DynamicLine", "zrender/loadingEffect/Ring", "zrender/loadingEffect/Spin", "zrender/loadingEffect/Whirling", "./theme/default"], function(e) {
	function f() {
		r.Dispatcher.call(this)
	}

	function l(e) {
		this._themeConfig = n.clone(t), this.dom = e, this._connected = !1, this._status = {
			dragIn: !1,
			dragOut: !1,
			needRefresh: !1
		}, this._curEventType = !1, this._chartList = [], this._messageCenter = new f, this._messageCenterOutSide = new f, this.resize = this.resize(), this._init()
	}

	function p(e, t, n, r, i) {
		var s = e._chartList,
			o = s.length;
		while (o--) {
			var u = s[o];
			typeof u[t] == "function" && u[t](n, r, i)
		}
	}
	var t = e("./config"),
		n = e("zrender/tool/util"),
		r = e("zrender/tool/event"),
		i = {},
		s = e("zrender/tool/env").canvasSupported,
		o = new Date - 0,
		u = {},
		a = "_echarts_instance_";
	i.version = "2.0.2", i.dependencies = {
		zrender: "2.0.2"
	}, i.init = function(t, n) {
		var r = e("zrender");
		(r.version || "1.0.3").replace(".", "") - 0 < i.dependencies.zrender.replace(".", "") - 0 && console.error("ZRender " + (r.version || "1.0.3-") + " is too old for ECharts " + i.version + ". Current version need ZRender " + i.dependencies.zrender + "+"), t = t instanceof Array ? t[0] : t;
		var s = t.getAttribute(a);
		return s || (s = o++, t.setAttribute(a, s)), u[s] && u[s].dispose(), u[s] = new l(t), u[s].id = s, u[s].setTheme(n), u[s]
	}, i.getInstanceById = function(e) {
		return u[e]
	}, n.merge(f.prototype, r.Dispatcher.prototype, !0);
	var c = e("zrender/config").EVENT,
		h = ["CLICK", "MOUSEOVER", "DRAGSTART", "DRAGEND", "DRAGENTER", "DRAGOVER", "DRAGLEAVE", "DROP"];
	return l.prototype = {
		_init: function() {
			var n = this,
				r = e("zrender").init(this.dom);
			this._zr = r, this._messageCenter.dispatch = function(e, t, r, i) {
				r = r || {}, r.type = e, r.event = t, n._messageCenter.dispatchWithContext(e, r, i), e != "HOVER" ? setTimeout(function() {
					n._messageCenterOutSide.dispatchWithContext(e, r, i)
				}, 50) : n._messageCenterOutSide.dispatchWithContext(e, r, i)
			}, this._onevent = function(e) {
				return n.__onevent(e)
			};
			for (var i in t.EVENT) i != "CLICK" && i != "HOVER" && i != "MAP_ROAM" && this._messageCenter.bind(t.EVENT[i], this._onevent, this);
			var s = {};
			this._onzrevent = function(e) {
				return n[s[e.type]](e)
			};
			for (var o = 0, u = h.length; o < u; o++) {
				var a = h[o],
					f = c[a];
				s[f] = "_on" + a.toLowerCase(), r.on(f, this._onzrevent)
			}
			this.chart = {}, this.component = {};
			var l = e("./chart/island");
			this._island = new l(this._themeConfig, this._messageCenter, r, {}, this), this.chart.island = this._island;
			var p = e("./component/toolbox");
			this._toolbox = new p(this._themeConfig, this._messageCenter, r, {}, this), this.component.toolbox = this._toolbox;
			var d = e("./component");
			d.define("title", e("./component/title")), d.define("tooltip", e("./component/tooltip")), d.define("legend", e("./component/legend"))
		},
		__onevent: function(e) {
			e.__echartsId = e.__echartsId || this.id;
			var n = e.__echartsId == this.id;
			this._curEventType || (this._curEventType = e.type);
			switch (e.type) {
				case t.EVENT.LEGEND_SELECTED:
					this._onlegendSelected(e);
					break;
				case t.EVENT.DATA_ZOOM:
					if (!n) {
						var r = this.component.dataZoom;
						r && (r.silence(!0), r.absoluteZoom(e.zoom), r.silence(!1))
					}
					this._ondataZoom(e);
					break;
				case t.EVENT.DATA_RANGE:
					n && this._ondataRange(e);
					break;
				case t.EVENT.MAGIC_TYPE_CHANGED:
					if (!n) {
						var i = this.component.toolbox;
						i && (i.silence(!0), i.setMagicType(e.magicType), i.silence(!1))
					}
					this._onmagicTypeChanged(e);
					break;
				case t.EVENT.DATA_VIEW_CHANGED:
					n && this._ondataViewChanged(e);
					break;
				case t.EVENT.TOOLTIP_HOVER:
					n && this._tooltipHover(e);
					break;
				case t.EVENT.RESTORE:
					this._onrestore();
					break;
				case t.EVENT.REFRESH:
					n && this._onrefresh(e);
					break;
				case t.EVENT.TOOLTIP_IN_GRID:
				case t.EVENT.TOOLTIP_OUT_GRID:
					if (!n) {
						var s = this.component.grid;
						s && this._zr.trigger("mousemove", {
							connectTrigger: !0,
							zrenderX: s.getX() + e.x * s.getWidth(),
							zrenderY: s.getY() + e.y * s.getHeight()
						})
					} else if (this._connected) {
						var s = this.component.grid;
						s && (e.x = (e.event.zrenderX - s.getX()) / s.getWidth(), e.y = (e.event.zrenderY - s.getY()) / s.getHeight())
					}
			}
			if (this._connected && n && this._curEventType == e.type) {
				for (var o in this._connected) this._connected[o].connectedEventHandler(e);
				this._curEventType = null
			}
			if (!n || !this._connected && n) this._curEventType = null
		},
		_onclick: function(e) {
			p(this, "onclick", e);
			if (e.target) {
				var n = this._eventPackage(e.target);
				n && n.seriesIndex != null && this._messageCenter.dispatch(t.EVENT.CLICK, e.event, n, this)
			}
		},
		_onmouseover: function(e) {
			if (e.target) {
				var n = this._eventPackage(e.target);
				n && n.seriesIndex != null && this._messageCenter.dispatch(t.EVENT.HOVER, e.event, n, this)
			}
		},
		_ondragstart: function(e) {
			this._status = {
				dragIn: !1,
				dragOut: !1,
				needRefresh: !1
			}, p(this, "ondragstart", e)
		},
		_ondragenter: function(e) {
			p(this, "ondragenter", e)
		},
		_ondragover: function(e) {
			p(this, "ondragover", e)
		},
		_ondragleave: function(e) {
			p(this, "ondragleave", e)
		},
		_ondrop: function(e) {
			p(this, "ondrop", e, this._status), this._island.ondrop(e, this._status)
		},
		_ondragend: function(e) {
			p(this, "ondragend", e, this._status), this._timeline && this._timeline.ondragend(e, this._status), this._island.ondragend(e, this._status);
			if (this._status.needRefresh) {
				this._syncBackupData(this._option);
				var n = this._messageCenter;
				n.dispatch(t.EVENT.DATA_CHANGED, e.event, this._eventPackage(e.target), this), n.dispatch(t.EVENT.REFRESH, null, null, this)
			}
		},
		_onlegendSelected: function(e) {
			this._status.needRefresh = !1, p(this, "onlegendSelected", e, this._status), this._status.needRefresh && this._messageCenter.dispatch(t.EVENT.REFRESH, null, null, this)
		},
		_ondataZoom: function(e) {
			this._status.needRefresh = !1, p(this, "ondataZoom", e, this._status), this._status.needRefresh && this._messageCenter.dispatch(t.EVENT.REFRESH, null, null, this)
		},
		_ondataRange: function(e) {
			this._clearEffect(), this._status.needRefresh = !1, p(this, "ondataRange", e, this._status), this._status.needRefresh && this._zr.refresh()
		},
		_onmagicTypeChanged: function() {
			this._clearEffect(), this._render(this._toolbox.getMagicOption())
		},
		_ondataViewChanged: function(e) {
			this._syncBackupData(e.option), this._messageCenter.dispatch(t.EVENT.DATA_CHANGED, null, e, this), this._messageCenter.dispatch(t.EVENT.REFRESH, null, null, this)
		},
		_tooltipHover: function(e) {
			var t = [];
			p(this, "ontooltipHover", e, t)
		},
		_onrestore: function() {
			this.restore()
		},
		_onrefresh: function(e) {
			this._refreshInside = !0, this.refresh(e), this._refreshInside = !1
		},
		_syncBackupData: function(e) {
			this.component.dataZoom && this.component.dataZoom.syncBackupData(e)
		},
		_eventPackage: function(t) {
			if (t) {
				var n = e("./util/ecData"),
					r = n.get(t, "seriesIndex"),
					i = n.get(t, "dataIndex");
				return i = r != -1 && this.component.dataZoom ? this.component.dataZoom.getRealDataIndex(r, i) : i, {
					seriesIndex: r,
					dataIndex: i,
					data: n.get(t, "data"),
					name: n.get(t, "name"),
					value: n.get(t, "value"),
					special: n.get(t, "special")
				}
			}
			return
		},
		_render: function(n) {
			this._mergeGlobalConifg(n);
			var r = n.backgroundColor;
			if (r)
				if (!s && r.indexOf("rgba") != -1) {
					var i = r.split(",");
					this.dom.style.filter = "alpha(opacity=" + i[3].substring(0, i[3].lastIndexOf(")")) * 100 + ")", i.length = 3, i[0] = i[0].replace("a", ""), this.dom.style.backgroundColor = i.join(",") + ")"
				} else this.dom.style.backgroundColor = r;
			this._zr.clearAnimation(), this._chartList = [];
			var o = e("./chart"),
				u = e("./component");
			if (n.xAxis || n.yAxis) n.grid = n.grid || {}, n.dataZoom = n.dataZoom || {};
			var a = ["title", "legend", "tooltip", "dataRange", "grid", "dataZoom", "xAxis", "yAxis", "polar"],
				f, l, c;
			for (var h = 0, p = a.length; h < p; h++) l = a[h], c = this.component[l], n[l] ? (c ? c.refresh && c.refresh(n) : (f = u.get(/^[xy]Axis$/.test(l) ? "axis" : l), c = new f(this._themeConfig, this._messageCenter, this._zr, n, this, l), this.component[l] = c), this._chartList.push(c)) : c && (c.dispose(), this.component[l] = null, delete this.component[l]);
			var d, v, m, g = {};
			for (var h = 0, p = n.series.length; h < p; h++) {
				v = n.series[h].type;
				if (!v) {
					console.error("series[" + h + "] chart type has not been defined.");
					continue
				}
				g[v] || (g[v] = !0, d = o.get(v), d ? (this.chart[v] ? (m = this.chart[v], m.refresh(n)) : m = new d(this._themeConfig, this._messageCenter, this._zr, n, this), this._chartList.push(m), this.chart[v] = m) : console.error(v + " has not been required."))
			}
			for (v in this.chart) v != t.CHART_TYPE_ISLAND && !g[v] && (this.chart[v].dispose(), this.chart[v] = null, delete this.chart[v]);
			this.component.grid && this.component.grid.refixAxisShape(this.component), this._island.refresh(n), this._toolbox.refresh(n), n.animation && !n.renderAsImage ? this._zr.refresh() : this._zr.render();
			var y = "IMG" + this.id,
				b = document.getElementById(y);
			n.renderAsImage && s ? (b ? b.src = this.getDataURL(n.renderAsImage) : (b = this.getImage(n.renderAsImage), b.id = y, b.style.position = "absolute", b.style.left = 0, b.style.top = 0, this.dom.firstChild.appendChild(b)), this.un(), this._zr.un(), this._disposeChartList(), this._zr.clear()) : b && b.parentNode.removeChild(b), b = null, this._option = n
		},
		restore: function() {
			this._clearEffect(), this._option = n.clone(this._optionRestore), this._disposeChartList(), this._island.clear(), this._toolbox.reset(this._option, !0), this._render(this._option)
		},
		refresh: function(e) {
			this._clearEffect(), e = e || {};
			var t = e.option;
			!this._refreshInside && t && (t = this.getOption(), n.merge(t, e.option, !0), n.merge(this._optionRestore, e.option, !0), this._toolbox.reset(t)), this._island.refresh(t), this._toolbox.refresh(t), this._zr.clearAnimation();
			for (var r = 0, i = this._chartList.length; r < i; r++) this._chartList[r].refresh && this._chartList[r].refresh(t);
			this.component.grid && this.component.grid.refixAxisShape(this.component), this._zr.refresh()
		},
		_disposeChartList: function() {
			this._clearEffect(), this._zr.clearAnimation();
			var e = this._chartList.length;
			while (e--) {
				var t = this._chartList[e];
				if (t) {
					var n = t.type;
					this.chart[n] && delete this.chart[n], this.component[n] && delete this.component[n], t.dispose && t.dispose()
				}
			}
			this._chartList = []
		},
		_mergeGlobalConifg: function(t) {
			var n = ["backgroundColor", "calculable", "calculableColor", "calculableHolderColor", "nameConnector", "valueConnector", "animation", "animationThreshold", "animationDuration", "animationEasing", "addDataAnimation", "symbolList", "DRAG_ENABLE_TIME"],
				r = n.length;
			while (r--) {
				var i = n[r];
				t[i] == null && (t[i] = this._themeConfig[i])
			}
			var s = t.color;
			if (!s || !s.length) s = this._themeConfig.color;
			this._zr.getColor = function(t) {
				var n = e("zrender/tool/color");
				return n.getColor(t, s)
			}
		},
		setOption: function(e, t) {
			return e.timeline ? this._setTimelineOption(e) : this._setOption(e, t)
		},
		_setOption: function(e, t) {
			!t && this._option ? this._option = n.merge(this.getOption(), n.clone(e), !0) : this._option = n.clone(e), this._optionRestore = n.clone(this._option);
			if (!this._option.series || this._option.series.length === 0) {
				this._zr.clear();
				return
			}
			return this.component.dataZoom && (this._option.dataZoom || this._option.toolbox && this._option.toolbox.feature && this._option.toolbox.feature.dataZoom && this._option.toolbox.feature.dataZoom.show) && this.component.dataZoom.syncOption(this._option), this._toolbox.reset(this._option), this._render(this._option), this
		},
		getOption: function() {
			function r(r) {
				var i = t._optionRestore[r];
				if (i)
					if (i instanceof Array) {
						var s = i.length;
						while (s--) e[r][s].data = n.clone(i[s].data)
					} else e[r].data = n.clone(i.data)
			}
			var e = n.clone(this._option),
				t = this;
			return r("xAxis"), r("yAxis"), r("series"), e
		},
		setSeries: function(e, t) {
			return t ? (this._option.series = e, this.setOption(this._option, t)) : this.setOption({
				series: e
			}), this
		},
		getSeries: function() {
			return this.getOption().series
		},
		_setTimelineOption: function(t) {
			this._timeline && this._timeline.dispose();
			var n = e("./component/timeline"),
				r = new n(this._themeConfig, this._messageCenter, this._zr, t, this);
			return this._timeline = r, this.component.timeline = this._timeline, this
		},
		addData: function(e, r, i, s, o) {
			var u = e instanceof Array ? e : [
					[e, r, i, s, o]
				],
				a = this.getOption(),
				f = this._optionRestore;
			for (var l = 0, c = u.length; l < c; l++) {
				e = u[l][0], r = u[l][1], i = u[l][2], s = u[l][3], o = u[l][4];
				var h = f.series[e],
					p = i ? "unshift" : "push",
					d = i ? "pop" : "shift";
				if (h) {
					var v = h.data,
						m = a.series[e].data;
					v[p](r), m[p](r), s || (v[d](), r = m[d]());
					if (o != null) {
						var g, y;
						if (h.type == t.CHART_TYPE_PIE && (g = f.legend) && (y = g.data)) {
							var b = a.legend.data;
							y[p](o), b[p](o);
							if (!s) {
								var w = n.indexOf(y, r.name);
								w != -1 && y.splice(w, 1), w = n.indexOf(b, r.name), w != -1 && b.splice(w, 1)
							}
						} else if (f.xAxis != null && f.yAxis != null) {
							var E, S, x = h.xAxisIndex || 0;
							if (typeof f.xAxis[x].type == "undefined" || f.xAxis[x].type == "category") E = f.xAxis[x].data, S = a.xAxis[x].data, E[p](o), S[p](o), s || (E[d](), S[d]());
							x = h.yAxisIndex || 0, f.yAxis[x].type == "category" && (E = f.yAxis[x].data, S = a.yAxis[x].data, E[p](o), S[p](o), s || (E[d](), S[d]()))
						}
					}
					this._option.series[e].data = a.series[e].data
				}
			}
			this._zr.clearAnimation();
			var T = this._chartList;
			for (var l = 0, c = T.length; l < c; l++) a.addDataAnimation && T[l].addDataAnimation && T[l].addDataAnimation(u);
			this.component.dataZoom && this.component.dataZoom.syncOption(a), this._option = a;
			var N = this;
			return setTimeout(function() {
				if (!N._zr) return;
				N._zr.clearAnimation();
				for (var e = 0, n = T.length; e < n; e++) T[e].motionlessOnce = a.addDataAnimation && T[e].addDataAnimation;
				N._messageCenter.dispatch(t.EVENT.REFRESH, null, {
					option: a
				}, N)
			}, a.addDataAnimation ? 500 : 0), this
		},
		addMarkPoint: function(e, t) {
			return this._addMark(e, t, "markPoint")
		},
		addMarkLine: function(e, t) {
			return this._addMark(e, t, "markLine")
		},
		_addMark: function(e, t, r) {
			var i = this._option.series,
				s;
			if (i && (s = i[e])) {
				var o = this._optionRestore.series,
					u = o[e],
					a = s[r],
					f = u[r];
				a = s[r] = a || {
					data: []
				}, f = u[r] = f || {
					data: []
				};
				for (var l in t) l == "data" ? (a.data = a.data.concat(t.data), f.data = f.data.concat(t.data)) : typeof t[l] != "object" || typeof a[l] == "undefined" ? a[l] = f[l] = t[l] : (n.merge(a[l], t[l], !0), n.merge(f[l], t[l], !0));
				var c = this.chart[s.type];
				c && c.addMark(e, t, r)
			}
			return this
		},
		delMarkPoint: function(e, t) {
			return this._delMark(e, t, "markPoint")
		},
		delMarkLine: function(e, t) {
			return this._delMark(e, t, "markLine")
		},
		_delMark: function(e, t, n) {
			var r = this._option.series,
				i, s, o;
			if (!(r && (i = r[e]) && (s = i[n]) && (o = s.data))) return this;
			t = t.split(" > ");
			var u = -1;
			for (var a = 0, f = o.length; a < f; a++) {
				var l = o[a];
				if (l instanceof Array) {
					if (l[0].name == t[0] && l[1].name == t[1]) {
						u = a;
						break
					}
				} else if (l.name == t[0]) {
					u = a;
					break
				}
			}
			if (u > -1) {
				o.splice(u, 1), this._optionRestore.series[e][n].data.splice(u, 1);
				var c = this.chart[i.type];
				c && c.delMark(e, t.join(" > "), n)
			}
			return this
		},
		getDom: function() {
			return this.dom
		},
		getZrender: function() {
			return this._zr
		},
		getDataURL: function(e) {
			if (!s) return "";
			if (this._chartList.length === 0) {
				var t = "IMG" + this.id,
					n = document.getElementById(t);
				if (n) return n.src
			}
			var r = this.component.tooltip;
			r && r.hideTip();
			switch (e) {
				case "jpeg":
					break;
				default:
					e = "png"
			}
			var i = this._option.backgroundColor;
			return i && i.replace(" ", "") == "rgba(0,0,0,0)" && (i = "#fff"), this._zr.toDataURL("image/" + e, i)
		},
		getImage: function(e) {
			var t = this._optionRestore.title,
				n = document.createElement("img");
			return n.src = this.getDataURL(e), n.title = t && t.text || "ECharts", n
		},
		getConnectedDataURL: function(t) {
			if (!this.isConnected()) return this.getDataURL(t);
			var n = this.dom,
				r = {
					self: {
						img: this.getDataURL(t),
						left: n.offsetLeft,
						top: n.offsetTop,
						right: n.offsetLeft + n.offsetWidth,
						bottom: n.offsetTop + n.offsetHeight
					}
				},
				i = r.self.left,
				s = r.self.top,
				o = r.self.right,
				u = r.self.bottom;
			for (var a in this._connected) n = this._connected[a].getDom(), r[a] = {
				img: this._connected[a].getDataURL(t),
				left: n.offsetLeft,
				top: n.offsetTop,
				right: n.offsetLeft + n.offsetWidth,
				bottom: n.offsetTop + n.offsetHeight
			}, i = Math.min(i, r[a].left), s = Math.min(s, r[a].top), o = Math.max(o, r[a].right), u = Math.max(u, r[a].bottom);
			var f = document.createElement("div");
			f.style.position = "absolute", f.style.left = "-4000px", f.style.width = o - i + "px", f.style.height = u - s + "px", document.body.appendChild(f);
			var l = e("zrender").init(f),
				c = e("zrender/shape/Image");
			for (var a in r) l.addShape(new c({
				style: {
					x: r[a].left - i,
					y: r[a].top - s,
					image: r[a].img
				}
			}));
			l.render();
			var h = this._option.backgroundColor;
			h && h.replace(/ /g, "") == "rgba(0,0,0,0)" && (h = "#fff");
			var p = l.toDataURL("image/png", h);
			return setTimeout(function() {
				l.dispose(), f.parentNode.removeChild(f), f = null
			}, 100), p
		},
		getConnectedImage: function(e) {
			var t = this._optionRestore.title,
				n = document.createElement("img");
			return n.src = this.getConnectedDataURL(e), n.title = t && t.text || "ECharts", n
		},
		on: function(e, t) {
			return this._messageCenterOutSide.bind(e, t, this), this
		},
		un: function(e, t) {
			return this._messageCenterOutSide.unbind(e, t), this
		},
		connect: function(e) {
			if (!e) return this;
			this._connected || (this._connected = {});
			if (e instanceof Array)
				for (var t = 0, n = e.length; t < n; t++) this._connected[e[t].id] = e[t];
			else this._connected[e.id] = e;
			return this
		},
		disConnect: function(e) {
			if (!e || !this._connected) return this;
			if (e instanceof Array)
				for (var t = 0, n = e.length; t < n; t++) delete this._connected[e[t].id];
			else delete this._connected[e.id];
			for (var r in this._connected) return r, this;
			return this._connected = !1, this
		},
		connectedEventHandler: function(e) {
			e.__echartsId != this.id && this._onevent(e)
		},
		isConnected: function() {
			return !!this._connected
		},
		showLoading: function(t) {
			var r = {
				bar: e("zrender/loadingEffect/Bar"),
				bubble: e("zrender/loadingEffect/Bubble"),
				dynamicLine: e("zrender/loadingEffect/DynamicLine"),
				ring: e("zrender/loadingEffect/Ring"),
				spin: e("zrender/loadingEffect/Spin"),
				whirling: e("zrender/loadingEffect/Whirling")
			};
			this._toolbox.hideDataView(), t = t || {};
			var i = t.textStyle || {};
			t.textStyle = i;
			var s = n.merge(n.clone(i), this._themeConfig.textStyle);
			i.textFont = s.fontStyle + " " + s.fontWeight + " " + s.fontSize + "px " + s.fontFamily, i.text = t.text || this._themeConfig.loadingText, t.x != null && (i.x = t.x), t.y != null && (i.y = t.y), t.effectOption = t.effectOption || {}, t.effectOption.textStyle = i;
			var o = t.effect;
			if (typeof o == "string" || o == null) o = r[t.effect || "spin"];
			return this._zr.showLoading(new o(t.effectOption)), this
		},
		hideLoading: function() {
			return this._zr.hideLoading(), this
		},
		setTheme: function(r) {
			if (r) {
				if (typeof r == "string") switch (r) {
					default: r = e("./theme/default")
				} else r = r || {};
				for (var i in this._themeConfig) delete this._themeConfig[i];
				for (var i in t) this._themeConfig[i] = n.clone(t[i]);
				r.color && (this._themeConfig.color = []), r.symbolList && (this._themeConfig.symbolList = []), n.merge(this._themeConfig, n.clone(r), !0)
			}
			s || (this._themeConfig.textStyle.fontFamily = this._themeConfig.textStyle.fontFamily2), this._timeline && this._timeline.setTheme(!0), this._optionRestore && this.restore()
		},
		resize: function() {
			var e = this;
			return function() {
				e._clearEffect(), e._zr.resize();
				if (e._option && e._option.renderAsImage && s) return e._render(e._option), e;
				e._zr.clearAnimation(), e._island.resize(), e._toolbox.resize(), e._timeline && e._timeline.resize();
				for (var n = 0, r = e._chartList.length; n < r; n++) e._chartList[n].resize && e._chartList[n].resize();
				return e.component.grid && e.component.grid.refixAxisShape(e.component), e._zr.refresh(), e._messageCenter.dispatch(t.EVENT.RESIZE, null, null, e), e
			}
		},
		_clearEffect: function() {
			this._zr.modLayer(t.EFFECT_ZLEVEL, {
				motionBlur: !1
			}), this._zr.painter.clearLayer(t.EFFECT_ZLEVEL)
		},
		clear: function() {
			return this._disposeChartList(), this._zr.clear(), this._option = {}, this._optionRestore = {}, this
		},
		dispose: function() {
			var e = this.dom.getAttribute(a);
			e && delete u[e], this._island.dispose(), this._toolbox.dispose(), this._timeline && this._timeline.dispose(), this._messageCenter.unbind(), this.clear(), this._zr.dispose(), this._zr = null
		}
	}, i
}), define("echarts", ["echarts/echarts"], function(e) {
	return e
}), define("echarts/util/shape/GaugePointer", ["require", "zrender/shape/Base", "zrender/tool/util", "./normalIsCover"], function(e) {
	function r(e) {
		t.call(this, e)
	}
	var t = e("zrender/shape/Base"),
		n = e("zrender/tool/util");
	return r.prototype = {
		type: "gauge-pointer",
		buildPath: function(e, t) {
			var n = t.r,
				r = t.width,
				i = t.angle,
				s = t.x - Math.cos(i) * r * (r >= n / 3 ? 1 : 2),
				o = t.y + Math.sin(i) * r * (r >= n / 3 ? 1 : 2);
			i = t.angle - Math.PI / 2, e.moveTo(s, o), e.lineTo(t.x + Math.cos(i) * r, t.y - Math.sin(i) * r), e.lineTo(t.x + Math.cos(t.angle) * n, t.y - Math.sin(t.angle) * n), e.lineTo(t.x - Math.cos(i) * r, t.y + Math.sin(i) * r), e.lineTo(s, o);
			return
		},
		getRect: function(e) {
			if (e.__rect) return e.__rect;
			var t = e.width * 2,
				n = e.x,
				r = e.y,
				i = n + Math.cos(e.angle) * e.r,
				s = r - Math.sin(e.angle) * e.r;
			return e.__rect = {
				x: Math.min(n, i) - t,
				y: Math.min(r, s) - t,
				width: Math.abs(n - i) + t,
				height: Math.abs(r - s) + t
			}, e.__rect
		},
		isCover: e("./normalIsCover")
	}, n.inherits(r, t), r
}), define("echarts/chart/gauge", ["require", "../component/base", "./base", "../util/shape/GaugePointer", "zrender/shape/Text", "zrender/shape/Line", "zrender/shape/Rectangle", "zrender/shape/Circle", "zrender/shape/Sector", "../config", "../util/ecData", "../util/accMath", "zrender/tool/util", "../chart"], function(e) {
	function p(e, r, i, s, o) {
		t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
	}
	var t = e("../component/base"),
		n = e("./base"),
		r = e("../util/shape/GaugePointer"),
		i = e("zrender/shape/Text"),
		s = e("zrender/shape/Line"),
		o = e("zrender/shape/Rectangle"),
		u = e("zrender/shape/Circle"),
		a = e("zrender/shape/Sector"),
		f = e("../config"),
		l = e("../util/ecData"),
		c = e("../util/accMath"),
		h = e("zrender/tool/util");
	return p.prototype = {
		type: f.CHART_TYPE_GAUGE,
		_buildShape: function() {
			var e = this.series;
			this._paramsMap = {};
			for (var t = 0, n = e.length; t < n; t++) e[t].type == f.CHART_TYPE_GAUGE && (e[t] = this.reformOption(e[t]), this._buildSingleGauge(t), this.buildMark(t));
			this.addShapeList()
		},
		_buildSingleGauge: function(e) {
			var t = this.series[e];
			this._paramsMap[e] = {
				center: this.parseCenter(this.zr, t.center),
				radius: this.parseRadius(this.zr, t.radius),
				startAngle: t.startAngle.toFixed(2) - 0,
				endAngle: t.endAngle.toFixed(2) - 0
			}, this._paramsMap[e].totalAngle = this._paramsMap[e].startAngle - this._paramsMap[e].endAngle, this._colorMap(e), this._buildAxisLine(e), this._buildSplitLine(e), this._buildAxisTick(e), this._buildAxisLabel(e), this._buildPointer(e), this._buildTitle(e), this._buildDetail(e)
		},
		_buildAxisLine: function(e) {
			var t = this.series[e];
			if (!t.axisLine.show) return;
			var n = t.min,
				r = t.max - n,
				i = this._paramsMap[e],
				s = i.center,
				o = i.startAngle,
				u = i.totalAngle,
				a = i.colorArray,
				f = t.axisLine.lineStyle,
				c = this.parsePercent(f.width, i.radius[1]),
				h = i.radius[1],
				p = h - c,
				d, v = o,
				m;
			for (var g = 0, y = a.length; g < y; g++) m = o - u * (a[g][0] - n) / r, d = this._getSector(s, p, h, m, v, a[g][1], f), v = m, d._animationAdd = "r", l.set(d, "seriesIndex", e), l.set(d, "dataIndex", g), this.shapeList.push(d)
		},
		_buildSplitLine: function(e) {
			var t = this.series[e];
			if (!t.splitLine.show) return;
			var n = this._paramsMap[e],
				r = t.splitNumber,
				i = t.min,
				o = t.max - i,
				u = t.splitLine,
				a = this.parsePercent(u.length, n.radius[1]),
				f = u.lineStyle,
				l = f.color,
				c = n.center,
				h = n.startAngle * Math.PI / 180,
				p = n.totalAngle * Math.PI / 180,
				d = n.radius[1],
				v = d - a,
				m, g, y;
			for (var b = 0; b <= r; b++) m = h - p / r * b, g = Math.sin(m), y = Math.cos(m), this.shapeList.push(new s({
				zlevel: this._zlevelBase + 1,
				hoverable: !1,
				style: {
					xStart: c[0] + y * d,
					yStart: c[1] - g * d,
					xEnd: c[0] + y * v,
					yEnd: c[1] - g * v,
					strokeColor: l == "auto" ? this._getColor(e, i + o / r * b) : l,
					lineType: f.type,
					lineWidth: f.width,
					shadowColor: f.shadowColor,
					shadowBlur: f.shadowBlur,
					shadowOffsetX: f.shadowOffsetX,
					shadowOffsetY: f.shadowOffsetY
				}
			}))
		},
		_buildAxisTick: function(e) {
			var t = this.series[e];
			if (!t.axisTick.show) return;
			var n = this._paramsMap[e],
				r = t.splitNumber,
				i = t.min,
				o = t.max - i,
				u = t.axisTick,
				a = u.splitNumber,
				f = this.parsePercent(u.length, n.radius[1]),
				l = u.lineStyle,
				c = l.color,
				h = n.center,
				p = n.startAngle * Math.PI / 180,
				d = n.totalAngle * Math.PI / 180,
				v = n.radius[1],
				m = v - f,
				g, y, b;
			for (var w = 0, E = r * a; w <= E; w++) {
				if (w % a === 0) continue;
				g = p - d / E * w, y = Math.sin(g), b = Math.cos(g), this.shapeList.push(new s({
					zlevel: this._zlevelBase + 1,
					hoverable: !1,
					style: {
						xStart: h[0] + b * v,
						yStart: h[1] - y * v,
						xEnd: h[0] + b * m,
						yEnd: h[1] - y * m,
						strokeColor: c == "auto" ? this._getColor(e, i + o / E * w) : c,
						lineType: l.type,
						lineWidth: l.width,
						shadowColor: l.shadowColor,
						shadowBlur: l.shadowBlur,
						shadowOffsetX: l.shadowOffsetX,
						shadowOffsetY: l.shadowOffsetY
					}
				}))
			}
		},
		_buildAxisLabel: function(e) {
			var t = this.series[e];
			if (!t.axisLabel.show) return;
			var n = t.splitNumber,
				r = t.min,
				s = t.max - r,
				o = t.axisLabel.textStyle,
				u = this.getFont(o),
				a = o.color,
				f = this._paramsMap[e],
				l = f.center,
				h = f.startAngle,
				p = f.totalAngle,
				d = f.radius[1] - this.parsePercent(t.splitLine.length, f.radius[1]) - 10,
				v, m, g, y;
			for (var b = 0; b <= n; b++) y = r + c.accMul(c.accDiv(s, n), b), v = h - p / n * b, m = Math.sin(v * Math.PI / 180), g = Math.cos(v * Math.PI / 180), v = (v + 360) % 360, this.shapeList.push(new i({
				zlevel: this._zlevelBase + 1,
				hoverable: !1,
				style: {
					x: l[0] + g * d,
					y: l[1] - m * d,
					color: a == "auto" ? this._getColor(e, y) : a,
					text: this._getLabelText(t.axisLabel.formatter, y),
					textAlign: v >= 110 && v <= 250 ? "left" : v <= 70 || v >= 290 ? "right" : "center",
					textBaseline: v >= 10 && v <= 170 ? "top" : v >= 190 && v <= 350 ? "bottom" : "middle",
					textFont: u,
					shadowColor: o.shadowColor,
					shadowBlur: o.shadowBlur,
					shadowOffsetX: o.shadowOffsetX,
					shadowOffsetY: o.shadowOffsetY
				}
			}))
		},
		_buildPointer: function(e) {
			var t = this.series[e];
			if (!t.pointer.show) return;
			var n = t.max - t.min,
				i = t.pointer,
				s = this._paramsMap[e],
				o = this.parsePercent(i.length, s.radius[1]),
				a = this.parsePercent(i.width, s.radius[1]),
				f = s.center,
				c = this._getValue(e);
			c = c < t.max ? c : t.max;
			var h = (s.startAngle - s.totalAngle / n * (c - t.min)) * Math.PI / 180,
				p = i.color == "auto" ? this._getColor(e, c) : i.color,
				d = new r({
					zlevel: this._zlevelBase + 1,
					style: {
						x: f[0],
						y: f[1],
						r: o,
						startAngle: s.startAngle * Math.PI / 180,
						angle: h,
						color: p,
						width: a,
						shadowColor: i.shadowColor,
						shadowBlur: i.shadowBlur,
						shadowOffsetX: i.shadowOffsetX,
						shadowOffsetY: i.shadowOffsetY
					},
					highlightStyle: {
						brushType: "fill",
						width: a > 2 ? 2 : a / 2,
						color: "#fff"
					}
				});
			l.pack(d, this.series[e], e, this.series[e].data[0], 0, this.series[e].data[0].name, c), this.shapeList.push(d), this.shapeList.push(new u({
				zlevel: this._zlevelBase + 2,
				hoverable: !1,
				style: {
					x: f[0],
					y: f[1],
					r: i.width / 2.5,
					color: "#fff"
				}
			}))
		},
		_buildTitle: function(e) {
			var t = this.series[e];
			if (!t.title.show) return;
			var n = t.data[0],
				r = typeof n.name != "undefined" ? n.name : "";
			if (r !== "") {
				var s = t.title,
					o = s.offsetCenter,
					u = s.textStyle,
					a = u.color,
					f = this._paramsMap[e],
					l = f.center[0] + this.parsePercent(o[0], f.radius[1]),
					c = f.center[1] + this.parsePercent(o[1], f.radius[1]);
				this.shapeList.push(new i({
					zlevel: this._zlevelBase + (Math.abs(l - f.center[0]) + Math.abs(c - f.center[1])) < u.fontSize * 2 ? 2 : 1,
					hoverable: !1,
					style: {
						x: l,
						y: c,
						color: a == "auto" ? this._getColor(e) : a,
						text: r,
						textAlign: "center",
						textFont: this.getFont(u),
						shadowColor: u.shadowColor,
						shadowBlur: u.shadowBlur,
						shadowOffsetX: u.shadowOffsetX,
						shadowOffsetY: u.shadowOffsetY
					}
				}))
			}
		},
		_buildDetail: function(e) {
			var t = this.series[e];
			if (!t.detail.show) return;
			var n = t.detail,
				r = n.offsetCenter,
				i = n.backgroundColor,
				s = n.textStyle,
				u = s.color,
				a = this._paramsMap[e],
				f = this._getValue(e),
				l = a.center[0] - n.width / 2 + this.parsePercent(r[0], a.radius[1]),
				c = a.center[1] + this.parsePercent(r[1], a.radius[1]);
			this.shapeList.push(new o({
				zlevel: this._zlevelBase + (Math.abs(l + n.width / 2 - a.center[0]) + Math.abs(c + n.height / 2 - a.center[1])) < s.fontSize ? 2 : 1,
				hoverable: !1,
				style: {
					x: l,
					y: c,
					width: n.width,
					height: n.height,
					brushType: "both",
					color: i == "auto" ? this._getColor(e, f) : i,
					lineWidth: n.borderWidth,
					strokeColor: n.borderColor,
					shadowColor: n.shadowColor,
					shadowBlur: n.shadowBlur,
					shadowOffsetX: n.shadowOffsetX,
					shadowOffsetY: n.shadowOffsetY,
					text: this._getLabelText(n.formatter, f),
					textFont: this.getFont(s),
					textPosition: "inside",
					textColor: u == "auto" ? this._getColor(e, f) : u
				}
			}))
		},
		_getValue: function(e) {
			var t = this.series[e].data[0];
			return typeof t.value != "undefined" ? t.value : t
		},
		_colorMap: function(e) {
			var t = this.series[e],
				n = t.min,
				r = t.max - n,
				i = t.axisLine.lineStyle.color;
			i instanceof Array || (i = [
				[1, i]
			]);
			var s = [];
			for (var o = 0, u = i.length; o < u; o++) s.push([i[o][0] * r + n, i[o][1]]);
			this._paramsMap[e].colorArray = s
		},
		_getColor: function(e, t) {
			typeof t == "undefined" && (t = this._getValue(e));
			var n = this._paramsMap[e].colorArray;
			for (var r = 0, i = n.length; r < i; r++)
				if (n[r][0] >= t) return n[r][1];
			return n[n.length - 1][1]
		},
		_getSector: function(e, t, n, r, i, s, o) {
			return new a({
				zlevel: this._zlevelBase,
				hoverable: !1,
				style: {
					x: e[0],
					y: e[1],
					r0: t,
					r: n,
					startAngle: r,
					endAngle: i,
					brushType: "fill",
					color: s,
					shadowColor: o.shadowColor,
					shadowBlur: o.shadowBlur,
					shadowOffsetX: o.shadowOffsetX,
					shadowOffsetY: o.shadowOffsetY
				}
			})
		},
		_getLabelText: function(e, t) {
			if (e) {
				if (typeof e == "function") return e.call(this.myChart, t);
				if (typeof e == "string") return e.replace("{value}", t)
			}
			return t
		},
		refresh: function(e) {
			e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
		}
	}, h.inherits(p, n), h.inherits(p, t), e("../chart").define("gauge", p), p
}), define("echarts/chart/funnel", ["require", "../component/base", "./base", "zrender/shape/Text", "zrender/shape/Line", "zrender/shape/Polygon", "../config", "../util/ecData", "../util/number", "zrender/tool/util", "zrender/tool/color", "zrender/tool/area", "../chart"], function(e) {
	function h(e, r, i, s, o) {
		t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
	}
	var t = e("../component/base"),
		n = e("./base"),
		r = e("zrender/shape/Text"),
		i = e("zrender/shape/Line"),
		s = e("zrender/shape/Polygon"),
		o = e("../config"),
		u = e("../util/ecData"),
		a = e("../util/number"),
		f = e("zrender/tool/util"),
		l = e("zrender/tool/color"),
		c = e("zrender/tool/area");
	return h.prototype = {
		type: o.CHART_TYPE_FUNNEL,
		_buildShape: function() {
			var e = this.series,
				t = this.component.legend;
			this._paramsMap = {}, this._selected = {}, this.selectedMap = {};
			var n;
			for (var r = 0, i = e.length; r < i; r++)
				if (e[r].type == o.CHART_TYPE_FUNNEL) {
					e[r] = this.reformOption(e[r]), n = e[r].name || "", this.selectedMap[n] = t ? t.isSelected(n) : !0;
					if (!this.selectedMap[n]) continue;
					this._buildSingleFunnel(r), this.buildMark(r)
				}
			this.addShapeList()
		},
		_buildSingleFunnel: function(e) {
			var t = this.component.legend,
				n = this.series[e],
				r = this._mapData(e),
				i = this._getLocation(e);
			this._paramsMap[e] = {
				location: i,
				data: r
			};
			var s, o = 0,
				u = [];
			for (var f = 0, l = r.length; f < l; f++) s = r[f].name, t ? this.selectedMap[s] = t.isSelected(s) : this.selectedMap[s] = !0, this.selectedMap[s] && !isNaN(r[f].value) && (u.push(r[f]), o++);
			if (o === 0) return;
			var c = this._buildFunnelCase(e),
				h = n.gap,
				p = o > 1 ? (i.height - (o - 1) * h) / o : i.height,
				d, v = i.y,
				m = n.sort == "descending" ? this._getItemWidth(e, u[0].value) : a.parsePercent(n.minSize, i.width),
				g = n.sort == "descending" ? 1 : 0,
				y = i.centerX,
				b = [
					[y - m / 2 - (m === 0 ? 0 : 10), v - (m === 0 ? 10 : 5)],
					[y + m / 2 + (m === 0 ? 0 : 10), v - (m === 0 ? 10 : 5)]
				];
			for (var f = 0, l = u.length; f < l; f++) s = u[f].name, this.selectedMap[s] && !isNaN(u[f].value) && (d = f <= l - 2 ? this._getItemWidth(e, u[f + g].value) : n.sort == "descending" ? a.parsePercent(n.minSize, i.width) : a.parsePercent(n.maxSize, i.width), this._buildItem(e, u[f]._index, t ? t.getColor(s) : this.zr.getColor(u[f]._index), y - m / 2, v, m, d, p), v += p + h, m = d, b.unshift([y - m / 2 - 10, v]), b.push([y + m / 2 + 10, v]));
			c && (m === 0 ? (b.pop(), b[0][0] += 10, b[0][1] += 10) : (b[b.length - 1][1] += 5, b[0][1] += 5), c.style.pointList = b)
		},
		_buildFunnelCase: function(e) {
			var t = this.series[e];
			if (this.deepQuery([t, this.option], "calculable")) {
				var n = this._paramsMap[e].location,
					r = 10,
					i = {
						hoverable: !1,
						style: {
							pointListd: [
								[n.x - r, n.y - r],
								[n.x + n.width + r, n.y - r],
								[n.x + n.width + r, n.y + n.height + r],
								[n.x - r, n.y + n.height + r]
							],
							brushType: "stroke",
							lineWidth: 1,
							strokeColor: t.calculableHolderColor || this.ecTheme.calculableHolderColor
						}
					};
				return u.pack(i, t, e, undefined, -1), this.setCalculable(i), i = new s(i), this.shapeList.push(i), i
			}
		},
		_getLocation: function(e) {
			var t = this.series[e],
				n = this.zr.getWidth(),
				r = this.zr.getHeight(),
				i = this.parsePercent(t.x, n),
				s = this.parsePercent(t.y, r),
				o;
			typeof t.width == "undefined" ? o = n - i - this.parsePercent(t.x2, n) : o = this.parsePercent(t.width, n);
			var u;
			return typeof t.height == "undefined" ? u = r - s - this.parsePercent(t.y2, r) : u = this.parsePercent(t.height, r), {
				x: i,
				y: s,
				width: o,
				height: u,
				centerX: i + o / 2
			}
		},
		_mapData: function(e) {
			function s(e, t) {
				return e.value == "-" ? 1 : t.value == "-" ? -1 : t.value - e.value
			}

			function o(e, t) {
				return -s(e, t)
			}
			var t = this.series[e],
				n = f.clone(t.data);
			for (var r = 0, i = n.length; r < i; r++) n[r]._index = r;
			return t.sort != "none" && n.sort(t.sort == "descending" ? s : o), n
		},
		_buildItem: function(e, t, n, r, i, s, o, a) {
			var f = this.series,
				l = f[e],
				c = l.data[t],
				h = this.getPolygon(e, t, n, r, i, s, o, a);
			u.pack(h, f[e], e, f[e].data[t], t, f[e].data[t].name), this.shapeList.push(h);
			var p = this.getLabel(e, t, n, r, i, s, o, a);
			u.pack(p, f[e], e, f[e].data[t], t, f[e].data[t].name), this.shapeList.push(p), this._needLabel(l, c, !1) || (p.invisible = !0);
			var d = this.getLabelLine(e, t, n, r, i, s, o, a);
			this.shapeList.push(d), this._needLabelLine(l, c, !1) || (d.invisible = !0);
			var v = [],
				m = [];
			this._needLabelLine(l, c, !0) && (v.push(d.id), m.push(d.id)), this._needLabel(l, c, !0) && (v.push(p.id), m.push(h.id)), h.hoverConnect = v, p.hoverConnect = m, h.onmouseover = p.onmouseover = this.hoverConnect
		},
		_getItemWidth: function(e, t) {
			var n = this.series[e],
				r = this._paramsMap[e].location,
				i = n.min,
				s = n.max,
				o = a.parsePercent(n.minSize, r.width),
				u = a.parsePercent(n.maxSize, r.width);
			return t * (u - o) / (s - i)
		},
		getPolygon: function(e, t, n, r, i, o, u, a) {
			var f = this.series[e],
				c = f.data[t],
				h = [c, f],
				p = this.deepMerge(h, "itemStyle.normal") || {},
				d = this.deepMerge(h, "itemStyle.emphasis") || {},
				v = this.getItemStyleColor(p.color, e, t, c) || n,
				m = this.getItemStyleColor(d.color, e, t, c) || (typeof v == "string" ? l.lift(v, -0.2) : v),
				g = {
					zlevel: this._zlevelBase,
					clickable: !0,
					style: {
						pointList: [
							[r, i],
							[r + o, i],
							[r + o - (o - u) / 2, i + a],
							[r + (o - u) / 2, i + a]
						],
						brushType: "both",
						color: v,
						lineWidth: p.borderWidth,
						strokeColor: p.borderColor
					},
					highlightStyle: {
						color: m,
						lineWidth: d.borderWidth,
						strokeColor: d.borderColor
					}
				};
			return this.deepQuery([c, f, this.option], "calculable") && (this.setCalculable(g), g.draggable = !0), new s(g)
		},
		getLabel: function(e, t, n, i, s, o, u, a) {
			var h = this.series[e],
				p = h.data[t],
				d = this._paramsMap[e].location,
				v = f.merge(f.clone(p.itemStyle) || {}, h.itemStyle),
				m = "normal",
				g = v[m].label,
				y = g.textStyle || {},
				b = v[m].labelLine.length,
				w = this.getLabelText(e, t, m),
				E = this.getFont(y),
				S, x, T = n;
			g.position = g.position || v.normal.label.position, g.position == "inner" || g.position == "inside" ? (S = "center", x = i + o / 2, Math.max(o, u) / 2 > c.getTextWidth(w, E) ? T = "#fff" : T = l.reverse(n)) : g.position == "left" ? (S = "right", x = b == "auto" ? d.x - 10 : d.centerX - Math.max(o, u) / 2 - b) : (S = "left", x = b == "auto" ? d.x + d.width + 10 : d.centerX + Math.max(o, u) / 2 + b);
			var N = {
				zlevel: this._zlevelBase + 1,
				style: {
					x: x,
					y: s + a / 2,
					color: y.color || T,
					text: w,
					textAlign: y.align || S,
					textBaseline: y.baseline || "middle",
					textFont: E
				}
			};
			return m = "emphasis", g = v[m].label || g, y = g.textStyle || y, b = v[m].labelLine.length || b, g.position = g.position || v.normal.label.position, w = this.getLabelText(e, t, m), E = this.getFont(y), T = n, g.position == "inner" || g.position == "inside" ? (S = "center", x = i + o / 2, Math.max(o, u) / 2 > c.getTextWidth(w, E) ? T = "#fff" : T = l.reverse(n)) : g.position == "left" ? (S = "right", x = b == "auto" ? d.x - 10 : d.centerX - Math.max(o, u) / 2 - b) : (S = "left", x = b == "auto" ? d.x + d.width + 10 : d.centerX + Math.max(o, u) / 2 + b), N.highlightStyle = {
				x: x,
				color: y.color || T,
				text: w,
				textAlign: y.align || S,
				textFont: E,
				brushType: "fill"
			}, new r(N)
		},
		getLabelText: function(e, t, n) {
			var r = this.series,
				i = r[e],
				s = i.data[t],
				o = this.deepQuery([s, i], "itemStyle." + n + ".label.formatter");
			if (!o) return s.name;
			if (typeof o == "function") return o.call(this.myChart, i.name, s.name, s.value);
			if (typeof o == "string") return o = o.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}"), o = o.replace("{a0}", i.name).replace("{b0}", s.name).replace("{c0}", s.value), o
		},
		getLabelLine: function(e, t, n, r, s, o, u, a) {
			var l = this.series[e],
				c = l.data[t],
				h = this._paramsMap[e].location,
				p = f.merge(f.clone(c.itemStyle) || {}, l.itemStyle),
				d = "normal",
				v = p[d].labelLine,
				m = p[d].labelLine.length,
				g = v.lineStyle || {},
				y = p[d].label;
			y.position = y.position || p.normal.label.position;
			var b;
			y.position == "inner" || y.position == "inside" ? b = r + o / 2 : y.position == "left" ? b = m == "auto" ? h.x - 10 : h.centerX - Math.max(o, u) / 2 - m : b = m == "auto" ? h.x + h.width + 10 : h.centerX + Math.max(o, u) / 2 + m;
			var w = {
				zlevel: this._zlevelBase + 1,
				hoverable: !1,
				style: {
					xStart: h.centerX,
					yStart: s + a / 2,
					xEnd: b,
					yEnd: s + a / 2,
					strokeColor: g.color || n,
					lineType: g.type,
					lineWidth: g.width
				}
			};
			return d = "emphasis", v = p[d].labelLine || v, m = p[d].labelLine.length || m, g = v.lineStyle || g, y = p[d].label || y, y.position = y.position, y.position == "inner" || y.position == "inside" ? b = r + o / 2 : y.position == "left" ? b = m == "auto" ? h.x - 10 : h.centerX - Math.max(o, u) / 2 - m : b = m == "auto" ? h.x + h.width + 10 : h.centerX + Math.max(o, u) / 2 + m, w.highlightStyle = {
				xEnd: b,
				strokeColor: g.color || n,
				lineType: g.type,
				lineWidth: g.width
			}, new i(w)
		},
		_needLabel: function(e, t, n) {
			return this.deepQuery([t, e], "itemStyle." + (n ? "emphasis" : "normal") + ".label.show")
		},
		_needLabelLine: function(e, t, n) {
			return this.deepQuery([t, e], "itemStyle." + (n ? "emphasis" : "normal") + ".labelLine.show")
		},
		refresh: function(e) {
			e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
		}
	}, f.inherits(h, n), f.inherits(h, t), e("../chart").define("funnel", h), h
}), define("echarts/component/categoryAxis", ["require", "./base", "zrender/shape/Text", "zrender/shape/Line", "zrender/shape/Rectangle", "../config", "zrender/tool/util", "zrender/tool/area", "../component"], function(e) {
	function a(e, n, r, i, s, o) {
		if (i.data.length < 1) {
			console.error("option.data.length < 1.");
			return
		}
		t.call(this, e, n, r, i, s), this.grid = this.component.grid;
		for (var u in o) this[u] = o[u];
		this.refresh(i)
	}
	var t = e("./base"),
		n = e("zrender/shape/Text"),
		r = e("zrender/shape/Line"),
		i = e("zrender/shape/Rectangle"),
		s = e("../config"),
		o = e("zrender/tool/util"),
		u = e("zrender/tool/area");
	return a.prototype = {
		type: s.COMPONENT_TYPE_AXIS_CATEGORY,
		_getReformedLabel: function(e) {
			var t = typeof this.option.data[e].value != "undefined" ? this.option.data[e].value : this.option.data[e],
				n = this.option.data[e].formatter || this.option.axisLabel.formatter;
			return n && (typeof n == "function" ? t = n.call(this.myChart, t) : typeof n == "string" && (t = n.replace("{value}", t))), t
		},
		_getInterval: function() {
			var e = this.option.axisLabel.interval;
			if (e == "auto") {
				var t = this.option.axisLabel.textStyle.fontSize,
					n = this.option.data,
					r = this.option.data.length;
				if (this.isHorizontal())
					if (r > 3) {
						var i = this.getGap(),
							s = !1,
							a, f, l = Math.floor(.5 / i);
						l = l < 1 ? 1 : l, e = Math.floor(15 / i);
						while (!s && e < r) {
							e += l, s = !0, a = Math.floor(i * e);
							for (var c = Math.floor((r - 1) / e) * e; c >= 0; c -= e) {
								if (this.option.axisLabel.rotate !== 0) f = t;
								else if (n[c].textStyle) f = u.getTextWidth(this._getReformedLabel(c), this.getFont(o.merge(n[c].textStyle, this.option.axisLabel.textStyle)));
								else {
									var h = this._getReformedLabel(c) + "",
										p = (h.match(/\w/g) || "").length,
										d = h.length - p;
									f = p * t * 2 / 3 + d * t
								} if (a < f) {
									s = !1;
									break
								}
							}
						}
					} else e = 1;
				else if (r > 3) {
					var i = this.getGap();
					e = Math.floor(11 / i);
					while (i * e - 6 < t && e < r) e++
				} else e = 1
			} else e = e - 0 + 1;
			return e
		},
		_buildShape: function() {
			this._interval = this._getInterval(), this.option.splitArea.show && this._buildSplitArea(), this.option.splitLine.show && this._buildSplitLine(), this.option.axisLine.show && this._buildAxisLine(), this.option.axisTick.show && this._buildAxisTick(), this.option.axisLabel.show && this._buildAxisLabel();
			for (var e = 0, t = this.shapeList.length; e < t; e++) this.zr.addShape(this.shapeList[e])
		},
		_buildAxisTick: function() {
			var e, t = this.option.data.length,
				n = this.option.axisTick,
				i = n.length,
				s = n.lineStyle.color,
				o = n.lineStyle.width,
				u = n.interval == "auto" ? this._interval : n.interval - 0 + 1,
				a = n.onGap,
				f = a ? this.getGap() / 2 : typeof a == "undefined" ? this.option.boundaryGap ? this.getGap() / 2 : 0 : 0,
				l = f > 0 ? -u : 0;
			if (this.isHorizontal()) {
				var c = this.option.position == "bottom" ? n.inside ? this.grid.getYend() - i - 1 : this.grid.getYend() + 1 : n.inside ? this.grid.getY() + 1 : this.grid.getY() - i - 1,
					h;
				for (var p = l; p < t; p += u) h = this.subPixelOptimize(this.getCoordByIndex(p) + (p >= 0 ? f : 0), o), e = {
					_axisShape: "axisTick",
					zlevel: this._zlevelBase,
					hoverable: !1,
					style: {
						xStart: h,
						yStart: c,
						xEnd: h,
						yEnd: c + i,
						strokeColor: s,
						lineWidth: o
					}
				}, this.shapeList.push(new r(e))
			} else {
				var d = this.option.position == "left" ? n.inside ? this.grid.getX() + 1 : this.grid.getX() - i - 1 : n.inside ? this.grid.getXend() - i - 1 : this.grid.getXend() + 1,
					v;
				for (var p = l; p < t; p += u) v = this.subPixelOptimize(this.getCoordByIndex(p) - (p >= 0 ? f : 0), o), e = {
					_axisShape: "axisTick",
					zlevel: this._zlevelBase,
					hoverable: !1,
					style: {
						xStart: d,
						yStart: v,
						xEnd: d + i,
						yEnd: v,
						strokeColor: s,
						lineWidth: o
					}
				}, this.shapeList.push(new r(e))
			}
		},
		_buildAxisLabel: function() {
			var e, t = this.option.data,
				r = this.option.data.length,
				i = this.option.axisLabel.rotate,
				s = this.option.axisLabel.margin,
				u = this.option.axisLabel.clickable,
				a = this.option.axisLabel.textStyle,
				f;
			if (this.isHorizontal()) {
				var l, c;
				this.option.position == "bottom" ? (l = this.grid.getYend() + s, c = "top") : (l = this.grid.getY() - s, c = "bottom");
				for (var h = 0; h < r; h += this._interval) {
					if (this._getReformedLabel(h) === "") continue;
					f = o.merge(t[h].textStyle || {}, a), e = {
						zlevel: this._zlevelBase,
						hoverable: !1,
						style: {
							x: this.getCoordByIndex(h),
							y: l,
							color: f.color,
							text: this._getReformedLabel(h),
							textFont: this.getFont(f),
							textAlign: f.align || "center",
							textBaseline: f.baseline || c
						}
					}, i && (e.style.textAlign = i > 0 ? this.option.position == "bottom" ? "right" : "left" : this.option.position == "bottom" ? "left" : "right", e.rotation = [i * Math.PI / 180, e.style.x, e.style.y]), this.shapeList.push(new n(this._axisLabelClickable(u, e)))
				}
			} else {
				var p, d;
				this.option.position == "left" ? (p = this.grid.getX() - s, d = "right") : (p = this.grid.getXend() + s, d = "left");
				for (var h = 0; h < r; h += this._interval) {
					if (this._getReformedLabel(h) === "") continue;
					f = o.merge(t[h].textStyle || {}, a), e = {
						zlevel: this._zlevelBase,
						hoverable: !1,
						style: {
							x: p,
							y: this.getCoordByIndex(h),
							color: f.color,
							text: this._getReformedLabel(h),
							textFont: this.getFont(f),
							textAlign: f.align || d,
							textBaseline: f.baseline || h === 0 && this.option.name !== "" ? "bottom" : h == r - 1 && this.option.name !== "" ? "top" : "middle"
						}
					}, i && (e.rotation = [i * Math.PI / 180, e.style.x, e.style.y]), this.shapeList.push(new n(this._axisLabelClickable(u, e)))
				}
			}
		},
		_buildSplitLine: function() {
			var e, t = this.option.data.length,
				n = this.option.splitLine,
				i = n.lineStyle.type,
				s = n.lineStyle.width,
				o = n.lineStyle.color;
			o = o instanceof Array ? o : [o];
			var u = o.length,
				a = n.onGap,
				f = a ? this.getGap() / 2 : typeof a == "undefined" ? this.option.boundaryGap ? this.getGap() / 2 : 0 : 0;
			t -= a || typeof a == "undefined" && this.option.boundaryGap ? 1 : 0;
			if (this.isHorizontal()) {
				var l = this.grid.getY(),
					c = this.grid.getYend(),
					h;
				for (var p = 0; p < t; p += this._interval) h = this.subPixelOptimize(this.getCoordByIndex(p) + f, s), e = {
					zlevel: this._zlevelBase,
					hoverable: !1,
					style: {
						xStart: h,
						yStart: l,
						xEnd: h,
						yEnd: c,
						strokeColor: o[p / this._interval % u],
						lineType: i,
						lineWidth: s
					}
				}, this.shapeList.push(new r(e))
			} else {
				var d = this.grid.getX(),
					v = this.grid.getXend(),
					m;
				for (var p = 0; p < t; p += this._interval) m = this.subPixelOptimize(this.getCoordByIndex(p) - f, s), e = {
					zlevel: this._zlevelBase,
					hoverable: !1,
					style: {
						xStart: d,
						yStart: m,
						xEnd: v,
						yEnd: m,
						strokeColor: o[p / this._interval % u],
						linetype: i,
						lineWidth: s
					}
				}, this.shapeList.push(new r(e))
			}
		},
		_buildSplitArea: function() {
			var e, t = this.option.splitArea,
				n = t.areaStyle.color;
			if (n instanceof Array) {
				var r = n.length,
					s = this.option.data.length,
					o = t.onGap,
					u = o ? this.getGap() / 2 : typeof o == "undefined" ? this.option.boundaryGap ? this.getGap() / 2 : 0 : 0;
				if (this.isHorizontal()) {
					var a = this.grid.getY(),
						f = this.grid.getHeight(),
						l = this.grid.getX(),
						c;
					for (var h = 0; h <= s; h += this._interval) c = h < s ? this.getCoordByIndex(h) + u : this.grid.getXend(), e = {
						zlevel: this._zlevelBase,
						hoverable: !1,
						style: {
							x: l,
							y: a,
							width: c - l,
							height: f,
							color: n[h / this._interval % r]
						}
					}, this.shapeList.push(new i(e)), l = c
				} else {
					var p = this.grid.getX(),
						d = this.grid.getWidth(),
						v = this.grid.getYend(),
						m;
					for (var h = 0; h <= s; h += this._interval) m = h < s ? this.getCoordByIndex(h) - u : this.grid.getY(), e = {
						zlevel: this._zlevelBase,
						hoverable: !1,
						style: {
							x: p,
							y: m,
							width: d,
							height: v - m,
							color: n[h / this._interval % r]
						}
					}, this.shapeList.push(new i(e)), v = m
				}
			} else e = {
				zlevel: this._zlevelBase,
				hoverable: !1,
				style: {
					x: this.grid.getX(),
					y: this.grid.getY(),
					width: this.grid.getWidth(),
					height: this.grid.getHeight(),
					color: n
				}
			}, this.shapeList.push(new i(e))
		},
		refresh: function(e) {
			e && (this.option = this.reformOption(e), this.option.axisLabel.textStyle = o.merge(this.option.axisLabel.textStyle || {}, this.ecTheme.textStyle)), this.clear(), this._buildShape()
		},
		getGap: function() {
			var e = this.option.data.length,
				t = this.isHorizontal() ? this.grid.getWidth() : this.grid.getHeight();
			return this.option.boundaryGap ? t / e : t / (e > 1 ? e - 1 : 1)
		},
		getCoord: function(e) {
			var t = this.option.data,
				n = t.length,
				r = this.getGap(),
				i = this.option.boundaryGap ? r / 2 : 0;
			for (var s = 0; s < n; s++) {
				if (t[s] == e || typeof t[s].value != "undefined" && t[s].value == e) return this.isHorizontal() ? i = this.grid.getX() + i : i = this.grid.getYend() - i, i;
				i += r
			}
		},
		getCoordByIndex: function(e) {
			if (e < 0) return this.isHorizontal() ? this.grid.getX() : this.grid.getYend();
			if (e > this.option.data.length - 1) return this.isHorizontal() ? this.grid.getXend() : this.grid.getY();
			var t = this.getGap(),
				n = this.option.boundaryGap ? t / 2 : 0;
			return n += e * t, this.isHorizontal() ? n = this.grid.getX() + n : n = this.grid.getYend() - n, n
		},
		getNameByIndex: function(e) {
			var t = this.option.data[e];
			return typeof t != "undefined" && typeof t.value != "undefined" ? t.value : t
		},
		getIndexByName: function(e) {
			var t = this.option.data,
				n = t.length;
			for (var r = 0; r < n; r++)
				if (t[r] == e || typeof t[r].value != "undefined" && t[r].value == e) return r;
			return -1
		},
		getValueFromCoord: function() {
			return ""
		},
		isMainAxis: function(e) {
			return e % this._interval === 0
		}
	}, o.inherits(a, t), e("../component").define("categoryAxis", a), a
}), define("echarts/component/valueAxis", ["require", "./base", "zrender/shape/Text", "zrender/shape/Line", "zrender/shape/Rectangle", "../config", "zrender/tool/util", "../component"], function(e) {
	function u(e, n, r, i, s, o, u) {
		if (!u || u.length === 0) {
			console.err("option.series.length == 0.");
			return
		}
		t.call(this, e, n, r, i, s), this.series = u, this.grid = this.component.grid;
		for (var a in o) this[a] = o[a];
		this.refresh(i, u)
	}
	var t = e("./base"),
		n = e("zrender/shape/Text"),
		r = e("zrender/shape/Line"),
		i = e("zrender/shape/Rectangle"),
		s = e("../config"),
		o = e("zrender/tool/util");
	return u.prototype = {
		type: s.COMPONENT_TYPE_AXIS_VALUE,
		_buildShape: function() {
			this._hasData = !1, this._calculateValue();
			if (!this._hasData) return;
			this.option.splitArea.show && this._buildSplitArea(), this.option.splitLine.show && this._buildSplitLine(), this.option.axisLine.show && this._buildAxisLine(), this.option.axisTick.show && this._buildAxisTick(), this.option.axisLabel.show && this._buildAxisLabel();
			for (var e = 0, t = this.shapeList.length; e < t; e++) this.zr.addShape(this.shapeList[e])
		},
		_buildAxisTick: function() {
			var e, t = this._valueList,
				n = this._valueList.length,
				i = this.option.axisTick,
				s = i.length,
				o = i.lineStyle.color,
				u = i.lineStyle.width;
			if (this.isHorizontal()) {
				var a = this.option.position == "bottom" ? i.inside ? this.grid.getYend() - s - 1 : this.grid.getYend() + 1 : i.inside ? this.grid.getY() + 1 : this.grid.getY() - s - 1,
					f;
				for (var l = 0; l < n; l++) f = this.subPixelOptimize(this.getCoord(t[l]), u), e = {
					_axisShape: "axisTick",
					zlevel: this._zlevelBase,
					hoverable: !1,
					style: {
						xStart: f,
						yStart: a,
						xEnd: f,
						yEnd: a + s,
						strokeColor: o,
						lineWidth: u
					}
				}, this.shapeList.push(new r(e))
			} else {
				var c = this.option.position == "left" ? i.inside ? this.grid.getX() + 1 : this.grid.getX() - s - 1 : i.inside ? this.grid.getXend() - s - 1 : this.grid.getXend() + 1,
					h;
				for (var l = 0; l < n; l++) h = this.subPixelOptimize(this.getCoord(t[l]), u), e = {
					_axisShape: "axisTick",
					zlevel: this._zlevelBase,
					hoverable: !1,
					style: {
						xStart: c,
						yStart: h,
						xEnd: c + s,
						yEnd: h,
						strokeColor: o,
						lineWidth: u
					}
				}, this.shapeList.push(new r(e))
			}
		},
		_buildAxisLabel: function() {
			var e, t = this._valueList,
				r = this._valueList.length,
				i = this.option.axisLabel.rotate,
				s = this.option.axisLabel.margin,
				o = this.option.axisLabel.clickable,
				u = this.option.axisLabel.textStyle;
			if (this.isHorizontal()) {
				var a, f;
				this.option.position == "bottom" ? (a = this.grid.getYend() + s, f = "top") : (a = this.grid.getY() - s, f = "bottom");
				for (var l = 0; l < r; l++) e = {
					zlevel: this._zlevelBase,
					hoverable: !1,
					style: {
						x: this.getCoord(t[l]),
						y: a,
						color: typeof u.color == "function" ? u.color(t[l]) : u.color,
						text: this._valueLabel[l],
						textFont: this.getFont(u),
						textAlign: u.align || "center",
						textBaseline: u.baseline || f
					}
				}, i && (e.style.textAlign = i > 0 ? this.option.position == "bottom" ? "right" : "left" : this.option.position == "bottom" ? "left" : "right", e.rotation = [i * Math.PI / 180, e.style.x, e.style.y]), this.shapeList.push(new n(this._axisLabelClickable(o, e)))
			} else {
				var c, h;
				this.option.position == "left" ? (c = this.grid.getX() - s, h = "right") : (c = this.grid.getXend() + s, h = "left");
				for (var l = 0; l < r; l++) e = {
					zlevel: this._zlevelBase,
					hoverable: !1,
					style: {
						x: c,
						y: this.getCoord(t[l]),
						color: typeof u.color == "function" ? u.color(t[l]) : u.color,
						text: this._valueLabel[l],
						textFont: this.getFont(u),
						textAlign: u.align || h,
						textBaseline: u.baseline || l === 0 && this.option.name !== "" ? "bottom" : l == r - 1 && this.option.name !== "" ? "top" : "middle"
					}
				}, i && (e.rotation = [i * Math.PI / 180, e.style.x, e.style.y]), this.shapeList.push(new n(this._axisLabelClickable(o, e)))
			}
		},
		_buildSplitLine: function() {
			var e, t = this._valueList,
				n = this._valueList.length,
				i = this.option.splitLine,
				s = i.lineStyle.type,
				o = i.lineStyle.width,
				u = i.lineStyle.color;
			u = u instanceof Array ? u : [u];
			var a = u.length;
			if (this.isHorizontal()) {
				var f = this.grid.getY(),
					l = this.grid.getYend(),
					c;
				for (var h = 0; h < n; h++) c = this.subPixelOptimize(this.getCoord(t[h]), o), e = {
					zlevel: this._zlevelBase,
					hoverable: !1,
					style: {
						xStart: c,
						yStart: f,
						xEnd: c,
						yEnd: l,
						strokeColor: u[h % a],
						lineType: s,
						lineWidth: o
					}
				}, this.shapeList.push(new r(e))
			} else {
				var p = this.grid.getX(),
					d = this.grid.getXend(),
					v;
				for (var h = 0; h < n; h++) v = this.subPixelOptimize(this.getCoord(t[h]), o), e = {
					zlevel: this._zlevelBase,
					hoverable: !1,
					style: {
						xStart: p,
						yStart: v,
						xEnd: d,
						yEnd: v,
						strokeColor: u[h % a],
						lineType: s,
						lineWidth: o
					}
				}, this.shapeList.push(new r(e))
			}
		},
		_buildSplitArea: function() {
			var e, t = this.option.splitArea.areaStyle.color;
			if (t instanceof Array) {
				var n = t.length,
					r = this._valueList,
					s = this._valueList.length;
				if (this.isHorizontal()) {
					var o = this.grid.getY(),
						u = this.grid.getHeight(),
						a = this.grid.getX(),
						f;
					for (var l = 0; l <= s; l++) f = l < s ? this.getCoord(r[l]) : this.grid.getXend(), e = {
						zlevel: this._zlevelBase,
						hoverable: !1,
						style: {
							x: a,
							y: o,
							width: f - a,
							height: u,
							color: t[l % n]
						}
					}, this.shapeList.push(new i(e)), a = f
				} else {
					var c = this.grid.getX(),
						h = this.grid.getWidth(),
						p = this.grid.getYend(),
						d;
					for (var l = 0; l <= s; l++) d = l < s ? this.getCoord(r[l]) : this.grid.getY(), e = {
						zlevel: this._zlevelBase,
						hoverable: !1,
						style: {
							x: c,
							y: d,
							width: h,
							height: p - d,
							color: t[l % n]
						}
					}, this.shapeList.push(new i(e)), p = d
				}
			} else e = {
				zlevel: this._zlevelBase,
				hoverable: !1,
				style: {
					x: this.grid.getX(),
					y: this.grid.getY(),
					width: this.grid.getWidth(),
					height: this.grid.getHeight(),
					color: t
				}
			}, this.shapeList.push(new i(e))
		},
		_calculateValue: function() {
			if (isNaN(this.option.min - 0) || isNaN(this.option.max - 0)) {
				var e, t = {},
					n, r, i, o = this.component.legend;
				for (var u = 0, a = this.series.length; u < a; u++) {
					if (this.series[u].type != s.CHART_TYPE_LINE && this.series[u].type != s.CHART_TYPE_BAR && this.series[u].type != s.CHART_TYPE_SCATTER && this.series[u].type != s.CHART_TYPE_K) continue;
					if (o && !o.isSelected(this.series[u].name)) continue;
					r = this.series[u].xAxisIndex || 0, i = this.series[u].yAxisIndex || 0;
					if (this.option.xAxisIndex != r && this.option.yAxisIndex != i) continue;
					var f = this.series[u].name || "kener";
					if (!this.series[u].stack) {
						t[f] = t[f] || [], e = this.series[u].data;
						for (var l = 0, c = e.length; l < c; l++) n = typeof e[l].value != "undefined" ? e[l].value : e[l], this.series[u].type == s.CHART_TYPE_SCATTER ? (this.option.xAxisIndex != -1 && t[f].push(n[0]), this.option.yAxisIndex != -1 && t[f].push(n[1])) : this.series[u].type == s.CHART_TYPE_K ? (t[f].push(n[0]), t[f].push(n[1]), t[f].push(n[2]), t[f].push(n[3])) : t[f].push(n)
					} else {
						var h = "__Magic_Key_Positive__" + this.series[u].stack,
							p = "__Magic_Key_Negative__" + this.series[u].stack;
						t[h] = t[h] || [], t[p] = t[p] || [], t[f] = t[f] || [], e = this.series[u].data;
						for (var l = 0, c = e.length; l < c; l++) {
							n = typeof e[l].value != "undefined" ? e[l].value : e[l];
							if (n == "-") continue;
							n -= 0, n >= 0 ? typeof t[h][l] != "undefined" ? t[h][l] += n : t[h][l] = n : typeof t[p][l] != "undefined" ? t[p][l] += n : t[p][l] = n, this.option.scale && t[f].push(n)
						}
					}
				}
				for (var u in t) {
					e = t[u];
					for (var l = 0, c = e.length; l < c; l++)
						if (!isNaN(e[l])) {
							this._hasData = !0, this._min = e[l], this._max = e[l];
							break
						}
					if (this._hasData) break
				}
				for (var u in t) {
					e = t[u];
					for (var l = 0, c = e.length; l < c; l++) isNaN(e[l]) || (this._min = Math.min(this._min, e[l]), this._max = Math.max(this._max, e[l]))
				}
				this._min = isNaN(this.option.min - 0) ? this._min - Math.abs(this._min * this.option.boundaryGap[0]) : this.option.min - 0, this._max = isNaN(this.option.max - 0) ? this._max + Math.abs(this._max * this.option.boundaryGap[1]) : this.option.max - 0, this._min == this._max && (this._max === 0 ? this._max = this.option.power > 0 ? this.option.power : 1 : this._max > 0 ? this._min = this._max / this.option.splitNumber : this._max = this._max / this.option.splitNumber), this._reformValue(this.option.scale)
			} else this._hasData = !0, this._min = this.option.min - 0, this._max = this.option.max - 0, this._customerValue()
		},
		_reformValue: function(e) {
			var t = this.option.splitNumber,
				n = this.option.precision,
				r, i;
			n === 0 ? i = this.option.power > 1 ? this.option.power : 1 : (i = Math.pow(10, n), this._min *= i, this._max *= i, i = this.option.power);
			var s;
			if (this._min >= 0 && this._max >= 0) {
				if (!e) {
					while (this._max / i < t && i != 1) i /= 10;
					this._min = 0
				} else {
					while (this._min < i && i != 1) i /= 10;
					n === 0 && (this._min = Math.floor(this._min / i) * i, this._max = Math.ceil(this._max / i) * i)
				}
				i = i > 1 ? i / 10 : 1, s = this._max - this._min, r = Math.ceil(s / t / i) * i, this._max = this._min + r * t
			} else if (this._min <= 0 && this._max <= 0) {
				i = -i;
				if (!e) {
					while (this._min / i < t && i != -1) i /= 10;
					this._max = 0
				} else {
					while (this._max > i && i != -1) i /= 10;
					n === 0 && (this._min = Math.ceil(this._min / i) * i, this._max = Math.floor(this._max / i) * i)
				}
				i = i < -1 ? i / 10 : -1, s = this._min - this._max, r = -Math.ceil(s / t / i) * i, this._min = -r * t + this._max
			} else {
				s = this._max - this._min;
				while (s / i < t && i != 1) i /= 10;
				var o = Math.round(this._max / s * t);
				o -= o == t ? 1 : 0, o += o === 0 ? 1 : 0, r = Math.ceil(Math.max(this._max / o, this._min / (o - t)) / i) * i, this._max = r * o, this._min = r * (o - t)
			}
			this._valueList = [];
			for (var u = 0; u <= t; u++) this._valueList.push(this._min + r * u);
			if (n !== 0) {
				i = Math.pow(10, n), this._min = (this._min / i).toFixed(n) - 0, this._max = (this._max / i).toFixed(n) - 0;
				for (var u = 0; u <= t; u++) this._valueList[u] = (this._valueList[u] / i).toFixed(n) - 0
			}
			this._reformLabelData()
		},
		_customerValue: function() {
			var e = this.option.splitNumber,
				t = this.option.precision,
				n = (this._max - this._min) / e;
			this._valueList = [];
			for (var r = 0; r <= e; r++) this._valueList.push((this._min + n * r).toFixed(t) - 0);
			this._reformLabelData()
		},
		_reformLabelData: function() {
			this._valueLabel = [];
			var e = this.option.axisLabel.formatter;
			if (e)
				for (var t = 0, n = this._valueList.length; t < n; t++) typeof e == "function" ? this._valueLabel.push(e.call(this.myChart, this._valueList[t])) : typeof e == "string" && this._valueLabel.push(e.replace("{value}", this._valueList[t]));
			else
				for (var t = 0, n = this._valueList.length; t < n; t++) this._valueLabel.push(this.numAddCommas(this._valueList[t]))
		},
		getExtremum: function() {
			return this._calculateValue(), {
				min: this._min,
				max: this._max
			}
		},
		refresh: function(e, t) {
			e && (this.option = this.reformOption(e), this.option.axisLabel.textStyle = o.merge(this.option.axisLabel.textStyle || {}, this.ecTheme.textStyle), this.series = t), this.zr && (this.clear(), this._buildShape())
		},
		getCoord: function(e) {
			e = e < this._min ? this._min : e, e = e > this._max ? this._max : e;
			var t;
			return this.isHorizontal() ? t = this.grid.getX() + (e - this._min) / (this._max - this._min) * this.grid.getWidth() : t = this.grid.getYend() - (e - this._min) / (this._max - this._min) * this.grid.getHeight(), t
		},
		getCoordSize: function(e) {
			return this.isHorizontal() ? Math.abs(e / (this._max - this._min) * this.grid.getWidth()) : Math.abs(e / (this._max - this._min) * this.grid.getHeight())
		},
		getValueFromCoord: function(e) {
			var t;
			return this.isHorizontal() ? (e = e < this.grid.getX() ? this.grid.getX() : e, e = e > this.grid.getXend() ? this.grid.getXend() : e, t = this._min + (e - this.grid.getX()) / this.grid.getWidth() * (this._max - this._min)) : (e = e < this.grid.getY() ? this.grid.getY() : e, e = e > this.grid.getYend() ? this.grid.getYend() : e, t = this._max - (e - this.grid.getY()) / this.grid.getHeight() * (this._max - this._min)), t.toFixed(2) - 0
		}
	}, o.inherits(u, t), e("../component").define("valueAxis", u), u
}), define("echarts/component/axis", ["require", "./base", "zrender/shape/Line", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/color", "./categoryAxis", "./valueAxis", "../component"], function(e) {
	function u(e, n, r, i, s, o) {
		t.call(this, e, n, r, i, s), this.axisType = o, this._axisList = [], this.refresh(i)
	}
	var t = e("./base"),
		n = e("zrender/shape/Line"),
		r = e("../config"),
		i = e("../util/ecData"),
		s = e("zrender/tool/util"),
		o = e("zrender/tool/color");
	return u.prototype = {
		type: r.COMPONENT_TYPE_AXIS,
		axisBase: {
			_buildAxisLine: function() {
				var e = this.option.axisLine.lineStyle.width,
					t = e / 2,
					r = {
						_axisShape: "axisLine",
						zlevel: this._zlevelBase + 1,
						hoverable: !1
					};
				switch (this.option.position) {
					case "left":
						r.style = {
							xStart: this.grid.getX() - t,
							yStart: this.grid.getYend(),
							xEnd: this.grid.getX() - t,
							yEnd: this.grid.getY(),
							lineCap: "round"
						};
						break;
					case "right":
						r.style = {
							xStart: this.grid.getXend() + t,
							yStart: this.grid.getYend(),
							xEnd: this.grid.getXend() + t,
							yEnd: this.grid.getY(),
							lineCap: "round"
						};
						break;
					case "bottom":
						r.style = {
							xStart: this.grid.getX(),
							yStart: this.grid.getYend() + t,
							xEnd: this.grid.getXend(),
							yEnd: this.grid.getYend() + t,
							lineCap: "round"
						};
						break;
					case "top":
						r.style = {
							xStart: this.grid.getX(),
							yStart: this.grid.getY() - t,
							xEnd: this.grid.getXend(),
							yEnd: this.grid.getY() - t,
							lineCap: "round"
						}
				}
				this.option.name !== "" && (r.style.text = this.option.name, r.style.textPosition = this.option.nameLocation, r.style.textFont = this.getFont(this.option.nameTextStyle), this.option.nameTextStyle.align && (r.style.textAlign = this.option.nameTextStyle.align), this.option.nameTextStyle.baseline && (r.style.textBaseline = this.option.nameTextStyle.baseline), this.option.nameTextStyle.color && (r.style.textColor = this.option.nameTextStyle.color)), r.style.strokeColor = this.option.axisLine.lineStyle.color, r.style.lineWidth = e, this.isHorizontal() ? r.style.yStart = r.style.yEnd = this.subPixelOptimize(r.style.yEnd, e) : r.style.xStart = r.style.xEnd = this.subPixelOptimize(r.style.xEnd, e), r.style.lineType = this.option.axisLine.lineStyle.type, r = new n(r), this.shapeList.push(r)
			},
			_axisLabelClickable: function(e, t) {
				return e ? (i.pack(t, undefined, -1, undefined, -1, t.style.text), t.hoverable = !0, t.clickable = !0, t.highlightStyle = {
					color: o.lift(t.style.color, 1),
					brushType: "fill"
				}, t) : t
			},
			refixAxisShape: function(e, t) {
				if (!this.option.axisLine.onZero) return;
				var n;
				if (this.isHorizontal() && typeof t != "undefined")
					for (var r = 0, i = this.shapeList.length; r < i; r++) this.shapeList[r]._axisShape == "axisLine" ? (this.shapeList[r].style.yStart = this.shapeList[r].style.yEnd = this.subPixelOptimize(t, this.shapeList[r].stylelineWidth), this.zr.modShape(this.shapeList[r].id)) : this.shapeList[r]._axisShape == "axisTick" && (n = this.shapeList[r].style.yEnd - this.shapeList[r].style.yStart, this.shapeList[r].style.yStart = t - n, this.shapeList[r].style.yEnd = t, this.zr.modShape(this.shapeList[r].id));
				if (!this.isHorizontal() && typeof e != "undefined")
					for (var r = 0, i = this.shapeList.length; r < i; r++) this.shapeList[r]._axisShape == "axisLine" ? (this.shapeList[r].style.xStart = this.shapeList[r].style.xEnd = this.subPixelOptimize(e, this.shapeList[r].stylelineWidth), this.zr.modShape(this.shapeList[r].id)) : this.shapeList[r]._axisShape == "axisTick" && (n = this.shapeList[r].style.xEnd - this.shapeList[r].style.xStart, this.shapeList[r].style.xStart = e, this.shapeList[r].style.xEnd = e + n, this.zr.modShape(this.shapeList[r].id))
			},
			getPosition: function() {
				return this.option.position
			},
			isHorizontal: function() {
				return this.option.position == "bottom" || this.option.position == "top"
			}
		},
		reformOption: function(e) {
			!e || e instanceof Array && e.length === 0 ? e = [{
				type: r.COMPONENT_TYPE_AXIS_VALUE
			}] : e instanceof Array || (e = [e]), e.length > 2 && (e = [e[0], e[1]]);
			if (this.axisType == "xAxis") {
				if (!e[0].position || e[0].position != "bottom" && e[0].position != "top") e[0].position = "bottom";
				e.length > 1 && (e[1].position = e[0].position == "bottom" ? "top" : "bottom");
				for (var t = 0, n = e.length; t < n; t++) e[t].type = e[t].type || "category", e[t].xAxisIndex = t, e[t].yAxisIndex = -1
			} else {
				if (!e[0].position || e[0].position != "left" && e[0].position != "right") e[0].position = "left";
				e.length > 1 && (e[1].position = e[0].position == "left" ? "right" : "left");
				for (var t = 0, n = e.length; t < n; t++) e[t].type = e[t].type || "value", e[t].xAxisIndex = -1, e[t].yAxisIndex = t
			}
			return e
		},
		refresh: function(t) {
			var n;
			t && (this.option = t, this.axisType == "xAxis" ? (this.option.xAxis = this.reformOption(t.xAxis), n = this.option.xAxis) : (this.option.yAxis = this.reformOption(t.yAxis), n = this.option.yAxis), this.series = t.series);
			var r = e("./categoryAxis"),
				i = e("./valueAxis"),
				s = Math.max(n && n.length || 0, this._axisList.length);
			for (var o = 0; o < s; o++) this._axisList[o] && t && (!n[o] || this._axisList[o].type != n[o].type) && (this._axisList[o].dispose && this._axisList[o].dispose(), this._axisList[o] = !1), this._axisList[o] ? this._axisList[o].refresh && this._axisList[o].refresh(n ? n[o] : !1, this.series) : n && n[o] && (this._axisList[o] = n[o].type == "category" ? new r(this.ecTheme, this.messageCenter, this.zr, n[o], this.myChart, this.axisBase) : new i(this.ecTheme, this.messageCenter, this.zr, n[o], this.myChart, this.axisBase, this.series))
		},
		getAxis: function(e) {
			return this._axisList[e]
		},
		clear: function() {
			for (var e = 0, t = this._axisList.length; e < t; e++) this._axisList[e].dispose && this._axisList[e].dispose();
			this._axisList = []
		}
	}, s.inherits(u, t), e("../component").define("axis", u), u
}), define("echarts/component/grid", ["require", "./base", "zrender/shape/Rectangle", "../config", "zrender/tool/util", "../component"], function(e) {
	function s(e, n, r, i, s) {
		t.call(this, e, n, r, i, s), this.refresh(i)
	}
	var t = e("./base"),
		n = e("zrender/shape/Rectangle"),
		r = e("../config"),
		i = e("zrender/tool/util");
	return s.prototype = {
		type: r.COMPONENT_TYPE_GRID,
		getX: function() {
			return this._x
		},
		getY: function() {
			return this._y
		},
		getWidth: function() {
			return this._width
		},
		getHeight: function() {
			return this._height
		},
		getXend: function() {
			return this._x + this._width
		},
		getYend: function() {
			return this._y + this._height
		},
		getArea: function() {
			return {
				x: this._x,
				y: this._y,
				width: this._width,
				height: this._height
			}
		},
		refixAxisShape: function(e) {
			var t, n, i = e.xAxis._axisList.concat(e.yAxis._axisList),
				s = i.length,
				o;
			while (s--) o = i[s], o.type == r.COMPONENT_TYPE_AXIS_VALUE && o._min < 0 && o._max >= 0 && (o.isHorizontal() ? t = o.getCoord(0) : n = o.getCoord(0));
			if (typeof t != "undefined" || typeof n != "undefined") {
				s = i.length;
				while (s--) i[s].refixAxisShape(t, n)
			}
		},
		refresh: function(e) {
			if (e || this._zrWidth != this.zr.getWidth() || this._zrHeight != this.zr.getHeight()) {
				this.clear(), this.option = e || this.option, this.option.grid = this.reformOption(this.option.grid);
				var t = this.option.grid;
				this._zrWidth = this.zr.getWidth(), this._zrHeight = this.zr.getHeight(), this._x = this.parsePercent(t.x, this._zrWidth), this._y = this.parsePercent(t.y, this._zrHeight);
				var r = this.parsePercent(t.x2, this._zrWidth),
					i = this.parsePercent(t.y2, this._zrHeight);
				typeof t.width == "undefined" ? this._width = this._zrWidth - this._x - r : this._width = this.parsePercent(t.width, this._zrWidth), typeof t.height == "undefined" ? this._height = this._zrHeight - this._y - i : this._height = this.parsePercent(t.height, this._zrHeight), this._x = this.subPixelOptimize(this._x, t.borderWidth), this._y = this.subPixelOptimize(this._y, t.borderWidth), this.shapeList.push(new n({
					zlevel: this._zlevelBase,
					hoverable: !1,
					style: {
						x: this._x,
						y: this._y,
						width: this._width,
						height: this._height,
						brushType: t.borderWidth > 0 ? "both" : "fill",
						color: t.backgroundColor,
						strokeColor: t.borderColor,
						lineWidth: t.borderWidth
					}
				})), this.zr.addShape(this.shapeList[0])
			}
		}
	}, i.inherits(s, t), e("../component").define("grid", s), s
}), define("echarts/component/dataZoom", ["require", "./base", "zrender/shape/Rectangle", "zrender/shape/Polygon", "../util/shape/Icon", "../config", "zrender/tool/util", "../component", "../component"], function(e) {
	function u(e, n, r, i, s) {
		t.call(this, e, n, r, i, s);
		var o = this;
		o._ondrift = function(e, t) {
			return o.__ondrift(this, e, t)
		}, o._ondragend = function() {
			return o.__ondragend()
		}, this._fillerSize = 28, this._handleSize = 8, this._isSilence = !1, this._zoom = {}, this.option.dataZoom = this.reformOption(this.option.dataZoom), this.zoomOption = this.option.dataZoom, this._location = this._getLocation(), this._zoom = this._getZoom(), this._backupData(), this.option.dataZoom.show && this._buildShape(), this._syncData()
	}
	var t = e("./base"),
		n = e("zrender/shape/Rectangle"),
		r = e("zrender/shape/Polygon"),
		i = e("../util/shape/Icon"),
		s = e("../config"),
		o = e("zrender/tool/util");
	return u.prototype = {
		type: s.COMPONENT_TYPE_DATAZOOM,
		_buildShape: function() {
			this._buildBackground(), this._buildFiller(), this._buildHandle(), this._buildFrame();
			for (var e = 0, t = this.shapeList.length; e < t; e++) this.zr.addShape(this.shapeList[e]);
			this._syncFrameShape()
		},
		_getLocation: function() {
			var e, t, n, r, i = this.component.grid;
			return this.zoomOption.orient == "horizontal" ? (n = this.zoomOption.width || i.getWidth(), r = this.zoomOption.height || this._fillerSize, e = typeof this.zoomOption.x != "undefined" ? this.zoomOption.x : i.getX(), t = typeof this.zoomOption.y != "undefined" ? this.zoomOption.y : this.zr.getHeight() - r - 2) : (n = this.zoomOption.width || this._fillerSize, r = this.zoomOption.height || i.getHeight(), e = typeof this.zoomOption.x != "undefined" ? this.zoomOption.x : 2, t = typeof this.zoomOption.y != "undefined" ? this.zoomOption.y : i.getY()), {
				x: e,
				y: t,
				width: n,
				height: r
			}
		},
		_getZoom: function() {
			var e = this.option.series,
				t = this.option.xAxis;
			t && !(t instanceof Array) && (t = [t], this.option.xAxis = t);
			var n = this.option.yAxis;
			n && !(n instanceof Array) && (n = [n], this.option.yAxis = n);
			var r = [],
				i, o, u = this.zoomOption.xAxisIndex;
			if (t && typeof u == "undefined") {
				i = [];
				for (var a = 0, f = t.length; a < f; a++)(t[a].type == "category" || typeof t[a].type == "undefined") && i.push(a)
			} else u instanceof Array ? i = u : typeof u != "undefined" ? i = [u] : i = [];
			u = this.zoomOption.yAxisIndex;
			if (n && typeof u == "undefined") {
				o = [];
				for (var a = 0, f = n.length; a < f; a++) n[a].type == "category" && o.push(a)
			} else u instanceof Array ? o = u : typeof u != "undefined" ? o = [u] : o = [];
			for (var a = 0, f = e.length; a < f; a++) {
				if (e[a].type != s.CHART_TYPE_LINE && e[a].type != s.CHART_TYPE_BAR && e[a].type != s.CHART_TYPE_SCATTER && e[a].type != s.CHART_TYPE_K) continue;
				for (var l = 0, c = i.length; l < c; l++)
					if (i[l] == (e[a].xAxisIndex || 0)) {
						r.push(a);
						break
					}
				for (var l = 0, c = o.length; l < c; l++)
					if (o[l] == (e[a].yAxisIndex || 0)) {
						r.push(a);
						break
					}
				e[a].type == s.CHART_TYPE_SCATTER && typeof this.zoomOption.xAxisIndex == "undefined" && typeof this.zoomOption.yAxisIndex == "undefined" && r.push(a)
			}
			var h = typeof this._zoom.start != "undefined" ? this._zoom.start : typeof this.zoomOption.start != "undefined" ? this.zoomOption.start : 0,
				p = typeof this._zoom.end != "undefined" ? this._zoom.end : typeof this.zoomOption.end != "undefined" ? this.zoomOption.end : 100;
			h > p && (h += p, p = h - p, h -= p);
			var d = Math.round((p - h) / 100 * (this.zoomOption.orient == "horizontal" ? this._location.width : this._location.height));
			return {
				start: h,
				end: p,
				start2: 0,
				end2: 100,
				size: d,
				xAxisIndex: i,
				yAxisIndex: o,
				seriesIndex: r,
				scatterMap: this._zoom.scatterMap || {}
			}
		},
		_backupData: function() {
			this._originalData = {
				xAxis: {},
				yAxis: {},
				series: {}
			};
			var e = this.option.xAxis,
				t = this._zoom.xAxisIndex;
			for (var n = 0, r = t.length; n < r; n++) this._originalData.xAxis[t[n]] = e[t[n]].data;
			var i = this.option.yAxis,
				o = this._zoom.yAxisIndex;
			for (var n = 0, r = o.length; n < r; n++) this._originalData.yAxis[o[n]] = i[o[n]].data;
			var u = this.option.series,
				a = this._zoom.seriesIndex,
				f;
			for (var n = 0, r = a.length; n < r; n++) f = u[a[n]], this._originalData.series[a[n]] = f.data, f.type == s.CHART_TYPE_SCATTER && this._calculScatterMap(a[n])
		},
		_calculScatterMap: function(t) {
			this._zoom.scatterMap = this._zoom.scatterMap || {}, this._zoom.scatterMap[t] = this._zoom.scatterMap[t] || {};
			var n = e("../component"),
				r = n.get("axis"),
				i = o.clone(this.option.xAxis);
			i instanceof Array ? (i[0].type = "value", i[0].boundary = [0, 0], i[1] && (i[1].type = "value", i[1].boundary = [0, 0])) : (i.type = "value", i.boundary = [0, 0]);
			var s = new r(this.ecTheme, null, !1, {
					xAxis: i,
					series: this.option.series
				}, this, "xAxis"),
				u = this.option.series[t].xAxisIndex || 0;
			this._zoom.scatterMap[t].x = s.getAxis(u).getExtremum(), s.dispose(), i = o.clone(this.option.yAxis), i instanceof Array ? (i[0].type = "value", i[1] && (i[1].type = "value", i[1].boundary = [0, 0])) : (i.type = "value", i.boundary = [0, 0]), s = new r(this.ecTheme, null, !1, {
				yAxis: i,
				series: this.option.series
			}, this, "yAxis"), u = this.option.series[t].yAxisIndex || 0, this._zoom.scatterMap[t].y = s.getAxis(u).getExtremum(), s.dispose()
		},
		_buildBackground: function() {
			var e = this._location.width,
				t = this._location.height;
			this.shapeList.push(new n({
				zlevel: this._zlevelBase,
				hoverable: !1,
				style: {
					x: this._location.x,
					y: this._location.y,
					width: e,
					height: t,
					color: this.zoomOption.backgroundColor
				}
			}));
			var i = 0,
				o = this._originalData.xAxis,
				u = this._zoom.xAxisIndex;
			for (var a = 0, f = u.length; a < f; a++) i = Math.max(i, o[u[a]].length);
			var l = this._originalData.yAxis,
				c = this._zoom.yAxisIndex;
			for (var a = 0, f = c.length; a < f; a++) i = Math.max(i, l[c[a]].length);
			var h = this._zoom.seriesIndex[0],
				p = this._originalData.series[h],
				d = Number.MIN_VALUE,
				v = Number.MAX_VALUE,
				m;
			for (var a = 0, f = p.length; a < f; a++) m = typeof p[a] != "undefined" ? typeof p[a].value != "undefined" ? p[a].value : p[a] : 0, this.option.series[h].type == s.CHART_TYPE_K && (m = m[1]), isNaN(m) && (m = 0), d = Math.max(d, m), v = Math.min(v, m);
			var g = d - v,
				y = [],
				b = e / (i - (i > 1 ? 1 : 0)),
				w = t / (i - (i > 1 ? 1 : 0)),
				E = 1;
			this.zoomOption.orient == "horizontal" && b < 1 ? E = Math.floor(i * 3 / e) : this.zoomOption.orient == "vertical" && w < 1 && (E = Math.floor(i * 3 / t));
			for (var a = 0, f = i; a < f; a += E) m = typeof p[a] != "undefined" ? typeof p[a].value != "undefined" ? p[a].value : p[a] : 0, this.option.series[h].type == s.CHART_TYPE_K && (m = m[1]), isNaN(m) && (m = 0), this.zoomOption.orient == "horizontal" ? y.push([this._location.x + b * a, this._location.y + t - 1 - Math.round((m - v) / g * (t - 10))]) : y.push([this._location.x + 1 + Math.round((m - v) / g * (e - 10)), this._location.y + w * a]);
			this.zoomOption.orient == "horizontal" ? (y.push([this._location.x + e, this._location.y + t]), y.push([this._location.x, this._location.y + t])) : (y.push([this._location.x, this._location.y + t]), y.push([this._location.x, this._location.y])), this.shapeList.push(new r({
				zlevel: this._zlevelBase,
				style: {
					pointList: y,
					color: this.zoomOption.dataBackgroundColor
				},
				hoverable: !1
			}))
		},
		_buildFiller: function() {
			this._fillerShae = {
				zlevel: this._zlevelBase,
				draggable: !0,
				ondrift: this._ondrift,
				ondragend: this._ondragend,
				_type: "filler"
			}, this.zoomOption.orient == "horizontal" ? this._fillerShae.style = {
				x: this._location.x + Math.round(this._zoom.start / 100 * this._location.width) + this._handleSize,
				y: this._location.y,
				width: this._zoom.size - this._handleSize * 2,
				height: this._location.height,
				color: this.zoomOption.fillerColor,
				text: ":::",
				textPosition: "inside"
			} : this._fillerShae.style = {
				x: this._location.x,
				y: this._location.y + Math.round(this._zoom.start / 100 * this._location.height) + this._handleSize,
				width: this._location.width,
				height: this._zoom.size - this._handleSize * 2,
				color: this.zoomOption.fillerColor,
				text: "::",
				textPosition: "inside"
			}, this._fillerShae.highlightStyle = {
				brushType: "fill",
				color: "rgba(0,0,0,0)"
			}, this._fillerShae = new n(this._fillerShae), this.shapeList.push(this._fillerShae)
		},
		_buildHandle: function() {
			this._startShape = {
				zlevel: this._zlevelBase,
				draggable: !0,
				style: {
					iconType: "rectangle",
					x: this._location.x,
					y: this._location.y,
					width: this._handleSize,
					height: this._handleSize,
					color: this.zoomOption.handleColor,
					text: "=",
					textPosition: "inside"
				},
				highlightStyle: {
					brushType: "fill"
				},
				ondrift: this._ondrift,
				ondragend: this._ondragend
			}, this.zoomOption.orient == "horizontal" ? (this._startShape.style.height = this._location.height, this._endShape = o.clone(this._startShape), this._startShape.style.x = this._fillerShae.style.x - this._handleSize, this._endShape.style.x = this._fillerShae.style.x + this._fillerShae.style.width) : (this._startShape.style.width = this._location.width, this._endShape = o.clone(this._startShape), this._startShape.style.y = this._fillerShae.style.y - this._handleSize, this._endShape.style.y = this._fillerShae.style.y + this._fillerShae.style.height), this._startShape = new i(this._startShape), this._endShape = new i(this._endShape), this.shapeList.push(this._startShape), this.shapeList.push(this._endShape)
		},
		_buildFrame: function() {
			var e = this.subPixelOptimize(this._location.x, 1),
				t = this.subPixelOptimize(this._location.y, 1);
			this._startFrameShape = {
				zlevel: this._zlevelBase,
				hoverable: !1,
				style: {
					x: e,
					y: t,
					width: this._location.width - (e > this._location.x ? 1 : 0),
					height: this._location.height - (t > this._location.y ? 1 : 0),
					lineWidth: 1,
					brushType: "stroke",
					strokeColor: this.zoomOption.handleColor
				}
			}, this._endFrameShape = o.clone(this._startFrameShape), this._startFrameShape = new n(this._startFrameShape), this._endFrameShape = new n(this._endFrameShape), this.shapeList.push(this._startFrameShape), this.shapeList.push(this._endFrameShape);
			return
		},
		_syncHandleShape: function() {
			this.zoomOption.orient == "horizontal" ? (this._startShape.style.x = this._fillerShae.style.x - this._handleSize, this._endShape.style.x = this._fillerShae.style.x + this._fillerShae.style.width, this._zoom.start = Math.floor((this._startShape.style.x - this._location.x) / this._location.width * 100), this._zoom.end = Math.ceil((this._endShape.style.x + this._handleSize - this._location.x) / this._location.width * 100)) : (this._startShape.style.y = this._fillerShae.style.y - this._handleSize, this._endShape.style.y = this._fillerShae.style.y + this._fillerShae.style.height, this._zoom.start = Math.floor((this._startShape.style.y - this._location.y) / this._location.height * 100), this._zoom.end = Math.ceil((this._endShape.style.y + this._handleSize - this._location.y) / this._location.height * 100)), this.zr.modShape(this._startShape.id), this.zr.modShape(this._endShape.id), this._syncFrameShape(), this.zr.refresh()
		},
		_syncFillerShape: function() {
			var e, t;
			this.zoomOption.orient == "horizontal" ? (e = this._startShape.style.x, t = this._endShape.style.x, this._fillerShae.style.x = Math.min(e, t) + this._handleSize, this._fillerShae.style.width = Math.abs(e - t) - this._handleSize, this._zoom.start = Math.floor((Math.min(e, t) - this._location.x) / this._location.width * 100), this._zoom.end = Math.ceil((Math.max(e, t) + this._handleSize - this._location.x) / this._location.width * 100)) : (e = this._startShape.style.y, t = this._endShape.style.y, this._fillerShae.style.y = Math.min(e, t) + this._handleSize, this._fillerShae.style.height = Math.abs(e - t) - this._handleSize, this._zoom.start = Math.floor((Math.min(e, t) - this._location.y) / this._location.height * 100), this._zoom.end = Math.ceil((Math.max(e, t) + this._handleSize - this._location.y) / this._location.height * 100)), this.zr.modShape(this._fillerShae.id), this._syncFrameShape(), this.zr.refresh()
		},
		_syncFrameShape: function() {
			this.zoomOption.orient == "horizontal" ? (this._startFrameShape.style.width = this._fillerShae.style.x - this._location.x, this._endFrameShape.style.x = this._fillerShae.style.x + this._fillerShae.style.width, this._endFrameShape.style.width = this._location.x + this._location.width - this._endFrameShape.style.x) : (this._startFrameShape.style.height = this._fillerShae.style.y - this._location.y, this._endFrameShape.style.y = this._fillerShae.style.y + this._fillerShae.style.height, this._endFrameShape.style.height = this._location.y + this._location.height - this._endFrameShape.style.y), this.zr.modShape(this._startFrameShape.id), this.zr.modShape(this._endFrameShape.id)
		},
		_syncShape: function() {
			if (!this.zoomOption.show) return;
			this.zoomOption.orient == "horizontal" ? (this._startShape.style.x = this._location.x + this._zoom.start / 100 * this._location.width, this._endShape.style.x = this._location.x + this._zoom.end / 100 * this._location.width - this._handleSize, this._fillerShae.style.x = this._startShape.style.x + this._handleSize, this._fillerShae.style.width = this._endShape.style.x - this._startShape.style.x - this._handleSize) : (this._startShape.style.y = this._location.y + this._zoom.start / 100 * this._location.height, this._endShape.style.y = this._location.y + this._zoom.end / 100 * this._location.height - this._handleSize, this._fillerShae.style.y = this._startShape.style.y + this._handleSize, this._fillerShae.style.height = this._endShape.style.y - this._startShape.style.y - this._handleSize), this.zr.modShape(this._startShape.id), this.zr.modShape(this._endShape.id), this.zr.modShape(this._fillerShae.id), this._syncFrameShape(), this.zr.refresh()
		},
		_syncData: function(e) {
			var t, n, r, i, o;
			for (var u in this._originalData) {
				t = this._originalData[u];
				for (var a in t) {
					o = t[a];
					if (typeof o == "undefined") continue;
					i = o.length, n = Math.floor(this._zoom.start / 100 * i), r = Math.ceil(this._zoom.end / 100 * i), this.option[u][a].type != s.CHART_TYPE_SCATTER ? this.option[u][a].data = o.slice(n, r) : this.option[u][a].data = this._synScatterData(a, o)
				}
			}!this._isSilence && (this.zoomOption.realtime || e) && this.messageCenter.dispatch(s.EVENT.DATA_ZOOM, null, {
				zoom: this._zoom
			}, this.myChart)
		},
		_synScatterData: function(e, t) {
			if (this._zoom.start === 0 && this._zoom.end == 100 && this._zoom.start2 === 0 && this._zoom.end2 == 100) return t;
			var n = [],
				r = this._zoom.scatterMap[e],
				i, s, o, u, a;
			this.zoomOption.orient == "horizontal" ? (i = r.x.max - r.x.min, s = this._zoom.start / 100 * i + r.x.min, o = this._zoom.end / 100 * i + r.x.min, i = r.y.max - r.y.min, u = this._zoom.start2 / 100 * i + r.y.min, a = this._zoom.end2 / 100 * i + r.y.min) : (i = r.x.max - r.x.min, s = this._zoom.start2 / 100 * i + r.x.min, o = this._zoom.end2 / 100 * i + r.x.min, i = r.y.max - r.y.min, u = this._zoom.start / 100 * i + r.y.min, a = this._zoom.end / 100 * i + r.y.min);
			var f;
			for (var l = 0, c = t.length; l < c; l++) f = t[l].value || t[l], f[0] >= s && f[0] <= o && f[1] >= u && f[1] <= a && n.push(t[l]);
			return n
		},
		__ondrift: function(e, t, n) {
			this.zoomOption.zoomLock && (e = this._fillerShae);
			var r = e._type == "filler" ? this._handleSize : 0;
			return this.zoomOption.orient == "horizontal" ? e.style.x + t - r <= this._location.x ? e.style.x = this._location.x + r : e.style.x + t + e.style.width + r >= this._location.x + this._location.width ? e.style.x = this._location.x + this._location.width - e.style.width - r : e.style.x += t : e.style.y + n - r <= this._location.y ? e.style.y = this._location.y + r : e.style.y + n + e.style.height + r >= this._location.y + this._location.height ? e.style.y = this._location.y + this._location.height - e.style.height - r : e.style.y += n, e._type == "filler" ? this._syncHandleShape() : this._syncFillerShape(), this.zoomOption.realtime && this._syncData(), !0
		},
		__ondragend: function() {
			this.isDragend = !0
		},
		ondragend: function(e, t) {
			if (!this.isDragend || !e.target) return;
			!this.zoomOption.realtime && this._syncData(), t.dragOut = !0, t.dragIn = !0, !this._isSilence && !this.zoomOption.realtime && this.messageCenter.dispatch(s.EVENT.DATA_ZOOM, null, {
				zoom: this._zoom
			}, this.myChart), t.needRefresh = !1, this.isDragend = !1;
			return
		},
		ondataZoom: function(e, t) {
			t.needRefresh = !0;
			return
		},
		absoluteZoom: function(e) {
			this._zoom.start = e.start, this._zoom.end = e.end, this._zoom.start2 = e.start2, this._zoom.end2 = e.end2, this._syncShape(), this._syncData(!0);
			return
		},
		rectZoom: function(e) {
			if (!e) return this._zoom.start = this._zoom.start2 = 0, this._zoom.end = this._zoom.end2 = 100, this._syncShape(), this._syncData(!0), this._zoom;
			var t = this.component.grid.getArea(),
				n = {
					x: e.x,
					y: e.y,
					width: e.width,
					height: e.height
				};
			n.width < 0 && (n.x += n.width, n.width = -n.width), n.height < 0 && (n.y += n.height, n.height = -n.height);
			if (n.x > t.x + t.width || n.y > t.y + t.height) return !1;
			n.x < t.x && (n.x = t.x), n.x + n.width > t.x + t.width && (n.width = t.x + t.width - n.x), n.y + n.height > t.y + t.height && (n.height = t.y + t.height - n.y);
			var r, i = (n.x - t.x) / t.width,
				s = 1 - (n.x + n.width - t.x) / t.width,
				o = 1 - (n.y + n.height - t.y) / t.height,
				u = (n.y - t.y) / t.height;
			return this.zoomOption.orient == "horizontal" ? (r = this._zoom.end - this._zoom.start, this._zoom.start += r * i, this._zoom.end -= r * s, r = this._zoom.end2 - this._zoom.start2, this._zoom.start2 += r * o, this._zoom.end2 -= r * u) : (r = this._zoom.end - this._zoom.start, this._zoom.start += r * o, this._zoom.end -= r * u, r = this._zoom.end2 - this._zoom.start2, this._zoom.start2 += r * i, this._zoom.end2 -= r * s), this._syncShape(), this._syncData(!0), this._zoom
		},
		syncBackupData: function(e) {
			var t, n = this._originalData.series,
				r = e.series,
				i;
			for (var s = 0, o = r.length; s < o; s++) {
				i = r[s].data, n[s] ? t = Math.floor(this._zoom.start / 100 * n[s].length) : t = 0;
				for (var u = 0, a = i.length; u < a; u++) n[s] && (n[s][u + t] = i[u])
			}
		},
		syncOption: function(e) {
			this.silence(!0), this.option = e, this.clear(), this._location = this._getLocation(), this._zoom = this._getZoom(), this._backupData(), this.option.dataZoom && this.option.dataZoom.show && this._buildShape(), this._syncData(), this.silence(!1)
		},
		silence: function(e) {
			this._isSilence = e
		},
		getRealDataIndex: function(e, t) {
			if (!this._originalData || this._zoom.start === 0 && this._zoom.end == 100) return t;
			var n = this._originalData.series;
			return n[e] ? Math.floor(this._zoom.start / 100 * n[e].length) + t : -1
		},
		resize: function() {
			this.clear(), this._location = this._getLocation(), this._zoom = this._getZoom(), this.option.dataZoom.show && this._buildShape()
		}
	}, o.inherits(u, t), e("../component").define("dataZoom", u), u
}), define("echarts/util/shape/HandlePolygon", ["require", "zrender/shape/Base", "zrender/shape/Polygon", "zrender/tool/util"], function(e) {
	function i(e) {
		t.call(this, e)
	}
	var t = e("zrender/shape/Base"),
		n = e("zrender/shape/Polygon"),
		r = e("zrender/tool/util");
	return i.prototype = {
		type: "handle-polygon",
		buildPath: function(e, t) {
			n.prototype.buildPath(e, t)
		},
		isCover: function(e, t) {
			var n = this.getTansform(e, t);
			e = n[0], t = n[1];
			var r = this.style.rect;
			return e >= r.x && e <= r.x + r.width && t >= r.y && t <= r.y + r.height ? !0 : !1
		}
	}, r.inherits(i, t), i
}), define("echarts/component/dataRange", ["require", "./base", "zrender/shape/Text", "zrender/shape/Rectangle", "../util/shape/HandlePolygon", "../config", "zrender/tool/util", "zrender/tool/area", "zrender/tool/color", "zrender/tool/color", "../component"], function(e) {
	function f(e, n, r, i, s) {
		if (typeof this.query(i, "dataRange.min") == "undefined" || typeof this.query(i, "dataRange.max") == "undefined") {
			console.error("option.dataRange.min or option.dataRange.max has not been defined.");
			return
		}
		t.call(this, e, n, r, i, s);
		var o = this;
		o._ondrift = function(e, t) {
			return o.__ondrift(this, e, t)
		}, o._ondragend = function() {
			return o.__ondragend()
		}, o._dataRangeSelected = function(e) {
			return o.__dataRangeSelected(e)
		}, this._selectedMap = {}, this._range = {}, this.refresh(i)
	}
	var t = e("./base"),
		n = e("zrender/shape/Text"),
		r = e("zrender/shape/Rectangle"),
		i = e("../util/shape/HandlePolygon"),
		s = e("../config"),
		o = e("zrender/tool/util"),
		u = e("zrender/tool/area"),
		a = e("zrender/tool/color");
	return f.prototype = {
		type: s.COMPONENT_TYPE_DATARANGE,
		_textGap: 10,
		_buildShape: function() {
			this._itemGroupLocation = this._getItemGroupLocation(), this._buildBackground(), this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable ? this._buildGradient() : this._buildItem();
			for (var e = 0, t = this.shapeList.length; e < t; e++) this.zr.addShape(this.shapeList[e]);
			this._syncShapeFromRange()
		},
		_buildItem: function() {
			var e = this._valueTextList,
				t = e.length,
				i, s, o, a = this.getFont(this.dataRangeOption.textStyle),
				f = this._itemGroupLocation.x,
				l = this._itemGroupLocation.y,
				c = this.dataRangeOption.itemWidth,
				h = this.dataRangeOption.itemHeight,
				p = this.dataRangeOption.itemGap,
				d = u.getTextHeight("国", a),
				v;
			this.dataRangeOption.orient == "vertical" && this.dataRangeOption.x == "right" && (f = this._itemGroupLocation.x + this._itemGroupLocation.width - c);
			var m = !0;
			this.dataRangeOption.text && (m = !1, this.dataRangeOption.text[0] && (o = this._getTextShape(f, l, this.dataRangeOption.text[0]), this.dataRangeOption.orient == "horizontal" ? f += u.getTextWidth(this.dataRangeOption.text[0], a) + this._textGap : (l += d + this._textGap, o.style.y += d / 2 + this._textGap, o.style.textBaseline = "bottom"), this.shapeList.push(new n(o))));
			for (var g = 0; g < t; g++) i = e[g], v = this.getColor((t - g) * this._gap + this.dataRangeOption.min), s = this._getItemShape(f, l, c, h, this._selectedMap[g] ? v : "#ccc"), s._idx = g, s.onclick = this._dataRangeSelected, this.shapeList.push(new r(s)), m && (o = {
				zlevel: this._zlevelBase,
				style: {
					x: f + c + 5,
					y: l,
					color: this._selectedMap[g] ? this.dataRangeOption.textStyle.color : "#ccc",
					text: e[g],
					textFont: a,
					textBaseline: "top"
				},
				highlightStyle: {
					brushType: "fill"
				},
				clickable: !0
			}, this.dataRangeOption.orient == "vertical" && this.dataRangeOption.x == "right" && (o.style.x -= c + 10, o.style.textAlign = "right"), o._idx = g, o.onclick = this._dataRangeSelected, this.shapeList.push(new n(o))), this.dataRangeOption.orient == "horizontal" ? f += c + (m ? 5 : 0) + (m ? u.getTextWidth(i, a) : 0) + p : l += h + p;
			!m && this.dataRangeOption.text[1] && (this.dataRangeOption.orient == "horizontal" ? f = f - p + this._textGap : l = l - p + this._textGap, o = this._getTextShape(f, l, this.dataRangeOption.text[1]), this.dataRangeOption.orient != "horizontal" && (o.style.y -= 5, o.style.textBaseline = "top"), this.shapeList.push(new n(o)))
		},
		_buildGradient: function() {
			var t, i, s = this.getFont(this.dataRangeOption.textStyle),
				o = this._itemGroupLocation.x,
				a = this._itemGroupLocation.y,
				f = this.dataRangeOption.itemWidth,
				l = this.dataRangeOption.itemHeight,
				c = u.getTextHeight("国", s),
				h = !0;
			this.dataRangeOption.text && (h = !1, this.dataRangeOption.text[0] && (i = this._getTextShape(o, a, this.dataRangeOption.text[0]), this.dataRangeOption.orient == "horizontal" ? o += u.getTextWidth(this.dataRangeOption.text[0], s) + this._textGap : (a += c + this._textGap, i.style.y += c / 2 + this._textGap, i.style.textBaseline = "bottom"), this.shapeList.push(new n(i))));
			var p = e("zrender/tool/color"),
				d = 1 / (this.dataRangeOption.color.length - 1),
				v = [];
			for (var m = 0, g = this.dataRangeOption.color.length; m < g; m++) v.push([m * d, this.dataRangeOption.color[m]]);
			this.dataRangeOption.orient == "horizontal" ? (t = {
				zlevel: this._zlevelBase,
				style: {
					x: o,
					y: a,
					width: f * 10,
					height: l,
					color: p.getLinearGradient(o, a, o + f * 10, a, v)
				},
				hoverable: !1
			}, o += f * 10 + this._textGap) : (t = {
				zlevel: this._zlevelBase,
				style: {
					x: o,
					y: a,
					width: f,
					height: l * 10,
					color: p.getLinearGradient(o, a, o, a + l * 10, v)
				},
				hoverable: !1
			}, a += l * 10 + this._textGap), this.shapeList.push(new r(t)), this.dataRangeOption.calculable && (this._calculableLocation = t.style, this._buildFiller(), this._bulidMask(), this._bulidHandle()), !h && this.dataRangeOption.text[1] && (i = this._getTextShape(o, a, this.dataRangeOption.text[1]), this.shapeList.push(new n(i)))
		},
		_buildFiller: function() {
			this._fillerShae = {
				zlevel: this._zlevelBase + 1,
				style: {
					x: this._calculableLocation.x,
					y: this._calculableLocation.y,
					width: this._calculableLocation.width,
					height: this._calculableLocation.height,
					color: "rgba(255,255,255,0)"
				},
				highlightStyle: {
					strokeColor: "rgba(255,255,255,0.5)",
					lineWidth: 1
				},
				draggable: !0,
				ondrift: this._ondrift,
				ondragend: this._ondragend,
				_type: "filler"
			}, this._fillerShae = new r(this._fillerShae), this.shapeList.push(this._fillerShae)
		},
		_bulidHandle: function() {
			var e = this._calculableLocation.x,
				t = this._calculableLocation.y,
				n = this._calculableLocation.width,
				r = this._calculableLocation.height,
				s = this.getFont(this.dataRangeOption.textStyle),
				o = u.getTextHeight("国", s),
				a = Math.max(u.getTextWidth(this._textFormat(this.dataRangeOption.max), s), u.getTextWidth(this._textFormat(this.dataRangeOption.min), s)) + 2,
				f, l, c, h, p, d, v, m;
			this.dataRangeOption.orient == "horizontal" ? this.dataRangeOption.y != "bottom" ? (f = [
				[e, t],
				[e, t + r + o],
				[e - o, t + r + o],
				[e - 1, t + r],
				[e - 1, t]
			], l = e - a / 2 - o, c = t + r + o / 2 + 2, h = {
				x: e - a - o,
				y: t + r,
				width: a + o,
				height: o
			}, p = [
				[e + n, t],
				[e + n, t + r + o],
				[e + n + o, t + r + o],
				[e + n + 1, t + r],
				[e + n + 1, t]
			], d = e + n + a / 2 + o, v = c, m = {
				x: e + n,
				y: t + r,
				width: a + o,
				height: o
			}) : (f = [
				[e, t + r],
				[e, t - o],
				[e - o, t - o],
				[e - 1, t],
				[e - 1, t + r]
			], l = e - a / 2 - o, c = t - o / 2 - 2, h = {
				x: e - a - o,
				y: t - o,
				width: a + o,
				height: o
			}, p = [
				[e + n, t + r],
				[e + n, t - o],
				[e + n + o, t - o],
				[e + n + 1, t],
				[e + n + 1, t + r]
			], d = e + n + a / 2 + o, v = c, m = {
				x: e + n,
				y: t - o,
				width: a + o,
				height: o
			}) : (a += o, this.dataRangeOption.x != "right" ? (f = [
				[e, t],
				[e + n + o, t],
				[e + n + o, t - o],
				[e + n, t - 1],
				[e, t - 1]
			], l = e + n + a / 2 + o / 2, c = t - o / 2, h = {
				x: e + n,
				y: t - o,
				width: a + o,
				height: o
			}, p = [
				[e, t + r],
				[e + n + o, t + r],
				[e + n + o, t + o + r],
				[e + n, t + 1 + r],
				[e, t + r + 1]
			], d = l, v = t + r + o / 2, m = {
				x: e + n,
				y: t + r,
				width: a + o,
				height: o
			}) : (f = [
				[e + n, t],
				[e - o, t],
				[e - o, t - o],
				[e, t - 1],
				[e + n, t - 1]
			], l = e - a / 2 - o / 2, c = t - o / 2, h = {
				x: e - a - o,
				y: t - o,
				width: a + o,
				height: o
			}, p = [
				[e + n, t + r],
				[e - o, t + r],
				[e - o, t + o + r],
				[e, t + 1 + r],
				[e + n, t + r + 1]
			], d = l, v = t + r + o / 2, m = {
				x: e - a - o,
				y: t + r,
				width: a + o,
				height: o
			})), this._startShape = {
				style: {
					pointList: f,
					text: this._textFormat(this.dataRangeOption.max),
					textX: l,
					textY: c,
					color: this.getColor(this.dataRangeOption.max),
					rect: h,
					x: f[0][0],
					y: f[0][1],
					_x: f[0][0],
					_y: f[0][1]
				}
			}, this._startShape.highlightStyle = {
				strokeColor: this._startShape.style.color,
				lineWidth: 1
			}, this._endShape = {
				style: {
					pointList: p,
					text: this._textFormat(this.dataRangeOption.min),
					textX: d,
					textY: v,
					color: this.getColor(this.dataRangeOption.min),
					rect: m,
					x: p[0][0],
					y: p[0][1],
					_x: p[0][0],
					_y: p[0][1]
				}
			}, this._endShape.highlightStyle = {
				strokeColor: this._endShape.style.color,
				lineWidth: 1
			}, this._startShape.zlevel = this._endShape.zlevel = this._zlevelBase + 1, this._startShape.draggable = this._endShape.draggable = !0, this._startShape.ondrift = this._endShape.ondrift = this._ondrift, this._startShape.ondragend = this._endShape.ondragend = this._ondragend, this._startShape.style.textColor = this._endShape.style.textColor = this.dataRangeOption.textStyle.color, this._startShape.style.textAlign = this._endShape.style.textAlign = "center", this._startShape.style.textPosition = this._endShape.style.textPosition = "specific", this._startShape.style.textBaseline = this._endShape.style.textBaseline = "middle", this._startShape.style.width = this._endShape.style.width = 0, this._startShape.style.height = this._endShape.style.height = 0, this._startShape.style.textPosition = this._endShape.style.textPosition = "specific", this._startShape = new i(this._startShape), this._endShape = new i(this._endShape), this.shapeList.push(this._startShape), this.shapeList.push(this._endShape)
		},
		_bulidMask: function() {
			var e = this._calculableLocation.x,
				t = this._calculableLocation.y,
				n = this._calculableLocation.width,
				i = this._calculableLocation.height;
			this._startMask = {
				zlevel: this._zlevelBase + 1,
				style: {
					x: e,
					y: t,
					width: this.dataRangeOption.orient == "horizontal" ? 0 : n,
					height: this.dataRangeOption.orient == "horizontal" ? i : 0,
					color: "#ccc"
				},
				hoverable: !1
			}, this._endMask = {
				zlevel: this._zlevelBase + 1,
				style: {
					x: this.dataRangeOption.orient == "horizontal" ? e + n : e,
					y: this.dataRangeOption.orient == "horizontal" ? t : t + i,
					width: this.dataRangeOption.orient == "horizontal" ? 0 : n,
					height: this.dataRangeOption.orient == "horizontal" ? i : 0,
					color: "#ccc"
				},
				hoverable: !1
			}, this._startMask = new r(this._startMask), this._endMask = new r(this._endMask), this.shapeList.push(this._startMask), this.shapeList.push(this._endMask)
		},
		_buildBackground: function() {
			var e = this.dataRangeOption.padding[0],
				t = this.dataRangeOption.padding[1],
				n = this.dataRangeOption.padding[2],
				i = this.dataRangeOption.padding[3];
			this.shapeList.push(new r({
				zlevel: this._zlevelBase,
				hoverable: !1,
				style: {
					x: this._itemGroupLocation.x - i,
					y: this._itemGroupLocation.y - e,
					width: this._itemGroupLocation.width + i + t,
					height: this._itemGroupLocation.height + e + n,
					brushType: this.dataRangeOption.borderWidth === 0 ? "fill" : "both",
					color: this.dataRangeOption.backgroundColor,
					strokeColor: this.dataRangeOption.borderColor,
					lineWidth: this.dataRangeOption.borderWidth
				}
			}))
		},
		_getItemGroupLocation: function() {
			var e = this._valueTextList,
				t = e.length,
				n = this.dataRangeOption.itemGap,
				r = this.dataRangeOption.itemWidth,
				i = this.dataRangeOption.itemHeight,
				s = 0,
				o = 0,
				a = this.getFont(this.dataRangeOption.textStyle),
				f = u.getTextHeight("国", a);
			if (this.dataRangeOption.orient == "horizontal") {
				if (this.dataRangeOption.text || this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable) s = (this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable ? r * 10 + n : t * (r + n)) + (this.dataRangeOption.text && typeof this.dataRangeOption.text[0] != "undefined" ? u.getTextWidth(this.dataRangeOption.text[0], a) + this._textGap : 0) + (this.dataRangeOption.text && typeof this.dataRangeOption.text[1] != "undefined" ? u.getTextWidth(this.dataRangeOption.text[1], a) + this._textGap : 0);
				else {
					r += 5;
					for (var l = 0; l < t; l++) s += r + u.getTextWidth(e[l], a) + n
				}
				s -= n, o = Math.max(f, i)
			} else {
				var c;
				if (this.dataRangeOption.text || this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable) o = (this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable ? i * 10 + n : t * (i + n)) + (this.dataRangeOption.text && typeof this.dataRangeOption.text[0] != "undefined" ? this._textGap + f : 0) + (this.dataRangeOption.text && typeof this.dataRangeOption.text[1] != "undefined" ? this._textGap + f : 0), c = Math.max(u.getTextWidth(this.dataRangeOption.text && this.dataRangeOption.text[0] || "", a), u.getTextWidth(this.dataRangeOption.text && this.dataRangeOption.text[1] || "", a)), s = Math.max(r, c);
				else {
					o = (i + n) * t, r += 5, c = 0;
					for (var l = 0; l < t; l++) c = Math.max(c, u.getTextWidth(e[l], a));
					s = r + c
				}
				o -= n
			}
			var h, p = this.zr.getWidth();
			switch (this.dataRangeOption.x) {
				case "center":
					h = Math.floor((p - s) / 2);
					break;
				case "left":
					h = this.dataRangeOption.padding[3] + this.dataRangeOption.borderWidth;
					break;
				case "right":
					h = p - s - this.dataRangeOption.padding[1] - this.dataRangeOption.borderWidth;
					break;
				default:
					h = this.parsePercent(this.dataRangeOption.x, p), h = isNaN(h) ? 0 : h
			}
			var d, v = this.zr.getHeight();
			switch (this.dataRangeOption.y) {
				case "top":
					d = this.dataRangeOption.padding[0] + this.dataRangeOption.borderWidth;
					break;
				case "bottom":
					d = v - o - this.dataRangeOption.padding[2] - this.dataRangeOption.borderWidth;
					break;
				case "center":
					d = Math.floor((v - o) / 2);
					break;
				default:
					d = this.parsePercent(this.dataRangeOption.y, v), d = isNaN(d) ? 0 : d
			}
			if (this.dataRangeOption.calculable) {
				var m = Math.max(u.getTextWidth(this.dataRangeOption.max, a), u.getTextWidth(this.dataRangeOption.min, a)) + f;
				this.dataRangeOption.orient == "horizontal" ? (h < m && (h = m), h + s + m > p && (h -= m)) : (d < f && (d = f), d + o + f > v && (d -= f))
			}
			return {
				x: h,
				y: d,
				width: s,
				height: o
			}
		},
		_getTextShape: function(e, t, n) {
			return {
				zlevel: this._zlevelBase,
				style: {
					x: this.dataRangeOption.orient == "horizontal" ? e : this._itemGroupLocation.x + this._itemGroupLocation.width / 2,
					y: this.dataRangeOption.orient == "horizontal" ? this._itemGroupLocation.y + this._itemGroupLocation.height / 2 : t,
					color: this.dataRangeOption.textStyle.color,
					text: n,
					textFont: this.getFont(this.dataRangeOption.textStyle),
					textBaseline: this.dataRangeOption.orient == "horizontal" ? "middle" : "top",
					textAlign: this.dataRangeOption.orient == "horizontal" ? "left" : "center"
				},
				hoverable: !1
			}
		},
		_getItemShape: function(e, t, n, r, i) {
			return {
				zlevel: this._zlevelBase,
				style: {
					x: e,
					y: t + 1,
					width: n,
					height: r - 2,
					color: i
				},
				highlightStyle: {
					strokeColor: i,
					lineWidth: 1
				},
				clickable: !0
			}
		},
		__ondrift: function(e, t, n) {
			var r = this._calculableLocation.x,
				i = this._calculableLocation.y,
				s = this._calculableLocation.width,
				o = this._calculableLocation.height;
			return this.dataRangeOption.orient == "horizontal" ? e.style.x + t <= r ? e.style.x = r : e.style.x + t + e.style.width >= r + s ? e.style.x = r + s - e.style.width : e.style.x += t : e.style.y + n <= i ? e.style.y = i : e.style.y + n + e.style.height >= i + o ? e.style.y = i + o - e.style.height : e.style.y += n, e._type == "filler" ? this._syncHandleShape() : this._syncFillerShape(e), this.dataRangeOption.realtime && this._syncData(), !0
		},
		__ondragend: function() {
			this.isDragend = !0
		},
		ondragend: function(e, t) {
			if (!this.isDragend || !e.target) return;
			!this.dataRangeOption.realtime && this._syncData(), t.dragOut = !0, t.dragIn = !0, !this.dataRangeOption.realtime && !1 && this.messageCenter.dispatch(s.EVENT.DATA_RANGE, null, {
				range: {
					start: this._range.end,
					end: this._range.start
				}
			}, this.myChart), t.needRefresh = !1, this.isDragend = !1;
			return
		},
		_syncShapeFromRange: function() {
			var e = this.dataRangeOption.range || {};
			this._range.end = typeof this._range.end != "undefined" ? this._range.end : typeof e.start != "undefined" ? e.start : 0, this._range.start = typeof this._range.start != "undefined" ? this._range.start : typeof e.end != "undefined" ? e.end : 100;
			if (this._range.start != 100 || this._range.end !== 0) {
				if (this.dataRangeOption.orient == "horizontal") {
					var t = this._fillerShae.style.width;
					this._fillerShae.style.x += t * (100 - this._range.start) / 100, this._fillerShae.style.width = t * (this._range.start - this._range.end) / 100
				} else {
					var n = this._fillerShae.style.height;
					this._fillerShae.style.y += n * (100 - this._range.start) / 100, this._fillerShae.style.height = n * (this._range.start - this._range.end) / 100
				}
				this.zr.modShape(this._fillerShae.id), this._syncHandleShape()
			}
		},
		_syncHandleShape: function() {
			var e = this._calculableLocation.x,
				t = this._calculableLocation.y,
				n = this._calculableLocation.width,
				r = this._calculableLocation.height;
			this.dataRangeOption.orient == "horizontal" ? (this._startShape.style.x = this._fillerShae.style.x, this._startMask.style.width = this._startShape.style.x - e, this._endShape.style.x = this._fillerShae.style.x + this._fillerShae.style.width, this._endMask.style.x = this._endShape.style.x, this._endMask.style.width = e + n - this._endShape.style.x, this._range.start = Math.ceil(100 - (this._startShape.style.x - e) / n * 100), this._range.end = Math.floor(100 - (this._endShape.style.x - e) / n * 100)) : (this._startShape.style.y = this._fillerShae.style.y, this._startMask.style.height = this._startShape.style.y - t, this._endShape.style.y = this._fillerShae.style.y + this._fillerShae.style.height, this._endMask.style.y = this._endShape.style.y, this._endMask.style.height = t + r - this._endShape.style.y, this._range.start = Math.ceil(100 - (this._startShape.style.y - t) / r * 100), this._range.end = Math.floor(100 - (this._endShape.style.y - t) / r * 100)), this._syncShape()
		},
		_syncFillerShape: function(e) {
			var t = this._calculableLocation.x,
				n = this._calculableLocation.y,
				r = this._calculableLocation.width,
				i = this._calculableLocation.height,
				s, o;
			this.dataRangeOption.orient == "horizontal" ? (s = this._startShape.style.x, o = this._endShape.style.x, e.id == this._startShape.id && s >= o ? (o = s, this._endShape.style.x = s) : e.id == this._endShape.id && s >= o && (s = o, this._startShape.style.x = s), this._fillerShae.style.x = s, this._fillerShae.style.width = o - s, this._startMask.style.width = s - t, this._endMask.style.x = o, this._endMask.style.width = t + r - o, this._range.start = Math.ceil(100 - (s - t) / r * 100), this._range.end = Math.floor(100 - (o - t) / r * 100)) : (s = this._startShape.style.y, o = this._endShape.style.y, e.id == this._startShape.id && s >= o ? (o = s, this._endShape.style.y = s) : e.id == this._endShape.id && s >= o && (s = o, this._startShape.style.y = s), this._fillerShae.style.y = s, this._fillerShae.style.height = o - s, this._startMask.style.height = s - n, this._endMask.style.y = o, this._endMask.style.height = n + i - o, this._range.start = Math.ceil(100 - (s - n) / i * 100), this._range.end = Math.floor(100 - (o - n) / i * 100)), this._syncShape()
		},
		_syncShape: function() {
			this._startShape.position = [this._startShape.style.x - this._startShape.style._x, this._startShape.style.y - this._startShape.style._y], this._startShape.style.text = this._textFormat(this._gap * this._range.start + this.dataRangeOption.min), this._startShape.style.color = this._startShape.highlightStyle.strokeColor = this.getColor(this._gap * this._range.start + this.dataRangeOption.min), this._endShape.position = [this._endShape.style.x - this._endShape.style._x, this._endShape.style.y - this._endShape.style._y], this._endShape.style.text = this._textFormat(this._gap * this._range.end + this.dataRangeOption.min), this._endShape.style.color = this._endShape.highlightStyle.strokeColor = this.getColor(this._gap * this._range.end + this.dataRangeOption.min), this.zr.modShape(this._startShape.id), this.zr.modShape(this._endShape.id), this.zr.modShape(this._startMask.id), this.zr.modShape(this._endMask.id), this.zr.modShape(this._fillerShae.id), this.zr.refresh()
		},
		_syncData: function() {
			this.dataRangeOption.realtime && this.messageCenter.dispatch(s.EVENT.DATA_RANGE, null, {
				range: {
					start: this._range.end,
					end: this._range.start
				}
			}, this.myChart)
		},
		__dataRangeSelected: function(e) {
			var t = e.target._idx;
			this._selectedMap[t] = !this._selectedMap[t], this.messageCenter.dispatch(s.EVENT.REFRESH, null, null, this.myChart)
		},
		_textFormat: function(e, t) {
			e = e.toFixed(this.dataRangeOption.precision), t = typeof t != "undefined" ? t.toFixed(this.dataRangeOption.precision) : "";
			if (this.dataRangeOption.formatter) {
				if (typeof this.dataRangeOption.formatter == "string") return this.dataRangeOption.formatter.replace("{value}", e).replace("{value2}", t);
				if (typeof this.dataRangeOption.formatter == "function") return this.dataRangeOption.formatter.call(this.myChart, e, t)
			}
			return t !== "" ? e + " - " + t : e
		},
		refresh: function(e) {
			if (e) {
				this.option = e, this.option.dataRange = this.reformOption(this.option.dataRange), this.option.dataRange.padding = this.reformCssArray(this.option.dataRange.padding), this.dataRangeOption = this.option.dataRange;
				var t = this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable ? 100 : this.dataRangeOption.splitNumber;
				this._colorList = a.getGradientColors(this.dataRangeOption.color, Math.max((t - this.dataRangeOption.color.length) / (this.dataRangeOption.color.length - 1), 0) + 1);
				if (this._colorList.length > t) {
					var n = this._colorList.length,
						r = [this._colorList[0]],
						i = n / (t - 1);
					for (var s = 1; s < t - 1; s++) r.push(this._colorList[Math.floor(s * i)]);
					r.push(this._colorList[n - 1]), this._colorList = r
				}
				var o = this.dataRangeOption.precision;
				this._gap = (this.dataRangeOption.max - this.dataRangeOption.min) / t;
				while (this._gap.toFixed(o) - 0 != this._gap && o < 5) o++;
				this.dataRangeOption.precision = o, this._gap = ((this.dataRangeOption.max - this.dataRangeOption.min) / t).toFixed(o) - 0, this._valueTextList = [];
				for (var s = 0; s < t; s++) this._selectedMap[s] = !0, this._valueTextList.unshift(this._textFormat(s * this._gap + this.dataRangeOption.min, (s + 1) * this._gap + this.dataRangeOption.min))
			}
			this.clear(), this._buildShape()
		},
		getColor: function(e) {
			if (isNaN(e)) return null;
			e < this.dataRangeOption.min ? e = this.dataRangeOption.min : e > this.dataRangeOption.max && (e = this.dataRangeOption.max);
			if (this.dataRangeOption.calculable)
				if (e - (this._gap * this._range.start + this.dataRangeOption.min) > 5e-5 || e - (this._gap * this._range.end + this.dataRangeOption.min) < -0.00005) return null;
			var t = this._colorList.length - Math.ceil((e - this.dataRangeOption.min) / (this.dataRangeOption.max - this.dataRangeOption.min) * this._colorList.length);
			return t == this._colorList.length && t--, this._selectedMap[t] ? this._colorList[t] : null
		}
	}, o.inherits(f, t), e("../component").define("dataRange", f), f
}), define("echarts/chart/scatter", ["require", "../component/base", "./base", "../util/shape/Symbol", "../component/axis", "../component/grid", "../component/dataZoom", "../component/dataRange", "../config", "zrender/tool/util", "zrender/tool/color", "../chart"], function(e) {
	function u(e, r, i, s, o) {
		t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
	}
	var t = e("../component/base"),
		n = e("./base"),
		r = e("../util/shape/Symbol");
	e("../component/axis"), e("../component/grid"), e("../component/dataZoom"), e("../component/dataRange");
	var i = e("../config"),
		s = e("zrender/tool/util"),
		o = e("zrender/tool/color");
	return u.prototype = {
		type: i.CHART_TYPE_SCATTER,
		_buildShape: function() {
			var e = this.series;
			this._sIndex2ColorMap = {}, this._symbol = this.option.symbolList, this._sIndex2ShapeMap = {}, this.selectedMap = {}, this.xMarkMap = {};
			var t = this.component.legend,
				n = [],
				r, s, u, a;
			for (var f = 0, l = e.length; f < l; f++) {
				r = e[f], s = r.name;
				if (r.type == i.CHART_TYPE_SCATTER) {
					e[f] = this.reformOption(e[f]), this._sIndex2ShapeMap[f] = this.query(r, "symbol") || this._symbol[f % this._symbol.length];
					if (t) {
						this.selectedMap[s] = t.isSelected(s), this._sIndex2ColorMap[f] = o.alpha(t.getColor(s), .5), u = t.getItemShape(s);
						if (u) {
							var a = this._sIndex2ShapeMap[f];
							u.style.brushType = a.match("empty") ? "stroke" : "both", a = a.replace("empty", "").toLowerCase(), a.match("rectangle") && (u.style.x += Math.round((u.style.width - u.style.height) / 2), u.style.width = u.style.height), a.match("star") && (u.style.n = a.replace("star", "") - 0 || 5, a = "star"), a.match("image") && (u.style.image = a.replace(new RegExp("^image:\\/\\/"), ""), u.style.x += Math.round((u.style.width - u.style.height) / 2), u.style.width = u.style.height, a = "image"), u.style.iconType = a, t.setItemShape(s, u)
						}
					} else this.selectedMap[s] = !0, this._sIndex2ColorMap[f] = this.zr.getColor(f);
					this.selectedMap[s] && n.push(f)
				}
			}
			this._buildSeries(n), this.addShapeList()
		},
		_buildSeries: function(e) {
			if (e.length === 0) return;
			var t = this.series,
				n, r, i, s, o, u, a = {},
				f, l;
			for (var c = 0, h = e.length; c < h; c++) {
				n = e[c], r = t[n];
				if (r.data.length === 0) continue;
				o = this.component.xAxis.getAxis(r.xAxisIndex || 0), u = this.component.yAxis.getAxis(r.yAxisIndex || 0), a[n] = [];
				for (var p = 0, d = r.data.length; p < d; p++) {
					i = r.data[p], s = typeof i != "undefined" ? typeof i.value != "undefined" ? i.value : i : "-";
					if (s == "-" || s.length < 2) continue;
					f = o.getCoord(s[0]), l = u.getCoord(s[1]), a[n].push([f, l, p, i.name || ""])
				}
				this.xMarkMap[n] = this._markMap(o, u, r.data, a[n]), this.buildMark(n)
			}
			this._buildPointList(a)
		},
		_markMap: function(e, t, n, r) {
			var i = {
					min0: Number.POSITIVE_INFINITY,
					max0: Number.NEGATIVE_INFINITY,
					sum0: 0,
					counter0: 0,
					average0: 0,
					min1: Number.POSITIVE_INFINITY,
					max1: Number.NEGATIVE_INFINITY,
					sum1: 0,
					counter1: 0,
					average1: 0
				},
				s;
			for (var o = 0, u = r.length; o < u; o++) s = n[r[o][2]].value || n[r[o][2]], i.min0 > s[0] && (i.min0 = s[0], i.minY0 = r[o][1], i.minX0 = r[o][0]), i.max0 < s[0] && (i.max0 = s[0], i.maxY0 = r[o][1], i.maxX0 = r[o][0]), i.sum0 += s[0], i.counter0++, i.min1 > s[1] && (i.min1 = s[1], i.minY1 = r[o][1], i.minX1 = r[o][0]), i.max1 < s[1] && (i.max1 = s[1], i.maxY1 = r[o][1], i.maxX1 = r[o][0]), i.sum1 += s[1], i.counter1++;
			var a = this.component.grid.getX(),
				f = this.component.grid.getXend(),
				l = this.component.grid.getY(),
				c = this.component.grid.getYend();
			i.average0 = (i.sum0 / i.counter0).toFixed(2) - 0;
			var h = e.getCoord(i.average0);
			i.averageLine0 = [
				[h, c],
				[h, l]
			], i.minLine0 = [
				[i.minX0, c],
				[i.minX0, l]
			], i.maxLine0 = [
				[i.maxX0, c],
				[i.maxX0, l]
			], i.average1 = (i.sum1 / i.counter1).toFixed(2) - 0;
			var p = t.getCoord(i.average1);
			return i.averageLine1 = [
				[a, p],
				[f, p]
			], i.minLine1 = [
				[a, i.minY1],
				[f, i.minY1]
			], i.maxLine1 = [
				[a, i.maxY1],
				[f, i.maxY1]
			], i
		},
		_buildPointList: function(e) {
			var t = this.series,
				n, r, i, s;
			for (var o in e) {
				n = t[o], r = e[o];
				if (n.large && n.data.length > n.largeThreshold) {
					this.shapeList.push(this._getLargeSymbol(r, this.getItemStyleColor(this.query(n, "itemStyle.normal.color"), o, -1) || this._sIndex2ColorMap[o]));
					continue
				}
				for (var u = 0, a = r.length; u < a; u++) i = r[u], s = this._getSymbol(o, i[2], i[3], i[0], i[1]), s && this.shapeList.push(s)
			}
		},
		_getSymbol: function(e, t, n, r, i) {
			var s = this.series,
				o = s[e],
				u = o.data[t],
				a = this.component.dataRange,
				f;
			if (a) {
				f = isNaN(u[2]) ? this._sIndex2ColorMap[e] : a.getColor(u[2]);
				if (!f) return null
			} else f = this._sIndex2ColorMap[e];
			var l = this.getSymbolShape(o, e, u, t, n, r, i, this._sIndex2ShapeMap[e], f, "rgba(0,0,0,0)", "vertical");
			return l.zlevel = this._zlevelBase, l._main = !0, l
		},
		_getLargeSymbol: function(e, t) {
			return new r({
				zlevel: this._zlevelBase,
				_main: !0,
				hoverable: !1,
				style: {
					pointList: e,
					color: t,
					strokeColor: t
				},
				highlightStyle: {
					pointList: []
				}
			})
		},
		getMarkCoord: function(e, t) {
			var n = this.series[e],
				r = this.xMarkMap[e],
				i = this.component.xAxis.getAxis(n.xAxisIndex),
				s = this.component.yAxis.getAxis(n.yAxisIndex),
				o;
			if (!t.type || t.type != "max" && t.type != "min" && t.type != "average") o = [typeof t.xAxis != "string" && i.getCoordByIndex ? i.getCoordByIndex(t.xAxis || 0) : i.getCoord(t.xAxis || 0), typeof t.yAxis != "string" && s.getCoordByIndex ? s.getCoordByIndex(t.yAxis || 0) : s.getCoord(t.yAxis || 0)];
			else {
				var u = typeof t.valueIndex != "undefined" ? t.valueIndex : 1;
				o = [r[t.type + "X" + u], r[t.type + "Y" + u], r[t.type + "Line" + u], r[t.type + u]]
			}
			return o
		},
		refresh: function(e) {
			e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
		},
		ondataRange: function(e, t) {
			this.component.dataRange && (this.refresh(), t.needRefresh = !0);
			return
		}
	}, s.inherits(u, n), s.inherits(u, t), e("../chart").define("scatter", u), u
}), define("echarts/chart/k", ["require", "../component/base", "./base", "../util/shape/Candle", "../component/axis", "../component/grid", "../component/dataZoom", "../config", "../util/ecData", "zrender/tool/util", "../chart"], function(e) {
	function u(e, r, i, s, o) {
		t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
	}
	var t = e("../component/base"),
		n = e("./base"),
		r = e("../util/shape/Candle");
	e("../component/axis"), e("../component/grid"), e("../component/dataZoom");
	var i = e("../config"),
		s = e("../util/ecData"),
		o = e("zrender/tool/util");
	return u.prototype = {
		type: i.CHART_TYPE_K,
		_buildShape: function() {
			var e = this.series;
			this.selectedMap = {};
			var t = {
					top: [],
					bottom: []
				},
				n;
			for (var r = 0, s = e.length; r < s; r++) e[r].type == i.CHART_TYPE_K && (e[r] = this.reformOption(e[r]), n = this.component.xAxis.getAxis(e[r].xAxisIndex), n.type == i.COMPONENT_TYPE_AXIS_CATEGORY && t[n.getPosition()].push(r));
			for (var o in t) t[o].length > 0 && this._buildSinglePosition(o, t[o]);
			this.addShapeList()
		},
		_buildSinglePosition: function(e, t) {
			var n = this._mapData(t),
				r = n.locationMap,
				i = n.maxDataLength;
			if (i === 0 || r.length === 0) return;
			this._buildHorizontal(t, i, r);
			for (var s = 0, o = t.length; s < o; s++) this.buildMark(t[s])
		},
		_mapData: function(e) {
			var t = this.series,
				n, r, i = this.component.legend,
				s = [],
				o = 0;
			for (var u = 0, a = e.length; u < a; u++) n = t[e[u]], r = n.name, i ? this.selectedMap[r] = i.isSelected(r) : this.selectedMap[r] = !0, this.selectedMap[r] && s.push(e[u]), o = Math.max(o, n.data.length);
			return {
				locationMap: s,
				maxDataLength: o
			}
		},
		_buildHorizontal: function(e, t, n) {
			var r = this.series,
				i, s, o, u, a, f, l = {},
				c, h, p, d;
			for (var v = 0, m = n.length; v < m; v++) {
				i = n[v], s = r[i], o = s.xAxisIndex || 0, u = this.component.xAxis.getAxis(o), c = s.barWidth || Math.floor(u.getGap() / 2), d = s.barMaxWidth, d && d < c && (c = d), a = s.yAxisIndex || 0, f = this.component.yAxis.getAxis(a), l[i] = [];
				for (var g = 0, y = t; g < y; g++) {
					if (typeof u.getNameByIndex(g) == "undefined") break;
					h = s.data[g], p = typeof h != "undefined" ? typeof h.value != "undefined" ? h.value : h : "-";
					if (p == "-" || p.length != 4) continue;
					l[i].push([u.getCoordByIndex(g), c, f.getCoord(p[0]), f.getCoord(p[1]), f.getCoord(p[2]), f.getCoord(p[3]), g, u.getNameByIndex(g)])
				}
			}
			this._buildKLine(e, l)
		},
		_buildKLine: function(e, t) {
			var n = this.series,
				r, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w;
			for (var E = 0, S = e.length; E < S; E++) {
				w = e[E], d = n[w], g = t[w], this._isLarge(g) && (g = this._getLargePointList(g));
				if (d.type == i.CHART_TYPE_K && typeof g != "undefined") {
					v = d, r = this.query(v, "itemStyle.normal.lineStyle.width"), s = this.query(v, "itemStyle.normal.lineStyle.color"), o = this.query(v, "itemStyle.normal.lineStyle.color0"), u = this.query(v, "itemStyle.normal.color"), a = this.query(v, "itemStyle.normal.color0"), f = this.query(v, "itemStyle.emphasis.lineStyle.width"), l = this.query(v, "itemStyle.emphasis.lineStyle.color"), c = this.query(v, "itemStyle.emphasis.lineStyle.color0"), h = this.query(v, "itemStyle.emphasis.color"), p = this.query(v, "itemStyle.emphasis.color0");
					for (var x = 0, T = g.length; x < T; x++) y = g[x], m = d.data[y[6]], v = m, b = y[3] < y[2], this.shapeList.push(this._getCandle(w, y[6], y[7], y[0], y[1], y[2], y[3], y[4], y[5], b ? this.query(v, "itemStyle.normal.color") || u : this.query(v, "itemStyle.normal.color0") || a, this.query(v, "itemStyle.normal.lineStyle.width") || r, b ? this.query(v, "itemStyle.normal.lineStyle.color") || s : this.query(v, "itemStyle.normal.lineStyle.color0") || o, b ? this.query(v, "itemStyle.emphasis.color") || h || u : this.query(v, "itemStyle.emphasis.color0") || p || a, this.query(v, "itemStyle.emphasis.lineStyle.width") || f || r, b ? this.query(v, "itemStyle.emphasis.lineStyle.color") || l || s : this.query(v, "itemStyle.emphasis.lineStyle.color0") || c || o))
				}
			}
		},
		_isLarge: function(e) {
			return e[0][1] < .5
		},
		_getLargePointList: function(e) {
			var t = this.component.grid.getWidth(),
				n = e.length,
				r = [];
			for (var i = 0; i < t; i++) r[i] = e[Math.floor(n / t * i)];
			return r
		},
		_getCandle: function(e, t, n, i, o, u, a, f, l, c, h, p, d, v, m) {
			var g = this.series,
				y = {
					zlevel: this._zlevelBase,
					clickable: !0,
					style: {
						x: i,
						y: [u, a, f, l],
						width: o,
						color: c,
						strokeColor: p,
						lineWidth: h,
						brushType: "both"
					},
					highlightStyle: {
						color: d,
						strokeColor: m,
						lineWidth: v
					},
					_seriesIndex: e
				};
			return s.pack(y, g[e], e, g[e].data[t], t, n), y = new r(y), y
		},
		getMarkCoord: function(e, t) {
			var n = this.series[e],
				r = this.component.xAxis.getAxis(n.xAxisIndex),
				i = this.component.yAxis.getAxis(n.yAxisIndex);
			return [typeof t.xAxis != "string" && r.getCoordByIndex ? r.getCoordByIndex(t.xAxis || 0) : r.getCoord(t.xAxis || 0), typeof t.yAxis != "string" && i.getCoordByIndex ? i.getCoordByIndex(t.yAxis || 0) : i.getCoord(t.yAxis || 0)]
		},
		refresh: function(e) {
			e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
		},
		addDataAnimation: function(e) {
			var t = this.series,
				n = {};
			for (var r = 0, i = e.length; r < i; r++) n[e[r][0]] = e[r];
			var o, u, a, f, l, c;
			for (var r = 0, i = this.shapeList.length; r < i; r++) {
				l = this.shapeList[r]._seriesIndex;
				if (n[l] && !n[l][3] && this.shapeList[r].type == "candle") {
					c = s.get(this.shapeList[r], "dataIndex"), f = t[l];
					if (n[l][2] && c == f.data.length - 1) {
						this.zr.delShape(this.shapeList[r].id);
						continue
					}
					if (!n[l][2] && c === 0) {
						this.zr.delShape(this.shapeList[r].id);
						continue
					}
					u = this.component.xAxis.getAxis(f.xAxisIndex || 0).getGap(), o = n[l][2] ? u : -u, a = 0, this.zr.animate(this.shapeList[r].id, "").when(500, {
						position: [o, a]
					}).start()
				}
			}
		}
	}, o.inherits(u, n), o.inherits(u, t), e("../chart").define("k", u), u
}), define("echarts/util/coordinates", ["require", "zrender/tool/math"], function(e) {
	function n(e, n) {
		return [e * t.sin(n), e * t.cos(n)]
	}

	function r(e, t) {
		return [Math.sqrt(e * e + t * t), Math.atan(t / e)]
	}
	var t = e("zrender/tool/math");
	return {
		polar2cartesian: n,
		cartesian2polar: r
	}
}), define("echarts/component/polar", ["require", "./base", "zrender/shape/Text", "zrender/shape/Line", "zrender/shape/Polygon", "zrender/shape/Circle", "zrender/shape/Ring", "../config", "zrender/tool/util", "../util/coordinates", "../component"], function(e) {
	function l(e, n, r, i, s) {
		t.call(this, e, n, r, i, s), this.refresh(i)
	}
	var t = e("./base"),
		n = e("zrender/shape/Text"),
		r = e("zrender/shape/Line"),
		i = e("zrender/shape/Polygon"),
		s = e("zrender/shape/Circle"),
		o = e("zrender/shape/Ring"),
		u = e("../config"),
		a = e("zrender/tool/util"),
		f = e("../util/coordinates");
	return l.prototype = {
		type: u.COMPONENT_TYPE_POLAR,
		_buildShape: function() {
			for (var e = 0; e < this.polar.length; e++) this._index = e, this.reformOption(this.polar[e]), this._queryTarget = [this.polar[e], this.option], this._createVector(e), this._buildSpiderWeb(e), this._buildText(e), this._adjustIndicatorValue(e), this._addAxisLabel(e);
			for (var e = 0; e < this.shapeList.length; e++) this.zr.addShape(this.shapeList[e])
		},
		_createVector: function(e) {
			var t = this.polar[e],
				n = this.deepQuery(this._queryTarget, "indicator"),
				r = n.length,
				i = t.startAngle,
				s = 2 * Math.PI / r,
				o = this._getRadius(),
				u = t.__ecIndicator = [],
				a;
			for (var l = 0; l < r; l++) a = f.polar2cartesian(o, i * Math.PI / 180 + s * l), u.push({
				vector: [a[1], -a[0]]
			})
		},
		_getRadius: function() {
			var e = this.polar[this._index];
			return this.parsePercent(e.radius, Math.min(this.zr.getWidth(), this.zr.getHeight()) / 2)
		},
		_buildSpiderWeb: function(e) {
			var t = this.polar[e],
				n = t.__ecIndicator,
				r = t.splitArea,
				i = t.splitLine,
				s = this.getCenter(e),
				o = t.splitNumber,
				u = i.lineStyle.color,
				a = i.lineStyle.width,
				f = i.show,
				l = this.deepQuery(this._queryTarget, "axisLine");
			this._addArea(n, o, s, r, u, a, f), l.show && this._addLine(n, s, l)
		},
		_addAxisLabel: function(e) {
			var t = this.polar[e],
				r = this.deepQuery(this._queryTarget, "indicator"),
				i = t.__ecIndicator,
				s, o, u, f, l = this.deepQuery(this._queryTarget, "splitNumber"),
				c = this.getCenter(e),
				o, h, p, d, v, m = this.deepQuery(this._queryTarget, "precision"),
				g;
			for (var y = 0; y < r.length; y++) {
				s = this.deepQuery([r[y], t, this.option], "axisLabel");
				if (s.show) {
					u = {}, u.textFont = this.getFont(), u = a.merge(u, s), u.lineWidth = u.width, o = i[y].vector, h = i[y].value, d = y / r.length * 2 * Math.PI, v = s.offset || 10, g = s.interval || 0;
					for (var b = 1; b <= l; b += g + 1) f = a.merge({}, u), p = b * (h.max - h.min) / l + h.min, m && (p = p.toFixed(m)), f.text = this.numAddCommas(p), f.x = b * o[0] / l + Math.cos(d) * v + c[0], f.y = b * o[1] / l + Math.sin(d) * v + c[1], this.shapeList.push(new n({
						zlevel: this._zlevelBase,
						style: f,
						draggable: !1,
						hoverable: !1
					}))
				}
			}
		},
		_buildText: function(e) {
			var t = this.polar[e],
				r = t.__ecIndicator,
				i, s = this.deepQuery(this._queryTarget, "indicator"),
				o = this.getCenter(e),
				u, a, f, l, c = 0,
				h = 0,
				p, d;
			for (var v = 0; v < s.length; v++) {
				f = this.deepQuery([s[v], t, this.option], "name");
				if (!f.show) continue;
				d = this.deepQuery([f, t, this.option], "textStyle"), u = {}, u.textFont = this.getFont(d), u.color = d.color, typeof f.formatter == "function" ? u.text = f.formatter.call(this.myChart, s[v].text, v) : typeof f.formatter == "string" ? u.text = f.formatter.replace("{value}", s[v].text) : u.text = s[v].text, r[v].text = u.text, i = r[v].vector, Math.round(i[0]) > 0 ? a = "left" : Math.round(i[0]) < 0 ? a = "right" : a = "center", f.margin ? (p = f.margin, c = i[0] > 0 ? p : -p, h = i[1] > 0 ? p : -p, c = i[0] === 0 ? 0 : c, h = i[1] === 0 ? 0 : h, i = this._mapVector(i, o, 1)) : i = this._mapVector(i, o, 1.2), u.textAlign = a, u.x = i[0] + c, u.y = i[1] + h, f.rotate ? l = [f.rotate / 180 * Math.PI, i[0], i[1]] : l = [0, 0, 0], this.shapeList.push(new n({
					zlevel: this._zlevelBase,
					style: u,
					draggable: !1,
					hoverable: !1,
					rotation: l
				}))
			}
		},
		getIndicatorText: function(e, t) {
			return this.polar[e] && this.polar[e].__ecIndicator[t] && this.polar[e].__ecIndicator[t].text
		},
		getDropBox: function(e) {
			var e = e || 0,
				t = this.polar[e],
				n = this.getCenter(e),
				r = t.__ecIndicator,
				i = r.length,
				s = [],
				o, u, a = t.type;
			if (a == "polygon") {
				for (var f = 0; f < i; f++) o = r[f].vector, s.push(this._mapVector(o, n, 1.2));
				u = this._getShape(s, "fill", "rgba(0,0,0,0)", "", 1)
			} else a == "circle" && (u = this._getCircle("", 1, 1.2, n, "fill", "rgba(0,0,0,0)"));
			return u
		},
		_addArea: function(e, t, n, r, i, s, o) {
			var u, a, f, l, c = this.deepQuery(this._queryTarget, "type");
			for (var h = 0; h < t; h++) a = (t - h) / t, o && (c == "polygon" ? (l = this._getPointList(e, a, n), u = this._getShape(l, "stroke", "", i, s)) : c == "circle" && (u = this._getCircle(i, s, a, n, "stroke")), this.shapeList.push(u)), r.show && (f = (t - h - 1) / t, this._addSplitArea(e, r, a, f, n, h))
		},
		_getCircle: function(e, t, n, r, i, o) {
			var u = this._getRadius();
			return new s({
				zlevel: this._zlevelBase,
				style: {
					x: r[0],
					y: r[1],
					r: u * n,
					brushType: i,
					strokeColor: e,
					lineWidth: t,
					color: o
				},
				hoverable: !1,
				draggable: !1
			})
		},
		_getRing: function(e, t, n, r) {
			var i = this._getRadius();
			return new o({
				zlevel: this._zlevelBase,
				style: {
					x: r[0],
					y: r[1],
					r: t * i,
					r0: n * i,
					color: e,
					brushType: "fill"
				},
				hoverable: !1,
				draggable: !1
			})
		},
		_getPointList: function(e, t, n) {
			var r = [],
				i = e.length,
				s;
			for (var o = 0; o < i; o++) s = e[o].vector, r.push(this._mapVector(s, n, t));
			return r
		},
		_getShape: function(e, t, n, r, s) {
			return new i({
				zlevel: this._zlevelBase,
				style: {
					pointList: e,
					brushType: t,
					color: n,
					strokeColor: r,
					lineWidth: s
				},
				hoverable: !1,
				draggable: !1
			})
		},
		_addSplitArea: function(e, t, n, r, i, s) {
			var o = e.length,
				u, a = t.areaStyle.color,
				f, l, c, h = [],
				o = e.length,
				p, d = this.deepQuery(this._queryTarget, "type");
			typeof a == "string" && (a = [a]), f = a.length, u = a[s % f];
			if (d == "polygon")
				for (var v = 0; v < o; v++) h = [], l = e[v].vector, c = e[(v + 1) % o].vector, h.push(this._mapVector(l, i, n)), h.push(this._mapVector(l, i, r)), h.push(this._mapVector(c, i, r)), h.push(this._mapVector(c, i, n)), p = this._getShape(h, "fill", u, "", 1), this.shapeList.push(p);
			else d == "circle" && (p = this._getRing(u, n, r, i), this.shapeList.push(p))
		},
		_mapVector: function(e, t, n) {
			return [e[0] * n + t[0], e[1] * n + t[1]]
		},
		getCenter: function(e) {
			var e = e || 0;
			return this.parseCenter(this.zr, this.polar[e].center)
		},
		_addLine: function(e, t, n) {
			var r = e.length,
				i, s, o = n.lineStyle,
				u = o.color,
				a = o.width,
				f = o.type;
			for (var l = 0; l < r; l++) s = e[l].vector, i = this._getLine(t[0], t[1], s[0] + t[0], s[1] + t[1], u, a, f), this.shapeList.push(i)
		},
		_getLine: function(e, t, n, i, s, o, u) {
			return new r({
				zlevel: this._zlevelBase,
				style: {
					xStart: e,
					yStart: t,
					xEnd: n,
					yEnd: i,
					strokeColor: s,
					lineWidth: o,
					lineType: u
				},
				hoverable: !1
			})
		},
		_adjustIndicatorValue: function(e) {
			var t = this.polar[e],
				n = this.deepQuery(this._queryTarget, "indicator"),
				r = n.length,
				i = t.__ecIndicator,
				s, o, u, a = this._getSeriesData(e),
				f = t.splitNumber,
				l = this.deepQuery(this._queryTarget, "boundaryGap"),
				c = this.deepQuery(this._queryTarget, "precision"),
				h = this.deepQuery(this._queryTarget, "power"),
				p = this.deepQuery(this._queryTarget, "scale");
			for (var d = 0; d < r; d++) typeof n[d].max == "number" ? (o = n[d].max, u = n[d].min || 0, s = {
				max: o,
				min: u
			}) : s = this._findValue(a, d, f, l, c, h, p), i[d].value = s
		},
		_getSeriesData: function(e) {
			var t = [],
				n, r, i = this.component.legend,
				s;
			for (var o = 0; o < this.series.length; o++) {
				n = this.series[o];
				if (n.type != u.CHART_TYPE_RADAR) continue;
				r = n.data || [];
				for (var a = 0; a < r.length; a++) s = this.deepQuery([r[a], n, this.option], "polarIndex") || 0, s == e && (!i || i.isSelected(r[a].name)) && t.push(r[a])
			}
			return t
		},
		_findValue: function(e, t, n, r, i, s, o) {
			function m(e) {
				(e > u || u === undefined) && (u = e), (e < a || a === undefined) && (a = e)
			}
			var u, a, f, l, c, h = 0,
				p, d, v;
			if (!e || e.length === 0) return;
			e.length == 1 && (a = 0);
			if (e.length != 1)
				for (var g = 0; g < e.length; g++) f = typeof e[g].value[t].value != "undefined" ? e[g].value[t].value : e[g].value[t], m(f);
			else {
				v = e[0];
				for (var g = 0; g < v.value.length; g++) m(typeof v.value[g].value != "undefined" ? v.value[g].value : v.value[g])
			} if (e.length != 1)
				if (o) {
					l = this._getDelta(u, a, n, i, s);
					if (l >= 1) a = Math.floor(a / l) * l - l;
					else {
						if (l === 0) return u > 0 ? (d = 0, p = 2 * u) : u === 0 ? (d = 0, p = 100) : (p = 0, d = 2 * a), {
							max: p,
							min: d
						};
						c = (l + "").split(".")[1], h = c.length, a = Math.floor(a * Math.pow(10, h)) / Math.pow(10, h) - l
					}
					Math.abs(a) <= l && (a = 0), u = a + Math.floor(l * Math.pow(10, h) * (n + 1)) / Math.pow(10, h)
				} else a = a > 0 ? 0 : a;
			return r && (u = u > 0 ? u * 1.2 : u * .8, a = a > 0 ? a * .8 : a * 1.2), {
				max: u,
				min: a
			}
		},
		_getDelta: function(e, t, n, r, i) {
			var s = (e - t) / n,
				o, u;
			if (s > 1) return i ? (s = Math.ceil(s), s % i > 0 ? (Math.ceil(s / i) + 1) * i : s) : (o = (s + "").split(".")[0], u = o.length, o.charAt(0) >= 5 ? Math.pow(10, u) : (o.charAt(0) - 0 + 1) * Math.pow(10, u - 1));
			if (s == 1) return 1;
			if (s === 0) return 0;
			if (!r) {
				o = (s + "").split(".")[1], u = 0;
				while (o[u] == "0") u++;
				return o[u] >= 5 ? "0." + o.substring(0, u + 1) - 0 + 1 / Math.pow(10, u) : "0." + o.substring(0, u + 1) - 0 + 1 / Math.pow(10, u + 1)
			}
			return Math.ceil(s * Math.pow(10, r)) / Math.pow(10, r)
		},
		getVector: function(e, t, n) {
			e = e || 0, t = t || 0;
			var r = this.polar[e].__ecIndicator;
			if (t >= r.length) return;
			var i = this.polar[e].__ecIndicator[t],
				s = this.getCenter(e),
				o = i.vector,
				u = i.value.max,
				a = i.value.min,
				f;
			if (typeof n == "undefined") return s;
			switch (n) {
				case "min":
					n = a;
					break;
				case "max":
					n = u;
					break;
				case "center":
					n = (u + a) / 2
			}
			return u != a ? f = (n - a) / (u - a) : f = .5, this._mapVector(o, s, f)
		},
		isInside: function(e) {
			var t = this.getNearestIndex(e);
			return t ? t.polarIndex : -1
		},
		getNearestIndex: function(e) {
			var t, n, r, i, s, o, u, a, l;
			for (var c = 0; c < this.polar.length; c++) {
				t = this.polar[c], n = this.getCenter(c);
				if (e[0] == n[0] && e[1] == n[1]) return {
					polarIndex: c,
					valueIndex: 0
				};
				r = this._getRadius(), s = t.startAngle, o = t.indicator, u = o.length, a = 2 * Math.PI / u, i = f.cartesian2polar(e[0] - n[0], n[1] - e[1]), e[0] - n[0] < 0 && (i[1] += Math.PI), i[1] < 0 && (i[1] += 2 * Math.PI), l = i[1] - s / 180 * Math.PI + Math.PI * 2;
				if (Math.abs(Math.cos(l % (a / 2))) * r > i[0]) return {
					polarIndex: c,
					valueIndex: Math.floor((l + a / 2) / a) % u
				}
			}
		},
		getIndicator: function(e) {
			var e = e || 0;
			return this.polar[e].indicator
		},
		refresh: function(e) {
			e && (this.option = e, this.polar = this.option.polar, this.series = this.option.series), this.clear(), this._buildShape()
		}
	}, a.inherits(l, t), e("../component").define("polar", l), l
}), define("echarts/chart/radar", ["require", "../component/base", "./base", "zrender/shape/Polygon", "../component/polar", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/color", "../util/accMath", "../chart"], function(e) {
	function a(e, r, i, s, o) {
		t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
	}
	var t = e("../component/base"),
		n = e("./base"),
		r = e("zrender/shape/Polygon");
	e("../component/polar");
	var i = e("../config"),
		s = e("../util/ecData"),
		o = e("zrender/tool/util"),
		u = e("zrender/tool/color");
	return a.prototype = {
		type: i.CHART_TYPE_RADAR,
		_buildShape: function() {
			this.selectedMap = {}, this._symbol = this.option.symbolList, this._queryTarget, this._dropBoxList = [], this._radarDataCounter = 0;
			var e = this.series,
				t = this.component.legend,
				n;
			for (var r = 0, s = e.length; r < s; r++) e[r].type == i.CHART_TYPE_RADAR && (this.serie = this.reformOption(e[r]), n = this.serie.name || "", this.selectedMap[n] = t ? t.isSelected(n) : !0, this.selectedMap[n] && (this._queryTarget = [this.serie, this.option], this.deepQuery(this._queryTarget, "calculable") && this._addDropBox(r), this._buildSingleRadar(r), this.buildMark(r)));
			this.addShapeList()
		},
		_buildSingleRadar: function(e) {
			var t = this.component.legend,
				n, r = this.serie.data,
				i, s, o, u = this.deepQuery(this._queryTarget, "calculable");
			for (var a = 0; a < r.length; a++) {
				s = r[a].name || "", this.selectedMap[s] = t ? t.isSelected(s) : !0;
				if (!this.selectedMap[s]) continue;
				t ? (i = t.getColor(s), n = t.getItemShape(s), n && (n.style.brushType = this.deepQuery([r[a], this.serie], "itemStyle.normal.areaStyle") ? "both" : "stroke", t.setItemShape(s, n))) : i = this.zr.getColor(a), o = this._getPointList(this.serie.polarIndex, r[a]), this._addSymbol(o, i, a, e, this.serie.polarIndex), this._addDataShape(o, i, r[a], e, a, u), this._radarDataCounter++
			}
		},
		_getPointList: function(e, t) {
			var n = [],
				r, i = this.component.polar;
			for (var s = 0, o = t.value.length; s < o; s++) r = i.getVector(e, s, typeof t.value[s].value != "undefined" ? t.value[s].value : t.value[s]), r && n.push(r);
			return n
		},
		_addSymbol: function(e, t, n, r, i) {
			var o = this.series,
				u, a = this.component.polar;
			for (var f = 0, l = e.length; f < l; f++) u = this.getSymbolShape(this.deepMerge([o[r].data[n], o[r]]), r, o[r].data[n].value[f], f, a.getIndicatorText(i, f), e[f][0], e[f][1], this._symbol[this._radarDataCounter % this._symbol.length], t, "#fff", "vertical"), u.zlevel = this._zlevelBase + 1, s.set(u, "data", o[r].data[n]), s.set(u, "value", o[r].data[n].value), s.set(u, "dataIndex", n), s.set(u, "special", f), this.shapeList.push(u)
		},
		_addDataShape: function(e, t, n, i, o, a) {
			var f = this.series,
				l = [n, this.serie],
				c = this.getItemStyleColor(this.deepQuery(l, "itemStyle.normal.color"), i, o, n),
				h = this.deepQuery(l, "itemStyle.normal.lineStyle.width"),
				p = this.deepQuery(l, "itemStyle.normal.lineStyle.type"),
				d = this.deepQuery(l, "itemStyle.normal.areaStyle.color"),
				v = this.deepQuery(l, "itemStyle.normal.areaStyle"),
				m = {
					zlevel: this._zlevelBase,
					style: {
						pointList: e,
						brushType: v ? "both" : "stroke",
						color: d || c || u.alpha(t, .5),
						strokeColor: c || t,
						lineWidth: h,
						lineType: p
					},
					highlightStyle: {
						brushType: this.deepQuery(l, "itemStyle.emphasis.areaStyle") || v ? "both" : "stroke",
						color: this.deepQuery(l, "itemStyle.emphasis.areaStyle.color") || d || c || u.alpha(t, .5),
						strokeColor: this.getItemStyleColor(this.deepQuery(l, "itemStyle.emphasis.color"), i, o, n) || c || t,
						lineWidth: this.deepQuery(l, "itemStyle.emphasis.lineStyle.width") || h,
						lineType: this.deepQuery(l, "itemStyle.emphasis.lineStyle.type") || p
					}
				};
			s.pack(m, f[i], i, n, o, n.name, this.component.polar.getIndicator(f[i].polarIndex)), a && (m.draggable = !0, this.setCalculable(m)), m = new r(m), this.shapeList.push(m)
		},
		_addDropBox: function(e) {
			var t = this.series,
				n = this.deepQuery(this._queryTarget, "polarIndex");
			if (!this._dropBoxList[n]) {
				var r = this.component.polar.getDropBox(n);
				r.zlevel = this._zlevelBase, this.setCalculable(r), s.pack(r, t, e, undefined, -1), this.shapeList.push(r), this._dropBoxList[n] = !0
			}
		},
		ondragend: function(e, t) {
			var n = this.series;
			if (!this.isDragend || !e.target) return;
			var r = e.target,
				i = s.get(r, "seriesIndex"),
				o = s.get(r, "dataIndex");
			this.component.legend && this.component.legend.del(n[i].data[o].name), n[i].data.splice(o, 1), t.dragOut = !0, t.needRefresh = !0, this.isDragend = !1;
			return
		},
		ondrop: function(t, n) {
			var r = this.series;
			if (!this.isDrop || !t.target) return;
			var i = t.target,
				o = t.dragged,
				u = s.get(i, "seriesIndex"),
				a = s.get(i, "dataIndex"),
				f, l = this.component.legend,
				c;
			if (a == -1) f = {
				value: s.get(o, "value"),
				name: s.get(o, "name")
			}, r[u].data.push(f), l && l.add(f.name, o.style.color || o.style.strokeColor);
			else {
				var h = e("../util/accMath");
				f = r[u].data[a], l && l.del(f.name), f.name += this.option.nameConnector + s.get(o, "name"), c = s.get(o, "value");
				for (var p = 0; p < c.length; p++) f.value[p] = h.accAdd(f.value[p], c[p]);
				l && l.add(f.name, o.style.color || o.style.strokeColor)
			}
			n.dragIn = n.dragIn || !0, this.isDrop = !1;
			return
		},
		refresh: function(e) {
			e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
		}
	}, o.inherits(a, n), o.inherits(a, t), e("../chart").define("radar", a), a
}), define("echarts/util/shape/Chord", ["require", "zrender/shape/Base", "zrender/tool/util"], function(e) {
	function i(e) {
		t.call(this, e)
	}
	var t = e("zrender/shape/Base"),
		n = e("zrender/tool/util"),
		r = n.getContext();
	return i.prototype = {
		type: "chord",
		buildPath: function(e, t) {
			var n = Math.PI * 2,
				r = t.center[0],
				i = t.center[1],
				s = t.r,
				o = t.source0 / 180 * Math.PI,
				u = t.source1 / 180 * Math.PI,
				a = t.target0 / 180 * Math.PI,
				f = t.target1 / 180 * Math.PI,
				l = r + Math.cos(n - o) * s,
				c = i - Math.sin(n - o) * s,
				h = r + Math.cos(n - u) * s,
				p = i - Math.sin(n - u) * s,
				d = r + Math.cos(n - a) * s,
				v = i - Math.sin(n - a) * s,
				m = r + Math.cos(n - f) * s,
				g = i - Math.sin(n - f) * s;
			e.moveTo(l, c), e.arc(r, i, t.r, o, u, !1), e.bezierCurveTo((r - h) * .7 + h, (i - p) * .7 + p, (r - d) * .7 + d, (i - v) * .7 + v, d, v);
			if (t.source0 === t.target0 && t.source1 === t.target1) return;
			e.arc(r, i, t.r, a, f, !1), e.bezierCurveTo((r - m) * .7 + m, (i - g) * .7 + g, (r - l) * .7 + l, (i - c) * .7 + c, l, c)
		},
		getRect: function() {
			return {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			}
		},
		isCover: function(e, t) {
			if (!r.isPointInPath) return !1;
			var n = this.getTansform(e, t);
			return e = n[0], t = n[1], r.beginPath(), i.prototype.buildPath.call(null, r, this.style), r.closePath(), r.isPointInPath(e, t)
		}
	}, n.inherits(i, t), i
}), define("echarts/util/kwargs", [], function() {
	function e(e, t) {
		var n = new RegExp("(\\/\\*[\\w\\'\\,\\(\\)\\s\\r\\n\\*]*\\*\\/)|(\\/\\/[\\w\\s\\'][^\\n\\r]*$)|(<![\\-\\-\\s\\w\\>\\/]*>)", "gim"),
			r = new RegExp("\\s+", "gim"),
			i = new RegExp("function.*?\\((.*?)\\)", "i"),
			s = e.toString().replace(n, "").replace(r, "").match(i)[1].split(",");
		return t !== Object(t) && (t = {}),
			function() {
				var n = Array.prototype.slice.call(arguments),
					r = n[n.length - 1];
				r && r.constructor === Object ? n.pop() : r = {};
				for (var i = 0; i < s.length; i++) {
					var o = s[i];
					o in r ? n[i] = r[o] : o in t && n[i] == null && (n[i] = t[o])
				}
				return e.apply(this, n)
			}
	}
	return e
}), define("echarts/util/ndarray", ["require", "./kwargs"], function(e) {
	function d(e) {
		if (typeof e == "undefined") return "number";
		switch (Object.prototype.toString.call(e)) {
			case "[object Int32Array]":
				return "int32";
			case "[object Int16Array]":
				return "int16";
			case "[object Int8Array]":
				return "int8";
			case "[object Uint32Array]":
				return "uint32";
			case "[object Uint16Array]":
				return "uint16";
			case "[object Uint8Array]":
				return "uint8";
			case "[object Uint8ClampedArray]":
				return "uint8c";
			case "[object Float32Array]":
				return "float32";
			case "[object Float64Array]":
				return "float64";
			default:
				return "number"
		}
	}

	function m(e, t) {
		if (e.indexOf(":") >= 0) {
			var n = e.split(/\s*:\s*/),
				r = parseInt(n[2] || 1, 10),
				i, s;
			if (r === 0) throw new Error("Slice step cannot be zero");
			return r > 0 ? (i = parseInt(n[0] || 0, 10), s = parseInt(n[1] || t, 10)) : (i = parseInt(n[0] || t - 1, 10), s = parseInt(n[1] || -1, 10)), i < 0 && (i = t + i), s < 0 && n[1] && (s = t + s), r > 0 ? (i = Math.max(Math.min(t, i), 0), s = Math.max(Math.min(t, s), 0)) : (i = Math.max(Math.min(t - 1, i), -1), s = Math.max(Math.min(t - 1, s), -1)), [i, s, r]
		}
		var i = parseInt(e, 10);
		i < 0 && (i = t + i);
		if (i < 0 || i > t) throw new Error(N(e));
		return i = Math.max(Math.min(t - 1, i), 0), [i, i + 1, 1]
	}

	function g(e) {
		var t = e[0];
		for (var n = 1; n < e.length; n++) t *= e[n];
		return t
	}

	function y(e) {
		var t = 1,
			n = e[0];
		while (n instanceof Array) n = n[0], t++;
		return t
	}

	function b(e) {
		var t = [e.length],
			n = e[0];
		while (n instanceof Array) t.push(n.length), n = n[0];
		return t
	}

	function w(e, t) {
		if (t == e.length - 1) return 1;
		var n = e[t + 1];
		for (var r = t + 2; r < e.length; r++) n *= e[r];
		return n
	}

	function E(e) {
		var t = [],
			n = 1,
			r = g(e);
		for (var i = 0; i < e.length; i++) n *= e[i], t.push(r / n);
		return t
	}

	function S(e, t) {
		if (e.length !== t.length) return !1;
		for (var n = 0; n < e.length; n++)
			if (e[n] !== t[n]) return !1;
		return !0
	}

	function x(e, t) {
		return "Shape (" + e.toString() + ") (" + t.toString() + ") could not be broadcast together"
	}

	function T(e) {
		return "Axis " + e + " out of bounds"
	}

	function N(e) {
		return "Index " + e + " out of bounds"
	}
	var t = e("./kwargs"),
		n = Array.prototype.slice;
	this.Int32Array = window.Int32Array || Array, this.Int16Array = window.Int16Array || Array, this.Int8Array = window.Int8Array || Array, this.Uint32Array = window.Uint32Array || Array, this.Uint16Array = window.Uint16Array || Array, this.Uint8Array = window.Uint8Array || Array, this.Float32Array = window.Float32Array || Array, this.Float64Array = window.Float64Array || Array;
	var r = {
			int32: this.Int32Array,
			int16: this.Int16Array,
			int8: this.Int8Array,
			uint32: this.Uint32Array,
			uint16: this.Uint16Array,
			uint8: this.Uint8Array,
			uint8c: this.Uint8ClampedArray,
			float32: this.Float32Array,
			float64: this.Float64Array,
			number: Array
		},
		i = {
			int32: 4,
			int16: 2,
			int8: 1,
			uint32: 4,
			uint16: 2,
			uint8: 1,
			uint8c: 1,
			float32: 4,
			float64: 8,
			number: 1
		},
		s = 0,
		o = 1,
		u = 2,
		a = 3,
		f = 4,
		l = 5,
		c = 6,
		h = 7,
		p = 8,
		v = function(e) {
			var t = arguments[arguments.length - 1];
			typeof t == "string" ? this._dtype = t : this._dtype = d(e);
			if (e && typeof e != "string") {
				if (e instanceof v) return e._dtype = this._dtype, e;
				typeof e.length != "undefined" ? this.initFromArray(e) : typeof e == "number" && this.initFromShape.apply(this, arguments)
			} else this._array = new r[this._dtype], this._shape = [0], this._size = 0
		};
	return v.prototype = {
		initFromArray: function(e) {
			function i(e, r, s) {
				var o = s.length;
				for (var u = 0; u < o; u++) e < t - 1 ? i(e + 1, r, s[u]) : r[n++] = s[u]
			}
			var t = y(e),
				n = 0,
				s = b(e),
				o = g(s);
			return this._array = new r[this._dtype](o), i(0, this._array, e), this._shape = s, this._size = o, this
		},
		initFromShape: function(e) {
			typeof e == "number" && (e = Array.prototype.slice.call(arguments));
			if (e) {
				var t = g(e);
				if (this._dtype === "number") {
					this._array = [];
					var n = this._array;
					for (var i = 0; i < t; i++) n[i] = 0
				} else this._array = new r[this._dtype](t)
			}
			return this._shape = e, this._size = g(e), this
		},
		fill: function(e) {
			var t = this._array;
			for (var n = 0; n < t.length; n++) t[n] = e;
			return this
		},
		shape: function() {
			return this._shape.slice()
		},
		size: function() {
			return this._size
		},
		dtype: function() {
			return this._dtype
		},
		dimension: function() {
			return this._shape.length
		},
		strides: function() {
			var e = E(this._shape),
				t = i[this._dtype];
			for (var n = 0; n < e.length; n++) e[n] *= t;
			return e
		},
		reshape: function(e) {
			typeof e == "number" && (e = Array.prototype.slice.call(arguments));
			if (!this._isShapeValid(e)) throw new Error("Total size of new array must be unchanged");
			return this._shape = e, this
		},
		_isShapeValid: function(e) {
			return g(e) === this._size
		},
		resize: function(e) {
			typeof e == "number" && (e = Array.prototype.slice.call(arguments));
			var t = g(e);
			if (t < this._size) this._dtype === "number" && (this._array.length = t);
			else if (this._dtype === "number")
				for (var n = this._array.length; n < t; n++) this._array[n] = 0;
			else {
				var i = new r[this._dtype](t),
					s = this._array;
				for (var n = 0; n < s.length; n++) i[n] = s[n];
				this._array = i
			}
			return this._shape = e, this._size = t, this
		},
		transpose: t(function(e, t) {
			var n = [];
			for (var r = 0; r < this._shape.length; r++) n.push(r);
			typeof e == "undefined" && (e = n.slice());
			for (var r = 0; r < e.length; r++)
				if (e[r] >= this._shape.length) throw new Error(T(e[r]));
			if (e.length <= 1) return this;
			var i = n.slice();
			for (var r = 0; r < Math.floor(e.length / 2); r++)
				for (var s = e.length - 1; s >= Math.ceil(e.length / 2); s--) i[e[r]] = e[s], i[e[s]] = e[r];
			return this._transposelike(i, t)
		}),
		swapaxes: t(function(e, t, n) {
			return this.transpose([e, t], n)
		}),
		rollaxis: t(function(e, t, n) {
			if (e >= this._shape.length) throw new Error(T(e));
			var r = [];
			for (var i = 0; i < this._shape.length; i++) r.push(i);
			return r.splice(e, 1), r.splice(t, 0, e), this._transposelike(r, n)
		}, {
			start: 0
		}),
		_transposelike: function(e, t) {
			function p(e, t, r) {
				var u = i[e],
					a = s[e],
					f = c[e];
				if (e < o - 1)
					for (var l = 0; l < u; l++) p(e + 1, t + a * l, r + f * l);
				else
					for (var l = 0; l < u; l++) h[r + l] = n[t + a * l]
			}
			var n = this._array,
				i = this._shape.slice(),
				s = E(this._shape),
				o = i.length,
				u = [],
				a = [];
			for (var f = 0; f < e.length; f++) {
				var l = e[f];
				a[f] = i[l], u[f] = s[l]
			}
			s = u, i = a, this._shape = i;
			var c = E(this._shape);
			t || (t = new v, t._shape = this._shape.slice(), t._dtype = this._dtype, t._size = this._size);
			var h = new r[this._dtype](this._size);
			return t._array = h, p(0, 0, 0), t
		},
		repeat: t(function(e, t, n) {
			var r;
			typeof t == "undefined" ? (r = [this._size], t = 0) : r = this._shape.slice();
			var i = r.slice();
			r[t] *= e;
			if (!n) n = new v(this._dtype), n.initFromShape(r);
			else if (!S(r, n._shape)) throw new Error(x(r, n._shape));
			var s = n._array,
				o = w(i, t),
				u = i[t],
				a = this._array,
				f = o * u;
			for (var l = 0; l < this._size; l += f)
				for (var c = 0; c < o; c++) {
					var h = l + c,
						p = l * e + c;
					for (var d = 0; d < u; d++) {
						for (var m = 0; m < e; m++) s[p] = a[h], p += o;
						h += o
					}
				}
			return n
		}),
		choose: function() {
			console.warn("TODO")
		},
		take: function() {
			console.warn("TODO")
		},
		tile: function() {
			console.warn("TODO")
		},
		_withPreprocess1: function(e, t, n, r) {
			var i = this._array;
			if (!this._size) return;
			if (typeof e != "undefined") {
				e < 0 && (e = this._shape.length + e);
				if (e >= this._shape.length || e < 0) throw new Error(T(e));
				var s = this._shape.slice();
				s.splice(e, 1);
				if (t && !S(s, t._shape)) throw new Error(x(s, t._shape));
				t || (t = new v(this._dtype), t.initFromShape(s));
				var o = t._array,
					u = w(this._shape, e),
					a = this._shape[e],
					f = u * a;
				return n.call(this, o, i, f, a, u), t
			}
			return r.call(this, i)
		},
		_withPreprocess2: function(e, t, n, r) {
			var i = this._array;
			if (!this._size) return;
			if (t && !S(this._shape, t._shape)) throw new Error(x(this._shape, t._shape));
			t || (t = new v(this._dtype), t.initFromShape(this._shape));
			var s = t._array;
			if (typeof e != "undefined") {
				e < 0 && (e = this._shape.length + e);
				if (e >= this._shape.length || e < 0) throw new Error(T(e));
				if (e >= this._shape.length) throw new Error(T(e));
				var o = w(this._shape, e),
					u = this._shape[e],
					a = o * u;
				n.call(this, s, i, a, u, o)
			} else t.reshape([this._size]), r.call(this, s, i);
			return t
		},
		max: t(function() {
			function e(e, t, n, r, i) {
				var s = 0;
				for (var o = 0; o < this._size; o += n)
					for (var u = 0; u < i; u++) {
						var a = u + o,
							f = t[a];
						for (var l = 0; l < r; l++) {
							var c = t[a];
							c > f && (f = c), a += i
						}
						e[s++] = f
					}
			}

			function t(e) {
				var t = e[0];
				for (var n = 1; n < this._size; n++) e[n] > t && (t = e[n]);
				return t
			}
			return function(n, r) {
				return this._withPreprocess1(n, r, e, t)
			}
		}()),
		min: t(function() {
			function e(e, t, n, r, i) {
				var s = 0;
				for (var o = 0; o < this._size; o += n)
					for (var u = 0; u < i; u++) {
						var a = u + o,
							f = t[a];
						for (var l = 0; l < r; l++) {
							var c = t[a];
							c < f && (f = c), a += i
						}
						e[s++] = f
					}
			}

			function t(e) {
				var t = e[0];
				for (var n = 1; n < this._size; n++) e[n] < t && (t = e[n]);
				return t
			}
			return function(n, r) {
				return this._withPreprocess1(n, r, e, t)
			}
		}()),
		argmax: t(function() {
			function e(e, t, n, r, i) {
				var s = 0;
				for (var o = 0; o < this._size; o += n)
					for (var u = 0; u < i; u++) {
						var a = 0,
							f = u + o,
							l = t[f];
						for (var c = 0; c < r; c++) {
							var h = t[f];
							h > l && (l = h, a = c), f += i
						}
						e[s++] = a
					}
			}

			function t(e) {
				var t = e[0],
					n = 0;
				for (var r = 1; r < this._size; r++) e[r] > t && (n = r, t = e[r]);
				return n
			}
			return function(n, r) {
				return this._withPreprocess1(n, r, e, t)
			}
		}()),
		argmin: t(function() {
			function e(e, t, n, r, i) {
				var s = 0;
				for (var o = 0; o < this._size; o += n)
					for (var u = 0; u < i; u++) {
						var a = 0,
							f = u + o,
							l = t[f];
						for (var c = 0; c < r; c++) {
							var h = t[f];
							h < l && (l = h, a = c), f += i
						}
						e[s++] = a
					}
			}

			function t(e) {
				var t = e[0],
					n = 0;
				for (var r = 1; r < this._size; r++) e[r] < t && (n = r, t = e[r]);
				return n
			}
			return function(n, r) {
				return this._withPreprocess1(n, r, e, t)
			}
		}()),
		sum: t(function() {
			function e(e, t, n, r, i) {
				var s = 0;
				for (var o = 0; o < this._size; o += n)
					for (var u = 0; u < i; u++) {
						var a = 0,
							f = u + o;
						for (var l = 0; l < r; l++) a += t[f], f += i;
						e[s++] = a
					}
			}

			function t(e) {
				var t = 0;
				for (var n = 0; n < this._size; n++) t += e[n];
				return t
			}
			return function(n, r) {
				return this._withPreprocess1(n, r, e, t)
			}
		}()),
		prod: t(function() {
			function e(e, t, n, r, i) {
				var s = 0;
				for (var o = 0; o < this._size; o += n)
					for (var u = 0; u < i; u++) {
						var a = 1,
							f = u + o;
						for (var l = 0; l < r; l++) a *= t[f], f += i;
						e[s++] = a
					}
			}

			function t(e) {
				var t = 1;
				for (var n = 0; n < this._size; n++) t *= e[n];
				return t
			}
			return function(n, r) {
				return this._withPreprocess1(n, r, e, t)
			}
		}()),
		mean: t(function() {
			function e(e, t, n, r, i) {
				var s = 0;
				for (var o = 0; o < this._size; o += n)
					for (var u = 0; u < i; u++) {
						var a = 0,
							f = u + o;
						for (var l = 0; l < r; l++) a += t[f], f += i;
						var c = a / r;
						e[s++] = c
					}
			}

			function t(e) {
				var t = 0,
					n = e.length;
				for (var r = 0; r < n; r++) t += e[r];
				var i = t / n;
				return i
			}
			return function(n, r) {
				return this._withPreprocess1(n, r, e, t)
			}
		}()),
		"var": t(function() {
			function e(e, t, n, r, i) {
				var s = 0;
				for (var o = 0; o < this._size; o += n)
					for (var u = 0; u < i; u++) {
						var a = 0,
							f = u + o;
						for (var l = 0; l < r; l++) a += t[f], f += i;
						var c = a / r,
							h = 0;
						f = u + o;
						for (var l = 0; l < r; l++) {
							var p = t[f] - c;
							h += p * p, f += i
						}
						e[s++] = h / r
					}
			}

			function t(e) {
				var t = 0,
					n = e.length;
				for (var r = 0; r < n; r++) t += e[r];
				var i = t / n,
					s = 0;
				for (var r = 0; r < n; r++) {
					var o = e[r] - i;
					s += o * o
				}
				return s / n
			}
			return function(n, r) {
				return this._withPreprocess1(n, r, e, t)
			}
		}()),
		std: t(function() {
			function e(e, t, n, r, i) {
				var s = 0;
				for (var o = 0; o < this._size; o += n)
					for (var u = 0; u < i; u++) {
						var a = 0,
							f = u + o;
						for (var l = 0; l < r; l++) a += t[f], f += i;
						var c = a / r,
							h = 0;
						f = u + o;
						for (var l = 0; l < r; l++) {
							var p = t[f] - c;
							h += p * p, f += i
						}
						e[s++] = Math.sqrt(h / r)
					}
			}

			function t(e) {
				var t = 0,
					n = e.length;
				for (var r = 0; r < n; r++) t += e[r];
				var i = t / n,
					s = 0;
				for (var r = 0; r < n; r++) {
					var o = e[r] - i;
					s += o * o
				}
				return Math.sqrt(s / n)
			}
			return function(n, r) {
				return this._withPreprocess1(n, r, e, t)
			}
		}()),
		ptp: t(function() {
			function e(e, t, n, r, i) {
				var s = 0;
				for (var o = 0; o < this._size; o += n)
					for (var u = 0; u < i; u++) {
						var a = o + u,
							f = t[a],
							l = t[a];
						for (var c = 0; c < r; c++) {
							var h = t[a];
							h < f && (f = h), h > l && (l = h), a += i
						}
						e[s++] = l - f
					}
			}

			function t(e) {
				var t = e[0],
					n = e[0];
				for (var r = 1; r < this._size; r++) e[r] < t && (t = e[r]), e[r] > n && (n = e[r]);
				return n - t
			}
			return function(n, r) {
				return this._withPreprocess1(n, r, e, t)
			}
		}()),
		sort: t(function(e, t) {
			e < 0 && (e = this._shape.length + e);
			var n;
			t === "ascending" ? n = function(e, t) {
				return e - t
			} : t === "descending" && (n = function(e, t) {
				return t - e
			});
			var r = this._array,
				i = w(this._shape, e),
				s = this._shape[e],
				o = i * s,
				u = new Array(s);
			for (var a = 0; a < this._size; a += o)
				for (var f = 0; f < i; f++) {
					var l = a + f;
					for (var c = 0; c < s; c++) u[c] = r[l], l += i;
					u.sort(n);
					var l = a + f;
					for (var c = 0; c < s; c++) r[l] = u[c], l += i
				}
			return this
		}, {
			axis: -1,
			order: "ascending"
		}),
		argsort: t(function(e, t, n) {
			e < 0 && (e = this._shape.length + e);
			if (!this._size) return;
			if (n && !S(this._shape, n._shape)) throw new Error(x(this._shape, n._shape));
			n || (n = new v(this._dtype), n.initFromShape(this._shape));
			var r = n._array,
				i;
			t === "ascending" ? i = function(e, t) {
				return f[e] - f[t]
			} : t === "descending" && (i = function(e, t) {
				return f[t] - f[e]
			});
			var s = this._array,
				o = w(this._shape, e),
				u = this._shape[e],
				a = o * u,
				f = new Array(u),
				l = new Array(u);
			for (var c = 0; c < this._size; c += a)
				for (var h = 0; h < o; h++) {
					var p = c + h;
					for (var d = 0; d < u; d++) f[d] = s[p], l[d] = d, p += o;
					l.sort(i);
					var p = c + h;
					for (var d = 0; d < u; d++) r[p] = l[d], p += o
				}
			return n
		}, {
			axis: -1,
			order: "ascending"
		}),
		cumsum: t(function() {
			function e(e, t, n, r, i) {
				for (var s = 0; s < this._size; s += n)
					for (var o = 0; o < i; o++) {
						var u = s + o,
							a = u;
						e[u] = t[u];
						for (var f = 1; f < r; f++) a = u, u += i, e[u] = e[a] + t[u]
					}
			}

			function t(e, t) {
				e[0] = t[0];
				for (var n = 1; n < e.length; n++) e[n] = e[n - 1] + t[n]
			}
			return function(n, r) {
				return this._withPreprocess2(n, r, e, t)
			}
		}()),
		cumprod: t(function() {
			function e(e, t, n, r, i) {
				for (var s = 0; s < this._size; s += n)
					for (var o = 0; o < i; o++) {
						var u = s + o,
							a = u;
						e[u] = t[u];
						for (var f = 1; f < r; f++) a = u, u += i, e[u] = e[a] * t[u]
					}
			}

			function t(e, t) {
				e[0] = t[0];
				for (var n = 1; n < e.length; n++) e[n] = e[n - 1] * t[n]
			}
			return function(n, r) {
				return this._withPreprocess2(n, r, e, t)
			}
		}()),
		dot: function() {
			console.warn("TODO")
		},
		map: function(e, t) {
			var n = this._array,
				r = this._array,
				i = n[0],
				s = n[0],
				o = this._size;
			for (var u = 1; u < o; u++) {
				var a = n[u];
				a < i && (i = a), a > s && (s = a)
			}
			var f = s - i,
				l = t - e;
			for (var u = 0; u < o; u++)
				if (f === 0) r[u] = e;
				else {
					var a = n[u],
						c = (a - i) / f;
					r[u] = l * c + e
				}
			return this
		},
		add: function(e, t) {
			return this.binaryOperation(this, e, s, t)
		},
		sub: function(e, t) {
			return this.binaryOperation(this, e, o, t)
		},
		mul: function(e, t) {
			return this.binaryOperation(this, e, u, t)
		},
		div: function(e, t) {
			return this.binaryOperation(this, e, a, t)
		},
		mod: function(e, t) {
			return this.binaryOperation(this, e, f, t)
		},
		and: function(e, t) {
			return this.binaryOperation(this, e, l, t)
		},
		or: function(e, t) {
			return this.binaryOperation(this, e, c, t)
		},
		xor: function(e, t) {
			return this.binaryOperation(this, e, h, t)
		},
		equal: function(e, t) {
			return this.binaryOperation(this, e, p, t)
		},
		binaryOperation: function(e, t, n, r) {
			var i = [],
				d = typeof e == "number",
				m = typeof t == "number";
			if (d) i = t._shape.slice();
			else if (m) i = e._shape.slice();
			else {
				var g = e._shape.length - 1,
					y = t._shape.length - 1,
					b = e,
					E = t;
				while (g >= 0 && y >= 0) {
					if (e._shape[g] == 1) i.unshift(t._shape[y]), b = e.repeat(t._shape[y], g);
					else if (t._shape[y] == 1) i.unshift(e._shape[g]), E = t.repeat(e._shape[g], y);
					else {
						if (t._shape[y] != e._shape[g]) throw new Error(x(e._shape, t._shape));
						i.unshift(e._shape[g])
					}
					g--, y--
				}
				for (var T = g; T >= 0; T--) i.unshift(e._shape[T]);
				for (var T = y; T >= 0; T--) i.unshift(t._shape[T]);
				e = b, t = E
			} if (!r) r = new v(this._dtype), r.initFromShape(i);
			else if (!S(i, r._shape)) throw new Error(x(i, r._shape));
			var N = r._array,
				C, k, L, A;
			d ? (C = t._shape.length - 1, k = !1, L = e, A = t._array) : m ? (C = e._shape.length - 1, k = !0, A = t, L = e._array) : (C = Math.abs(e._shape.length - t._shape.length), k = e._shape.length >= t._shape.length, L = e._array, A = t._array);
			var O = w(i, C),
				M = i[C],
				_ = O * M,
				D = r._size / _,
				P, H, B, j = 0;
			if (k)
				if (m)
					for (var F = 0; F < D; F++)
						for (var T = 0; T < _; T++) {
							P = L[j], H = A;
							switch (n) {
								case s:
									B = P + H;
									break;
								case o:
									B = P - H;
									break;
								case u:
									B = P * H;
									break;
								case a:
									B = P / H;
									break;
								case f:
									B = P % H;
									break;
								case l:
									B = P & H;
									break;
								case c:
									B = P | H;
									break;
								case h:
									B = P ^ H;
									break;
								case p:
									B = P == H;
									break;
								default:
									throw new Error("Unkown operation " + n)
							}
							N[j] = B, j++
						} else
							for (var F = 0; F < D; F++)
								for (var T = 0; T < _; T++) {
									P = L[j], H = A[T];
									switch (n) {
										case s:
											B = P + H;
											break;
										case o:
											B = P - H;
											break;
										case u:
											B = P * H;
											break;
										case a:
											B = P / H;
											break;
										case f:
											B = P % H;
											break;
										case l:
											B = P & H;
											break;
										case c:
											B = P | H;
											break;
										case h:
											B = P ^ H;
											break;
										case p:
											B = P == H;
											break;
										default:
											throw new Error("Unkown operation " + n)
									}
									N[j] = B, j++
								} else if (d)
									for (var F = 0; F < D; F++)
										for (var T = 0; T < _; T++) {
											P = L, H = A[j];
											switch (n) {
												case s:
													B = P + H;
													break;
												case o:
													B = P - H;
													break;
												case u:
													B = P * H;
													break;
												case a:
													B = P / H;
													break;
												case f:
													B = P % H;
													break;
												case l:
													B = P & H;
													break;
												case c:
													B = P | H;
													break;
												case h:
													B = P ^ H;
													break;
												case p:
													B = P == H;
													break;
												default:
													throw new Error("Unkown operation " + n)
											}
											N[j] = B, j++
										} else
											for (var F = 0; F < D; F++)
												for (var T = 0; T < _; T++) {
													P = L[j], H = A[T];
													switch (n) {
														case s:
															B = P + H;
															break;
														case o:
															B = P - H;
															break;
														case u:
															B = P * H;
															break;
														case a:
															B = P / H;
															break;
														case f:
															B = P % H;
															break;
														case l:
															B = P & H;
															break;
														case c:
															B = P | H;
															break;
														case h:
															B = P ^ H;
															break;
														case p:
															B = P == H;
															break;
														default:
															throw new Error("Unkown operation " + n)
													}
													N[j] = B, j++
												}
								return r
		},
		neg: function() {
			var e = this._array;
			for (var t = 0; t < this._size; t++) e[t] = -e[t];
			return this
		},
		sin: function() {
			return this._mathAdapter(Math.sin)
		},
		cos: function() {
			return this._mathAdapter(Math.cos)
		},
		tan: function() {
			return this._mathAdapter(Math.tan)
		},
		abs: function() {
			return this._mathAdapter(Math.abs)
		},
		log: function() {
			return this._mathAdapter(Math.log)
		},
		sqrt: function() {
			return this._mathAdapter(Math.sqrt)
		},
		ceil: function() {
			return this._mathAdapter(Math.ceil)
		},
		floor: function() {
			return this._mathAdapter(Math.floor)
		},
		pow: function(e) {
			var t = this._array;
			for (var n = 0; n < this._size; n++) t[n] = Math.pow(t[n], e);
			return this
		},
		_mathAdapter: function(e) {
			var t = this._array;
			for (var n = 0; n < this._size; n++) t[n] = e(t[n]);
			return this
		},
		round: function(e) {
			e = Math.floor(e || 0);
			var t = Math.pow(10, e),
				n = this._array;
			if (e === 0)
				for (var r = 0; r < this._size; r++) n[r] = Math.round(n[r]);
			else
				for (var r = 0; r < this._size; r++) n[r] = Math.round(n[r] * t) / t;
			return this
		},
		clip: function(e, t) {
			var n = this._array;
			for (var r = 0; r < this._size; r++) n[r] = Math.max(Math.min(n[r], t), e);
			return this
		},
		get: function(e, t) {
			function l(e, t) {
				var r = i[e],
					s = n[e];
				if (e < o - 1)
					if (r[2] > 0)
						for (var c = r[0]; c < r[1]; c += r[2]) l(e + 1, t + s * c);
					else
						for (var c = r[0]; c > r[1]; c += r[2]) l(e + 1, t + s * c);
				else if (r[2] > 0)
					for (var c = r[0]; c < r[1]; c += r[2])
						for (var h = 0; h < s; h++) u[f++] = a[c * s + h + t];
				else
					for (var c = r[0]; c > r[1]; c += r[2])
						for (var h = 0; h < s; h++) u[f++] = a[c * s + h + t]
			}
			typeof e == "number" && (e = e.toString());
			var n = E(this._shape),
				r = this._parseRanges(e),
				i = r[0],
				s = r[1];
			if (i.length > this._shape.length) throw new Error("Too many indices");
			var o = i.length,
				u;
			s.length ? (t = new v(this._dtype), t.initFromShape(s), u = t._array) : u = [];
			var a = this._array,
				f = 0;
			return l(0, 0), s.length ? t : u[0]
		},
		set: function(e, t) {
			typeof e == "number" && (e = e.toString());
			var n = E(this._shape),
				r = this._parseRanges(e),
				i = r[0],
				s = r[1];
			if (i.length > this._shape.length) throw new Error("Too many indices");
			var o = typeof t == "number",
				u = i.length,
				a = this._array;
			if (o) var f = t;
			else {
				if (!S(s, t.shape())) throw new Error(x(s, t.shape()));
				var f = t._array
			}
			var l = 0,
				c = function(e, t) {
					var r = i[e],
						s = n[e];
					if (e < u - 1)
						if (r[2] > 0)
							for (var h = r[0]; h < r[1]; h += r[2]) c(e + 1, t + s * h);
						else
							for (var h = r[0]; h > r[1]; h += r[2]) c(e + 1, t + s * h);
					else if (r[2] > 0)
						for (var h = r[0]; h < r[1]; h += r[2])
							for (var p = 0; p < s; p++) o ? a[h * s + p + t] = f : a[h * s + p + t] = f[l++];
					else
						for (var h = r[0]; h > r[1]; h += r[2])
							for (var p = 0; p < s; p++) o ? a[h * s + p + t] = f : a[h * s + p + t] = f[l++]
				};
			return c(0, 0), this
		},
		insert: t(function(e, t, n) {
			var i = this._array,
				s = !1;
			typeof e == "number" && (e = [e], s = !0), typeof t == "number" ? t = new v([t]) : t instanceof Array && (t = new v(t)), typeof n == "undefined" && (this._shape = [this._size], n = 0);
			var o = e[0],
				u = this._shape[n];
			for (var a = 0; a < e.length; a++) {
				e[a] < 0 && (e[a] = u + e[a]);
				if (e[a] > u) throw new Error(N(e[a]));
				if (e[a] < o) throw new Error("Index must be in ascending order");
				o = e[a]
			}
			var f = this._shape.slice();
			s ? f.splice(n, 1) : f[n] = e.length;
			var l = t._shape,
				c = l.length - 1,
				h = f.length - 1,
				p = t;
			while (c >= 0 && h >= 0) {
				if (l[c] === 1) p = t.repeat(f[h], c);
				else if (l[c] !== f[h]) throw new Error(x(l, f));
				c--, h--
			}
			t = p;
			var d = w(this._shape, n),
				u = this._shape[n],
				m = u * d,
				y = this._size / m,
				b = e.length,
				E = new Uint32Array(y * b),
				S = 0;
			for (var T = 0; T < this._size; T += m)
				for (var a = 0; a < b; a++) {
					var C = e[a];
					E[S++] = T + C * d
				}
			var k = this._shape.slice();
			k[n] += e.length;
			var L = g(k);
			if (this._array.length < L) var i = new r[this._dtype](L);
			else var i = this._array;
			var A = this._array,
				O = t._array,
				M = E.length - 1,
				_ = this._size,
				D = E[M],
				P = L - 1,
				H = t._size - 1;
			while (M >= 0) {
				for (var a = _ - 1; a >= D; a--) i[P--] = A[a];
				_ = D, D = E[--M];
				for (var a = 0; a < d; a++) H < 0 && (H = t._size - 1), i[P--] = O[H--]
			}
			for (var a = _ - 1; a >= 0; a--) i[P--] = A[a];
			return this._array = i, this._shape = k, this._size = L, this
		}),
		append: function() {
			console.warn("TODO")
		},
		"delete": t(function(e, t) {
			var n = this._array;
			typeof e == "number" && (e = [e]);
			var r = this._size;
			typeof t == "undefined" && (this._shape = [r], t = 0);
			var i = w(this._shape, t),
				s = this._shape[t],
				o = i * s,
				u = 0;
			for (var a = 0; a < r; a += o) {
				var f = 0,
					l = e[0],
					c = 0;
				while (c < e.length) {
					l < 0 && (l += s);
					if (l > s) throw new Error(N(l));
					if (l < f) throw new Error("Index must be in ascending order");
					for (var h = f; h < l; h++)
						for (var p = 0; p < i; p++) n[u++] = n[h * i + p + a];
					f = l + 1, l = e[++c]
				}
				for (var h = f; h < s; h++)
					for (var p = 0; p < i; p++) n[u++] = n[h * i + p + a]
			}
			return this._shape[t] -= e.length, this._size = g(this._shape), this
		}),
		_parseRanges: function(e) {
			var t = e.split(/\s*,\s*/),
				n = [],
				r = [],
				i = 0;
			for (var s = 0; s < t.length; s++)
				if (t[s] === "...") {
					var o = this._shape.length - (t.length - s);
					while (i <= o) n.push([0, this._shape[i], 1]), r.push(this._shape[i]), i++
				} else {
					var u = m(t[s], this._shape[i]);
					n.push(u);
					if (t[s].indexOf(":") >= 0) {
						var a = Math.floor((u[1] - u[0]) / u[2]);
						a = a < 0 ? 0 : a, r.push(a)
					}
					i++
				}
			for (; i < this._shape.length; i++) r.push(this._shape[i]);
			return [n, r]
		},
		toArray: function() {
			function i(s, o) {
				var u = n[s];
				for (var a = 0; a < u; a++) s < r - 1 ? i(s + 1, o[a] = []) : o[a] = e[t++]
			}
			var e = this._array,
				t = 0,
				n = this._shape,
				r = n.length,
				s = [];
			return i(0, s), s
		},
		copy: function() {
			var e = new v;
			return e._array = n.call(this._array), e._shape = this._shape.slice(), e._dtype = this._dtype, e._size = this._size, e
		},
		constructor: v
	}, v.range = t(function(e, t, i, s) {
		var o = n.call(arguments),
			u = o[o.length - 1];
		if (typeof u == "string") {
			var s = u;
			o.pop()
		}
		o.length === 1 ? (t = o[0], i = 1, e = 0) : o.length == 2 && (i = 1), s = s || "number";
		var a = new r[s](Math.ceil((t - e) / i)),
			f = 0;
		for (var l = e; l < t; l += i) a[f++] = l;
		var c = new v;
		return c._array = a, c._shape = [a.length], c._dtype = s, c._size = a.length, c
	}), v.zeros = t(function(e, t) {
		var n = new v(t);
		return n.initFromShape(e), n
	}), v
}), define("echarts/chart/chord", ["require", "../component/base", "./base", "zrender/shape/Text", "zrender/shape/Line", "zrender/shape/Sector", "../util/shape/Chord", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/vector", "../util/ndarray", "../chart"], function(e) {
	function p(e, r, i, s, o) {
		t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
	}
	var t = e("../component/base"),
		n = e("./base"),
		r = e("zrender/shape/Text"),
		i = e("zrender/shape/Line"),
		s = e("zrender/shape/Sector"),
		o = e("../util/shape/Chord"),
		u = e("../config"),
		a = e("../util/ecData"),
		f = e("zrender/tool/util"),
		l = e("zrender/tool/vector"),
		c = e("../util/ndarray"),
		h = window.devicePixelRatio || 1;
	return p.prototype = {
		type: u.CHART_TYPE_CHORD,
		_buildShape: function() {
			var e = this.series;
			this.selectedMap = {}, this.chordSeries = [], this.chordSerieSample = null;
			var t = [],
				n = 0;
			for (var r = 0, i = e.length; r < i; r++)
				if (e[r].type === this.type) {
					this.chordSerieSample || (this.chordSerieSample = e[r], this.reformOption(this.chordSerieSample));
					var s = this.isSelected(e[r].name);
					this.selectedMap[e[r].name] = s;
					if (!s) continue;
					this.chordSeries.push(e[r]), this.buildMark(r), t.push(e[r].matrix), n++
				}
			if (!this.chordSerieSample) return;
			if (!this.chordSeries.length) {
				this.addShapeList();
				return
			}
			var o = this.zr.getWidth(),
				u = this.zr.getHeight(),
				a = Math.min(o, u);
			this.groups = this.chordSerieSample.data, this.startAngle = this.chordSerieSample.startAngle, this.startAngle = this.startAngle % 360, this.startAngle < 0 && (this.startAngle = this.startAngle + 360), this.clockWise = this.chordSerieSample.clockWise, this.innerRadius = this.parsePercent(this.chordSerieSample.radius[0], a / 2), this.outerRadius = this.parsePercent(this.chordSerieSample.radius[1], a / 2), this.padding = this.chordSerieSample.padding, this.sortGroups = this.chordSerieSample.sort, this.sortSubGroups = this.chordSerieSample.sortSub, this.showScale = this.chordSerieSample.showScale, this.showScaleText = this.chordSerieSample.showScaleText, this.center = [this.parsePercent(this.chordSerieSample.center[0], o), this.parsePercent(this.chordSerieSample.center[1], u)];
			var f = this.chordSerieSample.itemStyle.normal.chordStyle.lineStyle.width - this.chordSerieSample.itemStyle.normal.lineStyle.width;
			this.strokeFix = f / h / this.innerRadius / Math.PI * 180, this.dataMat = new c(t), this.dataMat = this.dataMat._transposelike([1, 2, 0]);
			var l = this._filterData(this.dataMat, this.groups);
			this.dataMat = l[0], this.groups = l[1];
			var p = this.dataMat.shape();
			if (p[0] !== p[1] || p[0] !== this.groups.length) throw new Error("Data not valid");
			if (p[0] === 0 || p[2] === 0) {
				this.addShapeList();
				return
			}
			this.dataMat.reshape(p[0], p[1] * p[2]);
			var d = this.dataMat.sum(1),
				v = d.mul(1 / d.sum()),
				m = p[0],
				g = p[1] * p[2],
				y = v.mul(360 - this.padding * m),
				b = this.dataMat.div(this.dataMat.sum(1).reshape(m, 1));
			b = b.mul(y.sub(this.strokeFix * 2).reshape(m, 1));
			switch (this.sortGroups) {
				case "ascending":
				case "descending":
					var w = y.argsort(0, this.sortGroups);
					y.sort(0, this.sortGroups), d.sort(0, this.sortGroups);
					break;
				default:
					var w = c.range(p[0])
			}
			switch (this.sortSubGroups) {
				case "ascending":
				case "descending":
					var E = b.argsort(1, this.sortSubGroups);
					b.sort(1, this.sortSubGroups);
					break;
				default:
					var E = c.range(g).reshape(1, g).repeat(m, 0)
			}
			var S = w.toArray(),
				x = y.toArray(),
				T = E.toArray(),
				N = b.toArray(),
				C = d.toArray(),
				k = [],
				L = (new c(m, g)).toArray(),
				A = [],
				O = 0,
				M = 0;
			for (var r = 0; r < m; r++) {
				var _ = S[r];
				A[_] = C[r], M = O + x[r], k[_] = [O, M];
				var D = O + this.strokeFix,
					P = D;
				for (var H = 0; H < g; H++) {
					P = D + N[_][H];
					var B = T[_][H];
					L[_][B] = [D, P], D = P
				}
				O = M + this.padding
			}
			this.chordShapes = (new c(m, m, n)).toArray(), this.sectorShapes = [], this._buildSectors(k, A), L = (new c(L)).reshape(m, m, n, 2).toArray(), this._buildChords(L, this.dataMat.reshape(p).toArray());
			var l = this.normalizeValue(A);
			this.showScale && this._buildScales(l[0], l[1], k, (new c(l[0])).sum() / (360 - this.padding * m)), this.addShapeList()
		},
		_filterData: function(e, t) {
			var n = [],
				r = [];
			for (var i = 0; i < t.length; i++) {
				var s = t[i].name;
				this.selectedMap[s] = this.isSelected(s), this.selectedMap[s] ? r.push(t[i]) : n.push(i)
			}
			n.length && (e = e["delete"](n, 0), e = e["delete"](n, 1));
			if (!e.size()) return [e, r];
			n = [];
			var o = [],
				u = e.shape();
			e.reshape(u[0], u[1] * u[2]);
			var a = e.sum(1).toArray();
			e.reshape(u);
			for (var i = 0; i < r.length; i++) a[i] === 0 ? n.push(i) : o.push(r[i]);
			return n.length && (e = e["delete"](n, 0), e = e["delete"](n, 1)), [e, o]
		},
		_buildSectors: function(e, t) {
			function d(e) {
				return function() {
					o && clearTimeout(o), o = setTimeout(function() {
						for (var t = 0; t < n; t++) {
							p.sectorShapes[t].style.opacity = t === e ? 1 : .1, p.zr.modShape(p.sectorShapes[t].id);
							for (var r = 0; r < n; r++)
								for (var s = 0; s < i; s++) {
									var o = p.chordShapes[t][r][s];
									o && (o.style.opacity = t === e || r === e ? .5 : .03, p.zr.modShape(o.id))
								}
						}
						p.zr.refresh()
					}, 50)
				}
			}

			function v() {
				return function() {
					o && clearTimeout(o), o = setTimeout(function() {
						for (var e = 0; e < n; e++) {
							p.sectorShapes[e].style.opacity = 1, p.zr.modShape(p.sectorShapes[e].id);
							for (var t = 0; t < n; t++)
								for (var r = 0; r < i; r++) {
									var s = p.chordShapes[e][t][r];
									s && (s.style.opacity = .5, p.zr.modShape(s.id))
								}
						}
						p.zr.refresh()
					}, 50)
				}
			}
			var n = this.groups.length,
				i = this.chordSeries.length,
				o, u = this.query(this.chordSerieSample, "itemStyle.normal.label.show"),
				f = this.query(this.chordSerieSample, "itemStyle.normal.label.color"),
				c = this.query(this.chordSerieSample, "itemStyle.normal.label.rotate"),
				h = this.query(this.chordSerieSample, "itemStyle.normal.label.distance"),
				p = this;
			for (var m = 0; m < n; m++) {
				var g = this.groups[m],
					y = e[m],
					b = (this.clockWise ? 360 - y[1] : y[0]) + this.startAngle,
					w = (this.clockWise ? 360 - y[0] : y[1]) + this.startAngle,
					E = {
						zlevel: this._zlevelBase,
						style: {
							x: this.center[0],
							y: this.center[1],
							r0: this.innerRadius,
							r: this.outerRadius,
							startAngle: b,
							endAngle: w,
							brushType: "fill",
							opacity: 1,
							color: this.getColor(g.name)
						},
						clickable: !0,
						highlightStyle: {
							brushType: "fill"
						}
					};
				E.style.lineWidth = this.deepQuery([g, this.chordSerieSample], "itemStyle.normal.lineStyle.width"), E.highlightStyle.lineWidth = this.deepQuery([g, this.chordSerieSample], "itemStyle.emphasis.lineStyle.width"), E.style.strokeColor = this.deepQuery([g, this.chordSerieSample], "itemStyle.normal.lineStyle.color"), E.highlightStyle.strokeColor = this.deepQuery([g, this.chordSerieSample], "itemStyle.emphasis.lineStyle.color"), E.style.lineWidth > 0 && (E.style.brushType = "both"), E.highlightStyle.lineWidth > 0 && (E.highlightStyle.brushType = "both"), a.pack(E, this.chordSeries[0], 0, t[m], m, g.name);
				if (u) {
					var S = [b + w] / 2;
					S %= 360;
					var x = S <= 90 || S >= 270;
					S = S * Math.PI / 180;
					var T = [Math.cos(S), -Math.sin(S)],
						N = this.showScaleText ? 35 + h : h,
						C = l.scale([], T, this.outerRadius + N);
					l.add(C, C, this.center);
					var k = {
						zlevel: this._zlevelBase - 1,
						hoverable: !1,
						style: {
							text: g.name,
							textAlign: x ? "left" : "right",
							color: f
						}
					};
					c ? (k.rotation = x ? S : Math.PI + S, x ? k.style.x = this.outerRadius + N : k.style.x = -this.outerRadius - N, k.style.y = 0, k.position = this.center) : (k.style.x = C[0], k.style.y = C[1]), k.style.textColor = this.deepQuery([g, this.chordSerieSample], "itemStyle.normal.label.textStyle.color") || "#fff", k.style.textFont = this.getFont(this.deepQuery([g, this.chordSerieSample], "itemStyle.normal.label.textStyle")), k = new r(k), this.shapeList.push(k)
				}
				E.onmouseover = d(m), E.onmouseout = v(), E = new s(E), this.shapeList.push(E), this.sectorShapes.push(E)
			}
		},
		_buildChords: function(e, t) {
			var n = e.length;
			if (!n) return;
			var r = e[0][0].length,
				i = this.chordSerieSample.itemStyle.normal.chordStyle.lineStyle,
				s = this.chordSerieSample.itemStyle.emphasis.chordStyle.lineStyle;
			for (var u = 0; u < n; u++)
				for (var f = 0; f < n; f++)
					for (var l = 0; l < r; l++) {
						if (this.chordShapes[f][u][l]) continue;
						var c = e[u][f][l][0],
							h = e[f][u][l][0],
							p = e[u][f][l][1],
							d = e[f][u][l][1];
						if (c - d === 0 || h - d === 0) {
							this.chordShapes[u][f][l] = null;
							continue
						}
						var v;
						r === 1 ? p - c <= d - h ? v = this.getColor(this.groups[u].name) : v = this.getColor(this.groups[f].name) : v = this.getColor(this.chordSeries[l].name);
						var m = this.clockWise ? c : 360 - p,
							g = this.clockWise ? p : 360 - c,
							y = this.clockWise ? h : 360 - d,
							b = this.clockWise ? d : 360 - h,
							w = {
								zlevel: this._zlevelBase,
								style: {
									center: this.center,
									r: this.innerRadius,
									source0: m - this.startAngle,
									source1: g - this.startAngle,
									target0: y - this.startAngle,
									target1: b - this.startAngle,
									brushType: "both",
									opacity: .5,
									color: v,
									lineWidth: i.width,
									strokeColor: i.color
								},
								clickable: !0,
								highlightStyle: {
									brushType: "both",
									lineWidth: s.width,
									strokeColor: s.color
								}
							};
						a.pack(w, this.chordSeries[l], l, t[u][f][l], u + "-" + f, this.groups[u].name, this.groups[f].name, t[f][u][l]), w = new o(w), this.chordShapes[u][f][l] = w, this.shapeList.push(w)
					}
		},
		_buildScales: function(e, t, n, s) {
			for (var o = 0; o < n.length; o++) {
				var u = n[o][0],
					a = n[o][1],
					f = u;
				while (f < a) {
					var h = ((this.clockWise ? 360 - f : f) + this.startAngle) / 180 * Math.PI,
						p = [Math.cos(h), -Math.sin(h)],
						d = l.scale([], p, this.outerRadius + 1);
					l.add(d, d, this.center);
					var v = l.scale([], p, this.outerRadius + this.scaleLineLength);
					l.add(v, v, this.center);
					var m = {
						zlevel: this._zlevelBase - 1,
						hoverable: !1,
						style: {
							xStart: d[0],
							yStart: d[1],
							xEnd: v[0],
							yEnd: v[1],
							lineCap: "round",
							brushType: "stroke",
							strokeColor: "#666",
							lineWidth: 1
						}
					};
					m = new i(m), this.shapeList.push(m), f += this.scaleUnitAngle
				}
				if (!this.showScaleText) continue;
				var g = u,
					y = s * 5 * this.scaleUnitAngle,
					b = c.range(0, e[o], y).toArray();
				while (g < a) {
					var h = this.clockWise ? 360 - g : g;
					h = (h + this.startAngle) % 360;
					var w = h <= 90 || h >= 270,
						E = {
							zlevel: this._zlevelBase - 1,
							hoverable: !1,
							style: {
								x: w ? this.outerRadius + this.scaleLineLength + 4 : -this.outerRadius - this.scaleLineLength - 4,
								y: 0,
								text: Math.round(b.shift() * 10) / 10 + t,
								textAlign: w ? "left" : "right"
							},
							position: this.center.slice(),
							rotation: w ? [h / 180 * Math.PI, 0, 0] : [(h + 180) / 180 * Math.PI, 0, 0]
						};
					E = new r(E), this.shapeList.push(E), g += this.scaleUnitAngle * 5
				}
			}
		},
		normalizeValue: function(e) {
			var t = [],
				n = (new c(e)).max(),
				r, i;
			n > 1e4 ? (r = "k", i = .001) : n > 1e7 ? (r = "m", i = 1e-6) : n > 1e10 ? (r = "b", i = 1e-9) : (r = "", i = 1);
			for (var s = 0; s < e.length; s++) t[s] = e[s] * i;
			return [t, r]
		},
		refresh: function(e) {
			e && (this.option = e, this.series = e.series), this.chordSeries = [], this.strokeFix = 0, this.sectorShapes = [], this.chordShapes = [], this.scaleLineLength = 4, this.scaleUnitAngle = 4, this.legend = this.component.legend;
			if (this.legend) this.getColor = function(e) {
				return this.legend.getColor(e)
			}, this.isSelected = function(e) {
				return this.legend.isSelected(e)
			};
			else {
				var t = {},
					n = {},
					r = 0;
				this.getColor = function(e) {
					if (n[e]) return n[e];
					t[e] === undefined && (t[e] = r++);
					for (var i = 0; i < this.chordSeries.length; i++)
						if (this.chordSeries[i].name === e) {
							n[e] = this.query(this.chordSeries[i], "itemStyle.normal.color");
							break
						}
					if (!n[e]) {
						var s = this.groups.length;
						for (var i = 0; i < s; i++)
							if (this.groups[i].name === e) {
								n[e] = this.query(this.groups[i], "itemStyle.normal.color");
								break
							}
					}
					return n[e] || (n[e] = this.zr.getColor(t[e])), n[e]
				}, this.isSelected = function() {
					return !0
				}
			}
			this.backupShapeList(), this._buildShape()
		},
		reformOption: function(e) {
			var t = f.merge;
			e = t(e || {}, this.ecTheme.chord), e.itemStyle.normal.label.textStyle = t(e.itemStyle.normal.label.textStyle || {}, this.ecTheme.textStyle)
		}
	}, f.inherits(p, n), f.inherits(p, t), e("../chart").define("chord", p), p
}), define("echarts/chart/forceLayoutWorker", ["require", "zrender/tool/vector"], function e(t) {
	function s() {
		this.subRegions = [], this.nSubRegions = 0, this.node = null, this.mass = 0, this.centerOfMass = null, this.bbox = new i(4), this.size = 0
	}

	function o() {
		this.position = n.create(), this.force = n.create(), this.forcePrev = n.create(), this.speed = n.create(), this.speedPrev = n.create(), this.mass = 1, this.inDegree = 0, this.outDegree = 0
	}

	function u(e, t) {
		this.source = e, this.target = t, this.weight = 1
	}

	function a() {
		this.barnesHutOptimize = !1, this.barnesHutTheta = 1.5, this.repulsionByDegree = !1, this.preventOverlap = !1, this.strongGravity = !0, this.gravity = 1, this.scaling = 1, this.edgeWeightInfluence = 1, this.center = [0, 0], this.width = 500, this.height = 500, this.maxSpeedIncrease = 1, this.nodes = [], this.edges = [], this.bbox = new i(4), this._rootRegion = new s, this._rootRegion.centerOfMass = n.create(), this._massArr = null, this._k = 0
	}
	var n, r = typeof window == "undefined" && typeof t == "undefined";
	r ? n = {
		create: function(e, t) {
			var n = new Float32Array(2);
			return n[0] = e || 0, n[1] = t || 0, n
		},
		dist: function(e, t) {
			var n = t[0] - e[0],
				r = t[1] - e[1];
			return Math.sqrt(n * n + r * r)
		},
		len: function(e) {
			var t = e[0],
				n = e[1];
			return Math.sqrt(t * t + n * n)
		},
		scaleAndAdd: function(e, t, n, r) {
			return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e
		},
		scale: function(e, t, n) {
			return e[0] = t[0] * n, e[1] = t[1] * n, e
		},
		add: function(e, t, n) {
			return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e
		},
		sub: function(e, t, n) {
			return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e
		},
		normalize: function(e, t) {
			var n = t[0],
				r = t[1],
				i = n * n + r * r;
			return i > 0 && (i = 1 / Math.sqrt(i), e[0] = t[0] * i, e[1] = t[1] * i), e
		},
		negate: function(e, t) {
			return e[0] = -t[0], e[1] = -t[1], e
		},
		copy: function(e, t) {
			return e[0] = t[0], e[1] = t[1], e
		},
		set: function(e, t, n) {
			return e[0] = t, e[1] = n, e
		}
	} : n = t("zrender/tool/vector");
	var i = typeof Float32Array == "undefined" ? Array : Float32Array;
	s.prototype.beforeUpdate = function() {
		for (var e = 0; e < this.nSubRegions; e++) this.subRegions[e].beforeUpdate();
		this.mass = 0, this.centerOfMass && (this.centerOfMass[0] = 0, this.centerOfMass[1] = 0), this.nSubRegions = 0, this.node = null
	}, s.prototype.afterUpdate = function() {
		this.subRegions.length = this.nSubRegions;
		for (var e = 0; e < this.nSubRegions; e++) this.subRegions[e].afterUpdate()
	}, s.prototype.addNode = function(e) {
		if (this.nSubRegions === 0) {
			if (this.node == null) {
				this.node = e;
				return
			}
			this._addNodeToSubRegion(this.node), this.node = null
		}
		this._addNodeToSubRegion(e), this._updateCenterOfMass(e)
	}, s.prototype.findSubRegion = function(e, t) {
		for (var n = 0; n < this.nSubRegions; n++) {
			var r = this.subRegions[n];
			if (r.contain(e, t)) return r
		}
	}, s.prototype.contain = function(e, t) {
		return this.bbox[0] <= e && this.bbox[2] >= e && this.bbox[1] <= t && this.bbox[3] >= t
	}, s.prototype.setBBox = function(e, t, n, r) {
		this.bbox[0] = e, this.bbox[1] = t, this.bbox[2] = n, this.bbox[3] = r, this.size = (n - e + r - t) / 2
	}, s.prototype._newSubRegion = function() {
		var e = this.subRegions[this.nSubRegions];
		return e || (e = new s, this.subRegions[this.nSubRegions] = e), this.nSubRegions++, e
	}, s.prototype._addNodeToSubRegion = function(e) {
		var t = this.findSubRegion(e.position[0], e.position[1]),
			n = this.bbox;
		if (!t) {
			var r = (n[0] + n[2]) / 2,
				i = (n[1] + n[3]) / 2,
				s = (n[2] - n[0]) / 2,
				o = (n[3] - n[1]) / 2,
				u = e.position[0] >= r ? 1 : 0,
				a = e.position[1] >= i ? 1 : 0,
				t = this._newSubRegion();
			t.setBBox(u * s + n[0], a * o + n[1], (u + 1) * s + n[0], (a + 1) * o + n[1])
		}
		t.addNode(e)
	}, s.prototype._updateCenterOfMass = function(e) {
		this.centerOfMass == null && (this.centerOfMass = n.create());
		var t = this.centerOfMass[0] * this.mass,
			r = this.centerOfMass[1] * this.mass;
		t += e.position[0] * e.mass, r += e.position[1] * e.mass, this.mass += e.mass, this.centerOfMass[0] = t / this.mass, this.centerOfMass[1] = r / this.mass
	}, a.prototype.initNodes = function(e, t, n) {
		this.temperature = 1;
		var r = e.length / 2;
		this.nodes.length = 0;
		var i = typeof n != "undefined";
		for (var s = 0; s < r; s++) {
			var u = new o;
			u.position[0] = e[s * 2], u.position[1] = e[s * 2 + 1], u.mass = t[s], i && (u.size = n[s]), this.nodes.push(u)
		}
		this._massArr = t, i && (this._sizeArr = n)
	}, a.prototype.initEdges = function(e, t) {
		var n = e.length / 2;
		this.edges.length = 0;
		var r = typeof t != "undefined";
		for (var i = 0; i < n; i++) {
			var s = e[i * 2],
				o = e[i * 2 + 1],
				a = this.nodes[s],
				f = this.nodes[o];
			if (!a || !f) continue;
			a.outDegree++, f.inDegree++;
			var l = new u(a, f);
			r && (l.weight = t[i]), this.edges.push(l)
		}
	}, a.prototype.update = function() {
		var e = this.nodes.length;
		this.updateBBox(), this._k = .4 * this.scaling * Math.sqrt(this.width * this.height / e);
		if (this.barnesHutOptimize) {
			this._rootRegion.setBBox(this.bbox[0], this.bbox[1], this.bbox[2], this.bbox[3]), this._rootRegion.beforeUpdate();
			for (var t = 0; t < e; t++) this._rootRegion.addNode(this.nodes[t]);
			this._rootRegion.afterUpdate()
		} else {
			var r = 0,
				i = this._rootRegion.centerOfMass;
			n.set(i, 0, 0);
			for (var t = 0; t < e; t++) {
				var s = this.nodes[t];
				r += s.mass, n.scaleAndAdd(i, i, s.position, s.mass)
			}
			n.scale(i, i, 1 / r)
		}
		for (var t = 0; t < e; t++) {
			var s = this.nodes[t];
			n.copy(s.forcePrev, s.force), n.copy(s.speedPrev, s.speed), n.set(s.force, 0, 0)
		}
		for (var t = 0; t < e; t++) {
			var o = this.nodes[t];
			if (this.barnesHutOptimize) this.applyRegionToNodeRepulsion(this._rootRegion, o);
			else
				for (var u = t + 1; u < e; u++) {
					var a = this.nodes[u];
					this.applyNodeToNodeRepulsion(o, a, !1)
				}
			this.gravity > 0 && this.applyNodeGravity(o)
		}
		for (var t = 0; t < this.edges.length; t++) this.applyEdgeAttraction(this.edges[t]);
		var f = n.create();
		for (var t = 0; t < e; t++) {
			var s = this.nodes[t],
				l = s.speed;
			n.scale(s.force, s.force, 1 / 30);
			var c = n.len(s.force) + .1,
				h = Math.min(c, 500) / c;
			n.scale(s.force, s.force, h), n.add(l, l, s.force), n.scale(l, l, this.temperature), n.sub(f, l, s.speedPrev);
			var p = n.len(f);
			if (p > 0) {
				n.scale(f, f, 1 / p);
				var d = n.len(s.speedPrev);
				d > 0 && (p = Math.min(p / d, this.maxSpeedIncrease) * d, n.scaleAndAdd(l, s.speedPrev, f, p))
			}
			var v = n.len(l),
				h = Math.min(v, 100) / (v + .1);
			n.scale(l, l, h), n.add(s.position, s.position, l)
		}
	}, a.prototype.applyRegionToNodeRepulsion = function() {
		var e = n.create();
		return function(r, i) {
			if (r.node) this.applyNodeToNodeRepulsion(r.node, i, !0);
			else {
				n.sub(e, i.position, r.centerOfMass);
				var s = e[0] * e[0] + e[1] * e[1];
				if (s > this.barnesHutTheta * r.size * r.size) {
					var o = this._k * this._k * (i.mass + r.mass) / (s + 1);
					n.scaleAndAdd(i.force, i.force, e, o * 2)
				} else
					for (var u = 0; u < r.nSubRegions; u++) this.applyRegionToNodeRepulsion(r.subRegions[u], i)
			}
		}
	}(), a.prototype.applyNodeToNodeRepulsion = function() {
		var e = n.create();
		return function(r, i, s) {
			if (r == i) return;
			n.sub(e, r.position, i.position);
			var o = e[0] * e[0] + e[1] * e[1];
			if (o === 0) return;
			var u, a = this._k * this._k,
				f = r.mass + i.mass;
			if (this.preventOverlap) {
				var l = Math.sqrt(o);
				l = l - r.size - i.size, l > 0 ? u = a * f / (l * l) : l <= 0 && (u = a * 10 * f)
			} else u = a * f / o;
			s || n.scaleAndAdd(r.force, r.force, e, u * 2), n.scaleAndAdd(i.force, i.force, e, -u * 2)
		}
	}(), a.prototype.applyEdgeAttraction = function() {
		var e = n.create();
		return function(r) {
			var i = r.source,
				s = r.target;
			n.sub(e, i.position, s.position);
			var o = n.len(e),
				u;
			this.edgeWeightInfluence === 0 ? u = 1 : this.edgeWeightInfluence == 1 ? u = r.weight : u = Math.pow(r.weight, this.edgeWeightInfluence);
			var a;
			if (this.preventOverlap) {
				o = o - i.size - s.size;
				if (o <= 0) return
			}
			var a = -u * o / this._k;
			n.scaleAndAdd(i.force, i.force, e, a), n.scaleAndAdd(s.force, s.force, e, -a)
		}
	}(), a.prototype.applyNodeGravity = function() {
		var e = n.create();
		return function(t) {
			n.sub(e, this.center, t.position), this.width > this.height ? e[1] *= this.width / this.height : e[0] *= this.height / this.width;
			var r = n.len(e) / 100;
			this.strongGravity ? n.scaleAndAdd(t.force, t.force, e, r * this.gravity * t.mass) : n.scaleAndAdd(t.force, t.force, e, this.gravity * t.mass / (r + 1))
		}
	}(), a.prototype.updateBBox = function() {
		var e = Infinity,
			t = Infinity,
			n = -Infinity,
			r = -Infinity;
		for (var i = 0; i < this.nodes.length; i++) {
			var s = this.nodes[i].position;
			e = Math.min(e, s[0]), t = Math.min(t, s[1]), n = Math.max(n, s[0]), r = Math.max(r, s[1])
		}
		this.bbox[0] = e, this.bbox[1] = t, this.bbox[2] = n, this.bbox[3] = r
	}, a.getWorkerCode = function() {
		var t = e.toString();
		return t.slice(t.indexOf("{") + 1, t.lastIndexOf("return"))
	};
	if (r) {
		var f = null;
		self.onmessage = function(e) {
			if (e.data instanceof ArrayBuffer) {
				if (!f) return;
				var t = new Float32Array(e.data),
					n = (t.length - 1) / 2;
				for (var r = 0; r < n; r++) {
					var i = f.nodes[r];
					i.position[0] = t[r * 2 + 1], i.position[1] = t[r * 2 + 2]
				}
				return
			}
			switch (e.data.cmd) {
				case "init":
					f || (f = new a), f.initNodes(e.data.nodesPosition, e.data.nodesMass, e.data.nodesSize), f.initEdges(e.data.edges, e.data.edgesWeight), f._token = e.data.token;
					break;
				case "updateConfig":
					if (f)
						for (var s in e.data.config) f[s] = e.data.config[s];
					break;
				case "update":
					var o = e.data.steps;
					if (f) {
						var n = f.nodes.length,
							t = new Float32Array(n * 2 + 1);
						f.temperature = e.data.temperature;
						if (e.data.temperature > .01) {
							for (var r = 0; r < o; r++) f.update(), f.temperature *= e.data.coolDown;
							for (var r = 0; r < n; r++) {
								var i = f.nodes[r];
								t[r * 2 + 1] = i.position[0], t[r * 2 + 2] = i.position[1]
							}
							t[0] = f._token
						}
						self.postMessage(t.buffer, [t.buffer])
					} else {
						var u = new Float32Array;
						self.postMessage(u.buffer, [u.buffer])
					}
			}
		}
	}
	return a
}), define("echarts/chart/force", ["require", "../component/base", "./base", "./forceLayoutWorker", "zrender/shape/Line", "../util/shape/Icon", "../config", "../util/ecData", "zrender/tool/util", "zrender/config", "zrender/tool/vector", "../util/ndarray", "../chart"], function(e) {
	function g() {
		return Math.round((new Date).getTime() / 100) % 1e7
	}

	function y(e, r, i, s, o) {
		var u = this;
		t.call(this, e, r, i, s, o), n.call(this), this.__nodePositionMap = {}, this._nodeShapes = [], this._linkShapes = [], this._updating = !0, this._filteredNodes = null, this._filteredLinks = null, this._rawNodes = null, this._rawLinks = null, this._steps = 1, this._coolDown = .99, this.ondragstart = function() {
			b.apply(u, arguments)
		}, this.ondragend = function() {
			E.apply(u, arguments)
		}, this.ondrop = function() {}, this.shapeHandler.ondragstart = function() {
			u.isDragstart = !0
		}, this.onmousemove = function() {
			w.apply(u, arguments)
		}, this._init()
	}

	function b(e) {
		if (!this.isDragstart || !e.target) return;
		var t = e.target;
		t.fixed = !0, this.isDragstart = !1, this.zr.on(f.EVENT.MOUSEMOVE, this.onmousemove)
	}

	function w() {
		this._temperature = .8
	}

	function E(e, t) {
		if (!this.isDragend || !e.target) return;
		var n = e.target;
		n.fixed = !1, t.dragIn = !0, t.needRefresh = !1, this.isDragend = !1, this.zr.un(f.EVENT.MOUSEMOVE, this.onmousemove)
	}

	function S(e, t, n) {
		return [(Math.random() - .5) * n + e, (Math.random() - .5) * n + t]
	}

	function x(e, t) {
		var n = e.length,
			r = [];
		for (var i = 0; i < n; i++) t(e[i], i) && r.push(e[i]);
		return r
	}
	var t = e("../component/base"),
		n = e("./base"),
		r = e("./forceLayoutWorker"),
		i = e("zrender/shape/Line"),
		s = e("../util/shape/Icon"),
		o = e("../config"),
		u = e("../util/ecData"),
		a = e("zrender/tool/util"),
		f = e("zrender/config"),
		l = e("zrender/tool/vector"),
		c = e("../util/ndarray"),
		h = typeof Float32Array == "undefined" ? Array : Float32Array,
		p = window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
			setTimeout(e, 16)
		},
		d;
	if (typeof Worker != "undefined" && typeof Blob != "undefined") try {
		var v = new Blob([r.getWorkerCode()]);
		d = window.URL.createObjectURL(v)
	} catch (m) {
		d = ""
	}
	return y.prototype = {
		constructor: y,
		type: o.CHART_TYPE_FORCE,
		_init: function() {
			var e = this;
			this.clear(), this._updating = !0, this._buildShape();
			if (this._layoutWorker) this._layoutWorker.onmessage = function(t) {
				e._temperature < .01 ? p(function() {
					e._step.call(e, t)
				}) : e._step.call(e, t)
			}, this._layoutWorker.postMessage({
				cmd: "update",
				steps: this._steps,
				temperature: this._temperature,
				coolDown: this._coolDown
			});
			else {
				var t = function() {
					e._updating && (e._step(), p(t))
				};
				p(t)
			}
		},
		_buildShape: function() {
			var e = this.component.legend,
				t = this.series,
				n;
			this._temperature = 1, this.shapeList.length = 0;
			for (var i = 0, s = t.length; i < s; i++) {
				var u = t[i];
				if (u.type === o.CHART_TYPE_FORCE) {
					t[i] = this.reformOption(t[i]), n = t[i].name || "";
					if (d && u.useWorker) try {
						this._layoutWorker || (this._layoutWorker = new Worker(d)), this._layout = null
					} catch (a) {
						this._layoutWorker = null, this._layout || (this._layout = new r)
					} else this._layout || (this._layout = new r), this._layoutWorker && (this._layoutWorker.terminate(), this._layoutWorker = null);
					this.selectedMap[n] = e ? e.isSelected(n) : !0;
					if (!this.selectedMap[n]) continue;
					this.buildMark(i);
					var f = u.categories;
					for (var l = 0, c = f.length; l < c; l++) f[l].name && (e ? this.selectedMap[l] = e.isSelected(f[l].name) : this.selectedMap[l] = !0);
					this._preProcessData(u), this._nodeShapes.length = 0, this._linkShapes.length = 0, this._buildLinkShapes(u), this._buildNodeShapes(u), this._initLayout(u), this._updateLinkShapes(), this._forceSerie = u;
					break
				}
			}
		},
		_preProcessData: function(e) {
			this._rawNodes = this.query(e, "nodes"), this._rawLinks = a.clone(this.query(e, "links"));
			var t = [],
				n = {},
				r = 0,
				i = this;
			this._filteredNodes = x(this._rawNodes, function(e, s) {
				if (!e) return;
				if (e.ignore) return;
				var o = -1;
				if (typeof e.category == "undefined" || i.selectedMap[e.category]) o = r++;
				return e.name && (n[e.name] = o), t[s] = o, o >= 0
			});
			var s, o;
			this._filteredLinks = x(this._rawLinks, function(e, r) {
				s = e.source, o = e.target;
				var i = !0,
					u = typeof s == "string" ? n[s] : t[s];
				typeof u == "undefined" && (u = -1), u >= 0 ? e.source = u : i = !1;
				var u = typeof o == "string" ? n[o] : t[o];
				return typeof u == "undefined" && (u = -1), u >= 0 ? e.target = u : i = !1, e.rawIndex = r, i
			})
		},
		_initLayout: function(e) {
			var t = this._filteredNodes,
				n = this._filteredLinks,
				r = this._nodeShapes,
				i = t.length,
				s = this.query(e, "minRadius"),
				o = this.query(e, "maxRadius");
			this._steps = e.steps || 1, this._coolDown = e.coolDown || .99;
			var u = this.parseCenter(this.zr, e.center),
				f = this.parsePercent(e.size, this.zr.getWidth()),
				p = this.parsePercent(e.size, this.zr.getHeight()),
				d = Math.min(f, p),
				v = [];
			for (var m = 0; m < i; m++) {
				var y = t[m];
				v.push(y.value || 1)
			}
			var b = new c(v);
			v = b.map(s, o).toArray();
			var w = b.max();
			if (w === 0) return;
			var E = b.mul(1 / w, b).toArray(),
				x = new h(i * 2);
			for (var m = 0; m < i; m++) {
				var T, y = t[m];
				typeof this.__nodePositionMap[y.name] != "undefined" ? (T = l.create(), l.copy(T, this.__nodePositionMap[y.name])) : typeof y.initial != "undefined" ? T = Array.prototype.slice.call(y.initial) : T = S(u[0], u[1], d * .8);
				var N = r[m].style;
				N.width = N.width || v[m] * 2, N.height = N.height || v[m] * 2, N.x = -N.width / 2, N.y = -N.height / 2, r[m].position = T, x[m * 2] = T[0], x[m * 2 + 1] = T[1]
			}
			i = n.length;
			var C = new h(i * 2),
				k = new h(i);
			for (var m = 0; m < i; m++) {
				var L = n[m];
				C[m * 2] = L.source, C[m * 2 + 1] = L.target, k[m] = L.weight || 1
			}
			b = new c(k);
			var w = b.max();
			if (w === 0) return;
			var k = b.mul(1 / w, b)._array,
				A = {
					center: u,
					width: e.ratioScaling ? f : d,
					height: e.ratioScaling ? p : d,
					scaling: e.scaling || 1,
					gravity: e.gravity || 1,
					barnesHutOptimize: e.large
				};
			this._layoutWorker ? (this._token = g(), this._layoutWorker.postMessage({
				cmd: "init",
				nodesPosition: x,
				nodesMass: E,
				nodesSize: v,
				edges: C,
				edgesWeight: k,
				token: this._token
			}), this._layoutWorker.postMessage({
				cmd: "updateConfig",
				config: A
			})) : (a.merge(this._layout, A, !0), this._layout.initNodes(x, E, v), this._layout.initEdges(C, k))
		},
		_buildNodeShapes: function(e) {
			var t = this.query(e, "categories"),
				n = this._filteredNodes,
				r = n.length,
				i = this.component.legend;
			for (var o = 0; o < r; o++) {
				var f = n[o],
					l = new s({
						style: {
							x: 0,
							y: 0
						},
						clickable: !0,
						highlightStyle: {}
					}),
					c = [],
					h = [],
					p = [];
				c.push(f), f.itemStyle && (h.push(f.itemStyle.normal), p.push(f.itemStyle.emphasis));
				if (typeof f.category != "undefined") {
					var d = t[f.category];
					d && (d.itemStyle = d.itemStyle || {}, d.itemStyle.normal = d.itemStyle.normal || {}, d.itemStyle.normal.color = d.itemStyle.normal.color || i.getColor(d.name), c.push(d), h.unshift(d.itemStyle.normal), p.unshift(d.itemStyle.emphasis))
				}
				c.push(e), h.unshift(e.itemStyle.normal.nodeStyle), p.unshift(e.itemStyle.emphasis.nodeStyle), l.style.iconType = this.deepQuery(c, "symbol"), l.style.width = l.style.height = (this.deepQuery(c, "symbolSize") || 0) * 2;
				for (var v = 0; v < h.length; v++) h[v] && a.merge(l.style, h[v], !0);
				for (var v = 0; v < p.length; v++) p[v] && a.merge(l.highlightStyle, p[v], !0);
				if (this.deepQuery(c, "itemStyle.normal.label.show")) {
					l.style.text = f.name, l.style.textPosition = "inside";
					var m = this.deepQuery(c, "itemStyle.normal.label.textStyle") || {};
					l.style.textColor = m.color || "#fff", l.style.textAlign = m.align || "center", l.style.textBaseline = m.baseline || "middle", l.style.textFont = this.getFont(m)
				}
				if (this.deepQuery(c, "itemStyle.emphasis.label.show")) {
					l.highlightStyle.text = f.name, l.highlightStyle.textPosition = "inside";
					var m = this.deepQuery(c, "itemStyle.emphasis.label.textStyle") || {};
					l.highlightStyle.textColor = m.color || "#fff", l.highlightStyle.textAlign = m.align || "center", l.highlightStyle.textBaseline = m.baseline || "middle", l.highlightStyle.textFont = this.getFont(m)
				}
				this.deepQuery(c, "draggable") && (this.setCalculable(l), l.dragEnableTime = 0, l.draggable = !0, l.ondragstart = this.shapeHandler.ondragstart, l.ondragover = null);
				var g = "";
				if (typeof f.category != "undefined") {
					var d = t[f.category];
					g = d && d.name || ""
				}
				u.pack(l, {
					name: g
				}, 0, f, a.indexOf(this._rawNodes, f), f.name || "", f.value), this._nodeShapes.push(l), this.shapeList.push(l), this.zr.addShape(l)
			}
		},
		_buildLinkShapes: function(e) {
			var t = this._filteredNodes,
				n = this._filteredLinks,
				r = n.length;
			for (var o = 0; o < r; o++) {
				var f = n[o],
					l = t[f.source],
					c = t[f.target],
					h = new i({
						style: {
							xStart: 0,
							yStart: 0,
							xEnd: 0,
							yEnd: 0,
							lineWidth: 1
						},
						clickable: !0,
						highlightStyle: {}
					});
				a.merge(h.style, this.query(e, "itemStyle.normal.linkStyle"), !0), a.merge(h.highlightStyle, this.query(e, "itemStyle.emphasis.linkStyle"), !0), typeof f.itemStyle != "undefined" && (f.itemStyle.normal && a.merge(h.style, f.itemStyle.normal, !0), f.itemStyle.emphasis && a.merge(h.highlightStyle, f.itemStyle.emphasis, !0));
				var f = this._rawLinks[f.rawIndex];
				u.pack(h, e, 0, {
					source: f.source,
					target: f.target,
					weight: f.weight || 0
				}, f.rawIndex, l.name + " - " + c.name, f.weight || 0, !0), this._linkShapes.push(h), this.shapeList.push(h), this.zr.addShape(h);
				if (e.linkSymbol && e.linkSymbol !== "none") {
					var p = new s({
						style: {
							x: -5,
							y: 0,
							width: e.linkSymbolSize[0],
							height: e.linkSymbolSize[1],
							iconType: e.linkSymbol,
							brushType: "fill",
							color: h.style.strokeColor,
							opacity: h.style.opacity,
							shadowBlur: h.style.shadowBlur,
							shadowColor: h.style.shadowColor,
							shadowOffsetX: h.style.shadowOffsetX,
							shadowOffsetY: h.style.shadowOffsetY
						},
						highlightStyle: {
							brushType: "fill"
						},
						position: [0, 0],
						rotation: 0
					});
					h._symbolShape = p, this.shapeList.push(p), this.zr.addShape(p)
				}
			}
		},
		_updateLinkShapes: function() {
			var e = l.create(),
				t = this._filteredLinks;
			for (var n = 0, r = t.length; n < r; n++) {
				var i = t[n],
					s = this._linkShapes[n],
					o = this._nodeShapes[i.source],
					u = this._nodeShapes[i.target];
				s.style.xStart = o.position[0], s.style.yStart = o.position[1], s.style.xEnd = u.position[0], s.style.yEnd = u.position[1], this.zr.modShape(s.id);
				if (s._symbolShape) {
					var a = s._symbolShape;
					l.copy(a.position, u.position), l.sub(e, o.position, u.position), l.normalize(e, e), l.scaleAndAdd(a.position, a.position, e, u.style.width / 2 + 2);
					var f;
					e[1] < 0 ? f = 2 * Math.PI - Math.acos(-e[0]) : f = Math.acos(-e[0]), a.rotation = f - Math.PI / 2, this.zr.modShape(a.id)
				}
			}
		},
		_update: function(e) {
			this._layout.temperature = this._temperature, this._layout.update();
			for (var t = 0; t < this._layout.nodes.length; t++) {
				var n = this._layout.nodes[t].position,
					r = this._nodeShapes[t],
					i = this._filteredNodes[t];
				r.fixed || i.fixX && i.fixY ? l.copy(n, r.position) : i.fixX ? (n[0] = r.position[0], r.position[1] = n[1]) : i.fixY ? (n[1] = r.position[1], r.position[0] = n[0]) : l.copy(r.position, n);
				var s = i.name;
				if (s) {
					var o = this.__nodePositionMap[s];
					o || (o = this.__nodePositionMap[s] = l.create()), l.copy(o, n)
				}
			}
			this._temperature *= this._coolDown
		},
		_updateWorker: function(e) {
			if (!this._updating) return;
			var t = new Float32Array(e.data),
				n = t[0],
				r = n === this._token;
			if (r) {
				var i = (t.length - 1) / 2;
				for (var s = 0; s < i; s++) {
					var o = this._nodeShapes[s],
						u = this._filteredNodes[s],
						a = t[s * 2 + 1],
						f = t[s * 2 + 2];
					o.fixed || u.fixX && u.fixY ? (t[s * 2 + 1] = o.position[0], t[s * 2 + 2] = o.position[1]) : u.fixX ? (t[s * 2 + 1] = o.position[0], o.position[1] = f) : u.fixY ? (t[s * 2 + 2] = o.position[1], o.position[0] = a) : (o.position[0] = a, o.position[1] = f);
					var c = u.name;
					if (c) {
						var h = this.__nodePositionMap[c];
						h || (h = this.__nodePositionMap[c] = l.create()), l.copy(h, o.position)
					}
				}
				this._layoutWorker.postMessage(t.buffer, [t.buffer])
			}
			var p = this;
			p._layoutWorker.postMessage({
				cmd: "update",
				steps: this._steps,
				temperature: this._temperature,
				coolDown: this._coolDown
			});
			for (var s = 0; s < this._steps; s++) this._temperature *= this._coolDown;
			return r
		},
		_step: function(e) {
			if (this._layoutWorker) {
				var t = this._updateWorker(e);
				if (!t) return
			} else {
				if (this._temperature < .01) return;
				this._update()
			}
			this._updateLinkShapes();
			for (var n = 0; n < this._nodeShapes.length; n++) this.zr.modShape(this._nodeShapes[n].id);
			this.zr.refresh()
		},
		refresh: function(e) {
			e && (this.option = e, this.series = this.option.series), this.clear(), this._buildShape()
		},
		dispose: function() {
			this._updating = !1, this.clear(), this.shapeList = null, this.effectList = null, this._layoutWorker && this._layoutWorker.terminate(), this._layoutWorker = null, this.__nodePositionMap = {}
		}
	}, a.inherits(y, n), a.inherits(y, t), e("../chart").define("force", y), y
}), define("zrender/shape/Ellipse", ["require", "./Base", "../tool/util"], function(e) {
	function n(e) {
		t.call(this, e)
	}
	var t = e("./Base");
	return n.prototype = {
		type: "ellipse",
		buildPath: function(e, t) {
			var n = .5522848,
				r = t.x,
				i = t.y,
				s = t.a,
				o = t.b,
				u = s * n,
				a = o * n;
			e.moveTo(r - s, i), e.bezierCurveTo(r - s, i - a, r - u, i - o, r, i - o), e.bezierCurveTo(r + u, i - o, r + s, i - a, r + s, i), e.bezierCurveTo(r + s, i + a, r + u, i + o, r, i + o), e.bezierCurveTo(r - u, i + o, r - s, i + a, r - s, i)
		},
		getRect: function(e) {
			if (e.__rect) return e.__rect;
			var t;
			return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, e.__rect = {
				x: Math.round(e.x - e.a - t / 2),
				y: Math.round(e.y - e.b - t / 2),
				width: e.a * 2 + t,
				height: e.b * 2 + t
			}, e.__rect
		}
	}, e("../tool/util").inherits(n, t), n
}), define("echarts/util/mapData/params", ["require"], function(e) {
	function t(e) {
		if (!e.UTF8Encoding) return e;
		var t = e.features;
		for (var r = 0; r < t.length; r++) {
			var i = t[r],
				s = i.geometry.coordinates,
				o = i.geometry.encodeOffsets;
			for (var u = 0; u < s.length; u++) {
				var a = s[u];
				if (i.geometry.type === "Polygon") s[u] = n(a, o[u]);
				else if (i.geometry.type === "MultiPolygon")
					for (var f = 0; f < a.length; f++) {
						var l = a[f];
						a[f] = n(l, o[u][f])
					}
			}
		}
		return e.UTF8Encoding = !1, e
	}

	function n(e, t) {
		var n = [],
			r = t[0],
			i = t[1];
		for (var s = 0; s < e.length; s += 2) {
			var o = e.charCodeAt(s) - 64,
				u = e.charCodeAt(s + 1) - 64;
			o = o >> 1 ^ -(o & 1), u = u >> 1 ^ -(u & 1), o += r, u += i, r = o, i = u, n.push([o / 1024, u / 1024])
		}
		return n
	}
	var r = {
		world: {
			getGeoJson: function(n) {
				e(["./geoJson/world_geo"], function(e) {
					n(t(e))
				})
			}
		},
		china: {
			getGeoJson: function(n) {
				e(["./geoJson/china_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"南海诸岛": {
			textCoord: [126, 25],
			getPath: function(e, t) {
				var n = [
						[
							[0, 3.5],
							[7, 11.2],
							[15, 11.9],
							[30, 7],
							[42, .7],
							[52, .7],
							[56, 7.7],
							[59, .7],
							[64, .7],
							[64, 0],
							[5, 0],
							[0, 3.5]
						],
						[
							[13, 16.1],
							[19, 14.7],
							[16, 21.7],
							[11, 23.1],
							[13, 16.1]
						],
						[
							[12, 32.2],
							[14, 38.5],
							[15, 38.5],
							[13, 32.2],
							[12, 32.2]
						],
						[
							[16, 47.6],
							[12, 53.2],
							[13, 53.2],
							[18, 47.6],
							[16, 47.6]
						],
						[
							[6, 64.4],
							[8, 70],
							[9, 70],
							[8, 64.4],
							[6, 64.4]
						],
						[
							[23, 82.6],
							[29, 79.8],
							[30, 79.8],
							[25, 82.6],
							[23, 82.6]
						],
						[
							[37, 70.7],
							[43, 62.3],
							[44, 62.3],
							[39, 70.7],
							[37, 70.7]
						],
						[
							[48, 51.1],
							[51, 45.5],
							[53, 45.5],
							[50, 51.1],
							[48, 51.1]
						],
						[
							[51, 35],
							[51, 28.7],
							[53, 28.7],
							[53, 35],
							[51, 35]
						],
						[
							[52, 22.4],
							[55, 17.5],
							[56, 17.5],
							[53, 22.4],
							[52, 22.4]
						],
						[
							[58, 12.6],
							[62, 7],
							[63, 7],
							[60, 12.6],
							[58, 12.6]
						],
						[
							[0, 3.5],
							[0, 93.1],
							[64, 93.1],
							[64, 0],
							[63, 0],
							[63, 92.4],
							[1, 92.4],
							[1, 3.5],
							[0, 3.5]
						]
					],
					r = "",
					i = e[0],
					s = e[1];
				for (var o = 0, u = n.length; o < u; o++) {
					r += "M " + ((n[o][0][0] * t + i).toFixed(2) - 0) + " " + ((n[o][0][1] * t + s).toFixed(2) - 0) + " ";
					for (var a = 1, f = n[o].length; a < f; a++) r += "L " + ((n[o][a][0] * t + i).toFixed(2) - 0) + " " + ((n[o][a][1] * t + s).toFixed(2) - 0) + " "
				}
				return r + " Z"
			}
		},
		"新疆": {
			getGeoJson: function(n) {
				e(["./geoJson/xin_jiang_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"西藏": {
			getGeoJson: function(n) {
				e(["./geoJson/xi_zang_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"内蒙古": {
			getGeoJson: function(n) {
				e(["./geoJson/nei_meng_gu_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"青海": {
			getGeoJson: function(n) {
				e(["./geoJson/qing_hai_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"四川": {
			getGeoJson: function(n) {
				e(["./geoJson/si_chuan_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"黑龙江": {
			getGeoJson: function(n) {
				e(["./geoJson/hei_long_jiang_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"甘肃": {
			getGeoJson: function(n) {
				e(["./geoJson/gan_su_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"云南": {
			getGeoJson: function(n) {
				e(["./geoJson/yun_nan_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"广西": {
			getGeoJson: function(n) {
				e(["./geoJson/guang_xi_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"湖南": {
			getGeoJson: function(n) {
				e(["./geoJson/hu_nan_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"陕西": {
			getGeoJson: function(n) {
				e(["./geoJson/shan_xi_1_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"广东": {
			getGeoJson: function(n) {
				e(["./geoJson/guang_dong_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"吉林": {
			getGeoJson: function(n) {
				e(["./geoJson/ji_lin_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"河北": {
			getGeoJson: function(n) {
				e(["./geoJson/he_bei_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"湖北": {
			getGeoJson: function(n) {
				e(["./geoJson/hu_bei_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"贵州": {
			getGeoJson: function(n) {
				e(["./geoJson/gui_zhou_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"山东": {
			getGeoJson: function(n) {
				e(["./geoJson/shan_dong_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"江西": {
			getGeoJson: function(n) {
				e(["./geoJson/jiang_xi_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"河南": {
			getGeoJson: function(n) {
				e(["./geoJson/he_nan_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"辽宁": {
			getGeoJson: function(n) {
				e(["./geoJson/liao_ning_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"山西": {
			getGeoJson: function(n) {
				e(["./geoJson/shan_xi_2_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"安徽": {
			getGeoJson: function(n) {
				e(["./geoJson/an_hui_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"福建": {
			getGeoJson: function(n) {
				e(["./geoJson/fu_jian_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"浙江": {
			getGeoJson: function(n) {
				e(["./geoJson/zhe_jiang_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"江苏": {
			getGeoJson: function(n) {
				e(["./geoJson/jiang_su_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"重庆": {
			getGeoJson: function(n) {
				e(["./geoJson/chong_qing_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"宁夏": {
			getGeoJson: function(n) {
				e(["./geoJson/ning_xia_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"海南": {
			getGeoJson: function(n) {
				e(["./geoJson/hai_nan_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"台湾": {
			getGeoJson: function(n) {
				e(["./geoJson/tai_wan_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"北京": {
			getGeoJson: function(n) {
				e(["./geoJson/bei_jing_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"天津": {
			getGeoJson: function(n) {
				e(["./geoJson/tian_jin_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"上海": {
			getGeoJson: function(n) {
				e(["./geoJson/shang_hai_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"香港": {
			getGeoJson: function(n) {
				e(["./geoJson/xiang_gang_geo"], function(e) {
					n(t(e))
				})
			}
		},
		"澳门": {
			getGeoJson: function(n) {
				e(["./geoJson/ao_men_geo"], function(e) {
					n(t(e))
				})
			}
		}
	};
	return {
		decode: t,
		params: r
	}
}), define("echarts/util/mapData/textFixed", [], function() {
	return {
		"广东": [0, -10],
		"香港": [10, 10],
		"澳门": [-10, 18],
		"黑龙江": [0, 20],
		"天津": [5, 5],
		"深圳市": [-35, 0],
		"红河哈尼族彝族自治州": [0, 20],
		"楚雄彝族自治州": [-5, 15],
		"石河子市": [-5, 5],
		"五家渠市": [0, -10],
		"昌吉回族自治州": [10, 10],
		"昌江黎族自治县": [0, 20],
		"陵水黎族自治县": [0, 20],
		"东方市": [0, 20],
		"渭南市": [0, 20]
	}
}), define("echarts/util/mapData/geoCoord", [], function() {
	return {
		Russia: [100, 60],
		"United States of America": [-99, 38]
	}
}), define("echarts/util/projection/svg", ["require", "zrender/shape/Path"], function(e) {
	function n(e) {
		return parseFloat(e || 0)
	}

	function r(e) {
		var t = e.firstChild;
		while (t.nodeName.toLowerCase() != "svg" || t.nodeType != 1) t = t.nextSibling;
		var r = n(t.getAttribute("x")),
			i = n(t.getAttribute("y")),
			s = n(t.getAttribute("width")),
			o = n(t.getAttribute("height"));
		return {
			left: r,
			top: i,
			width: s,
			height: o
		}
	}

	function i(e, t) {
		function i(e) {
			var t = e.tagName;
			if (l[t]) {
				var s = l[t](e, n);
				s && (s.scale = n, s.properties = {
					name: e.getAttribute("name") || ""
				}, s.id = e.id, a(s, e), r.push(s))
			}
			var o = e.childNodes;
			for (var u = 0, f = o.length; u < f; u++) i(o[u])
		}
		var n = [t.scale.x, t.scale.y],
			r = [];
		return i(e), r
	}

	function s(e, t) {
		var n = t instanceof Array ? [t[0] * 1, t[1] * 1] : [t.x * 1, t.y * 1];
		return [n[0] / e.scale.x, n[1] / e.scale.y]
	}

	function o(e, t) {
		var n = t instanceof Array ? [t[0] * 1, t[1] * 1] : [t.x * 1, t.y * 1];
		return [n[0] * e.scale.x, n[1] * e.scale.y]
	}

	function u(e) {
		return e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
	}

	function a(e, t) {
		var n = t.getAttribute("fill"),
			r = t.getAttribute("stroke"),
			i = t.getAttribute("stroke-width"),
			s = t.getAttribute("opacity");
		n && n != "none" ? (e.color = n, r ? (e.brushType = "both", e.strokeColor = r) : e.brushType = "fill") : r && r != "none" && (e.strokeColor = r, e.brushType = "stroke"), i && i != "none" && (e.lineWidth = parseFloat(i)), s && s != "none" && (e.opacity = parseFloat(s))
	}

	function f(e) {
		var t = u(e).replace(/,/g, " ").split(/\s+/),
			n = [];
		for (var r = 0; r < t.length;) {
			var i = parseFloat(t[r++]),
				s = parseFloat(t[r++]);
			n.push([i, s])
		}
		return n
	}
	var t = e("zrender/shape/Path"),
		l = {
			path: function(e, n) {
				var r = e.getAttribute("d"),
					i = t.prototype.getRect({
						path: r
					});
				return {
					shapeType: "path",
					path: r,
					cp: [(i.x + i.width / 2) * n[0], (i.y + i.height / 2) * n[1]]
				}
			},
			rect: function(e, t) {
				var r = n(e.getAttribute("x")),
					i = n(e.getAttribute("y")),
					s = n(e.getAttribute("width")),
					o = n(e.getAttribute("height"));
				return {
					shapeType: "rectangle",
					x: r,
					y: i,
					width: s,
					height: o,
					cp: [(r + s / 2) * t[0], (i + o / 2) * t[1]]
				}
			},
			line: function(e, t) {
				var r = n(e.getAttribute("x1")),
					i = n(e.getAttribute("y1")),
					s = n(e.getAttribute("x2")),
					o = n(e.getAttribute("y2"));
				return {
					shapeType: "line",
					xStart: r,
					yStart: i,
					xEnd: s,
					yEnd: o,
					cp: [(r + s) * .5 * t[0], (i + o) * .5 * t[1]]
				}
			},
			circle: function(e, t) {
				var r = n(e.getAttribute("cx")),
					i = n(e.getAttribute("cy")),
					s = n(e.getAttribute("r"));
				return {
					shapeType: "circle",
					x: r,
					y: i,
					r: s,
					cp: [r * t[0], i * t[1]]
				}
			},
			ellipse: function(e, t) {
				var n = parseFloat(e.getAttribute("cx") || 0),
					r = parseFloat(e.getAttribute("cy") || 0),
					i = parseFloat(e.getAttribute("rx") || 0),
					s = parseFloat(e.getAttribute("ry") || 0);
				return {
					shapeType: "ellipse",
					x: n,
					y: r,
					a: i,
					b: s,
					cp: [n * t[0], r * t[1]]
				}
			},
			polygon: function(e, t) {
				var n = e.getAttribute("points"),
					r = [Infinity, Infinity],
					i = [-Infinity, -Infinity];
				if (n) {
					n = f(n);
					for (var s = 0; s < n.length; s++) {
						var o = n[s];
						r[0] = Math.min(o[0], r[0]), r[1] = Math.min(o[1], r[1]), i[0] = Math.max(o[0], i[0]), i[1] = Math.max(o[1], i[1])
					}
					return {
						shapeType: "polygon",
						pointList: n,
						cp: [(r[0] + i[0]) / 2 * t[0], (r[1] + i[1]) / 2 * t[0]]
					}
				}
			},
			polyline: function(e, t) {
				var n = l.polygon(e, t);
				return n
			}
		};
	return {
		getBbox: r,
		geoJson2Path: i,
		pos2geo: s,
		geo2pos: o
	}
}), define("echarts/util/projection/normal", [], function() {
	function e(e, n) {
		return n = n || {}, e.srcSize || t(e, n), e.srcSize
	}

	function t(e, t) {
		t = t || {}, r.xmin = 360, r.xmax = -360, r.ymin = 180, r.ymax = -180;
		var n = e.features,
			i, s;
		for (var o = 0, u = n.length; o < u; o++) {
			s = n[o];
			if (s.properties.name && t[s.properties.name]) continue;
			switch (s.type) {
				case "Feature":
					r[s.geometry.type](s.geometry.coordinates);
					break;
				case "GeometryCollection":
					i = s.geometries;
					for (var a = 0, f = i.length; a < f; a++) r[i[a].type](i[a].coordinates)
			}
		}
		return e.srcSize = {
			left: r.xmin.toFixed(4) * 1,
			top: r.ymin.toFixed(4) * 1,
			width: (r.xmax - r.xmin).toFixed(4) * 1,
			height: (r.ymax - r.ymin).toFixed(4) * 1
		}, e
	}

	function i(e, r, i) {
		function g(e, t) {
			d = e.type, v = e.coordinates, n._bbox = {
				xmin: 360,
				xmax: -360,
				ymin: 180,
				ymax: -180
			}, m = n[d](v), u.push({
				path: m,
				cp: t.properties.cp ? n.makePoint(t.properties.cp) : n.makePoint([(n._bbox.xmin + n._bbox.xmax) / 2, (n._bbox.ymin + n._bbox.ymax) / 2]),
				properties: t.properties,
				id: t.id
			})
		}
		i = i || {}, n.scale = null, n.offset = null, e.srcSize || t(e, i), r.offset = {
			x: e.srcSize.left,
			y: e.srcSize.top,
			left: r.OffsetLeft || 0,
			top: r.OffsetTop || 0
		}, n.scale = r.scale, n.offset = r.offset;
		var s = e.features,
			o, u = [],
			a, f;
		for (var l = 0, c = s.length; l < c; l++) {
			f = s[l];
			if (f.properties.name && i[f.properties.name]) continue;
			if (f.type == "Feature") g(f.geometry, f);
			else if (f.type == "GeometryCollection") {
				o = f.geometries;
				for (var h = 0, p = o.length; h < p; h++) a = o[h], g(a, a)
			}
		}
		var d, v, m;
		return u
	}

	function s(e, t) {
		var n, r;
		return t instanceof Array ? (n = t[0] * 1, r = t[1] * 1) : (n = t.x * 1, r = t.y * 1), n = n / e.scale.x + e.offset.x - 168.5, n = n > 180 ? n - 360 : n, r = 90 - (r / e.scale.y + e.offset.y), [n, r]
	}

	function o(e, t) {
		return n.offset = e.offset, n.scale = e.scale, t instanceof Array ? n.makePoint([t[0] * 1, t[1] * 1]) : n.makePoint([t.x * 1, t.y * 1])
	}
	var n = {
			formatPoint: function(e) {
				return [(e[0] < -168.5 && e[1] > 63.8 ? e[0] + 360 : e[0]) + 168.5, 90 - e[1]]
			},
			makePoint: function(e) {
				var t = this,
					r = t.formatPoint(e);
				t._bbox.xmin > e[0] && (t._bbox.xmin = e[0]), t._bbox.xmax < e[0] && (t._bbox.xmax = e[0]), t._bbox.ymin > e[1] && (t._bbox.ymin = e[1]), t._bbox.ymax < e[1] && (t._bbox.ymax = e[1]);
				var i = (r[0] - n.offset.x) * n.scale.x + n.offset.left,
					s = (r[1] - n.offset.y) * n.scale.y + n.offset.top;
				return [i, s]
			},
			Point: function(e) {
				return e = this.makePoint(e), e.join(",")
			},
			LineString: function(e) {
				var t = "",
					r;
				for (var i = 0, s = e.length; i < s; i++) r = n.makePoint(e[i]), i === 0 ? t = "M" + r.join(",") : t = t + "L" + r.join(",");
				return t
			},
			Polygon: function(e) {
				var t = "";
				for (var r = 0, i = e.length; r < i; r++) t = t + n.LineString(e[r]) + "z";
				return t
			},
			MultiPoint: function(e) {
				var t = [];
				for (var r = 0, i = e.length; r < i; r++) t.push(n.Point(e[r]));
				return t
			},
			MultiLineString: function(e) {
				var t = "";
				for (var r = 0, i = e.length; r < i; r++) t += n.LineString(e[r]);
				return t
			},
			MultiPolygon: function(e) {
				var t = "";
				for (var r = 0, i = e.length; r < i; r++) t += n.Polygon(e[r]);
				return t
			}
		},
		r = {
			formatPoint: n.formatPoint,
			makePoint: function(e) {
				var t = this,
					n = t.formatPoint(e),
					r = n[0],
					i = n[1];
				t.xmin > r && (t.xmin = r), t.xmax < r && (t.xmax = r), t.ymin > i && (t.ymin = i), t.ymax < i && (t.ymax = i)
			},
			Point: function(e) {
				this.makePoint(e)
			},
			LineString: function(e) {
				for (var t = 0, n = e.length; t < n; t++) this.makePoint(e[t])
			},
			Polygon: function(e) {
				for (var t = 0, n = e.length; t < n; t++) this.LineString(e[t])
			},
			MultiPoint: function(e) {
				for (var t = 0, n = e.length; t < n; t++) this.Point(e[t])
			},
			MultiLineString: function(e) {
				for (var t = 0, n = e.length; t < n; t++) this.LineString(e[t])
			},
			MultiPolygon: function(e) {
				for (var t = 0, n = e.length; t < n; t++) this.Polygon(e[t])
			}
		};
	return {
		getBbox: e,
		geoJson2Path: i,
		pos2geo: s,
		geo2pos: o
	}
}), define("echarts/chart/map", ["require", "../component/base", "./base", "zrender/shape/Text", "zrender/shape/Path", "zrender/shape/Circle", "zrender/shape/Rectangle", "zrender/shape/Line", "zrender/shape/Polygon", "zrender/shape/Ellipse", "../component/dataRange", "../config", "../util/ecData", "zrender/tool/util", "zrender/config", "zrender/tool/event", "../util/mapData/params", "../util/mapData/textFixed", "../util/mapData/geoCoord", "../util/projection/svg", "../util/projection/normal", "../util/projection/normal", "../chart"], function(e) {
	function y(e, r, i, s, o) {
		t.call(this, e, r, i, s, o), n.call(this);
		var u = this;
		u._onmousewheel = function(e) {
			return u.__onmousewheel(e)
		}, u._onmousedown = function(e) {
			return u.__onmousedown(e)
		}, u._onmousemove = function(e) {
			return u.__onmousemove(e)
		}, u._onmouseup = function(e) {
			return u.__onmouseup(e)
		}, this._isAlive = !0, this._selectedMode = {}, this._hoverable = {}, this._showLegendSymbol = {}, this._selected = {}, this._mapTypeMap = {}, this._mapDataMap = {}, this._nameMap = {}, this._specialArea = {}, this._refreshDelayTicket, this._mapDataRequireCounter, this._markAnimation = !1, this._roamMap = {}, this._scaleLimitMap = {}, this._needRoam, this._mx, this._my, this._mousedown, this._justMove, this._curMapType, this.refresh(s), this._needRoam && (this.zr.on(p.EVENT.MOUSEWHEEL, this._onmousewheel), this.zr.on(p.EVENT.MOUSEDOWN, this._onmousedown))
	}
	var t = e("../component/base"),
		n = e("./base"),
		r = e("zrender/shape/Text"),
		i = e("zrender/shape/Path"),
		s = e("zrender/shape/Circle"),
		o = e("zrender/shape/Rectangle"),
		u = e("zrender/shape/Line"),
		a = e("zrender/shape/Polygon"),
		f = e("zrender/shape/Ellipse");
	e("../component/dataRange");
	var l = e("../config"),
		c = e("../util/ecData"),
		h = e("zrender/tool/util"),
		p = e("zrender/config"),
		d = e("zrender/tool/event"),
		v = e("../util/mapData/params").params,
		m = e("../util/mapData/textFixed"),
		g = e("../util/mapData/geoCoord");
	return y.prototype = {
		type: l.CHART_TYPE_MAP,
		_buildShape: function() {
			var e = this.series;
			this.selectedMap = {}, this._activeMapType = {};
			var t = this.component.legend,
				n, r = {},
				i, s, o, u = {},
				a = {},
				f = {};
			this._needRoam = !1;
			for (var c = 0, p = e.length; c < p; c++)
				if (e[c].type == l.CHART_TYPE_MAP) {
					e[c] = this.reformOption(e[c]), i = e[c].mapType, u[i] = u[i] || {}, u[i][c] = !0, a[i] = a[i] || e[c].mapValuePrecision, this._scaleLimitMap[i] = this._scaleLimitMap[i] || {}, e[c].scaleLimit && h.merge(this._scaleLimitMap[i], e[c].scaleLimit, !0), this._roamMap[i] = e[c].roam || this._roamMap[i], this._needRoam = this._needRoam || this._roamMap[i], this._nameMap[i] = this._nameMap[i] || {}, e[c].nameMap && h.merge(this._nameMap[i], e[c].nameMap, !0), this._activeMapType[i] = !0, e[c].textFixed && h.merge(m, e[c].textFixed, !0), e[c].geoCoord && h.merge(g, e[c].geoCoord, !0), this._selectedMode[i] = this._selectedMode[i] || e[c].selectedMode;
					if (typeof this._hoverable[i] == "undefined" || this._hoverable[i]) this._hoverable[i] = e[c].hoverable;
					if (typeof this._showLegendSymbol[i] == "undefined" || this._showLegendSymbol[i]) this._showLegendSymbol[i] = e[c].showLegendSymbol;
					f[i] = f[i] || e[c].mapValueCalculation, n = e[c].name, this.selectedMap[n] = t ? t.isSelected(n) : !0;
					if (this.selectedMap[n]) {
						r[i] = r[i] || {}, s = e[c].data;
						for (var d = 0, y = s.length; d < y; d++) {
							o = this._nameChange(i, s[d].name), r[i][o] = r[i][o] || {
								seriesIndex: []
							};
							for (var b in s[d]) b != "value" ? r[i][o][b] = s[d][b] : isNaN(s[d].value) || (typeof r[i][o].value == "undefined" && (r[i][o].value = 0), r[i][o].value += s[d].value);
							r[i][o].seriesIndex.push(c)
						}
					}
				}
			this._mapDataRequireCounter = 0;
			for (var w in r) this._mapDataRequireCounter++;
			this._clearSelected(), this._mapDataRequireCounter === 0 && (this.clear(), this.zr && this.zr.delShape(this.lastShapeList), this.lastShapeList = []);
			for (var w in r) {
				if (f[w] && f[w] == "average")
					for (var y in r[w]) r[w][y].value = (r[w][y].value / r[w][y].seriesIndex.length).toFixed(a[w]) - 0;
				this._mapDataMap[w] = this._mapDataMap[w] || {}, this._mapDataMap[w].mapData ? this._mapDataCallback(w, r[w], u[w])(this._mapDataMap[w].mapData) : v[w.replace(/\|.*/, "")].getGeoJson && (this._specialArea[w] = v[w.replace(/\|.*/, "")].specialArea || this._specialArea[w], v[w.replace(/\|.*/, "")].getGeoJson(this._mapDataCallback(w, r[w], u[w])))
			}
		},
		_mapDataCallback: function(t, n, r) {
			var i = this;
			return function(s) {
				if (!i._isAlive) return;
				t.indexOf("|") != -1 && (s = i._getSubMapData(t, s)), i._mapDataMap[t].mapData = s, s.firstChild ? (i._mapDataMap[t].rate = 1, i._mapDataMap[t].projection = e("../util/projection/svg")) : (i._mapDataMap[t].rate = .75, i._mapDataMap[t].projection = e("../util/projection/normal")), i._buildMap(t, i._getProjectionData(t, s, r), n, r), i._buildMark(t, r), --i._mapDataRequireCounter <= 0 && (i.addShapeList(), i.zr.refresh())
			}
		},
		_clearSelected: function() {
			for (var e in this._selected) this._activeMapType[this._mapTypeMap[e]] || (delete this._selected[e], delete this._mapTypeMap[e])
		},
		_getSubMapData: function(e, t) {
			var n = e.replace(/^.*\|/, ""),
				r = t.features;
			for (var i = 0, s = r.length; i < s; i++)
				if (r[i].properties && r[i].properties.name == n) {
					r = r[i], n == "United States of America" && r.geometry.coordinates.length > 1 && (r = {
						geometry: {
							coordinates: r.geometry.coordinates.slice(5, 6),
							type: r.geometry.type
						},
						id: r.id,
						properties: r.properties,
						type: r.type
					});
					break
				}
			return {
				type: "FeatureCollection",
				features: [r]
			}
		},
		_getProjectionData: function(e, t, n) {
			var r = this._mapDataMap[e].projection,
				i = [],
				s = this._mapDataMap[e].bbox || r.getBbox(t, this._specialArea[e]),
				o;
			this._mapDataMap[e].hasRoam ? o = this._mapDataMap[e].transform : o = this._getTransform(s, n, this._mapDataMap[e].rate);
			var u = this._mapDataMap[e].lastTransform || {
					scale: {}
				},
				a;
			o.left != u.left || o.top != u.top || o.scale.x != u.scale.x || o.scale.y != u.scale.y ? (a = r.geoJson2Path(t, o, this._specialArea[e]), u = h.clone(o)) : (o = this._mapDataMap[e].transform, a = this._mapDataMap[e].pathArray), this._mapDataMap[e].bbox = s, this._mapDataMap[e].transform = o, this._mapDataMap[e].lastTransform = u, this._mapDataMap[e].pathArray = a;
			var f = [o.left, o.top];
			for (var l = 0, c = a.length; l < c; l++) i.push(this._getSingleProvince(e, a[l], f));
			if (this._specialArea[e])
				for (var p in this._specialArea[e]) i.push(this._getSpecialProjectionData(e, t, p, this._specialArea[e][p], f));
			if (e == "china") {
				var d = this.geo2pos(e, g["南海诸岛"] || v["南海诸岛"].textCoord),
					y = o.scale.x / 10.5,
					b = [32 * y + d[0], 83 * y + d[1]];
				m["南海诸岛"] && (b[0] += m["南海诸岛"][0], b[1] += m["南海诸岛"][1]), i.push({
					name: this._nameChange(e, "南海诸岛"),
					path: v["南海诸岛"].getPath(d, y),
					position: f,
					textX: b[0],
					textY: b[1]
				})
			}
			return i
		},
		_getSpecialProjectionData: function(t, n, r, i, s) {
			n = this._getSubMapData("x|" + r, n);
			var o = e("../util/projection/normal"),
				u = o.getBbox(n),
				a = this.geo2pos(t, [i.left, i.top]),
				f = this.geo2pos(t, [i.left + i.width, i.top + i.height]),
				l = Math.abs(f[0] - a[0]),
				c = Math.abs(f[1] - a[1]),
				h = u.width,
				p = u.height,
				d = l / .75 / h,
				v = c / p;
			d > v ? (d = v * .75, l = h * d) : (v = d, d = v * .75, c = p * v);
			var m = {
					OffsetLeft: a[0],
					OffsetTop: a[1],
					scale: {
						x: d,
						y: v
					}
				},
				g = o.geoJson2Path(n, m);
			return this._getSingleProvince(t, g[0], s)
		},
		_getSingleProvince: function(e, t, n) {
			var r, i = t.properties.name,
				s = m[i] || [0, 0];
			if (g[i]) r = this.geo2pos(e, g[i]);
			else if (t.cp) r = [t.cp[0] + s[0], t.cp[1] + s[1]];
			else {
				var o = this._mapDataMap[e].bbox;
				r = this.geo2pos(e, [o.left + o.width / 2, o.top + o.height / 2]), r[0] += s[0], r[1] += s[1]
			}
			return t.name = this._nameChange(e, i), t.position = n, t.textX = r[0], t.textY = r[1], t
		},
		_getTransform: function(e, t, n) {
			var r = this.series,
				i, s, o, u, a, f, l, c = this.zr.getWidth(),
				h = this.zr.getHeight(),
				p = Math.round(Math.min(c, h) * .02);
			for (var d in t) i = r[d].mapLocation || {}, o = i.x || o, a = i.y || a, f = i.width || f, l = i.height || l;
			s = this.parsePercent(o, c), s = isNaN(s) ? p : s, u = this.parsePercent(a, h), u = isNaN(u) ? p : u, typeof f == "undefined" ? f = c - s - 2 * p : f = this.parsePercent(f, c), typeof l == "undefined" ? l = h - u - 2 * p : l = this.parsePercent(l, h);
			var v = e.width,
				m = e.height,
				g = f / n / v,
				y = l / m;
			g > y ? (g = y * n, f = v * g) : (y = g, g = y * n, l = m * y);
			if (isNaN(o)) {
				o = o || "center";
				switch (o + "") {
					case "center":
						s = Math.floor((c - f) / 2);
						break;
					case "right":
						s = c - f
				}
			}
			if (isNaN(a)) {
				a = a || "center";
				switch (a + "") {
					case "center":
						u = Math.floor((h - l) / 2);
						break;
					case "bottom":
						u = h - l
				}
			}
			return {
				left: s,
				top: u,
				width: f,
				height: l,
				baseScale: 1,
				scale: {
					x: g,
					y: y
				}
			}
		},
		_buildMap: function(e, t, n, l) {
			var p = this.series,
				d = this.component.legend,
				v = this.component.dataRange,
				m, g, y, b, w, E = this.ecTheme.map,
				S, x, T, N, C, k;
			for (var L = 0, A = t.length; L < A; L++) {
				T = h.clone(t[L]), N = {
					name: T.name,
					path: T.path,
					position: h.clone(T.position)
				}, g = T.name, y = n[g];
				if (y) {
					w = [y], m = "";
					for (var O = 0, M = y.seriesIndex.length; O < M; O++) w.push(p[y.seriesIndex[O]]), m += p[y.seriesIndex[O]].name + " ", d && this._showLegendSymbol[e] && d.hasColor(p[y.seriesIndex[O]].name) && this.shapeList.push(new s({
						zlevel: this._zlevelBase + 1,
						position: h.clone(T.position),
						_mapType: e,
						style: {
							x: T.textX + 3 + O * 7,
							y: T.textY - 10,
							r: 3,
							color: d.getColor(p[y.seriesIndex[O]].name)
						},
						hoverable: !1
					}));
					w.push(E), b = y.value
				} else {
					y = "-", m = "", w = [];
					for (var _ in l) w.push(p[_]);
					w.push(E), b = "-"
				}
				S = v && !isNaN(b) ? v.getColor(b) : null, T.color = T.color || S || this.getItemStyleColor(this.deepQuery(w, "itemStyle.normal.color"), y.seriesIndex, -1, y) || this.deepQuery(w, "itemStyle.normal.areaStyle.color"), T.strokeColor = T.strokeColor || this.deepQuery(w, "itemStyle.normal.borderColor"), T.lineWidth = T.lineWidth || this.deepQuery(w, "itemStyle.normal.borderWidth"), N.color = this.getItemStyleColor(this.deepQuery(w, "itemStyle.emphasis.color"), y.seriesIndex, -1, y) || this.deepQuery(w, "itemStyle.emphasis.areaStyle.color") || T.color, N.strokeColor = this.deepQuery(w, "itemStyle.emphasis.borderColor") || T.strokeColor, N.lineWidth = this.deepQuery(w, "itemStyle.emphasis.borderWidth") || T.lineWidth, T.brushType = N.brushType = T.brushType || "both", T.lineJoin = N.lineJoin = "round", T._name = N._name = g, x = this.deepQuery(w, "itemStyle.normal.label.textStyle"), k = {
					zlevel: this._zlevelBase + 1,
					hoverable: this._hoverable[e],
					position: h.clone(T.position),
					_mapType: e,
					_geo: this.pos2geo(e, [T.textX, T.textY]),
					style: {
						brushType: "fill",
						x: T.textX,
						y: T.textY,
						text: this.getLabelText(g, b, w, "normal"),
						_name: g,
						textAlign: "center",
						color: this.deepQuery(w, "itemStyle.normal.label.show") ? this.deepQuery(w, "itemStyle.normal.label.textStyle.color") : "rgba(0,0,0,0)",
						textFont: this.getFont(x)
					}
				}, k._style = h.clone(k.style), k.highlightStyle = h.clone(k.style), this.deepQuery(w, "itemStyle.emphasis.label.show") ? (k.highlightStyle.text = this.getLabelText(g, b, w, "emphasis"), k.highlightStyle.color = this.deepQuery(w, "itemStyle.emphasis.label.textStyle.color") || k.style.color, x = this.deepQuery(w, "itemStyle.emphasis.label.textStyle") || x, k.highlightStyle.textFont = this.getFont(x)) : k.highlightStyle.color = "rgba(0,0,0,0)", C = {
					zlevel: this._zlevelBase,
					hoverable: this._hoverable[e],
					position: h.clone(T.position),
					style: T,
					highlightStyle: N,
					_style: h.clone(T),
					_mapType: e
				}, typeof T.scale != "undefined" && (C.scale = h.clone(T.scale)), k = new r(k);
				switch (C.style.shapeType) {
					case "rectangle":
						C = new o(C);
						break;
					case "line":
						C = new u(C);
						break;
					case "circle":
						C = new s(C);
						break;
					case "polygon":
						C = new a(C);
						break;
					case "ellipse":
						C = new f(C);
						break;
					default:
						C = new i(C), C.pathArray = C._parsePathData(C.style.path)
				}
				if (this._selectedMode[e] && this._selected[g] || y.selected && this._selected[g] !== !1) k.style = k.highlightStyle, C.style = C.highlightStyle;
				if (this._selectedMode[e]) {
					this._selected[g] = typeof this._selected[g] != "undefined" ? this._selected[g] : y.selected, this._mapTypeMap[g] = e;
					if (typeof y.selectable == "undefined" || y.selectable) C.clickable = k.clickable = !0, C.onclick = k.onclick = this.shapeHandler.onclick
				}
				this._hoverable[e] && (typeof y.hoverable == "undefined" || y.hoverable) ? (k.hoverable = C.hoverable = !0, C.hoverConnect = k.id, k.hoverConnect = C.id, C.onmouseover = k.onmouseover = this.hoverConnect) : k.hoverable = C.hoverable = !1, c.pack(k, {
					name: m,
					tooltip: this.deepQuery(w, "tooltip")
				}, 0, y, 0, g), this.shapeList.push(k), c.pack(C, {
					name: m,
					tooltip: this.deepQuery(w, "tooltip")
				}, 0, y, 0, g), this.shapeList.push(C)
			}
		},
		_buildMark: function(e, t) {
			this._seriesIndexToMapType = this._seriesIndexToMapType || {}, this.markAttachStyle = this.markAttachStyle || {};
			var n = [this._mapDataMap[e].transform.left, this._mapDataMap[e].transform.top];
			for (var r in t) this._seriesIndexToMapType[r] = e, this.markAttachStyle[r] = {
				position: n,
				_mapType: e
			}, this.buildMark(r)
		},
		getMarkCoord: function(e, t) {
			return t.geoCoord || g[t.name] ? this.geo2pos(this._seriesIndexToMapType[e], t.geoCoord || g[t.name]) : [0, 0]
		},
		getMarkGeo: function(e) {
			return e.geoCoord || g[e.name]
		},
		_nameChange: function(e, t) {
			return this._nameMap[e][t] || t
		},
		getLabelText: function(e, t, n, r) {
			var i = this.deepQuery(n, "itemStyle." + r + ".label.formatter");
			if (!i) return e;
			if (typeof i == "function") return i.call(this.myChart, e, t);
			if (typeof i == "string") return i = i.replace("{a}", "{a0}").replace("{b}", "{b0}"), i = i.replace("{a0}", e).replace("{b0}", t), i
		},
		_findMapTypeByPos: function(e, t) {
			var n, r, i, s, o;
			for (var u in this._mapDataMap) {
				n = this._mapDataMap[u].transform;
				if (!n || !this._roamMap[u]) continue;
				r = n.left, i = n.top, s = n.width, o = n.height;
				if (e >= r && e <= r + s && t >= i && t <= i + o) return u
			}
			return
		},
		__onmousewheel: function(e) {
			if (this.shapeList.length <= 0) return;
			var t = e.event,
				n = d.getX(t),
				r = d.getY(t),
				i = d.getDelta(t),
				s = this._findMapTypeByPos(n, r);
			if (s) {
				d.stop(t);
				var o = this._mapDataMap[s].transform,
					u = o.left,
					a = o.top,
					f = o.width,
					c = o.height,
					h = this.pos2geo(s, [n - u, r - a]);
				if (i > 0) {
					i = 1.2;
					if (typeof this._scaleLimitMap[s].max != "undefined" && o.baseScale >= this._scaleLimitMap[s].max) return
				} else {
					i = 1 / 1.2;
					if (typeof this._scaleLimitMap[s].min != "undefined" && o.baseScale <= this._scaleLimitMap[s].min) return
				}
				o.baseScale *= i, o.scale.x *= i, o.scale.y *= i, o.width = f * i, o.height = c * i, this._mapDataMap[s].hasRoam = !0, this._mapDataMap[s].transform = o, h = this.geo2pos(s, h), o.left -= h[0] - (n - u), o.top -= h[1] - (r - a), this._mapDataMap[s].transform = o, this.clearEffectShape(!0);
				for (var p = 0, v = this.shapeList.length; p < v; p++) this.shapeList[p]._mapType == s && (this.shapeList[p].position[0] = o.left, this.shapeList[p].position[1] = o.top, this.shapeList[p].type == "path" || this.shapeList[p].type == "symbol" || this.shapeList[p].type == "circle" || this.shapeList[p].type == "rectangle" || this.shapeList[p].type == "polygon" || this.shapeList[p].type == "line" || this.shapeList[p].type == "ellipse" ? (this.shapeList[p].scale[0] *= i, this.shapeList[p].scale[1] *= i) : this.shapeList[p].type == "mark-line" ? (this.shapeList[p].style.pointListLength = undefined, this.shapeList[p].style.pointList = !1, h = this.geo2pos(s, this.shapeList[p]._geo[0]), this.shapeList[p].style.xStart = h[0], this.shapeList[p].style.yStart = h[1], h = this.geo2pos(s, this.shapeList[p]._geo[1]), this.shapeList[p]._x = this.shapeList[p].style.xEnd = h[0], this.shapeList[p]._y = this.shapeList[p].style.yEnd = h[1]) : this.shapeList[p].type == "icon" ? (h = this.geo2pos(s, this.shapeList[p]._geo), this.shapeList[p].style.x = this.shapeList[p].style._x = h[0] - this.shapeList[p].style.width / 2, this.shapeList[p].style.y = this.shapeList[p].style._y = h[1] - this.shapeList[p].style.height / 2) : (h = this.geo2pos(s, this.shapeList[p]._geo), this.shapeList[p].style.x = h[0], this.shapeList[p].style.y = h[1], this.shapeList[p].type == "text" && (this.shapeList[p]._style.x = this.shapeList[p].highlightStyle.x = h[0], this.shapeList[p]._style.y = this.shapeList[p].highlightStyle.y = h[1])), this.zr.modShape(this.shapeList[p].id));
				this.zr.refresh();
				var m = this;
				clearTimeout(this._refreshDelayTicket), this._refreshDelayTicket = setTimeout(function() {
					m && m.shapeList && m.animationEffect()
				}, 100), this.messageCenter.dispatch(l.EVENT.MAP_ROAM, e.event, {
					type: "scale"
				}, this.myChart)
			}
		},
		__onmousedown: function(e) {
			if (this.shapeList.length <= 0) return;
			var t = e.target;
			if (t && t.draggable) return;
			var n = e.event,
				r = d.getX(n),
				i = d.getY(n),
				s = this._findMapTypeByPos(r, i);
			if (s) {
				this._mousedown = !0, this._mx = r, this._my = i, this._curMapType = s, this.zr.on(p.EVENT.MOUSEUP, this._onmouseup);
				var o = this;
				setTimeout(function() {
					o.zr.on(p.EVENT.MOUSEMOVE, o._onmousemove)
				}, 100)
			}
		},
		__onmousemove: function(e) {
			if (!this._mousedown || !this._isAlive) return;
			var t = e.event,
				n = d.getX(t),
				r = d.getY(t),
				i = this._mapDataMap[this._curMapType].transform;
			i.hasRoam = !0, i.left -= this._mx - n, i.top -= this._my - r, this._mx = n, this._my = r, this._mapDataMap[this._curMapType].transform = i;
			for (var s = 0, o = this.shapeList.length; s < o; s++) this.shapeList[s]._mapType == this._curMapType && (this.shapeList[s].position[0] = i.left, this.shapeList[s].position[1] = i.top, this.zr.modShape(this.shapeList[s].id));
			this.messageCenter.dispatch(l.EVENT.MAP_ROAM, e.event, {
				type: "move"
			}, this.myChart), this.clearEffectShape(!0), this.zr.refresh(), this._justMove = !0, d.stop(t)
		},
		__onmouseup: function(e) {
			var t = e.event;
			this._mx = d.getX(t), this._my = d.getY(t), this._mousedown = !1;
			var n = this;
			setTimeout(function() {
				n._justMove && n.animationEffect(), n._justMove = !1, n.zr.un(p.EVENT.MOUSEMOVE, n._onmousemove), n.zr.un(p.EVENT.MOUSEUP, n._onmouseup)
			}, 120)
		},
		onclick: function(e) {
			if (!this.isClick || !e.target || this._justMove || e.target.type == "icon") return;
			this.isClick = !1;
			var t = e.target,
				n = t.style._name,
				r = this.shapeList.length,
				i = t._mapType || "";
			if (this._selectedMode[i] == "single")
				for (var s in this._selected)
					if (this._selected[s] && this._mapTypeMap[s] == i) {
						for (var o = 0; o < r; o++) this.shapeList[o].style._name == s && this.shapeList[o]._mapType == i && (this.shapeList[o].style = this.shapeList[o]._style, this.zr.modShape(this.shapeList[o].id));
						s != n && (this._selected[s] = !1)
					}
			this._selected[n] = !this._selected[n];
			for (var o = 0; o < r; o++) this.shapeList[o].style._name == n && this.shapeList[o]._mapType == i && (this._selected[n] ? this.shapeList[o].style = this.shapeList[o].highlightStyle : this.shapeList[o].style = this.shapeList[o]._style, this.zr.modShape(this.shapeList[o].id));
			this.messageCenter.dispatch(l.EVENT.MAP_SELECTED, e.event, {
				selected: this._selected,
				target: n
			}, this.myChart), this.zr.refresh();
			var u = this;
			setTimeout(function() {
				u.zr.trigger(p.EVENT.MOUSEMOVE, e.event)
			}, 100)
		},
		refresh: function(e) {
			e && (this.option = e, this.series = e.series), this._mapDataRequireCounter > 0 ? this.clear() : this.backupShapeList(), this._buildShape(), this.zr.refreshHover()
		},
		ondataRange: function(e, t) {
			this.component.dataRange && (this.refresh(), t.needRefresh = !0);
			return
		},
		pos2geo: function(e, t) {
			return this._mapDataMap[e].transform ? this._mapDataMap[e].projection.pos2geo(this._mapDataMap[e].transform, t) : null
		},
		getGeoByPos: function(e, t) {
			if (!this._mapDataMap[e].transform) return null;
			var n = [this._mapDataMap[e].transform.left, this._mapDataMap[e].transform.top];
			return t instanceof Array ? (t[0] -= n[0], t[1] -= n[1]) : (t.x -= n[0], t.y -= n[1]), this.pos2geo(e, t)
		},
		geo2pos: function(e, t) {
			return this._mapDataMap[e].transform ? this._mapDataMap[e].projection.geo2pos(this._mapDataMap[e].transform, t) : null
		},
		getPosByGeo: function(e, t) {
			if (!this._mapDataMap[e].transform) return null;
			var n = this.geo2pos(e, t);
			return n[0] += this._mapDataMap[e].transform.left, n[1] += this._mapDataMap[e].transform.top, n
		},
		getMapPosition: function(e) {
			return this._mapDataMap[e].transform ? [this._mapDataMap[e].transform.left, this._mapDataMap[e].transform.top] : null
		},
		dispose: function() {
			this.clear(), this.shapeList = null, this.effectList = null, this._isAlive = !1, this._needRoam && (this.zr.un(p.EVENT.MOUSEWHEEL, this._onmousewheel), this.zr.un(p.EVENT.MOUSEDOWN, this._onmousedown))
		}
	}, h.inherits(y, n), h.inherits(y, t), e("../chart").define("map", y), y
}), define("echarts/util/mapData/geoJson/an_hui_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "3415",
			properties: {
				name: "六安市",
				cp: [116.3123, 31.8329],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nJUXUV°UÑnU@mlLVaVln@@bn@VU@xlb@lLnKlVIJUVxnI@lVL@b°VX@bxnVVUnVVnU@kX@VwV@al¥UUnUWa@@wĸULU¥lKUa@aUI@alLVaU¯anWkUKm@XV@VaXlW@aU_UWVUI¯@ma¯W¯I@UU@WWU@U@@UU@VkV@@WUUm@UaU@lK@IUKL@KWmXUWaXI@@a@a@U@U@KV¥lwk°b²JVIVKlV@UXlaUl`UVLVVVUJU@Lnm@_VK@KUIW@J@Xk@WW@UmmXmWk@kK@aUUVmmkUwUmWL@WmU@UJmUULkKWakLWVkIlwULW@X°lUJ@°ULWVwmJ@bmb¯Vkm@@WkWm¯wL@lkXWmXym¯UImJUbkV@Vn¯@V@lUb@mk@maUxmlUbULWn@JLmKUkWKkwUKbmXWxkVUKmLkVV@JUUWL@xkJUUV@X@VVlUbVX@xk¤x¼xWxnnn@Þ¼JVb°aVn@mlnXUJlbVlkz@lUlXJmxVxXnWxXÈWlU@UxU@VX@xUL@UÆmLnV@lWXk@@JlbXblnlJ"],
				encodeOffsets: [
					[118710, 33351]
				]
			}
		}, {
			type: "Feature",
			id: "3408",
			properties: {
				name: "安庆市",
				cp: [116.7517, 30.5255],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@n°znWXlW@kK°xXnl@Xn@l°Una@anIxXUVK@¯VIkW¯X@VKxklJXUlKXblLVKnVVIV@Xn@XKVnVxlnnUlmV@²óUkVlWbln@VVVIn@lw@WVIXblV@ÈxaUaVIVVnKVLKln@b²K@»U£ÑķġÝÅbKa@Im@Û@kWÓkkmKÅnóJUÅ£W@wĕ@wĉţ¯¯UkK±l¯U¥UÑkÝUķ»Ý¥¯JIUVbUl¯ÈV¼VJU¼Vb@bkLUl@VJ@bUXÇ@lkVmXmKkLVxVL@VkVVVlzWkbmLUUUbVbUVlÒnJlUnLllUL@bUVxlLXVÆ¦ÈVU¦WJ"],
				encodeOffsets: [
					[118834, 31759]
				]
			}
		}, {
			type: "Feature",
			id: "3411",
			properties: {
				name: "滁州市",
				cp: [118.1909, 32.536],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@`nnl@xK@X°KXVIXVlbXVWnXlL@È»LVan@VJêVVn@X@laÞbVayn@_xnWVXnWl@VnUVkI@lnXKVLVV@V@kW@LlVô@J@bVnnKnkVa@»lç@nwKmaUUUVÑ@nmWXalI@alVn@VwUaVU@nlaôJnUVVXlJaXXVK@UV@VWx@nXVWXVUlLUbVULVVnUVbUbVb@@aKÆnnKVK@U@UU@@a@V°¯ÈJVIlķ@aaUaVKU_@mkxUI@aUlyU@@wkKWmUbUnUVWbkJW_J@bn@Vm@@KULk@V@@bVbÅm@LW@UVVbkK@UkKWL@VULUKWIUJUbkK@_WVXUJka@XVa@ky@aVIUUW@@mUlLKWÑUKVan@UkVmmIXKaVaUwVU@UmykU¯@±UUL@WUIVUU@KkIWaaU@kUUaÇUó»mKk¯@y@kWK@bkI¯`mnl¯XWlkVUzUJlbUbVJl@nnm@VULV`XnWÆbmUUnJmUknJ¯km@yk@kUxL@VUbmnn¤lX@`z@JmaULUVl@Xn@xllkXWaaW@UVmUb@mVXWxXbWbUÒnVVnVVUL"],
				encodeOffsets: [
					[120004, 33520]
				]
			}
		}, {
			type: "Feature",
			id: "3418",
			properties: {
				name: "宣城市",
				cp: [118.8062, 30.6244],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Vb@XLJXxlIXxlVlV@I²¤nlUnVU@VULWVUJ@Lnb@lV@UnV@@VVVlLnbnJUVkUUVWn@@anUVnVJVIV@@nUJVbUb@VUbVK@bn@VbnIlxkllXVlXKWUXUlL°¤UVVb@bUlkXWxXz@IlaUlnUlJVInVÆJULVUnVK°@VnlVnxV@XLlK@wVL@KnUlJXUbnKVLXlUw@VWlLXKm@@a@VLnmlIVVnKn@kVaVlwk@@a@k@VIUa@maUa@wna@kmWUUmVUIVÇ@aKmakUJ@InmUUaVaklX@Vk@m@VU@wnK@alKVUkUkKbmUkm@U£WVk@@UÝbbaÇx@b@WVUa¯@wVwUUV@VwnK@KWaÅ@KIUyUI@WmXóUbWaKm@km@IUyIUaWKx@zUKUL@llVUnkLVVkJWX@VUKUVIkVWakb@VWb@n@JkXUlmL@xkL@`VxLUÈUJ@Vm@@bmIUlUL@VUVVbknm@mKUwKVÈ@J@LV±kkJUIl"],
				encodeOffsets: [
					[120803, 31247]
				]
			}
		}, {
			type: "Feature",
			id: "3412",
			properties: {
				name: "阜阳市",
				cp: [115.7629, 32.9919],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Vn@ak°a±@¥@UUI@aUmlwUUxb@¥XU@mmI@a@Kn@@_W@@WI@mUVVXUl@XaV@K@I@aLX@aVI°K@KVLUUwyXkK@kKÆbXnlK@k@aJlU@w@U@»@aXKWn_JXkVKn@°LlKXW@¯U@aUK@kmJUwVIUJkmLK@kka@wUVm@@am@UkUbkK@nmVÒ¯VUWVVmIULk@ma@kkK@nUbUamU`UUVUkKVkkW@@bkmnmUXVKXVL@VbUmbVXJ@nmKÅI@KWKUXVJUL@VUKUX@KUKWL@LUJmaXXm@kVVV@L@VUL@VlK@L@V@LUK@VUb@UUU@°@nVxU`Lkn@`@XVJ@XVmk@UKmV¯LVVn±Wm@Ub@JlLUl@VLk@lmVVn@bnV@V°IVaVJXI°K°V@XXVlVVUnKVlUbWXnV@bV`U@@m@@@nxmn@bXVlL@¤nbUl¦VVUnJVUVl@@bÞL"],
				encodeOffsets: [
					[118418, 34392]
				]
			}
		}, {
			type: "Feature",
			id: "3413",
			properties: {
				name: "宿州市",
				cp: [117.5208, 33.6841],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@UWU@bkW@aWU@aUIkWVlLXblVIUVV@mn@V_n@VaUK@I@UaanJVU@lVUVnnKVVlaUaI@wnKLnll@nVlk@wVKXkl@@bbUJ@VU@UUUyVk@aVUXwlWXXWU¹@aU@WUI@mlUnJ@Il@aXbV@VKl@XxVL@WIJlb@al@IUUm@@aVK@¥¯@mUķ¯bWk£Vm@akm@VaÅ@UVWa@UJWkJUbWbU@UlXk@amV@K¯nk@lU@Uxmz@bU`ÇbUbÅVm£U@Wwx@akLUK@UlakwUJWVkLmaUal@n_mVUnKVUUmÅXWa@kJmx@XUJ@bVLXxl@VVUVVUbkLWbU@@lUVVVVXK@XkJ@nU@@bV@VxUVlbU@xXLWn@UxVbVĊV@b@XV`mnkJ@kUKmbaU@VbnbÆx@XU@@`k@@bl@@bkL@WakXWaU@Vmkx@XWW@@wUUUbJU¯V@¯ÞU@WxXlL@bkb@lVlnbJW@kkU@mbkaWJIVlmz¯`UnU@mb@@`@bkVlnV@b@V@aVxn@VxKXnl@nbVKbVK@a_V@Vw@WLlwnK@UmIU@VW@UÈ@lKnalw@@V°@aUmlUUw@V@@UXK"],
				encodeOffsets: [
					[119836, 35061]
				]
			}
		}, {
			type: "Feature",
			id: "3410",
			properties: {
				name: "黄山市",
				cp: [118.0481, 29.9542],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lXnlWX@VUJVnUJVzXJVxkVJlI²lU@K@IUÇLVxnLn@lmUaVU@UVKVknJ@an@@UVIVÇKUw@_lK@wnKVklW@I@mXa@UlaXblUJVUVL@UXWlIUUlKVmkU@kVKVL@ywXLVbJVz@Jln@nLXbVaônW@la@UVWUa@@a@mk@WIk@VwUa¯¥m@UUVK@ImK@aX£kKÅVa_@±akXWWLnU@@a@¯mK@LJUWwUVVmbXX@lWLn`mzUJUbLk@makVWmkXambkKkna@ab@U@Unm@WV@VbUbUJWIk@@lmL@°UVUVmn@@kmWkb@x_m@@aU@b@JlUzlWxXn@b²@l`IVlUlL@VKnVbUl@VlIn@@bbVWUk@@bX@Valb@bnb°Vn@xVKlbVnV@VxL@ln@UXVVL"],
				encodeOffsets: [
					[120747, 31095]
				]
			}
		}, {
			type: "Feature",
			id: "3414",
			properties: {
				name: "巢湖市",
				cp: [117.7734, 31.4978],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VV@blL@XlWnnn@VXXl@@WIX@VJ@LxŎxln@bXJVblX@VVbUVn@VbUVlb@LnJVbVLVXLÒVLÒVbVIVylUXk°Wknm°_lJ@aXL@lz°@lnLô¼VÈVUUaVKU@WW@@UUa@knmVLlaV@a@kak±@UmwkKmkǉÝUUkL@mlIVmnÝWkkUÝ@KƑĉa@»mma@mX¤¯Uw@@UU@bU±±L@akmLUKmLUUUJVbbÇw@kUWaUJ@Xkxm@UJUUm@kakXUVl±ôU@kn"],
				encodeOffsets: [
					[119847, 32007]
				]
			}
		}, {
			type: "Feature",
			id: "3416",
			properties: {
				name: "亳州市",
				cp: [116.1914, 33.4698],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lU@Un@@anUlw@KVmUwlaX_lKna@KU@@kWKUU@ankWXK@@V²VVIÈU@al@VaÈamK@wU@klaUV@XVUU»WUUbkmUkVmk@aÈw@mWU@VkIkVWKUÑķXȭºU¯l@kkLWmÅaL@lLWlzVxVUK@L¯LUJ@bWK@b@JLU@Wbk@WVUUV@nJ@XX@@`m@@L@bnJ@nWV@¦awVVkxVn@bVJ@V¦@²¯blb@mUU@¼¦XbUV`@nnxUxWLkUkVWKkV@XV@@VVL@VX@lVV@L@blL@`L@xXKVL@VnU@lwnU@ml@XnV@@UVW°LnalUI@aUK@aa@UkXW@I@mWL@UXK@UVW@U@@kWn@@V@XblaVxL@bVKXbIlJ"],
				encodeOffsets: [
					[119183, 34594]
				]
			}
		}, {
			type: "Feature",
			id: "3417",
			properties: {
				name: "池州市",
				cp: [117.3889, 30.2014],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@V°°ĊŤ@xĖ@xXÆ¤VôIÆmnLllXÔ@lÜn@@JbLÆaĢÞĸ°VVUUKVanK@UV@VLVVnln@xnklxXamk@WV@Xa@naVkKlk@mkUWwkJWwIWK@UaUwWIUyVIUmVI@UXWmkkWKUUVWm@@kKw@UUUmkaULwm@¯Uma@akaUbW@@a@VlUXa@am@kJ@UVkUamL@UkKVUkJk_±@a@WmXwÇkkaVaUa±wV@VkwnyUaW@UU¯amLk@m@kmmU¯K@L@lUX¯WlkXVbbVUL@J@LVKnlJXnlb@`nXlalV@bnL@Vnb¼@lXbWlkLK@zUJmIUxUVUVmX", "@@llUL@VlxL@a@UwXa¯@"],
				encodeOffsets: [
					[119543, 30781],
					[120061, 31152]
				]
			}
		}, {
			type: "Feature",
			id: "3401",
			properties: {
				name: "合肥市",
				cp: [117.29, 32.0581],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@LxVĊLÞkVlVVXaWaXwWnU@anVVUX@bXblWkk@wWmk@VUVKnb@Iy@_kWm£nmVa@UKwlVl@zn@°lIlmnVIVmnVaXÅWmU_VK@Unmmk@UIVakaaUÑUKÑWKUUKUamI@KkaVUUam@VUUa@UkWUaWI@akmōwwUL@`mn@KVIUVUUUKVk_VkbW@VkUULUJ±I¯alkxU¦@L@V@V@b@b@WJXbWVXn@LKVL@JkLV@Vbn@VV@XU@UlV@@VV@V@XXV@@VJ°°Xnb°@JUVVXV`@bkXWUbU@Wn@VLXlm°bVUbkK@bVJ@bVbkLV¦KķV@x@XbmVVVk¦"],
				encodeOffsets: [
					[119678, 33323]
				]
			}
		}, {
			type: "Feature",
			id: "3403",
			properties: {
				name: "蚌埠市",
				cp: [117.4109, 33.1073],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VÒXLlUlJ@UXV@nÇx@bnlUVllnVaXVV¼UVWU@V²wVV@Vl@VnwlI@XbÆWVnUVmLUVnm`k@VbnblKXUVIlxkb@VVLlK@bwXxV@n¤ÆUVaÈaV_@anyVwV@kl@°m@LnUbl@WVkV@XaaVIXlIV@XbVUÆ@XKWwUkmW@_UmnIlJXkWKXmV@w@_XV@Kl@kU@KlX@@UUUUKWLm@klJVUUmk@mXUWmXw`m@zUbÝakbW@m@UUéUIm@UbKÇ¼@kKWXmWUkaWUJWU¯L@WLwk@mm@_ÅlUVkmWUnV@VWLUbbƑĬ¯l"],
				encodeOffsets: [
					[119543, 33722]
				]
			}
		}, {
			type: "Feature",
			id: "3402",
			properties: {
				name: "芜湖市",
				cp: [118.3557, 31.0858],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@bVaV@XllLXU°lL@V@VUnVl¯IkVUVU@@b@lUXUWmbn@¼bƒĊLÞ@lVXlmÞUnkJ@nlKVVÞXklWVaVI@aUKn»lL@Kn@XXwlm@mn°@V@WywXlWVk@aUaVU¯£kKWVXVWLUkkWlkkwmJUam@@aULVa@UVaUaVI@m@UUJUIUmmV@bm@UXVVUlVmImakKUU@UU@VmU@@kma@KVIXUVK@UVmUkVm±£@JkU@nlkLUlmb@WbU@@XnlWb"],
				encodeOffsets: [
					[120814, 31585]
				]
			}
		}, {
			type: "Feature",
			id: "3406",
			properties: {
				name: "淮北市",
				cp: [116.6968, 33.6896],
				childNum: 3
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@lnnK@¦n@@VV@@VV@nIVV@VW²a@b@bVnUVVV@Vz@l@°UVIVaVV@x@XX@WlwUnV@XblWb@XlK@a@k@al@@_V@@WÅwmaUaV@bnaVL@llInmU_@W@aUUĉUaVwm@XWK@wVkaVUUwU@@aV@@mlI@WLWUUUVU@kV@XalKVaUVUUUk@WwUK@aVI@WUk@@UUU±xkb@lV@xnLÇbUbk@@bÇVUJ±U@U@WLXml@bVVXL@lV@@LmbkLW`kbVxUn@LkxmV@bm@@VkV"],
					["@@VVVkV@¥@UV@U@VUUJkWakKUlXVJ@bXV@blX@aXV@V"]
				],
				encodeOffsets: [
					[
						[119183, 34594]
					],
					[
						[119836, 35061]
					]
				]
			}
		}, {
			type: "Feature",
			id: "3404",
			properties: {
				name: "淮南市",
				cp: [116.7847, 32.7722],
				childNum: 2
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°kƒīaVaXK@UUVmnXUlVÆkVKUUUmmUÑkUUÝlĉKUwKbU@UxW@@lmVUUVmUUmwaWkL¯K@mULWlIm`XWL@b@¼@V@xkVI@b@l@lkV°Ȯ¹ĸW"],
				encodeOffsets: [
					[119543, 33722]
				]
			}
		}, {
			type: "Feature",
			id: "3405",
			properties: {
				name: "马鞍山市",
				cp: [118.6304, 31.5363],
				childNum: 2
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ǊnllLnxV@laXLVKmaaXbVIbVKVVVIVyn@n_W@@UnJlUVVXlLnaUWlV@VVIXW@_W@XK@K@UVUUwVamÑXmmwwKUnUKçU@JU¯@m@nknWxWm@@LkKm¼VL@bUJUbkXWl"],
				encodeOffsets: [
					[121219, 32288]
				]
			}
		}, {
			type: "Feature",
			id: "3407",
			properties: {
				name: "铜陵市",
				cp: [117.9382, 30.9375],
				childNum: 3
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ÒV¤@¼V²@aVV@@x°V£nW@nbnaVXVW@k@aV@VUUl°JUkVm@U@UkK¯WVkKWkU@Ubakwmlwm@kUmUUKU@@VmLUbVLUV¯U"],
					["@@LllUL@VlxL@a@UwXamK"]
				],
				encodeOffsets: [
					[
						[120522, 31529]
					],
					[
						[120094, 31146]
					]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/ao_men_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "8200",
			properties: {
				name: "澳门",
				cp: [113.5715, 22.1583],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@HQFMDIDGBI@E@EEKEGCEIGGEKEMGSEU@CBEDAJAP@F@LBT@JCHMPOdADCFADAB@LFLDFFP@DAB@@AF@D@B@@FBD@FADHBBHAD@FAJ@JEDCJI`gFIJW"],
				encodeOffsets: [
					[116325, 22699]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/bei_jing_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "110228",
			properties: {
				name: "密云县",
				cp: [117.0923, 40.5121],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@vIHZDZQtDLNMXIbHRCXXITbJ@H`LGPRDDJNCLHTOCWFGvGBUJMKGFO^IHWXITQCIY^AXGfRDXF`DJOLB~G\\DZIHHpErUVMhHb]\\MBVF@FTP`@zTbD\\@~M\\K`H^EVODWICAakAQXoIcCOCIgGYNWFWNGGKKGaJEGMEIKYJUT_J_Go@_SyQaSFMEGTcYOQLIIi@EKAUPCV[EEXQCW|aMUMAaYCYNIDGGACIMGGSKDQGaF_C[GaB@GOIiOKAYLmI@CN]F[SWWAcKKI@HMUimEKbeYQYISNUOcBKPIFBNgvDPGZYFSf]CMSIWGEUFgDIQ[MeDMJS@RR@LphFPCHaBAJKF@J]IBJO@HlO@@RKAMPJHCNDJTHFP@ZGNANBRFH@J_fM^ONJNF\\VTDJHDON@XRND\\XRCPVETCLBVKDFJINHRGPRV@\\CLJN@VbXbLVT"],
				encodeOffsets: [
					[119561, 41684]
				]
			}
		}, {
			type: "Feature",
			id: "110116",
			properties: {
				name: "怀柔区",
				cp: [116.6377, 40.6219],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@JHTVHXCHPfnDJGHNDJSB[JSBGVSAOH@PMPuDEHHXZN@PHF@ZLJ@LHVYJA\\OFWP]BMtMBSRGV[JeVAPQVIFENMD¡@^NV\\JH@NNL@NM\\kTQ\\I^FNIpBHGTBFFAZQfKDIXQTLXFXNNVMVHRGpCFLlRLEVBBH`IVO\\G`RDPAXLXBXORHZEHTDLLN@VGTMrQNFPeASKG@GMOAKBYMK@GTUHUXSHMVDNMOUEOZMJML@^KRACMZEZMRQLUHE@OFENPR@DI\\ChMHIDG\\GJMDWHCKGMDCIQCHO_K@GaIJSWWQDaGWJMNCKRsCYGYuJUSaKaW@UIMDK@[QUHOGQJMEILCAUDKFSOUQD[WMCQ@WPMGCCIUSE[IMPMN]`e@IEGAQBMHM@YEOSGCIDMIGNOLB@QP@GkP@AI^J@ILEBIbADGEOog@KQQWSekWQQUOFKZLF@PUNmIaHIUeBCTSHENcJa@_IWSaGu`GLSBKJQFOXGDXVQVOBIHcDSJWBEFGTMH[^mLaXcHiKElTRKtFXZ`MHMPCNRDxZB\\ICIHK@KHbIVFZ@BPnGTGbDXRDJaZKRiGEFSFEJhjFNZFjn"],
				encodeOffsets: [
					[119314, 41552]
				]
			}
		}, {
			type: "Feature",
			id: "110111",
			properties: {
				name: "房山区",
				cp: [115.8453, 39.7163],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@h@bl@HRJDZ``TA\\VVD^H`\\pF\\J`JGv@ZO\\GPSTEjPTR`FnEbDTDHEhLFMTK@ETSPULKEI@OVISKSJACEQNQbVIXGDIN@dMB[IIBcN]ZHNLP@XOWCFWCNRHTpATD@^NVNLED@Rh@jCEF}E[OOHUEW]W@QGGDIQSH_MmFmCUT_K]i@MHCMWFCFE{BMHMPOHKS]CFNGBELDH_@BcAKOACESAOBELaXAROB@FODMEDWJAG[aE@UM@DImEWJMC@OeCA{aE[@{L@MINUCQXKfUJORCHqJBF@TCXWNQX]M[EAJO@@KMBQJIC]EWMCCUBEBFHKDOTMBGNGF]MWDBRDdMDQVyE@LPVHDCP@JVVMTG~HNSH[CmRUvHPHBbA\\PTNRC\\YNJPRARPJDDR"],
				encodeOffsets: [
					[118343, 40770]
				]
			}
		}, {
			type: "Feature",
			id: "110229",
			properties: {
				name: "延庆县",
				cp: [116.1543, 40.5286],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@^AXOPEB[ZIGU@KKI@YGE@OYMGWFGvCNO@OPGTBHUTA\\ITACIGMIHmCOeDGGWSUIGimYEEMgiFITEFEjHLQbYCIWQaCSHmHAOY@UEaJG@LGLDJ[JAwYQCDMNONGY_EWLsSQFkMO[NWAIGaIYL@HMBOKiOQDWEUDMQSF_QIUBWdg@[NaAKQ@M]OQ@WhgLUMMFYQDIRCEUZOOCIOJ[KIUMKL@HIDKVEBM`HJAJSJUdBLGNEdMBMO[BYEWJSNKNaD]PE\\SjOT_RQVEZPpNQXfNA~lNG`@PNLp¼RFLfbdKbATUh@FSNWjGFZVLFHVA~X¨PPROfFJbNJPLFbENJPrEFNPFRHDDJdENJLVEPBJTVTHGHFRFH@PXP\\ORQHW\\BjWFDERLPPBbB\\E`B\\D\\L`@F]FCnJ^AZL"],
				encodeOffsets: [
					[119262, 41751]
				]
			}
		}, {
			type: "Feature",
			id: "110109",
			properties: {
				name: "门头沟区",
				cp: [115.8, 39.9957],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@V@XMnGPY²JQNEhH\\AZMPDVTTDZCPiJkHSHCjIdFtEHITCNITQEKUAMCEIKCECABYESKFWAKBEIIHABGDCKCAIHMHALKEI\\CFIBILIJQZS]BBEECS@E@@C]COKI@CABAAEEDMGCH]A[M@CJWHJaUMRFRBDTITLUJ@PFJKLOVST@FSLENgKGFSCaCmF_ESQiOSFOT[HYPu@IH_[IoE_[]GUC[USB__CYQI@Gakg@qZeHQNMNV\\FVLPgJAFJPRLCH[XcPELUT[JiV_EELFTADBXRTRLJC@fHXHHbPd`fR@NfT`@TLplHMpCEJHJBVLF@JTVnG^KXDXHNVGRLRXFJVdDHSNWLGfEzA"],
				encodeOffsets: [
					[118635, 41113]
				]
			}
		}, {
			type: "Feature",
			id: "110114",
			properties: {
				name: "昌平区",
				cp: [116.1777, 40.2134],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VNLJI\\JPPDYPFVQDCJZRNEVNhKXgR@^P@NLRbB\\Mh@XcVARJE`RTCNFVXRCjPPLNA@GZKbJJHXB\\MNPjLdGbWnK\\]NGHSFEXATIdCJGPARUWUHCPWRELITAHKv_E@iYCaW_BQ\\Y@QIO@QDCIGZCEMWGFMFAFgHEDOCSqKCCFGAMKEAC@ODGCGs@WH@KQA@EE@CE@GEA@EH@GGUEEJEAYD@JM@@DAA@FHD@FTJEHUC@JUBKCKG@G[CIIQReAYhO@OXGDO@@FF@IHJFCPEBACBIAAKDOABXARHPNEHGbQAAKQFGIAM[C@WHKaGiCEGOAHUKCIokSCUSOCYN[BgGMFIR±OZmHWNU@ShbbXDHVXXGJ^lZ@PZ\\Nb@\\FHJAD"],
				encodeOffsets: [
					[118750, 41232]
				]
			}
		}, {
			type: "Feature",
			id: "110115",
			properties: {
				name: "大兴区",
				cp: [116.4716, 39.6352],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@F\\E~DFN@BDFEpHFCHBBEGCDCJBHUDSBB@ELCPbF@B\\J@BJVAFJ\\ADKTCBGECFMT@BMN@@FH@DaNBEnvB@FPBATK@FHEFIAKFBFL@@PKBFJHC@FXBRAFCDMPDTOL@JIVFDHH@DDH@BGRFCDLD@N^@@CNA@KNOAEBCECFEGCFGMGFIPMOEJOLBADBBHGG@GCHIECY@INC@DMGS\\AIOZAAEYA@GT@KKMBEETCGMVINFxA@MJADB@FlA@HJA@NND@DFA@DVAZBBOFKH_JA@K^GBC@EFEG@gAENMXKJigC@IbSJMqGOP£RGSMGE@kbQFDPEFiBSGGSBK]I{CDWCIDOic[C_G@SuSO@EWKCO@MNY@\\uZOPENQD[LKESSKGBKEG@EJGAGHoH¥CqhifeJkX_XFFGHFNEDFPENKHM^IFIVL^S`DVEnNnG`RTCJHH@R^XFXGVPP"],
				encodeOffsets: [
					[119042, 40704]
				]
			}
		}, {
			type: "Feature",
			id: "110113",
			properties: {
				name: "顺义区",
				cp: [116.7242, 40.1619],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@EhEBENXHFNYDJHCD@RJP@R[ZARX`DbjZF@bHXT`Jb@dIFMTGDSfAJVbGnJVM@OKELYPERVXRflXTT@NIfC\\NJRhCVEHFJXNT^DTeZEHYCOhuAMJELOdAVPTMOWBWNMNEJgl]@WGUFIC[T{EEDEHGCIGMI@SECUQI[D{A{GQESPUH]CsiMCmHUeoHENcAaDGCMDGMQCACCBaCGLMAHB@DIEQLOAAEEJ@CW@CDINGAAGKQOCgV@LG@BEGDKNeREFBNCFIDOPKD[@YRW@GFWDAFE@EHDDrLDTCPGF", "@@KrJEH[\\B@FF@CHFBHUNAJKADGECBCMAG^E@EbI@BEGP"],
				encodeOffsets: [
					[119283, 41084],
					[119377, 41046]
				]
			}
		}, {
			type: "Feature",
			id: "110117",
			properties: {
				name: "平谷区",
				cp: [117.1706, 40.2052],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ZJZRafFLjnVGNJ@LLBdXX\\T^EDMJ@nZKLBjPPJ@HbA\\H`DbERHLCFK^BZaFWXQLAGMHa\\OLO@SBIpBdCLVQfElO@GSAKEDQTC@GEBKG@ORIJBDAPDFA@CaOq@GGQAAEJK@KMUGAAGEAa@MGMBGCGSIIW@WSUCMDOJeWOM@IUF{WMWaDIMgIoRoCOKeEOEAG_I[cg@wLIFENQFDVTFJ@HNDJGHCFFFS|D\\EJHV@Xk^IhMFMNAXPX"],
				encodeOffsets: [
					[119748, 41190]
				]
			}
		}, {
			type: "Feature",
			id: "110112",
			properties: {
				name: "通州区",
				cp: [116.7297, 39.8131],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@FDAJTGDNDCTDDEDBBE@DT@@EHCDGJ@EIZ@@FDBR@ATFBBVFFE@@HNA\\VE@CLIFNJFNJBCP]A@LJFA@HJEDD\\C@DBCHLAEPF@@DH@APHAERDF\\GIxDTM@CFLBBFJ@CNUPMHECGDBF]BMFPDLRBHHBJMDCX@@DFIBFPBRKJF@CGANBHKbDDABDRDHNNCHDbCdBFMpGHiOYMefKJMC}HWAUNW\\NNBNAkNU|]HMTMN@MZBLFFF@RIRUTBMFIEGaAGGAOIIUGTSFcYKS@MSLYPKRUBU]EWDOI]CKGASgW@MTWKIMCS@uMAKKADMECGAKVUTSDy@IjWLMNBF@hHEF@FAD]H@LIBG`ELAPYAUB@CEB@CMC@MIB@GkB@ECAIB@NwBMEUJHNSDFFNALLS@@HZBBFYBJP[BHTCND@JMZ@FDGJHDH@GHAABCKAIPPFONEJNHEHHDEFFDADBFMP@L"],
				encodeOffsets: [
					[119329, 40782]
				]
			}
		}, {
			type: "Feature",
			id: "110105",
			properties: {
				name: "朝阳区",
				cp: [116.4977, 39.949],
				childNum: 2
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@bFGHBHFBFIVFHHG@@FFB@HDFF@@FRB@LXGt@DHCH@PBDLFBNF@BEXCHEX@ZQ\\@LCPOJCDEAMFEfQLMHCAFH@@KhUNE^AAEHCFDNGVODMI@AEKADEN@CSJw[HCEFQGBBOG@@CE@FOKBDGCAD@C[FCGIB@IE@K^BDOIAEMMIJEDKF@[UMB@GF@EEAUEABSQ@CA@EY@FJI@CHGD@FS@@CAFCACFSCCDCMSHBIECMB@D]@@MKCDCQEAHG@CCG@CGUEIJK@SPOCCNEDQBDNDB@DJCDLFCBBALJB@BVGPBKVO@KHCCCD@FE@BNA@FNCTDDJA@FGB@NBDW@CL@hT@@ZHHQDDDAFSAANBC@HG@EFS@@DE@@PCB@Ue@CADNJB@FCBWA@LI^ix@FIHrH"],
					["@@HUNAJKADGECBCMAG^E@EbI@BEGPKrJEH[\\B@FF@CHFB"]
				],
				encodeOffsets: [
					[
						[119169, 40992]
					],
					[
						[119398, 41063]
					]
				]
			}
		}, {
			type: "Feature",
			id: "110108",
			properties: {
				name: "海淀区",
				cp: [116.2202, 40.0239],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@plDJVLGPBFHjDbHGL@X\\DBNHJREBLRBHaFGMGOBQAWPBLCBBAJBDFADOIEJGE@@EP@HCPWP@ZgfBRQJJ\\D@HLHLDVA@IVDFGSI@EGC@EBB@CN@@IZCAGHGaEqGJG@EjwJ]@K@GSA@e_I@NE@CA@Kg@KC@ENCFAKQAW@WIMK@V@I@@F@^EDFB@HcIaDYCBRRDCHD@EFLN@FE@CJUPEJOJMTBPEDIFCMIAKNOGMRFJNDVBFLSRMJSDGJsFcEiJGDGTIlOjYD"],
				encodeOffsets: [
					[118834, 41050]
				]
			}
		}, {
			type: "Feature",
			id: "110106",
			properties: {
				name: "丰台区",
				cp: [116.2683, 39.8309],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@hMN@NFTQCFRCBJFA@HJ@@HJ@HJ\\FTACD@@UNLXJX@@MA@@IECAQlDFEHBDI~D@GXCFMVDFCH@@NF@ANJC@FnAB@AMF@@EDCDDLGP@LUOAUH@AIABKAAEDCKID@CCACMWA@EGDEILA@OK@AELEJBFEEGL@BSOA@EuAFmMACbG@@EM@ANS@ENFDAHSDCL[BEIUBAII@A[E@OaKD@FAACTGVIACDHDAFGAEDoGEFACM@ig@@QFCMKMU@]SCoBGSMQDEXXDWPO@MKYGM^AdJJA\\cNB\\G^DNHFCBFABDBJ@PL^D@DF@T@FDAF^A"],
				encodeOffsets: [
					[118958, 40846]
				]
			}
		}, {
			type: "Feature",
			id: "110107",
			properties: {
				name: "石景山区",
				cp: [116.1887, 39.9346],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@NQPHLMJBDNJEFCAONSPIFIVODIF@@EKMFEC@DGQCAQZDbCdJ@GEAFC@]@EJ@DCSB[EGII@@GI@@GEBAIQDDESRMEM@gNYTIRKJAJEJ[DFJKLGBGNBJLDCDAHGBJJAFBLEXTLZFBAFDLD"],
				encodeOffsets: [
					[118940, 40953]
				]
			}
		}, {
			type: "Feature",
			id: "110102",
			properties: {
				name: "西城区",
				cp: [116.3631, 39.9353],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XBDA@EIACM@IJAD]BC@SFABISAD]H@@OAEDQEW@BLEMD@FLDh@@LDBF@@M`J@fTB@H"],
				encodeOffsets: [
					[119175, 40932]
				]
			}
		}, {
			type: "Feature",
			id: "110101",
			properties: {
				name: "东城区",
				cp: [116.418, 39.9367],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@DBf@@VDA@OF@@CT@FEH@@GADBMTBBECCRCGG@YS@@gDK@AC@PG@C^TBAJEB@TADC^IB@J"],
				encodeOffsets: [
					[119182, 40921]
				]
			}
		}, {
			type: "Feature",
			id: "110104",
			properties: {
				name: "宣武区",
				cp: [116.3603, 39.8852],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@RBX@RFFCBFU@aK@WA}CCJGAEFkCBRFD@JB@@N"],
				encodeOffsets: [
					[119118, 40855]
				]
			}
		}, {
			type: "Feature",
			id: "110103",
			properties: {
				name: "崇文区",
				cp: [116.4166, 39.8811],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XBL@@bEVD@BX@AC@MHA@EIBCCDSEMmB@EIDBME@@MG@EDUCENWD@H"],
				encodeOffsets: [
					[119175, 40829]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/china_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "xin_jiang",
			properties: {
				name: "新疆",
				cp: [84.9023, 41.748],
				childNum: 18
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@ρȁôƧƦóəʵסʵóƪԫʵѵͩƧͩړυࡓɛʵ@ȃ@óᇑѵƨɝɚôóНѺͩɜ̏ԭʵôƧɞñ@υƩ݇ȂóƩƧ@ѵȂυƥŌਗ॥ɛóʵѵƧѹ݇̍ࢯəɞυρͩ̏óਙƨƧŋôōó̍ͩóʵןóŋړͪƧѶ@ɜԭԫƦɛȄ̍ɝȄöςƩȂ̏ñȀ̏ƩóóŎə@Ő̎@ɞȀɝŎôƨóנѵȄƧ@óŏɝóɜôŎ̍ͨςŎ@ƨóôƨɞ݈ʶóƨφó̎Ȁƨ̍ԮòѸԮמ@ѺȀ@ƪၬֆòȂñ̐òȂɜóƨ̒Ŏ̑߼@φρȀ@Ő๐ς̎Ƨφ@ɝφڔ೦Ԯǿࢰ@ƦŏԮƨƨȄƧ۬ɜʶڔŐɚɚóŐôƨ߼ôƧƧó̐ƥóŏѺǿƦȁφƧςƨƧ̒@ɜƥƦυ̐ɛƪͩƩəƪʷ̑ə@ȃƨʵנŋྸōਚԭԪ@ɝƨŋ̒օςʵôƧ"],
				encodeOffsets: [
					[98730, 43786]
				]
			}
		}, {
			type: "Feature",
			id: "xi_zang",
			properties: {
				name: "西藏",
				cp: [88.7695, 31.6846],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ôŌנôʶ̎ͪôóŎƨŌਚƧ̐ôςͪφɚɝࢰ݈̎ѺѶƨôʶ०ɜਘƦŋφѶȁ̍ôŏɚŋ@̑ə@ŏò̍ɜóƥôʷƧ̍φѹԪ̍ע@Ѹʷɜ@ôñנ@Ѷɛɞô̐ŏѶƨѸƧƥōƦôŏô@ƧôƩ̒ŋƨŌƦǿô̎ɜȁ̒óʶѶôôО̒ςƥɜНφσɛȁ̎υƨఱƧŏ@ʵƥ@ŌóóóͩƨƧóŋ̑õóɞóɝԩͪɝρôƧ̍ƧѹͨڑŎ̑ōóƧࢭͩ̏ѵɝóఱóóԪυô@̒ƥŌ̏Ƨ̑Ȅ݇ŎƧѵӏ@ɛõŏɛȄôӒƧŌѵǿɝƧŋԫ@̏ʴƥ@óǿ̑Ȁóǿ̍ςóóυô@ʶɛñρƦƩŐó̎óѵó̑ͪࢯОóɜןƧ̏ƥȄ߻̎̏̐ןŎɝɜöɞƩȀôöɛȀóͪ̐ƨƪ̍̎ȂƥԪυО@φɞôƪ"],
				encodeOffsets: [
					[80911, 35146]
				]
			}
		}, {
			type: "Feature",
			id: "nei_meng_gu",
			properties: {
				name: "内蒙古",
				cp: [117.5977, 44.3408],
				childNum: 12
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ኊȁ૊ö߼ƩɜɛנñԮɛѶóԮô@ȁѸóמ̎ගѺၬ@߼ʶԮӒ߼̎@ŐѹӒ̒Ԫƨöග̑ѶȄ̒ς।ѶɚöɞɜʴڔôôȂ̎ѺȀςƨƪóԪɜôɛОਕڔԭѵ̍ѹȂԫɛƥ̍Ȃóɜ̎ô@ʶ݊ੲࢮʵږͪנƨôȂƧ̐ͪ@ŐƦƨφԬѶɜôƦ@ŐƧôôƦəŐ̏@ŐڒѶԬô̐ʳԩНςōôŏɞ@ƨȂѶəóƧ̒ػ̎ó̐Őנóƨô̒@ƨɚɚ@עԫɛɛ@ȁυͩƥʳòևρ̑ࡗƧͪ༃ॣԮփ̎Ʀ@ôô@ôō@@ȁѵóƨ̍υȃóʵɛƨƥóυȂóəƪ̐ρƧͩɜԭڔȄ̎عƧȁ̐ŏó̍ɛƥƧ̑óρŐ@Ƨ̏ɝəɛ߻ͩ̍ͩɝО̍ƪƧóóӓƨóƧʳ݇@ɝςƪ@ʴƩƧƦôƨɛȄəƧŋυóͩѵ@ɝǿóŌן̍ɛóО̍̑̏ôȁ̍ŏòȁñóƦͩ@ǿə@ɛƧ̑ρȁυô̍օѹóȃə@ȂσʵѷƪòƩ̍ôó߻ۯôʳƧóõʵѵóѹɜ̍ȂѹôɛŌφֈƩͨρóυӑóޟఱ̑݇ͪóƪƨŌóȄڔԬƩςםñ̑ȃѵŐԭŏƨȁɛǿρôõɚɛóƧОə@ѹ̐ѵöԪͨôͪɛ̒ןŏƧƥóôƥƧɛŌôóɝó@̒݇Ӓ̒Ō@Ŏԭࢰ"],
				encodeOffsets: [
					[99540, 43830]
				]
			}
		}, {
			type: "Feature",
			id: "qing_hai",
			properties: {
				name: "青海",
				cp: [96.2402, 35.4199],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ƨ@ôƪ݈ȁƪ@φɝòóƨԮʶɛ̐ѹͪôОəóƧɞᇒѶ@ôږô@ǿѶƪȁςɜͩφςŋɞôѶɛƨŌɞ@ɚςŐñԪॢͩƨȂɞóƨŐ̎ŏעӏ̎óƧƦô̒ȁɜςͩ̒ɚɛƨôƨɝφɛóȁƨŋóóɚͩƨóóƩ@ƧəŋƦƩ̍@ƧƧôǿυ̑@ȁɞǿõŏρƥסɚƧóτԫɞôƧƦ@ñȃòñƥóυôôѹѵ@ŏ̏Ȅɝó@ȂəŌóəѹƦ@Ő̍Ōυ݈ԩŐƧóôƧ̑ôʵɞƧ̑ѵôƩɞƧ̑óНѵóôʵ̑ɛȂó̍ƥȀƧŋ̑Ōóƪ@ƨóóŐƥƦŎѷƨѵƧ̏Őɝóѵɜן@óòɛ@ѷʸס@ԩ̎υѺƨ̎óʸôƦɛñ̎@Őɚ@̒əŌóŐ̎"],
				encodeOffsets: [
					[91890, 36945]
				]
			}
		}, {
			type: "Feature",
			id: "si_chuan",
			properties: {
				name: "四川",
				cp: [102.9199, 30.1904],
				childNum: 21
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ôôŋó̑Ԯ̒ɛОמͪƨōöͫ߼ƥôȃƨóóñôƧóƧôōڔŏƨŐ@ŎôòƥѺŎ@ōɜóנôǿôƦôԮ̍ɜôɚƧñɛɚȁ̍Ƨɛևυ@óóôŋρԭɝ@Ƨʸ̍ŏυɜƧƧóƧƨȁρ̍ƨȃɚôʵφóô̑̏Ȃ̑ʵɜʵɞ@ƨʳסƩóŎəóɜƧôƩƧρóôôô@ŎƧƨƨƪѹó̍̍Ʃ@̏ѹНôޟ̍ƩóƪυɝɛəƨôŎɛȀ@Ȃ@ñɝʶ@Ōρנ̏õóɛͨƨȂѵОɛʵ@̏ƩŐó߼Ƨల̍φɜȂυτɛОρƦɝƨóƪ̒Ѷɝƨóʶ̒óƨƨôԪŏφ݇̎ŋ@ŏѺƥôɚɚŋ@ȁɞô̐ȃ@ŐѶóѺφóƦôñòòȄ"],
				encodeOffsets: [
					[104220, 34336]
				]
			}
		}, {
			type: "Feature",
			id: "hei_long_jiang",
			properties: {
				name: "黑龙江",
				cp: [128.1445, 48.5156],
				childNum: 13
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ᇔȂਚНƨŐѶŏöƥςŏñƧƦóƨȁ@óƨóȁφӑóóƨóǿ̎̑ôНɞó̑ɜə߼̎ǿ̒ôڒӑφ@Ƨȁ̎̏ƥƩ̎ρశôȂςƨφ@נɞ݈̑ƥƧɛƨʵƧȃƥ@Ƨƥ@ŏ̑ԩôɝρρóɛƧƩͩƧó߻ʸ̍ʷѹƥɞڕõ̍öɝυ̍ȂƧ̐̑ŏóƨñŋѹóóȁ̍̏Ԭõʸ̏ŏ@ǿ̍@ƧОυ@ñƨòȀƥŎ̑ŐѵóɛŌóȂԫōƧŎѹñ̍ʶóОן@Ƨ̎Ѷô@Ȃ@óŎó@@ó̍ƥԭք༄।ƨͩ̒ࡘςñֈƦʴφͪ@ȂɜɜסԬə@Ƨə̑@Ƨóןô̏ŏ̍ô̑ؼôƨѵɚƧȁɝ@óŐρŎԪО̏ʴ"],
				encodeOffsets: [
					[124380, 54630]
				]
			}
		}, {
			type: "Feature",
			id: "gan_su",
			properties: {
				name: "甘肃",
				cp: [95.7129, 40.166],
				childNum: 14
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ڔôԮࢯ@ō̑ŋ݈ӑ@̑ɞôóôɜŋƦƨôóƨƦנŐɜ̑óͩԩͧѶõѺ̏ɚ@ƨНɜôöəςóɜȀƧȂԮŐѶŏ̒ȄמòƪρړԫôȃƧŋôƩ݈ͩɚ@@ǿɜ@φͩóŏɜӑƧōôǿ̎ôƥƪóõö@ôƨôƧƦôó̒ɜ@ɞŌõʶ̏Ő@ȀóôƨȂ@ʶע@@ƥ୾ӑó̑óŋôʵóɛړ@@ƩöóƩóρɛƨ̑@óʷƥƥ̎ɛƧôōƧǿôͩѵôɝȃɞȁõƧρóó@ōƧŏړŐóŎôƨóƨôòƧôóȄ߻ƦõͬƧŎםͩɜНԭ̑ô̒óŌóƥ@óƨɝσԬƨôעəςƦöŐɝȀ@Ȃφ̒óȀƨƨ̎@ƥƪɚŌ@ƨôƪƧôəͪôôƧŌôȂυɜƧɞƧóəɜ̑ρͪɛ̑Ȃóƨƥ̍ôסӐ̍ŐƧŏɝôƧȁॡͪòԩρŏ@əɝƧŋѵɜɝóρŌυɛͪρƩȂѵ@Ȁڕó@ȄɜʶφࡔڔƨͪѶͪԬʶôƩעʶɚʶƥôóƨςȂ"],
				encodeOffsets: [
					[98730, 43740]
				]
			}
		}, {
			type: "Feature",
			id: "yun_nan",
			properties: {
				name: "云南",
				cp: [101.8652, 25.1807],
				childNum: 16
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ôɞôɝ̒öôŌƧƨôͪôô@ŋƦ@ʶƨŐô߻ƪŏ@̐ɜʶѶНƧȁɜͧöô̐ςן@ŋɞʵ@ò@ȁɜǿóōɚƧɜφɞôƩ̎ƪóޠѺО@̐̎ƪô̎ѺƧƩƨƧ@ōóóôóςƪƨƨóôɛó̑ԭƥŌɛǿɝƨɛͩô@ǿƨȁѺŌɚɛ̍ןѶНɛƧôóƥȁƦͩôŎɞƨ̑ɜòôφ@ƨʵ@ɛѹōóȃəƨυǿóʵρƧƧŌƩɛ̏ȄñƧƧȀɝ̍ԩʶƧ̑υóŌƥʳɚӑóНƥô̑óӒѵʵѹƧӐןôƪφõŌƪ̒ԫŌƧؼƨƨסρȁƧƨȂóʶó@@ʴƨôôφ̎Ŏ@ȀƨƪɚƨóƨôôôςóޤƧŌƩŋƧԪ"],
				encodeOffsets: [
					[100530, 28800]
				]
			}
		}, {
			type: "Feature",
			id: "guang_xi",
			properties: {
				name: "广西",
				cp: [108.2813, 23.6426],
				childNum: 14
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ƦŋѺ̎ڔʵƨŐ@ƦמȄƪôóȂɜŌɚͩɜ@öóɜôôȂƦôɜȁ@ɞφóȄ̎ƨʶɞŋƨʴɚǿ̐̎Ԭ@ôñ@̏ƨρ۫ôɚƨƨНƪŐ̎ƥóƦʵƥŋ@ȃóƥƧ@@ŏɝǿôυƧȁѵɛ@əóŏ̑@@ə̍óƧó@ȁƩρóòНƥô@Ӓ̑@óŎ̍ƥσŎυ@̍ƨ@Ō̑ôóͪƨ̒óŌړ̏Ŏ@ŌôȄѺŎ@ɜƧʶυ@ñóɛƧ̒ɝóōƥͪ"],
				encodeOffsets: [
					[107011, 25335]
				]
			}
		}, {
			type: "Feature",
			id: "hu_nan",
			properties: {
				name: "湖南",
				cp: [111.5332, 27.3779],
				childNum: 14
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@քɜОƨ@öŐמóƪôƩɚ̒Ő߼ȁςͩɜòƪɜȀòñɝòѺͪ@ŏƨŋóɝôǿƨɚȃóəƨȃѵͩó̍@ȃƨóóƥƨƧ@ʵƦóͩɜɛóñԭɛōυȂ̍ƧƦō@ɛƥɛȀ̑óʷóō̍ƩŏƧОəƧóς۬Ƨ@̐óòԫ@̏̍əȀƧʳɝŌóɞƧƨɜóŐƨò@ȄƧŌρŋóôԪОóʶ@̎óȄ"],
				encodeOffsets: [
					[111870, 29161]
				]
			}
		}, {
			type: "Feature",
			id: "shan_xi_1",
			properties: {
				name: "陕西",
				cp: [109.5996, 35.6396],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ςôöƨɝȂɞȄѶóóͪƨȀóŎƨ̍ɜƦƦôʸ̒@ɜƧςƪôõô@ƪڔ@ôɜóʶôŌô̒୽Ӓ@Ʀ@Ѻ̎ɜѺɛѶôöʶôƨóʴ߼۰óô̎ñƪѸƩτʶ@ȁòŋəѹóǿ̑ʵ@ȁ̒ʷυփô݉ôН̏ط@ȁƨóô̏ƪõ@ʳ̐ʵ@ɝɛŋƩŌɛóןôƧŋ̒ó@ŏ̐ƥ@ŏυ@ƧƧôן̏@ƥȂѹɜəɛóԭ̎ƥóóóȀןɛô@ŎѹōñƦ"],
				encodeOffsets: [
					[108001, 33705]
				]
			}
		}, {
			type: "Feature",
			id: "guang_dong",
			properties: {
				name: "广东",
				cp: [113.4668, 22.8076],
				childNum: 21
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@Ȃôôƨ̎@ɚ̒@ôŐ@ɚѶɜƨȂóφɞȀ@Őƨ@ôƦ@ȄƦŌƥʶƦôôŎôʸ̒ɜǿƦ@ɜƥŎ̎ƨφȁɜŎòƥԮŎƨōóŏɛƧɝəɞƧ߼ɜςȃñȄƦŎ̒ōôòƨəƨɚН@əƨ̏ƪʵυŌəɛóəԭŏəóŏѹρʵɝƦ̏ƥʳѶöō̑óóŋρȀυƧƥɛѹōƧôןɛŏѵ@óŋôʵɝƪԩõ@Ƨō̍@Ƨ@@ƦɝԮƪО@@", "@@X¯aWĀ@l"],
				encodeOffsets: [
					[112411, 21916],
					[116325, 22697]
				]
			}
		}, {
			type: "Feature",
			id: "ji_lin",
			properties: {
				name: "吉林",
				cp: [126.4746, 43.5938],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@נ@ôН̎ʵѺòƨōԬŎôȁɜŋѶô̒ŏƦōñǿòƧφ@ƨН̎@@Ȁ̐Őöʷ̐ԫ̎ôȂѺôòŌôƧ̒Őƨ̏̎ȁφ@ŋƩͩםȃƨ@ȁ̑ʶ@Ōóôɛƥѹ̑συ݇@ɜρƧȃࢯƨôəȂɛōƩɛ̏υρóõƪʴυφ@ʶôŌóρք@ɜƧ@ɝǿƧͪρȀƩó̏ŐƨȂ̍غړȃɛԮƨͪ̏ςƩôɚφȁƦôɜƧôʶφȄ"],
				encodeOffsets: [
					[126181, 47341]
				]
			}
		}, {
			type: "Feature",
			id: "he_bei",
			properties: {
				name: "河北",
				cp: [115.4004, 37.9688],
				childNum: 11
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@Ʃ̒̏ŌѺ̒ƩóȄƧŌƥͪòôñȂ̎ŐóȂ̒̐̎ôНɜנ̎ôŋɞȀѶ@ôͪφƨŌɚɜȃóƧƨƥƪ@ʳƩɞρ݈@υНφʵɜƦρƨƧ̍ɝóɛѹ̍ρŏ̑ôóƨ@ƧƦôƨɛ@ƥƨ@ȂƦ@@ôəŐƧʶƨŌυ̍̎ɛŋôōɝ@óƧ̍ƦʵѵʳôʵɜŏςôƪŋƨŌɚ@ôНƥƧ@ōѸɛ̐ô̎ʵѵНԭ@̍̍Ƨò@ȁɝ@əρυͩƪ̏ƩõƧŎƧōóॡȄɛʶɜȀ@ɞςѶƧƥςɛŐ@ɚɜɜ@Ŏôôςƪς"],
					["@@õə@Ƨɛ@ŐóƦφô"]
				],
				encodeOffsets: [
					[
						[117271, 40455]
					],
					[
						[120061, 41040]
					]
				]
			}
		}, {
			type: "Feature",
			id: "hu_bei",
			properties: {
				name: "湖北",
				cp: [112.2363, 31.1572],
				childNum: 17
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ñȄυƦöŐƩóנƨƨφ@@Ő̏Ʀ@Ő̑ôƨŌנóɜôƪŋɜŌѶօڔə݈òɞōɜŎôӏƦóƨô̒óôȃƨó̎ŐôƧƪ@ƨȁςƧə̑̎Н@̍Ƨŏρôԭͩԫ̍ʵƧóȀôɞƧŌ@ŐѹͩñòɞñɛǿƩɛñρͪ߻Ȃ̑ŏƪəƩóםôõŏƧ@ɛНƥȄó̑ѺƧôφóƨƨƦƪóɜŐôóòôƨóφ̐ƨóƦ̎"],
				encodeOffsets: [
					[112860, 31905]
				]
			}
		}, {
			type: "Feature",
			id: "gui_zhou",
			properties: {
				name: "贵州",
				cp: [106.6113, 26.9385],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ɜȀƦŋԮô̒ɚôōעƪƧʴɝ@ɛʶ̒ʶ̐ȁƦóȂô@ôŏ@ōôƨʶѸô@ʶƨɞó@ōτöòυƨ@@əƨô@ɛ̒@Ʀɜôȃ@̍ôʵԩНôóςŌƨŋ@ȃƧñôŏƧɛƨôɝƧʵ̍ôȃυ@ɝɛȂƥóóȁɛóõôɛ@əͪɛŋôȁƩóםȃ@ƥƧŏړʶѹ̍ƥŌƦȂóôɜƨѵО̎נəɜѹŋƧȂ@ȀóɜͪɞƧ"],
				encodeOffsets: [
					[106651, 27901]
				]
			}
		}, {
			type: "Feature",
			id: "shan_dong",
			properties: {
				name: "山东",
				cp: [118.7402, 36.4307],
				childNum: 17
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ʃ̐φͪɚςɞ@@Ȃƨñ̎̎Ԯ@ѶОƨƧڔ@φН̑ŋ@Ʃ̒ǿ̎@ƨɜԬςôʶ̐ʶöԫƨƧנƥɜŎôō̎@ôŏóρƧŏԫôóƧԩó@ƥɜƧԭóƨʵɛƨ߻ӑɜНԩóô̑óƧʳəóɛƧ@õȀƧ̍ȃɛŐóŏυО̍óɝƩԩ@ƧɚԫȄɚʶƨɞʶԪ̐ړɛƪ̒"],
				encodeOffsets: [
					[118261, 37036]
				]
			}
		}, {
			type: "Feature",
			id: "jiang_xi",
			properties: {
				name: "江西",
				cp: [116.0156, 27.29],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ƧȄôɚəȄ̎ʶԬԮͪςóƨŐƪτɞƦōƥƧ@ŏςôóŐôô̒ʷѶƪƩƩǿ@ō̒ɛôυ@Ƨȁѹɛəƨѹ̑ƨ̏óƥѵʷô̍ɛȁôŏɝǿƧԫƧôʳƥōòȃρȄ߻ɛɝƨɞɚɜƨôŐƧŎԭōñƦòԮɜôɛôͪƥ@ʶƧƨôƦƧô@Ȅô̎Ѷͪ"],
				encodeOffsets: [
					[117e3, 29025]
				]
			}
		}, {
			type: "Feature",
			id: "he_nan",
			properties: {
				name: "河南",
				cp: [113.4668, 33.8818],
				childNum: 17
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@φ̎ƪ̐ɞȄɚ@@Ȃעó̎ŌѺ̒ôֆॢȃôƨŎƨōƪöƩ̑ڔɜԩ̏ɝʵƧəʵԬȃƨəԪ@@Ƨ̒ŏô̍υȁƧɚ̍ôóŋ@ɝƧŋõ̑σ@ŏɜŋôɝ̒ƧɚôôطρóóɛƩ@óƨ̍ŏƧôóȄ̑ôƧóƥôóӐɛōɝŎ݇ñړɚѵֆ@ɞ̏ʶ@ʴƩöó̐"],
				encodeOffsets: [
					[113040, 35416]
				]
			}
		}, {
			type: "Feature",
			id: "liao_ning",
			properties: {
				name: "辽宁",
				cp: [122.3438, 41.0889],
				childNum: 14
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ƨʴƧôôӔƨô̎ƩɞН̎ͪ߼ͪɜɞɚ̐@ƨςŏ̒ôƦƨɜô̎ƪôςǿƨͩɞȀƨ@@ɛςփôóŋ@ʵφυƩʳö॥փρѹס@əɛ@ͩࢯ@ѹʵρƩʶφȀƧ݈̒۬óʸɝŎѵ@ԭԫןɛƧƨƥςɛυʶφО"],
				encodeOffsets: [
					[122131, 42301]
				]
			}
		}, {
			type: "Feature",
			id: "shan_xi_2",
			properties: {
				name: "山西",
				cp: [112.4121, 37.6611],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ɚѺñŌɚôȄѺ̎ֆφóςȂ̒ɜƨɚ@@Ȁƨŋôȃƪѹ̑̐ŋƪ̑Ʃρρóó@ōɛɛ@əɜŏƦρƨρѵ@ɝɛǿɜʵóօѹ̑̍ŋסô@ȁə@ɝȃ̏̍ƩυƧô@Ȃ̐ظóОó݊φք̑ʸ@Ȃ̒ʶôȀ"],
				encodeOffsets: [
					[113581, 39645]
				]
			}
		}, {
			type: "Feature",
			id: "an_hui",
			properties: {
				name: "安徽",
				cp: [117.2461, 32.0361],
				childNum: 17
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ó̎̑Ő@ƨƪѶǿɜ̑φƦʵ̐ƧѵôóƪôôυςƨȂɞŏ@̍ԫôò̑ƥóȃѶͩƧƥôŏѺôŏƦ@ƥͩƧôȁυó@̑ƧɛѵʵƩƪѵ̑ʸóóôŏρó@ŐƦƨƥŎσɝƩ@̎̍Оɚ̒ρƨƧȂôɜςôóظəó̑ƨóɞɛŌ@Őτö̒ƨŌ@ɞôŌ̎óƨəφȂ"],
				encodeOffsets: [
					[119431, 34741]
				]
			}
		}, {
			type: "Feature",
			id: "fu_jian",
			properties: {
				name: "福建",
				cp: [118.3008, 25.9277],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@̎óȁƨӑ̒̎ɚƨͩφŐƨɝ̎ŋóŏρ@ōƨòʳəóƨō̏õɛƧ@ƨѵƧōəŏóŋƧô̑ɝɛʳƥ@@óɛõ@Ƨ̑ƧóȁəƧ̑Ƨ̐@ɚəОƧƧɚóñ̑ŎóʴƨƨԬɞȀóŐɜȂó̎ѶʸôƦƧ̐Ѻ̒ɚƧѺɜƨȂ"],
				encodeOffsets: [
					[121321, 28981]
				]
			}
		}, {
			type: "Feature",
			id: "zhe_jiang",
			properties: {
				name: "浙江",
				cp: [120.498, 29.0918],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ѷʶƨɜ@̒φôóȂƨƦͪ@̐Ѹ̍τȂ̒̑נŐמôƪƧôӑ̑@ƥρͩƨօ̏@@υɝó@ŋɛ@ôƩəóƧѵυó@ƩɜŋƧ@̍ŌƧɞυŏƧͪ̍ə̑ƧӒôȂ̍@óφ̑ɜ@ŎƪȀ"],
				encodeOffsets: [
					[121051, 30105]
				]
			}
		}, {
			type: "Feature",
			id: "jiang_su",
			properties: {
				name: "江苏",
				cp: [120.0586, 32.915],
				childNum: 13
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ôɞ̎φНôŐɜŏ̎Ȅƨöǿƨ@ôɜɚƨʴ̒ôôó@Ƨ̎əԮȃԪૉöͩ̐ƧòʵφƧôʵ@óړɜóŏɜǿƧɝρσȁѷ̎̏ƥóŐѹóŐƨƦѵͪôȄƦñ̒Ԭó@̎ɝŐƧȁρóφƩóóôƨѶ̏ƥʶυɛ̒ѵȀ"],
				encodeOffsets: [
					[119161, 35460]
				]
			}
		}, {
			type: "Feature",
			id: "chong_qing",
			properties: {
				name: "重庆",
				cp: [107.7539, 30.1904],
				childNum: 40
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@əȂòɜƨѺɛƦȁ̐@ƪõŏφƥòȃƥ̍Ƨôυ̏ƧôñóóôɛŏƩôƧƥôƧóυƨ̒ѹôƦȃ@փƥɛ̑@@ɜƧó@ɚƧ@ñφσõ@ŎɝôƧ@ʵѷóƧʵó@ŎóŐó@ôȁƥó̒υôóʶəƧȄς̎ƧȂôƨƨƨφɛ̎Őƨʷɞ@ςԮóŌôôφ@ɜֈ̎ƨ"],
				encodeOffsets: [
					[111150, 32446]
				]
			}
		}, {
			type: "Feature",
			id: "ning_xia",
			properties: {
				name: "宁夏",
				cp: [105.9961, 37.3096],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ల̒ôޠφӒςôƪͧυևɜŋѺó̎ȁ̍ɛ@ѹס@@ʵƧȁôó@ǿ̐ŏöʵɝŋɛ@ô̑ƥóóƨƧóôó@ƩôóƦ̍óȀƨŎɛӒôŐυͪɛ@@Ȁə@"],
				encodeOffsets: [
					[106831, 38340]
				]
			}
		}, {
			type: "Feature",
			id: "hai_nan",
			properties: {
				name: "海南",
				cp: [109.9512, 19.2041],
				childNum: 18
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@φɜƦʶ̐ôφô̎@ƨŎö@τʵƦԩ۫õН̏óƥȃƧ@Ʃəםƨ̑Ʀ@ޤ"],
				encodeOffsets: [
					[111240, 19846]
				]
			}
		}, {
			type: "Feature",
			id: "tai_wan",
			properties: {
				name: "台湾",
				cp: [121.0254, 23.5986],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ôƩɝöƧɝѵəޣ̏ρƩԭóōóͪρɞƧОôԪ݈ଦѶɜ̒ɛ"],
				encodeOffsets: [
					[124831, 25650]
				]
			}
		}, {
			type: "Feature",
			id: "bei_jing",
			properties: {
				name: "北京",
				cp: [116.4551, 40.2539],
				childNum: 19
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@óóóυóôƥ@ŏóóə@ƧŋƩŌρóɛŐóʶѶʴƥʶ̎ôƨɞ@óŎɜŌ̎̍φƧŋƨʵ"],
				encodeOffsets: [
					[120241, 41176]
				]
			}
		}, {
			type: "Feature",
			id: "tian_jin",
			properties: {
				name: "天津",
				cp: [117.4219, 39.4189],
				childNum: 18
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ôôɜ@ƨöɚôôôɚŏ@óƥ@@ȁƦƧɜ@óƧƨƥ@ƧóəН̏óѷɜ@ŎƦƨóО"],
				encodeOffsets: [
					[119610, 40545]
				]
			}
		}, {
			type: "Feature",
			id: "shang_hai",
			properties: {
				name: "上海",
				cp: [121.4648, 31.2891],
				childNum: 19
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ɞςƨɛȀôŐڔɛóυô̍ןŏ̑̒"],
				encodeOffsets: [
					[123840, 31771]
				]
			}
		}, {
			type: "Feature",
			id: "xiang_gang",
			properties: {
				name: "香港",
				cp: [114.2578, 22.3242],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@óɛƩ@ρ@óôȀɚŎƨ@ö@@ōƨ@"],
				encodeOffsets: [
					[117361, 22950]
				]
			}
		}, {
			type: "Feature",
			id: "ao_men",
			properties: {
				name: "澳门",
				cp: [113.5547, 22.1484],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@X¯aWĀ@l"],
				encodeOffsets: [
					[116325, 22697]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/chong_qing_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "500242",
			properties: {
				name: "酉阳土家族苗族自治县",
				cp: [108.8196, 28.8666],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XJ°lJX@lbl@XbV@VLnJlxnbUU@IVK@lVIVwnJlU@n@J@L@Jn@l_nWVLVln@@blLmV@@xÔ`nxVÈLlxLVxVVV_U»VWn_m¥XwVmnX°lmUUVwÞaVk@a@mmIUa@mwk@m@@U¯a@UV@@K@ykkmwkV@kU@ÑVkKWLÅamaUm@kyU@WkU@UaIUaVaUUmUUa@aVLXKWa¯UUbmJXnWnX`l@@xkzWÆ@VLU¦x@b@JkIkJ@LmbUamJwm@óxnk@V@xVnUVmVUVUbVlUbkXW"],
				encodeOffsets: [
					[110914, 29695]
				]
			}
		}, {
			type: "Feature",
			id: "500236",
			properties: {
				name: "奉节县",
				cp: [109.3909, 30.9265],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@WVXbUnK@x@b²kxmKkl¯_VV°VU@bnKVVV@@nk@nbn@°@VLČU@°WV@VnU@InKVl@nUbKnXWlknLlKUwnalLaVlUXmWk@UU@UWWIUyķ¹XaWW@XKUIVmU@W@UVU@KV@n»VkUkÇmUmVIUmULUbm@wUaKkkm¯ÑUL@bWVnx@VmxUI@klmkkK@aK@IlJ@I¯k@mak@mnkJVL@bV@UbW`UUUVI@VU@VVbUJVLUVVbUXVVxk¦VJUnVxnVVUJV@Ubl@@bXV@L"],
				encodeOffsets: [
					[111781, 31658]
				]
			}
		}, {
			type: "Feature",
			id: "500238",
			properties: {
				name: "巫溪县",
				cp: [109.3359, 31.4813],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nLWbXVLVUV@KIVl@b@lbUVnU@JÆU@V@n°KĢUl@VbÞKV@_VKXUU@KX@wlkkU@mWKUU@UôJ@XV@aVmÞIVaVL@»km@UkLU@aU@WWLUUUKkbwWa@KU@kaXmWLamVk@UmL@JmVUU@¯X@ċVUK¯@ÅnWKLkKULWK@UXK@wW@LkV@bVLlXn`¯xU°LnlV@n°Lnl"],
				encodeOffsets: [
					[111488, 32361]
				]
			}
		}, {
			type: "Feature",
			id: "500234",
			properties: {
				name: "开县",
				cp: [108.4131, 31.2561],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@n@naIw@@VVKLVbVxnVÆUnanKWXamKmk¯K@mkUm¯KV°w@Wm@UIUUlKUU@a¯KWanwmUXamKkUWUnU@KkUwWKXaWLUWkImaUUUKka±k@l¯wwmbUkXm@UJkIWXXbmUJXUV@°KllVXV@xmbnV@blV@VU`UL@Va@bULlb°VXbÜ@V@bL@JxnLVb@lVb@V@@zbXWXKVLV@@bUVVL@blVna@ll@zl@@J"],
				encodeOffsets: [
					[111150, 32434]
				]
			}
		}, {
			type: "Feature",
			id: "500243",
			properties: {
				name: "彭水苗族土家族自治县",
				cp: [108.2043, 29.3994],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Jlb@nVV@bXb@ÆlLUl`nVKU¼VxkbWnlUxlXX@°°WnnJ@VUn@Jk°L@VlV@nUJx@bVVVz@VnLlaKnalVlIU¼@nV@@anKUwVal@UlJlI@akU@UWXKVI¯Uak@@KmkXWÜkXWykIWwXw@laXamkVUUym_XmlkkmmakwmIUKU@Wak@kaW@kI¯WIk¦VUUmaUV@XkVUV±aUb¯b¯¥m@@ImJ@mmL@kUKUkkJbV¦"],
				encodeOffsets: [
					[110408, 29729]
				]
			}
		}, {
			type: "Feature",
			id: "500235",
			properties: {
				name: "云阳县",
				cp: [108.8306, 31.0089],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lbLVVVnblJVXXKWbXLVxl@LmVXVVlnLWbnVmxXb°L@bVVkLVVVJn@@X_WmkUK@alUKX@@xWL@VXLVKlLKXLÆm@ma@ml@mU@UUmL@aVUU¯U°`lknLlw±@a@wmLVWaXU@KWU@ak@VaU@IUVmUUwVmUIl¥UwUVWUaVUUKVIUa@UUUUJUUmknl@@VWV@L¯aUbUlx@@b@VULUx@VUxVVU@bU@mxUU@mUVklkk@WxknlxK@amLKUK"],
				encodeOffsets: [
					[111016, 31742]
				]
			}
		}, {
			type: "Feature",
			id: "500101",
			properties: {
				name: "万州区",
				cp: [108.3911, 30.6958],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ĸĊVInaWWXlJVIn@lWVnax°xkl@²LVLnK@bLkwlmXw@lllkUnVV@VnwV@@aVUUVw@UVwVK@U@a@kwVVa°b@KXU@U@mkÇÑamlkUVmn@VULUm@kUVkUawUWm@Uw¯mKUUmVUUULUKUW@XbWVkaWwkUUk@maUbmbVlk¦xUVUIWVUkJVVkL@UmJUUVU@lLUVUlx@@VbJUL¯¤@V"],
				encodeOffsets: [
					[110464, 31551]
				]
			}
		}, {
			type: "Feature",
			id: "500229",
			properties: {
				name: "城口县",
				cp: [108.7756, 31.9098],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VK@w¯L@m@UÅV@ImVUVka@@aUkJ@LUUVUKmLmbÅVmUUwUaKUL@U@xJmbm@nVJ@X@VkVnlLXx@b@bUVLU`UnbU@@mVVX@JX@VLVVklV`@bUL@VLVKn@U@UJkn@lmLmK@X@Jn@mbnÞWVXnJkKČÑÆ@VK@knaÜmXlUČW°kôÇÆ@a@yÞ_VmUnU@K"],
				encodeOffsets: [
					[111893, 32513]
				]
			}
		}, {
			type: "Feature",
			id: "500116",
			properties: {
				name: "江津区",
				cp: [106.2158, 28.9874],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@InWUUlU@LValX@°²lÒXxlK@Ul@@Un@UaVJ@I@W@UUUVUwVIUKUaUUVwn@Üx@XUlnnbJ@¥VklKUUlk@ynU@kVUUVWnI@¥V£VWVIUKU@UVa@n@Vm@@nlUaVkUwJ@blLkLW@XWmXkmmLn@m@U@UVm@UVUUlakUVaVkV@@wnaWUk@VwklmVIkUUxmJ@U@KIkx±V@IUm@K@IUKkbWKUbnm@bmVnbmb@xkxUJ@ULW`@bX@WVXL@V¯mk¯@UJ@VmLUaWnX@WJ@nkKkxW@UIV@@KkImmkK@UW@XaWIU@UIkbWbxXlLVbnV@bWlX@VxVLnl@nÆÞVÜ"],
				encodeOffsets: [
					[108585, 30032]
				]
			}
		}, {
			type: "Feature",
			id: "500240",
			properties: {
				name: "石柱土家族自治县",
				cp: [108.2813, 30.1025],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@kl@¼UbmVXJ@bV@nxVIVJULVVk@@LWbnJVU@bVbUJ@blLXnWV@mbnV@Vbn@VJVLnaVanbl@VlVXxlbXUWaX@VUUVwUUVm@I@WmI@amlLlK@alwnUV@kóVaÝk@UlbVK@VU»VUUVWU@U`ULkwm@@KmU@knK»VkJkUmbLkbmK@UUyUU@awm@@XXJ@VVLVVUbVnUJVX@Kk`WXXJWXUbmW@bkLUm`Xnb@JVL@LU@°VVXKVnUxVLUbmJ"],
				encodeOffsets: [
					[110588, 30769]
				]
			}
		}, {
			type: "Feature",
			id: "500237",
			properties: {
				name: "巫山县",
				cp: [109.8853, 31.1188],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@kVUbkKmbVxkLmKkllbV@@LXbxlaLVVVKXXV@@bVlKV@ln@¼°KXaU@Ulw°JXalIUaÝWXW@kVU@VUVWUUUamUw@aVamwn@VUUlLXWm£@wÇĉkKklmLUÒ¯Wn@ğ±kwmaWm¼U@@LUV@V@XVUnVJLW@XXWbĸºVzXJVXV@@VXlWn"],
				encodeOffsets: [
					[112399, 31917]
				]
			}
		}, {
			type: "Feature",
			id: "500102",
			properties: {
				name: "涪陵区",
				cp: [107.3364, 29.6796],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nèVblĖVVnL@xVn@nJ@LUVVX@lbUJV@@nn@VVVK@zV@nzVJVUlmX@@_VVVbnaVal@@knW@wnaVK@aVIJ@£kUVW@wXUVJam@Ik_X¥@WwkKkwmkUxnÅmm¥WV@Um@UlVL@JU@@X@UVkKVkKVkKkb@bmJVXUVVUbU@@`W_UV¯b"],
				encodeOffsets: [
					[109508, 30207]
				]
			}
		}, {
			type: "Feature",
			id: "500230",
			properties: {
				name: "丰都县",
				cp: [107.8418, 29.9048],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Þè@XUK@LlV@blbUJ@V@bnV@VVVXU@lbXal@VXnKV@maXUÞ@amk@aVKXVanb£°mnIVaUKVwUmWLUU¯V@@KUK@IaWmn_VlK@anXVaXWWIXWl_@LUWVIUmVaUUUK@UWI@Wn@VI@mkU@U¯Kl@ImVÅLwU¤óbUU@wWXkmm@LU@@VUIWVUL@JUnax@JnbUIWVx@UXlV@¤IUJ@bULmb@xmX@lk@UbmbUaUU@`W@kn"],
				encodeOffsets: [
					[110048, 30713]
				]
			}
		}, {
			type: "Feature",
			id: "500232",
			properties: {
				name: "武隆县",
				cp: [107.655, 29.35],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lwbVm@IVKXUVJ@UV@@KnnWlX@xVVôaV£xÆKnUVm@UmIXm¯¯@WkWVwmkXlaUwV»ULmk_VkK@ÅWa@aUU@mkaIb@n¼nm_@mmK@ULUVVmI@aUJ@XWJ@U`UIkm±kk@@lULmUmKUnVnlUVmI@VkVlxbkIVmLUxkKUXn¦ÆnmVwlnlxlLXx@W¦`"],
				encodeOffsets: [
					[110262, 30291]
				]
			}
		}, {
			type: "Feature",
			id: "500119",
			properties: {
				name: "南川区",
				cp: [107.1716, 29.1302],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VUbVJVUn@VLX@WVXVVI@VUVWxU@m@ĊX@@¼V°aVUX`@_V@VaUUVUWnI@alaLUlLUllLVU@@WV@@IUKVkn@@VlLVwnKUlJakwlU@UnJVUmkUVmXa@wVK@UUw@VVI@ak@alInwlKXUmaUW@wWLkKVak_ÇaUV@XbLVxUlWIk@UK@V@kU@VbUVUlVnLUV@lVXmxkV@L@V@Vk@WbUwmL@JUI@xVxkx"],
				encodeOffsets: [
					[109463, 29830]
				]
			}
		}, {
			type: "Feature",
			id: "500241",
			properties: {
				name: "秀山土家族苗族自治县",
				cp: [109.0173, 28.5205],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XlV@lzn@VnbÆbXKlLUÒV@@llUnxll@z@LU@@V°b@Vn@l@VÑUnK@UU@aUakVm@K¯wklmnnUl`nI@almkIUwmWVkUakkJmUUa@K@aU@@_m@@wUyVUUa@Um@awl@Wka±UkUykIWVb@bUVk@aU@UXUUIWakUWmUxUV@nUVWb@XXVVmXX@VbVLkVWx"],
				encodeOffsets: [
					[111330, 29183]
				]
			}
		}, {
			type: "Feature",
			id: "500114",
			properties: {
				name: "黔江区",
				cp: [108.7207, 29.4708],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VX@V@LV@VJUL@lVnnxlb@VXVXV@@W@UIVK@kUKna@£VWUaVUUalIVJVIUW_lm@bXKV@mn@JUUw@KnIVll@VanLVmUkVKXLVKUIVamw@UaU_lwKlwUWV_Ua@aUa@KUwm_Ó@wU@nkK@am@UkUKmXk`m@@I@K@I@mkVmIUxUJ@kUL@JVVlnklWnn`VzUVnlWbkb@WxXxlJXzWÛlWXnl@Ll@Vb°UJWLX@VlV@bkJ"],
				encodeOffsets: [
					[111106, 30420]
				]
			}
		}, {
			type: "Feature",
			id: "500117",
			properties: {
				name: "合川区",
				cp: [106.3257, 30.108],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XKVXlKVL@UnV@aValXXKU@WVwUaVU@IV@@aVWL@U@anVV@@bVK@UVL@bnJWL@VnUnb@@JnIlVl@@bXIWbn@UKVLVKXLlaV@VVnK@bVLmIV@KmknUUWVI@aVJ@_WU_VmUwU@KVak@am¯mJU_UJUkU@WkIV`UI@JV@LmmU@@mbUzÅ@VK@nUKbakb@UWK@bkVVbVÛ@@`Xk@W@n@lXL@bmb@VVJUn@JnUlnUlmX@`XLlbkJW@kzlb@`@b@b"],
				encodeOffsets: [
					[108529, 31101]
				]
			}
		}, {
			type: "Feature",
			id: "500222",
			properties: {
				name: "綦江县",
				cp: [106.6553, 28.8171],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@¦@XlVX@@UVKlVUX@lanVlUVbXWVXVVVUnKVUlwUwU@UJ@nmVkUVlwXam@VaUUUw@W@kk»mV@UmKkwVKVUU@@LUKVI@mV@XVWxnXVKUUUK@wWU@UUWnUlLXamUIam@wI@K@amImUUkI@makUkKWUUan@wamLVxk@UVmUUL@Vm@kV@I@ak@@bWVXJlLVbVL@@bn@@`Un@WbUKULWVXb@UVmbXWVb@bVmxUKUV@Un@V@V@nmnKlnnWWXX@lKkK@aIVxUlVbk@mn@@U@mbVUV@VLUJUXU¤"],
				encodeOffsets: [
					[109137, 29779]
				]
			}
		}, {
			type: "Feature",
			id: "500233",
			properties: {
				name: "忠县",
				cp: [107.8967, 30.3223],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VLÞĊU@W@¼V@lk@w²mlVUllVnI@VlKUUlIVXUVJVUwl¥UkUKUIm@aU@mUna@XUWmkK@aVIUa@aUVmIXa@Kl@UUVKUIUJmwU@@aWInUVa»k@@l¯n¤mabWUUL@bnl@bÝWVnbU@mLUWk@Wbka@WVUU@UmUmVkUULVlVUxl@L@VbÈÒlb"],
				encodeOffsets: [
					[110239, 31146]
				]
			}
		}, {
			type: "Feature",
			id: "500228",
			properties: {
				name: "梁平县",
				cp: [107.7429, 30.6519],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XLV@VV@b°°nnkb@bnJWVXblIUVxWnUJnVVLVUJlUnLVK@UnUVJ²nKVbVKla@aXlJkKlb@U°£KVIUa@@kwVVUkKV@VUkkUVk±n@xkl@U@»@XVÝĉUJnxWb@UXKkVUbUKWUkVmkkLU`b"],
				encodeOffsets: [
					[109980, 31247]
				]
			}
		}, {
			type: "Feature",
			id: "500113",
			properties: {
				name: "巴南区",
				cp: [106.7322, 29.4214],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nxnVlJlUXL¦@x@Vl@nKVVX@V_V@@KlVXU@lKlxXIl@ÈĊ@Vl@n_VJlnVlnb²VVVJVVmUUkĕUamçU@»W@@ĉnV@XwVU@UUJWUXUW@UKm@UVUIVaUUVmLUVUUUWWXUakVmUkbW@UVkUL@VW@kUW@mJUXVVU@lmV@zklVVkLUl@¦I"],
				encodeOffsets: [
					[108990, 30061]
				]
			}
		}, {
			type: "Feature",
			id: "500223",
			properties: {
				name: "潼南县",
				cp: [105.7764, 30.1135],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@a@a@_kalyX@lIkaWK@_nWVkkmmV@IVmUI@Una@aWK@k@mkbWaknmJUk@mk@@kUal@Ua@Wa@aXLlwUKlkk@KmI@VUJ@Lk@@VUUmL@amJU£kKUaWakLmU@bVVUbnbWV@xkL@bUbxUxVbXJVbUVWIUVU@kLWxkKWV@n¯VUbU@@VVX@VmaUL@VUK@VVbn@lVnI@@lnLULm@Ub@l@na@lK@XVVkJ@b@zl@@VnV@bVb@J@bnXV`lXXmVI@W@InbV@@aVKUblKVLUanLlmnLlK"],
				encodeOffsets: [
					[108529, 31101]
				]
			}
		}, {
			type: "Feature",
			id: "500118",
			properties: {
				name: "永川区",
				cp: [105.8643, 29.2566],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@bÜnWVLXlxVVxXxlVn@@bVblK@a@UnLVJV@@UnLVU@VXaVKVX@n`WUÿ@IUKlaUUUkWyUÛÅÝ@mmkUKUwW@Xk@amUUakKWwXaK@VVLklXVlkxVUL@bm@Vxn`IVxUVkLVUl@@lkXmmVUn@VV@Xb"],
				encodeOffsets: [
					[108192, 30038]
				]
			}
		}, {
			type: "Feature",
			id: "500231",
			properties: {
				name: "垫江县",
				cp: [107.4573, 30.2454],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ċ°¤nÒ¼aV_lKnllUXVVLValULVW@XamwVIUKkaÇÑa@U@KkVwkUUVKlVnU@aU@VIka@akU@KVL@WÝçUV@VmbÅ¯@LKnnJWVkxlL@VX@VxmnXVWxUb@bkn"],
				encodeOffsets: [
					[109812, 30961]
				]
			}
		}, {
			type: "Feature",
			id: "500112",
			properties: {
				name: "渝北区",
				cp: [106.7212, 29.8499],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@bVVXLa@lnbWn@L@XVlK@VVLUVlbkLUKVVVL@VnXVL@VV@UbVb@x@¦UxVb@bUJL@LVVxlK@nk@U@WUVLlKXV@VblU@UUKVU@wn@VJVanLlkX@VaVK¯@a@U@U@VaUKkUU±maUkm@UUkbm@@Vk@@JwU@Ub@I@JmwUL@a@@KkVÇLkWk@kUU@@xUVmKUnllUb"],
				encodeOffsets: [
					[109013, 30381]
				]
			}
		}, {
			type: "Feature",
			id: "500115",
			properties: {
				name: "长寿区",
				cp: [107.1606, 29.9762],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VVUbXlX¥l@XnVmlxUx@@blVnnôĀlm@aVaXwWUnmUwW@@UkKlwUXmImL@KÆ°na@UUImyU@@yULUUm@@mU@VIkaW@UUV@KI@mmUw@mKUnUUIlVLUb@@V@V@b°ULUbW@klmKUbUIm@@xUVVL"],
				encodeOffsets: [
					[109429, 30747]
				]
			}
		}, {
			type: "Feature",
			id: "500225",
			properties: {
				name: "大足县",
				cp: [105.7544, 29.6136],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XUmaVaUU@anVlKXbValU@aV@@IXK@@bV@VxVK@UXLlUJXa@_@@aVKÅWVkwWawUa@am@kUWLU@kWmX@ykI@W@UV@na@LlLV@UkwWUKmXX`mIVl@bXLWVkbkkx@`VXm@@J@U@UUKUxk@WbUIVl@VXLWJUkUlUImxXlmb@X@VUJUnVbW@UV@@VVX@bnW@LVxUnlJUV@n@VxVIn@l`UVVVL"],
				encodeOffsets: [
					[108270, 30578]
				]
			}
		}, {
			type: "Feature",
			id: "500224",
			properties: {
				name: "铜梁县",
				cp: [106.0291, 29.8059],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VblLV¤nI@bnKVV@Ul@@KVI@UnJ@LlklVLkxWK@bXb@Vbk@Vb@ll@@nVlnIlmXblaXl@W@_Ü@UUalU@aXL@VlabaVL@mUL@UUÇXUWX_WaU»m_@UWULWb@UUVmK@VU@UImK@V@bkLxXblxXUÆUL@b@@`WbIkVWK@VULUwU@@a@WL@JU@@bkVUb"],
				encodeOffsets: [
					[108316, 30527]
				]
			}
		}, {
			type: "Feature",
			id: "500226",
			properties: {
				name: "荣昌县",
				cp: [105.5127, 29.4708],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VI@U@WnaWknwVJVkVlIXWK@UUkVJXal@VwVL@V@V@In@UW@_wlllaXUWK@aUknJW_Û@aWaU@@UVmUUaUImJVnÅUmVUm`kUUVWLnVU@VVmXK@nxmULkxImJ@nU`@X@Vkn@`@nlV@nVJVaXVLnK@bVV@nV@lbXW@"],
				encodeOffsets: [
					[108012, 30392]
				]
			}
		}, {
			type: "Feature",
			id: "500227",
			properties: {
				name: "璧山县",
				cp: [106.2048, 29.5807],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XzVlVVkbVL@JVĀX¼VXbW`XWVÈVVVkV@@UXa@alK@IU@UKWUyUI@wVUUWVak@VUkW¹@WXI@yVIUK@kWwkÑ¯±W@kUb@KkVVVmXJ"],
				encodeOffsets: [
					[108585, 30032]
				]
			}
		}, {
			type: "Feature",
			id: "500109",
			properties: {
				name: "北碚区",
				cp: [106.5674, 29.8883],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XVLV@@JkL@bWb@VU@UlÆVya@nV@nn@KU@IVJU_lJXV@VlVIV`nIn°@blUbKVI@aUaVw@¥@wUaVaU@@UUKWm@UUKUUVLlKkaVUUK@UkLWU@@KXmma@kbWKUU@aUamLnÞ@VWLk@@Wm@ULU@@UKUVWI"],
				encodeOffsets: [
					[108855, 30449]
				]
			}
		}, {
			type: "Feature",
			id: "500110",
			properties: {
				name: "万盛区",
				cp: [106.908, 28.9325],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VIV@@wVJ@InKVxXal@@U@U@KlUnwUW@kVUKUmVkUa@I@KW@@bk@@mU@m@k@a@aIUxmJk@wULwkKmVVX@VXV@xVLVVULmWXwWUU@@nUJVL@KV@UVULlxnL@VnUl¼@l@XVxVVUbn@WbkxUlVnU@m"],
				encodeOffsets: [
					[109452, 29779]
				]
			}
		}, {
			type: "Feature",
			id: "500107",
			properties: {
				name: "九龙坡区",
				cp: [106.3586, 29.4049],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XKL@V@XbV@lW@UV@@VXIV@UVKlL@KnnJ@VV@VU@I@@mVUVWUUmL@V¯LUK@UV@UU@a@U@yU@WLUK@X@KUVmL@@aXI@w@ammVk@WÛwm@UxVVVbVLUJVxVUV@V@X@JUIVbm@@Vk@@VkL@lVLUJ@zWJ@X"],
				encodeOffsets: [
					[108799, 30241]
				]
			}
		}, {
			type: "Feature",
			id: "500106",
			properties: {
				name: "沙坪坝区",
				cp: [106.3696, 29.6191],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XºlUVl@UbVXUV@xVJVzXJVUL@VV@VKn@@Xl@XK@UmÝnKVbVakkVm@kUK@UmIm@LkKULVU@WJ@UU@@VkXU@Wa@@UKWL"],
				encodeOffsets: [
					[108799, 30241]
				]
			}
		}, {
			type: "Feature",
			id: "500108",
			properties: {
				name: "南岸区",
				cp: [106.6663, 29.5367],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VVJVL@bUVVnl`XIlwXJlw°nnlIXW@UÇĉk@WJkwkL@WVkU@LU@U`W@UXUV@n"],
				encodeOffsets: [
					[109092, 30241]
				]
			}
		}, {
			type: "Feature",
			id: "500105",
			properties: {
				name: "江北区",
				cp: [106.8311, 29.6191],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nLVU@wV@lV@XllÈKlU@L@@bVKnx@I@JVaV@x@Il@@Un@laVVn@mkUIm`k@WXJmk¯mkxWIkxWJk_UmVUUK@UU@@l"],
				encodeOffsets: [
					[109013, 30319]
				]
			}
		}, {
			type: "Feature",
			id: "500104",
			properties: {
				name: "大渡口区",
				cp: [106.4905, 29.4214],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@k@@U@w¥WKkVkImUmwa@b@xWJ@b@nKVU@L@WVLXKV@@z@V@bVVU@@VVL°K@U"],
				encodeOffsets: [
					[109080, 30190]
				]
			}
		}, {
			type: "Feature",
			id: "500111",
			properties: {
				name: "双桥区",
				cp: [105.7874, 29.4928],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@WwUwU@kK@KmbU@@V@XlJ@znWlXV@XK"],
				encodeOffsets: [
					[108372, 30235]
				]
			}
		}, {
			type: "Feature",
			id: "500103",
			properties: {
				name: "渝中区",
				cp: [106.5344, 29.5477],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VL@VV@VL@aUKIUU@@JUVU@"],
				encodeOffsets: [
					[109036, 30257]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/fu_jian_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "3507",
			properties: {
				name: "南平市",
				cp: [118.136, 27.2845],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@knyk@KU¥wV@nkWzUmk@@lKUa@aVI@UKUamKUUVaUI@X@UV@K±IUVVlUbUbUL@KWUXmWk@KkXmmkÅKUa@amUbkUkKWUnwUÇwVUUÝUKV£U@nKWwXLVKm¥@wUXkmWk@@wX@lU@yVImaXwV@knU@mbk@mlUXmU@mV@n@bnW@bUIWJImVUKWbUK@nkKaU@W_VUUmWmL@UU@bUWUL@V@bmVUz@`mUUVVbXL@VL@lmLUxmVamXkW@xWbUVbUxkU±@ÅUmmkLUbW@@`kLknVlV@lbXxlVUXVVUU@UbWkIWVUUUJkI@llbUxVL@VVUU°ULUmWXUV@VULWb@xm@UaVLVKUa@w@VbkmVambUUm@@VkK@@bxlxX@n¤@X@@lkLWV@nVkb@bWJXLWx@nkxmmbXn@VWVUn@VnJ@bVXl@VJXnWbX`lLUlJVI@@VXV@Vl@bn@@Æmn@VxXU@mVIlxVnIl@nVJaXI@mlU@aXkVm°klmnVV_na°@V@xÜ¦XKVnnUlVXbVKLXKV@naV@@VVl@@lXblXWnLlbVK²n@@VLUnlV@lXxô°V@UnaUUlKXLVUVVUbVVlUnJVX@VW@an@lb@nl@VU@anUVW@kaUm@InVVKVU@kUW@Uam@km@kVa@a@nwU@WlI@mVI@WXaW_n@nlkkW@U¥@kV@Uw@wU@@IXK¥VIn@nU@`@Xl@VVLnaWbVaUwnU@VIKlV"],
				encodeOffsets: [
					[122119, 28086]
				]
			}
		}, {
			type: "Feature",
			id: "3504",
			properties: {
				name: "三明市",
				cp: [117.5317, 26.3013],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lL@Un@VVnabnUla@Ux@VbULUKVbn@w@XaVK@UVUXWVnVKV¯VU@UUKVwka@klJVIVVXUlJXVaV@VUUVWkUWwkaU@UklmlK@_X@ValKnnÆV²@lVVwUaVXa@wlXnWbnUVwnK@kK@UWKUaVUnV@_VynU@a@UVKVXaV@@VnKnXVVUX`V@blL@mVLXaVLnUJXIVJ@amX@a@mnUV@nVWnkl@naV@ml@@KmKUam@UU@@UlKUVkUK@aVaUwVU¥UIkJ@wmI@mbkwkVW@UXKULU`IVKUa@LkkVmUU@WlULUWÅU@I@WWnU@@w@a@Uam_XyVIVWkk@mwVKXUV@nwVXkWÅU@aU¯KUnK@¯mULXVLnWVbVbUVm@Ub¯¼W@am`kbamLUUUaUXV`@x@XmJ@n@L@xkJUU@kU@mWm@kUUwUUVWl@VUkIy@kkaVUUmIWVXbWxU@kmVkK@nWVX¦WxU@@bkx@VU@Wk@kUbmJUUmkUW@_kKWK@knV¤kIUKWLUbV@Wbk@@VWL@VkI@lUXVxUVU@@mWIV@a¯nUaaUV@Jb@bÞ°VbU@XaUVmL@VXblnV°n@Vnx@VUUUlK@InJVb@Vlnn@VL@VWJUx@XlJUVVVl@LUUUJ@L@lUL°¦kVVnV@xVl@blLnlLVaXll@nVUn@xn@nml°X@lb"],
				encodeOffsets: [
					[119858, 27754]
				]
			}
		}, {
			type: "Feature",
			id: "3508",
			properties: {
				name: "龙岩市",
				cp: [116.8066, 25.2026],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@aI@VUbVb°m@bUXJ@nV@VUUwVW@klJ@UXK@Ul@Xa@UVaXKVLlJU£lm@XLlL@`VXnlVVnIVall@XV@@Ulw@aV@XwW¥XU@mlLnUlV@XwWaXUJVnUVlb@lzlJUVk@UXVVVxlVn@nXV@@lVVlI@w@K@mnI@W@wU_VWbVVVnKbla_nbX@°»Van@VUUaUamXUKWK@a@Uk@wWkXWW@wUUKw@_lywUkU@@U@kamVmXaUVUka@Wk@»UUUVKkbWUVUbk@mkxkKnIVUmW@kUKmXUmVaU@kU@m@KUWVkIWJ@U@UI@wUUUa@KW»nU@mVkUmm@XwWU@UUmL@w@mnVUU@aWak@@amxU@UxULWVXbVLU`mbUImVUbnV@@bVn@bnVWxLmyUbIUK@aVmakbVUXWUlKWbkV@WLUlk@@nbb@lkKmU@UIWJkw¯UUVVxm@@XkbWxXKlUzWJkUUL@bmKkV@@VUIUlWV@XK@VkbWx°xUb@LUbk@@VWb@LXJ@VWXU@@bUVVVVn@VVlLn@l@xk¦Vx@bVJXbn@JlnXxV@@nJ@X@V@lmxbUn@xVL@VVKlL@lnLVaVL@xkl@LxVl°XWVXVlJWnxlJ"],
				encodeOffsets: [
					[119194, 26657]
				]
			}
		}, {
			type: "Feature",
			id: "3509",
			properties: {
				name: "宁德市",
				cp: [119.6521, 26.9824],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@LVKVaVaUkVU²J@LVU@@WVJUbVVnLVbL@VUJ@bVbkL@l@VnyXmlU@xV¦L@lmz@lnL@bVVbVb@lnKVkVl¤@zXV@l@XJVLVKnXVKVnU@wUm@KU@UlVlw@U@U@UaUKlU@kXKlmXIWKXaVIVUVK@KU@@kJVUnLVJUL@VIVa@VnLKUnl`VbVV@Vbn@Vzn@lKnVlIVVKUalkXJl@XXVWVLVUUmVU@Unm£lK@Uk@WUXK@U@WVwVkĠkĢÇ°aUÅUwmaţɱUÇaw±V¹XalKôx@UVaÜʓͿVóbÅLJm¯Vk¦k@mamXkKUULakbk@mV@LkJWb@VkmXk@UVmaUV@amLUKUamI@KUaU@WbU@UUUUIWJUkm@wKkVJm@kxÇVUK@mUVUkmlkkVm@amwLVWU@UbVLkUb@VmK@XaVWU_VJnwV@@kUmWakx@kwWakIWxnbUJz@kVW@@x@XllnVW@xn¦ULWKXxmL@VU¤VLÞVVUÈxVmxXVlLlVanV@bbVLlÆnnlW@LXlWnXV"],
				encodeOffsets: [
					[121816, 27816]
				]
			}
		}, {
			type: "Feature",
			id: "3501",
			properties: {
				name: "福州市",
				cp: [119.4543, 25.9222],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lxna@nJ@xlIVJV¦UVxUb@bLVUlVkL@V@VVn@VbLn@LUlJXblx@lwXbVn@lU@mxUIV`UXWb@nLU@ValUKVaV@UXKnxbn@lUkllnUVnV@VLUÈlwn@UIlLxn@VlXIVJVVVV@XaV@Vb@LnJVbVLnK@bVUnbVUl@nWl@UXalI@KnUl@labVKVlLnWnbl@l¥°UnIÆKôa΀Ua@UUwÇWǓIUWUÅVkƨm@@£@KmLU¤ULˣJkUVǟUUķ@ĉVKUk@Ñ°wôÇç@īé@Åţ¥mīÛkm¼Å@VķVó°ō¦U°n@bVJXVVL@bUakLmx@xmxXzW`XbWnXV@bWLÛ@a@aXbWVkaÝwU@mlWKkLWWkLUKULW@kVmVUUÝUamV¤n@xUVUzkJV¦lJU"],
				encodeOffsets: [
					[121253, 26511]
				]
			}
		}, {
			type: "Feature",
			id: "3506",
			properties: {
				name: "漳州市",
				cp: [117.5757, 24.3732],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@bl@Xb@bVVUm@nx@nKVV@XVWxn@VnUl@nmVX¼@LVbVV@xVJV@@XIlJXUV@Ln@lVV@UbVnnWVL@lnXUVmJLlwnll@VaUXVlaLVUVV@¼Xl@lbUVVWbnnUlb@@VV@aVUmlUaUny@kU@Wkk@WaUVk@@ammk@@U@UlU@aUa@wl@mXLllnLU@anVnU@L@VVV@KlXnWVnVanUw@w@wmnÅ@waUam@UkmUl@@aa@U@¥kôKwÈ¯°w@ŻkwǕaKÑÛk@ĕōřċ£ĵUKW»kÅŻLU@Ulġw@¤VzVUbkKUbmLmlULU¼UxmbXl@bWVb@bUnVUVbULU@@VkbVL@`U@WX@XV@b°@b¯@¤@Xm@@b@`UVVUL"],
				encodeOffsets: [
					[119712, 24953]
				]
			}
		}, {
			type: "Feature",
			id: "3505",
			properties: {
				name: "泉州市",
				cp: [118.3228, 25.1147],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Vlxkz@`xLVV@xXXWXl@xl@V@bnV°@LVm°LVbV@ÆXWlUmxU@WVULnx@llUXUJWzn`Vb@@b@xV@mXX@@JÆVVXVKXkV@nVlUl@KVbULJV_VKLVWX@lUVkIU¥lIVyVU@wm£nUVWU@am@UmWw@UX@@amVUn@@aUUlUVanaWUXWmUnkK@VUlVVUUw@XLWWXma@knmbVbVXbVL@XJlInlLwmXów@çV»ÇçŋaķƧóƅóKġ°nÅUķƑUÇW@¯xÇ°öÆlVn@lla@Lb`@VXVVx@V@bULVJUkÇ@¼XUKk@mmULkaWbk@x@UkL@a@K@U@UmKmbU@kV@UmVUbUmmXkW@LUU@U@KmVmU@bVmKkkWKnk@@xVb@bkV@V@Vl@nn@bl@VUXbl@XlV@@lmzVVbknUVb"],
				encodeOffsets: [
					[120398, 25797]
				]
			}
		}, {
			type: "Feature",
			id: "3503",
			properties: {
				name: "莆田市",
				cp: [119.0918, 25.3455],
				childNum: 2
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VbÞVVnUlUX@VKVLlKXXlKXLnkV@ÞxlbXUWab@bÜ@XK@aWUXmWaX_Wynw@wnwlKbV@aUKWUUI@amV¯Ŏ¥ô¯ĸUUÆ@n»¯aƿé@ţ¯nĉĬÝKóó@ÑU¼@èxWônxKmkkJWI@UKWaUUaamn@lnbWXXWK@VxUVkUV@ULmlnVWXXVmbUbkVVV@bm@UVn@bW@@VXxn@Vn@bVUX"],
				encodeOffsets: [
					[121388, 26264]
				]
			}
		}, {
			type: "Feature",
			id: "3502",
			properties: {
				name: "厦门市",
				cp: [118.1689, 24.6478],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@VlUV@nanL@V@V@L@blK@Vwl@XalbVKnnl@VLW»È@lVUIVK@a@UUwWUU@_aK@bkkm@UkõÅxóLl@¦@Vb@bk@VnVln@Vbb@xmÆn@x@xx"],
				encodeOffsets: [
					[120747, 25465]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/gan_su_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "6209",
			properties: {
				name: "酒泉市",
				cp: [96.2622, 40.4517],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÇnÅaĉ@U¯¥UŹ£WUýUU±JkkUwyÞIČxĊĕĊ¯¥ÆUkţUÅÓ±¼IUx¯UÒƑÝÅ°KÝnğ°ÅU@@Vn@þ¼¯WnŎ°XLWlnVnbWnVXxmbabóUlǕUUaIUmlU¥k¥ĉwkkÝɛa@¯U¯°mVkVnKlōÑÇÑU@klUġkUŻnUW@¯k»mWV£UKnUmUww@UIVaXwm»Èmmwn¯ċ¯LĉUJUalka±Va@Uk@ÛÑ¯WmnUaɝ¤Ûmn¯m±x@wóxÛLġÒUx¯VÈJUbózÝÇKĉ¯ōlÝUÅWl¯nťbÝ@¯ǩLġmV@Æ¯ĢkÆmĊkVťLɃmÝXó°@ĢbVóVÝ¦ɱ@ƧaġUVĠÇÈV¼UVţwmbJÇwˋaXmÇ¯KkkmbXm¼V¼ǬŚ²¤ôŰÆƴô̐ŤǪnɆӨ¼ɆLÆłUĊxŎƞȘǔˎǬǪnƨŮǬö°»ġÞÜÆĸÒĊǀbƾèôÈ@¼¯þŤĸƧ°VĀ¯b@lÈĊʠń̐ȘKǀֲॗţÿǕý@ʊǓƨóÆÑǖŃôw@΋ʈƆÅÈVVĊVóĊÅ@ÞƒĬV@Þī@°V@ĸĢ°XτƜĠ@ÈaÜ¥ŐƅnğóĕVġUůƿŋĕa±VUťÇğÑ"],
				encodeOffsets: [
					[101892, 40821]
				]
			}
		}, {
			type: "Feature",
			id: "6207",
			properties: {
				name: "张掖市",
				cp: [99.7998, 38.7433],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÈÒŎÒkmLUlU¯nV°@°ɜbÞĠaÈ»ĸlLVUÈ@Ċ@ýUm@@ÆVĠ¯ÞmLÆ¯ÞƒÑ°VVwJ²»ÆÔVlŤÅV¦ĉ°ĉĖċwÝJzVxll²IVVVþX¤źV°¦VĊ@ÆbÈmǔLĸĠ¯Ģaô¯ĸmÆÛUlÇĸk°XyĊUǔVǩnmV»a@ýnK°n@l¥@»żĊ¤mç@£ČU@mmVkÞUƐ±²¹°ĠwÅƑŃU¯V¯aÈŁÇ»ġn_°xŎKlxklx@Þw@Æm²bÇ²LlkWXať¯ĊaÑK±w@wUÅçV±Uk@@¯¯xU±±UU°ōxVxÅÔō°ó¯UÝ¦óbÝþ@ĉÈóUVUx@VUVÝwÅÈÇóVkk¯JÇkmmL@KÇx@bk@U°ķ²ó`mn¯°UwlÅkU`¦ɛôķz@ÅnÇ°U¼¯KmVk²J¼ƏÞķô¤UL@mnğ`ÇnUxÇ@ÛÿU@kŻ@x@móJkÅ¥VŹĉóÒĉlċ°ķUƽÜ@x"],
				encodeOffsets: [
					[99720, 40090]
				]
			}
		}, {
			type: "Feature",
			id: "6230",
			properties: {
				name: "甘南藏族自治州",
				cp: [102.9199, 34.6893],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÞnKlnwX¥WÝXkxÞUn°aĊVnUUKlÞĶWXnĠ¥ô»@nmVL@¤°VzJanU@aÆwna@kU¯yX_aĉbwéXkWwÅa¯V¥m¯UI@@mb°aÈçU¥@»knwɜƇ°I°ÑÈmVU¯Xa@wW@wV¯Č¥l¯Uwnm@kaUaóKkk@Çab@ÒWa¯IÇxÛam¼VUxÒl@zÝÒ¯bÝaĉVĉwÇWzJmJn²mÜ¯U¯ĉ@ġ¤Åb@²nml@@ULVxVU¼Ålmab@°l@WIU¯@m@ó@UzţyXÇUÇVUUVLkbWakVWmUbkkKUÆ»n°Knk@aUVmnk»l¯Ģlw@_kKVU@na@lUk@¯¥mV@kmbWb¯Åõa@mkU@kÇkU@`@óóbl¼Uxn¼lVÈx@blVkVVn`XÈġÈ@ÇK£ÝJmUUnUĖmlUmKUnVÅaUwUĉ`¯n¯wW¼nxV@bĉnkIċŘkXU±ÒxÈ@X°`lVIÈ¯ĊVVVan@VaUVażVmblkÈWWIXaalL@wVbV¦lL@lĠnÒUnkL@ÆÞkÞKbñþW¦ÛċVULUºkÈlŎUxÆxÞUUxÒx@XbL@lÆ@ÒlXVln@bm¼J@Ånx@bnĠmxVXmbÈè@Ċ£ČWw"],
				encodeOffsets: [
					[105210, 36349]
				]
			}
		}, {
			type: "Feature",
			id: "6206",
			properties: {
				name: "武威市",
				cp: [103.0188, 38.1061],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@±¯¥@klwU»ÞÝmwKm¯ç@kVÇUL¯lVUKġġm@a@U@X£°l°LŎÇ@aōVÝwÔKUÅWJ¯lm@ÛVWa@klĉUmaLUanak¯J±KkXóÜÅx²Ç@nUÒĊb°@ÆkLXÇÆ@xÝnxWxţ¯¤I@ÆnVVVlU²ÆèV@x²xLÒĉbŦ°WbXklÞ@l¤XĊ`wl@ĢÈŎm@bnVUb@ÈÆÛLèÇUÒÅ¦lĸ`°ĮʟÆǓbĉôϚĊÆĢnŤé΀ÑĸĀĊ¦@@l°l¦Ȯ¦ɆÞĊKŤĵĸů»mŁyġķŭ@Çɱȭ¯mƧUĊķnŁŻ»UaUƛɞÝƨů"],
				encodeOffsets: [
					[106336, 38543]
				]
			}
		}, {
			type: "Feature",
			id: "6212",
			properties: {
				name: "陇南市",
				cp: [105.304, 33.5632],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÈÞ@l`UmV¼@nnÆwVlnVVaLVÈ_ÿÞ@naxÆ@l_@VxnK@llLnxmÈŎJnbUxI°l@n¦lÈIlmX¥k°@kJk²é@klaUaVaU@@ÝnIWnmnxkºÞaV°V@nwKxôbÞ£VUbþLn»mVwIJ°@nb@°°IġUkÇKV@Å¯»lLnm£@anK@ÑÜn@»mL@£ykUUmbUÞÝ@kyÇbó»XUxWVzb±mÝbXawUamL¯»@wUKVwm¯ĵJ°ÅUWVkKVk°wÈVVÑlU¥kmVamknUw¯¯bċ¥ÅKkKkVċVk£kKVwÑa@kóyÛ¯ÇVkówXō¥Ç¼ów¯U±k@xIĉÒÅVmÈnÜ@n°bUbÝVUnnJ¯Į@m¦nVÜ@L°JXbÑ@aÈb@llôLVbb@lmnVxk°ċ¦U°@xX@xWb°UVÇn¯Ò¯Jɛƈmxl@¼"],
				encodeOffsets: [
					[106527, 34943]
				]
			}
		}, {
			type: "Feature",
			id: "6210",
			properties: {
				name: "庆阳市",
				cp: [107.5342, 36.2],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@kwĉ»VamV¯wIóVkl¯KmVō¯ÝWkL@bÝKō¦@@Lx@b@la@km@@l¯nm@UaÅ@óWUXm¥nw`@UUxķôÇ°ğ¦@VJ_nIVnalxkXJWn¯nVLxl¤nnVbklVX@xnxmV@bUK@nm@@xV°±aÅnkUWnUax@mn@¯LmUĀlU@lV@blLUblxklkIÇx¯°UXbaVUnV@°LUlnbX@`°nVmbnÆmVkLmK¦U@Xy@kl@U°K@¼XbW@bWnLVaVVz@xlVČ¥lbUxÞlVU@nÆWôn²VJlUƧLnmÜLXan@mw@wlUlV²mblwVÈlLÞ±@lVnUlxnkma@mkJ@kXVU@mn@¼VXUVlLnmVbôaVnWV»ÈUl°È¯ÆInÆU@kk»mKkÆġk¯@»mk¯@óÇlÇ@VykklUml¯Þ@w"],
				encodeOffsets: [
					[111229, 36383]
				]
			}
		}, {
			type: "Feature",
			id: "6204",
			properties: {
				name: "白银市",
				cp: [104.8645, 36.5076],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VKUÈl@è°nLnxÝÞV¼kx@l¦²°ĊóĠĊ»@ÈxaĊxlwÈVŤa@¯²aÇ£Jk£lnUÞ@°ô@ywl»lIX¥Ǫnw@ÑÞWlaÅlL@Uwĉakl@¯mwna°JV¯nUVÓÞÑm£²óWaUÇ@óÝUçV»ÈkkW@¯xV@XlK@wX@Vmm_@wÈÝKU¯ÇwVwÅK¯VkJXkWVaIm¯UkÇlVĀV°mxók@¼óWxĉÜU@UbzÛJÇk@ÆnVlÔ@kxô@ĬWL¯K@aÛImm@IUa@UÇêU¤VÒÇx¯ÒVlk@Wbĉ¦UbkWV_y¯Laók@b@nmbkx°"],
				encodeOffsets: [
					[106077, 37885]
				]
			}
		}, {
			type: "Feature",
			id: "6211",
			properties: {
				name: "定西市",
				cp: [104.5569, 35.0848],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@aV²wVJV_@LlanÅllŦçÜÓ_lnWaôkxUbmV@È°lènk°l¦`@nnL@ÈlÜIyVaV@ĊÛXwô@»lônwU¯ÿUÈkl°VnJUblXWIl°UV@aVVVmnL@lUUwmk£bV¥VUVwÛlaÇÝÞmk£LUy¯L@WlkKW_XaWmġU@akakXkmVwmŹVUbWónmwnWW£KÈnV¥¥Æ_klWbU¯V°aôbnaVwmaōInÇmwkK@kmLUw@`kÅ@wb@mÝĀÇ`UKUbmUUkÅxmm@»nUVk_Ý@Ç¦VÇè¯ban@@JV°nU¦°ÆbXxWlêxĊabW`zV°@lmbÅx@bmVbI`¦@ÒUVUI@ÆL@b¼@@lmxnL°ULÞğÞ°kLUL°xVnKVl@zX@"],
				encodeOffsets: [
					[106122, 36794]
				]
			}
		}, {
			type: "Feature",
			id: "6205",
			properties: {
				name: "天水市",
				cp: [105.6445, 34.6289],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@UyÈVVUnn@VU`UblzJnk@VbKU°lwW°nkVUÈl£°V@n¥VklkU±Unlw¯UkwmKUlmkUmnkym@Å@UmWÈU°l°anlJkUKlU¯Èm@kmWV»kkÝLUWUx±b@¯ma@¯IJUxnm¼KýaVUÝ¤óawLmxU@¯UbÝ¹lmwmnXmJ@ÞV@UbVbkbl@±êlIl¯@lW¦knÇJkm¥k@¯Jmbóa¯bUV°akXlÅ`¦U¦ÇmLX¤mXnxmôXaVźUnUxlnlWbl@bĢVnXWbX`lLXk@°KVzKl¤nÞÝÈkbÜ"],
				encodeOffsets: [
					[108180, 35984]
				]
			}
		}, {
			type: "Feature",
			id: "6201",
			properties: {
				name: "兰州市",
				cp: [103.5901, 36.3043],
				childNum: 5
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@lW²L°IlmbVbKnbĊVlk@XbÜU@kn°XIÆVLÓÞxŎUlôb°KzU`lXVaĊ¥Xal@kU°ÑÈwUÑV£ÈéV@VbJ@nnÜJ@bL°XK@īówl@kÓmUÅmK@m_k¥l¯mkçÇ¯@nUaVwólXbmk`ÛÔťèkkmÆkbK@U`UI±xUbWlXmbVbÅÒólkIWJk@zKŻ¼@xUxó¯LWb@ÅÒ±¦U`nbťĀUVbLU"],
					["@@¯lwna@mōÈ¯K¯kW¤@@V@bĢnĢVLU°k"]
				],
				encodeOffsets: [
					[
						[105188, 37649]
					],
					[
						[106077, 37885]
					]
				]
			}
		}, {
			type: "Feature",
			id: "6208",
			properties: {
				name: "平凉市",
				cp: [107.0728, 35.321],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÆLUxÈxV°LÇÞ@xn`Ü@X@nĊÆwnJmwUxaUkw@V@waVmlLXÝl@XVĢmV°@nl@UUUWK@wÿVI²Òlm@nÝĊýVV@nJ°Ułm@kV¼nKĢÈ¤ôKblnKllVk²aĠ¥È¯ĸóVw@V_xmn¦VWôXÆ@Vbn@°m@kn@@lb@ka@wK@@UlKVaWXW²¹lÓw@_°n@@_lKÅķW@mLUWn»Û@l_Ç`Ûmm°ÅbWb@VWbUUKÇÅaġlmkUġl»LlUm¦@¯U¤ÇkVUml¯Xx¯kVLUa@mlIkyVa_UV@mmUVUÇVzUxUVU¦a¤lnVxVk@mKUnUU@bU", "@@@ż@mlkġk"],
				encodeOffsets: [
					[107877, 36338],
					[108439, 36265]
				]
			}
		}, {
			type: "Feature",
			id: "6229",
			properties: {
				name: "临夏回族自治州",
				cp: [103.2715, 35.5737],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@ż»Ly@lXIJlôkÆÑUanaWXkW@yk@ULmUw¯KVlK¯ĠÝÝVK¯mKnwk@@»@aK@ÅVJVU@Ñ¥_Uy¯@£UKmn@ó¼ğ¦WmĵXÝkVLmVĉU¯bmÝVwWlXÞW¦xkmmLÝ±U@VÞ@ÅÈW°XÜ¼ƨyUĮnWnXÝxUx°lVXJlôV"],
				encodeOffsets: [
					[105548, 37075]
				]
			}
		}, {
			type: "Feature",
			id: "6203",
			properties: {
				name: "金昌市",
				cp: [102.074, 38.5126],
				childNum: 2
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ĢÈ¼Çł°bU°VƒńÆǖŰnÆōĬǔaʠÅ¯ĭ_kķÆ¥VÑÈçÜKÅ@ÇVaUm@aōnġÇk@xĉ_Wk£@Ý±KÈ±aÅn@Ýx@kwlkwōL¯wm`"],
				encodeOffsets: [
					[103849, 38970]
				]
			}
		}, {
			type: "Feature",
			id: "6202",
			properties: {
				name: "嘉峪关市",
				cp: [98.1738, 39.8035],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@llĊx¦l¦kVVnJVbǖVkôVabnaWwUXmmamUXkWKō¯Xm°»ĉÇ@UVKķkÇ¼ğb"],
				encodeOffsets: [
					[100182, 40664]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/guang_dong_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "4418",
			properties: {
				name: "清远市",
				cp: [112.9175, 24.3292],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lÇ¯kÿaV¯VaÈU¥ÆÇIlxmnbUxlUôl°kWl@ôVwUanUl@xVkaX¥kU»a¯±@kka@UwmUkwJk±k@L@ÝWUwVÝxÇU¯ÇX@mÅ@@yĉ£VmUwȗ»ÇUnlUnWU¯`Uk@@x@bÇxX¼VV¯LĀkÝL¯@VĀ¯lnĊW¦kVÇôkUÇUK@ţU@aóÜUU»@¦k@VxKVbn@Æl@xbWnlUlxÈlVÈ°Æ@¼@xWxŎVK°¥nÆkŎ@ÈÑmK@¥k@ô@nôV"],
				encodeOffsets: [
					[115707, 25527]
				]
			}
		}, {
			type: "Feature",
			id: "4402",
			properties: {
				name: "韶关市",
				cp: [113.7964, 24.7028],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@WXk±Ñ@UwmUwĉwlmn@Æwn£mkI¥ÇÅ@¥aón£nWWw£V`Þ@nVml@xô¼IV¥kUmkamUkVWwÛ»mó£UVÅKmn@x@kbmm¯aXkaVĉaUbÝ²lIlxnVVx@lb@l²°bV¼lW¦bUlwk@mVVbUxó@kX¯lókVkwVmankwJÅÈ¦ÇVUbU°blĀ°kÈ@x¦ÆÜ°@°¦óaVUôlUlbXl@nÜVnKlnIVÞ°W°U@bnm@¥IV²Ul°VnalzXyl_Vyƒ¦lLlx@ÞbKmknVWanwÑVwČº@n_ÞVaVÜIl@KÈVJ@a£È@@kmaV¯W@_a¯KmbkÇkLmw@Å¥"],
				encodeOffsets: [
					[117147, 25549]
				]
			}
		}, {
			type: "Feature",
			id: "4408",
			properties: {
				name: "湛江市",
				cp: [110.3577, 20.9894],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@kX@aUUċlkJk@wVJXUWk°W@nKnwlUl²blU@lIl@XbWxnm@lW@wwUJX¯VU°`ŎóˋkÝÝkÅ@ÇmğÈřmwaĵVxUÛ»°ĠǷnýmóX¥ɅĵҏÇ@°²ĊUĖ±ĮU¤Ç°Ā¯ɐnżUĊĊĬV@è@ÔÒU¼l¤nĠbêVĠ°ÈyzVaVnUÆLabVlwÆ@"],
				encodeOffsets: [
					[113040, 22416]
				]
			}
		}, {
			type: "Feature",
			id: "4414",
			properties: {
				name: "梅州市",
				cp: [116.1255, 24.1534],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nÔlW¼x¦@lVllLkèa@z¤Ė¼UxlnUKUbÝlU¼lb@VxVklJÈwV¯@ĠlÛĖnbkÆźÞUÈôklmL¥LWnKUkVa°Vx@IVV@x°bUkaa@mV@@ywLÑUwVUVUbÞVVann@XwÇÿ¯²aVamkXaÆ»@»nw@¥UXakbWa¯KUw@¥m@kwmLU»UUJ@kmU@UUWU@yanwmçÛl¯¯UmKUmwVkmÝXbW@XWÝbk¯@±w@»U@W¯Å@Ç¥UU@IUakJĀê°þXkam@_J°m@X"],
				encodeOffsets: [
					[118125, 24419]
				]
			}
		}, {
			type: "Feature",
			id: "4416",
			properties: {
				name: "河源市",
				cp: [114.917, 23.9722],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°VlmX¹laĢÒlm@V£@¦Ģklynn¼lW°zW°VbÈV@lÆbnnJkXVÆaÅW@UUw@kaV»ÞkVaVLkmVw»ĕ£@yblçkKkU@k¥wX»kmÓ@Wn¯I`@nlbWý¯éÿlI@XUmWUw@@UJUÇmKUV@xţk¯¯LWnUxK@Å±»Vwa¯@¤WX@Û¦@¤ÇIÈ¼WxX@WxwUnVbÅèmVa±²UWl@klÈ¤nôÜ¼XxlUnVlbVnlU¦Jó»@wnkmUÝ@U_¤XxmXm¤ôb@¦ÈÆ¦lJn"],
				encodeOffsets: [
					[117057, 25167]
				]
			}
		}, {
			type: "Feature",
			id: "4412",
			properties: {
				name: "肇庆市",
				cp: [112.1265, 23.5822],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@l@¥@V¼VôÛ@bV@ŤVLÈlVÈólUX¥mĉ°kÿU°@ÞKlÿ°KUUW»Èw@aw@@nm@w£kÓVUVnKk¥£Vam@nkKkbÆǫmakmLU¥UmÛwmVUmUJÇaUxÇIn`mb@Þ¯b@nJ@nlUVlVULW¯Û`Ç_¯`m¯IbĉWċzx±Jx¯ÆU_k@J@UmbXôlLn¦@¼ĊxlUXxUbLĠUnVĊwlUb@lWXm²@ÞWxXUnb"],
				encodeOffsets: [
					[114627, 24818]
				]
			}
		}, {
			type: "Feature",
			id: "4413",
			properties: {
				name: "惠州市",
				cp: [114.6204, 23.1647],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lbW°bnnla@@wnmÆLVUkÇl@XkV²±bnUÆçUaVmxXw@WXwÇ»ÈJ@£Ü¥@XW@£°bUx²¼@ÆLVwmX°K°Ťl@wVUnLÈVVIky±wkKU¯ÅkXġÑÛlwUwlm@mnKWaÅm¯óÇmğb¯alĉUwķbmb@lÞÒVnmĀŹ@VbVUnmakLm`@xĉkklVÔVJVnlVUnmJmaLUblzmkLaō@@zV¦UV²kJnÜU@VXUL@lJL@bÝ¤UnVb@xVnlK²Vx°VxlIlkVl²k¤@n"],
				encodeOffsets: [
					[116776, 24492]
				]
			}
		}, {
			type: "Feature",
			id: "4409",
			properties: {
				name: "茂名市",
				cp: [111.0059, 22.0221],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@LnÇlkKnkÆLUmÈxlUJló°n@ana@@X_@mÝóóU@aaU¯mL¯kV¯ÇVwkw@V±Ŏ£@@alw±Vk@mÅm¯ÿÅƧIÇ`ōô¯_UVW°IVx@xkX@mnwXWa@kkJ@kVa±kkVmxmL@¯XXlWVUI@xlIklVČV@blW@@nUxVblVxkôlxnynIÆ»Æ°aXwlKbVnXbL¤kLèVV¼²IlĠVXynz°KVx°@VlLlblK"],
				encodeOffsets: [
					[113761, 23237]
				]
			}
		}, {
			type: "Feature",
			id: "4407",
			properties: {
				name: "江门市",
				cp: [112.6318, 22.1484],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lUXx°JWnnÆXVWX@ºVLV¯nUVnbôxaXmWXIUb°xlKl¯KxXÞ°XÈ¥Ü@ĉÞUç»nóVmax¯UÅU¥Ý¯@ç@ș@çĉÅUmUç±ĉKÝxÝ_ÅJk¯»ó¯nmèkǀWx¼mnUÜġ°@¦@xLkÇaVnUxVVlnIlbnÆÆKX¦"],
				encodeOffsets: [
					[114852, 22928]
				]
			}
		}, {
			type: "Feature",
			id: "4417",
			properties: {
				name: "阳江市",
				cp: [111.8298, 22.0715],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°nKV°b@bôVÞô@nVlÒôÆUnlnn@lmkmVkaÈkÆÆk¥ÅÞ»ÆKXkW¥ÅLmÅkamJUkUVwUmÈblKw@@¥Ģ¯VÛnm»Xwlƿ@kbWaʵ@óLl¯ƽ@Ln°Æ@nUl²kxb@@ō¤U²@lxUxÈU°l"],
				encodeOffsets: [
					[114053, 22782]
				]
			}
		}, {
			type: "Feature",
			id: "4453",
			properties: {
				name: "云浮市",
				cp: [111.7859, 22.8516],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@VIl@`V°Åw²IwČyĊXa°Jn°_È`Ü_°XKVkUUVk@mmI@°a@Ýnam_ÈJVwlĉX@lUómaUmVU°UK¹@WXUWmÅXm¯IWwkVWlÅLÝ¼Æl¦ÅÅÇlbUllnknm@kmVmóÅkÑUW`@@bmb@¯mkôIkVÇwnVÅKmlLklmÈKVĊK°²`n¤nUbWlxVxLUx@°nXm`VklVxmnnx"],
				encodeOffsets: [
					[114053, 23873]
				]
			}
		}, {
			type: "Feature",
			id: "4401",
			properties: {
				name: "广州市",
				cp: [113.5107, 23.2196],
				childNum: 13
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ș¼VxUnĊ¤@z@Æ@nÈW°ÈVwUÞVxÞX@Kl@ÞVaĊbU@ml£k±lUkkJw¯UUw±kLUm@waUVmÞ£@aKkI@KVUW@ÛVmlIU±VU¥@yğzƧÇƽĠřÅnī±m@²¯l°@nÝÆóUll@XnÝVU¦mVV°V¼Jnb@°mbn@²¯¯wVw@@nmxX¤¯L@VLUm@@l"],
				encodeOffsets: [
					[115673, 24019]
				]
			}
		}, {
			type: "Feature",
			id: "4415",
			properties: {
				name: "汕尾市",
				cp: [115.5762, 23.0438],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@@VxnXWV@bVJV@ÞÅU¥Ċx£UWUwÅUU¥WVUkĊÇnkV`°LVwnU@lbĊ¯Vnal@@çkUÝ¥ġaó¯ÅaÅLŻÆUýmy¯ó@ĉÆóȯwÆXbmL@nknVxkxÜĢÒWÆlV°Ll²xlz"],
				encodeOffsets: [
					[118193, 23806]
				]
			}
		}, {
			type: "Feature",
			id: "4452",
			properties: {
				name: "揭阳市",
				cp: [116.1255, 23.313],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VÈ¦Æ@X°V@@¼x²°@lÞaWXX@aÞWlnUxVnnL°V@kmĢl@ak@mlk°aX±nwm±²¯JV²@wW_maV»U@m¯ĉUÑJlabVnlĸLlƅÛÇ±wÝ@ĉxó@è@kmbUĉ°ka@mVxU¯KU_mlĉÈVlXUV¦ÆVxVVX¤ĉwV¦ÝÆ"],
				encodeOffsets: [
					[118384, 24036]
				]
			}
		}, {
			type: "Feature",
			id: "4404",
			properties: {
				name: "珠海市",
				cp: [113.7305, 22.1155],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@è@Þ°V¦VÆ°wnbUÆ»nçÆ@nxÜ¤²llU°VnÈJÞ°UôéķUklô£VVˌKÞV°£n¥£ȗÝy¯¯mÅkw¯bÇĔğ@Ýn¯ĊVğōŁŻķJ@Ț", "@@X¯kmèVbnJ"],
				encodeOffsets: [
					[115774, 22602],
					[116325, 22697]
				]
			}
		}, {
			type: "Feature",
			id: "4406",
			properties: {
				name: "佛山市",
				cp: [112.8955, 23.1097],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÈbInVVnUÜxnVV¦nKlnbÅǬlalL@mnUb¤l¦LUmUVlÔ¤@xmnVl°_XVVmkVmÈ@kn@VUK@°KW£nw@m@Ux°x°@±mna@¯amIU»U¯nUV¥ÞUWmk@Vk¯UknÑWÝĊÛ@Ç¦W¯WÝwLk°kL¯wVaWJXWnbwkVW@kĊ"],
				encodeOffsets: [
					[115088, 23316]
				]
			}
		}, {
			type: "Feature",
			id: "4451",
			properties: {
				name: "潮州市",
				cp: [116.7847, 23.8293],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°Üknèmxbz@VVX@VnV@lIVVV¼nKlxn@@¦Vx°LXblaWbV°£¯W@nW@aUñVwW»@¥ŤÅUÝǓÝóV@ńÇkUVmIUwÅVWÇX¹@W¯bkl@nlb@kġn@l"],
				encodeOffsets: [
					[119161, 24306]
				]
			}
		}, {
			type: "Feature",
			id: "4405",
			properties: {
				name: "汕头市",
				cp: [117.1692, 23.3405],
				childNum: 2
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@U±°I±n²mx²@WºXÈÆUVxJUnlVÈ@ŃôUǔÞVçn»VyĢÛVm@»kaÝUÇ¼óÛÈķKċ¥X¥Wwğk¯@wķKkUmabkIVÒ°Ċ@nVU¼bn`Xx"],
				encodeOffsets: [
					[119251, 24059]
				]
			}
		}, {
			type: "Feature",
			id: "4403",
			properties: {
				name: "深圳市",
				cp: [114.5435, 22.5439],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÞL@xbVVK°X°Kô¥Vw@anUèlkĊl@wn_lKnbVmUaUź@nÿUmÝÑ¯Ubk@ÆkxŻ@aÇXwJ¯LķÝUĕóĸóêWº@b²nmĬÆ"],
				encodeOffsets: [
					[116404, 23265]
				]
			}
		}, {
			type: "Feature",
			id: "4419",
			properties: {
				name: "东莞市",
				cp: [113.8953, 22.901],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ŏ@blKnykVaKnbnIVmUkUmUIUÓçmV@bUxó¦¯LW¯LUUa@wÝKğŚƾƨÈĠy"],
				encodeOffsets: [
					[116573, 23670]
				]
			}
		}, {
			type: "Feature",
			id: "4420",
			properties: {
				name: "中山市",
				cp: [113.4229, 22.478],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XÒlmV°ôÞÅ@m¯°k±@@aX¹¯VÝÇIUmV¯kk±Û£mw@ÅmèÅ¼mô¼èV"],
				encodeOffsets: [
					[115887, 23209]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/guang_xi_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "4510",
			properties: {
				name: "百色市",
				cp: [106.6003, 23.9227],
				childNum: 12
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lklWXL@VIl@XnJn@VUUalk@mK@kny@UlU@a°UU@VmaU@Ua@UWw@n@KmLm@alkmnIm@an@VIUamWÅImwU@@a@KX@JVLUVmUaVkUa@m@@Ulmkk°UaVUlKXbVwVIkaVmUk@KVk@aaW¯m@w¥laX@KmakVmnUl@nxVKInU@yVaVIV@na°KlxX@@_lmXUV`VIVV@n@lbn@@WUkValK@²yl@VUV@@K°L@KU@@UVaXIVVV@naVkVa@K@UUK@UUaLWaw@m@K@UVV@mVUUVKnLmVLKbVK@UUIkmI@mUIVK@IUK@VkL@WU@mU@WmUk@I@VJk@WwX_@amK@UUWkIK@LVb@mVmakL@J@bU@Ux@xbmI@`Iwm@UbmKUaUWa¯UkJWV@XJUU¯LUmV@ma@kkamKwLUUmWVkkm@aVUUkVKnVVUmXK@UW@km@Ukkm@@W@UkUy@I@aUUmb¤U@kUmL@bmJU@Ua@wkLWWkL@U@VaU@LUakKWbkUWVkKkLVLUV@JVbz@V@VmUU@kVmK¯@VU_VWakVmIUKUaU@@bml@XU@@V@LmKUVmVUKKbkaUXKUL@x@V@l@mxU¦V@lL@V@Ln@@VV@nlKUaV@nLUbmJnL@VWLkbmV@@LWXLlxVVIVV@x@V²blUVmLVUK@kWWXUlV@Xl`LXl@@Vn@VnbV@lVUVUÈVb@@`UXU`l@@XUVm@k@xmVknUJVXUbmKULmbx@VlJ@LVbkKUbVLÇUUVUVmU@VaUkUKVUwmLkUUVVlbkaXmwKUVVU@@V±Uk@VWUUm»XamUbKk`U@UnWW_kKmbUVUVmnUV@nJVUlUbU@UV@n@JmI@VmbnVUXlx¯kKmnVV@L@VbkVUmm@Ub¯LmlUL@VWLkmkLmmn£WmnKU_mWbnbmx@U¦UJU@Xmlk¦@mnUUm@@Jn@lVÔVJnIVWI@aÆK@I@aVKIlÞnnl@nl`nbÆX²l@xV@llbVn²VVl@nnV@IlW@Un@@kVa°KnÈmVaVXUlaVÈUVlwôUlynIVaan@lVXbI@n¥la@K_n@bÆx@XnJVnKVz@`VXVU`@b¦UV@VIlxUnVKXÈbVllbVbnVn@"],
				encodeOffsets: [
					[109126, 25684]
				]
			}
		}, {
			type: "Feature",
			id: "4512",
			properties: {
				name: "河池市",
				cp: [107.8638, 24.5819],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lLVlbVV@nXVlI@JVXmnW°bIVV@ln@nalVUbnW@kVkÒlbVKn²°bUlV²@X@`nbaUI@°wlU@aXJVI@aVK@wUamIXm@XUV@@bV@VmImnUUwVaVKXUnVK@akVwV@nL@UV`n@@XlnIUJl@X¦V@aUIVm@anV@UwnL@VlbVL@KVVXUWwUUVUka@UVJnUlbnalbVVn@°LV`Þ@XVxV@@bVlUVVbXnWlXnml@XXWVXJmbUI@VllUVkn@@VWV@Vnb@VXUJVnn`lLVka»lVLnw@WV@lInw@WnU@U@mknUVóKwUmUXUU@@wVJVIl@XKVVVbVIJ@Un@lVLnmb@U@Ul@nU°VUVJnnVJV@@mVU@@wkUVwkKWkyUUkU@alkÈ@lJ@xIl@UUWVkUw@Kn@@kmaVUlUULÇUUKl@UUmL@aXU@mlUUwmKkUUVKVUaKUnK@U@Vl@XUWUKlwX@b@K@XkV@UwWJka@aUwmV@U@@U@wUm@»kLWVkIWXnmV@VkbmKLUbkVa@aa@@aVU@aVak£@±UkVU¯VUUJVUI@kxmUmWUbLw@K@aU@@aVU@Kma@aka@_VWkk@UWVUKULWKULU@KUnwVaUKxU@UmaLm@kVmVa@UkmI@@KmIkxU@@KU@mmakI@VLkmWkkJ_U@V@L@nxXbKVb@VVL@V@LUbUlmbU@UUWJUb@VV@@L¯K@LU@UVk@±z@kLUbVl@Xm@akm@U@UUJU_VWkn@`W@kw¯LmbU@UJUb@zmVJULmwk@mVUnlnb@LWkb¦@x°nXb@bUl@LVlUnlbUJUxWakLUVVb¯llkn@V@@nVbUlVbUnVUK@IW@L@bV@nxÆJnXVbUJm@@bnmJnkl@bnnK@Lm@Xx@VVbV@nb@UVV¯@bkV@Vmz@lnLl@kVbUVm@mI@WkJ@UWKkXkl"],
				encodeOffsets: [
					[109126, 25684]
				]
			}
		}, {
			type: "Feature",
			id: "4503",
			properties: {
				name: "桂林市",
				cp: [110.5554, 25.318],
				childNum: 13
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nU@JX@`XLm¦Vb`lVXXW@VblČnVlanLnmVLK@_Va¥@kUa@VmVbaV@XVVzlVVK@knKVmX£VKLlbn@b@llL@xĊôXaV@°È@¤bnV@@Wl_VU@WnVamwwVbn@KVLX@VmVUxlV@nVV_nK@mI@Wn@@IUĊ@@wVWX@@I°VVm@wmU@m@IUVklkUmmkÅV@@aV@@Wn_UKla@kaVlVanb@k@@KlVn@@aV@nIWWUUaVU@kKmwU@UImKk@UU@w@W@k@UkW@mk_W@Ua@a@¯mV£@mUUam@kWakVama@UUm@nw@alaUmnUlVlIVLVyk£Vm@k@UUJkK@kmKUwKkWK@UXImyVwnI@mkUlkUKkUVmw@kkJWUÈm@_k@@aaW@UUJUwU@@IWKkmUUV@nVl@bVb@bUUXakw@WUkbkKbm@xUlkLm@@wmKUX@UaVWXVmU@@UUUxkmWXkKkUWaUaUbL@`UL@LV`UXmK@VmakLVbkLxUJUIVbUVVb¯KV@Xnl@lVXbmÒnV@L@VWKkVUIWJkIUamUUbm@UkU@JUbW@XWxUam@kbVVUnUJmUUV@bU@UUV@Vk@bmULV¦U@VU`VLUL@xVbn@UJ@nWJXXVVV@bkxVbUxL@x¦@UlXUVVlULV@@nUb@xlnJVnlVknUlVUbmU@bVx"],
				encodeOffsets: [
					[112399, 26500]
				]
			}
		}, {
			type: "Feature",
			id: "4501",
			properties: {
				name: "南宁市",
				cp: [108.479, 23.1152],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lKnbnU@Ua@KLlJVX@VnL@bW`Xxl@I@UJl@nV@XV@nXV@lK@UVL@JULVJ@nnJlVJ@VULaLUKnmKULVVU@nU`lIXllnK@UlJnb@nV@LV@lwnJ@L@nJl@VUbUn@lnKnbVV@wVLUbxVm@LVVKXLVKVLXU@VllUX@`lb@bnbL@UV@bV@@b@LxKVanXVUUmVUUUaVUkyUUaImK@mUUVUkKU_@W@UVVVIUWUVaVU@UUKn@k@al@ll@bnL@bVUVX@V@@bKnblmn@V_@aUalL@a@akK@kVKUKlwUUnV¥VmU_VWVIVaX@VaalÅK@LVJnalL@LnKwlVUwmX@VXlLUVnblaUmVUVwXU@Wm¯Va@ÞKnw@wmk»UVW²a@_mW@U@IyLVUUKW@@LX@VUV@@yVU@UV@nwUUmJka@IU@mVkaW@UwUX@`@kLWUk@mkUUm@kUUWkUkWxk@@VK@nV@UVaUUJmIkV@UamLUbkVmamLka@kmL¯WI@wJmwx@akU@aUKmbkaW_nW@_U@Wm@a@wkwUKmk@bkbw@mKUkkU@J@bW@kVWz@bVUaVUx@ULkJWbXVVX`@mJUVU@@Lk@WbU@UJlnXlmVx@Ln@b@KLXWJUUW@kaUVUbmV@nnV@n@lVLVmLXmXkV±@kxÅLUbJWIÅJ@ImXalkUamKkkL±aVwKUU@mÞnbWJXm@lbmKULWUUVkabnn@Vl@VVV@VbVbnLWLXJWxXLV@@VV"],
				encodeOffsets: [
					[109958, 23806]
				]
			}
		}, {
			type: "Feature",
			id: "4502",
			properties: {
				name: "柳州市",
				cp: [109.3799, 24.9774],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@wUaV@nVaUVklmkUUmmIk@waVm@U@VKUkVUkWV@¥@wKVwUalw@aUUUWWXI@mVIm@Ua@wVKUKV_UV@U¥VKnal@U@VU@VV@aVUnVVIVmUUlan@VbXwWX@Va@IlVVn@VanVVblJXIVJlUXL@U@KmUnÑWakU@mkJUI@mk@wUmmUV@JXaWIXWmaUIJkk@WnJ@aUak@kkJ@kUKU_@myUóWUkm¥kUmL@KUKm@k_UmVa@k@@UmU@mm_JWIUVUWLUlbVUJÇVUIVwKUVk@mU@n@lUL@Km@@l@LVzJmUU¤m@UbV²U`U@@¼Vn@x@V@@VnUVx@blbXIVxU@Wl@@LaW@kxLXVWVk@@U@VmLVLbUVULVVlnLVxkV@nWV@bnKVVk@VLVÈVKVVkUnb@lm@@LVxUlVX@VkJ@wkIÇ@kl@blVVVzXllLUxlV@x@UV@nU@UImmUIUV¯mVk@@V@VamnUKkm@@VIUJUaUUWLk@UJUI@xV@VVWVnxLUômVV@VkVVVUnV@UVkL@VVV@bVxla@bkXVJVn`nU@bb@bVL@VnJ@l@VaU@@_lW@UUU@Unlll@XLl@@UX@°bVWVanLlknVV@VVX@VVnUVLmbXJ@nllXX@`VXlmaXVWk@WkwJ@VL@JbnU@bn@@bVKUnVJVIVVVL²a@bV@@Vl@nUVakalmUL@VUL@Va@mXl@nK@UlKL@Vl@@nkllb@Vnn@nVV°lVInwlKXxlU°n@@I@UnVlakUJWkUK@anUWK@_ÞJ@U"],
				encodeOffsets: [
					[112399, 26500]
				]
			}
		}, {
			type: "Feature",
			id: "4514",
			properties: {
				name: "崇左市",
				cp: [107.3364, 22.4725],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@JVzl@V@Xn@ll@VlnX@@VWLnUVmUULVlUV@blnUlnXVVKxnLlb@lnbU@Vn°KVVI@WXUlI°VXbVVbnLVan@xJ@_nJa@wVwV@@a@IU@UU@WKXwWIXKmKUaa@UUUUk@@UmmalbVUXVVKnLa@knWXImanÝV@VLUx²blKlnLVbklWbn@JÆIXJIVaÆKlw²@lUnWWnKUUK@k@mmU@mnUVaVUb@lVXVXIWK@Lam@@KUwnWkkmVIV@Xal@@KV@VUnI@_UWWUkam@kkm@ka@mk@wkJWIUU@WXkWXkWWLUU@UakLWXV±VIVWUU@anUWaUK@IU@Vak@@UUKWa@m@ak@@wUkla@mUaUklakwV¯¯@WWUkLkKmakLUnV`UxWX@Jkn@bmlakkk@b@l¯bmbJb@VXnbVV@bJUkkKWVU@mÛVUUW@UVUJWXkVkKmUL@WW@UVl@XXKWXJ@XVlmbUxnnm@UlVnV@XVm¦VJb@mLkKÇbXblVkn@l@bWnX`V@@IVV@VV°n@@_naÆVVbUVVbUJnzlVUlXkV@Vlx@XVnxbKUK@b¯VVUVL"],
				encodeOffsets: [
					[109227, 23440]
				]
			}
		}, {
			type: "Feature",
			id: "4513",
			properties: {
				name: "来宾市",
				cp: [109.7095, 23.8403],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nVlw@VJUIVVUV°lU²V@l¤Ub@bUV@b@b@bUblVaKnLla@UnUWmXlJXUlKV@V_U±Van@V£nVIyU@K@kn@@LVK@k@mnVl@VULUxVJÈUVIUaVkXKVVUXJIn`@nnV@Vl@@UbVnl`n@VL@LnKlVn¦VlôXVnz@V`VL@llIll@Vbb@mIXl@lIVJnbWXXJWb@IUnVVn@xl@nVJI@WU°LUaVUUaVJVIwlKUalKnb@UnLVWU_@KVK@_KVa@VKU¯VLVKn@laaUkU@maVUJ@k@Um@XmbkyVaUIUU@KV@laVn@KXKWUkUk@aWUUVw@aXKmVaUUkmIlUU@wUaxUmmU¯U@WLUmVIUym@UVmUa@wmw@çm@aWLUJUIUamKmL@ax¯¥kU¥U@±kUVmKU_mJUbkKmLÅÇ_@WWUXUmaVUkKUWW@nVxkUxmL@KkKmbUI@KLkÆbUbW@UbUJUXV`UnU¦mVVkxVLUL@llL@b@bkKVb@bU`m@knmaL@a@@UWVUU@amK@akkk@@b@lmVL@VUVUbVVXUJUU@V@XV`lLUVVV@nnLJVbVlzUVVbVVnUVVU"],
				encodeOffsets: [
					[111083, 24599]
				]
			}
		}, {
			type: "Feature",
			id: "4509",
			properties: {
				name: "玉林市",
				cp: [110.2148, 22.3792],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VJUXVVXlWX@VxVnX@@`ULWUXÅbWK@mULUUmJ@n¯b@l@VULVxxXU`VXXJVIV@nm`@nUVXn@lWVn@b@Jn@nU@Lm`@Xn@WJ¦U@@VnLlV@@Xl`nIlJnkVLw@KVK@UaVL@bVKXlUUKVK@IVLa@U@WLUlVL@bU@@blb@VlbUxVbXUVJ@xVLUlV@VUbVLnKlXJ@Lb@an@VanL@`VLKV_UWl@U_a@WVInlVUUUVm@I@W@wVakIWm@U@XwlaVbnI@m»Va@aXaVLU»@aVa@kKkL@KmU@WzUK@wU@VWUUVUUKUa@mKmbUK@_nWVaUkVaUaVUVLXKVVUVmVI@UkKkLm`UkW@UwWW_UaU@WakXmK@xUXJkUUWUk@WlmJ@km@@aUKzmyVka@kkWVUU¯lmU@@wkkmV@Vk@mÅIUka@Ub@m@UUU`mUbWaWmbXXKWIXUWm@Å@y@UkIUJUUWLUWL@UkVUxW@kaWbKWnXxW¦nm`XLVlUbVbUxI@JmLUKUb@VW@@bkL@b@VlU@xk@L@lxXxWXX°V@VVVbUVV@UVVbULVnVJUb²baUb@VVVVInlV@VnXaVUlIVUb"],
				encodeOffsets: [
					[112478, 22872]
				]
			}
		}, {
			type: "Feature",
			id: "4504",
			properties: {
				name: "梧州市",
				cp: [110.9949, 23.5052],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VbXblVlLXWlnwVV@VV@UnWUXVb@VWXa@kVKUaVaVkUlyX@VaVmUwUaVU@UÈymI@aU°@nWV@VaVaw@IV@VmnLVK@kmmna@VbVI@aV@XbW`ULUVVx@VbUV@bl@VLXblJn¦lL°°@n@K@UlLnKa°LWbnJ¦UÒVUllLlVnKnbWnnV`w@@Xa±nl@XKV_WVkVa@kVyUa@wU£UW@UIVW@@awWaX_WKkVmUULmak@UJUI@±m»k@m»VyUImnmmwnkUmVaVIUn_mW@»Vk@VwkmmUXa@IaVmm@Wm_U@mIUWóLmUk@laXmmkUK@UmKULUUmWUL@VakU@Ub@b¼VUKWb@bUbn¼@mJUakbWx@@VXnlJUb@x@X@JUnVVUVmkUJ@XbV`k@VXU`LUK@_mKUbm@@b@U`@nlV@bUnbVbn@@`VbUbVV¯bm@@mJXb@bVnUllVXUlbUl@LU¦VVmkLVb@bl@V@XlK@V@nUJUz°mwmLmlXbWVU@UUUlIU@VVmV@@¦bXbWxXWlXVWL@LUmkbU@@LVVVJUblzna@WVn@@lIUVnbV@Vlbkbm@ULUKV°UL@"],
				encodeOffsets: [
					[112973, 24863]
				]
			}
		}, {
			type: "Feature",
			id: "4511",
			properties: {
				name: "贺州市",
				cp: [111.3135, 24.4006],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nL@xn@lKVkwn@alLlaXV@lxbVWV@aUa@aUk@mVUnVlXL@JV@VxVIVX@b@bl@@`ÇnXVlI@lxUnlVVLkllV@nmJUxnzWJ@VXLlLVxnL@lLlVI@V@lUnl¤UzK@Vl@LlLnb@VnVVU@kaKnxn@VkVJ@ÅUlakmWIUaVanm@_UK@UVWUa@klXamU@VmVIXW@lUVknVlKVLXVXW@b@VlnnVL@KXLKn@lb@UnW°@VaXWVb°aVa@I¯aUkUaVKVwaXk@aa@wkm@alanUVw@alK@Umkw@UaUmU@WXUaUK@UW@UaVWI@¥Xa@w@WWVXwU@mKUXUWVU@a¯kl@akU@UULmK¯VUVW@U_m`U@@xVbUz@lUbUlXU`WLk@m²Wb@@xU_mXmmamLkUkKVkUVÑ¥mIXa¯KbmLkK@V@Lm¯@¯kKm¥kIWaUKk@@aVUUa@UwVUKVX_WaU@@bUJUa@mbnn@lULmKUnU@@JxUbUbU@mX¯@V@bnJÇz@VUVVbVxUnUbW@kzVUlUbVbUL@lWb"],
				encodeOffsets: [
					[113220, 24947]
				]
			}
		}, {
			type: "Feature",
			id: "4507",
			properties: {
				name: "钦州市",
				cp: [109.0283, 22.0935],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@IlVVlnL@xlaal@nVLlx@x@bXnV@@`mXX`lbnaVL@blV@bwnxI@xXJ°nKl@lbnKnblUVanKVb@lUnJVIVUb@VU@mL@Ul@XwllVVXV@lVnlVnl@XVlK@@_VWVxX@lbUnV@@JlbnIlmnVV@UwVK@U@k°a@mnIVVVK@nXLÆaVWXVK@_W@Umw@UXWWkUUVWUIVaUkJUVWbUmU@mkUJUU@UVab±aVaUIUmVKUaVUU@VUUaUUU@W¯XWWww@k@Kl@wkV@U@alK@aX@@UmIUWUI@mmkXU`U_WJUnUJmUk@@amLU@UVW@UkU@@VbUWVUk@@wmKkUWLUWX@JmIlUkkKWKkLWU@UKWa@bU@@a@_UKWUUUmJmw@nV_@ġğKóLmbU¼VÆ@xUX@Um@wklVnUnlkaUV@lV²WVklWXXbWlkVkIm`UULUU@UWx@XU@@lWLU@kbUbV`UXllUV@bmb@LnKVbULmnVVIV`X@"],
				encodeOffsets: [
					[110881, 22742]
				]
			}
		}, {
			type: "Feature",
			id: "4508",
			properties: {
				name: "贵港市",
				cp: [109.9402, 23.3459],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@n@VzUJnVK@XV°nVVnwVb@xVVknJlVVUbnWL@bUxVVXbl@lVXkWXwWaa@¥@nUUUV@JVkVVV@XUWanknKxn¯VyVI@m@UkL@W@Uk@aUalKnUUV¥@KVkkaWVkUVkUm@aWanI@n@°aUUVaUa@_m@UamaV@akU@mV_@a@KWIkmLUKaUVU@kVUK@wUIWVUaVwka@Uka@aV@@aUKVkK@X@VbKU@JULVLkVWUL@aUKb@VUL@LxUKmlkImJk_@WU@kmK@UV@¥XIm@@Wn_@KmVm@@I@aUmkXm@UWV@mn_@mUUJWIUWV_WwU@mUknVVmxU@@VUV@zU@UVW@K@X@VLUVKz@J@VnX@`±bUXV¼ln@xmxÝL@Ubn°@XWVUxUVVnkbWVXV@X`ÆÈKnlLVanIV`nLVUl²V@V¦l°¦wb@nKnLVbVJIVXK@bn@ènx@xVbUnV"],
				encodeOffsets: [
					[112568, 24255]
				]
			}
		}, {
			type: "Feature",
			id: "4506",
			properties: {
				name: "防城港市",
				cp: [108.0505, 21.9287],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XV@X°°UlxkbVlVb@nkbVl@xl@@b@nXbVL@Vl@UbV@@JVLXbmV@bVVUXUJU²WXlKVb@VVXKlXWlXXWV@VXJlI@xl@nlbn@lln@lbXalIVK@VwUVbU@aXylUX@@aW@U_UJmUnVKUamL@Kna@aVUkkVWU_ValaV@XK@kV@@WwVXV@VKVVn_lJlUXkWaXWlkXU±kU@VUlbkVmUmlk¯ÝW@mb@¦VxULmkJUU@ma¯wmkX@VóJ±bUVUXÝWklWXXlxUabIğÇ@U@mVUKkkm@UJm@XnWV@x"],
				encodeOffsets: [
					[110070, 22174]
				]
			}
		}, {
			type: "Feature",
			id: "4505",
			properties: {
				name: "北海市",
				cp: [109.314, 21.6211],
				childNum: 2
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VaVLnK@IJVwUaVaUkWKn_mX¥WwXmLXalbU£UyVÅ@Ýwm@°lLÅUmkmwÛaƑLÝUUm@ȣÆV_Ó@£UUV¼U°W̄ÞVbXbôx@b@bmV@ÇUÝ@@ĢU`m@nxnIVVVXVL@`@bV@@aXbVL@XVlKXLlLVlknJ@IWVXXKlVnL@xl@UVVXa@UV@VlX@VUV@nK@bl@nVVIVmXIV`V_lWnn@VJVXnJ"],
				encodeOffsets: [
					[112242, 22444]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/gui_zhou_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "5203",
			properties: {
				name: "遵义市",
				cp: [106.908, 28.1744],
				childNum: 14
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@@UnUlJnwJU°VL@bnVUwlJ@XXVlU@klVUJknlUllL@bUJ@xULUlUblVkblbnwUXmla@wV@VK@L@UXaVKVLXWUVa@U@Im@@W@£UKUakKWIXU@al@@llUnL@W@Un@@VlUV@VIUanKl@Xb@lmxVb@b°bb@nlJVVnnJ@b@LV@ln@LmV@Vx@blnVKnlJXIlwJ@Òb@nlK@Un@UL@VVVVUUUVKl@VUVLJ@UVUUw@Wm@UVÈVlbUb@JLlX@@xLmk@@nlx@bUJUzVJ@@LVxUV@bWxnLnVVK@_K²xVbV@n¥@aVI@b@l@VaKnb@n`nmmýW@U_wV@VlVV@Vn@n@nI@Jn@°¦VaUU@mVVWVaUÅU@aVKnVbVUmmU@a@kUwm@aUUmUUJ¯lakUaXaWUUaVkkamkmUnVlULVlJ@XU@UJWUUwk@aU@WbkWL@U@WU@@XUKmV@aUVwUĕUJUamUUVUÑmnIVJ@kl@XalJVn@KVL¥@UWIXWmU@mVUKnUWLUKUaWUUKVU@U@anUny@UlUkK@w@a@aVU»UkVw@WmkJÅmUUVmwXalLXWWUnam@XkJ@UVU@U@W@@U@I@Wl@Ènlw@KXLWblVUkalKUUVVaV@@wnIlaUmkUKWU@KkUkLWaKUUWUn@VK@LnnWJUIVkUWVnV@V@@XK@VUIUJ@IWJkX@VVJIVkK@I@UVaUWk@m@wnUWKk@mxk@@lV@bxmb@x@VUmLkUJ@nVV@b@VkLVbU`¯Il@U_UW@UU@K¯wm@xL¯¥kI@bkb@Ua@m@kkW@XVbmV@kV@bWbUbV@¦xXlmVk@¦bkaWL@KUImK@wUK@VUIb@bmK@LÅy@akXW@kbWlXblL@ULUb`@UkUymX¯@mUJUUJL@Lm@@WX@lUVlXll@l@Èk°V°X@VU@UVll@XUJVXUVm@@VXLWlnV@Xk@mVULnxV@@bmkL@VWLUbU@UVm@b@ķ¥UnmJ@UUVkkJUlÔU`UIW@°kLUlUI@WVIU@mWKkXk@WU@bXW@J@xX@l@LVl@xLVxXX@xKnxVknbKVV@ULWlXU`@nUlX@llVXVUKlkUKlI@anKVLXKVaUIVWV_VK@VnLlU»VKVLm"],
					["@@@KlKkUUVVX"]
				],
				encodeOffsets: [
					[
						[108799, 29239]
					],
					[
						[110532, 27822]
					]
				]
			}
		}, {
			type: "Feature",
			id: "5226",
			properties: {
				name: "黔东南苗族侗族自治州",
				cp: [108.4241, 26.4166],
				childNum: 17
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@VV@XkV@bUbWJU¼Vb@Vnb@b@J@bL@LV@UVlUI@aKULVb@bkJmxlLVxknVJkxnKmnnL@bn`WIXlWLU@UxVbUVmKVXI@JVIVJ@UL@W@@UmUXUlVUVJXImm@KL@UVmVXVLXblKlV@LXVLlVVnkbmJ@xnXl@bXa@VanaÒLmVnIlÞ¦°k@b@@lVnJlUnVX_@lVlKVUUxVLVWVIXJUlnnWlI@KUaUUVKn@VaVXV@na@mw¯@mUkJUamI@lk@@am@@IUmVImUUw@anUVaUU@LU@WaWUXWWwV@VwnU@L@ynbl@@X@aJ@nW@@Vn@lVLlxnIl@@UWKUnIlJXIVllIVV¼XK@aVIV@@bn@VKXLVKVVVInwJ@UWI@mX@WKnI@KmUUVJUL@VKW@@k@aU@@W@InJWUXwWI@W@¯wkaVaUIl@nValIXWWI@UUm@anwWkXWWIUbk@UJmIUamKVUUUVVama¯VkIVVUlKnXVwX@@WVaUUVa@IlaVmknawkUU@U@mUVUVwl°LVbnJVU¯la@mX@@UWKXU@aV_V@@JlkU¯@VnK@km¯kU@WUW@mmU@kmlU@wkL@WUkL@VmLJ@b@V@bknUUVK@UVKUK@Uk@Wa@LUVVnUbmVk@@UU@@aV¯K@U@UU@WmUL@aU@WVw@IxXll@UXK@KXXVJna@wWa£naUKVm@UU@mUmalm@@XkVm@U@VLmWU@kkWxU@@bVV@VkXVlV@UUk@@mI@KUwm@UmVUUwU@lwkV@IUa@mUaVIVKVa@w@U@UJkb@n@bmJ@XmlVUxWXkJmUkUUVWxUlU@aULUmbU@@WXkmL@xUV@nUxÇm@XLWbnlnVnnUVUnVVz@lbUVVlULVb@V@nUJkwm@Ux@bWbUK@UULkaJbUU@U@lUK@XUJmnJ@bU@UwWax@zkJWnUJUUVVV@bXn@xVb@JLm@Xw@`@bkb@VmXUV¯L@mW@@n@V@L@KIW@@aaUx¯@Um@XbW@@LV@bnVWVkKUzlV@bÆa@lnI@VV@@LnVVKUaV_VJVbnU@bn@nX@yVIVxXKVLlUVaXU°J", "@@@KlKkUUVVX"],
					["@@UUVUkUmV@ln@VXVK@K"]
				],
				encodeOffsets: [
					[
						[110318, 27214],
						[110532, 27822]
					],
					[
						[112219, 27394]
					]
				]
			}
		}, {
			type: "Feature",
			id: "5224",
			properties: {
				name: "毕节地区",
				cp: [105.1611, 27.0648],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@UkV@kW@Xn@@KKVIVVIn°@nWVzl@V_VaVK@kKWaXklaX@lW@bÆz@KnL@aaVJ@UVL@xnLVJ@LXKlba¥l@nUWkw¥U@VaXa@amLkUKm¯kmkIUaKUIWkKm@anw@mlwXImUk¯@a@amU`kkKWVkxmUUak_mJmw@wmXUW¯X_@WnI@aVwkWWýÅU@WLkUaUbVV@lUVVnm@kUmV¯kKLwmVUUaWVaaWw¯wÈ@VULUVUUK@nWJkIl@Umxnbm@kbUJa¯bUbVxmLUVaU@VUUWxkVVV@bUV@XWbnlUbbUJlbUV¯b@z`WbXnmbawUwVWUbUxmbU@Uam@VkVawVaUWI@mUKóz@lUlÅ@WIb@xXxml@XklULWKUmwUa¯KUXWJkaULmKkLWbkKUVImWa@kUaULW¯LK¯@kbL@bx@J@bmnnlUlzU`U@@Ub@mn¦°bUVx@bkVm¼mx@mkmVV@bkxVnaVV@bU@mL@b²`lIVV@lXLlbVxn@@bl@XllIVnbVn°°wlbXw@mVa°lVnU@mVLVbn@@b@@WVnUV@Xlxn`VznJVb@L@bV`V@UnwU@WUXKV@UUlmUUlaXalLmbIVbnJVIlVVaUUnWVXnVLk@nWnblnlb²xxVKVXlVXLVWLlUVJna@wVL¼@JVX@`@nnx@nWJU@Vx@XXKUblxU°LVKVVlL@KnbVUnJIlUnKl£VWxIlJ@nVÞUVVnbVX@V_°lnK", "@@@UmWUwkU@Um@@VkL@V@VVkV@nbVa@"],
				encodeOffsets: [
					[108552, 28412],
					[107213, 27445]
				]
			}
		}, {
			type: "Feature",
			id: "5227",
			properties: {
				name: "黔南布依族苗族自治州",
				cp: [107.2485, 25.8398],
				childNum: 12
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@V@IöalK@UV@@KUaVIVVLlaVbVWnX@@LnUlxl@naVLXVVaVUJ@lUUanWWI@VlV@Xbb@Vn@VmVVbk@kU@VV@XJ@zn`ULW@kK@_WVUK@LUb@Jlxn@nnWlU@@bx@XVVU@UbVb@n`VI@VVLUlUIUV@KmL@VV@XIV@@lVLVmXV@WLXLW@U`nkb@Vl@UL@VVVLllX@`lIXbJIXWLaVL@XXWĢb@bmK@L@°@VnxmxnK@xVn@VkL@VLakbl`VnnxVnUlV@@VVXV`@k°JV_UalK@U@aUU@mIlVnKV@U@wnaw@akU@l@nwl@XLmV@xnl@VXUb@V@JlLUJUI@UlWUnLVUUaVwV@XKWkXJm_@amKnmmLwlUIlmUwkKnwlI@aUaVKL@bVJkVUU@@KK@a@I@ama@UUaV»XIVa@alU@WUU¯IWVUbkVUKWLUwUJ@zmWm@@amVUaUIU`VbULmU@KU@@UmJ@kÅb@akUVylLXUmU@aU@KX@Wan@V°@Vwb@bX@J@LK@@U@mX@@n°KVUnW@Ula@a@_x@WnK@IUa@wWm@aUUUVVVIXmlI@ywXbVxV@@aInmVI@WVL@k@VVVaIlbVK@VVLXa@aVwn@lxVI@m@UUaVKUkVUka@UymUVVUmmUmmkXaWK@ÈnVw@mVU@wKlnXW@V@naVVKUk@KVIUW@mk@KXU@Um@@lVk@UVJna@UWaL@a@Xa@kmmVUUk@mkkamJImJUUmIm±aUUkambkamVUU@VlbUbVVxXWVUU@VUakU@UmUVU@mnUVVnUbVJ@bUW¥kLVamVkUaWJU_UVWKk@@nlUVVJUXm@Vm@UnVlmbnmJUbULU@@UUKWVIWxnJVb@xUL@bUJWIkxbkb@xVJbmU@kW±LkKUkVa@a¯am¥ULkalÑlKXUWXaVakImV@ka@UUJ¯aXmmbKWU@wUUaUaKmU@UXlWb¼WLUKUb°UlVbkbVL@VJ@nVlUbUXmJ@VX@lbUbU@@bWb@VnLVJ@bVVUzVL@lnL@bVVVULmKUkJkbm@xVb@VkKVnnV@b@WXUnVlVVXVJUXlVXbWV@VU@Ubk@@KWbUUmL@JnXV°XJ@_`UbkXVVlÆkb@VLXVV@V@kKXX@`V@@n"],
				encodeOffsets: [
					[108912, 26905]
				]
			}
		}, {
			type: "Feature",
			id: "5222",
			properties: {
				name: "铜仁地区",
				cp: [108.6218, 28.0096],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°a@aÈbVUlU@aVKnVVVUlyX¹lWVa@UVnUVU@m@mUl@mÞw@xnIVbna@KVIJ@kwV¥UXÇVkVW@kkKWU@aXUWmnIVa°VXbmL@VVbnVVVUbVbJVbVKXkVKVanU@aWnWUWa@Unk@mVIVK@wXxlLXbVJVlKbl@VI@maXalVVVbX@@aalnkx@b@Vb@Vnx@bVVUXn¤WXn@Vl@Vlzn@`@I@KUU@V£namVkXa@aVKnnU@anVlKa@UUU@amk@»kU¯@aVWnkWmkImU@akaVm@»VUV@UKnkW¯XWlkUKnIWa@nmlIXmWUnwUwWm@wULmaUJkIUaaWaklwkwmJmU@bkJ@XUJ¯W@XbWbUKUkWJUUVKnn@UmmXUWa@mU@@UI@WmXVykwm@kaULWwU@¯lKUUVU@mU@UkmaUbmV@bxVnVUJVn@Jn@@bl@@knJVblInV°@nx@mbU@UWUbm@ULVVVb@LkJmXkmVWIUJUXUKVwVUkLkU@W`UmkVmIU@k@@a¯lÝ¥kmJUnKÑmbUb@Wbak@mWU@UbUVVkLlbUVkXaWK@LkxÇmk@@X@J@V@@X@VUV@VIWln@mbXVWXkKWbnxVUnVÆInl@XUxVl¼UV@b@b@xlLkV@VmzmV@b@VUVVLXVVbVLXKmVVLU@nnVWXXJ@V¦UK@LUmkIWbk@@lUImJnVÒVUnVVbVIVĖUxV@bnUVL@WV@@X@VKlXXaV@@blVxXVVIV@@WkIUVKUkVmlnnbllUVbXVWbblVkb°VInVVV@bnVx@l@bnVVnUUamUL@bVVÆUbUXUn@VVUb"],
				encodeOffsets: [
					[110667, 29785]
				]
			}
		}, {
			type: "Feature",
			id: "5223",
			properties: {
				name: "黔西南布依族苗族自治州",
				cp: [105.5347, 25.3949],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VL@Vl@@IXW@kVUVbnW@XlKVVnUVlL@baVbb@xX°ÔUxV@kbm@VxkxWJV¦@ÈnVKxWXJmV@nÒ@xVbn@@blLk`VX@bla²JVUlnn@U±lw@wnw@mlwVIX@@m@klKnkaKnwmmXkÆVmU¥l@nb°n@aVwVmVIVnI@a¯@mU°l@@VnI@JV@UV@b@IUbVJmXöºzllUbVa@aXUl@U@llLnKVaUa@UmK@UwVbnKV@VwVK@UXV@Vbn@w@UWnX@a@mI@UUKlaUaVk¯VaVLXK»XaWk¯mkğwmW@mIVkwJUIÇVwUUkVKkm@UkmU@WÅwm£Vm¤¯IkJWa_lUbmJzÝJkUÇVU@bUÝnm¯LUb@`mL@VkL@VUmmk@UU±Umka@kU@ķymUkk@mmkÝmUaUakImV@V@VÅL¦JUXmJXWb@n°Æx¼nV@LlbUUbmL¯@ÞbV¤nbVx@bUVlblI@KVVUnVJUn@VlLUlmLUUUxmK@I@@VW@@bU@UJmUkLVVUl@b@V"],
				encodeOffsets: [
					[107157, 25965]
				]
			}
		}, {
			type: "Feature",
			id: "5202",
			properties: {
				name: "六盘水市",
				cp: [104.7546, 26.0925],
				childNum: 5
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ôyVL@nXJVUbxbUlU@nVbV@naVwaVUXVxxbnaWmXa_@y°aVUkaVIaVamkXa@WVU@aUUlUXwVV@UVbVUnKUwVa°abVIlan@manw@VklJXI@mLVVVUVK@UÇk@KUa@UkaVU@UVWV_XWVXVWlLXKlLXaÆKwVL@akKm@Uw@@XUVk@VUI@wWK@aUVI@UkK@mLW@kImJUÅVmkXUW@UJkx@nmx@xkxV²m@kmUV±Ikb@aUWl_kK@am@Ua@wÑ@mnUWIXwULm@ÇU¥XIlwUwn@laU@Vw¯ÓW@waUab@akKUmVUUkL@WmXUaUV@lWX@Jk@@UUKULmLUJmzkKmVX°VUnWKULL@mU@UnVJ@b@UV@X`m_@l@@bmbXJmnn@°wnn@VLX@V@nVl@nk@@bl@nn°WlXzW`XXVKnUlxVbUb@VXb@VxÈbVlnbmn@kVUL@mLUVVL"],
					["@@@@UmWUwkU@Um@@VkL@V@@V@VkV@nbVa"]
				],
				encodeOffsets: [
					[
						[107089, 27181]
					],
					[
						[107213, 27479]
					]
				]
			}
		}, {
			type: "Feature",
			id: "5204",
			properties: {
				name: "安顺市",
				cp: [105.9082, 25.9882],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lL@bUKxÅLWbkKWLkKUXUWWXU`UX@VUVlb@VVb@Ll°xXxbbXUVbVnUxKlL°nUlVn@UmVU@kUUVablVXKV@ÆXþlXUxnU@mVK@_@ml@UU@blU@KnLVyUw@@UmkWVw@UVK@VXzVK@nVVUUW@kVJnla@nKWkaWL@Uõb@JU@mU@@_WWL@lUU@WUUK@lakÅUUlWVa_@`WIU¯mW@InKVVXa@Ll@VaV@@UXUWakUVWUIUWUkUmVXW@@amUUmLl@UUawn@laIVlnLVKUUU@amK@kUKVyUU@aUImK@UXa@aV@VakaW@@UnIVWVaUkb@mWX@Vxm@UaU@W@VULUxU@mLaUx@VnL@VVbUbmLkK@kVk@WV@bUbVakkyõ¹nWUIVa@J@aVUU@@ImJ@Uk@¯V@n°@bmJUUJUnUxbm@¯mak@¦VUnÅWlnnmxLbmlkL@l@nWVnlÆUVnIlJ@XnK@lL@VJVU@bXL@xVJUl@VU@W@Vxn@"],
				encodeOffsets: [
					[108237, 26792]
				]
			}
		}, {
			type: "Feature",
			id: "5201",
			properties: {
				name: "贵阳市",
				cp: [106.6992, 26.7682],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nlLXVJLVblJn°lnLlVnKlU@nUUa@WlX@ln@Vb@la@alJ°¦Kwn@°xLVkUmmwUmk_labK@UlK@UUm@wLmnwmw@U@¯@KnL@aaġXWW@UKbKWXJIWakJ@_kWkKUU@UVKk@@UlamV_X@WKXK@WUUnUK@kU@WJU@@UnK@LVUVJVkUK@UUJm_@UaVaV@UU@Ww@aV@Xkmmm@kw@IVa@KVLXU@`lLX@VKm_@yI@WU@UlVl@UanU@Um@UaWaU@Uk@XJmXVbkV@IUVUbWUUKmbk@kwmV@K@mWUXUakbKUUUJVb@LU@@VkL@VXKlbXmL@kbmUI@lVXUVU@mULWy@UUL@VUxXnl@V@VxUzmK@LkVa@VVk@@n@`UL@nmV@bmJ@X`WX°WVn@xnxnIl`VbnVlwXUlLl_nV@b@bl°VnWJkx@nmx@b"],
				encodeOffsets: [
					[108945, 27760]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/hai_nan_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "469003",
			properties: {
				name: "儋州市",
				cp: [109.3291, 19.5653],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@à®¼jpnr``pRVHÊÌ¤Zt^JÖA[CâlTébQhRPOhMBcRSQiROE[FYdGNOEIH]MgEAMLLIAG_WMCSL@ED]PCLYC[ZIHgjSxJTMbHNEFCMEE_HSDFHSLECRNSFDRICHNADGPI\\RZGIJTIAHLDQOHG`GTNCOIC@eIGDWHIS[kiE[FMbECZS@KKS[FDWsCeRuU_DUQNOE[LKGUBM¨EDQP@HWHGDImXCog_~I_fGDG|QDUWKBC\\ore|}[KLsISBHVXHCN`lNdQLOnFJSXcUEJMCKSHOUMDIm_DI`kNDIGEYFM\\YPEEIPMSGLIKOVAU_EBGQ@CIk`WGGDUM_XcIOLCJphHT_NCISG_R@V]\\OjSGAQSAKF]@q^mGFKSW^cQUC[]T}SGD@^_aRUTO@OHAT"],
				encodeOffsets: [
					[111506, 20018]
				]
			}
		}, {
			type: "Feature",
			id: "469005",
			properties: {
				name: "文昌市",
				cp: [110.8905, 19.7823],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@hĲ¤Ī¯LQDaFßL[VQìwGF~Z^Ab[¹ZYöpFº lN®D´INQQk]U[GSU©S_­c}aoSiA£cÅ¡©EiQeU­qWoESKSSOmwćõWkàmJMAAMMCWHGoM]gA[FGZLZCTURFNBncVOXCdGB@TSbk\\gDOKMNKWQHIvXDJ\\VDTXPERHJMFNj@OwX@LOTGzL^GHN^@RPHPE^KTDhhtBjZL[Pg@MNGLEdHV[HbRb@JHEV_NKLBRTPZhERHJcH^HDRlZJOPGdDJPOpXTETaV[GOZXTARQTRLBLWDa^QAF`ENUPBP\\Eji`yºEvåà"],
				encodeOffsets: [
					[113115, 20665]
				]
			}
		}, {
			type: "Feature",
			id: "469033",
			properties: {
				name: "乐东黎族自治县",
				cp: [109.0283, 18.6301],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ªVLP`@PEdNRAHOPEAKHEVL`GZBJfvdTAXNNTZJFPrHHNpKTD\\ILHbEVd^JOHLh@NNBnHP`\\xH@NBRLJTlNv_^CTLd@bNDVFbxdFVUPBTKOGEOUO@OEBXQP[H_EI\\EbeYa@UO_JMEJ_IEDKJUGMDcNUd_FMTEJSGoZ]EIYGO[YWgEQ]a@WHEDQKUSDUGAbYBUpSCYNiWqOSQEoF[UcQISWWNMSDe_cLQ_UBiKQOOASQAWgS­ā]ZaSPÝZ]XMXS[^oVËNgNKlE RôEø"],
				encodeOffsets: [
					[111263, 19164]
				]
			}
		}, {
			type: "Feature",
			id: "4602",
			properties: {
				name: "三亚市",
				cp: [109.3716, 18.3698],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@®ĂhTBXTRPBRPjLVAR`dKf`TCNXMTXRJVdE\\FpTRrPjXZMTDVoZABaVHTCLVCRGF@X^bFRhZXP\\ZHHMA[^wBWXJlW¤EJ[bCTOFWWMm@ILMGWQ@DQ^QNWFSHEbF`OXNbOVNKTEPDTLTCCVTREfvfEHNbRAENH^RJXCFHNFRpVGHWISDOTMVCZeGamaLoLÛD¹¹ėgsia{OųETtlÉwr}jR±E{L}j]HąKÃT[P"],
				encodeOffsets: [
					[111547, 18737]
				]
			}
		}, {
			type: "Feature",
			id: "469036",
			properties: {
				name: "琼中黎族苗族自治县",
				cp: [109.8413, 19.0736],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@bRFnHNbHgN@NPEnbXP@bND`NT\\@\\QZb@`@J]V@XhDpWnCJGHGXO@CR§FANHVKLF\\MPVR`CvVfQtDPKpGHG@S`WJP~^dSTHWX\\RHTFACQTIAUPOU@MG__IaYSFQKNSbORHXCZeTFJgB`YBMNMFi~IVDV[tGJWXGDQRGF]JrALgESLSAYDGIaFeXQLS\\MKSLSQYJY}eKO[EHiGSaK[Yw[bmdURgEK^_kcSGEOHKIAS]aFSU@Y]IWFUTYlkP_CUOUEkmYbSQK@EMWUuAU\\M@EpK^_ZMDQ^OXwC_ZODBrERURGVVZ\\DTXcFWNIAWJWAYUUFYEWLQQaCIZeDM`cLKRGpanJZQd"],
				encodeOffsets: [
					[112153, 19488]
				]
			}
		}, {
			type: "Feature",
			id: "469007",
			properties: {
				name: "东方市",
				cp: [108.8498, 19.0414],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ºxJYZQIYXLl@dR\\WZEn]bA\\S~F`KXaDeTiNO^EEKWEDQXITBXaWaDQMUJOIaTWf@NJV@dSxGZFu_@WMKAU}AQ@MwG_[GOAmMMg@GKP]IUcaFKG[JSCoLGMqGEOYIMSWMSBucIeYA_HUKGFBLOFGPQBcMOF_@KO©UAtERadwZQ\\@ÊJÒgòUĪRlR°KĮVLJ"],
				encodeOffsets: [
					[111208, 19833]
				]
			}
		}, {
			type: "Feature",
			id: "4601",
			properties: {
				name: "海口市",
				cp: [110.3893, 19.8516],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ńZƂtĢ¬æßFuz¹j_Fi[AOVOFME_RBb]XCAKQKRSBQWSPY\\HbUFSWSPoIOcCOHIPkYCQ]GdGGIFQYgSOAQLK`MFUIGa@aQ\\GGUFcHKNMh@\\OYKAigsCgLSF]GOQO]@GM]HyKSHKPW@Pxi@EMINYREXWRQ@MQcFGWIAwXGRH\\yDI`KJIdOCGRNPNtd\\UTMbQYi@]JeYOWaL[EcICMUJqWGDNZEXGJWFEXNbZRELFV]XQbAZFrYVUBCLNFCHmJaMIDDHXHEhQNXZ_TARFHVB@DTQIRR@YHAJVnAbKFUEMLd\\c^ÍÞ"],
				encodeOffsets: [
					[112711, 20572]
				]
			}
		}, {
			type: "Feature",
			id: "469006",
			properties: {
				name: "万宁市",
				cp: [110.3137, 18.8388],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@^J@ZTVbET^JBGLFPTHld]`FLQhcVanx\\\\ZbLHTGj\\FLP~fIZRZPVTQFSVAFJE^NDLEE[~LjsxVTG\\NZZNGlLRRGLJTV@hPZANN^@T\\NEPPbDZXO`d^HSvcJDIV\\XZAJUFCLNP@PQ¤@[ïKLÑIÏ]ÇE±I{u­YśUćFcYUmsVeBSVgB[RO@aYYPO^]@UVaNeDShMLG\\EfFVE\\F`"],
				encodeOffsets: [
					[112657, 19182]
				]
			}
		}, {
			type: "Feature",
			id: "469027",
			properties: {
				name: "澄迈县",
				cp: [109.9937, 19.7314],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@T\\GJCXJH@fJDDPNCNJENN^NLHBNSx@DDYbBLLDRbjZTj@`XXTlG^Xr@PJLW\\WLTlWR@HDJTD@X_PO@STMDNTMVV@NLDM`M\\XM\\JNBH[PYZúYzŸ`Ċ\\ÎÝd]c[NKVFLEBaUmBIZGQ@JQSR@CUAEGBQ`SWYRMFgWGCGJCbNnIDGMEDKVAZUEqBYRa^WEUFKYQMaFWXEHIFWMYHCrXVIIiaK@aMCUYNSIISTwXALKH@XWXIEIJQCG[IEQDE_XSBaa[AIPW@]RS[FWS[CD]PEBYNGFSaSyJG]@ugEUDQlGHiBKHUIoNSKqHFaPMICK]UUHIPDJMuCA[SCPIDIOILGAEmU[POPBVSJDREBGS[QXWSGcT}]IO_X@TGHoHOLCX\\ELT@LYTDaFENF\\lj"],
				encodeOffsets: [
					[112385, 19987]
				]
			}
		}, {
			type: "Feature",
			id: "469030",
			properties: {
				name: "白沙黎族自治县",
				cp: [109.3703, 19.211],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@D\\RV]dTXELnHr]^@LETBBRTHPi^[@U`QTHDJ`MGSogDIPKdJ`WVNHCXHl_DJR@AH`FBVPUJLHKNTJOFFZON[ZEHFCJlMJ_Cn`CJVNGPLTNDFIdVTWEIPmRKMc_kDMWGGUTAtJLK~\\f{pqD[LAVXRCH{HC`eJ`}@W^U@I@_Ya[R[@MSC_aMO@aWFmMOM@haGGMEmaQ[@MESHaIQJQMckBIw[AOSKKAMPSDSLOAV_@@`KJRbKRDfMdHZERgAWVsDMTUHqOUr@VQXTT@TfgL^NH\\@heTCZaESNObHPHeZF\\X^ElM^F^"],
				encodeOffsets: [
					[111665, 19890]
				]
			}
		}, {
			type: "Feature",
			id: "469002",
			properties: {
				name: "琼海市",
				cp: [110.4208, 19.224],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@TP\\pATHTGlZDJGAQjE\\Rb@jVBDCN`JZ[NCNHNXbULPrP\\KNbMTLjJJRFP`pNLZz^FLRHjVPZ@hxVKbHBHMNNJFRlLzGPnNHhIrHHADcPWdUAmEMVQDSKYHY\\EhBN^HpXGNDBNNBnIßÅ_g{³So]Ã£@ORO@KMEDIVYB[WJUICudGTc]P_YWaCOOMFS[]@MMYBgOU@ISHKQQkKMHYY[MSHwUit}KF\\KFMCF]EIUBETSROUKTLT[NKTWREfJbCHBZKTFTKh"],
				encodeOffsets: [
					[112763, 19595]
				]
			}
		}, {
			type: "Feature",
			id: "469031",
			properties: {
				name: "昌江黎族自治县",
				cp: [109.0407, 19.2137],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@`ZĤd`òü BSPGP@VSbQ`@]HC~T^SE]N]FkW]E[fYGGOPaTMbFDYfS@g[MGK]he@SSSRW@UVqrPVGNStCXUhBFQGYNcCeLQQaLI@_`@EUwcEaCUaMc@SK]Du`MSkKI~BVNL@X`EvYwHcTU@MIe@SXJbIPNVCRXbWbSAWJCRXFFL]FMPSjCfWb_L}E[TaBm^YF[XcQk@WKZJYRIZw¹ "],
				encodeOffsets: [
					[111208, 19833]
				]
			}
		}, {
			type: "Feature",
			id: "469028",
			properties: {
				name: "临高县",
				cp: [109.6957, 19.8063],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@jD`hNd\\^dZädĒH´Op@ùZY\\OAGIMN[[W_NCNMKU@NUMSNCTSP@`O@WSCCI@GXQSkXKX[IK@OWqH]SkWW@_SiiYQaKCAKZaCCw@MTGAMKM]FMMIMDSM_HGHRPKCBGSJJIYH[QOJCHMBDGQJECMTDQKFGTCEGTF`NFEDMFaGSNwIiTGhYJD\\KZODC^@FTKND`XBHKJNKFBNhG^FJMPcHEZF\\QPRjQTAdgNOPgQaRSê"],
				encodeOffsets: [
					[112122, 20431]
				]
			}
		}, {
			type: "Feature",
			id: "469034",
			properties: {
				name: "陵水黎族自治县",
				cp: [109.9924, 18.5415],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@R]NC`YL]FoN@V[vBXVFNL@TRZalnVFVP`DlOZkVSXEE_F[EUFeH[NKTgfCbMVU^@P]ZObZP@\\QhATUfAtUasñiāEoI]eYǯ@aKmaeWuCºKÜKpnbHbYfUDSNCPJTRAHJTDJSfDNLHXC``VBNGTYCQDIXMDSP@xLNEFRNXBIpVNLXah@RgF@`qOML@LJNSPLbaHAh@Jdj"],
				encodeOffsets: [
					[112409, 19261]
				]
			}
		}, {
			type: "Feature",
			id: "469026",
			properties: {
				name: "屯昌县",
				cp: [110.0377, 19.362],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@\\OnVBFKHPJCJOJTDB\\vDINOCGJVVL^JDONEbrGTLpMVJLGjAHGRkVChF@vH^zIbTETMHAZOFC^\\DXT\\EffAP\\PdAV@UIYfS|S@YPICMeM@sC[_A]VQEwyHSMuNcAUlQJMVGMS@mVBZPFO\\CSFQK[LqDMACiUa@[QiFBRIHYCHkGSBS[oSOqBIE^QHCRWHIXsHU\\UC}JEjMNAN_ZAIhSEYfWDQGaPMTLERZTJb``NHV@"],
				encodeOffsets: [
					[112513, 19852]
				]
			}
		}, {
			type: "Feature",
			id: "469025",
			properties: {
				name: "定安县",
				cp: [110.3384, 19.4698],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@JjDNdJ\\FbKPXfZ^Ij@RZNaVSc[MsMOHQPDJcLIJ_zCG[HQxWJBHXdENRR@XQFWZQQGOFSWUCI[WCJuRGLXNMPLhCl[Ta@SqGgJMGOmyHkKEQMINMAGaGULgwY@UOGiKQ]EYyMKoO_QEIIKiNSMa[LqOKOaVMWMGMDY\\_IKrL\\ERT[DEPYOUA@nNTUHINkRBVMdNvGTxzRF^U`BD\\@tfNDNOJ@Z{TeTJZ@VUcB[OBOeeQT@^OXBJb\\AbWTF`RCJFH\\RDJIJFXW@WLGBKxWTSJJMTVZND@bbL"],
				encodeOffsets: [
					[112903, 20139]
				]
			}
		}, {
			type: "Feature",
			id: "469035",
			properties: {
				name: "保亭黎族苗族自治县",
				cp: [109.6284, 18.6108],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@FJp@fxpQ\\ApN\\GNPNBM`HLMrXLXj\\PEHnI@WUCEM\\GTc\\GZYHTPBHRCPTdH\\K\\@HXiBJILJJAVNTOZJNtFPC`YxDPWci@IBgbGKaTOIM@KNKrP@_hE@QbgKWUMJoWAQMFEKM@wTONCJWRCZDHSAM_UD_GWMKeCITSCGIQBGXUHQoMEEGWDQIG]FMQBMaFGueFeSQDUSDSKOCSFMLUaPWM_PaEGFETMX]RCRR@HXKN@JNnXXESPaDI\\£FkXWIAX]xB\\GN"],
				encodeOffsets: [
					[112031, 19071]
				]
			}
		}, {
			type: "Feature",
			id: "469001",
			properties: {
				name: "五指山市",
				cp: [109.5282, 18.8299],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@TCNOLBTLBPx\\AJdlNRRIbJTGNF\\@RcIYbmHoLQdKN_fCJYbDRRXKZFVEZVXBXIJBXMdESW[CUYHUVQFQAqsEIMPYMSBUIIJKAIjGW[@[LGScDOGQOAGSYZ[HSd[HFNVD@XmJFG[OWiWKNqGKN_MAMO[HoM[BoRewo@Y^HpITSFENc`MVCdHNIVCLJFI`NFIP`@VZbaf[FFJG`O\\WRFA@PVPFPPH"],
				encodeOffsets: [
					[111973, 19401]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/hei_long_jiang_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "2311",
			properties: {
				name: "黑河市",
				cp: [127.1448, 49.2957],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VÈÞ@kxnX°VÈa°V@kôwbJVkXlVUx@lL@xkVV°VbxlVUnVxk@KkVbIl@°kVl@lÆnkll@@VVX@V²bUlVlVUVÇn@nkJlkVb@x²V@n°VUnlKUn`@n°bWLnVUblVUVVbknV`°kkl@@V°@nzJ@XxlWXb°n@bĠlbXbbVbJ@Vba@@lbUbVmn@lVmnIW@WbÞ@n@x°@ĢaƐéϚnlČ¯ĠŻÈwm@ôçUmm£Xy°UV@wÈ£Ǫ¯kõÝçUÑUķĢkVÑÆÞU°nŎ¥ČUĊx°m°¦żVƐx°Ç£@yUônÞÆ@Èĉ°Kô¦WkWUbÇ»@ÈĕWÇÈ£ŤU@n£ÆUUKVamanwÅmÝJ¯k@JIkaVaUUÇbkaÆÑkWmÝUÛÝ@wnU±@kkV¯KUkJ¼U¦Å@ówķaķůV¥Uaó@Åwm_kVwĉĉmmn_V»a@UVwķóU¦LǫéóXÇmōLǓÇķxÝkĉkmakbUĶ°@W¼@bÈÆ@ĖLl@°J¯mkl¯LÝ±LamJ@¼VƧUóUXċb¯ńVbkÆÝI@llxk°V²V@UxÞL@b@b`ÇzkókÝ¤@ğ¯WLĉÇLmmnċVkbUaL@¯bU°ğLÝÝ@"],
				encodeOffsets: [
					[127744, 50102]
				]
			}
		}, {
			type: "Feature",
			id: "2327",
			properties: {
				name: "大兴安岭地区",
				cp: [124.1016, 52.2345],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@kϙmƏêġb¯@@wmÝ@XV@Ill@bUxl¯VlVbV@ULVlUV_kxVVVÈÝJ@¯Ulm¯x@xóÒĉ¼m¯Wxţ@Uz¯WwnUwť@knW£óVUUwğyó¦WIVmmI@±kwÇ@@b@ĉ¼ó@¯wó@¯aó¼KÅaUwmWUwÅI@aKó@UaLaVÅwō¼UUÝl±I¤VxÇx@zkJmnnmbnzxll¯ČkJl°@kbmx@x@kêmVnWxôXxU°bWLóJnÇWĵV¦UUbbÆġKk¯VU±aXmċÑUwĉKġkVxkÇKkbIÛXWl¯bX¯KbĊÞVÆnĸ²lxU°n°òÈb¦xVb@¯Vx@¯VķÞČlĊ°KĸȘI°¤ČIôò»ƨnȰKǬ¦ôWŎÈƨwlnKVXmbX`lbwkVWXXL°aƾaĊ£n°@°¥ŎzÞ¥»alwôkƒJa@ĶK£bU°ĊxźVÈUĠ¥ƨVI@XU°x°Ln¥w°UmwXmÝV¥Ģ°@nU@mÆ£¯lKÜw@aÅU¥UaÝIkmV²nn@Ķ»@Uk¥VKÞ@ÞÛ@kVmĢa@_Jómǖ¯ÆwóÇa@alUwwĢřk@wÆWXUWXWam@_ƒ»ÇéXaĸwVa@ÝKkUWkXkKXxn@lĊV@¯m¯nřÆw¥"],
				encodeOffsets: [
					[130084, 52206]
				]
			}
		}, {
			type: "Feature",
			id: "2301",
			properties: {
				name: "哈尔滨市",
				cp: [127.9688, 45.368],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°`_JlU@@V¦°JUnLôlnŤ@@ÈaUÒVbkbl¤zk°ÇVÛô°IlVUVôUxÆU@bźĀº@¦b@l²UVl@°ÒĠxnXxÆVô¼Þ@Üx²KÞlVÑ°UȰôlwô@²ĸ°lanV@VŎUll@bÈnÜmwĢ@la@ÝÞb°UXblŎ²ÆkVI@nJnĠ°knÜbĢwna@akÞKƒĀaIVbU¥wĠwkôxnLċVçkaU±IUmnġW°WôĉalÞÅĵ¯@W¹XÝab¯a±X¯ºLaVmkLóbkaVUKVkkKV_@aÝykk±L@ÅU@yV_aU¥ówÇx@UkVn@lkÅlwWVwUkĉmkklW@abVwnWWwWL@UUÇLÇm@wJĉL¥@Ý_@a¯yUWw¯¯Uġx¯aÝXVmaU£ó±¯nwa¯óÅVXmanUlUXkWa@mkIğamIklÇUkĊzkKlUōĬl@nX°@llUxŹ²mKĉVWwk@UbUK@bmVmIVmwaWxXlWČmºÞÆbUxV@ĵńWÆĉLkWUbaWzkbĉ`U±LklōwUVÝ£UW`Uwk@mk¯VkaõVX@WbLK@XƧºWzxK@lmX@bkVVÆk¼Vbk@Vn"],
				encodeOffsets: [
					[128712, 46604]
				]
			}
		}, {
			type: "Feature",
			id: "2302",
			properties: {
				name: "齐齐哈尔市",
				cp: [124.541, 47.5818],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Þ@ÞĠKV¯a°@KVblaČUmnnKĊÈKX°Ġ@Þ£ôllÈy_@a@aKÝVwU@±¯Ulkw@kÞJlÅUa°ŃČaWVôƨVU@»nIb²KÞ°Klkn°¯I@kK@ĕÇÅ@aX»¯@VĵlaÿVamI@aÅÝउýĊȗJôȁÅkmƑÛ@kxġ@@laVk¯»īŹak¥Å¯JUaWU@@wa»KUkÆkUmUmwÛ±±UUbUUXwWwÆÝklkUanaWwnKlkal¯kaƽakÅxa¯@amb¯VlÇwÛĀV@xmêVÆVVaôVwÈx@ˌx¦VÞ¯VlmX@L@¯Ua¯LmV@°XċKV@UÈ@¥@wġIUkm¥Źw¦¯lmn@°kxVV@¦óamn¦l@nxlĉVómxnÒĉĀĊ¼þǔêÞ°ˌĠÞÒ°ĀɲĀƨźˤȤƨĊ°w@£nymwnkUUV¥ôÑVmkÆmUUVamVIkmôlxkXÞþbll@kVƆVxV@¼VÒ@UnnÞJ"],
				encodeOffsets: [
					[127744, 50102]
				]
			}
		}, {
			type: "Feature",
			id: "2310",
			properties: {
				name: "牡丹江市",
				cp: [129.7815, 44.7089],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@U`lLUlVLUlbaôlKnUbK°¹²W°baÞbknyUlUkamř²L@m°@lm²n`ôÅlKxÜKnxV@l@ÅXyW_k@wmŹĕmX»Ûl°ôÈ»ôô_WW@Ual»wU@@wUV@VXI@wĢ͑ÞȻaU_@mUkly@¯óV»XmWUXUWmnm¥nUUaWLk»Æ²IÇawÅaÝ°¯nUa±a@¦õÆğ@@ÅbxUÜnÇłlb¯¦ôó»m@±Uk@Wwa¯xUV°xXbÇÅUVK@¹KUaȯ@ōÝXallÛkalÇUǫÇÅÇakbÝƆ¯nl¯@¼VUx@x¯W¼Æ¯mĖĬ¯ČVkķÅmx°ô²V¤bUnÞW°bĢw°V°XxV°z@bÞ`@¦KĊI@xnÈÈKV@VXKxXmXUxab@kXllĊnVlUxXkxlÆkm@UVl@ÈwôxV¦bU`@zÆV@²KllÞz@b"],
				encodeOffsets: [
					[132672, 46936]
				]
			}
		}, {
			type: "Feature",
			id: "2312",
			properties: {
				name: "绥化市",
				cp: [126.7163, 46.8018],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ऊþÆÞ@bnJUbĀnblĊÞlĸwǔÈŎKÈnôWǬêKV¥ĸôUx@VbU¼m`nnĊĊxlUmkaVÿLw@°»UmbKmÝUwUmVknKUUl¯KUUÈnK@ĠkX±lX°L@¯¥@wV_mĵ¯WwL¯UkōÇVUlwVó±¯aVka°wVk°mÞ¯ŦřÆl²ŎkU@mUkb¯ķ±ó@kxȯó¯VUÒkÝ±LÛwÝ@ó»ÅUWwmğw¯Ñ@UkV±@ka@¥¹Źÿ@aÅVwóVVUkU¯JÜóÈUl¯yk£laUaVÑÇb@ţ@kmómKV¯IU¥@@kVI`@ô¼blUlbÈb@xÇKkĢɳaÅɆō@VK@z@@¥ÆKnÜ@@aÛUwwnUķ@_V°@klVnULVVÞbVl@°@nxn°LÅÆlVÈmU²@VmĠLxn¯xkWzJwnLmbXbW°Æ²@x@JVxLĀ²Æ°I¯ºÈ@ÒnÈ"],
				encodeOffsets: [
					[128352, 48421]
				]
			}
		}, {
			type: "Feature",
			id: "2307",
			properties: {
				name: "伊春市",
				cp: [129.1992, 47.9608],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@K¯kWW²ğl@mLÇVVLk°VVmLUlVnxVnÞLnaV¯¼@xKUĀlbn`nÆxô@VbU¦ĸŰĸbôxÆ@V¥»IVl°LUll@²mVx@ÞÜÞVnlXÅÒlbÈaVVUblbJ@I°lÞInÆmxnbUbVLÅVm¤@ţVÇ¤XÈÇĖ@È¼aXVÜaXbWnzŎařKôbUlw@¯naÆKnUU¯Üa@mkkVUĊmżÝǖK°L²lÆI@¯¥ĉƛVaÞk@ÝVaĠlnUVwóma@wĉ@aVxamX@a@UaÅLaVW_nWm£nWm_ÅV¯m@mó¤Ý¦¯ÅalmX£VWUÅwmÇ@@IVWUw@aI@k@wŎ»WÅVaKIka@¥lUkUlwÅwVyÈwWU@a¯U°mÇ@UçaVa¯mV»ÅwÝUlUkV@kmUkX£w°@@ÇaÝIamÛam¯lğmmI@JUl±ÅōkWa¯VÝa@Þkbġ@xÛnÇm@akkōVōl±kÅťŚÝ°¯nUl¯xlbU°b²ôUxkVÈUŎVl°KXxĶ°nU`@x°¦@"],
				encodeOffsets: [
					[131637, 48556]
				]
			}
		}, {
			type: "Feature",
			id: "2308",
			properties: {
				name: "佳木斯市",
				cp: [133.0005, 47.5763],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nbÞJb@È¯@xW¤Vln@lUVlkÞVÆxU¼°nUbbVèÈ@nIn@ĢmlUw°żVUn@lnL@VôbwĊlJķĸĢlwôwƨxVVUŦxLźÈ°`nnĠwŎJÞĶwôJ@¤XnÜĸln°¼È°lUbx@l@ÞÞÈm°lôwL°¼ĸ°Þ²nĠ@ôwÞ`ŤIVÒĠU@VJĸbÆ²@°ĊKJĶaĢȰ@ô¥°n¤bČU@VxmUw@aÝţÇķ@ĕķīU¯²@ÆmVÑô¯X¥ċç@ĉ»U¥ÝţKWVÅkUVÝŎUmÇÝx¯aķxÛUóL¯a±óōb¯ÑÅVÿ_Åķa@UK@wm@Van@UmmLVa@VImmXUWÝUÅKUwÝUUkVk@l¯XÅ_J¯kJmÅLa@¥U@¯Vz¯@`@¼mxƥŏKÛk@±laÛ@@Xm@@xƽ@WŎnˣĕÅ@@aÅ@@nÝbÇ¯@_UkUWkbwÝU@çWlw@anI¯lyX°m°VaÛm@mVwÞK°XlaXmm_@UkwÝK@VIXmV»I@a¯ğWbġaU_¯JU¯ġĉkō`±nÝÆkbóĊ¯XĢXmVn²JVlbUèČmKwlóğxxV¦UaJbƑÿÝLl@bmbġx"],
				encodeOffsets: [
					[132615, 47740]
				]
			}
		}, {
			type: "Feature",
			id: "2303",
			properties: {
				name: "鸡西市",
				cp: [132.7917, 45.7361],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@LKVVnkbVÈb²U°VnklVlaÈL@anU°ÜmXV`nôLèxlLXL²aVVmÈX@ķlnUÈl`È¹@Ť°U@xKnnVmlnnUllVnnaŎwlVÞÒ@n¦LV°lwVkLaÞlnÒ@xmLÞ¤Wn¼WÈLVVUxlÈôWVaU_VKKXUÆbnnôKbÞw°bÆWXamVwKUw¯WUkUlJUwVUa@@kmyzmĉw@kVwkW¯ÅKU_VmxU@aW@@kK@wa@K@@kVUaky°_Vmkna¯K@Lwġk@@IÇóXwVakmV@mwXUWanlĉ@ÇUwKóܛǊÛm°@wÅ@±b¯W¹WVwŹĕ¯kVmōb¯w@awmVUUbVIkaVwķxk¼b@VXXó`ó¼Çó¯kÜ¼WnźĖnxl@X`WzÆ"],
				encodeOffsets: [
					[133921, 46716]
				]
			}
		}, {
			type: "Feature",
			id: "2305",
			properties: {
				name: "双鸭山市",
				cp: [133.5938, 46.7523],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@UUwómÑÞÑUÝÝUkmmÅyV¯ī¥Uÿĉ¯mÇkaWbÅX¯aÝxaóLmmÅaWVLULV`UbXókÇVwUUÇKX»XmÝ£nK@wmÑkÝbKUlx¯kUKm¥@ÝÑkUōxmbUmkVkmmnkUmmL@w¯Vţ@Çºk_ÇmVk@ĸVxVÈ°lLkllUbōwnVW¼nlUx¯XmWUnÝ@xÝUó¼¯J@LVbkJWnkbW¯ÝLUxn@nÜb¯U¯nWkz°mJ@bkxX@èÞVxlaXlVV`°@ÈÞa@mÆ@@bÆ@ˤĖmXōƾ@@wn@@WÜ@kb@²ÜlŐLƦnw@»_°@y°UV@@¦bÆKnI°lIÆ`°W@kllUVÞVVxLÆÞVXWVnnUJ@UbnKVnm@Ubn@@xL@VbÆĸ`UĀÆÒ°Ŏa²ô°bôKÜVĸw°bÞwÈVnÞōVUÆlXU"],
				encodeOffsets: [
					[137577, 48578]
				]
			}
		}, {
			type: "Feature",
			id: "2306",
			properties: {
				name: "大庆市",
				cp: [124.7717, 46.4282],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@mÇ@ÑÇ°¹¯J±ÅÿKUwI@w@±ÅX¯WanamKxIylX°wmwğKUn±@nVÇUÅkÆ¯Kmmw@@¯UkÝaUUVKmUlk@¯U`ĸ@VmxVxÜ@bÛ@mÅL@¦@@yLUŎ@ÆɅɴblġÈL@wÇaakkVa»@ó¯_ÝJwÇaÅXnyU¯¥Å@wbÝaLmm@@VUlbğVm¯Xm_`¯_UxmLa¯b@maó¦Çk¤V@bóJknVxVXx±aLUbVxkLVlLWl@nX@VÅbWlÈnxbWÅbm@xbml°bXbWXVmnn`Lmnbmb@k@mwU@@¯Jlbk°lbkmLXxmbVbkllÅÞxXxVWVVa²VÜ²nxVVnÅlVlL¼b@xV@XVbIÆ°¦lźbĬ°¼Ulb@kĢ@lw@ƒÜlnȂÆóȘIĉ"],
				encodeOffsets: [
					[128352, 48421]
				]
			}
		}, {
			type: "Feature",
			id: "2304",
			properties: {
				name: "鹤岗市",
				cp: [130.4407, 47.7081],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Þ¥ô£nn@°ÆUn`mXn¤mX`UXbÆKVb@@bnWbwUbĊ@x@nbWVm_mm@ó»UmÅWXkĠ»²¯¯nķwŎ@ĊŎK°bĸUnÑKČ¦ĠÈbÆknJÆUĢV°IVƾwaVkÇ¯¯»mķkÛWm@£óIĵxÝōIğxmm¯_ÇŹKwťUVUƧwóxxġkĸķIkĉxóa@UmK@kVmUŻ¯Vxkġn@mmJ¯n°V@bXVÇxUzÆxkxlVkV@¦lbJLUbÆXō¼@xl@J@bVxXU@JÈ@nxVÆUXW¤knÆb°"],
				encodeOffsets: [
					[132998, 49478]
				]
			}
		}, {
			type: "Feature",
			id: "2309",
			properties: {
				name: "七台河市",
				cp: [131.2756, 45.9558],
				childNum: 2
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@²mŎ_lĊĢV°°IV`ĢbaĠX°@bJU¼WnUJ@ÞLlxV@n`lIUa@K°Iô»ÞVwÞ@VmnX°WVwmkX»UmŎxVaklkkKÇ¯UUwÇWUnU±bKWKkwçóKmU_nW¯ÛmV@bÇKkbkUml¯U±VÇaUamlUULKk@U@mwÛLwkLóÆm_±nk¯@@n±KnŚlbkVVmzlWXº@Ķ°"],
				encodeOffsets: [
					[133369, 47228]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/he_bei_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "1308",
			properties: {
				name: "承德市",
				cp: [117.5757, 41.4075],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lLnlmxnIVVlUnb@VVxXJWL@LÞVnnVJ_@wkmKbxwXkWXXKlb²K@nVVVbL@WlU²lKVnUJVz@VVb@lÅ¼mVUVnbôaVX@°Ub@lWbX@b@bVb°x@VxÈLVlaÆ@Þb²k°@lVU@Xn@VWLXb@¤VXKVVVLnm°_ƨ¤@aUIVaalkX°kV@alwUVyU@kó°na°UVUUmUÆw@mkLVUWVIWLnn@xlVnKmyU@U°UXaV@U¥U@UÆ@aVUkWU¯aU@WLUV@bkbmKULmKkUVUkmVIUwlWV²Uml°U@WLUwVm@UUK@_KUUÜaXw@VKUU@mVIUUlmnIVVVbÈVlKnbVK@nI@nVnwVLVKKVnb@aUIVW@In°@lVnI@lWĢ@°UVL@b@VyUUa@w@WUnU@WÇ¯K@UkkJWaÛbmk@mVaÞU@amkW@mXUKkÿ£@akl@Um°UXwlaal@nmlXnW°znW@awV@akbĉ¥VmU@IVUJkUmWUKbmkUaKkUVU@KV@@klwWaU@kmXVènbmlUUKX¯JkbI@JmIUWU@Lml@XkJ@UkK@aVKwWaIWwmU@mU@J@UaċUaUUVkI±k@UU@UbVVm@UVKLlkIWaULUWXUJU@WbUb@lkXUxm@@JVn@J@bnb@Vkx@bLUÆnJaVXnKVVmzX°V@_lJXxWXK¯bÅamU@lUIbñJ@LÇKkIÇ`kxWL@@@bUVUb¯xWKkÅVlULW@n¦Ul@IlmUUUVm@kWnkKma¯XUKWmnwVwÝLmVUbUVWb@LnxmxVmbXx¦@nb@`V@kbLUmVUlkbVXkºmnm@@xk¦bĢÜl"],
				encodeOffsets: [
					[118868, 42784]
				]
			}
		}, {
			type: "Feature",
			id: "1307",
			properties: {
				name: "张家口市",
				cp: [115.1477, 40.8527],
				childNum: 15
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@kġÛal¥@wn@nml¹UWlaVknUVKla@U@_ma@¥WwnaUwnmw@KXaVUVaUnmWUk°lnUVUXWVwIWVóKUI@WXxUU@mma@kUKWLkw@yk@aVkUUċaUU@Wk@Unm@UVmLm±IUkJkW@aI@m@UVUla@VXVXmVwnkWKKU_k@m¥mX_JmnU@km@U@KmUVU@U@Umk@@LmW@Û£Wka@wk@aI@mmk@mUa@UmUIwW@aWUbU@kbÇ@kw@makVUkU@am@aU@mxkUbKUXU±KXVWLUK@wkU@V@WXUa@WbUxJI@¦VèVVX@±ê¯KUI`¯UULVx@V@UKIVkLmVkKm@nUJÝbkIUJVXVVxVbUVJUn°bVmlU°XnK@Ul@lVÈVUXx@W@VXVKÞbn@VnbVm`UxkW@UVkLKm¼@lUnUJVnVXV@Vm@@LVklIkl@VWlULWKUL@mJ@blbUVUlmzUJUxm@UUbċÜk@Ub@VLVV¦ôbVmUKUkU@m@VlVn¼WbUJ¯@@°nIllÈl@nXWlLkJ@bkxlxkxlXUlklJXL@bWn`@nÆXxlL@xl@XbLKlVlIXblVUbUJW@lX@VL@VVXJwn@WnL°KbVbl@VI@K@U@nmVmV@XUWI@aXm@VUUkWmn@lmUUk@mUmK@UnwVĉ@mU_V@XJôVVULVUn@llUnJl_n@ml@XlLlw²LVJUL@VmbVblVXmVnl@Ť¦nn@Ü@bl@@XV`Unb@VlLVb²JXn¥ÆÑ@¥Þ@"],
				encodeOffsets: [
					[118868, 42784]
				]
			}
		}, {
			type: "Feature",
			id: "1306",
			properties: {
				name: "保定市",
				cp: [115.0488, 39.0948],
				childNum: 23
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VbXW@@UlV@xVLXKWU²LVVWLalVnwV@@bn@bVVllUnb@lxÈ@laV@aXV@bXxJnV@VVb@nnl@nJ@bll@aU_VWUwVUkUmUkb±mVwU@VIUW@UWk@VU@ynLm@IV@bnKLVaVmnIlaXwV@@WVL°@@xnX@V`V@VbUVVLVKnwnL@ll@@_V@VVnaÆ@KVXÆ@n@wKmUWm@km@kÜKXU@ÑW±nIUwVKla@I°wU±kkmm¯m_JnawW@IVaUama@wUmU@mVw@aXk@mWa@£km@a_kVmUnWW@¯bkUmk@VÇm@@kUUKUU@UVUamVUaWIkb@xU@@amUkKVkam@@kVUkUWmKmUkLUb@xmJU@UImVÛVmnUwJU@VX@UWm@Ub°¦UmxklmX@`ULU@@UW@@xkn¯@makVUmxUb°lUbUbnUJUUVaLkbUUJUU@mUUUJka@xUIWJUnJ@Vz@kb@`@bln@lb@X@@@XlbnbVb@VJlInlbVw@UKl@lbnan@VbJôLnUzlV@lÈLVbVK@LVxVWXX`WxXzbV`UXV¤nx@bVlVnVlUL"],
				encodeOffsets: [
					[117304, 40512]
				]
			}
		}, {
			type: "Feature",
			id: "1302",
			properties: {
				name: "唐山市",
				cp: [118.4766, 39.6826],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@VVl@²lJUVVbČVVb@@InV@VnXxJXbxUL@bLl@VlI@WnkKV@VXnJ@IJla°IWLVVnkmaUçWVkôaÜ¯@nV°wnJlaV@VUnUUaW¯wXWWwna@£UaWKU¯¯@aVUkKUamUUn»anIVwUWlk@LlWVakU@K_lbÞU°@y°n@KÈkWWţ¥ĉōkġWUw¯£¯Çwţw@kK@k¥ÝwÅbÇ¤ÛťVlW°@ĸx@VVVULVLkl@V@X`Ub@Xm@UWbk@ÆVbnLWV@lnXUbl@X¯lmUVkKWLkK@_UK@U@UmmUxmVXLWVULkU@`W@ULUK@XlJXzV@@xml@VU@UX@Kk@WbUK@Xn`XmJnmkxUVbUVlVVxUbV@nKlLkVKÞbVKXI°KVmVUIUKULVxVJVLkV@V@UbU@WUU@UbUK@b@nV@VkLmb@b"],
				encodeOffsets: [
					[120398, 41159]
				]
			}
		}, {
			type: "Feature",
			id: "1309",
			properties: {
				name: "沧州市",
				cp: [116.8286, 38.2104],
				childNum: 15
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@ln@UÈl@Vnl°aX@mXnVlU`@bln@¤Xb@nWl@bUx@nnVV@xnbVbUb@JXxbmXa@kUVwlWkKôVm@wkkK@kl»ÈmVKXkla°@XVV@VI@ml@@Vn@VX@V@J@VxUzVV²blVk¦@Ġ@@»@VK@VÈLlK@XnJ@alIUlaVVb@n@aU@WUIV@mUn@mKXml@lL@LnWb@XV@@aVVbV@VVIVWÈbIÈ»ƒǟlWaVUÅUUm@kVUWVkaUwmaóUJUU¯ÑU¥mk¯UaKÅnÇyóXmWÛX¯aċbÛaJWÝU¯»aóóUm@IVVl@bLUJWLX@@xXUxl¤V@VnVUVXVbV@@@VVn°V@ţU¯VUmUWV@mUXabUKUwUaÇKnVk¦Wb@VnLmV@bkV@nxW`Å_UVV@bUklVX@VmlUx@VVL@xVWVL@VW@UUm@"],
				encodeOffsets: [
					[118485, 39280]
				]
			}
		}, {
			type: "Feature",
			id: "1301",
			properties: {
				name: "石家庄市",
				cp: [114.4995, 38.1006],
				childNum: 19
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@la@y@UImVXIVJw@lbIVVnV@VVIVVlaKbVUVVImVaaVk¯VanwVlUnb°@lm@wX@@VV@VK@_nWlknwV¯¥Van@VX@W@UVIVxnmÜUnUVJV@nI@wValKnV@kmU£na@mVk°KLVa@UU@UmknWWkXU@aWW@@km@UaU@@klK@UkaWaUnamm@Ua¯wWU@UkL@Un@xVlUXVJUbLmU@aUWUkmKkLUUm@mWXammkkWUm@@U¯JUUmkU¯@mKĉxÝwÝ¥LUómwkUUUWVkKmkKmLXlxVLVxXJ@nVJnz@VWL@`nX@x@kVUUmJmIXxJVnUV@UVV@LU`UXVVlXL@l@b@VmX@bxn°UbkKWLXlW@@bKmKULmakLUlmb@Xb@xmXU`Vb@`lLx@nWVXL@°WlXnlbKVKXVb@X@l_lJ@V@XnI"],
				encodeOffsets: [
					[116562, 39691]
				]
			}
		}, {
			type: "Feature",
			id: "1305",
			properties: {
				name: "邢台市",
				cp: [114.8071, 37.2821],
				childNum: 18
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nKlLnlLXUVVlVnxôVKÞ¦ÞxĊwnL°@lVnVV°I@Vn@VlXnlnbWnXn@VVlKnLVlVX@bnVKVaUIVWkU@wVm@¯@U¥VmU_°lKkw@LXVaU@wUUUKlUóW@UVUUl°KwlKU_naKVnlKkkWWa@IJVa@IlJnU@KVUUmVlaXUl@lm@kXWÝÑnk±k@wğ@@U@mKĉLmVJ@zmlnWLUÝJU_@@mJkXUVlbklÝ@Ýab¯@¯±JÅwġaUU@kU@mVI±bUKLWUXJkaLóKULWbUVkKmnk@@bmLUl@b@mnmJkUULabnmn@lVV@¦n@l@bznx@`Vz@bxnV@xllbnKVx"],
				encodeOffsets: [
					[116764, 38346]
				]
			}
		}, {
			type: "Feature",
			id: "1304",
			properties: {
				name: "邯郸市",
				cp: [114.4775, 36.535],
				childNum: 18
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@bVKlVnInm@@akVnK@al@nmlLVUXaVKôLKlbIVWXKVL²aJnU@lV@VVĢbÆx²I°°@aÞbÞ@lkkaVUlWnI@@V`ÞIVXKmnk@yInUĊKÇkUUamUUk@aU@Uk@WUwVkVJVkkw°a@mK@UX@VVLVW@wwVa@¯Xm@@lUIWaU@UWkXWmU@UwmUkKmn@lkV²VaULUVmJUUUwLma@UmkIUmLmVmx@bLUamKÅL@VmbkU¯KÝamzkJUb±VkbL@lU@WIkJzkKmKnUalWkkKW@@nkbk@WW¯XUVUJ@XlJ@X@XlWLkU`VUnaWaUV@UVIaUxUUmVK@I@W@ÇU@@U@b@nmKXmx@UxkVWUX@`VLlL@`zXÝb@b@VUVkIUJVz°KVlnLlKnLxlLVVUVlXUJ@nnI@mVUlbn@@m@bVnV"],
				encodeOffsets: [
					[116528, 37885]
				]
			}
		}, {
			type: "Feature",
			id: "1303",
			properties: {
				name: "秦皇岛市",
				cp: [119.2126, 40.0232],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lnV@Xbkx@lU@@LUVlVLVbnlaLXVVnlIVUJV@UnĊ¦lab@nJ°UmV@wn@VUJVI°bnWlXnWVLVK²bakklI@aUaVUwVUUalaVwnUVak¥X@WkLVÓmmUK@_lW@n_UK@alÅ@ğÅƑŃÝm@ÑţÇlL@¯mz¯@ÝVak`@LlVUbkXK@klVXUxJmbm¼VnVVblLUV@b°V°XLVb@¤mbXxWX°xXVbmVUVU@kbmI¯xmU@Û°óbUl"],
				encodeOffsets: [
					[121411, 41254]
				]
			}
		}, {
			type: "Feature",
			id: "1311",
			properties: {
				name: "衡水市",
				cp: [115.8838, 37.7161],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@KVlV@X°xb@VnnmbVXblb@VkL@lV@Vbn@@l@XX@bWVXlmXnlVV@@VUbK¯LUl@nmbV¤n@lLXnlVUV@ln@lbUlLnV@bV@@wlaXJVbnUVbVU@VVLVVn@VVX@@UKXUU@wUK@UwVnk@UUWlkV@aUVUÆ`X_w@mlU@anUmK@UXal¥UmÈLVbVxVLabVW@nXUVnV°UŤV@U¯Um@U@@UUaWVUmUUU@k£VwW@wW@XKIUa@wU@@al@UK@_mKXKbUU@aVKm@Xm±@kbÇakLğVaUw@a@mkUJk@ykw@£WX@lknk@WVkbUVnUVL@mVkI@JUbI@JXbXllkLUmLmbV`kLx¯LkVUV@VôXkVVLVV@xVUbW@KxlL¯kV`UnV¦°@"],
				encodeOffsets: [
					[118024, 38549]
				]
			}
		}, {
			type: "Feature",
			id: "1310",
			properties: {
				name: "廊坊市",
				cp: [116.521, 39.0509],
				childNum: 9
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@laU@UnL@VWbklWxnIVVV@XJlbUlXVbn@@KmV@@X°WVInJmn²@lmVbnL@amKV_kwlmX@@LVamaXaaVU@UnJVanLlUkaW@UaVakK@IlKUU@an@ln@alKUkIVa@a@klaUKUV@UkUV¯KVV@kUmU@@a¯ImJUU@VV@UL@U@@WXUWa@Ukwm@X@@w@al@@aVIUmVUUUVWUknK@I@l¥kU±aUUVyUw@@I@UUWm@@Uk@@nUJU@WU¯@kbWlULnÇk¼@llLl@xUnóLlkXUxV@lWbI`°nnnllV²¯x@JkbLUVxmJX²@ÒWVÛL@lln@XnnVL"],
					["@@@kX@Valaa@KWI@UXW@WanaUIW@UaUKķk_W@UVUKU@b@UamxVXnJUbWVXLVbn@W°kb@U@Wó¼mIU¼k`V@bVbl@lX@lUôVlUIV`lXVn@lUlVn@l@UVaIUWl£UmVWU@@UUKlUUUnVL@KUnLVWUa@U"]
				],
				encodeOffsets: [
					[
						[119037, 40467]
					],
					[
						[119970, 40776]
					]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/he_nan_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "4113",
			properties: {
				name: "南阳市",
				cp: [112.4011, 33.0359],
				childNum: 12
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lKl@nVV@bn@VVnmnLLXx@VLlKVUIXWÜ@Člbl@XUĊUlwnWLÞwm@ÞUVmnVl@nXJXLm@VnnJlaI@VkxVb@VlnJ@knKVn@°aVanal@XK°b@¯VJXIVK@al@nVk@nKab@XL@blVVKVLXK@VaVI°mVaX@V_@a@yUkVwVIVaJ°@anIlaV@nKnXÆm@wUUV±UUWUKnaWwXUWmÅ¯Vam@kakImUK»lan@VXXaW@@UlUUa@a@UlwUV@Xal@@anIVaUK@VXmwVmUmVLXl@nalLnal@nKlkV@@UnJUXnl@nVl¦V@@VnJ@nUVVVVIn@VaJÆn@@K@mka@kmWVaUI@a@k@@aUL@mmaVIUKUV@@IU@mUmmL@K@UUUU@mW@@nU@ğ»mVmbk@klW@UXnV@LJmlUnUJUUUW@UnkKxmLa@@@lUUbmUVWk@@nkUmam@UakJU_Vm@ÅlÇLUVmVUwULKU@k@UVUlU@@U@UaUUWaÅzJaWLklb@bmL@kKabWUV_@mV@b¯JmXUbUK¤ÇLUU@b@JkLWmkUWIkJ@VmX@JUbVXU`¯VV¯blK@LXKlUV@Um@@Uk@kxWkbL@KkbmL@UXmaU@@l@x@blX@xUJ@bULUlULÇ@@VnU`W@@nÛ¼U@@VmKUkm@VVX@@xÇ@bUbVb@VX@@xLUb@l¼XLlbUlVVUUb@n"],
				encodeOffsets: [
					[113671, 34364]
				]
			}
		}, {
			type: "Feature",
			id: "4115",
			properties: {
				name: "信阳市",
				cp: [114.8291, 32.0197],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VllInJlknJVkVU@mXlUÞ`VnVVU@U@y@nXlKVnJVkXKWaXIb@yVkVUkVwn@K@nW@kKlUXVVUlbnUV`n@V_V@llX@@Vb@bV@@nlVUb¯WLnbmb@nLnKbUbVWnLlaX@VVUX@Vln@`kL@ll@VXVJÈIVl@XÞJ°UnaLlylU@UXKlnn@lanLWWnbVI@KXKVL@LVWVL@UVKUIVWX@@XÆJ@In`@lJVI@aWÛnK@UlK@UU@VKnlmnXalUllLUbVVknJ@nV@Vm@al@@xnVlJVUU@w@ak@XW@_mWnUlŁUmVKV@VXwW»XWaUwnkWUkVUU@@@WlaUkkaIWVkm¯xmIUmLUVaUIó»m@mmwXk@amk¯¯l@wmkLmmU@UbkUWJ@XUbJ@b@l@znÆmK@Xk@Ub@lm@I@akmVKUUVUkU@U±JUbk@IWmkxa@UUVUWVkIUaW@UlLWn@VkJI@VkK@L@bmKkJmUUaUKWXk¼VxnJ@V@@VULV¼@@UkaUlWL@U@W@IkKmL@KULUWULWKUXUJmIbK²UWnWKUUkLUmUUam@UU@mUL@xkV@VV@bmV@Vk@mwkUVUx@mbXÇnVbUL¯WnUVLVb@xnlWnU@UVUVVUbVVlVkn@llVUXUWUXVbUJ@bmLUJnb@nVK@bl@@@bVJUbnX@lb"],
				encodeOffsets: [
					[116551, 33385]
				]
			}
		}, {
			type: "Feature",
			id: "4103",
			properties: {
				name: "洛阳市",
				cp: [112.0605, 34.3158],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VVUllLXl@LWn@J@bKUVmnL@`VblLnbV@b@JmL@LnV@VV@¯VJVnXL@nm@aÞ@ak@mImVbXLynLk°@°aVJnUV@UVVXk@WJ@VXLlUnJVnn°U@»°Uwl@bWmUXÆ@VLXU@m@Ua@Imkba@naWW@_@WXUV@@U²@K@I±U@¥kKWLóLla@£Um@kWKXU@mlLXUVKUU±J¯_@`UL¯Wmk@WakklUnVUVaU@KUU@mmK@_a@KX@VaUIm±kaVKVUkw@kaW@kbkL±UUaK@UUKVak£@UmmL@lIkmU@Ualw@UJkbmIUmn@WKImWk@mUUnÝV@nÝxKmXkxĉVWVk@kaċÛ@WXJUV@zmVWnbUbVbLlUnlUÒnWVVWnk@@Vm@kxm@Unl@Ll@@V@XnkJVV@nlVXxU@ln@a@VLnWĊ¦nx@lbVKXLl@ÞVLXJl@XXl`lIXVl@XlXUVKwV@lanxzUbVJ@VVX@b"],
				encodeOffsets: [
					[114683, 35551]
				]
			}
		}, {
			type: "Feature",
			id: "4117",
			properties: {
				name: "驻马店市",
				cp: [114.1589, 32.9041],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@n@b°UÆXnVlnLÜ@VLm@n@na@Jm@k@lVVxXX@V`lLVXVV@VVÞLVV°²@labnxV@@bLmlm_VWnIWUna@lLbnV°VL@KVLVUVaVLXK@mÆXna@wVma@Xw@KlL@a@Va@wUkaWnIVla@Kn@Vn@VUl@nKVnJ@LnK@aVkVUUW@VakUVanI²XW@UUU°KnUVLl@XaVK@aU@KUI@W@_lm@KkLUKV_U@»@UVJ@XV@@mVL@K@U@Kk@VwUUm@kmWL@VkVkzKmb¯VÝI@WUkÇJUIUWk@@klK@_km@UVWUUW@kbmKUXaVamLmK@namaXK°VakU@mU@@aa@UW@kkU@U`m@U_mVkaUVWUkVL@lmX@Lm@UxVlUUl@zaWJXbWLUlmIUkLmW@@z@VUVUUmÝ_kVW@nUVUlmIklmIkJUkl@n@Lm@ÅIUbm@UJUUVU@mmI@UU@k¥mUk@WmVmI@VU@klmLk@mbkKmb@WkKUVnUnnxW@UVLUbmJ@bk@WbU@Vkx@V@bVbkV@V@XWbUWm@kb¼VLnlJlb"],
				encodeOffsets: [
					[115920, 33863]
				]
			}
		}, {
			type: "Feature",
			id: "4116",
			properties: {
				name: "周口市",
				cp: [114.873, 33.6951],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lnb@xlJ@UnLlKXUlJl_KnV@xVL@bkbVVUè@Wb@UbmkVmbXVJnUl@a°@@bLVblXxInmnLVwanJÆw²IlmnXVl°VVbÈaVb@lkn@VWnLlUVmÞUUklkVkUaVaVaUwK@kkaVWmw_l@nUVVb@baV@VV@zXJl@@kl@lk°WVnÆbnbUVJI@VKVm@kK@_kK@a@aU@@wW@@k@aUW@IUWVUnLlUlVXKVwmk@W@VWa¥@k@lnUIÇKUaU@UUVmIUVUk¥Vma@¯k@Wanwm@@n@@m@UIVkUVamUXWaVU_@mUVUImW@aUIĉK@VmIb@lU@@nJkU@KIUmmLk@UVm@Um@@LkbUmJXlbV@xUb@@bkK@LWx@bUn@xmbÅW@nWLUKUbUVKU@LUK¯mU@VV@xULUVL@bU`WUz¯aUamKUa@@xkX@x"],
				encodeOffsets: [
					[116832, 34527]
				]
			}
		}, {
			type: "Feature",
			id: "4114",
			properties: {
				name: "商丘市",
				cp: [115.741, 34.2828],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XVl@lLÈ@VkV@V»UanWX@VaÆÇô@ÈaVX@xVJXUÞUaVLĸbXKlV@m°Vn_nyXX»mUk¥lK@a_@yInaVKVa°_@WXI@@KVnIlbnaV@l@a@_w@lwUKmXa@UV@»Vw@kUKVUUm@w±VUXUKUwmJUU@km@@±mXkmUI@mmKUwkbWakLWaUIkJmX@l@@VUX@JWbX@VbULWblUVULknlV@bVJkmb¯KknWmk@@nmVkx@VmU¯KUnUL@JUIVmaÅaUm¯Xlkk@@lk@WI@yUUU@b@aUaUmVk@`nxUXlb@lLVxUbUbVbUllkVlÝVUnkVmKUXm@kl@nUx@xnxn@`VX@V²x@V@b@Wl@zU`VUVVbL@VbW@bkXllkLWV@V@VVÈwlV@@XK²LlbWnnÆL@VnJWn"],
				encodeOffsets: [
					[118024, 35680]
				]
			}
		}, {
			type: "Feature",
			id: "4112",
			properties: {
				name: "三门峡市",
				cp: [110.8301, 34.3158],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@WKUmUI°U@@UmU@KnK@IaU@makKUa@_KnmVUL@a@IXm@KWkkKVkUU@aUW@UUIVaymwkbU@xLVUWWkk@WUkJk_WWk@WIUKÝk@WKULka@mwĉ¥mXUK@@bm@kVWwkU@mUUlIWm@@Uk@@KkVmn@lwn@@Ul@XmUXUmVÑkmkVKUaVamaUXn@ykLUK@WwKmKnUm@UmaU@mUk@kL@lxċxUnkVmnXxWb@`kzWJ@VLmVUnlmUL@lW@Ub@VXUb`VLUbUJ@nmnUlUUm@@bUJlnUU@lxkb@@XJUn@kb¯VVVmlXXlJlzn@VlkVW@bkKbmkUbVblXVxKÈnwÞlĊKlVnKlwX@lL@xlUnVn@l@lmX@ÆÈb°¼ÈwVJlx_°xalUÈxlUnbVxnL@lllbmn@nb@@VL@V@@VLJnIVVlKnV_"],
				encodeOffsets: [
					[114661, 35911]
				]
			}
		}, {
			type: "Feature",
			id: "4107",
			properties: {
				name: "新乡市",
				cp: [114.2029, 35.3595],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XVlLK°bUblbUbl@nX@WXVVKVk@@mb@UbnW`kLLV@VVLnKlVXIlV@@a@l£nWlkVa@°bnUlLVlnabnUVUXKlU@@lk@aI°y@ôkUU@wmônkWakmlUkVmkUlmUUm@nkUKWanamULXW@UVnUln`lblL°KXV@ĠJ@L°JUVwanK@UUImmkK@¯±Um@IVmUmmÅnWaUK¯aUkw@W±kVxUVwnÅJUIWaÝJóIbm`ÝbÅImJUI¯¥¯@mU¯UJmnUVóUkl±V@zXlbWVXL@bmmº@@XmJUXU°llk@nWJk@U@¦U`m¯Wx"],
				encodeOffsets: [
					[116100, 36349]
				]
			}
		}, {
			type: "Feature",
			id: "4104",
			properties: {
				name: "平顶山市",
				cp: [112.9724, 33.739],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@l¤UbVL@VLVb²VlKlaX@lb@lxUVULbln²VJUbW@@Lb@`nL@nVV@LVUbUVmkVllXbl@Xn°VK@_°`²IVVV@VUVJnInaWK@U@KLÆ@nmlXXWVUUw@klKVa@knyVkVanIJXUl@XbVUl@@aa@mXkbnK@UlK@UUUVaXaWmkUm¥nWmXaWakl@VmÞbKVL@aVI@mUwVm@KÅméULKVaUk@kUK@UWXI@VlKXU@VVnInVV@VLlK@UUkKU_@WWUwU@kln@@Imb@@mnUKÛ@mKUkWVXxmbVLXVVU²VV@xÅnmWmLU@kbmJ@b¯IUbJUUxVl@z@bU`W@Ub¯nUJUb@WLUKULkU@aWK@abmL@lmUk@@bULWJUI°@¯aWLk@mbUb¯b"],
				encodeOffsets: [
					[114942, 34527]
				]
			}
		}, {
			type: "Feature",
			id: "4101",
			properties: {
				name: "郑州市",
				cp: [113.4668, 34.6234],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@nWVUKÅ@WnVnIV@kÆwV@nn@lxÞlnôJzXJl@nalUČVll@²UlkôVVUnmI°VnV°@°¦VJnIÆJÞan_VmU@ama@kU¥kaUklw@UIV¥kVUI@mmUÅmUlwVU@amUJWbUakVVé¯Im`k@wVWmLkU¯XkWmLmx@UUbm@@xJ@LbW@UUVWUkVK@kaIUamKUkkmmLUkJUVWXkWmnÅ@KL@@VXLmbmJUIUVU@ULWVkK@nWVXL@lVn@¤bkôKXKlL@¦²V@JL±@@VU@WV@X@`XXmb@blan@Jb@V"],
				encodeOffsets: [
					[115617, 35584]
				]
			}
		}, {
			type: "Feature",
			id: "4105",
			properties: {
				name: "安阳市",
				cp: [114.5325, 36.0022],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°kVaV¥kVmUkWkWVkVKUwkkmKUU@awWWXWakKWkXmlaIVmX¥U@a@WnK@kVI¯@KğI@WU¯LkKak_kmmVU@VWXKnVmbXbVLmln@VVknlVUnVlklnXbmlmlXblnÈlWbn@@nK@VLbVV°VVzln@VxIbU@WLUa¯VUkWõ@¯kkmxk¼lXUlVbVLnlULmU@lLkVUlX@xW@¯mU@UmIUWL@aXakU¯anWk°@kkKmmUIWaambUkkKmV¯a@UblkmXk¤@@b@UbULWVnb@lUVVnmnVVUJ@bWXX@WJkL@blVU°UV@XlWnXUbW@UVkVVWbnLUJWLUK@Lnn@blVUnUblxVUVJXUa@UbLnUVV@mVIVVn@UbV@XbmbUV_lVXUWanJVI@WkI@WVIVU°WXXl@la@mX@lLXlkVbmXylIXJV@@kKla²UVaIVyÞb°LlVna@UÆKnLVbK@anwU"],
				encodeOffsets: [
					[117676, 36917]
				]
			}
		}, {
			type: "Feature",
			id: "4102",
			properties: {
				name: "开封市",
				cp: [114.5764, 34.6124],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lUVbXaInV@bUVxknVVÆnn@VJlUU¦VJ@kxVllb¦lV@nb@bVUnaôJÞIXbVJÆImxUVwU²l@XxVl°bVLXb`XklUnmVblL@lmx°LVK@UXIVaWlL@Uk°KkVaVUXmmI@UÅKmmXka±KL@W@kUÇxUU@@UXUlKkklW@aXa@UKUaVUUV_@yXk@@a@U±w@UUW@_mmw@wVwmUaÇbUa¯UUkmWkn±JÅxmIbUxmKmnJWwkUaK@a¯@bk@mVUIWLmwm@Ua@WJUb@LUl@UUmLUbWJ@VL@VmXWWzUJUê"],
				encodeOffsets: [
					[116641, 35280]
				]
			}
		}, {
			type: "Feature",
			id: "4108",
			properties: {
				name: "焦作市",
				cp: [112.8406, 35.1508],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@V@VL@x@bXWV@XklUWX@J@nI@KlLKUVaV@JlL@KUk@KÞLl²_@nWlLUVV@nLWVUJVn@anV@awÞUVLVxb@lW@lbXnVn@@¼L°mKVn@bnl@nVK@blbLWU@VWLXV@nlKn@lVVbXw°nV_@¥Vl@XI@mlkkV¯VWnI@W@n¹n@aWKXUaWk@yk@kċUkVmbk@WIyóImÝkkwm@mU@xÅlU@mJXak@x¯V@¼¯VmUmmIkVWK@UXIl@UWVUU@mVUI¯b¯@lmKzWKUanJ@nlbÝ@@b"],
				encodeOffsets: [
					[114728, 35888]
				]
			}
		}, {
			type: "Feature",
			id: "4110",
			properties: {
				name: "许昌市",
				cp: [113.6975, 34.0466],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lIVnKlnVlnLVbJlb@ULVlUXVVX@a@KI@wn@aVV@nwnKlXW°lVnKUXx@ln_°JVIXyXnW@UK@UXIVanKVV@Vk@KVaXI@Vbn@nxKnaUlnVa@Xa@VçUUla@aUK@wmULk`kIWVkLmK@V@XUln@JXV@nmbUóImUa±@@ÑóVUUk@UlKVU@akWVUUlUUaUK@UUKWbUkÅJ@XWa@XbmJ@nUJ@bUKLÝaUnk@lXbWbXnmn¦lVXnWbUbVV@VkL@VmLaWl@nb@bk@UVWak@WVImJUbUlmz@lUbkL@lVx"],
				encodeOffsets: [
					[115797, 35089]
				]
			}
		}, {
			type: "Feature",
			id: "4109",
			properties: {
				name: "濮阳市",
				cp: [115.1917, 35.799],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lLXbWXXx@bVVnLllVxULUlXXlVlUnlU¦Ub¯lnK@VbVb@XbVLKVxVVnIlaba¥lU@wnalLnVVlVLXnlWVXn@@lVI@WnU@mÅW¥aW_k@WwXy@km@wUm¦lUxVLV@UwJ°x@VX@Vb@`VX@VX@llIVbnJlIbVlJ@mÑ¯Lóa@KUakX@UK@wU@lWUUÝ¯ImW¯aLUKU@k»k@mwa@UnKWI@UU@akVWKk@a±bóUWKXUmkKUmLbUx@lmLX@@bVW¦UnJkbWnXl"],
				encodeOffsets: [
					[117642, 36501]
				]
			}
		}, {
			type: "Feature",
			id: "4111",
			properties: {
				name: "漯河市",
				cp: [113.8733, 33.6951],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@LUnVxnIWa@Xb@WÆIVlXaVL@VVLVbkVVUVlX@bUVkLVl@VVôU@Ò²@VbnôJVan@mWU@ImVk@WkI@wmak@wlW@w@VbnLVb°bVyXV_@aUKVVK@wUU@aK@kmbXVmJUX`knnK@aU@mwakb±@¯UUÝKUUU@WU@VkLUKU@mUmJUU@WVkL@UWJX@VVL@lVlUbLVKnêÆ"],
				encodeOffsets: [
					[116348, 34431]
				]
			}
		}, {
			type: "Feature",
			id: "4106",
			properties: {
				name: "鹤壁市",
				cp: [114.3787, 35.744],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ón@xVVól@¯zJ@bkl@@kVWLUVmVXbVJnnlLl¯@Xlm°bVlWb@bKVXnJ@VV°nX@@wWVklUK@knVVKmkUKUaVkWkl»nwl°lö@lXV°UVbXKV@aJw@UmkUy¯UUUaK@UL@mm@XaÇkkmWank"],
				encodeOffsets: [
					[117158, 36338]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/hu_bei_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "4228",
			properties: {
				name: "恩施土家族苗族自治州",
				cp: [109.5007, 30.2563],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VKbX@lbUVnL°@VlVnUl@VUX@aVmaXlaUUU@wmaVUn@Vnmmk@mU@knaaU¥VamX_@WUmW@_kVaVKnLl@VVal@k¥@kUW@kUKVUlUVÑW@kÇaU»ValmkUVUVak@aV¯_@WUkmVUlU@aalI@akkVWUaWXUWwWVbÆ@lalIVK@Um@UUW@al²a¯UağÇm@bkk@w@@WaULmxIUb¯@U`UXJmL¯aKXWUL@aknmK@aWUXaWm@I@UÅmVU@aUV@bVI@WkUbXkm@VakwUKULWKXmJ@XUK@mL@KUwVaUI@KU@mmnmXka@»V@@UUaw¯yVk@UUVmmkÛÈU@mWUnmxmlUbV¦UlbWVUL@UUIUmÇKVVbUVVxknLUxV`VX@kJVVUXWaUVVlUnmKUbkI@WULmK@L@LVlLnmUIWV@akn`VXUJIVlUVVbUX@¤mbnLmm@UXk@mm@Uka¥@kV@@KkU@aUKWbkLWVkIVk@UbVlmX@bU@@mmL@bn`@Ln@llVLVk@XVVU@`VXU¼k`VULka@VllVIn¤VU@@blÜbkx@bkLkKn@bn@@b@JUnV`UnVbVKlVXUlbn@°Vx@@bnVbUllVn@VVK@UnW@UVUlnkVÈÞxVbVVIxVaÆ@@aka@UVaU@@ak@Wl@nbVIÆ@Jk@L@VlXnlla@VJnw@UmwXU@aVK°ÒnllnLlbxnKVaV@l¦²nVl@llLx@XVVĶ@nax@U@alXUVaLÈþV°XxWXkK@mLnlUb@bxnLVlVVkb@UJ@xWXX"],
				encodeOffsets: [
					[112816, 32052]
				]
			}
		}, {
			type: "Feature",
			id: "4203",
			properties: {
				name: "十堰市",
				cp: [110.5115, 32.3877],
				childNum: 9
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@@a@w@kV@nbVK@nUla@laÅl@nlVakwWX@WkLaVmwV@anK@UlIXmWkk@@mmLkWlwk@U_mKXwWK@U¯K@UU@VUakmkIyUUVUmanU@mlwk@_mWXaUWU@Ç@U@aUaVwUKUIVkK@UWIXmaV@k@Vm@UnwlUamk@V@ULUamxUJkU@I`WkkK¯XWak@@W@IUVLWJkXkaÇVUK@kUmbmUUUKbkKWUkI@kKÝ@@aUm»nI@mU@UnWV_@aUmWbkLUl¯b@akkk@WkkJm_k@UV±@J@bnU@@WÝIUJVbXL@nlJkx@Wn@VkJmbLmU`VbUL@xVn@XV@mVVnnJVbUx@VnVUbVVx@nbUK@b@bJm²VUlbXzVJVJVbn@@Xmb@V@bVJÈ@Vnkn@°aVVV@XKnalLVmUnnVKVlnLWlXXKlk°XWkLUVVV@nU@ml¯nmbk@W`Å@mbLWm¯UxnêVèk@mbVnUK@kKmXk@@JUIlÛLllnbVnlJ@LULnlÆaVLnV@nkVJ@lkô@²bÆm°wLWV@VXKVXI@W°ÆVKb°UJVIVV¦XKVL@lInaVÝnUl@@bX@nmVL@lVLlVLVUnbVW@xXnbU°¤V@a@kWKUUn@VlnL@UV@Ü»@mX@V_akaÞ@VK¯@kkW"],
					["@@mUkUUm@nllVKXXVK"]
				],
				encodeOffsets: [
					[
						[113918, 33739]
					],
					[
						[113817, 32811]
					]
				]
			}
		}, {
			type: "Feature",
			id: "4205",
			properties: {
				name: "宜昌市",
				cp: [111.1707, 30.7617],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°`U@blUbUVlVknUbV¼Èb@lXUÒkVUVVL@lVX@ll¦k@UbU@kmKULUbl@`nXV@XW`nUbV¦bmb@lV@nnlmnUm@UVnb@xVVVkbWnbVnVa@an@UaVUJXnWlXX@l¦@lKÆXbXV@VV@°¯°xXxXV@nV°UVWU_VWXkmaVnWVkn@lln@lb@UVLXWlnX@aXUmaVK@UXUU@WVIWXXVU@¥VK@UÞa²LlV@kV@UanKma@UVUnK@UVLXyVLknJ@UV@@UXKWUXaV@Vb@mVLnKWm@aUUm@@UkK@UlaLXKWaXI@alKlmUk@wVKXL@m@WWn@UVa@K@wna@aW_XWWkXbVW@k@U¯WWwka@UUaVIVkU@m±@U@@wVKka_@VV@XUVwU¥yUkm@V±ÈUKk»ÇLmmLk@ó£kmWwm@UIkWKXwWU@kLwkbmabkK@VLkmWIUKkUUÇIǫJXÅJULVÇLUV@UK@kI@WVI@UaWmXVVUL`±kÅLmKkkÅ@UaXXxWVXVbUXll@bkJb@bkVUVlnV@X"],
				encodeOffsets: [
					[112906, 30961]
				]
			}
		}, {
			type: "Feature",
			id: "4206",
			properties: {
				name: "襄樊市",
				cp: [111.9397, 31.9263],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@Xl@Xb°WlLXl_@JlVVInwVbVK@@UnlVbkmx@VUnl@U@nbWXJ@VlLUVJVLUxVb@b@VÈ@XVVWbnX@`lkx@nmVnbUVVVzlJnlVbUV@@V°L@VXLWxnLV`l@kxlXnK@nl@XlWn`Xnl@@UVa@VÈK£VLVanW°U@UVU@`VInmV@nV@Xa@aVW@UalkXKblIyÆXnlJXbl@@VV@nklU@`nVKLVKVb@VU@UÈKUVKIlUX@V`lIVbn@nblVVmV@@XXJUVV@knKVn@`@XVnKwlLVmUUU@U@aXL@WlU@UUW@UmU@KkLWaXkWmXUWm@U@nk@UmK@U@UaUVUUKV_@al@namWUI@KUK@aV@WUIb¥ULUJkImK@U@KV@U@a@UkU@K@wVaUwlU@mUULmKUkV@@anIWmUK@I¯mKkl@LUb±lUakLmk@WwUKÝVUIm`¯n@Uk@makJU_@Jma¯ImwUVkKbaUÅ@wWaU@VU@mXIVmmUkJkwm@mIlUKWzUK@VmLUV@VnbmLVbU@@lkU±KbÝV@UL@¦VWUWXUJ@XVWV@VULnbWVbW@kmWXUK@Vkam@kkm@UlmXUnbWlUXV`UX¯VmUU@Ul@Lll@nnJ@LnWmbm@b`", "@@kUUm@nllVKXXVKmU"],
				encodeOffsets: [
					[113423, 32597],
					[113794, 32800]
				]
			}
		}, {
			type: "Feature",
			id: "4211",
			properties: {
				name: "黄冈市",
				cp: [115.2686, 30.6628],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VVUnWVXnVJ@U@V@VXV@@IVJUn@V@L@KlIVlVanLVbnVlIn@@a@Kl@@IJlI@aXU@KlKkVblJXUVlU@VbVkVKXn@VlxVa²I@VlVUxln@bJXklaVWnLmÅ@y@k@aI@W@aXIlVVaV@nnlKnLVW@IUa@a@KUVVlI@wXKVV@IUla@lUXwWnnalLlxXLll°@XwVKVaXIlnb@nln@Va@U@k°UmÆUVaXIJV¯ÇUmmkU@WaKmakVm@U@aVKkkmKkVmIkÇ°£@aUUVaVVnKlkXmk@lUVaX@@Um@UmlUXVUVU@wK²¥Ua@I@UVl@UV±UIUÇ°»VkUmVI@a@Umĉ¯V±bŹĖğaÇL¯lmkX@óĀ@mÝêb±WkLn@xXx@@b@V@LW@UblţX`kxWnXô¯¦ÆV@L@JVLxkK@V@bkz°llXz@JUlVla@XUVbVKXnW`XXV@laVV@VX@V¯xx@xULVbUJ@n@LU@VmmakbUK@bIWWUUVkUmkLm@VJkb@nUJ@`V@kXaUaVmmLkUmJ@Uk@U±lkzmJUb@bVUxVXU¤L@JX@VlL@JkLUVU@mnUl¦@V"],
				encodeOffsets: [
					[117181, 32063]
				]
			}
		}, {
			type: "Feature",
			id: "4210",
			properties: {
				name: "荆州市",
				cp: [113.291, 30.0092],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÈJVlVVLXJlnK@UlLanblaxlK@XVWxXLlJ@VnXxlnô¤l@nKnÈKl¼VL²ÇUn@VlzV¦UxWVU@@U`lbUL@xV@²@@nlVUUJVb@VlbXx°XVWX_VKUwVKVa@UVKUUVk@KnblaUU@wnWl@UX@lÆ@@aIVmUkxVJUbÜ@Uk@WWnk@VVm@I@m@Un@mXUlVlUnJ@knJVU°@@aÆLX@llL@¦nJV@XblLVa²U@UlW@VX@`@LV@@bXJlIXml_lJU°bKÆLnVVl@öVmXaVIĢllUlVnLVlX@@bannxVLbn@°ÆXmmkĉ¯w±Uċ@KÝÅƧŃÝçUw¯m¯k@WkV@¯UIUJW¼kbUwk@W`@¦Uônb@VÆlÈ@VU@£UWWnUÆUnmJkUÇ£VWUI@aUU@WkI@Ua@JW@k£kaWVUKmnkKbkkVWbVmUUmwU@kk@UakUUa@V@nlx@lUb±lUbnnWLUyk@UamUK@mlk@Wb@VXL@x@xWI@a¯¯V@bVn@LkKmL@`XmKmVU@@bkL@V±bk@UaaLKUVIWXamVVbUK@b@Lm@UWkxULWVUnm@UlUX"],
				encodeOffsets: [
					[113918, 30764]
				]
			}
		}, {
			type: "Feature",
			id: "4208",
			properties: {
				name: "荆门市",
				cp: [112.6758, 30.9979],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@n@lxlInVUnWJ@nUVV@Xb@xVÆbalLVUnx°JnbI@V`lInbl@@V°mn_VJÞUVLXx@nllKVb²kVa@KlknL°@JVLXnmJ@bU@VlnLVKV@nX@lUKVaXal@VKn@¥°L@UnwbnaV@KV@VUX@lVXI@KW@@IXWV@laVLKlaXUVVnkVWV@lwXblIXWVkVmaU£VaUmVIkU@y@WakKUamU@UUK@kmK@w@@mK@LV¯U@WwkmULamVVUU@IbUKUakmm@UakLmxU@UÒWlULţÿmwkIUm@akÈblW@UVUUk@JW@XkWWUkUKUIlw@aUWknWUUmnIWaUwVaÛaVUIwVlUnJ@bÅ@@kVWk@mX@xVVkbma@LUlVVUL@VUbULVxULW`UX@V@lUXWaXlWXX`@bmb@x@LUb@VmXX@@nWKUL@xVlknkL@bWJXbWLKkb@VlL@Vn@VV@bnXmLUK@nUaU@WbXVWL@VU@@V"],
				encodeOffsets: [
					[114548, 31984]
				]
			}
		}, {
			type: "Feature",
			id: "4212",
			properties: {
				name: "咸宁市",
				cp: [114.2578, 29.6631],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÞÆLČ@V²°xĊnlWnÅ¯m@aK@°nJwnVIUaÆJÅ@wwVXW@aV_l@²V°lĊwlaXLwlUkalVVaX@lVXI@aUXJ@U°UU¥VIVKVklanLVa@VÈIVV@nk@aVa@mV_@aK@klKUa@UnKWk@@lU@@UW@@nUWUwmaVIXlV@mLXblJ@kV@kk@KU@WkUWVÅwkLmW@UmL@lULKULak@maUUÝwUJIbKUU@aWK@kUWVkUwVw@mÝ@I@wkW@aww@LU¥kJ@nVJIkVVnkVUkyUIUl@xWUkaW@@°kzWxkLUWmzk@@bVVVb@@XlV@Vl@bVbUn`Wn@WbVVI@`LVbXLV`mnU@@lL@LUak@Lk@WbUJn¦@lVb@xVb@n"],
				encodeOffsets: [
					[116303, 30567]
				]
			}
		}, {
			type: "Feature",
			id: "4213",
			properties: {
				name: "随州市",
				cp: [113.4338, 31.8768],
				childNum: 2
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@n`lwkUmUVWX@lk@VanUĠ¼V@@mX@@nVVVXLmJVLnK@bV@@J@VUn@VaVUUUVWVLV@@Kk_@almaVkUU@WVVUVLXmmk@wUaUKUV@°@kmaUaÈmWmUVklaX@lVnxl@@UnaUk@VUVwVKn@VVn@VbVJUknUmmVmk_VwKUUmVak¥@UVKVIkW@UmIVWkIVkmmLkwmVU@LUU@VVXL@JmLUbmK@UUKmkKUUmVUaUnÇlk¯mJUnmLUaUJUaWL@UkJU@aklkU@¯@KWLUmUUWVkbLUKkbU@WX@JX@@LWJkUW@UVU@@LUmbamx@V¯K@¦mULk@WbUbLkVW@kVVxUb@x@LlV@V@b@VU@L@VLnlJVIVK¦aVJ@XU@bLV@LVJnXmbk@@bU`VLUVVb@V@VnL@Vml@@VXnWVXnWlXblK@LnV@VVX@VkV@XWK@bVV@VV"],
				encodeOffsets: [
					[115830, 33154]
				]
			}
		}, {
			type: "Feature",
			id: "4209",
			properties: {
				name: "孝感市",
				cp: [113.9502, 31.1188],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VnXK@L@°lVlkb@VlI@VXKVbVIVbnKVmnI°lÈkVmVbnUVVlLnVL@VnLVanK@IWKUUV@V@KVnUlxnKlnUlJUXnJ@VlXUJUL@Vl¦UbnVVLUxl`UnnnmVVlnVKbmVX@a°Ý°LaXJV@VUnKVXVK@LnKlLUbVVX@VwVJVn@@UU¥V@@UUK@maUVUkkJ@L@K@UmVUI@JU@W@U@UV@UIWmXUVmUUÇ@UVmIlmnmakK@akaW@UwVUkKVnUlKVwkVU_WKUkVW@UXaWkUa@w@VU@XaW±@IkbKb¯L@WXkW@UakL@UV@UmVUmL@UXWVL@aUVUUUVU@yUUIUa@wUKWVU@kWk¯UkwVKLUxK@nVxUlUUWVUmw@wUUyXWlX¦WbUV@U@blbUVVbXXl@lVL@bk@lxkVVnVx¦`UnkL@V@L@@@xnL@lVL@VnVVblLXb@@zlVUJVnUbV¤bUnUlWXkJWakxU@UXml"],
				encodeOffsets: [
					[116033, 32091]
				]
			}
		}, {
			type: "Feature",
			id: "4201",
			properties: {
				name: "武汉市",
				cp: [114.3896, 30.6628],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nbnmknJVUÈ@@U¥VknmV@VUlK@IkK@UW@IKV£UWVwU@aVanIly²kVl@@VnIlVnKUnVbblWU@@_VI@mlaUIn@lKVnUlVVXXJ@aVLlanbUnV@@K@mVIUaVK@ww°w@UW@UUUkbU@WWX_WmULaVU@WkbkUV@IWyk¯kly@a@UlLwUK@I@KÅUW@Å±Um@wl¥ka@@_Vw@ķa@akw@kKW£XVUVwVwUaU@VUUxWKkbĉx¯k±Uk@U`@bWXUx@xÆÅIVbUJmxIm¯@UmxnUVVbnJV@L@@kV@bVn@UVULlx°VXllV@XUVL@xVbJVV@zUVVVUVV@bUKWX@VnKUVVnU@@VlKVb@lXW@X°KaLla@JX²Wb@UV@@xVbXlWb@VUXVlXLV`UlUxkLmVUlLUVVxX@lb@blL"],
				encodeOffsets: [
					[117e3, 32097]
				]
			}
		}, {
			type: "Feature",
			id: "4202",
			properties: {
				name: "黄石市",
				cp: [115.0159, 29.9213],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VUVV@VbUxaWUblUVmnKlX@bXJVIlVUxVVVIUzlx¯@VbnL@xx@UVaXKb@XkWU_Vm²klWXVKl@nXV@@wmlK²XaÞén@ôÿ@lWn°kUKmmUÑUmm@wkImWU@UakL@bVLUVċ@bUK@alIXKWK@nXnKmkUVw@¯b@LlUL±Wn@KULUaW@kL@lL@bU`@nUb@bmlU@UÇJ@UUbmKkblUULUJV¦¯V@VWIV@bWJkUW@UbkUlbkV"],
				encodeOffsets: [
					[117282, 30685]
				]
			}
		}, {
			type: "Feature",
			id: "429021",
			properties: {
				name: "神农架林区",
				cp: [110.4565, 31.5802],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@n`lIXll@ll@b°aVklKXaVn@bU`mX@VV@nmJn¼V@bÞ@lL@lJXVlLaVLVnVnalV@VLÈUlblWXIKVU@J_@annaXm@KmI@mkk@KVkWWw¯w¯°@UUU@WaÅWkL@¥@kWWXkWmIUVVbm@@bUbmUUbW@UVk@mVkU@U¯mKVUkaW@aULÆVbb@VÅ@Un@VLWl¯L"],
				encodeOffsets: [
					[112624, 32266]
				]
			}
		}, {
			type: "Feature",
			id: "429006",
			properties: {
				name: "天门市",
				cp: [113.0273, 30.6409],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@K@UlKVm_¥UwUmlUkwl@@aUK@kkWWUaVUka@aV@VUXaW¥Xk@WWIklm@ÅxmIVÝUkxka@bWJaUL@W@l¯UULUbkVUa¯bm¤UnÇUkmUUxb@VkXÇal@bVnlJnxŤĀVKXkVÑV@nwlKVbn@nlVbVLaJ@VVUnUbVKlnXxV@°U@KnL"],
				encodeOffsets: [
					[116056, 31636]
				]
			}
		}, {
			type: "Feature",
			id: "429004",
			properties: {
				name: "仙桃市",
				cp: [113.3789, 30.3003],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VK°VkX@@VKbXI@alblwÞVUnJÆwn@lkXJ@XWVzV@xnxVXUVVVkUw@mLVwKVU@Um@alU@@@KUmIUaVUmnwmwmb@aW@UkmKkUkVġkUJWbnUõ@UkmUÅKL¯aVkIk`WnkJ@xVLUVVbUbk@WlXbmVxnxUblbUV@@VUV@nVL"],
				encodeOffsets: [
					[115662, 31259]
				]
			}
		}, {
			type: "Feature",
			id: "429005",
			properties: {
				name: "潜江市",
				cp: [112.7637, 30.3607],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@UbVxbXmJVnXVlmVX@bkxVJVLVlXXWlX@@IVlVUaVwVlnÈVVmn£°aVbUlaVUK@mVU@U@VUkaVamwUwnWaXkl@VaUaVUUK@wWI@aU@@K@_UW@kX@V±VUbkKWaU@mI@¥kKkW@ÅK@b¯@UVmI@lmIkVkUWVnm@@V@n@JUnU@mlXXl@@V"],
				encodeOffsets: [
					[115234, 31118]
				]
			}
		}, {
			type: "Feature",
			id: "4207",
			properties: {
				name: "鄂州市",
				cp: [114.7302, 30.4102],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°¥WóXmlw_ŤWkVaX@@K@U@a@WwU@mWk@ULWkX±lUnV`XWl@aWLUb@Vw@wmKUa@°kwyVUJUUVwkUUJWI@akWmLUnkVaXVbUxUVWX¤lL@lx@bb@ĸUx@`@lbk¦@xn²VÆX@"],
				encodeOffsets: [
					[117541, 31349]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/hu_nan_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "4312",
			properties: {
				name: "怀化市",
				cp: [109.9512, 27.4438],
				childNum: 12
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@n@b@XnJ@k°x@aVUnlUXnV@@VnJWUJVnIVV°UbVVVL@²LUVa°V@aV@nmUXblLXWVXVmVLVK@an_`@X@l°VlXXW`nX@Jmn@b@nV@Lm`bUbn@VUVl@nIVbUlV@LkJUnVV@xVblVUbU@zUKU@mx@xUnn@@WV@lbUb@nVWXXV@VIV@VUnJ@VUz@JWbXllI@VXVVL@Vn@Wlb@lXVlLaV@VJ@XX`kVwVl@bkbUlVXIlnLVamVwV@@nV@XaVJVbX@lwV@n@nV@VWnIVVUÆ@Xxa@IUUKmk@mVIXmWUVJnUVU@anaVwkU@UXa@W@m_@a¯@@K@UVbnK@blIlbXa@WW_n@VU@¯bmyUkUJÇÅ@WU@kWKÅwnm°KVkmankVWnXVWV@UwXkV@mUlLnaVaX@VUn@VnVK@xlnXWU@a@@klakVwmUaV@wmIÛ`m@mVUXmlIXVI@K@aU@UaV_UK@wkUmmUKWXmVkUL@mU_nK@aVU@Ukak»@U@ymU¯UUVKkam@nka@mwkLWb¯mka_VaVKUIUw@kKmU@WK@UnmaULkU@wUalWV¹U@@WUI@WU@_@W@U@mU@WbbUK@Um@@UmbUwWWkk@WUa@anUUwlWUwUU@wlJVUnnV@@mnI@mK@U@wa@wUm@_mVUUaVUk_kċUkVWL@mlU@kn¥W@UwUWV@VÝU@lXLWVUbVLXlVIlknmU@VUJk@@@kVmwmVkxU@@XmVUb@xnKVLl@VxUxkIU`@bWVXX@JWL@bkb¤@bmUUU¯Kkmb@VVUVVn@@Vb@`lnxmblUnbk@xUmV@bmWbUV@VJIl@nVUbK@nn@VbnJVIlJVkXJ@X@lmx@bnnWVXJWXU@UlU@mk@@llb°xIUbnJ@VWbXVmI@JVX@bk@bWL@JUXUK@U@U`n@@Xm@XVW@@nX@@`ImxU@@JUI@KLmK@UÅUUV@VW@¯kUU@UamVUUmJ@nxmLKkmJkwkKm_mKXU@aU@b@Wk@ma@zUJVUmbUlU@xnXlWlXXblK¤V@@nUVVLkVl@Xb@VVKnXKVx@znW@X@@lVK@X@JXbWbnn@JUamLVVXIVxnK@aWUX@x@VnI@WlI@anVIVxkl@lbXXxVVVJVInbV@@ln¦ml@XXVWbkJWb", "@@XLVKVXVKUa@UUUmV@l"],
				encodeOffsets: [
					[112050, 28384],
					[112174, 27394]
				]
			}
		}, {
			type: "Feature",
			id: "4311",
			properties: {
				name: "永州市",
				cp: [111.709, 25.752],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lxUXVlXUVnlVĢJVbUXVJV@XUW¯VIUK@klW@Un@nl@V`XUVL@l@Vx@XXW`UnUbxUlVnUVlb@VnJUVVVInJlUVnwVklKnwLVJVV@nIV@nbVa@KVVVUUaKV_nVVJ@_VWnV@n¥lI@anl¥X_VKlwVlULUVVV@U@VXL@IUmn@VU@wmKXUWU@m²l@VIXWWkWUkWlkIVamUXamUnmWUU@@UnlK@XJl@kVUk@mWKXkl@@aVU@UVWUUVaIn`VUVLnw@U@K@U@w@UVmUU°K@UnV@bV@Xk@KVm@amkaU£VWUUmUUwm`UbULkaKXU@kVmU@aV_UWVIn@yXXK@klmVV_kWVUn@WUU@UmaU@wnwWanUmmXkam@UakLmK@bxUUUU@Km¥Va¯@kUaVUlmUU@mUUÇmUkUybbUaXUWWbÅLmL@VaL@WWXUKmmk@a@UUKXW¥kU@VUkxmVkUWbUJnVJ@nVJXzWxk@lVbUX@VVL@`mbUnUnVV¼k@Ulm@mwLb@lmLUK@UamWkK@£Ua@UkJkUmbVlkX@bWbUVnnUVl@bbVK@VX@lbV@nU¤x²Knblb@xVô@l@b@l@XWxnVl@VV@XLVlLUUXV`bXXmJU@@bm@UUkLW@UlUKWUUbwUmL@nklVVmVXXm@@bUKlÆnXkllVUVVL@nUbV@V@nnV@xUn¯U@JW@UX@xĉ@`m@@LV@b"],
				encodeOffsets: [
					[113671, 26989]
				]
			}
		}, {
			type: "Feature",
			id: "4305",
			properties: {
				name: "邵阳市",
				cp: [110.9619, 26.8121],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XIlJIVVK@n@VVVKnLVwVmnLVK@U@wJ@wVIÆ°X@ÜÈUÈxll@kn@VwVaXJWXn@@WVL@UUKVKV_U@@aVKx@UaV@lk@XylbUaV_Vnal@WU@aI@aV@@aVUl@XmUXWaXml@@kk@ma@V_UnUVUUWJUa@kkaWLUmk@@LUVWUkJWkK@¼UnWJIkV@b@JUIm@UlVm@Uw@a@kWXWKUknW@WUU@kmxUkVmIUJUUVmI@UkaUVUmVkwVaVmX_WW@Uw@@kUKWVU_k@mm@@VkX@lVLUJX°WVU@UIVWUaIUġmkVUkWUVWkwWXk`mI@¥kUVUUn±@mXkWknVUVmmU@@XVUk`@Xk@¥¯»mbĉó@mkU@kUKmX@UnmL@lULkKUWUU@bUaUn@Vb@l¦Ub@l@UKmnKUnlUVVbUVn@`Vn@xb@x@VL@nmJ@nU@mmUVkI@xVVVxkXVxmV@bbXVl@XlXVxna@Vn@@VVLaXaV@n@@V@X`V@@XVJ@XV@UºkXVb@xlVVKnbm@VXLV@nlL@VxJVULUb`lb°nXalKnx@lbmn@lbULVV°nV@z@Vl¼lb@VUV@bmLV`@nKlVnUXWVLnnlV@xVLU`VbV@"],
				encodeOffsets: [
					[113535, 28322]
				]
			}
		}, {
			type: "Feature",
			id: "4310",
			properties: {
				name: "郴州市",
				cp: [113.2361, 25.8673],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@²zVaVlnVl@nVkJl_XJlIVmnL@mV@VXn@lV@XzV@lyV¯²U@UlJ@XVKnVVIXl@UVLV`@n@JI@mlIKVLnUlVUVVLXaKVLl@nb@WXV°KUnVVL@xVJL@b@LUVVVUVXbmbVbn@@lUbm@x@XVVV@@@bkImx@Vm@Xbb@l°XU¤aLmnL@bl@@VUX@VxnVanLnW¥XKVwnUWXmVIUWÆLVxLw@wVmlU@¥XWUkwlÇn_UwWV@VU°wnUy@aVkVlnL@lVnw@VlJ@bXx@bVKnb@U@WVUl@@Vnbl@XLlK@aVLVKnxÞn@aLlmUaVUm@ÅknUmaUKmVk@mkk@UlWUkVm@w@kUU@WU¯¥@wÇ@aVIlUV@kUWU@UUm»@k@mKVkUKUwaUaUa@kkUWJkImaU@UK@maUzk`@zy@XmJkL@UUJmUkV@z@kkVmK@¦UbWL@a@UbmKmwUKXkVUUkmVkw@UUKmL@WUIWaJW_k@@WmI@mk@WkWULUUVKUUVm@Ub@nUÇ@U@wV@Ua@aL@akl@kUJwó@@L@V@`@J@xnnmV@bkJmUó@nJWUUmU@UV@LkWlnnmVXbmxxV@nbVV@XVm@UVlXU`Ukn@lWLWzm@UJVXU`@bVUn@lWVLlbVKVan_VxnVVVUXV¤bnl@bUn@LWlU@@amU@V¯LVVUn@V@x@V@L@VmxUKUVm_JUbVV"],
				encodeOffsets: [
					[114930, 26747]
				]
			}
		}, {
			type: "Feature",
			id: "4307",
			properties: {
				name: "常德市",
				cp: [111.4014, 29.2676],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lUmkUwUyV@VW@¯VaVmUU@KVUVUVLnaWnkUÓV_@mVU@Ýw@ka@kVmUmK@IkaUamKkXWaUW@WUk@@KVU@aU@L@J@XÇVUKVak_mWkLWakVUbmLUUmlUVKUU@kUWW@UImJ@xkLkKm@@X@óÝ@UUk@UKVULKXkWWbkaIUWU@mUk@WLaUJġ@@XÈÆVIlVnz°aV@Um@X`@XWbkakJ@amLaU@V@L°@@bn`@@XWb@VVlUxmb@bUVmVUIXVWnJU@nnlVLV@JbWzk`m@UVK²VxkLVl@Vn@V°xVKVkVVlUblx@bUÆ@@nVnUllkx@VW@@VkLWxUL@bÝ@kKkVõV@bkXVVUV@VkUkVLkVa@@¯xUxmX@JVb°WXkK@Vm@kVbbn¤xUXkJblxnXÆK²l_@Wnan@UL@bJnIlV@lU@@¯ô@lWȂIVKVmU@aXaV@lwVXn@@K@UVKUUnUbn@lWXlJnULKV@l@²a@UlK@aV@naVXWV_nKlL@KUm@a°U°@VXL@a@wWmXal@k@VLnV@@bl@VnX@mwVa²aVU@mk@"],
				encodeOffsets: [
					[114976, 30201]
				]
			}
		}, {
			type: "Feature",
			id: "4331",
			properties: {
				name: "湘西土家族苗族自治州",
				cp: [109.7864, 28.6743],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@KL@wnK±nnm@WUkÜÈn@n»@mVamkmUl@VnmmU@wUan¯VKLnVWlInyWUI@WWk@KXUn@mnUmU@WmkV@kXaaVaUmIk@kaX@Um@UKWU@UkJWkXa@IVy@UmIUVU@UJU@WXWmU@VakaU@@Xm@Vm@wnwV@VLyV@VakUUa@wUUVmlI@KUVkUamJk@VU@UmVaan_@KmU@@anm@ImWX_WWUk¯@k@W_m`@bULUKUnUWWXkKWaVmnU@@b¯UUbV±K@UKUUVa¯UUmJUVIXmI@UU@WmVmkUV@b¯w@lmI@W@a@m¯LXbmJVLklWL@V@XXmbVVU@@VU²Ul@VlX@b`XxzUmkUVÒl@bXLWxXVl@VbkLma@nmVmULVbmVUb@lnzmbUÒVl@°nLVlJkn@bmJk_VmmkblxÈx@LUbxVb@Vn@JmLVU@nV@¦VbnJ@lVVbkxbm@UxVLV@n`UnVVVkl°zxVb@VU@@ÆlXnWm¦nbVK@XVVUVVl@XKUV@nVL@WnIWXLVKVLlxUbVKXVWbn@@UnKVLVbJU@aVU°b"],
				encodeOffsets: [
					[112354, 30325]
				]
			}
		}, {
			type: "Feature",
			id: "4304",
			properties: {
				name: "衡阳市",
				cp: [112.4121, 26.7902],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lV@XV@mXVlXLWX@l@bVxn@UVkn@VJ@I@alUJXIVm@»LXllIXVVU@Kl@VnXKlb@lVbXIVVUmVVU`@nbl@@lXLVVVKVbnXWJ@VXbWxXbUlVK¦nLVVUVVbbK@ULnK@Un@VxlUV`UnnL@VVL@JV@VUnxnKVbV@@VIVUnJUVUl@nWXllIUaKVbÞLV¼²`V@VIUwlaVmXa@IWanK@U@mkVVUVaX@lnaVLÈ@¥@kkJUWJUaXkaUmwVXJ@_lWUU@¥n_KkamUK@amKnKbV£¯W@kaWan@@UnwlJ@a@@UUU@Wwn@Va@km@UanaWaUVUUVU@K@aKUI@wKUUVm¯LWUX@mak@UKLWbUKVUkUmVUKLkJ@nJ@I@mU_UK@VWkUJmUUL@WkI@V±VU°kzU@Wy@kUm@UWU@@nmKUnkJWIk`IUlmk@mUUkUb±yUX@VUV@bk@WlXL@nVlUlk@WI@kLm@VV@XVmnnVWbnVUblJXkVlXXlWXUJk@±@nXVWVnL@xUVm@Vn@JWK@UV@UUVUVKUkkxULW`k¦m@bkJm¦U@mUX@`UImUU`LVbUVUU@LUbmaU@mJU@UUIKmxkLUl"],
				encodeOffsets: [
					[114222, 27484]
				]
			}
		}, {
			type: "Feature",
			id: "4306",
			properties: {
				name: "岳阳市",
				cp: [113.2361, 29.1357],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@wUklmUUmU@@UVm@wUaV_mmUKmwkIkJmUUnm@@UUbUKUmÛamm¯xVLkbÇÆUVUzkVUlUUKWLX¦W@VUUUaKUbmLKm@akU@amVaUUVIVWkk@wk@@xmLlmÅwmbVlXlÝIWVkK@kkVL@VWKU@Ublnam@b@bnW`@XUJk@UUWKk@UKnn@xmLUVm@kbVbVnV@Vb@KnVLWXÆVĢ¦VblnUJWz@ÆVóUVbkVaÅx@¦lVUbVVknWKk@wKVUÅl@zkb@`m_mJ@xXmbVb@llV@n@llbXLUXalUlalVnwnLVKlVbX@@IV@blJ@bVL@VVVUXÈ¤VnkVÑXmlbnVKkÑÅ@UmaVç@±XUlIxlV@VaX¯lUVVUVJnV@°°n°Vxĸł°¦b²¦lJ@U@aUK@kUm@_m±VIXal@Kl@bV@KK@km@UmUUaK@_UJaXU@Xm_VmUk@WUk@kU@a@m@UaUUU@al@nyXXWWwkly@¯n@@bnV@k@mVIVlUUmlUJUwIbXVaUal@Kb@VKVkXVl@VkUU@ylUVVaVL"],
				encodeOffsets: [
					[116888, 29526]
				]
			}
		}, {
			type: "Feature",
			id: "4309",
			properties: {
				name: "益阳市",
				cp: [111.731, 28.3832],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÆxXL@lV@ĢVIbXKl@nVV@XVJlbXalXWLVKUVLl@VV@ôÞ@@Wn@lLlK@wnIVJX@VX@lVVULVnkVVnKValUXblKnXl`UbVLÈU@W@IKV@@bUV@L@lXV@VXXblWnLVblb@JnLVUn@llb@x@ÞUV@nU`VÔmlXmbUKUVUV@LVVUnUb@°UX@UVzVxnlVkVnlVnaW@wnIn`@_la@ykÆVULxl@XLlmUUVakU@¥ÆwblUUaôVU@ÅXyVImkUaġ¥ÅUWXKmU@La@UmUUUalan@VUnK@wmmL@VlXLVVl@VI@WX_m@a¯mKUkwW¥UK@_UWWLUVkUWL@WUIkVU@JwkLUUmJVI@WkXm@VmkKUIU@mmm_@VUV@kJċwUU@KUWkkW@IWW@km@klwkWVkkUV¯m@kWLU`mIkmkXm@@`@L@xUKWkU@VL@JUU@mbUKVa¯WVnL@`lXUVkU@xW@UbUWVU@UJ@lnU@mnÈmVa@bULwUb@@VkxmUUUVK@IUmk@akm@wmIkK@bVWXkm@wULUmm@UVW@UbmbkKVnU@WlxVU@UXmWUXmlnbUl¯Lmn"],
				encodeOffsets: [
					[113378, 28981]
				]
			}
		}, {
			type: "Feature",
			id: "4301",
			properties: {
				name: "长沙市",
				cp: [113.0823, 28.2568],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lVUllXkx@lln@XX@JlXXlV@LVVČxlI@VU@Un`nnV@VJlLUnn@lW@XUJnIVVlKx@IVlUVJ@XXKlVVUXKVX@`VLX¦lxVnL°an@bkmVaV@XL@UKlU@llLXUÞJWkUknaÆxnknK@w@l@xllUXUJVVUbn@blV@bnLnKVaLVbVVUX@W¥XKVLVVklUVyUVÈÅlaUK°wnnÜbnVVLaVV@n@VmnVlIlJna@Valkn@na@amwm@UXwK@aUUVUUaVawWK@kU@UaW@kKUU@kW¯XWan@kmmÅ@@I@U@KmLkaVUKkLWVUk@UVmU@am@kkk¥UVUKmaUb@UbI@aKkkWm@W¯K¯b@VmaULVxUXlVk@UxVJVbUb@xUL@ULWWLĕmxVVL@VbKUwaÅ²WwX@@WUWLU@VbkV@aU@@VUnmJ@VUn@VLUK@UmUIk@UÇmU@@UW@J@LbUmVI@aUmW@@bkXUx@lmLUbm@UbkJ@V@XmlUbkKm@ma@kUaVU@aUK@mImJUIkVUVUakbWwka@UWKkLUamKUXm`Å_UULmaU@@lUV@X"],
				encodeOffsets: [
					[114582, 28694]
				]
			}
		}, {
			type: "Feature",
			id: "4302",
			properties: {
				name: "株洲市",
				cp: [113.5327, 27.0319],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XUnwĖKXXVK@VK@wVaUaUIVwl@kUVWUwVKnb@U°a°LX@XnllL@bJVa@VanbVLUV@al@@UV¯ÅÇ@Ummkw@¯yVwnUVVVUkmWVnKVUa@WXkVKn@lUVUVVVXIlV°VnI@VlKnV@mwVm@LXKWkU¥wWw@k@mX@KX¯V@VUVa@VnKWkV@VUkm@aWa@wkUWwkmV£VÿXUVL@mVIXaò@nW@aU@@am@aUUUmXmWUk@nUW@_maVmwUkamaUL@awW@akI@UxUm@kmKUklU@bzVm¯xUVU@XVxm`kÈlxXVW@¦kVUn@xxKUwÅKVXUJWnXmVUxWL¦XmmKbmUUwW@UV@k@VLnlbLm`@¦VVkX@`WIUxVnlbWVbXIVlI@l¦Ç@UKmbkW@UbUVUl@n@VmLXb@JWbUnkbVxUJUxWXXlWL@V@V@XXJWxzUVVVVKnXW`@bkIUlnLVJUbUIWVXlWV@XklVbnn@xl"],
				encodeOffsets: [
					[115774, 28587]
				]
			}
		}, {
			type: "Feature",
			id: "4308",
			properties: {
				name: "张家界市",
				cp: [110.5115, 29.328],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@InWVw°w@@blUKlUlVU@VUUUlW@aöUlUlLÞ@@aVKXwlK@UX@@UlwkVkUm@m@ÅV@akwVaUkUUlUL¯w@UUm@UkKlw±UULVn@l_XyWwÅ@VUUmJUXU@@mmU@kxW@UaUIWbU@@mU@UxnUbmKkWJkUVal@aUkUxlW_@WUIU@bkKWUJVnUbbWblU@nl@XnVmV@nmWV@LXl@XJXVmzkJUXmKULm°Vb@xnVmnUk@VnnlUb@nm¼m@ÛÇVl@Xmnm²mL@xK@LUl@nULÆx@V@VXVWbXXl@nLlm@bVKXWL°bnU@VaVU@mVwJnwVK°zn@VVba@Ċ¼"],
				encodeOffsets: [
					[113288, 30471]
				]
			}
		}, {
			type: "Feature",
			id: "4313",
			properties: {
				name: "娄底市",
				cp: [111.6431, 27.7185],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lLnJ@xln@bnlV@JLVUVnVlw@U@VaxVK@abnUmÇnV@km@I@VUVVXVaX@@wlVVUkW@_mKXU°UbVLnaV@V@IUKV@XlVL@w@K@_n@lWlnnJV_XK@l°nU@WVU@kV@nbVKVl@nLlLXU@lmkw@nW@UKVa¯IVn@@aVUUKl@nXVKVn²aXblKnLlmVI@KUU@akLUaVaUXm@a@wVUVKnLnWlXln@@U@anUVm@UInm@IUK@UmKVmU_kVUwm@@VmLK@VLaUaVUUUmK¥ULkVWaXwWa@UXImWUaULUUWKk@WnXbWVWnk@UV@bU@@bJ@bV@XkmbUU`VbkaWz@klU@b@VwUL@bV@U`ULVL@VUK@Xm@XWWIUbUxm@@lkkÇwVÛÇW@¯ÅUJ@xIx@@VULmKUnUxmKULUUm@@ULUJkIWJ@b@LJUWkJWnUV@nnÜ_nJxU@VbnUxlkb@l@"],
				encodeOffsets: [
					[113682, 28699]
				]
			}
		}, {
			type: "Feature",
			id: "4303",
			properties: {
				name: "湘潭市",
				cp: [112.5439, 27.7075],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Æ`n_VWnLVblKXL@VlbXxlaVbUVlUVJnInJ@VL@bUVVb@lnbn@lLVank@W@UlIVan@VanK@kVwlW@aX@Vn@bUJVna@KIX@@VV@nVÈl@VJn@VVLK@UVm@UnIVm@UV@@blUUaV@XKV@XW@XxÆ±bVxLUa@UKWk@wmmUalk@WXUWkXUVJVaUImKVklJ@aX_mWULUUVUyXwWI@W@U@UXKWkXWVwU@±_U»ÝKUaLVbkJkWmXk@UVVmIUVJ@UU@UamLmwUVU@mnJ@VUnmV@b@Vm@kkWmXmKULUV@x@bWnVUbVblK@bVV@LUJknmKkLWa±bUmULmWk@VLUV@bm@U°JUbVLX@@mlxkn@WVKkmK@k"],
				encodeOffsets: [
					[114683, 28576]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/jiang_su_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "3209",
			properties: {
				name: "盐城市",
				cp: [120.2234, 33.5577],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@n@°ĀÞ°@¦ULWKkx@bkLWb@lUlVXXJVbnUKmxXV@bm@@XLÞÜ¦XlVnmzVJ@n@²ÞôkÆÞaȰĉwnǉÜóéVÛnĊīČǉĉ@ō@KÞUlU@kklÇÈÑÑlġXɛ@UġaU@U_W@n@kaUL@VW@kKmkUV@bkbWW@bkzma@JWI@KUKUL@U¦`@XUJU@KmXw¯KXkmy@aUIWJXXmV@K¯UU@@bVL@¤VLXbV@@JVXVK@JVn@bkKmakVVXUVVVlI@`U@nzVVb@¤n@@UlKXLVVI@V@nV@V@ÈUx@óVōkÅWó@mU@bk@Ýwk@WbXxm@@J@zV@kVbVnLWVUXWUXUWLU@Wl°z@VkxU@UVWIxWJkbĬnW@@bUl"],
				encodeOffsets: [
					[122344, 34504]
				]
			}
		}, {
			type: "Feature",
			id: "3203",
			properties: {
				name: "徐州市",
				cp: [117.5208, 34.3268],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XKVX@WnIVx@K°Lnll@@I°KnVaU°x²mlx@VanU@ak@akmV@@w@Ua@aUwVwUw@w@UK@£kaĉlóIÇVk±@@kUKmVkIkxW@Ua¯UUm@UVI@WVIJV@@Um@UanaU@mI@J@XV@XaVlkXVaUUWLUyVIXmWak@XkJókJUL@KWkk@ULU@WalUIkJmImkVbV@lV°kXUKWKULUmb@VUlVnb@VV@IVKUUmU@ak@@bmV@xklUU@UKmV@nJVbkXKUamLUJ¯UUVmIbVVLl`@LLU`m@kXUVU@VlxUK@xkIWbUKx@VkVVnb¯@@U@xkmbkLÇKb@@XnJ@LmVkl@@XlUVkxakVVb@bVnUbU@@xVUVb@nIĊ`XVVôJ_K@xlU²KlkU@VaVVÈm@kVUVmnamUUaVXIVJ@ç@¥nkVLn@@XVK@VUX@JVUV@UnVJVLUJVLUVlnIbKnU@m°VanI@anVKVLanlKblKÞk@¦@¤@VKnLVKLKVzlWLX@VmV@VbnU°@UalkWXLVUKWkUUW@£Wa"],
				encodeOffsets: [
					[121005, 35213]
				]
			}
		}, {
			type: "Feature",
			id: "3206",
			properties: {
				name: "南通市",
				cp: [121.1023, 32.1625],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VJ@bnzWl°LxnW@LVVI@W_V¥@VKVL@LXJI@nbly@aXXla@aVUnllLX@@UVKlb@@mXV`V@bĢlkČÇÆȘ¯wnĕVĉVÿUƒUĠŦğlXÑVǵ@±ōLʵĖ¯lÇbÝÞ¯xk@Çkķén¯@ğġƴǫ@kVVlUbL@xULÇóLUl¤@nkVV°VLkxVb@laUXUKWĖklVX@¤UUkb"],
				encodeOffsets: [
					[123087, 33385]
				]
			}
		}, {
			type: "Feature",
			id: "3208",
			properties: {
				name: "淮安市",
				cp: [118.927, 33.4039],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nźUôÒɴèl¦nĖVkbmX@xVlVL@xUb@bUJVnUxlKVLÈxmzXV@lW@XVb@bÈVxnbVIXa°LaÆVVaXUlK@aXIÆVlXKVUlIXalK@alwXLVK@¥Ý¯¯ÿ@mVk@aX@mīlaXIwXJVUV@lw@U¯ybUaUġUÅaUKVknaġm@kUm@wÆIV±nLÆwÇnUUk@ƅÝU¯JÝI¯¦Ul@b@@VVL@l@LLÅmL@b@UaVaUWmLUKV¹KLWKX¥WI@mXk@UmaUVUU@VmL@WbkIUWUmVóIkbmm@UbVLUxmJkU@bkJWbnXU`WzKUÞÈlVbLmx@kè@Æ"],
				encodeOffsets: [
					[121062, 33975]
				]
			}
		}, {
			type: "Feature",
			id: "3205",
			properties: {
				name: "苏州市",
				cp: [120.6519, 31.3989],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ôèĊVnX°¤²lxƒÈÜ@²x@J@b@X`nIUÆUUV@bl@VVnL@L@xJ@X@blJXnW@@`XbWkV@UbVxXUxkV@LóxVbUVW²VJĸklUǬ@ĢƳĠ°@mƒī°»ÈÇ¥ULUU±a@bU@¯U@KnImUVWUkmXUVU@lIVaUUVWKUbUkWKU¥n£WakJUkULK¯LKkVIn@VaUVUUUkVk@U@amUkJ@UUlwX¥W@@UkVmk@JUakL@kk¯ÝmJUn@nmVXlmbVVkn@UJ@±WUxV¯a¯KōbÅ¼ÇxUxUUlWL"],
				encodeOffsets: [
					[122794, 31917]
				]
			}
		}, {
			type: "Feature",
			id: "3213",
			properties: {
				name: "宿迁市",
				cp: [118.5535, 33.7775],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XbWnUJVzXKVVUbWklUWbU@@W@IJ@nVmbVbn@@V@UIUJ@XUJ@VVn°VVbX@lwlJnUVL@l²@lÈUôJĊklb@¤VL@@xVxUxVx@bVb@@xU@lnmnXmXLVmV@X@lxVnVJôLLXax@b@@KVL@bn@@m@@alLUUVaU¥nIV±I@mXI@aWWXU@LlUXWW_XWmaUwÇ@aaWUX@@kWUynÇwUKkLVwUmVI@aVa@wUKUk@wWnlaUmĕk¥ɳçóÑŹVmmzkVmm@a@Iók@@LWU@`WbXLWlkImJVn@`nXVbXmL@Vn@l@nUVl°Xx°U@LVĠ@z°@¦UV@Xn@VJmV"],
				encodeOffsets: [
					[121005, 34560]
				]
			}
		}, {
			type: "Feature",
			id: "3207",
			properties: {
				name: "连云港市",
				cp: [119.1248, 34.552],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@lzXxmÆV@@¦@l`XnlKXXmKnLlab@xmbm@kL@V@Vl@@VUXJXmb@@°Æ@èÈzlW°XĢJlÈ`lInbWV_@m@UUķnôw°ÆmnaVVÛVmĸ»Ģw±Ý@@mUInyUmWkÛ¥ÝK@Wn@@aWUnwVLmUaWIUWVk@kkJUVWLUkÅWJ@bkLWVUbÅUb¯KWbUJWXX`WXkV@KWVXX@bWJ@nJU²mJV¦UbVVkK@b@@nm@@aUK@L@@awWbKóKUIUmkwW@U@UnWKnmWn@bl@bmVUb@kw±n¯wVUb"],
				encodeOffsets: [
					[121253, 35264]
				]
			}
		}, {
			type: "Feature",
			id: "3210",
			properties: {
				name: "扬州市",
				cp: [119.4653, 32.8162],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VUXblVVVb@xV@kzV@lwVLUbVV@VU@VbUblb@nkĶ°IÞV@ƆVlmVÈÅxmKU²ÅJ@xVn@lĢnmbUlVLÆbĢVVbVaXk@VXKVVWXVWXUmKUaWaU@¥@£XWUUV@@ynam_VWkUVUna@ÆV@mnkWmXkWUW@k@@akkllWUI@UnKl¥I@VVma@a@I@U@a@anK@UmK@ÅVUnJlkI@aVwka@mVIUW@UWL@WÅbmIULkaUWUxkLUKWlXL@VImÅVUmĉLUól¯I±l@ÒUbVbUVVXUJUnVV@lnbl@"],
				encodeOffsets: [
					[121928, 33244]
				]
			}
		}, {
			type: "Feature",
			id: "3201",
			properties: {
				name: "南京市",
				cp: [118.8062, 31.9208],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@k@ma@kUUVmVIUWVUUaVa@Ñ²k°Jôk@Wmk¯KmX¯aUakKWU@XULXaV@@mUaVUUl@VmkaUXm@WUUna°IlmVmIUW@Uk@@aV@VVX@VI°»nmU@VKVan@m»UaU@U_@WlIUaaVaUala@¯n@kaUkUUWKU@mwkUUmmL@K@LmUUVKVÅImUJVkVVLèVLVU@WLV@nVÜULVUL@bW@XbWbkJUUVUxVXmVk@WUUkVmIV@nbnVWbJUkUULa@Jma@XkK@VVL@L@JLUVU@V¼nXlbm@kbUKmn@lVb@VXXVUV@b@LVbÆxXbl@@lV@UVV@XVK²VlI`UbVbUlVVn@WXn@@VUV@@KmbVLXÒLkKV@nX@VVUV@bnVllbmnbIWVXU@`lLlknVnmlLlbUmVInK°nUU@l@VU@Vn@@alI`VIXaVaVa"],
				encodeOffsets: [
					[121928, 33244]
				]
			}
		}, {
			type: "Feature",
			id: "3212",
			properties: {
				name: "泰州市",
				cp: [120.0586, 32.5525],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lUU@@y@In@WwXal@Þxl@@anVô@ÆXlŎôU@Vw@ÇUU@@m@UJUUWKkL@Vm@@£aUUmyV@@_kJUUVUUWlUnblL@aUmI@ULUW@IU@WaUK@£UK@aV@°V@LnUWWXIlaVV@£UWlkXĕVLVWb@kUalwUKU¯lU@mk£VôKÈVK@wKVaUkķlUI±ğ¥ÝUŹ¯ôm¦ĸ@XXK@VVXUJ@nlbUx@blJkmIUV@ÆnL@VmL@b@b@V@J@bnbU@UJk¦mL@VVJkXkll@b@@lXXVWlXnml@nÅU@mbUVlVUXn`mb@zU@VVWX@¤¦V@Xb"],
				encodeOffsets: [
					[122592, 34015]
				]
			}
		}, {
			type: "Feature",
			id: "3202",
			properties: {
				name: "无锡市",
				cp: [120.3442, 31.5527],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nLÒlxUVkLam@kVWUULUxVVVbUV@bVLUnnźÞVĠ¦XVUUaôw@KlUVwWUwVa@lUXWa@_X@WmkI@a@WI@w@KmKUUk@@aVUVVÅmJ_@W@a@I±wÛ@ƑÇkw±¯£mWĉUóçK¯VkUWK@XkV¯UWabmUaUUblln@b@xbXWX`@VxUblL@bn@Vb@`m@XbWnn@l¤n@xnVlUVLÆWkV@VbÞJ_nl@nKVU@aUU@mVk°WVLUV¯bVXbXlVn@VmL@xV@bl@nW@X@VVJ@²VJVU"],
				encodeOffsets: [
					[123064, 32513]
				]
			}
		}, {
			type: "Feature",
			id: "3204",
			properties: {
				name: "常州市",
				cp: [119.4543, 31.5582],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@LnxUbVVL@xnnWnn@VVXn@yImx°La¥n@VkKVwW@nXVJ@b@UVn@UnUV@Lb@`VLklVÞnÆ@VaXLlÈJmmVUK@aVUUaUUVwVKXVlUn@blKVUkwÑmKUVUI@±UI@U@WmX@k@aU@wnK@UUmWkaWU°aVUUK¯XUl@nVV@bUVmLk@m`ÝIUaU@lÅXUKkVmU@wmk£m@XmWan@@_Uam@@akKVaUw@W_XWa@w@akmm@mL@UJmnUK@@XnJWLkKUb@VxkWLaWVUImVULUK@L@lkLVVVllbm@@°kbVbUbbVbkJ@XV`V@Vbn¼"],
				encodeOffsets: [
					[122097, 32389]
				]
			}
		}, {
			type: "Feature",
			id: "3211",
			properties: {
				name: "镇江市",
				cp: [119.4763, 31.9702],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VĊKnVÆUnJ@UWKXkVLlKVwXVlbVKnJÆaķn¥°óÇIkWKUbÅ@mUÝlkUK@_a@KVUVm@mVU@@aUIW@mXUxLUlm@¦bK¯nwJzm@UW@UmmXmm@wKUUVamwKm@UbUL@Vmn¯¼JUW@UUU@@bl@@VVXJnnUk¯JmbVVXn@VWlbUnk@VVUVb@nU@WbKWV@XVlLVb°bnW°Lnl@X"],
				encodeOffsets: [
					[122097, 32997]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/jiang_xi_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "3607",
			properties: {
				name: "赣州市",
				cp: [115.2795, 25.8124],
				childNum: 18
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@`l@Èbln@KVLl@V@bÈlnKXkVlVL@lJnb¦VKVVnXW@w°@VUmlnUV`UbVUV@xnKVI°KXKVkVL@al@XaLVlULWVVVL@bx@VXVmb@x@VVV@nn¤lb°b°KXXWbX`lbXxz@x`VIVUnKLxWXLVKVbVLVU@wnW°b@nalXmXVJn@U²mKkVlU@@xlnaVmlKn@JVLlnVl@XXÆèVlUX@xVLXVb°W@wnUWmXk@KLVwUmUkUKUw@wVaVK@k@WnkUKWkwlmXL@KVUlLVKXmWUL@aL@malaVk@aaanX@VVUblbJnXaVwn£K@UWmUk@UaWIV@bJW@KmmU@aUUUkmKkVKlUUnKVUlVaV£Å¥WUUK@UkUUw@m@mIkUUWLK¯Uw°¯@wUKUbKm@kkKUL@UUKV¥U@manw@k@U@Wm@@U@WwkmwWaUU@UUmV¯kw@@kmkKkUW@UK@ÅV@XWWkXa@Ul@Va@KVaUUU@aXwla@UkVWaXk@K@lmkUmV@Vmbk@»XI¥VUkVUVU@anKVUKUalU@wX@@a@K@ÝwL@UnÇlUIkJmn@bVVb@VmnkLV¯U@±lIWm@kaUI@aÇU@K@KUIkbWbJUIUyX¯UbU@méUUmUkWKxWIkJm@V¥U_UJUwmVkUU@@knwm@UmkWJkL@n@VW@@U@knm@kUml@xÅx@@XUJlb@VXJVxn@lbV@lULnV@VlnV@bWV@bXL@lVLVbV@blLn@VlK@xln@bX@laLVbnKUVVbKlXVVkxV@nnVUblV@@z°WWkbIkWL@LUJ@bUI@b`@UmI@mkK¯XWmUV¯@UUVUUam@@VULWUJIm`IUJKUkW@UxnWbnnmlXbmIUVmV@Vnb@VLUKWLnÒVVV@VUL@kJUV@bÈ@V°@XVV@l@xUz"],
				encodeOffsets: [
					[116753, 26596]
				]
			}
		}, {
			type: "Feature",
			id: "3608",
			properties: {
				name: "吉安市",
				cp: [114.884, 26.9659],
				childNum: 12
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lxnb@V@bV@ln@nlIn@blVXKnk¼@VUKWL@bL@`UXU`@V¦XLĠ@lJ¦@nV@l°nn@mVXna@nbKn@lIV@VanJ@_lKVVnL@LK@Vn@VbUVanKlLnbnJVbnWVnVVanI@Vb@LbVKVanXVbVJVU@aXLllbôlÆ¼XxVLVK@Xn@xnVVVmb@LnVVKVXV@@mnaVXUVnVK@_UaUmwnKV_anKVL»K@¯ÝU@U@kWlUnlknKVnaUkma@UIUwl»Åw@VwV@nn@ÈXlKVmna@kVw@anm@n_WWk@mUkUK@ImkLUnbkm@wV@klUnLV±m@UInWkWmb@¯amX@xUVUKUaULWKXwKmLUVUJ_@wyWwkaW_XaWW¯L¯akam£@mUU@U@wnaWU@Uw@aUKUXUVKUkKWbk@@bUKUlWL¯LUJmLwU@UVaVU_VkmnUV¯@@xXmWUUUL¥makI@UKUkWlLkmÇ@aUk@UKL@kmÇak@_VlkL@`lbnlLVanLnbmVÆln@kJlbknmKUbÝmmwULUK@bkLWKULUUma@Kk@UV@L@llbVzxUxnl@bVLm@IVJXVlLV`@bn²@J@V@Xmbñ@WbUJ@bm@@LUĬU¦lV@xXb@blnUV"],
				encodeOffsets: [
					[116652, 27608]
				]
			}
		}, {
			type: "Feature",
			id: "3611",
			properties: {
				name: "上饶市",
				cp: [117.8613, 28.7292],
				childNum: 12
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@VI°`nm¤²@bVJUVVXUl@Vmb@xV@XbmVV@lkLmbn`VbnU@VaUnbVllUXVa@w°VW@_VWLnVlbLVbnlKnVK@IUW@_@am@ÑUólK@U@WU@VwU@UI@aUUaX@kwmJV@yX@kan@mkwVmmI@aUU@aUUW@kVkV@@anK»XVWnIVUl`@_W@wlUV@UWKnUbn°InJlUV@VnIbWn@VklL@l@Vn²m@U`kI@bWJnV@°VXnJmXVmx@VVL@bkLmWULUmU@bWXb@llnX@xkxVVnVV@¤nLnVxnJVXX@bn`VIb@blmlLnaV@blWXnlUnbl@KVanUVmm_XK@kWWnaU@UnaWUXaXamUkKmXUWLX¯WakKmnUWwXa@KW_aXWW_@WnIVl@XULnWVknK@ImyUUÆbXKÛ@W@IÆUnVÝlkVK@mUIVwkUVaUm@aVIVyXIaÈwmmk@UnanVUmÅaó»lwW@kkUVmUK@WKLUmWULkamKLk@Wa@wk@UU@U@mbUIWVKUXWmkUmVmU@LkakKw@w@U¯UUn¯l@bmn@xkJWxkL@VkI@mkmJUI@V@b@VVxnbWlkÈkVLbkKmVL@V@²nxWkLUL@xlKVxbXmVnWJ@Þ°@nxUKUw±`UImVmnU@kalm@akwU@UUJmxU@@U@kU@Um@@KnVm@kKmkU@@WUnkLWxkVUwmKmLkUbmKUbV@xUnkJ@n±UxVXUWJ@LUblUnm@W@nknUJUVm@kXllknVbÆKVVb¼V@Ul"],
				encodeOffsets: [
					[119194, 29751]
				]
			}
		}, {
			type: "Feature",
			id: "3604",
			properties: {
				name: "九江市",
				cp: [115.4224, 29.3774],
				childNum: 12
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@WUkVUkmaVUb@mVUam_nalK@kUnUWaU@@wna@UVkUWVUUI@a±n£m¯_JU@ĉ¦Ul@UVKmmLlm@ğ¹m`Uk¯@@UVK¯@UUK@amkmKkVVUa@UkUKUaL@VVXUJ@n@WUbnVb¯V@LÅlÝIJÅkÝm@UaWUU@UmUXmmwVUUKWUX±mUam@kWzUaVmÇw@aÅLmKXUWKkL@W¯IwVwlkUJ@Um@ÛÈWKUxWkaUU@KkLVl@UKUX±KUb@nVVUbUVmaUlUL@aUL@@nUlWzX`@V@lx²@Vlb@bVÞ@°nl@UxVL@lUbVV@n²xVUVmnUÞbaJ@IV°xnbl@nbÆ@VwnK@VnXlK°xnUlVXV@Vl@L@lk@W_XK@KkWxUL@JnVx@aX@VVUaIXlmL@bVVX@VbnKa²XVWk°a@UnV¤nbmLmW@XbmJUbVLaÞKL@K@U@aVKlbV@nXlJxV@VnVÈÞKôbźĕČmV@Ċ²xÆIV@Þ¦ĸ¼ÞVlVÞnxln°JkLXWVUVUVwnJVI@yn@lXlaXmWI@w»ma@UmK@akKkXmW@_kaWakKWk@@K@IWkUa"],
				encodeOffsets: [
					[119487, 30319]
				]
			}
		}, {
			type: "Feature",
			id: "3610",
			properties: {
				name: "抚州市",
				cp: [116.4441, 27.4933],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°V°UnÜ@n@lnLlV@bV°LlnLllVzVVXlVV@@L@xX@WlXm@UVL@V@n°kVmVUnKlaXxVbnlU@lVVnaVI@aX@VJ@V@bb@Vb@X@lUL@@VlIVm@wUVanLalVnKnLVxlUXwlKVm@k@Una@mWIXKWUÛVk@a@UVWn@@kl@@WXlW@_Um@UVK@aLnalInWV@@xnI@¥Km@kKmnk@mlI¤laXbVblknV@UKXVlUXa@@Unw@±mU@ak_±a@UJUIVKW_Xa@aWUK@mmUVa@IXa@UWmannlmX¯WKXwVUVw@XUlK@klJXa@kkmm@Uww@¯W¯kw@WmbULaUUU@mVUUWmkUbKmkkK@akU¯¥Ulm@akU@m@KVIVV@KUkUVUkaUWbmIkaVaUU@mWbb@bUlkbb@nK@bKXVWnULkKUV@LWKknlxXVLml@X@lULUb@xVxVLVlVnUxK@LWlXnmV@x¯XaWUUK@wVWUkÅçm`@mn@bUx@lmbUnkLÇWm@mU@Ux@Æxk¼VxVJ@nbVlmbUmLklmkVlX@VV@°Þ"],
				encodeOffsets: [
					[118508, 28396]
				]
			}
		}, {
			type: "Feature",
			id: "3609",
			properties: {
				name: "宜春市",
				cp: [115.0159, 28.3228],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@VlbnK@b@JLlUnx±ĀXxÆWX@l@V@@blJ@nX@xUbVVUbVV@bVmnmJ@bmbm@klUbLmb@lVb@xUX@bVVVbV¤@LVVbXlVwLXÜÇn@@VIlVkUxx°J@XlKXLVWnLÆK@bÈxUnVbylXn@VbnW²XVLVVUnxWnnV@VVVXVbn@ÞÆlIÞJÆk@K°UUamVa@UUU»@wV@VkkUKUVW£U@UmW@@aXkVUnVlKVVUUkVmU@kWaUanUVVamIX¥W@@aUaUVW@_mW@UnIVVn@VbVm@bVL@anKVUkWKUXVIkx@nabVKb@nVJ_V@VwVUVVXUlUUaV@X@VblabnKlkVaXa¯@m@UKVUn@WXkW@@w@KU@UWkUUUykkmKk¯KU@akUmK@k@mmÛ¯V¯U@L¼UKmLbU`mLxVnVb@`LmUVUUWmb@nU@UWULmU@KnaUUmUwmJ¯IUJWIkVkaWVUIUlWaUIUVkKmbUIÒlVUnn@VlLUJ@bUX¯@aWVUKUXKUbm@UwKWa@a@VkUWn@Uak@mbXWJXbm@mLaWVk@wL@WmanU@knwWmkaWLKWUXaU@¥lUVVVbnw¥nKV»@aUk@a@UJ@kmLma@mbUWnm@ULÇº@LXnmxUm@UbkbW@@akLmWk@UXmJmUkV@VUXVlULmKUxkL@lmXnJ@Xl°Vnb@bU@WbKUX@VmKUX"],
				encodeOffsets: [
					[116652, 28666]
				]
			}
		}, {
			type: "Feature",
			id: "3601",
			properties: {
				name: "南昌市",
				cp: [116.0046, 28.6633],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@X@m@VIUW@UKVbLlV@VVbUlUnLnl@bVL@V°UL@V°@Vln_Ġºn@knKnLVU@VkĊ¥Vk@U»UaUÅLUalmkklWn@VUVIlm@mXn@VmkVa@KXIVUWVw²@m@U@VK@k@WUa@a@aU@IUW@@bUJmbUU@kkVmUaWwkbmLUVUnlWbUbklmLakbUaW@U@VbkVWVUUUVUx@U`UI@maULamb@lwJWUVXLlUVmL@bUK@aUnUam@UUmJ@VnX@`UXVVb@bX@W¦nJUbUmVVbXb@lVUnVlVUUkLmUUVWl@bX@VnV@X¤VUVLllUU@@x¼VV@V"],
				encodeOffsets: [
					[118249, 29700]
				]
			}
		}, {
			type: "Feature",
			id: "3602",
			properties: {
				name: "景德镇市",
				cp: [117.334, 29.3225],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VVX@VbmzxUlU@mbmL@V²xVbUVVblbX@VkVykValKVI@bn@n`lVWnX@lL@WKnVIVa@¯nK@alIXJVIVWUwn@nUnK@alI@a@anKm_aW@UWmIUwmmK@£UUmUUlwwW@km@kWaXaV@VnVKnXlK@aUK@UnwWUnmIUW@¯mUXI@alJV_n@m±@U@kkKUlm@XamJ@UVUkmI¯JmamVXL@VUkV@xX@`k_UVmJUXW¼mL@bU@UllX@VV@bVV@bnJUnlx@nmb@lW@zUnIlx@WbVV@bVJV@UxV@@X@VkLVôÒn@@b@`VX@J"],
				encodeOffsets: [
					[119903, 30409]
				]
			}
		}, {
			type: "Feature",
			id: "3603",
			properties: {
				name: "萍乡市",
				cp: [113.9282, 27.4823],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VWnL@UVWLXaV@@ama¯Uk@WmInW@klKVwnLVKUkVW@UlUnVnIVWl@nXlK@bX@laVan@VnwWm@KÈ¹VK¯m@kmU@¥kIğ@WKU¥@V_VW@_K@aXKVL@Ul»mWLkU@amkJm@kmU@@a@UmakwU@Xl@VXk`UIW¼kWWX@@lxV¦XlW@Ubn@mUkL@UmJ¯UkUWVUaUlm@UXWlnUJ@LmLUnXll@bUVUUmVUn@¦xlnn@VÆÈU°kbVVxllnL@VnVVUl@VanL"],
				encodeOffsets: [
					[116652, 28666]
				]
			}
		}, {
			type: "Feature",
			id: "3606",
			properties: {
				name: "鹰潭市",
				cp: [117.0813, 28.2349],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@XV@nlL@lUnm@Ln@@VlV@@VV@nwVI@VVlx@bknlbV@nmnUVJ_²VxVLw@m¯@ÝXImnUWaUwkL@wVKlKXmw@±@UKnUlLaKlUlÇXkmaUw@U@a@UUkwUJ@zWJw@WbkVWUL@VmUklUaWakb£kJ@nmlnlL@nL@¦mJ@wU@mXkJmbK@bUL@VVn@`kXW@Xk@@lm@UX@V@blÜUXVWLXJ@nmb@V@l"],
				encodeOffsets: [
					[119599, 29025]
				]
			}
		}, {
			type: "Feature",
			id: "3605",
			properties: {
				name: "新余市",
				cp: [114.95, 27.8174],
				childNum: 2
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@m@@WULUKWwÅ»ókakkWK@bUVUIUamWUbULa@KUa@mJUbmUXUmUamImakKmLUbVUam@@UL@KKmUUkL@`mIUb@U@V@bVl@b¼UmL¦mxUaUUVk@¦VWbXVLXKlbXnmx@lmVnb@XKxl@XUbnKn@WaXIWnal@Vb@XmlV@U@bXbLVxn@VaLVWVLXUb°@VW@aVIkK@UmVmkUÑVJnalLVUVJXbVkVJXUlblUXJVI°JnI"],
				encodeOffsets: [
					[118182, 28542]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/ji_lin_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "2224",
			properties: {
				name: "延边朝鲜族自治州",
				cp: [129.397, 43.2587],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Wxĵm@ó¤VX@@xÜ¼ƨ²xWxVV@XVbWXllaÞU°Ċ@ô¼LôÝWanV¥Ñnĉ°¥ÅX¥°¯@w°w@»°k£°mÈŹmÈbÆŎ¦K°z@kxl¦UbU¤klVKŤÞȰ@@bV@nVVUlÞ¦lUllVlU°ÑU¯V°wbXxl@V²@nô¼ó°kmVk²ĕw@wVÞÞ@@Ġö»¯@bnb°mÞ¯°V°ÈJmX¥mamUÅUlaU¯@wKkl±n@@wkÝVUUl±¯I¯bal@kLmakb@ġŹé°Þb°ékLmwXaÅb@bVlbVbÒVbUbUUanwakbVUVak¯ULmxV°UxnôŻX@JXklbkbĉabWU@kWUU¯@@klm@@Å@awWXlKkI@WbUaVIUanU@ĕ¯KmUnWUwm@£ċèkUmbUmm@@nkJUalwk@@nmWUan_óaWmnw±KIwl@UmI@an@@mlUÅmV_KUk@U`@_KUmU@U¯mmb¯@kbImV¯LkbKÛ@ÇnɱJóaÝĢkb@xÒÇll@²VÆUVVUÇ°XóxlV¯lV@bV@nx@¤@șŎnxV¼knJnKX°¦UlnVbUbÆVnÞWVX¦llb@l°VJôÒnLVbbX"],
				encodeOffsets: [
					[131086, 44798]
				]
			}
		}, {
			type: "Feature",
			id: "2202",
			properties: {
				name: "吉林市",
				cp: [126.8372, 43.6047],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ôlzaÈV°K@mLWlnVxUVÈ@ÝĬUÈnôLa²VmĀkV@ĠĊnU@bV@b@nl°UVnÞaôJ@bV¦mlkbmVXx¯@VxmnbbÈKV@bÈLwĠyônmnbÜ@nnVx@n²KJ@kal@nxÞULź±Vwkw¯LWWUkŎīVww°yVĕ°wÈVlkÛ»@wW@Uô£@nĶXwWaUamKóÑUI¯@kakkW¥XUmÝÅUVaUamVk¥W¯LmIlmU»mwȚō@£kJUÇk@am¯y¯UVwa@wġx¦K¯X°Ċ¯¦U°ċWULÅa±b¯@UkÅWmVkIUlóċ¹`óIlXWXxmbULÝbƧ@x¯bÈl@x¯zaÝ¤@nmVWb²bmn¯J¯Ò@n"],
				encodeOffsets: [
					[128701, 44303]
				]
			}
		}, {
			type: "Feature",
			id: "2208",
			properties: {
				name: "白城市",
				cp: [123.0029, 45.2637],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@óǩŁ@WlwUaƑwÛÅÇéĉamKōÇ@IôġVȁÑŹçÝUƧċĉwóóÝ@Ƒ»ğL¯ll²@ƆÅV@¦mÅb@nmlU²VxlUn@VbnWbÇbkÒn@èlnlUÒ°Lx@¼ĉb@ÒUċxÅènLVxÒbÅJ±a@_ÅJÅnVbKlnUÜĊ@UxXVÆnmVJÞ¯VĠwXw°xWLxKV¦ôUwVÝǬóÞÞ¼ÞkVôȘxÞUlVn¦ÞĊa°wb°@bÆwlŤL²`z°@V@@nJVnl@@¥nUmmn@mwnmmUnk@mlwUaLnwn¯°anWakIÇmXwÆamUXUlJXaUUklKUknmÞV@K@VWÞ@VkUwV"],
				encodeOffsets: [
					[127350, 46553]
				]
			}
		}, {
			type: "Feature",
			id: "2207",
			properties: {
				name: "松原市",
				cp: [124.0906, 44.7198],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@źèȂÒUóĢ@JŎÈLnĊbÈêÜÆƒxVbkx@XǪłôkÞ`Wb@n°abKnVw°`_X`W¦ĊIkmVakwKx°UÞbU@ll@°¦VWaÞbxÞI@mVI@VkÅUWK¥nLa@@È@°Æ@nU@KÞalkUwVékUWwkUVkkJk¯@»ókV¯ÆÇI@bĉô¯@ķw¯nmmÅL¯wVUÞy@UówÇLkmm@@UóxkkĉmL¯wVwkWWXmLõm@kÅ±V_ô»ÛÆ¯@VaVaĠVlmğwķUóÝƽ£ÇJkbǫaƽLW@nxÝ¤kzy¯XɅm@VôÇX¯Ė¯ºÝnUnLVlUÔmV"],
				encodeOffsets: [
					[126068, 45580]
				]
			}
		}, {
			type: "Feature",
			id: "2201",
			properties: {
				name: "长春市",
				cp: [125.8154, 44.2584],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@U°xÆKnn°mĸx°@Ċó@aÈJ°ÅUôl@¼l°IllUlVXxlVUêVxkllnÈUVll@Vx²IÞ¤VUlVnIôlÞlwô_bVaĶLXÅÞÇ@K¯@wÛaçn¥¯WXyW¯XwUmmÛ@manómğzxÇK@aUÇLamanUw°@WwnUalnk¥U@aóIÝbUm¯Vmk@@aU@amVğĉ@lUnÿ±UbóKmVÇÞī@ÇVUUwmXkKn@L¯ÇUbyókōè@bn@lÝX@x¯ô@ÆUV_maXm@aóJWxnX@VVnĖVnUJ@nōÆÇ¼V¼kxLklÝw@xx@zV`ÅbmxU±xUnnmknğUbUUb@Å°Üó¼U`Æ²@lönKnXWlXUx°xnKĊllôw@Vn@lnÈKôx@VÝzV"],
				encodeOffsets: [
					[128262, 45940]
				]
			}
		}, {
			type: "Feature",
			id: "2206",
			properties: {
				name: "白山市",
				cp: [127.2217, 42.0941],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ul¦kÒÆ°IlÒU¤ôz¼lJUnÆXVl°@²aÆbVKČXV¯°¥¯ĉ°WL¥Ģw@xbUx°V°znb@ÈlVlI@w@mU@akU°kUôwWÈ¯VUVUÅ±U@kÈkÑw@laÞġUÞ£@ƅKnÑĢ¯@WaUaVUVkkw@a¯@¯ÝVXnW@@WkXmK@xkKUb@bW@Uw¯mmb@WKUbmUbUaWbJĉIVW@Il±LkmUbUm@nkKWa¯n@`UbmaĉL@bÆ@W`L@n¯Xb@kb@xL@VkL±mlUIU¥mL@lÅx@_la@UaV@kmmK£LmKUnÅKVbmXVlèĉUUbmlĢÅ¤Il¯bÇ¦l@ô¼Ģ@x°l¤nal@xb"],
				encodeOffsets: [
					[129567, 43262]
				]
			}
		}, {
			type: "Feature",
			id: "2205",
			properties: {
				name: "通化市",
				cp: [125.9583, 41.8579],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÆlXnĠxĢ°lÈ°K°kXm@¦VbkŤJnÝ¤kVÞVVkÈb°y@wkÇ°awƨ@aÞKVnaWwXWkôJ_ČºôVk»óyV£kÑJÅ¯lÑk¥Va@wkbmk£¯@wġó»@kÈ¥°akJÆ£ġnkVaĊVkçWUnUaÆLVmnLKU±@m@a¯UbmV¯m@_KUaÅWó¹@UanmWak@@wmI@y@mkJVa@UaIkJ@n@Um±kkxmIkbÇm@°bXnV@°ÈmlÞ¼¯XVº¯LmkWWXLmVVlkn@@lnWÆVxbmnm¯lÝaVÈè@¼VbÆ°ÞUVJkxIxIV¤ÒXxmn"],
				encodeOffsets: [
					[128273, 43330]
				]
			}
		}, {
			type: "Feature",
			id: "2203",
			properties: {
				name: "四平市",
				cp: [124.541, 43.4894],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ɇn°WzlyÞ£mwX@ƾKǬblaÈIƾ¤ôÞĸVĠxnmmV²wVnwÆaU_@yw@wÞxlkKlwU»È»ŎÅ@mVIUmmĕUU@mWXwIô@bWnnbU`V@Å°ó@wÞW@km@aŎç@m°Ñ°Inm±aXaUn@mƑU¦@Ç¯aU£aUġ¦ÅÒJōUŻókUÇ@¥¯ak¯mUVak@@aċçÅaUm¦Ý`XbÆ@n`IxĊÞōÞml@Ub@Wl_¯JkÇUÝÆÅb@nllUb¯±a@WĉJġĀ¯Unóm¤xôaVnxôI@xV@bmÆ@lnLmÞ¯ÞxVb¯þ"],
				encodeOffsets: [
					[126293, 45124]
				]
			}
		}, {
			type: "Feature",
			id: "2204",
			properties: {
				name: "辽源市",
				cp: [125.343, 42.7643],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@żôŎVIÆÑĢ¥VbV¤°bÈ@V¥ƒÞ£lÇUUUÝlÞ£mţIlUa@¥nlW¯L¯kÇġ¯ğwWmÅk¯UVUbWlXlmnbUx¯xVVknlUbVÇKUb@VnbmlnzUº±bmJUbWÈnèmÒ@X`WL"],
				encodeOffsets: [
					[127879, 44168]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/liao_ning_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "2102",
			properties: {
				name: "大连市",
				cp: [122.2229, 39.4409],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@IÞmVk@wXWÜbnwlLnU@nLlbXW@awnbl@XLa@Ċ¥@LULnJ@xVnmV@VXXV@VJkn@VÜKXXôJlbxl@IVbnJVLUbnlnVwJVU@XUaUUlwn@°nVKnV°_VJwl@nwlVIXWlIVVnK@IWmkIVaVU@WÈUlmU@UWUalkXġŻ@kI»mmakUmĉUŁV»²ġVĕ@aUU؍IɃ`ȃ@kw@Umwĉ@WķÑIĉÇbÝLkymbIwÇmÛbmbU¯ÜõÈkÆVbŎxnXVÆnǪ¦b¤UxÝnĉÒmĊVÈ¤ÈbÆ¼ĀÆÆÞźbVVbX°²¤"],
				encodeOffsets: [
					[124786, 41102]
				]
			}
		}, {
			type: "Feature",
			id: "2113",
			properties: {
				name: "朝阳市",
				cp: [120.0696, 41.4899],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@na@UVI@mÑWkaV¥UI@wl@aÈbm@wVak@@K@k@a@UUmUUalmU@KÇUÅ±¯@±kUKVkUaaU@¥m@@¯k@WLUmkn@mmIkm@amU@wVmkU@Klk@UmaXIWWULaULVbmk@UUmUk±_Uym@mbkImaX¯WWxWKzU@WkJWwkV@Um@UbVVVVXb@VWX@W@Vkb@VnUK±aUUlwXÇWKknU@mmUkLUVVUUVUawbkKmwnIkJ@nmb`kmVkLWwUm@UUUK@UmaUa@UUaWK@mU¯Wkk¯VmUUxVXUVmL¯ymXkWUbmXUKVknWx¯JVnkLl@VVxnxlĀVL²WlXl@bÝVUn@bnlÜaXblIVl@@È¦@VmbXV@@xVVnUn@`°@VnXU@K@VV@VmbnVn@ln@bx°Ub@bLV`ÅnW@@lUnnWVU@Vbkl@Xl`XxVUblkX@°¦VUVVbUlkV@UbVbkLUxmJkX@bbxVKÆlXXbnnala@Uk@UVVklKVUXKVU°KVan@VUnLKVLWVaU_@mmUXa@mwXwVkVWXkk@k@klm@wXKl@U@KVUUUVaUV@alLxUx@b°°VnnVxlIXJmxLUVlV@bnX@VbaVx@XJ@bn@VVXÈl@llX@lUVô°°@ÞVbn@Vk@VW"],
				encodeOffsets: [
					[123919, 43262]
				]
			}
		}, {
			type: "Feature",
			id: "2106",
			properties: {
				name: "丹东市",
				cp: [124.541, 40.4242],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lzXJU@²x@@V@bUVmKUn°n@lnVKnV@n@VlV°WbXn@VzJ@¦@bkbbUl@bkbJ¯zWULWbklVnb¦VJ@K°Ukl@@WbVn°@Vm²UnX`UÜLXmVXlKVbUVVnUbnX@VUL@lUbWx@²kl`n@Vlb@nUVWVLVU@aV@²bl@ÈmxWXVÈUJVl@laWnXKÈkÈ@Va°bÆm@XV°IVV°UnalVUn@UwVU@@VVJI@bl@XK@wWmXUUVbkJVXnJVI@mknwlKXL@`l@VI@UUaVKÞnaVm@aÇ£XWU@aÇUU@mbkKm£@WWL@@Kk@klUbWKUkUU¯UõÛmUUaVUU@WU_W@kVkJ_WKkV@bUL¯¯±mk¯ġğÑ@UmwKUaka@am¥ÝIUWmk@wmţLKʝbȗKWĢklVbX@VVknÇV@XUVUblJXn@J"],
				encodeOffsets: [
					[126372, 40967]
				]
			}
		}, {
			type: "Feature",
			id: "2112",
			properties: {
				name: "铁岭市",
				cp: [124.2773, 42.7423],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XJm@¯mXUlnVbUJU@bV@UJWL@VXLmJVbkXlJXxVL@b@V@n@b@`Vbk@lxknV@VVV@bUL@bV@@bVK@VXLWLXJ@LV@nbWJ@IUVx@LVJUXVxVx@VV@@LXJWL@VU@@L@VnL@bVVmVX@@VVInJmbnLWVnVULVVU@VVmX@@JVzl@nVVKVXÞ@mk_lmUUWV_nJlUÞÑÞVVUVVLUVJ@IVna@@KV@XwWknwnKlalUwaĉÝwJl_@aUaKUUU@WU@WXUÆ@@UVK@n@UnVVblK@bllb@bbW@Xbl@UlnLl°°b¦nKlVnIV@UWU@WXkw@am@nm@aVw@I@KUaVIm±XÑlknJVnVJaX_VaUaVKmwnkmmn@lU@U@mnaXlKUmUIVmklaUK@UlUVUW@UkVma@UUU@JmUU@@bmbKWV¯XUKm@ka@UVKVk@aUKmLkKUUÝUmbXbÇJ@k@WU_@m@klm@UXKVaUI@KWUXaÇWkaWUkWUL±U@lUU@UJI@V¯JmIm@@aU@Uwa@UV@VkIV¯aUkWkb@bVL@@VVVUXW@Ua@@bÝbUVÝ@LmUkVUbVllLUV@LXWbUXm@U`@kxlnnJlbnIllLXlVlUXmVKnV@L"],
				encodeOffsets: [
					[126720, 43572]
				]
			}
		}, {
			type: "Feature",
			id: "2101",
			properties: {
				name: "沈阳市",
				cp: [123.1238, 42.1216],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ȚĊÜ°bLlÞxUbUn±@ÈnVÆL@xnLlUVbxkImJkn@V±LUxkV@bbKVKnzVl@L°@VaxÞUlbôxVV@@V±bn@llXLöXĶnal@nkVJVI@aU@@aVK@aUUUU@lmkwl@Ua@_@a@m@U@aUKWwkIlWUanIWK@UXKVIU@@aVVIUamVknW°n@WI@KUmULWnkVkUWKkkmJkamIkmlw@V_n@VWXaW@KVUkKUkValUnVK@ÞVUÞa@a@VbX@VWUU@U@UK@ala@IkKmUUa@U@VkkWVwU_@KÜUXbl@V¥XUVmXakÅlUUkIm`UIUJW@UIKmkm@UUJImmU@VUXU`mIUbUK@LJUUl@X@UbJkU@nm@Uam@@aUmLKwmWXUK@kUaÇa@JUIUa@aKVUUXmUy_@lmbkLUKWLX`n@bVL@JXLWX@Vnb@Vm@UbnVmL@V@x@LUbVV@V@LUVl@mb¯U@xU@UVVV@X@VVblJ@bnVKUnx@llnL±¤b@k`VXÆK@kV@¼kl@bWIUl@VmLnbm@@JXXmb"],
				encodeOffsets: [
					[125359, 43139]
				]
			}
		}, {
			type: "Feature",
			id: "2104",
			properties: {
				name: "抚顺市",
				cp: [124.585, 41.8579],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XVl°bUlJ@UVU@bVxV@@bn@nJ°I@UJIVV@V@k²VVKlXXVblÈXWbXV@LVJUbWL@Vkn@l@nV`@X@lÈIWanaÞVVVlLnKVL@bUlUL@Vlbn@VL°WXULna@aV@nV@IVV@VbUnl@VXnKVa@UUnyWkXaaVk@aabnm@_WKXmWanU@alaUl@XJVLVxX@wnKnVlw@V_@a¯¥@UkKWUaUUanK@IaU@WUaVw@klUVyUUVUUÇ@Iôba@mnUma@kXa@UWak@Wal@a@WULmU@U`mIUU`mUk@@UUK±nkJbUam@kwm@@a@UU@Ua@@K@VK@kmKU_UKUUaĉWmkkL@`LnmlkLkbmK@k@Ulmb@b@xUVIUlmVXXxm@JUUk@WUk@akx±@¯x¯UmbKUUVmUU¯UmVVnWkÆlWbUnWVU¦k@WaÛV@LV`UxXllU@@VVbnVlL@J"],
				encodeOffsets: [
					[126754, 42992]
				]
			}
		}, {
			type: "Feature",
			id: "2114",
			properties: {
				name: "葫芦岛市",
				cp: [120.1575, 40.578],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ll°XnV@XLVb@VVbnb@VLVV@VVnXxlKnUl_na@mlImJnxlLaxVbUVVUVUKVlnnV@lmXLÈWkxVV²bVLm@Ula@UX@XW@UWaUUUUVan@V@lUXxlIXV@yXLwXXW°nblJnan@Vz`l²nVVVl@nUaVKbVKnXVaUaVUynXK@kVK@X@m@mLXaLWU¯w@a@UVw¥°ó¯¯y¯UÇ¯»w¯Im¯ÇUUl¯»ţKċÑţķm¯w@mU_ómk¼VnU`±IkbVlnnU¼±Lk`@XWl¦UbmVUxkXVlkbllUVb@bkVmx@XVV@Jb±aULkKWXkWmX¯aUJmIkVm@xU@n"],
				encodeOffsets: [
					[122097, 41575]
				]
			}
		}, {
			type: "Feature",
			id: "2109",
			properties: {
				name: "阜新市",
				cp: [122.0032, 42.2699],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Xnb°lVlnXVJLlVnl@zÆxnK@bblKVLn@@VaVLVK@L@Vl@XVVInVVKVwlUXwlKLVVb@aV@XlUXbVW@nlWnXKV@@V@XUVVLUVV@@bVVV@@ln@VbVUXVIxVanJ@UIVWL@UV@@¤V@nInwWklnIVxlnzUVÇJ¦VVÜLĸUnW@aV_WĊXXaKnkl@nmLa@alUVw²K@UlmnIlJwaVUkmK@wÅKmU@Ç²VmVaÝwkKaÛ¯șĉķ¥ğ¥@kUWkƏīÝ@@akUK@KWIUm¯nU¯JmwUVmIkJÇLm@UImJUU@aW@U@@nUbJabXVWn@UVmX@V@b@l@L@lUb@xnÇabk@@xVJU¦lbXÒ@nUJ@Vmb"],
				encodeOffsets: [
					[123919, 43262]
				]
			}
		}, {
			type: "Feature",
			id: "2107",
			properties: {
				name: "锦州市",
				cp: [121.6626, 41.4294],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nJ@nlmVnXKl@@°n@@¦VbVbUlVL²l°@Æ²ÈV@LVknVbVVnnWVU@XmWUabIVa@mV@X@@bVVnIVJ@nÈKlInJVUnx°IV°mVnXJ@LLlV@b@ÞƐĬXllV@Ġ¦ĸ¦naWW@In@manK@UVkXJ@alk@»lU@ÅLUWl_@a²£Kkm@kwVmULm@akIUa@U@WUUVUaÝ@ğwkmĉ£UW@@bÇL@ma@_mKlXUwKLţÓ@UWw@K@UI@mU@UV¥@°UnJ°@@_KUwW@UnaWUmmI@mķwUaÇLóVĵwÝUUW¯¦Ux@Vb@xV°XKWbK@n@nW@UL@lWLmzUVVbUbmWXXWJbn@Vkl@LlVUn@xnV@bln"],
				encodeOffsets: [
					[123694, 42391]
				]
			}
		}, {
			type: "Feature",
			id: "2103",
			properties: {
				name: "鞍山市",
				cp: [123.0798, 40.6055],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lxĠÞ@bV@@w°Vna@UkV@K@UUUVa@K@w@UnKmUVan@@Uma@UXWWK@IUK@amW_XKVLlKna@kmKVak@VU@VmU@anIÆan@aUVnb@blLV`ÞLlUbnaKn@naVU@¥°IVK@anUUKVaUVak@mJkXUVwkVUUa°U@W@WlkXWlIXUlJlaxIVVXLll@nLV@lLXlKĊz¥maUlkXaVKX°yIla@aVkala@a@¥IUy@WmXa¯kU@U@mmUULkmm@¯VmnLVU@a@U@±w@VWIkymLUUkJWXJkUmxk@xUI¯`mUULm¯m@kxVVbWV@UVIUx@bkVVVxUbVV@V@zJVXUlnk@@lkLlLUU±Jkm@UIUVLUVU@K@UnnV@l@LlaUJ@zn`@nWlIUVUUUV±Ln@nmL@VUVkLVlUxVLVlÅXma@@akLmWUX@JUnVJVkXJ@X@`WXVUVUIlbW@bVUVL@`Un@¦U`@bUV@z@Jm@@XV`LUL¯J@IVKmKÅI@JnWVnLnVxV¤z@bmV@VUV@bUL"],
				encodeOffsets: [
					[125123, 42447]
				]
			}
		}, {
			type: "Feature",
			id: "2105",
			properties: {
				name: "本溪市",
				cp: [124.1455, 41.1987],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lb@VnlnVVUb@VJ@nnJ@bmXUx@xVbkbkWLUxnl@Ul@xWx@nUV@¼UllknkK@bmbnlLVJX@VIVJn_lJVVXUmnU°VVVUnVVLna°V°w²@lwbl@XVl@VVIn@wWWnUVkJVUw@@anaVk@@lnLlalKnkmK@_lKnlĊXVbVVLV`nL@lUL@@L@VbV@@V@bn@lxn@VbalI²mVL@Vl@nV_VVnJV_@nVKV@X@bkXbl@XblylUUk@Xa@UVIlK@UUWVULlm@UUUnKWU@K@UXmXVa@U°KVUUWUk@aUVKkaWkKUknaWa@U@m@mk@aUJk@@_WKkLmxl@nUJmIUWlIUaVWVXn@xWLk@@aJUI@U@UVVxm@UVkmb¯VUU¯JWU@Ån¯aUbÇ@ÇlLmWXkbk@UIÇVUXWwÇnk@±aU@@bUVUKUXmV@kaUm@k_±l@XwVa@kVK@UWmVaUmVUUakLUWWnÛKVW_m±VnU¯@Uma@Xk@l¯V"],
				encodeOffsets: [
					[126552, 41839]
				]
			}
		}, {
			type: "Feature",
			id: "2108",
			properties: {
				name: "营口市",
				cp: [122.4316, 40.4297],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ĊĖÆn¤°Ċ¯ŎWô@xXbwnKl@nX@VUVKmL@VU@UxÝ@VlbxU@VUb@bk`IUlVUnV@@UV@@JnXlK@b@nbÆWUkUKVwUklKVU@UnK@mm²KVUVVVUJXk@mm_@yVIbk@K@kmUm@VLV@VUKVUVJn@l²IVVKklK@kl@kmVUWI@y@UUUVawUUUl@akmmVaUKmIUaJk@wkaóIWWÛL@UlmUIU@WW@UnUUm@wmIVK@Kĉ¦@bWKk@max@bWXkamK@mVkKmxÛaWX@xUlÝnJ"],
				encodeOffsets: [
					[124786, 41102]
				]
			}
		}, {
			type: "Feature",
			id: "2110",
			properties: {
				name: "辽阳市",
				cp: [123.4094, 41.1383],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@`VzWnVUVL@bVbVJ@IÈbVb@lVLXWnxLnKVb@n@Vbn@mV@lIVa@@WkVVI@KVLVanJV_VWUV@nnJVIVn@na@alLlmkVk@»VU@mXwwk@@VmkVwXKllaUa@wVwnW@amI@mUI@VaUUkmm@UkaL@UIĉyLWkkKU@mKk@kWKUUJwkbkIWVkJWXkl@X@X¯VVbUVlUxVWlnI@lUbVUbVLmV@bUL¯J@¦UVmbm@LmbakVÝKU_kK@amaVUbm@ÅbmJ@bVUn@UVl@UbnL"],
				encodeOffsets: [
					[125562, 42194]
				]
			}
		}, {
			type: "Feature",
			id: "2111",
			properties: {
				name: "盘锦市",
				cp: [121.9482, 41.0449],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Vbĸx@nnJVnXmb@VXVxL@`¯@mI¯V@U¦@VV@nJ@V@LXx@VŤÔKLVxWknL@`b@nÈK@a@VXĊ¤nVK@aVU@UnU@ayU£UwmmKXUm@IÆJnLUL@J°IVKKU_@Wn@@I@yVU@aV_@¥Vm@_UKUV@aXkaVJVUUXW@_@WWIUlUIVm@IVW@IU@@VU@mUVVkJ_l@aVa@UVwka@UÞVwV@@UnKLVU@UmWk@mLxWa@wóUVUIÇÆĉ¦¯¦¯xʟJ"],
				encodeOffsets: [
					[124392, 41822]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/nei_meng_gu_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "1507",
			properties: {
				name: "呼伦贝尔市",
				cp: [120.8057, 50.2185],
				childNum: 13
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@m@Łkklô@£kJ°ýɅķÑó¤ğLĉÅlÇğŁW¯¯ƥóÿlwkţÈéÝƛó°ÞÅxV¤ĉĖWƒ¯lȭţυ̃ɱÿķƅˋğɱřÝţϙȍƧĊţ@¯kWKUKm¹Å@ķJU@ƧÑƧō¥˹Ɔ@L@ÞVLn@VōČWJX¦@JŻbU@ţÞmVU@ȁýóbkWWLÅ¯UWġkmó±UŹôV¼ƽ¼ł̥ĖƽǬʉxĉŻȗKΕ̛ʵƨʟÞ˹»Ƨţ»Ǖō˷Ȍ±ȚʊĠUɾɜɨmÜ֞߼˸ƅȂ¯ǖKˢğÈÒǔnƾŎŐ@Ċbôô̐¼ƒ@ĊôĊÞĀxĖƧL±U°U°ĬƒČ°ÜêɴȂVł°@nxŎèbÈÞȌ΀Ǹl²IlxĊl²ÒmôĖÈlĵºmÈêVþxɛČʉÇĵVmÒÈɆôƐŰǀĊ°ÆǬĮƾbyĊ@ĠƒXǀċm»ôw°Ûk¥Çm¯çkkÇǫţǕéX_ĶWǖīŎaÆĵĸĊ@ȚȘĊLĢĉVÆĉʊÇĕóaU¥ĉ°mkÅ°ġUĠřk°mÑČÿÛƒWĸ£ʠÆxÈÞŎÞ»ʈ²ĊÇČalÒ°Ť±ĸzĊKÈ²m¤Ŏ@Ò°¼nyȂUźīǖƳÈē°@ÝĶ@Èkl¥ÇçkxkJXÇUÅ@£k»óƿīÛ@lÅJl¥óý@¯ƽġÆÅanċ°é¯¹"],
				encodeOffsets: [
					[128194, 51014]
				]
			}
		}, {
			type: "Feature",
			id: "1529",
			properties: {
				name: "阿拉善盟",
				cp: [102.019, 40.1001],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ƏnǟƨʫŹɆÿ°¯ÆV²ˢżÿ@ÝÆŁȰ¯ȀƳĉó@ğky¹@īwl£Ź¯Ŧé@ÇÇxŋĉƩUUŃōLÇĵóÝnóç@ó@ġƱ¥çWUçÆō@éçťKçȭVһƽ̻aW¥ȁ£ʵǊǓƲɳÞǔlżÞmĠóĬȂɲȮ@ÈĢŮźÔnĶŻǠŎȭгŃċóȭţΗÆƑÞƧÅΫóȘǫɱȁġlÛkÇ°ȁÈnõl¯ôÞɛÝkĢóWĊzÇɼʝ@ÇÈķlUČÅÜķnέƒǓKȮŎŎb°ĢǀŌ@ȼôĬmĠğŰōĖƧbЇƧōx@ķó£Ål±ĀƧīXÝġÆêĉK°Ýʇƅ@ΌʉżÅÒϱʈ@˺ƾ֛।࡬ţશóЈèʞU¤Ґ_޸Ƒʠɽ̦ÝɜL׈ɛϜóȂJϚÈ@ǟͪaÞ»Ȯź"],
				encodeOffsets: [
					[107764, 42750]
				]
			}
		}, {
			type: "Feature",
			id: "1525",
			properties: {
				name: "锡林郭勒盟",
				cp: [115.6421, 44.176],
				childNum: 12
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ʶĬĊIȘƨƨ@ĬÛĢșŤĉĬĀóUÈŚÜènŦƐȤȄłϰUƨťƾÑ܆ğɲƜǔÈèʈƲĊƞƒɆ¯̼V˺Ò˺ȂŤVĢêUÜxĀˌ˘ƨÆ°ѢmÞżU¼ÆlŎ@ĊçŎnÈÒͪŎźĸU°lżwUb°°°V£ÞlĠĉĊLÞɆnźÞn¦ĊaȂīġŃ¯Iĉůl»kÇý¥Ŏ¯én£ġÑÝȭxÇ@Åçķ»óƱŎ¥çWÿmlóa£ÇbyVÅČÇV»ÝU¯KĉýǕċţnġ¯»ÇōUm»ğÑwƏbċÇÅċwˋÈÛÿʉÑ°Łkw@óÇ»ĉw¥VÑŹUmW»ğğǉVÿŤÅźī@ř¯ğnõƐ@ÞÅnŁVǉóJwĊÑkĕÝw¯nk¥ŏaó¦ĉV¦Å`ğÑÑÝ@mwn¯m±@óƒÛKˍƏǓ±UÝa¯lōșkèĬÞn@ŤġŰk°ċx@ĉ`Ƨĕ°@ţÒĉwmĉ@na¥ķnÞĉVóÆókĉķ@ÝkƧƧÛa°Ç@ÝÈUóbÝ¼@ÛÒV°@V¼ˋLÞɅŤŹǠVÞȗŤÇĖÅōbȁƜ"],
				encodeOffsets: [
					[113817, 44421]
				]
			}
		}, {
			type: "Feature",
			id: "1506",
			properties: {
				name: "鄂尔多斯市",
				cp: [108.9734, 39.2487],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ĶL²ĬVłƑkkl@ȎŘWńÈĬȗ¯ºlz@ĠĊôŦôÒĠ°kÞÜn@¤UĸèĸbŌÈXĸLlÒĢxɲÆ¤ÈÛƾJÈÝ°UÅĶ»²VW¯ĸJôbkV@ôlbnĊyÈzVôab@ĸÞUl°yǬ²Ǭm°k±lbn°@È»JXVŎÑÆJ@kLÆl²Ġ²ʊůĊġřóƛÞÅ@mmLUÿóĉƧ@»L@`ČĸmȗÑţů±ĉğl¯ĀwÇçƧŤÛI@±ÜĉǓçō°UwôǫůķƳÅ±bÅ£ÓÇwnÑó@ȁƽ@ÇƧĢón»ŏĕóĊ¯bÅVȯÅImōKULǓ±ÝxċŋV±Āȗ°Źl±Û@WÒȁŚŹНŚÅèŌô¼°ȰɞȂVĊ"],
				encodeOffsets: [
					[109542, 39983]
				]
			}
		}, {
			type: "Feature",
			id: "1504",
			properties: {
				name: "赤峰市",
				cp: [118.6743, 43.2642],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ɲŁĢǉĊwƾōÞĭ°_ŎŃźȹƒUČÿl»¯ôķVÿǬƽɅġÅÑǫ»̐ʟȣU¯wVWÝÈġW»Þ¹mÝƒɛŎÿŎōͩůV¹ōéċóŹÅVVĢǩʈ@Ėċ@ķÛV°¯xÇÅţ¥»°Ûôĉʟ¥WýČ¥wç»±mnÅķ¥ˋVbUÒġ»ÅxğLƧbWĖÅx¦U°ÝVóŰlô²@¥ÜÞÛôV@²±`¦¯Ý@ÅVÒō¼ô¤V²ŹĬÇĊƑţxç¯Lk»ʟlƽýmłÝÆƏ@mö°Ġ@ŚŹĬţÆUĀĠǊĠX¼nźVUÒ¦ĊxÈ¼@ôlx¯łʊÒÜĀˌÇČxÆČÈƐaxÒĠn¼ŎVÈ¼Ģ°ŤmǖČĊþLV°ÞU¼ċÈUÆzÈa¤ôbknXĀè"],
				encodeOffsets: [
					[122232, 46328]
				]
			}
		}, {
			type: "Feature",
			id: "1508",
			properties: {
				name: "巴彦淖尔市",
				cp: [107.5562, 41.3196],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@²@Ζǀݴʶհĸƒ¦Ķ̒Uˌ¼ӾÇƾ¼̨UÞĉƧéÝ»ĕĉƐȍōǪakóó¯a@ôţaV¯Þ¯°@²él¥ĵğťwōxó¯k±Vó@aóbUÇyĉzmkaóU@laóķIX°±Uĵ¼Æ¯VÇÞƽIÇÜÅ£ɱġwkÑķKWŋÇķaķçV@£mÛlÝğ¯Ñťóǿƴȯ°Åł@ÞŻĀˡ±ÅU¯°ɅĀźƧʬmǠƐ"],
				encodeOffsets: [
					[107764, 42750]
				]
			}
		}, {
			type: "Feature",
			id: "1505",
			properties: {
				name: "通辽市",
				cp: [121.4758, 43.9673],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ôƲĸ¼Æè@ÈȮwƾ»ʠĢ¥VÆ@²¥@»ŎÑ¯ĊJŤ£k»ÆÇX¯̼ōī°aX£ôƾȁź¥aôŤĢL°ĸ@Ȯ¼ÈÒʈŚôVXůÆaĠƛÈKķĉôÿ@ğÈĉ»ÇVnĉVwXĠÝ°ČÿĸwV¯¯ǵ±ĉǫÅÅm»²Ż±ƽIm¥ţÈķ@¯ƧJV»ÞUÝç¯UġºU£ţóaÅÅlƧī¯K¯ÞÝğL̑ȍƽ@ōŎōĀƑɜnÞÝºX¼ÇĢÞUX°xVʠȤ̏Ǭ¼ÆÒɆĢǫƾUĀóĸ°k¼ċĀƑVŹȺōń¯`ÝĮƽŎĉxġǊɱłō¦"],
				encodeOffsets: [
					[122097, 46379]
				]
			}
		}, {
			type: "Feature",
			id: "1509",
			properties: {
				name: "乌兰察布市",
				cp: [112.5769, 41.77],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ʠǠÞĸɲȺƒÒȂƛŎaÆÈĕȘţUÝźǟɆţÝˌKU»@U¯ÜÑ@Þ»ôaVÞÇÈ@¯ÜbƨƨÞlĸ@ĊôlôÅĊUÝĸm¦bmĊ@nĊxŤÑ@¯ƨĖĊ_@Čwl¯ȭLÝ»ƽ¯ķůǓ@ÇǓbċÅÅÆwÿĠÇU£óa¥¯aŎğĠţkw°»¯ůlÝĵkÇ»Ý°ɱƧǫaóôɱ»Çk¯ŃóʇŐŻĉǊŻĢ¯ÒÈUl°x°nÒĬónĊğ°ÇŚĉ¦ʵV°°ĬÛżÇJȁńʇʹó˂ƽŎÆţ¦"],
				encodeOffsets: [
					[112984, 43763]
				]
			}
		}, {
			type: "Feature",
			id: "1522",
			properties: {
				name: "兴安盟",
				cp: [121.3879, 46.1426],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÆXnlŎ°@LVLĠþxĊUȮĊnUĠV@żaW¯XIŎġ¥Ý@K@w@K@I˺ŻŎ¦ƨƨÒŎIÆ@X@VºnX°lŎ@ƾĉˤƒȘǷȘÑÝÝÞbVţĸÿŤxÈĖƐêÇKnĸ¥ô@ķÞUnÒl@UÅaīˋ¯ÑƧx@±kXřƐƏÛéVˋ»lō¯ĉÅÇÓǫÞĖġV@ğ»°ĵÇÞǓ¼¯mÛÅŃĉĠÇƾb²çéż¯VğÞml»ōÑVç»V¯¯ĕÆU¯y°k¯¯V»ôÇÑ°a@ŹkġKţóbŹ¦ƽȂóW¤¯bĬ̻ŎW°ÅÈl¼ţ¤ĉI°ōÒ@¼±¦Å@Uġ¦ʟƽ¼ÞĢÒm¤êō°¦Èþlk¼ĊŰ°JĢńȁĬ°żnÇbVÝ¼@¼óĸţ¤@°Ånl"],
				encodeOffsets: [
					[122412, 48482]
				]
			}
		}, {
			type: "Feature",
			id: "1502",
			properties: {
				name: "包头市",
				cp: [110.3467, 41.4899],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@źxżĀǔÆǬVȘĀŤ¥ÅƾōôˁʈͳȂŃÈIÜŻ¯ī¯ōm¯ɱĖ¯ķÒÝIÝ»ÅVlÅôÑġğVmÞnnWçkWÜXƝÆwU»Șĕ£ĉÑğ±±ÅkK@lÅIōÒUWIÇ¼¯@mka²l¯ǫnǫ±¯zkÝVķUôl²ô°ŎwŦxĶĠk¦±ê¯@Ý°U°bóŤ@°bôlôǩbŎƏȎĊĖÞ¼êƨÝĊ"],
				encodeOffsets: [
					[112017, 43465]
				]
			}
		}, {
			type: "Feature",
			id: "1501",
			properties: {
				name: "呼和浩特市",
				cp: [111.4124, 40.4901],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ʶUĊ¥ÈřĠ¯ĉômīÑ¯mwk¯ÇV°ÑżġĊǉǓɱţǓƝóX¯ɛÒóa@nÝÆôƜŚĉĢʉŰĊÒ¤ȗĖV¼ÅxWƞÛlXXèmÝmUnĠĢóÒkÆÆUÞ¼ÞJĸÑ°ɲĕ°Ŏn"],
				encodeOffsets: [
					[114098, 42312]
				]
			}
		}, {
			type: "Feature",
			id: "1503",
			properties: {
				name: "乌海市",
				cp: [106.886, 39.4739],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ș°ÇīXŃŗ@ȍlkƒlUŁ±īĵKō¼VÇôXĸ¯@ťê°źk¤x@Ĭ"],
				encodeOffsets: [
					[109317, 40799]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/ning_xia_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "6403",
			properties: {
				name: "吴忠市",
				cp: [106.853, 37.3755],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nLV@VLaÞbn@@l@bUVlUVzVx¤kÞVèXn@nm°a@UÑ@VXnV@VaUVKUUU@@U@@KVa@U²@wXkWnk±lLnU@UmmVKnIVWnI@UK@UK@@UVKXkmWLWUXmlkVwUyVa@ww@aVIK@aVÈwKlLVV@LnVVVnUÜ²°WÈIUÆ@nÞ¼@¦@UÞUVW@UxUxVnbKb¯ÞU`VbǬV@XXÆVVl°InmnUô°¯anam£WVXKXmkôaVU@Vak@@wman@K@UÛUWKXUÇ@UIb@alW@akLUKV@@Ukw±InL@kmwkWmk@JUIůVmnnU@m@UKVKlkUwknVUKmbkI±KkmVkKb@U@aVkUmn`kIlaUK@UUKmbUIÝUa@mUa@am@UUULUK@bmKkbWI@WXwlkXWa@k@kKLVkkK@L@JUVmzUKlwUUnW£XVlKUwVU@aXI@aWaUw@W@_nam@¯UkWVkUWaU@nwmJkUVkWVUmUkJ@ImbUa@@WÅ_mJknmak@@mXaUV@xU@@VUnkV@Vn@`ULUbWLXVW@kbUJ@XW`@nÅĖWJ@m°@xxbnUaw²lÞ°xŤIVVULÛWbbkVVXÆ`UbVL@kx°LlV@VWbJn@bl¤ULV°@lmL@£U@@aUwmKULVxUVVx@@kU@mK¯LÇa¯@"],
				encodeOffsets: [
					[108124, 38605]
				]
			}
		}, {
			type: "Feature",
			id: "6405",
			properties: {
				name: "中卫市",
				cp: [105.4028, 36.9525],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°@Èb°KnL@lV@@UwVUUwVKnLVx@bV@¤@nK@k¯UVKk£@amIXa@UkU¯Klw@UKVaÅ_UWlUaXaÜVKUUţJ¯wÝ±kxVbmaw@wn¯@XIÆĕm@X_@WVIlaX@WUXKVaVK@_Um@lUVm@U@Vw@VUÛwm@@W@ImKUkU@UaaX@wWaUKkw@UVaUamLUnk@»±`¯@kW@UaykbI@VWJkLWUkJwU@n¤mL¯wm@Um²XVWbnV@bmxVkxUblLUV@kVWKU¼kU@mn@JnV@bUnmJUn@k@XlxLVVnKlLVV@@LkKULVbk`WL@lkXW@kV@UÞUlÇXlkaUbmV¯@@L@V@bkb@xlWbbW@±@UJ@IU@mVkVxV@@lIlln@Vm@VUbl@JLmKÛXmVkUKULU`@LĉwKUXlVUl@VbJX¦̼bÞxŎxɜĖĠŎaô@"],
				encodeOffsets: [
					[108124, 38605]
				]
			}
		}, {
			type: "Feature",
			id: "6404",
			properties: {
				name: "固原市",
				cp: [106.1389, 35.9363],
				childNum: 6
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@Vnn@°xnK£mV@xlIXVlKXI@UJlazVbX@l°@²_@¼mlVnKVbUb@VlxVLXb@xWbVbV@VlnL@J@Xn@ÜxbW@nl@nblmnIÆ`@X@Vbna@aVUUWVk@kbWakbU@VwW@_l@nmn@@alVlk@UkmVak@@aUXaL@¯@KVa@axWI@KnkVaVJn_lJ@X@m@nVanUVb@mXLlJVWnLlaVVaVX@KXVVkVKlknKVa@aVU@KXb@klJUknUm@K@_UW@alIUamaU¯kJma@IUK@U@@UW@@aXLVVJVaXIKlaUkUV@ambUUJkIWJ@wUIV@JU@UwV@@Um@nU`@UkUmVUxWUUV@aÅb@aWXkKUUUUaWK@wnm@IVU@aXwm@UmVaUalk@anKUwlUwlkK@wmaUkmmIk@VmkUUbW@UVUnW@kV@xkVmbVnU@UbUV@ak@kkW@kLW¤@nV@VU@W_UVUU`VLUV@IUVõVULU@UUUJ@wmkUJ@WI@l@bkKkbVVbVbUL@UUJ@Vm@@L@xbVVVLVlVwX@Vb@bmUkbk@@JWIUVÅw@Km@UkWKXxWLÅ@UVUnWK@xkVW@KULwWVXVWzXVVKVXkVV@VUbV@UVV@@LXxVL@VbLnKVLVxXVmb@l"],
					["@@@J@aU@LWK¯UUxVVn@ĠLUW@UbUUUa@KUX"]
				],
				encodeOffsets: [
					[
						[108023, 37052]
					],
					[
						[108541, 36299]
					]
				]
			}
		}, {
			type: "Feature",
			id: "6401",
			properties: {
				name: "银川市",
				cp: [106.3586, 38.1775],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@UwVK@UVWÞUbwV@knV@@KU_VK@Kn@W_XWlL@Vn@Ċw@Ula@Wanamī@a»ŋó@aÆÅɲÿUaV_°ÝaLaUmVwVwX@VUVÝ@@¥Ý»@mVÅÇJ¯XÛ±VUmUmU@KUUkKLÇxU@bLUJ@bx@xUbVzUxklWnXVKnXWlUL@V@VL@VL@mJUXmJULnn@VmVkK²mlXWlx±@@VUb@L@@VV@VVULVUbU@WmU@Ò@V¯bmn@V@lVnUnVWXVl@¦VVUn@x@XL@¦lXxVb"],
				encodeOffsets: [
					[108563, 39803]
				]
			}
		}, {
			type: "Feature",
			id: "6402",
			properties: {
				name: "石嘴山市",
				cp: [106.4795, 39.0015],
				childNum: 2
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@U¯ķó±ÇÛ¯ķmbXb@kb@Vĉxm@@UkKWXX`m@@LULV`@L@mU@lUxaÝVUX@VULxVkLWV@JnVLXVlUV@zlVL@V@bn@lU²WVLlLVbUVxUx@xǀLxôÒkK²VaU@wXa@WÈĉUa@bÈkm@¯"],
				encodeOffsets: [
					[109542, 39938]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/qing_hai_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "6328",
			properties: {
				name: "海西蒙古族藏族自治州",
				cp: [94.9768, 37.1118],
				childNum: 7
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@V£°@laXô±źwô@UlżaÜnKw@Uaa²LmÈLÆÈxlaUawÞmÜbÞUnJ°akôÑkwÝVğwÇ@ÝkkV¯¥@ò»nŤ¥XImw@mVwa@ÅwmLkaWw¥l»kçó»@WÑĉğ@ĉŃUwóřVómĵ»Ý@VǕ¯kÝĊÅk°ÓUklkU±IÇÞk±@ƽJ@UġIk@W¦VÑșÓÅnťKULn¯X@¯mUÛ@WÅmóKknōbxÝ@U@kw@ÿÇLţÝUkmwklċVÅU¦LkUWlÅÑ@a@ÅÑ±UóġŹ¼ÈĉmŻ@@wkwKl¯Uġ@lÇUÓ¯_Waĉ²Åló¼VbknKÇÅ@ƧĢō°Ý@ğWÅxUUm@ÝXÛWULUè¯@mbUaLbUWġxIUJWza¯by@ōÈóLU`ÇXUlUĉV¯nmÛbǕLklUĉVóaġƏbġKţnkbÝmmnÝWȭÈÝXţWókUÇl¯U¯ġUɅĀ@°¯¯VÆnmJ@ĊķnóJUbÝXUlVkL@lVxnnmb@¤Vz`ÞÞŤ@VnÆJV°bUôJkzlkl@²ó@ÆÇ°kĖÇbÛU@lmbXVkzVɅĀXˢlńĬŹ@éÅ@ĉńÆ°ğbUlɜ_°@xŦkbVbƒKĢŤVŎ°@żÈźlĊôKôb@nôxŦÆ@ôŎL@þÆb@nnWˌbÈxInaŎxlU@Ñ²±ğVUĢƨbɲ@Þ¥ôUUķWVô¯ĊWʶnôaŤˁ@£nmnIôǪK°xUXô@Ŧa°mkXÆÞVŎkĊ°ÞLÈôyVaIlwX°UVwĢÑÜKôw@nV@m°nmnÜɞ£VbmXn°ÜÒ@xx@Vb²UlbkxVnJUnVVĊ°KČm°nxÇnn¤±¦@UXVV@lVbmVVÈVxÒ°IbźaČbVw@VLƾÑ@Ŧô¯ĊkôÑ"],
					["@@@@nòVaw²bVxxÜaČVô_ĊJIVmLa°@Ŏ¥XlK@klKVbUb@nUĢnaÈ@lmǬ»Ġ¯nmnƨVyÑǖĠ»ɲIn@@ÅĢƳ@¯°ôVKÈbVIÇ¥¯@Ýó@ÑnīWKkk@¥¯ÅaX±VÅw@±Ġ¯@»nWmw@@¯VUUWçKĉa±VkkV¯wx@UJx@bknÇbmÅ@Uw±U¯¦UKm¯I¯ť¼ğĊ@ÇŹÈ¯@Ý»ÇnˡJbÛèÇnÅK¯ġĠŹW¼Ålm@¤n²Ýb@b¯l¯@Å¤W¼nV@x°@Vx@lbUblbX¼WÇ²lU@¼V¦@bÇlVxUbVxÞbVbm¦VV"]
				],
				encodeOffsets: [
					[
						[100452, 39719]
					],
					[
						[91980, 35742]
					]
				]
			}
		}, {
			type: "Feature",
			id: "6327",
			properties: {
				name: "玉树藏族自治州",
				cp: [93.5925, 33.9368],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ɆÿĢV°°VÈklVôŤXÞWȮÇÞXnmÞnlaŤmĢLƐaĢôbĊUVlkǖKÜan°mĊUVVkÈWV_ôKŎÇ@z°abXyVIJĢwVXaKVbna°@VçVKXÜÞWn@VVÆwXĠÞ@Ŏ¯ƨġÆ@ÈLlmUaô»ÆkĊ±Xb°`ÔVkÈĢ@Vk°Llx@xż@ĊnÇź»ôĢ²VÆÒ@@bÆÒXklVKV¥ÆČUklnxlç¥ċç@±m¥wÅJ@VmÈIléÈa°U¥@kÞVK²ÑW°w²ÑK²ñyÆÝVmw»kkWĉJWUVÅwLmÅ@@mwkn¥VÑ»°°@@»¯LlaJônVUÅ¯U@W¯UmÑ¯¯k@WykU@¯wV¥kVwţk»wWÇĉĶçKÞÇaĉbIlU@kwWXU°w±@UKn£WĉKWxkĕVamwXw@Wmnk@aVkbĉLlImmwUÇWxnÝJn@¥ÆkwaXÜĉ¯ÅV¯¤mkx¯kķÜ²VWôŹVU@V£¥@°wn@m@¯@UbUôķmn@ÆÛ@ÇýVaUÇĊV@Çlğ¯xÝŤlVÈÈVx¤VxkK@@x@kVĖġ¥kIWbXŎx@nxÅUW`_@±UaLUxK¯WbkVlbbmLÛÆWIUwWkwÝV@kIéUbUUkV¯Km¯k@UmÝ¯m¯mLÞĉÛUmġ£UxkKm°Lwk@kVmKVUk@¯a¯ĢmóKUUxImlÅnÇbXèVVU°@@xXnm@¼ğ°@²ÆxU²WÆb°@¦llXLmĬ@ÒÞô°@È¦UJÇaLóU¯@°ġƴ@Æ@mɱJğ¼ǕÒUzƧmnmğ°ǫ¼knÇ@bġmmV@VaUaLkl@kLWō¦¯@bKUnJĉIó`ċUÛbwUw±axbñUm@@babÇÅXmƒÝÅôVbÞblUÞVÞU°VUx@UV@l`¼nL@ĊLW¤kXķWġXUVVVķUbVb@°kVVxÈa@Č¦ĊbaźJU@ÈVl@XkôaWĢÞ@laĸUÆb²mÞLĠÞÑôbÒĊaJVbm¦"],
				encodeOffsets: [
					[93285, 37030]
				]
			}
		}, {
			type: "Feature",
			id: "6326",
			properties: {
				name: "果洛藏族自治州",
				cp: [99.3823, 34.0466],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÞVŤÈK@ĀlxV@Þ@wŎalmôLnXÆÜ@nV°@°WmVKŦLÆmȚÔÒUX¥l@ĢJV@ƾI@wW°Ån¥kÅÝVwôÈç@lÑĊĕaJnaÆLVw°kny°UnkÆVČĊll¦Vƾ@@nUźÈÇIn°XwÞKô¦VWV£@£°ókċ±Iam¯Va»ČĉV¥°@mk¥l@Ċm@aUmwX@wÆxmĢ_`VnÆbKVw@@nUVğVmVVöIll@@çÛm£UÇw°@VU¯»m¯JōĖÅLa@»ĉĢ±`U_k`ÇçókXlK@akÝÞ£WċkÝkxJÝ¯ÅwxķxmIÅx@k±J@ýŋ¤UkmV°ÅÝxkwmġnÝVU¦ŤlmóXk¤UKç@mVkK@klī£m¯VUbW¯¼ċb¯ĵam¼mVXm@k¤ÇXÇbU¯J¯¯È@bVXVÒ¤V¼kxÝV@lVWxÛ¦W¯mKnlkU@nƑUĉÝ@ÇºÛċUĉ¥UÞÅz±òL±Ò¯xX±ÒLÝU@lV¦¯ÇbkêÇJnU@ÆIxn¦@²Čè¦è"],
				encodeOffsets: [
					[99709, 36130]
				]
			}
		}, {
			type: "Feature",
			id: "6325",
			properties: {
				name: "海南藏族自治州",
				cp: [100.3711, 35.9418],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Vxń@ĊĠĊXÒ°UƾĕÞm°£nb@@LUUWÛº@nlÆǬĠ£ÞV°UXbVȂǵé@kWanm°@xzK°¯ĠVVkwLnm°kÞxÆa¥@wnĉÆ@_l_VwmĸèŤÅČU@Wn@ÑmKUnğK@°¯UÿV£nmLlUUÛé±óókkmnakV@Ç°óÝXWəÞťIţxmmVÛUVȂÓnWyȁĉkV°WnkĊa¥_K°ÿWna@mU¯wlÝIU¤UXó¥ÝLx¯WmJÇÈŹmV@ƽ@Uk¥ĉkċÅUml¯Vmz¯lUxÅKmbIbĉĖkÒ@ÇèóUxÆÞlm¦Æ¯X@x@²ÝlÈJV²klVl¯ÔlĉÆÞ°lUǖÞ@Ķ¼nUôôŚ"],
				encodeOffsets: [
					[101712, 37632]
				]
			}
		}, {
			type: "Feature",
			id: "6322",
			properties: {
				name: "海北藏族自治州",
				cp: [100.3711, 37.9138],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ōmġxƽUm±LǿþġÔ@kxmWb¯I¯mIUx@bbŹVÇkĵblĉI¯¥Um@Æ¯È@aóUlČ»@w»wXaó°ţçÝkUaV¥ÅbÝw¯lmnKlxUğU¯°Lyw¯@mnXbl@êȁǶUWa¯VÝUğ¤ǫkÅ@mÜ¹XVV@K@ma¯¤ÝnƽĖ¯V@¼ôlèk¼¦xXlbnKÆx@bUx@nnxWJţ¦m¼ñ@°¦lUÞlÈ@ĠxÞUlxÒól¯bmIÝVÛaÝnxVbkbÇwÅÇKn±Kbb@VxLmÛŻbkVó@Źxó²Wkb@¯U¤źĊ@lUX°lÆôUlLXaV°wxUb°xÜôÈKVkÈmlwkÈKwKVUŤĉŎ»»Il¥na°LV»²¯Üy@wĢ°ĸwlwĢw°±_lVk@°bÆ¯z@l_@Ģ±lÅVlUaÞLVnKlnÈ°IllČawÞÑ°xUU@wVkmĠLô»KÞýôaÞ¥ôĀÞmÆmUŎV¥Èl°²°a²¥V@@wamm@Ñn@Æ£żVĠ£@W¯Þl@»@Uk@"],
				encodeOffsets: [
					[105087, 37992]
				]
			}
		}, {
			type: "Feature",
			id: "6323",
			properties: {
				name: "黄南藏族自治州",
				cp: [101.5686, 35.1178],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ôl²ôÜêVVkKmnU¤VĀ¯°@LmĠVnLÈL@alb@al@n°V_XmWUÈamaVIn@naV£óVWU£°axÈ¥@aĊwÈ¹@óağbm@kw@maÆw@In¯mm@UkkWÑÅ@@kċÅçVkÝJÅkVykŹl¥@¯ĢUÜX¥òýmmXÝÅlmU@£WlyXW»Åbl@aI»k@klm@UxUUV¼¯XlaUnķI@x@¯KĉUU`ólČ¯ô@¤ÞJk°xVn@mbX¯ĀL`¦ĉbml¯XUlȂĊXzmȁÔUÜVUnnŤwŦJɚÝXÞW¯ô@ÈlUbmln"],
				encodeOffsets: [
					[103984, 36344]
				]
			}
		}, {
			type: "Feature",
			id: "6321",
			properties: {
				name: "海东地区",
				cp: [102.3706, 36.2988],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@Òb¤ÆI°ôU¼°UnnWx@b¯L@lUUWbXxWlƨnxVUllXVUnL@lȀý²KVnƾĢwV»@mÞ£nÆÞÑmLKUaVżĕWVk²ÆÝ@Xw°@ô@a°wóUUmIkaVmÞwmkny¹VÿƧnÅm£X»naV±Ýw@ab@am¯ĉVó¦kÝWKUU@WanUb@ôÇºĉxb@Ç¦w¯bV¤UXôU¤bmm@UJnbÇbXVWn`¯Umk@@bka@bÇK"],
				encodeOffsets: [
					[104108, 37030]
				]
			}
		}, {
			type: "Feature",
			id: "6301",
			properties: {
				name: "西宁市",
				cp: [101.4038, 36.8207],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@kmKVUWkVkUmwƧXkWwXaVV@k°K@aXwmmV¯V»¯óÅJ£amX@ċVţÆķçnUx`k`@ÅmĊx@¦U¦blVÞŤèô¯Wbx¼@xċ¼kVôbÇ@Å°@nV°¦ĊJkĶalÈźUa@aVwnJ°°JanXlw@ĢÓ"],
				encodeOffsets: [
					[104356, 38042]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/shang_hai_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "310230",
			properties: {
				name: "崇明县",
				cp: [121.5637, 31.5383],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@uŏu»GPIV±ÐɃŜ{\\qJmC[W\\t¾ÕjÕpnÃ±Â|ěÔe`² nZzZ~V|B^IpUbU{bs\\a\\OvQKªsMň£RAhQĤlA`GĂA@ĥWĝO"],
				encodeOffsets: [
					[124908, 32105]
				]
			}
		}, {
			type: "Feature",
			id: "310119",
			properties: {
				name: "南汇区",
				cp: [121.8755, 30.954],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@`yĉNǕDwǏ»ÖLxCdJ`HB@LBTD@CPFXANC@@PGBKNECCBB@EBFHEDDDSNKAUNBDMNqf[HcDCCcF@EFGLEBa@ACoCCDDD@LGHD@DJFBBJED@BGAEGGFKIGDBDLBAD@FHBEF@RFDMLE@SGANFFJBANPH@@E@FJjRIACDMDOEKLFD@DbDAJI@AP@BGHFBCBGDCC@DCA@CECGH@FKCEHFJGBFDIHACEDNJDCVFBDCRKRLDLITB@CjNJI^DBCfNVDHDFKHAFGDIICDWBIF@@CFAjFJNJBBHD@CJ@AEFJ@@DH@BFBCPDBMFEQGDIFCNDHIP@HDABFACBJFHEBSZC@DP@@JDBƤ~"],
				encodeOffsets: [
					[124854, 31907]
				]
			}
		}, {
			type: "Feature",
			id: "310120",
			properties: {
				name: "奉贤区",
				cp: [121.5747, 30.8475],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@~T~JjZdDbLXDLCB_J@@FHFZJJIAGH@HGR@BENBLID@@LFCDF\\FpDBDb@FAHKFE@dEDDdC\\GreNMACVMLBTMCCFCEGFAA@DAFDLMHA@OD@BMEWDOC@AS@KGAI_DcKwÕísƝåĆctKbMBQ@EGEBEJ@@MBKL@BJB@FIBGKE@ABG@@FMFCPL@AjCD@ZOFCJIDICIlKJHNGJALH@@FPDCTJDGDBNCn"],
				encodeOffsets: [
					[124274, 31722]
				]
			}
		}, {
			type: "Feature",
			id: "310115",
			properties: {
				name: "浦东新区",
				cp: [121.6928, 31.2561],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@EN@JJLNHjLJNR^GRYVBNZJRBV@PDvbLNDN@LGNER@nCNQNuT_TIVFV\\Z\\XnDrI|[Ʉś²ÏJUHOƣ}CA@IO@@CYDATGFIEDAEBBAGCO@GJMCEDCJRHEFANOCADAEG@@CI@FE@BDIC@AGIAIMiEEB@DE@AJCXJDCJEHGBELGCUCeMAD]CIJiM@DSAKJKCLQDQACUECDMIFCBDJGECHAEIWCK@GLMCCGEACNKCEJG@MMBMC@@CIJUINT@JAJSTEPZZCP"],
				encodeOffsets: [
					[124383, 31915]
				]
			}
		}, {
			type: "Feature",
			id: "310116",
			properties: {
				name: "金山区",
				cp: [121.2657, 30.8112],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@L@BIHFN@@EE@@EFBDGDAADVDD@@EF@CA@IIsRE@GDAF@BF@CV@|FBCHBLCNHAFCADBMDCFZXHILBVEEQA@MWFARJJ@DCX@@TEFBLHAAERE@AJABRPBNK\\BrJ\\VHGND@CNADKDADQjGAGNC@GJ@FCFFHC@JF@@dLBDSFADHVG\\DTEPDDHJALIJkJDJCDIPE@YDCBiK@DONE@EH@BAF@HLJA@EIA@ALKNA@@FIFAFHR@NALadsæąyQY@A±DŉXUVI^BF@FFF@HBJEDFFGFEBSRkVEXGHFBMFIVW@GAEEFOIAIPKABGWEKFSCQLQBSEIBC\\FdBLRR@JGACFDDEF@AWB@LJJYNABBA@CUEGPaO_AIE@MYMFIGAEFECHSAAKAO\\[JEDB@E@MMA@@AGBKMGDFFCDDFEDFJF@NPBAFLHFH@EDDHBADDC@DDCDHHCDDFDABDAD@FEFOBCJ[D@HEDDNJBDDHABJIBBvGLBJAH"],
				encodeOffsets: [
					[123901, 31695]
				]
			}
		}, {
			type: "Feature",
			id: "310118",
			properties: {
				name: "青浦区",
				cp: [121.1751, 31.1909],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@RUNKdOFDJCbRFMLAHPLDN@JGL@@APBWYCKN@TU@SHGCEJIDIJKVIZVNM`iNY@CIE@CA@KBOEGEUFCCSADEIEFCDDDIDDHC@CKIeDCG@IG@DHWFEEGCH@@GO@@O]CNpeEQDBFME[JC]DGF@CKOA@QSB@GB@@GW@@ED@AQIJIAAFE@@DO@CFI@KNG@CDACAFEGKGBEGBDCCAIFCCLIECFI@MBCLDHGNAHSF@DMB@EEKBA@@C]DEICFG@ADBHGFKCDAKKHKD@@FHGAANGEEFCHKCECBCKG@ADKCNE\\[A[I@@mGBDQQEO@BCE@AI[AML@JGACLOAFKEMM@EQKC@CUCBCCBCHEA@FF@@FM@GEAJK@GNF@EXPH@FD@M^@HIADJCFDBER@DK@@DE@CAKFOCCBDHIBCNSB@GFC@GQEEOWFICGDUAEJIDBTAHJHEB@DIF@NE@H|HBDBEH@DKBAHEF@HEEUB@FGFGCCCE@AHOB@NH@PRLVNNFBX@RCPbAvMtBfH@DJF@ELBFA@EH@HNED@FFB@HLC@CJ@@DJ@PIRf@HE@CFF@GPHD@DKE@FFBEFFD@DEFCA@DD@IjCRFBAHFDKD@HF@@PM@H@BlbDJDBFEF@DLXB@HCD@@IFCBIFEJD@FDC@FBALLF@PAACJERACAJCBD@EL@JD"],
				encodeOffsets: [
					[124061, 32028]
				]
			}
		}, {
			type: "Feature",
			id: "310117",
			properties: {
				name: "松江区",
				cp: [121.1984, 31.0268],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@DLDFRN@FNELPBDKHB@INK\\BBJF@ADP@RFCRHA@nJ@B\\[\\MFLDBCH@DLDADFGLEDFFMHBBGH@EC@GLLLCBLDHEAGBCH@DEFJ^C@DB@LAFFA@CNE@GTMBGHKCAD@NEJFDKJDDJEDBCDHAAFLHFHBEBDDCH@LMJ@DEP@@CF@BEJBJIBRC@@FX@@HA@@HTA@RPBDLE@CHD^\\INFAERCfFMo^D@PP@@HG@HDFFXECGH@@JDHfCLJ@DGDCCCJCCEDJFCFTBDDVEHFPFLAB@NBFCFKFC@CHIACNOHWHCAAFIDD@CDAGEI@ACFMF@R@R_@GQED@EGFEQEDE_IAHKAEXCQUOQCUDEN@ZI\\DDmAMHCICDSOC@EG@BKHIGMIBCGOCSF[CUHCGEBCTKA@cE@@IGDEEEDI@@HMDBHiHCRCBCLMB@DMCGH[UqI[AMLOAAQIB@BQFBFGBAKFE@SW@CDI@QIEBNXB@FRUFKAGJYWDENCCADBBEMGKDGAAD{EU@@DAEE@CB@HQFJt@JDBE@@FC@"],
				encodeOffsets: [
					[123933, 31687]
				]
			}
		}, {
			type: "Feature",
			id: "310114",
			properties: {
				name: "嘉定区",
				cp: [121.2437, 31.3625],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@F@LI@IDKJADKIEJICADGACFECCJ@HKCAFOHAJI@aCBEE@ICAEB[GFGCKL@FGEIFADMLCAEJM@ELQECEIG@BE^QKKLQCA@EHBIGQ[GEHOMGGDHKH@JOECFCjCBEFDNCACMBCILGTABDLEEOEIG@GFIMM@CGKFBFCDE@@GEAGEEACIcGaHMFITIHDN[AKF@FS@OA@BK@IHM@KCGOKBENaQIDECcPMLQVFHFB@BFBKLGD@FAJOVGIACQ@A`LPCB@JEF@RU@ANS@@RCL\\HIFpRBFRBBDKLLDADJDGBFDABHBEDNF@DGBBBADKDAHC@\\JJFBDEH[DEFDH\\LX@XLBLbT@DNJLDCEL@VJABJNDHB@HBHYFBAA@GNFB@@AFB@AFABFLFBHFCL@HJBAFBLC@DN@HN"],
				encodeOffsets: [
					[124213, 32254]
				]
			}
		}, {
			type: "Feature",
			id: "310113",
			properties: {
				name: "宝山区",
				cp: [121.4346, 31.4051],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@mÖoÖi½[s[YEUJU`SCIEBCCWJY_LIICDWU@@FaBCJIB[ICH[@@CDKEE@MK@@IMCAEBCH@AMFI@SMGEFGB@FK@BHCAIFJNQD@FEBDFMBKGACG@ECWH@@CDDTOEEBGEK@GC@EE@GPHFR\\JHGA@FDBKRLL]RAFH@FJFDKR@FINBFKDCNEBFJEHK@DLEH\\HFADB@JFFDA@bIJGBEPDBGLI@DDEFBDCHDBIJJFCLIBCL@JKJE@ADHDBHJ@HIBBDFHBBAEIJ@BJFAVL¢"],
				encodeOffsets: [
					[124300, 32302]
				]
			}
		}, {
			type: "Feature",
			id: "310112",
			properties: {
				name: "闵行区",
				cp: [121.4992, 31.0838],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@T@@ELE\\BCMJGJSNEbGdHDJFBJAFIEIFCEWG@@gMENSFCVJFAxR~B@IH@AIiI@GE@FGEAFQPDRiV[\\DFSGMHAXHDOMCJCDETBBNVJJI@DD@ANNNH@FILDDMFBDHNDHKL@XDFGLD@EHGFD@DDB@CDDHCDAEAHG@ABOJ@BIaC@CECLKPFNCDCJBiQEIF@@@OGBMIAEEBMTHF@NKEC@QFEGA@EBCKAACHCLJHEFHHB@AFCAIEACIC@HG@KCCDC[ECEED@KC@KJMAAFQ@GHG@BHIJYIGE@EI@A`KDWCaKcCiY}I}S[CYJM@CFDVPRRVWDFLBBG`JCFRFEFFHC@RF@HQ`Q@E@ENBDJ@HFCB@DCCEJBBGDGXMPBDGJ@DEDELEDMA@DJF@DMZ_jMNYUUJILCJIJDFGH@TSVM@DLXZ"],
				encodeOffsets: [
					[124165, 32010]
				]
			}
		}, {
			type: "Feature",
			id: "310110",
			properties: {
				name: "杨浦区",
				cp: [121.528, 31.2966],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@V@CXJDKJZ`XIDDFADJvSRMDM@mFQHM@KCMKMuaOCU@BDAJSX@HKJGD@PNJCJWAGT@R"],
				encodeOffsets: [
					[124402, 32064]
				]
			}
		}, {
			type: "Feature",
			id: "310107",
			properties: {
				name: "普陀区",
				cp: [121.3879, 31.2602],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@F@@FHDL@HFFAPFCSDC@@XGFDH@BDLHNACEFA@ERCIMJEDBAGL@@EHAFENHHJ\\ONQBQCIBC[MKACKI@GGGH@I_G@CW@[DMHCDIBMTDHN@JNHEH@FJFPKFACSBKHDJNABDMDECAFiDEDFDIPG@GLHCNH"],
				encodeOffsets: [
					[124248, 32045]
				]
			}
		}, {
			type: "Feature",
			id: "310104",
			properties: {
				name: "徐汇区",
				cp: [121.4333, 31.1607],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@RADL\\NCPHFfLJaJ@FWLGMGIK@IFMDOYYFOTSBI@IMSAMSACFIDNDCPWGGBHNET[CU\\QjOCERFBEHF@@HjJBJG@@J"],
				encodeOffsets: [
					[124327, 31941]
				]
			}
		}, {
			type: "Feature",
			id: "310105",
			properties: {
				name: "长宁区",
				cp: [121.3852, 31.2115],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@HFFB@HF@DCAELENSJADCNG\\CX@@D`H@JHGHHJ@BINBFUGEDO[MCKQB}AwQEBUIEDMTNF@hH@FXEDFJEJIB"],
				encodeOffsets: [
					[124250, 31987]
				]
			}
		}, {
			type: "Feature",
			id: "310108",
			properties: {
				name: "闸北区",
				cp: [121.4511, 31.2794],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@CSG@BQGODUPWTOBQAAFMECKBGEMFKEOHADDJARMR[PGI@TEJBNG@ADBFND@JL@@NFFCL@D\\@DG\\JJADI"],
				encodeOffsets: [
					[124385, 32068]
				]
			}
		}, {
			type: "Feature",
			id: "310109",
			properties: {
				name: "虹口区",
				cp: [121.4882, 31.2788],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@bA@E@QHSXBDIMI@OHCLI@GTWBIACQAYIOFGCENBBARSPOXCVHPARH@DT"],
				encodeOffsets: [
					[124385, 32068]
				]
			}
		}, {
			type: "Feature",
			id: "310101",
			properties: {
				name: "黄浦区",
				cp: [121.4868, 31.219],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@NEHFLAFDHDPEAMZUHQQ]IMKJG@EPERABHBGRUCCNGV"],
				encodeOffsets: [
					[124379, 31992]
				]
			}
		}, {
			type: "Feature",
			id: "310103",
			properties: {
				name: "卢湾区",
				cp: [121.4758, 31.2074],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VDHQGABAFQFOH@LIiKKHEXI@IbAFZB"],
				encodeOffsets: [
					[124385, 31974]
				]
			}
		}, {
			type: "Feature",
			id: "310106",
			properties: {
				name: "静安区",
				cp: [121.4484, 31.2286],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@DLLB\\NPGLFHUDMYABEeKEVMAAJ"],
				encodeOffsets: [
					[124343, 31979]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/shan_dong_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "3706",
			properties: {
				name: "烟台市",
				cp: [120.7397, 37.5128],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ŤLLllVń²è°xżĢĠÆlÒŤbV¤ĊXnlĢVĊÒÈ°ĊŰÞèL±@џn»VUźċ²»ÆkôVɆkĊŃ²kŤVVwUUVmUa@KkU@mUmmk@UwUkmW@UVIXa@mw@aKULax@Uk@UbWU@yULmK¯@kXVUwm@@JUUknWKUVLUbU@wWykIa@w@mUI@aUVynIWak@@Wbl@@knmK@wnIl°Kna@V¥ğ@ġUķ»¥@UōJX¯¤k@wmI¯k@mwak@@lX@bUJ@VbknWxkLkxlLVlkLmb@bU@bU@VbU`Vb@nL@mbU@VnUVmnU@mm@kIUWVIUKVkkUJUnmL@VmLUaVWaXamU@U@KUUmVUJUVÇwğnm@mXĉV@l¯xnô"],
				encodeOffsets: [
					[122446, 38042]
				]
			}
		}, {
			type: "Feature",
			id: "3713",
			properties: {
				name: "临沂市",
				cp: [118.3118, 35.2936],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@bXll@zlV@lXXmkbVVlU@Vn@@Vmb@XKVXWJ@XXl@ÈbVLUl`@XXV@VVUxVbUxVb¦@WnXVJ@bnVUzl@°ÆxUKlU@mUUnUlUVWVUnVV@XX°V@Vll@VkaXVl@Ux@bmbXLlKlb@b@bUJn@@b@n°x°K@an@@UlLVKVbXb@bVVnK°LVa@UVa@XwKVxnLU°@naV@UWUkWULmVwÝKUUla@aó_@mK@aUU@WUkwVm@aVI°W@@IUw@a±¯@¥kUVUm@awkw@K@kVKk@maXalI@alLWXblaVLVUV@LnK@l@waXaLlnUlLmV@n°J@_VmnIVym£UKmI@WnIVm@anUVmÇ_kġIÅWUXÇm@U@Ý¯Å@@naWIVW@IkK@klKn@naWImk@abkKkLWnWkLWmk_@UaVUKmLUw@mn£WwUmUaóV@UkUm@UKULUwmJUX@WW@XÒzVblJXWXk@UVWKX¤UL@xU@@VUaU@@XmVkLmWkXUyÝLmKXnV@n@lx@bWLnVVn`knULmxUlWLXVb@VK@z¯x¯¼WxKUn@bk@lVVVz"],
				encodeOffsets: [
					[120241, 36119]
				]
			}
		}, {
			type: "Feature",
			id: "3707",
			properties: {
				name: "潍坊市",
				cp: [119.0918, 36.524],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@l@@UK@@L@bX@@VlL@JLUVnX@`ÜXn`V²mJ@bU@@nb@l°xnnĸVÆ°@Ċ£Þ@lWnÑnkʶJmó°w@kk»V@»¥k@V@kw@wVmaÅmaô£ŎXI@mlnKla@mV_UK@kUkw@alWIU»m@WUIl±UUÅUbkJ@a@wUKUaVIÆmXIWaka@m@Ul£XKVw@UIJUkmJVkU@aWKImV@UxmL@bX`WXU@U`ÇkUak@@°UblXkmLUKmL@VULóVk@@Vlbn@Ub@ċaUJUbIUlVLUVVbVKXVlVXU@mb¯@VmKUwLWx@Ub@VUb¯KmLUU@aWaUaULkK@Vm@@b¯L¯w@ma@m@UUU@U¦lJUXVmkb@nmXVWkbIVxUV@VUbWLXVLW`Ux@nk@Vn@x@VkJ@V`mXk@VxV@lVI@VULVUIV`°bVXXxV@VWVnL@xVUb"],
				encodeOffsets: [
					[121332, 37840]
				]
			}
		}, {
			type: "Feature",
			id: "3702",
			properties: {
				name: "青岛市",
				cp: [120.4651, 36.3373],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@nUJXL@blVUnIVlIVJ@UxWLk¤@V@nlbXbWJÅnUJVbVL@x@blIaÆVVVk²VJ@XnV¼JkX@blxlV@VLU`@nkbLkm@nWJōó¤bnÆbUn@xlxU@l@¦@¼Ul¼ĊUnW@nĠmÈxUVIVnUVV@LV@nVWbXbUVbnK@UnKVmVIllUVLUJVXlJ@nnV@nmVUUm@Vna@K@mUaV_UaV@aV@@aanlKUkKklwlKXwlma@UVI@akW@l@bnxl@°nJxl@°£WŎIUÑn»lamô¹Ŏ¥VaUUkmkġWɱIUUŹ`@kk@ĉƨřV¥_Ç@Ĭ¤ÝL¯m¯£ƽóķwUW±ī¯kōaĉĕkğmó°bW@UKkLUaVmz@V@UxVn"],
				encodeOffsets: [
					[122389, 36580]
				]
			}
		}, {
			type: "Feature",
			id: "3717",
			properties: {
				name: "菏泽市",
				cp: [115.6201, 35.2057],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@¥IVUÈmÞ»@UlU@Un@VW@UVmkk@aVUUKVÝ@UVknK@UV@VVnIV@wnmwmKXaWaXI@UV@Vy²blkVKkamU@kb@Um@VmUkmKmkXKWwkU@Ul@UnK@UVUUmKXwUVLwKU@@Wl@@wUkV¥@@I@W@_V@VWUw@UUa@aaWa@@_mKUwl¯amzmV@WKnU@kWLķaUKbÝVmV@UWÇbÛ@X°UbW@XmVlk²UJUbmLÇxÅWUzl¯Ll@VkKXUbWJ@bU@¯@kbLmKka@l_WXºVbUz@Jn²V@¤lXnV°Ln`WbXLôVlKVUxXnlXLlU@bVV@XJWLUVnVV@@nl°nnVKÈbVXÆJU°VnXVkV@@xVL@Wlb"],
				encodeOffsets: [
					[118654, 36726]
				]
			}
		}, {
			type: "Feature",
			id: "3708",
			properties: {
				name: "济宁市",
				cp: [116.8286, 35.3375],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nam_nKlVLXaIl`_@KVVXI@m@w@@k@Knô@n`VbV@@LL@KVVn@VX@VLJl@VUUU@Uam@UkwKWaXamkJmIUVUÈblaUnV@kVKl@@lXL°kVJ@VÈnVJUX@VLXl@xVLnU@VKV@aIUaV@bĊUxKkVJXUlVUVaI@WUI@KlUnwmWk@WXIWUL@Wna@Um@@UVkUUlanWW@kkU@ykWkaWVUlÝbUU@kJUIU@@JmaókLKÇUUkKWLk@WbkUUabmKn¯°¥V@XwV@VanaVaU_@Wlk@WÈ@VUÈVVÛmaklKÈ¯lLVUX@lK@aX@@kV@VmV@VwnJV_UWUwXam@kW@wVUkKVIUUVmU@UV@IVK@aUL@aV@LmUKmx@ômLkUWJ@nXmlUxUL@VknVUU@VL`Ub±LkV@kUKÇbÛ@UWó_mJ@Wk@@X@VLxUKVWxLVnUV@VmL@Vk@VlVXxWLnlLnVlUnn@@VlaV@nlbULkl±aUzU@@VWJXbWbnLnxm@xUmJUUU@@VmLUl@VUÞVLUV@bllUn@VUXm@@VkV@VÝ¼ÇnUVJ@¦nnlnVlL@Þb°KVV"],
				encodeOffsets: [
					[118834, 36844]
				]
			}
		}, {
			type: "Feature",
			id: "3714",
			properties: {
				name: "德州市",
				cp: [116.6858, 37.2107],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@¤@VmbVXnVVbVJX@ll@zlVInl@@bVxUbĠl@ÈblaIxXVWb@L@nULWVXXWWLnL@`@LUVVL@lVnJU@UUkanVôôb°¼VÞXIÜbČabôWXÞWÈzÆmnLVJ°ÈnlV²lbnW@@UUVmnwmkkKWkla@mVIUKUaaUwmnJU@@amIk@@bVlkX@mmUklUUa@_UaUUV@wwWkXmW@I@WUaÝU@UXaWUU@UUVW@UUUWUn¥nUVa@m@k@alU@wkLWa@UUm@@wnmUwla@anKn_@alK@Ý_@@WUUUmlkaIyU@UwU_Wa¯yU_mWUwkImm@InWWUk@@UVWVkW¯U@VL@b¯b@l±¦@VV@lUbV@kxVnUl¼XV@b@lV@nIWxnb@UULxÅxm¯aUwU@mUÅVÝKULm@bmKUXó@"],
				encodeOffsets: [
					[118542, 37801]
				]
			}
		}, {
			type: "Feature",
			id: "3716",
			properties: {
				name: "滨州市",
				cp: [117.8174, 37.4963],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Vb@`bVkVlnV@nlWUk@al@nJ@bV@InmVxbVbVLUJ@nkblXlLnlmxnUV@V@mXnlbĸ@nnVxb@lnXV@UJ@nVxxnxVbÆVn¯ƒĕ@@wÈçUÇlķVIb@Çmk@¥k@UkUK@aWakUóJW_UW@wkkWK@U@K@XUUkmUUalKXala@U@kkWlkÈl@kVmVIVmU_awnwVW@wwU@wU£wkJWIyUI±bkVUJ@nmVUklXmx@lnbWkVUkLWxkKUUmUkbJ±LÇxUKmkUmkkWamUaVkJÆ_²KĠ@UW@wU¥nUWwK@aÝUkÅVaVK@akLW¯I@bnbVx¯JWñWbUL@nV@VmbkUUV@IÇak@@bWak@WJUJWL@bXV@@VJlb@zUlUUImnbVmz@°UV@VbV@@V@L@xLmKUnmJVXJ@VkLW@UVUL@b"],
				encodeOffsets: [
					[120083, 38442]
				]
			}
		}, {
			type: "Feature",
			id: "3715",
			properties: {
				name: "聊城市",
				cp: [115.9167, 36.4032],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ô@VWnLan@VKÞLÆUnVV@xVbn°ÆwwKVV@maXwmJU@@k@aWUk»VUmlw@UVa@kUU@²¥@k°a@aK@UU@mmm@ówÑ±¥¯@@wKmwI¥kU¯UmakJmIUaVkKUkm@VUUaU@UaKUK¯@wUVUIUKVwk¥wbV@xn@lWnXxlL@`XlJX¦l°XxW¦@¦Uln@@@Um@@VXVmx@¯bllUnUJ@VULVn@bxVVL@bVlnVVblVÈnVlIVJLôlJ@xl²"],
				encodeOffsets: [
					[118542, 37801]
				]
			}
		}, {
			type: "Feature",
			id: "3705",
			properties: {
				name: "东营市",
				cp: [118.7073, 37.5513],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ͬUǪlô@°Uw°ōĠ¯»Ģç»XÇ@wwƑaÇkwVƑ¯@ÅķUmm¯w@ka@mV@@anIU±m_ÛW@_mWVUK@IkK@UW@@a@K@L@Vk@±U@UV@lm@mUU@kLmxV¤@xVx@xUXmxxbV`UnUJnU@lÇkkllX@l@VkbWbkLVbnVVlWV@@L@VXLll@xVXX`ôIlVXb@bVLVll@@¦nlÈ@aUJkĸVÈÇè@x"],
				encodeOffsets: [
					[121005, 39066]
				]
			}
		}, {
			type: "Feature",
			id: "3701",
			properties: {
				name: "济南市",
				cp: [117.1582, 36.8701],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@²¦Òôxn@nn@V°VlXUUX@Vl@XVmX@JnnlJVxnXV`°zXbV`VxV@zJlbkVnVV@X@`@ÞkL@bm`mL@bkbxnVm@xn@VV@XbKl@xkV@b@l@nUbmVm¦XVVV@VUXVVV@XVWb@VÞVVb@X@JnXlWXx@xUVV@aVKVUX@lK@UIUWnIVmnLK@w@K@UU@a@UVU@¯nyUmanVJVVk@ykaIU@@WU@aXKIVXIl@Xb@al@Èb@JVUlVna@UmU@VKXaòX°IUwma@aU@UU@wVW@Ñw@aI±`kbUkwUmJ@UkmÇUUkmKknUV@mJUkaWka@KmKkULmyXa¯_@WmImmbLmUkVUbUVJbUkkWJkUlIUmkLlK@knaVmkI@mWaLUKUU@@VmLUVLWK@UUUWUkkVmx@Vl¦"],
				encodeOffsets: [
					[119014, 37041]
				]
			}
		}, {
			type: "Feature",
			id: "3709",
			properties: {
				name: "泰安市",
				cp: [117.0264, 36.0516],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@n¼WnxL@x°@¥Uk@nwlUVlXVV@VXLKVUnK@UV@VVLKXb@nlJUnmb@lkLKlVnJklVXIllVaIVUValUnVKannnJ@X°`WbnzKlVnL@LbXlbVlnI@VUU@UmV@U@U¥@VmV@@_Ua@m°@@kmUUm@UVmn@nX@@aanJVUVLmlIVJn@nkVLVa@KVmVLXVVL@@U°bn@VaV@@K@aVkbWaXUVymU@aUImWX@¥UaVwUaVwUUU@WW@k_VUKÇa@nmxkV@LVJ@XJUbVkUWVUIlLwĉVaU@VbJ@bUUL@mVUK@wWkK@UVWUIÇm@UUI¯lWK@kk@UL@lmUVkbÇaUVVnJlInWbXbLxVln@VbV@VUV@kIUK@UWm@UU@LK@KU@Uam_ó@m@L@l@@x@nWJUU@L`k_JWbUKkmLn`mb"],
				encodeOffsets: [
					[118834, 36844]
				]
			}
		}, {
			type: "Feature",
			id: "3710",
			properties: {
				name: "威海市",
				cp: [121.9482, 37.1393],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VbUnVVUxĊ¼¼ô@ÞÑ¯WǬLŎUÆW¹UÇō¯ÑÝkţţóġóLł̥Uwm¥kÝmkkKóbÝ@U¦@mb¯LkmJ@xLmn@lk@a@X@lXbmJUzV@bVJ@n@xblJXzxV@VaKVUXLlmVV@In@VxUlW°@nLVK@zXVVal@@VwbVKL@bnx@WbUJ@VnXVlVxl@nnnV@lV@L"],
				encodeOffsets: [
					[124842, 38312]
				]
			}
		}, {
			type: "Feature",
			id: "3711",
			properties: {
				name: "日照市",
				cp: [119.2786, 35.5023],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@UaVUUKVkJVaVIČb@Vam@ka@Ul@UôVK@UnKVLnKlkWVa@¯l@VbÈlV_V@XWW_@anKVwUmVw@@UnyUVblKVLX@aô¯ó¥mÛĊÿÈ¥Þ¹lUī¯Kĉ¼ʟbÇVUUXmakJUnmV@bUnmJ@XnJVLn¤UzmJUn@`¯ImU@nKVkkmKWbb@xk@mL@KUUVUKkbWaXkK@bkJWbnbl@UL@lL@lxx@bnUVlV@¦²°@bVx@J@¯XUJ@bUnlxVX@VV@bL@nô`@bkbVVÞLxnU"],
				encodeOffsets: [
					[121883, 36895]
				]
			}
		}, {
			type: "Feature",
			id: "3703",
			properties: {
				name: "淄博市",
				cp: [118.0371, 36.6064],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nlKV@nVn@@kVU@²VVaU@wmKXU@UUWwUW¯aU_JUVVK@UJU@kUw@UlnWU_@lI@U@wUml@@mVwX_KWUXKVa@UVUUwJlaXWUn@mlanUVWkIV¥V@VVVI@a@akakLWKna@aVwk@WUbUlk@k@U¯UWWU@mUUVUXkVmVVV@nkVLVÅw¯k@WVXbaUl@bV@@b@xkVVXVxkJ@nk@@VLUlVbVXUVVUzVLVbUbVVWVkLmkJ@n±@UxUVVkV@bx@ÒUX@xVVV@°JXlK@bULUblÆÞV@bLXxmV¦V@xXVğ@±LÅ`IUlVbnbXllVnnlVLÈwK²IlanVVVlLwXlKVlUXma@knwWlkVnU@mVIUl²aVJzXJlI"],
				encodeOffsets: [
					[121129, 37891]
				]
			}
		}, {
			type: "Feature",
			id: "3704",
			properties: {
				name: "枣庄市",
				cp: [117.323, 34.8926],
				childNum: 2
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@yUUUkl@@aVmLXw°»°w@yL@UUaWXKVknwVKlm_UmmUXK@aw@k@mUWmUL@@@£@KbÝV@akwaULmbUKLUU@lm@°mL@nUJVxVXU`mIUxU@UnU@@lW@@bkLW@UVkKÇ°kLlbnUÜÇUUVÇ@@Xkl@XV`UbmbUbU@WxU@¯¦m°nLaVblVXal@XKlLVVÈLKôlnbI@V@VJI@lVVÞaVkXU"],
				encodeOffsets: [
					[120241, 36119]
				]
			}
		}, {
			type: "Feature",
			id: "3712",
			properties: {
				name: "莱芜市",
				cp: [117.6526, 36.2714],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lmnLVlÈVln@VnIVlxVla²_JlUUUVVw²@@mlInlKXUUUVaUaKUVyUUWVUUaVkUK@l@@mlIUwUWlU@w@aU@@LU@Ubm@¯a@V@UKWUUKUn@LUbUKmlm@UIkJnUKUVmIb@b@mWm@Un@VVnnVl@¯@@nVb@`U@Un@¦@V@VUVnV@"],
				encodeOffsets: [
					[120173, 37334]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/shan_xi_1_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "6108",
			properties: {
				name: "榆林市",
				cp: [109.8743, 38.205],
				childNum: 12
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ýVnIW»W@»kUÇLÝU¯¥ÇIUWWÑUWwX¯m@»n@ÜÈķô@a±kČ±wÑmwçċmU»ÆkkVyImĉÿ@Ý¹WnwÇVÅazmmĉ¦ókVmxxU¼VkVm_UlVlk°IVkmJa¦kLmmV@XmKnlUôVXbb@UaÇLğÜÅw£mKnmċwÅ@UkbmaVn@m¯aUJm_k@kWXyl@@kÅamwLUÞmWÅzUKUk±@b@nnKbX¤mzVVxÇn¯@ÒknWVUbkķÈÑWkk@VaU@mUkbÝÅ@Ý¥ÇbkĬXV`kLÇVmalUUanV±nwmkJ@In°KVw¯UnÅ@¥U±bUU±mWbÛKWnUm`UƒVK@bmnmÈÅ¼@VL@xxmŤ°n@VmK²VllKkô@êÜV@VXLlm¦UV°Ș¯²ÿ@¥@ÆĊ²ImĶnnb°bKVĸLlÞ@UȮÜ°IVÞÝÞlx@ķĀWUxèÆ@°XnlĊĖ°mnV²V°ÒÆ¦aÞ@zll@bÞĀl¼nKĊ¼óÈb²±IǪÒ¯ĖV@lxnVlkJlaXwŌĉ@VnlÆĕUÆLèŌŤôxÈlU@xlaUċĕXmIWmnkVVVW_@aÈWUUmk@¯çVm»±W¯n¥VmkXw±ÇVw"],
				encodeOffsets: [
					[113592, 39645]
				]
			}
		}, {
			type: "Feature",
			id: "6106",
			properties: {
				name: "延安市",
				cp: [109.1052, 36.4252],
				childNum: 13
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@kkÇmImUwVkUU²WmVkm@m`mIĢĕUVa@mXÿVVkyUýĕ@l_UmnWKVkţ¥awğ@@aôWakUma¯¯a±£kxmmxUwÝ@xmUb¯KwóÝ@kmm¹Ub@lklVbmnnVUV@xUknƧJUX@LÇWkwLķƧÅwWJkLkþĉxWzJUnÇk@Ɛk¼ÜÔÈKè@°lÈÆk¦ln@l¼@l¯L°UUVÇ°¹`m¼mXkbUaV@U¯x@¦ÇUUmlmUVmnnmlkw@@¦ÅÇLmx¯Ikl@¦mÆ°VUx¯Lm@JInlmxU²mVbkVbUnÈlKU_WlīÈaÞ¦Æ@ÞlanV@VUbl@XlÇÒĸlVaUXlm@Ñ°ÈmUwUnyW£amL@ma²@lVVLÆynXÝVKnxÆb@lk@WzX@lln`IV°b@nmUnbaVlÆ@ČxmnnL¤ÆxĠÛÈKVb@aWaUókVmnL@WUnnKl¥bnIlU¯JlUkVkn`lUUV»wnwlUôĊ¥nnyÆb"],
				encodeOffsets: [
					[113074, 37862]
				]
			}
		}, {
			type: "Feature",
			id: "6107",
			properties: {
				name: "汉中市",
				cp: [106.886, 33.0139],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lKnb@nlWb°bkxĸwVb@łnlĊ¥L@XlÈVblÈKbakVwôml²`n@nVKlk²xŎ°¦VUJĊw@çnWçÞVkUóÛ@¥kwUmX¯WÑk@UymIUwlUn¥mUk²a°¯V»@ÝVÈÝċÅÅVl»@l@a°±@_kammÅba@m@Å¼KknõĠ@m¯LÅwLVxmb@¼kV@mw¯wVakKW»X±¼¯Vkxb¼W@nx@x±bóakb@ÝmU@ķÓÛLkVUmk¯¤ÝLUlÝ@Ýzx@x°bmX¯aUJW¯k@bÇWwÛwWx@XWlb@VÈUlwLnl°VlUô¦U°¤VUxVXUxlbkVVlI°ÅVlU°m@kÇU¯xUlLUlVL@b°ĠInĠ°ÈnK@xÞa²naUyXUKVkWô¼Èaz°JXUVÇV_JVz@nb"],
				encodeOffsets: [
					[109137, 34392]
				]
			}
		}, {
			type: "Feature",
			id: "6109",
			properties: {
				name: "安康市",
				cp: [109.1162, 32.7722],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@bĊaƨèwôô¼b°aXVÞVUÞ@aXm¥kImx¯¯V@anU@UÇéğL@¯¥V£m@ÝÈbKX°wČÿb@xÈblxÈ¯ĊmÆUVnÈ@ƨÜLĢ¥Źn°VnnKaô_ÈwUaXmnW¯klLXÇō¦ÝaÅVmbğUn¥±wÅéVan¥U»°am¥£Ý@wVw¥nUÑUmmVwmķIÅaóVWxkblb@ból@ğÒĉ¤ċX¯XxkÇ@óÆÅx@xķ_kmÝÇ£kblb@`¯²@bk@k¼ÆUČÆÞÇÞU@U¼¯°±bVlnm¦kVVxnJVz@lÒXW°nVlx@¦ôÜVUlÝXèm@è"],
				encodeOffsets: [
					[110644, 34521]
				]
			}
		}, {
			type: "Feature",
			id: "6110",
			properties: {
				name: "商洛市",
				cp: [109.8083, 33.761],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@²nlôb°aVwnKÞI`°wXôw°VĊ°@ÅÞÆVzÞK@x@aLÅ@b@nLl@lnmnLVwabVVnbU¼V°blbÈ@ĶŦb@nÇ@amIyUI@ĠVmôUVwkwlanJ¯lwó¥@an°J_@nóƒó@£l¥UwmaÑ@Um±V_J£JUW¥¯@_k¯¼mUVUè¯b@wmL»ğVmağI¯¤ċIUWXKĵ¦ķaJUbIlUóVmk@WÅÅÇ@mUÅVnĉÇ°kwÇa@waċĀ¯xWLÇa@ÞnU¤°¦@ĠKÈê@VmV@bU°°nwlJn¦WbÝ@V"],
				encodeOffsets: [
					[111454, 34628]
				]
			}
		}, {
			type: "Feature",
			id: "6103",
			properties: {
				name: "宝鸡市",
				cp: [107.1826, 34.3433],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@£@°Ib@¯°ynŹaUlU£Umĵĉ@@ylUÞ@@£kWU¯WaU£¯ÇV¥@kb¯wn¥ÇkUÇnU@¯±kULm@m±_kónUxlbaÇLkUaÇkW@Kĉ¦km@ŁUaķxlw¯aXak@mmakL@mÛ@¼m@lXV`nKU°°@²¤UÈ@VxmôxKlVV²aVwXlaVlx@UVnÇnk°VVLlkIJÇk¯V@knÆn@lznmlVkzVVVx@Uxz@x±¼VxxUlkb@¼ČkVXlĠkôV²wLUKlwJ@aIV¥Þn¯Ün@nkl²kÆ@°aVbnI@Ťn"],
				encodeOffsets: [
					[110408, 35815]
				]
			}
		}, {
			type: "Feature",
			id: "6105",
			properties: {
				name: "渭南市",
				cp: [109.7864, 35.0299],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@ÈôLxU°Þ@mÈnl¤nUôLwX`@ÞÝLUmLôôbVbnºlnÞ@ôx°LanVwÞ@Vxnwnlw²¤b°°bVnlXbó@bĠ@xb¦ŤVXġ£W¥ƽɽó@ýóƝÝ»£XmƅĊkU@ókťaĵÇ@aka¯UV»maUUabUxmKnkm@kmK@xó@¯n¯KÇ¦@ôÅèlxkx°nƾ¯KU¯WķL@VÝIUbyWbX¼Ç°"],
				encodeOffsets: [
					[111589, 35657]
				]
			}
		}, {
			type: "Feature",
			id: "6104",
			properties: {
				name: "咸阳市",
				cp: [108.4131, 34.8706],
				childNum: 14
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@IXyĊwlýKlXIVaķ»a£¯aVU@awÈōaL²»VUln°WÈ¯W»XazVaÞJ@U»@¯Ýbğwly@£kÑţ±WÑ@kaIUn@¯ómţUbU¯lÇIÝb@¤Ý@kV@zĊ@ĶnVV¤kVbmź¯z@°a¯J@¤@bUxb@`xUÔ±ºVXWUnUJLĢ¯ÈKlblmÈXŎ°U°LlkÞK@Èxl_°ĶUÒkbl"],
				encodeOffsets: [
					[111229, 36394]
				]
			}
		}, {
			type: "Feature",
			id: "6101",
			properties: {
				name: "西安市",
				cp: [109.1162, 34.2004],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°²@mVVÈÈl¦m°xla@U¦°ÈV¤XbV°lXÞaÈJ°kVaŤVôn°@mVJlb@XÒŤ²lÒ@¤kzĠxÞa@°¼ĸK°XV°Lƽ¯mlwkwÆç@óÈ¥°L°mô@w@aÆK@b@wÝLyÅUÝÆ@ĉ¯¯UóxW¯x_ÝJmLUx¯bóak±mÝUUW¯ba»óóxƧçĉbaĉxIUV¯¥ō±wl"],
				encodeOffsets: [
					[110206, 34532]
				]
			}
		}, {
			type: "Feature",
			id: "6102",
			properties: {
				name: "铜川市",
				cp: [109.0393, 35.1947],
				childNum: 2
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÆxĸƨKlxÈXK@VWƨIlmV@wVUmUnmUalk@kVaUaóaónKVÞK@ÝW_xóKmVk£ÇmnÝ@¯VwóK@Ç¯XkmVU±¼KbÇŎx@bUV°b¤b¼ĸUb"],
				encodeOffsets: [
					[111477, 36192]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/shan_xi_2_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "1409",
			properties: {
				name: "忻州市",
				cp: [112.4561, 38.8971],
				childNum: 14
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Vx@lnbn¦WlnnUm°²VVVVVnUnºlz@l@J@kXWVXl@La@KULlbnKlLnKLnKÆXn°bVV@bUVl°Un@LnaVJUbW@UX²l@ČwlVVIWnkÆa°anVKn°UW¯@aVUVk@Un@aV@ValwUanmWUk@WVUUanaVwnLVl°@nk@mVU@UVK@wLVKVU@K@UUKVUV@@bnLaVaôlIXmlKX_°KVV@bVV@zV`kblIVUlL@bnV@VĊllVlIXW@kaU²blKVnIlJalbXXlWVn°JnnL@l@XlJlaX@XW²@l_VmnKUblU@mnkVK¯@U@ma@kX¥VmakkLa@a@WIUUVXWWnk@a°a@kkm@kUUmJm@WUUUIk`m@VkaWWkXKmXk¯@WKLkak@±bw@aa@aka@ma¯@LKÇÅkKWbkmġ±ÅULUKVVkm¯LUVVbUwUW¯bmULxWJ@klmkUm@@KnwVkVK@akw@@a¯bKknVUIb¯mmbk@UbmKUL@xUU@klmLUlVXIVVVUVUU`mLXVWbXnW`Å²°xmxU@mĉwU@mbU@UmbkVW¦kJ@X@`¯Im@UlUVVnb@bWJXnmbJUUUUa@UamIkax@@x@b"],
				encodeOffsets: [
					[113614, 39657]
				]
			}
		}, {
			type: "Feature",
			id: "1411",
			properties: {
				name: "吕梁市",
				cp: [111.3574, 37.7325],
				childNum: 13
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@a@w@wlbnJVb@VbVVVInaWmXI@aaUmVUVkn@°J@_W@lIX¥lUnaVV@naV@xĊnV@wn¯wÆ±X_WmXaWUnKV_VVUUUUWJkUVnKlk¯@@kmKUaÅ±KkU@WmI@WUIlUUmVwXw@UlUVwV@LnbW@anU@UaVkô@l»n@naJnUÈLVaÆUUVmVKV²L@mU_lK@UVWkUa@a@U¯aUaÑóÑUbKk@@ak¯mVaUwVÑkWUmK@UUKmXUWÝwUaLUU@aWJUUU@UaÝU@WL@VKVaVI@WnU@alIVK@kImIkJ@m@@@_K@x@kaW@U@Vmn@UK@mIJUXV¤XXWlkKkkK@XmJVakImJU@ó¯LWKUV@nUVLkxmKkLma@kXKmmLabLmK@V@mXVÆUxX@`nLaV@@VmLUVnLlLb@°²nx@bVUxlb@V¯bUV@zVXVĊXVx@lVn@VnnmU@LlJXVz¯VWVXbV@bmnVUVkÇþÅ@XVxmbUlVUlnW@Xl@VLXÒ@bÞJ°¦Lò@nUb@°X@XbmVUVnb@xx"],
				encodeOffsets: [
					[113614, 39657]
				]
			}
		}, {
			type: "Feature",
			id: "1410",
			properties: {
				name: "临汾市",
				cp: [111.4783, 36.1615],
				childNum: 17
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nW@@UnLKabKnnWL@lnblKnLlwKVU@mVUXL°KôV@nIlJUbnI@WlLllLXkWWU£VWInJ@VL@nm@UVX@lb@@wL@`@n@V@lw@nVmVXWmwnUla@_lKwVlUn°xVKVXXWlUVVI@K@Kn°KwlVlU@kna@V_WnmUVm@kXml_@mLlKXw°m@_ôJVUV@Xl@UaV@Va°Ilk»VwUkVmwUmmVn@V¯@KUwmK@U¯wUVÝ@mJUnWK@@UnKVa_lykUmKÛnm@x@UUlwVkXW@a@U@@K@kIVnammVakUl@wX@@k¯@VVbml@°UbULmlVbnbÅK±VKVXUJWa@ULWaUU@@U@aWK@UkxUKLUUUJ±UkL@V±kk@kam@UV@l@LWl@n@VVUxLlUUx@VUVU@aIUlL@°mLUbkUUaWUUaUU@aWKLWJ@bUL@VUVVbU@m@a@kmKmnĉlUKXWUblbxmIkU@xWb@lkVxLXmzVV@bklVVUzm@bk@Vx@xlU@lUbVnl@Wxnl@n@UbVmLmb@`X@lUX@@xlnkLWaUJnnWVVn@l@bULVV@lV@XnJVX"],
				encodeOffsets: [
					[113063, 37784]
				]
			}
		}, {
			type: "Feature",
			id: "1407",
			properties: {
				name: "晋中市",
				cp: [112.7747, 37.37],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@lInJlJ@ULkJ@bmV@XUJUbL@UXKV@ÞVbV@VVXI@bVVKVbÞxVXnWVL@VnLVlXÒUVxUb°nl@bl@LVaôÒÒVb°b@VnLnnV@lmn@lbUV@JUVVXkl@lUzmJ@xXklbUnJVUbnUlbV@nlLX@lakV`Ub°@XVJnUL²KlxnI@KV@lbUbVVKnVl@zlm@U@nI@WUaVl@@mVU@XkW@nkVKV_Vwy@knwVa@XalU@Vnml@X@VLKVaÞbnnlJImVKnVVVInVlU@m@mXK@UmyUI@mWUUakamw@wUwmLkakwVmKw@wUam£y@am_W@UU@knmmamU@WUa@knw@UUUUV@nJm@mVUkKVUUUkKmwKULKUImV@lUnnm@mbUK@°bUnmbUmkkWUb@am@UXkK@a±@V@ĉÅVUXVxUVkLWl¯@@bULUlm@@nm`XlWakIkmVUbUL@Vm@kI@@Km@VaXI@W@aU@kUVU_KbJkkÇb@nkKmLwÅW@kVUUVU@WUIJmIXmma@_kyVaUUlkUm@kUx¯Lm@L@LUJUkVWXUWUL¯wVmUkxkL@`bkmVnxXUWUnm@kxU@"],
				encodeOffsets: [
					[114087, 37682]
				]
			}
		}, {
			type: "Feature",
			id: "1408",
			properties: {
				name: "运城市",
				cp: [111.1487, 35.2002],
				childNum: 13
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VlnJwkaVaXWVLĊknmnLl@@bnV@UaVU@UVK@aXIKXL@bVVVbXVVblVaVnK@¯KVkJ@bVVU@UVwkVKVwUUm@@Xk@K@kVUn@lbl@²l@UlK²VVIVVKVLlw@VXL@b@VV@VXbVK@XbVIUWLU²ÆLmaUankVKVa¯@nkUaU°@n@@kWaUVaXUW@IXKVw@UWU@W@@UUU@mn@`m@UUULkUmJIU@@UK@U@anak_@wmKUwmakVkmKVk¯bw`kwUIÇx¯»ÇaÅmn@@mmUkV@wkKW@kxmLUkĉLÝkxÝw¯lóVUmV@ĀVVX¦W¤kz@`Vx°²ĸ@Ul@xêĸǊ°¤VVlXLWnXxmV@nUl@"],
				encodeOffsets: [
					[113232, 36597]
				]
			}
		}, {
			type: "Feature",
			id: "1402",
			properties: {
				name: "大同市",
				cp: [113.7854, 39.8035],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@²£yl@ČĖ@bĸĢbĸXaKŤnn@ŎôllÈxnVnÞÇV@bnXllL°KbVb@J@b@UxlKXLlKlXk@UlkJlkUVKXUÇVIVm@_nÇLalwVnU@UUwma@aaÝaLmUk@@W@U@@XwVWÝUUUk@@VmLKV»nwUwaUL@`mzJUIVUaUwKUaVIlJôanÑlLVUn@a@VV@@UUwVK°Vn_lJÆLéW@UUUÅ@»lm@aÞIVwXWUUkkm@U@aU@mwU£VWU_kWmXwW_°yUkkK@UÇK@kkUVymóKU@KWIbUak@mJ@bkbmLkUmkVUW¦@lnb@@V°ULml@nkVaVmLUnk`±@XWW@kbÇ¦X¯WxI@xmbmxXlWV@bÅUz@Jb@bÞbU@Wbk@xk@WX¯VÛWÝbÝUkVUU@alI@a@akLWam@U¯UUmÇL@K@aU@¯VUkKmX@`@kJ@nVUb@lbVÆXVWULU`VbkLUV@XWl@bXJ@VbV@Vl"],
				encodeOffsets: [
					[115335, 41209]
				]
			}
		}, {
			type: "Feature",
			id: "1404",
			properties: {
				name: "长治市",
				cp: [112.8625, 36.4746],
				childNum: 12
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@UkLky@IJVa@mÞaWy@_W@_WXVlUVw@nw°K@mUVamVkU@mmmnLVUmKXaU@IlKVUnK@UmWkX@WV_V@akU@aKWIXyIUVmUnUa@WaXUVKVmkUWVkULU@@VbKbIUm@mbVLxWUUkn±V¯wbÅJUbmLkbmKÅKbVnUbVKUbKUbmLKmbaKkUm@UnnVnxUVlUxl¼k¯JUbU@Vbk@WU@UVóI@`¯nWxkLK@nk`Wn@lUnVnmXU`@mb@lkV@VnklVVUblz@`nbWnnJIVJ@XUVVUV@lÆXxnKlL@maÈllIaLV`UlVV@@b@XJWUb@n@L@lJn@@UVKVaUlnlJXbkWn_@mn@VkVK@a°@XklKVUUwVWUĊÆ@U²@@blLVWn@@bVaXllVnnaVma@¯VLnan@mVm@knUVJ"],
				encodeOffsets: [
					[116269, 37637]
				]
			}
		}, {
			type: "Feature",
			id: "1406",
			properties: {
				name: "朔州市",
				cp: [113.0713, 39.6991],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XXWVXVWnnlnn@èÆ¼@xlVnblVÈUVl@blnLÜĊmUkU@Ua@WI@aXk@WVUlKUaV_VKXWUUÅka@VaU@mlI@@_nWLVl°UV@@b@LÈKVn°V@VnXblK@b@bkJ@bVVlUÞVÞaXÜ°UXWl@wl@XaV@Ýa@aa@IVyÆ@aXUWknwna@wJXw°WÈ¥kI@W@kmKm¯IUmkXWWkabkImJUkL±aVb@lWXkJUkĉk@UmU@aKkVUkJlaU_y@UU@aUU¯LW`kLWnkJóbUbmK@aU@UVVL@VL@UVULK@xUL@VUV@nml¯@UkmKUxmbVbUV@XlXVmnVbkxUbU@bm@@VUlUVb°@VX¯m"],
				encodeOffsets: [
					[114615, 40562]
				]
			}
		}, {
			type: "Feature",
			id: "1405",
			properties: {
				name: "晋城市",
				cp: [112.7856, 35.6342],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lVLbanLnKVaLVaLUVaUmaÆLnLlanKVaÆIa°x²UlmVVXwUKna@VnJaLa@UV@@alUkKVKnkmmVwUkw@@kxWUXW@@mk@aUa@a¯aLkKmwkUm@kL@K@aWIXmVXWkUVakL@UVKw@aUK@UUKmLU@¯nKUwVUIWJUWmka@UXJk@UkmW@kLWKVx@bmI@VUaVU@a¯@UUmVKmX@±`kÝKVxUL±akL@VbLkKmV@XWVUbVXb@lm@@lW@@xklVUbnnmbUlJ@@L@@Vb@WXUlkxVV@wn@ÜmnLlVkz`UbmL@V@XLmVnIÞ@VU°x@VnLxV@LU°"],
				encodeOffsets: [
					[115223, 36895]
				]
			}
		}, {
			type: "Feature",
			id: "1401",
			properties: {
				name: "太原市",
				cp: [112.3352, 37.9413],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@VV@wVKnLVal@na°naVJUlmL°a@b@lx@bULUlmx@Ln@lVknl@XIwKVn°aVXVxUaVU°KnUlUVLKÆV²ĢlnXalLÈÆLKUaVkUanmWUa@WwkUWU¯y¯Ñ@anIl@@aVUmIymULUUVakaU@@LmJkw±LKmVUI@W¯VaU_lkbW@kK@mUkaVmVaUIVmalkW@wnIVy@klkWUUVI@UVkam@knU@mmmK@bblVUX@VkLV`@n±KUULUnVVÅUbÇKmVImbm@k¼ó@Ulb@VmV@bXmaK@UUxkVV@xWUxVnkVVJ@XnJ@XlV²LÆVbnL@l@°"],
				encodeOffsets: [
					[114503, 39134]
				]
			}
		}, {
			type: "Feature",
			id: "1403",
			properties: {
				name: "阳泉市",
				cp: [113.4778, 38.0951],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°@nb@lb@bbb@x²al@lbKXU@mkUWkkmUUVwV@XUW@naVklKXblKnLnLVanImaXKlLaV@U@KUKWalXK@£WKXUV@VUUUVW_V@W@@K@UIWmXUmULnJkImmÝaUbLK@UWk@mnU@kVWb@Ubmx@lzUx`UULml@XWl@UV@nk@UVb@XJm@@Vknyk@zJnUV@bk@mJ@b°Ò°zXVlVXx@bXVmnVbUlVb"],
				encodeOffsets: [
					[115864, 39336]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/si_chuan_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "5133",
			properties: {
				name: "甘孜藏族自治州",
				cp: [99.9207, 31.0803],
				childNum: 18
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@aXam¯wm@±°wUwV@UaVw²KU@UU¥a@£ÞôxKnkmX¥IUÝUwlk°V@ÈKUwlkUyV¹mx²XllÑW»lw°UŎnJl¯°V@wôIVÇnnUllLVÇLô¼XW£@±@¥k_ÇJkUékwXa@Llw²Vxbm¼ÈxlLÈVWÞn¯mÇÑUÝlÛkwlĉmULmwUJç@wkm@ÑlUXÑôġVaUÑ¯@wķÓkbVmnU@@y¯IķKV@¹aé@kmÞU°¥@a¯@anKlblU¥@óğç@Çw@wklaçÝ±k¯±@ğÝUÛmÝ¯w@kb±¯akXWÜkXUÆÇU¤X_ƐwV@¤XUbUIUlÇUkġ@aXČmlUlèUV@mVk¦Vx@¦±¯¯¯anlW¯nÅw@w°KVak£m@klKknÇU»óKīlaUaV£@¯@ÆUVÛÝÇXÇlÓlŹ»WUğJ¯£mxLĵôºXVlUll²bllxónn°ÝU¼mJU¯nV@êĉ°Uĸw@m@¯kmXamÑ¯aUwÝKU¥mÅn¥Wmn¹n±ƑƆÇôXê±ǊnUôlĖkȂVÒ¯¼VnȮ¯ĀnƆĢ@k°V°¯ĢVlkVxm¼X²Ŏ@VxknWÜ°U¯nÆÝ@`ôÝ²ÒÇznmX@xè°K°ÅUČĬóĖÝó¼ÅêÒbmk@V@Òl@nĉÜêx@ĖmlÅJ¯¦óxȭ°Ým¯LĵèĀ@Æl°żX@xmkV@z@°blnÞ°J@bn@Æ¼UVUóóL°X°ÝLxUn°Ĭn@lnL@Æ@nKÆxnUnVInĬmÆnxŎ¼ĊIĢóÞ@ĊƨbUmV¥lkwnLmÅÆ¥XwU@wwUÞ@alUUÅUVkkm°aU°Ó°w°Ub°a²K¯ĕ@ÈbÞĊa»XVm°InĬk¼VbaJô£VĊankůnÜU@anKnĮbÈmÆ»nIé£Ġ"],
				encodeOffsets: [
					[103073, 33295]
				]
			}
		}, {
			type: "Feature",
			id: "5132",
			properties: {
				name: "阿坝藏族羌族自治州",
				cp: [102.4805, 32.4536],
				childNum: 13
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@l@@þ²I@lVL°wnJ°UĸŎèIlwV°¤nĮ¤ÝlèL@@xlè²ôĊ_ĊġVÈôJżīlbXÆÈVkxÇVn°¦Üb@è@nn@@°UÈ¥WÇ_Uala¯¯UÇk»mVwk»k²°VxlL@¤_@x`ÈĖöb@l²alXa@bnK°¦VK@nnWmx@nUnl@@llĉk°l°UXkmW@Un`kÇLWÛÈVxVVlVk@lIXb@ylXÈWĮWŤzy@mI²J@n°@VJ°aÅ@ŎkVÇkaUwKVwV@nkm@±ôkôĊJ¼InÑm±nIÞXÈĊxĊUÈbÜyÈ£Vkw@kVUVm@a»ÜbÈmUXwÝxUn¥@°ġÅaJVkaW¯Û@W¥UŏĶ@¯kUŃ@aI@mmanwÞW@mw°»Uřk¹±WxVx¯¦U°zţWw@°ÇVÑk¯@y°a£@mnl¼aÝÝakwU±aĉImlĵn@m@kkV¯Ñmĸ°xl@XVÞmlÛÝĉUÅ¥mwÅ¥VaUwXġċaVůÛŹlwU¯Uó±xÛV±¯¯n¯mċLmnĊm@_kJWaXmwUĉK»@mwXÝUÇkKÇw»naUw±kxK@WbxlVêlÈIl`@¦@²X¤Wó»KUÈKkkmVmUÈóJ@x¯Uk°Imō¯VxkX¼Òkk±WwnUºVzklVxLÇ@¯UklVxÞVJW¦nmlLówÝ@¤b¦V@VV±LUxVbU@Vx¯x@²n°xnWbb"],
				encodeOffsets: [
					[103073, 33295]
				]
			}
		}, {
			type: "Feature",
			id: "5134",
			properties: {
				name: "凉山彝族自治州",
				cp: [101.9641, 27.6746],
				childNum: 17
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ĶóKnw°¤ĠIXV¼kźÔkÈWÞÈÜUVÅ°@@U¤VbkbĬôL¼ÈVlmLlkn@l¤Ub¯L@xÆx°mXmk°b°°²@¥Uwl¥nU@VUkçVnkWċbĢ@lÈVVkJVaVW@£UƏxW`£ÈVVÅlWXÛlW°b²la@°xnÞVÜĠÞ²@l°Þ²èkbl@xÈx@Ġènal£nUÇ²@ÞKnn¤@¼°U¼nVXUbnĠUVbUlV°LX@lVèÜUnK@_yXVyUwmIU»VkÇ¥ÿkkV¯m±n@n¯ÜanVVÆz@bwÜbm@wa@kmk»@a@VUUów@nb°mXmnVbÞVôanwJak£lwLÅnÝ@wl¥IÇÓ@UL¼kVÇÅó¯kVmmw@n_Vn»°LÅ»@éÇçŹīVÇÝ@ÝğUaVÝ¯ķlŭġl@óÞÛċ@¯nkUÓm±IVġUwóKUn±¯Kw»KÝVnl@óxUwţ£ĉUmÅÇÝKÝUlmK£UV@ÞÈW¦Ò@Ĭnny@nÒmV¼@°Vbl@VlnUUwl°a@@llnk°lbnKWĀnUVxU²Åm¦ÛÇÅaUVb@¦m`móXUmmxÅ@±Þnè²U¯»mVm@wU@wÝÝmLa@VÇUkl°¯VlkV¦UmxaULUèVx@kIUxmWV¼¯VmÈ¯UnlÈ@m»ÅVWxÅbÅğW@km@kVV¦mlnn@ōl¦ÅÆxk"],
				encodeOffsets: [
					[102466, 28756]
				]
			}
		}, {
			type: "Feature",
			id: "5107",
			properties: {
				name: "绵阳市",
				cp: [104.7327, 31.8713],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ńlV°@ŐĵVX»ÆUĊÑJw@È»m»£°Kk@ÇnÑÆ@w°JUwnw@wbVb@VlźLUwa»aUklyUUVakwWXwWUxkLmn¥mwkUXlJw@aIk°X¥W²l¥aUIlmkklÈL@m°nlWUaW@V@UaV¥@ak@Çk¹K@aK@kKkÇX@VU@kx±VèkIWwUVUkkKÇ@a@wkml¯@kUWn£WaaVwnaVÝw¯@UaWxnJÅUxUma@L@mbUU±VVnkxUÆVm@kkKW°X@¤ÇUkÆÇnU¦¯kmLVwÅK@UóbÇÆV¦L@±êX¦mVÞkÜÝnWU@k¯wķn°ÒUlln@@ĶmnkĊJ²bVlxÞbÞbk»mn@¤¯bz@l°UÒ¯È@xŤXyV¯°¥Uww²XlºVŚ¯¼nx@XÝmxnb@nJ@b"],
				encodeOffsets: [
					[106448, 33694]
				]
			}
		}, {
			type: "Feature",
			id: "5117",
			properties: {
				name: "达州市",
				cp: [107.6111, 31.333],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Uxn°bnlUnÒÆnn@n¤LnxlUV@Ælx°XXxl`XVWLè±nÈb°b@²x°KÜ¼°ĉV¦lJnU@¦ÞJÞğmLÞ»xUlbVÆannalVÆX@lnŎVmUmaÅXa@aWm@£@wĉJVkkkkmnk@mna@alKJ@ÞwmÅÅ@ambkU@KUġKU@mak¯±a@aĉÑÅaVwXlw±V¥l@@ak@@£mĉÝónWV@nÝÇÇxUmbaVkkk@m@m°ÝýXmakÅī@@mb@@xmnb@mxkWL@¯b@WUXmWWKkbm@kxXmm@LUlxlêóKnUallLlLó°m¯JVUK@xK²Āô¦l°"],
				encodeOffsets: [
					[109519, 31917]
				]
			}
		}, {
			type: "Feature",
			id: "5108",
			properties: {
				name: "广元市",
				cp: [105.6885, 32.2284],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÆLĊx°»Ŧ¦WLÈ@xÞKÜ°ÞnVxÅĀlÒnJ°a@wV¯l@XWknKnwVÈ°XXalX°VI°bWna¥@w°n@yÆ@nkÞ@°¯lJn°IÈlUlXÅ@ķlUV¥VUUÝÞUU@UwJUkĉm@ýlkWUwVwWJk@VUKlUkaVUmLkm@@UIk`@UmlUkV¯ÇXKÝ_mm¯@U`kwml¼±KV¯¯Vk±Vk±kzmaKUnÇ±bk¦±X¦¯WlJ@bxkIWVlxnm¦nlKVwXWxXlxUbVVkzVlb¼bVxŹKUk@Uaa@xmxVx¯Ix@ÅmÒ@Èl¯L¤n¼"],
				encodeOffsets: [
					[107146, 33452]
				]
			}
		}, {
			type: "Feature",
			id: "5118",
			properties: {
				name: "雅安市",
				cp: [102.6672, 29.8938],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ln@xèVInxVKnĊklxkÜVÞÒnÈm°nx@¼ĊLVnxWXblI`@nmĉnKČôÅlUÑmUK²¹@ÇÅVÓÅ¯VýÞWUVmXÆbnwKUÿ@UmmIUb¯¥Uw¯ÇmçmanUm»UUlk¤a¯bVU_WĕmÇÅ±ĢUlUlÛVçkU@W¯KUVkUağVmaVWUmV»¯@»m£mÝL±@ÈmVk¤mb@ô¦kVkamL@b°@b¯¦ÝVn@lêb@ºUĸL°J@zV@nmUlaĸÔ@x°VÒUbóĢÒWkV@Ò"],
				encodeOffsets: [
					[104727, 30797]
				]
			}
		}, {
			type: "Feature",
			id: "5115",
			properties: {
				name: "宜宾市",
				cp: [104.6558, 28.548],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VlÈnlXnWLX`m²nV@b°xĢçlnVmnn@@°UzlV°nÞÒkxlw`UnVbmL@albÞKÈÛmÜ¼°@XÇ@wmW@ÅKĊLlVLVŎçÞL²±ğkw@Uy@¹lKXlKVa@wČ@w@aÇU¯n@@wġakaōK@Å»VakUWmķwkbğ¥mLak@ġÞ°¯xVVÞ@VxVVWxXlxU@k²WVÅULmèULVĊklĠVJVx±nÅ¯¦mwğ@mlğkkl±@kUk@¯±ÇKkxl¤bImx"],
				encodeOffsets: [
					[106099, 29279]
				]
			}
		}, {
			type: "Feature",
			id: "5111",
			properties: {
				name: "乐山市",
				cp: [103.5791, 29.1742],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@kVkÆkV²UlºÈIlxLXèÜlUXUmkbVèx°@@¼°Knnn@mÆIUbnJ@bVI°b°±@nK@mVakkKl¯nbmĸèl@VnÈlUUwwmwnm°¥LlLnU@VaImbkmKnk@mbLVJVUUVnkVmb@a¯JUaÆkk¥IW¥KlwÑmÝU¯kVy¯@@mmnUkmġè¯w@aU±mnW_XKWmkÇmUkóbUÝUanmW¯nma@xVôUV@b@l¼n@lb@xnÛaxa@yUÅmUÛbm°@mn²U°llĀÈ¦lUV¼nJVxUzWz@`mL"],
				encodeOffsets: [
					[105480, 29993]
				]
			}
		}, {
			type: "Feature",
			id: "5113",
			properties: {
				name: "南充市",
				cp: [106.2048, 31.1517],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@È²VmLnblyl²²UUl°U°²L»knlx_V°@nnÞ`WL°ÈUVlnkV@l_JV@n@lnKV£ÇUV¯m@laXUUbVx@VkôJU°Jn@wUk°wnUV_nJmknmm¯Vwk¯ó¥±ÿL@wLVUkUbX¯mykI@a±Kk¦ULmaXVm¯Kz±klUIVbÇJkL¯lUÿUlUkJUmUUkVVklKk@@aU@J²x¦kĬ@¼±ºXnWbxU@xx@lL@bLlº@Èl@bU¦Vb@U@XbVkX¯m@nÇKkllknJV"],
				encodeOffsets: [
					[107989, 32282]
				]
			}
		}, {
			type: "Feature",
			id: "5119",
			properties: {
				name: "巴中市",
				cp: [107.0618, 31.9977],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VUlbkVVLUl@XIUxVxXkl@þĊnVlIVx@VVÝVÞUVU¦kV@ĸWÆô²@VÞn@Vaôb²W@K@XUmÑUW°¯°Ina@y_lWn¼lLUbô¼Kla@nkUyôÆx°@n£Ý@¥mVkIU¥Ċ¯Û»¯L±w@¯aÇa²mçKXUWk_Ww¯WwÅk@UkVmwK£@mmmÅmÑkVmamnnlmIU`Vm¯xVlx@m¯IVóIUl@UwVaVWkb@nU°VÈU¤"],
				encodeOffsets: [
					[108957, 32569]
				]
			}
		}, {
			type: "Feature",
			id: "5105",
			properties: {
				name: "泸州市",
				cp: [105.4578, 28.493],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VVXwVKnwnVnl@b¯xmKUbVn°°X°@blLènV@Vnl@ULnmmUnaVV_ĶV@wnJl@@kkKVólaUwnJmwUlm@aUaôKVnJWbÞ@VwVLX¥VV_Þ`wWÞŹmmnIn¥W@kWV¯@°kILk¼Ç@k¤±XknmÝ¯UlÅÛKWV¯klUwkLÓ@U@w@ġXVWX@UbVbV_kÇVlU°lnwŎ¦ÞaÆ¯nmm¯Um¥nkVmkl_ó¥¯UÇl¯@Lk`¯ķLUy¯@mw¼ķ°ġ_ÅU°mlnÇVUÞ@_JUnVUXblĢb@x@mV°Èb@xċ@@xUbkLWkL@ºzV@lxĠ±²"],
				encodeOffsets: [
					[107674, 29639]
				]
			}
		}, {
			type: "Feature",
			id: "5101",
			properties: {
				name: "成都市",
				cp: [103.9526, 30.7617],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°n°m²°ÜUw²ôV°VkxÜźUŰČbĢlaÈL»@kwVÇ@nÛÆ»ÈUÝ°Kl_V°U`Vbn@VbÈLaVU@ƨ»VnIlUUa±lIk±@VnKmÅ@WaK¦lVōkKÝ@maXÇmw¯IU@kVwUmVIçÿU±Å@¯È@xK@wLUbÇKÅ@mÝ£@yóUóóUxkI@WlIUabaVĀLmxÅaWUnVÝXUþÆ°UÔÈÆ@±ºLnVVÒkóÆ"],
				encodeOffsets: [
					[105492, 31534]
				]
			}
		}, {
			type: "Feature",
			id: "5120",
			properties: {
				name: "资阳市",
				cp: [104.9744, 30.1575],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@èUJVnxU@lV°JnxWÈnbÞ@lLŎUk¥LXbÆ@nmLU@zlbXmlnVynLçJVbUnómUnamUan¥lKV_²aValWôn@nbVK°¯VblW@kklUnlV£°W@wUXk°KVwmVkwVyVI@wkmVÅ_Umm@Uÿmbk£xUaVw±V¼V¤kLWxU@UkbyXóm°V@@zÝÒkKn±U@@_VVkÇaVwnLWalm@@kkVVl¦kIV`±n@wKk²aVUUV¤nkxmUkVWVnLUbVb`kUUmLUmX@`ÅbÇXbWLXn"],
				encodeOffsets: [
					[106695, 31062]
				]
			}
		}, {
			type: "Feature",
			id: "5104",
			properties: {
				name: "攀枝花市",
				cp: [101.6895, 26.7133],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@bKÞnÞ@xV@xnUn°¼V±mç²ÝÆ@wnnVWnôn_@¥UaVbÆÈÜn¥Æ±VUwVmXÿmLkal¯km@k@¯bkVxmVUkk@Ua@¯»UnmÑ@mzm@īÑX¥Ç@ÝxU¦ÅÇUkx@lbUWVXmV@xĵĖ±@@¯xUÆLnÆmx@nXL±lUUVwKWak@WxkbÞĉbUn@@@xó¦Ŏ"],
				encodeOffsets: [
					[103602, 27816]
				]
			}
		}, {
			type: "Feature",
			id: "5114",
			properties: {
				name: "眉山市",
				cp: [103.8098, 30.0146],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Vx°¦VanJVn@baVbkJ@XlJVwôôôV@zÞ¤@nÆÈLVaK@xL@w°ÇÆ@²VĀmWXKWaÈÆa@_nWVnKVlV_UaVamKXUWwnmmwÑm£@ynUkWĉUkWVkkV±çkJmkKK¯¦mnnxxVxVÇkUmk@çķnmak°LllUb@nmL@¯²¯aUJ@amIVaÅJnm@mm¯L@»¯@wUçanlVWVÛkWçKkwÇJk¹±VUÅlġV²ÈÆnXĖV`U°ab£lkVVn¼mVnbèÈn°"],
				encodeOffsets: [
					[105683, 30685]
				]
			}
		}, {
			type: "Feature",
			id: "5116",
			properties: {
				name: "广安市",
				cp: [106.6333, 30.4376],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VlIVkVĀVk°lKÈIUaVJlk²yLn°UWnbVKl¥²L@blJnzW°alV°Inô¯KkKkkbVmôLkéwVk@KnnWlwn@laXLnXVW@X°a@XKlnw@man@w@na@@wĕġġwUkUWb@mk@¦¥mUÛb±yÅn@bml@kV@lknVbmVnlmbÇk¯bWyk@V_UamJ@I@WaVXamIVWkUkbVaUUx@VnkVU¼bkKUxmK@WxnV@n"],
				encodeOffsets: [
					[108518, 31208]
				]
			}
		}, {
			type: "Feature",
			id: "5106",
			properties: {
				name: "德阳市",
				cp: [104.48, 31.1133],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nUW¥²é@K¥UÈÅôa@VÆLUxnKl°V¥ÈmlÅÈV@£WX¯lLln@UVÅlwUm²UVVna@@KnbVVwÆImXwWkIVwÝĕVUaIèmKUzkmWnka@y@l²kJ²VbVkmJUƧ¼@UVbÇKUam@Ua_¯VUk`¯LVÞÇÅ¼mÜ@UÈx@l¼ÇKkbWVxUbÆ¦nxÆ¦ĊV"],
				encodeOffsets: [
					[106594, 32457]
				]
			}
		}, {
			type: "Feature",
			id: "5110",
			properties: {
				name: "内江市",
				cp: [104.8535, 29.6136],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@²èlUUllXĊVXlmV@zn¤ÒnxmnXxlUnVlwmU£VVUbl±L@x²mU_lJ¥UklU@ln@kXbmKUxÈblUU@`V@²mlLÞÑ@yU@¯ônWzaVlV@XwlKU£»aVaUwm@mwUVUwklVÇ²LlKVm_@ykUm@mUçkKmxkIUÝ@LUJ@n±kºLXb¼@mmIXa@mamnkWKUx_U`UklwUwmUbV²akbmkn@`UmÒVxUbI`UaÝÈ"],
				encodeOffsets: [
					[106774, 30342]
				]
			}
		}, {
			type: "Feature",
			id: "5109",
			properties: {
				name: "遂宁市",
				cp: [105.5347, 30.6683],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÞĖUxlJXVb°@xUÞmbUxbXbm¤VX@lk°ln@xbÈ@lLVlVUXxlJç²UlwV@@UÈWlLw@wVwXaWm²¹@»lī¥w±I@V@bl@kLUllUVVn@mmUwXċbVb@VUkbmamW@ka@k@laUa@¯b@mmwó@@lkXUa¯°LUamm@ókXUb±bU`kLm¦bnVmbnVmô"],
				encodeOffsets: [
					[107595, 31270]
				]
			}
		}, {
			type: "Feature",
			id: "5103",
			properties: {
				name: "自贡市",
				cp: [104.6667, 29.2786],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lIÞÇbV_JVaUwnÑV@_lmnlab±UVanVxkxVlV_`wVLlXnmnb@WbnJ@n»WaKl¹²@mVI@KÞVlJnw@aW¯¯¯UmVanL°w@akmmUxmULWxUUÝKōèUKUkĉKL@ÆnX@xWÈ¯@Û»nÇÜÝLka@bKnUaVm_xkLX¦Jl¦ÅlVb°I@bnaUmlUVUVIUKa@nmlnLlnaJUbV@"],
				encodeOffsets: [
					[106752, 30347]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/tai_wan_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "7100",
			properties: {
				name: "台湾",
				cp: [121.0295, 23.6082],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@\\s@pS}aekgKSuSsMß`¡CqZ·be@Q^o@gieMp]}}Ľc_Kk{ùA¡r[uom@ÑĥJiq©mŉq¯Bq]ÙYgSåk_gwU­isTEĕiqiUEkue_OSsZaWKo¡­qycY£w}ĩĕS§Z©SN¥SyLÑ¡±Ks^IYPdY[UoFp}´\\¬\\j]eÜò¤¡ā a\\bnUãº¹Ìs¼j®[cíȈEĝĆ`ļf¶®K|VØDdKGpVnUFjpHF`B[pMºxÖjbpÎxp¬|ÎŸÜÒC²®ÜApZG~dÞàV¨|¸`|²tx~\\~|dFf^zGĄŚhdL\\hĸ¼OªP®lV`p\\]Xpllæ¤CpQ|oF}fMRiNSon_²qämMNM\\"],
				encodeOffsets: [
					[124853, 25650]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/tian_jin_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "120225",
			properties: {
				name: "蓟县",
				cp: [117.4672, 40.004],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@EUDAEI@WNMNCBFAHFFNACDJDPBD@@GD@DIFFHEFGDBDEQOFG@EI_KG@OcJQM]RMEKBGPG@[LaCIICBWKCEEG@WBQHCDFD@HSLEJI@IHWECFGAAEKCGDBFCBSBIDCKKHEADMJMFABKOKEQAA@IEEG@GIQAEK@OZEESMOLlu@SLUTYFQCMG@@SQUAYKAACA@IB@BDB@B@DC@@BGAEFAA@BEGKJCC@AGAIHA@@JC@QEIP@@A@EGIDC@O@C@@@@CJCWKABFLBBEBSQGBAAMIEM@AKBcJEN@BEBCFMAEFEF@J@BG@BFABECKFG@AFQ@@F@BEB@@A@@AAAKAE@GFGDECEFEECBKIKDELDFEDYH@EIACDCHKBEB@BAAC@ADBHABKJIAIJICEDGDCD@@A@A@DHCHJHDFEFGBKRKBGIK@GIMHSBCH_BOJECCJCFKKMD@DNJEDEGC@OJCJHRUL@HRJ@H[DCNKDZHCTFDHCFFKR`TANVDFZRDLFARB@HPAPG`ILAR@TERNDFNHDLCLDDCXDYbHF@FEB@LDDVE@JPNfXPINCVDJJD@NJPAJHLXHDNANHhB@DPNLRMTBFRBHHr@`NBFEBOCCBIAQJDHCHLHFA@HSDCRLFTB@HEFLNF@PELBDJALFLTC@EPFLLP@tUHQJDfIHGTB^JTCPDLKAIBATFPADIEGECEMJ@JIAIHGECFEAGDI\\SPOXAFCL@BQTQBBTMZECYGAHA@GJAE@HCAEME@IECFKJADDBABLTHHG@ILEAMNDJCDHEBF@@JNFJELDFKTOT@JETBFFHBHEHKI@@IJEJ@XKEOUMS@AF@CEB"],
				encodeOffsets: [
					[120575, 41009]
				]
			}
		}, {
			type: "Feature",
			id: "120114",
			properties: {
				name: "武清区",
				cp: [117.0621, 39.4121],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@FWôµ@IFCLIB@EHNBp]AGEAKAEDMGZKFGBGME@ILGP@HEFB@BXMEAHUGC@IHCLOD@X[NWHWPKAEF[@EKIOL@EKGBNMJ@EIEHKBIC@BAKMIACCFQZCF]DB@ERAKADIHGEIBCGIIECFaGLZO@EFCNGAGDGAKL@BMG@IE@ADSDEH[JGC@CGA@BMDeK@EIACFE@@GG@FIAMM@CCGC@EM@ADE@CFMAAGHBDKIEAJG@DOGCDEKAGIS@KFCHKAEHIE]BeKNO[IFIOELC@A]GMBKVYCDDgGAICARc@MW@AQE@DGI@@AQ@@BKBAIQQYEFW@CEADIGGBCEIiMEMF_LGEKMBBDWEBGRC@E_CHYGCH_IAED@FFBQh@FGJaJ}AHRAREF@bE\\C@CT`FHC@\\BBF@BID@HGDDJ@@FAHKBARECKDAZBJIVNHCTA@EREAMLHDAFFBVFFC@RNRETHD@FOJMACH@CAB@P@DF@@FGDWE@FFSIEMKQDYCCHKb^JADOCIDGNDBdBCFJB@EC\\A@BJEA@JAAAD@HHD@LFBCFF@BERDHNhZQHMBGHOACCEBWEGD@PSJKCGEUD@CINLFGHE@AJK@HDABBHTB@F`DBFLBBHEDARCFG@ABJBAPVFE^FBGLGCFG_BMLEXGAAFE@@JNRVJHFALFBEHQJCTbNDHCF@PlFLJSXCHFHfVBTNJ\\BPJXC^FAVNFCHFB@FFH@JF@\\ABCFD\\BDMCAAJKQBGAILOEGHILECQLWFENJHADC@QxNHFJNLDFA@CBA@DUÂmR@FBL@BD"],
				encodeOffsets: [
					[119959, 40574]
				]
			}
		}, {
			type: "Feature",
			id: "120115",
			properties: {
				name: "宝坻区",
				cp: [117.4274, 39.5913],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@TZbB@JHD@DODCLM@AP@LL@BNH@ETFN@`E@DNG@CHLBCJA@AICFKDDBKA@\\N@AFNAGRBFjFFFL@DHLBLFQPcXAZMJ]GAVHAIZJFNE@JpDRRDCLFDGXA@EFF@CFFPDfEBDB@DCHCFCJDJIJBLI@I@CB@@ADBB@FALADGDC@@H@BB@FZGFCCE@@FMLALJDAFFFEFDFCB@@AHCF@L@@BBB@BB@FC@E@@R@BEL@HEFD@G@AH@AIB@@@FEFEBALDDEFAFO^IF@JCBBFPNJJ@D@PRDCEKBAXL@BIFD@T@JE@BHHJORFDI@@B@JGH@@B@BDDLIFFHCD@D@DEE@BAAAB@DAF@B@H@NGLJLMRDNMfGIEPMI@GDAKK@KIDIJ@GE@CFDN@FE@GFEPGV@TCDFKHBBF@RW@DD@@ID@TJFKIKLI@EP@IGBCLAEKLEN@KSHIGYACSD@SEAMBBMGEBMQBCMIGKFB[D@HDLPHDBC@IFITDLG@IIIFGVBNJDLN@VIRI@YIAIHIC@CLKZCBEE@JECEIHEAKGDGECBGEEM@@DA@CCCBBEGA[GEDBBoNAAH]MKiIAWKQoIIPMFQAEEDMH@FMSUYIeF@EK@BIOEKJEBICFKaKPFAFSE@LWCCFMHDDEKESBOGBKIEIODLG@CCDEQCEDWEMDIEIB@EHGEEDAEAa@@HqDEJGF[AECCFa@WCEIKAAEQB@FCAE^YDERDDJBLNABD@AJGLJF@FNIAMLH@FPKLJ@FE\\BFOLGXMXW\\C@KPGD@JHDGVFBWN@AEAGFO@KH@JNFAHEHYLNHFCLBFBBHo^MAFGA@KJED@Jó¶EX"],
				encodeOffsets: [
					[119959, 40574]
				]
			}
		}, {
			type: "Feature",
			id: "120223",
			properties: {
				name: "静海县",
				cp: [116.9824, 38.8312],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@NGFMDATCNDR@CCbINEHNJA@C\\EEGVE@IhE[wepc¢·²^QEKIEKIgiQDkehY£uSDBMkUDOJDHC@GF@CAFBFEN@CQ@BeP@@G@HD@@MHQKi@[IGCOCESE@GMA_OcCGDu`a@VZzKDkJBLNXGDqKEWE@cFEFA@ISIi@@KMABJGBcMuFEzGVH\\ATSEUBeALCEMG@CEBUHUCGXaBPtUBBFIBFTDFF@DDKBFNGBJPHXDDMDCLJ^mBIHIL@LR\\@LCR[@@z@NFD@LLBNb@RHDBNTPT\\F@BJF@BXCFBHHBDLFB@HODADE@@JHVXCPDHCFTLBBFNCDCCCU@@GAABEHHZHBCAEdEjFDD@GfD@DXFCHF@ERFDLBH@"],
				encodeOffsets: [
					[119688, 40010]
				]
			}
		}, {
			type: "Feature",
			id: "120221",
			properties: {
				name: "宁河县",
				cp: [117.6801, 39.3853],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@BFLBFJXDb@DEFD\\BHEFIrC@Gb@FBCBFFGH@FJAJFNCXFFCRDCFDDH@CKJPJFALPHTALFCFGCENDDKXF@ETEBObLELJDFALIPFAJL@@FfEZJTVENG@CNFFRBNEJOpJLRBXjJNLG^BBpMAAFC\\HHBAFDADDB@@CN@FFAHFDCHLHFBJGFCFUNKJJTD\\XUXF\\^F@DDDQXXBRLRCBDFEVCDLVDpUl@LEDJHAPRFGL@CETGPBTCDDVI@CFF@GFDCCVGLKEK[Y@MECISG@BKNSCGCKWEAaEBEKNGFSECO@GGM@GYI@DÅCMLHPTF@DJHAVVNKEGDETJ^[TJNNd@NOAMFYJ@@GFANDPEJB^aOadSTQSI@MHBDIEOKCG@EEFCKCqXO@@DMFENCDDHCCGJ]AKFoDaGGHYFDHKJiCMFGC@EQ@AEHGAC@IEAATKOHGIC@IXIFEoGE[JCFCDHNmRADFZMF[EEBMO{GU@AOW@@]ZeHBDEHBKEfQkuIWBs@EC@d[@[^EDMTKCEEcI@cDAB@FCBCACmOCG{PYHeBgPwPFDDALFFFCHQGSD@BHFAR[TaFYXMASUiGFL@DQNCJI@@D@PLDN`ETEFIGMCGBCE~CAIFDPEHGEQPHJADFJGHCJLB"],
				encodeOffsets: [
					[120145, 40295]
				]
			}
		}, {
			type: "Feature",
			id: "120109",
			properties: {
				name: "大港区",
				cp: [117.3875, 38.757],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@JFFL°_`ONJKDDFIFZN xlb~yFVNRrdJGzDPVFBCTNND\\UR@E`F@@Ip@IWGUoawOEE@ÏDgK{İEEMFëCb@KwOCDHHKBDJCDEEEAGHOABFABMCgDLSQ@CFEBMgYIDQINE@AUSwSAdYEHQMEyK[KI@GRMLE@@OqOoBOnpJ@BmEAFHL^FDB[C@BBDVFAHFJENB@sNEjQAMYsUgCSBGDJH@\\LjGR@NC@@G@HO@AfR@DM@EFEADBE@@HGDICCPlVANTC¤vgZlfRChjLJ"],
				encodeOffsets: [
					[120065, 39771]
				]
			}
		}, {
			type: "Feature",
			id: "120107",
			properties: {
				name: "塘沽区",
				cp: [117.6801, 38.9987],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@|ODHnPBDADEDA@CB@ddJFFLDNSFC\\]\\@@cFD@nACOMW@M@ITURBRZNHNWRQoOj½fcqAqeiDÿÍyÓįFL|Ch@ÐFFxPpbHVJXo@@JCTR^BPABQA]^MB@bE@@FQBFVJRH@FXtPNZSBAja@@NDTLJrQTHFXZFB`"],
				encodeOffsets: [
					[120391, 40118]
				]
			}
		}, {
			type: "Feature",
			id: "120111",
			properties: {
				name: "西青区",
				cp: [117.1829, 39.0022],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@LHAHRHATh`LHNHDG`HDGZ`D@FQDAHXFACNAFLVRTBFOfHDCVBFQH@HSXHEPFB@LDBF[bDbLFKJBFLADBDjLvCPEI]FGEIGCBEUSjcFiBIVWfaHCjN^HtwBBFGPBJGjFBEGECGDONMFAP]TDHQOWCMGAMHKIJEIGQ]aDlUG]VGEGDC{PEbBZmE@@GH@BCA@FMQCFMYMJECELCMI_P¯`]R±¡¸odfx\\gF@JUFFH[F@DIBGMMFaJDDQ@MCSDCBENMH"],
				encodeOffsets: [
					[119688, 40010]
				]
			}
		}, {
			type: "Feature",
			id: "120113",
			properties: {
				name: "北辰区",
				cp: [117.1761, 39.2548],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ROHFFGCOJEDB}DFHANDJHFEFSM_KC@O@CJ@DIRM@CEKKALFKACHoLSJSIBETDJaEIIE]E]K[MYUYQILC@GF[MGNKEK@A@BCWECAIFEFYAGFOMI[OFuDiKACBCEKIAELaKaCE\\CA@KEAFOWGGTG@ERUACDeGEPSAUQKHE`FNjNFJADHHCJFB@DEXZFRRBJLA@AR@@BJ@CHF@BRX@@NQdDBBJhHCCZDLUNA^H@BKDPFEJ\\JMPfL^AJFFGLBDGLET@HJLBCFHDCPH@BIJFCLGABHNBDEF@BCN@@FHDDDN@BNEJH@@HF@DEJB@FfLNC@AHB@DHD\\IFGTCBCF@@JNH@ALKHBHCHBDMFEP@KYbHDEJF"],
				encodeOffsets: [
					[120139, 40273]
				]
			}
		}, {
			type: "Feature",
			id: "120110",
			properties: {
				name: "东丽区",
				cp: [117.4013, 39.1223],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ZV\\N^L^FJFFJIbSCAFTJTIpKDGLBEKLBjHTVNBZWbE\\SBQGE@ATCRHDGEEKECBECxOhOfAZGA_YEEWSGqRKISC@Mb@BiTAMYsOEWG@IQEURA@EF@@acUOXQRYCUDCHDTEF[SUEgAYDcVGJM`iAWDWLQRMHUHgDsDBLHJFCFDFGHBFFVEAGHCJN@RJFPIhBD\\FENCPWA@LFBAFHBEJUEARCDIAEDQBRNa^"],
				encodeOffsets: [
					[120048, 40134]
				]
			}
		}, {
			type: "Feature",
			id: "120108",
			properties: {
				name: "汉沽区",
				cp: [117.8888, 39.2191],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@LMEI\\MTABKN@FCDMH@COAcH[AoēAM¡Wa[MeqpQRMXMGQYQASV@J@NNXDPmBAtJXlveRLFGACFGAYf@^X@BPV@|HNPFA\\FNEEYBCnQGMDCDE\\IHFpEFWJ@JJDGHLPBSFB@JBDGHBFR@@FHDNEjDLICGZEHGbHpCLE^BHIDDCGDCFMNE@CP@rWLDEDFFH@"],
				encodeOffsets: [
					[120859, 40235]
				]
			}
		}, {
			type: "Feature",
			id: "120112",
			properties: {
				name: "津南区",
				cp: [117.3958, 38.9603],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@TLv@CNHFFBHGZFETNPhCVGNGRQXKXCjBN_HIdUZChBVF\\TFECSDGVCZDRQPWdVNA^]RBBAAOQ]DSE@F_Q@[VMCSMADUECOHycIqMQEU}zkawENRDENB@ADG@@HF@YnaAOF|CDFHUHH^kVbCR^JHIFLJNGHBDNPXGRSCO^EBMNCPDHHFAFiEIHOAEH"],
				encodeOffsets: [
					[120045, 39982]
				]
			}
		}, {
			type: "Feature",
			id: "120103",
			properties: {
				name: "河西区",
				cp: [117.2365, 39.0804],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@d@hZNFdcLYXKRCtCMOFSYEGHEAGEDMu@SKAAsx]GMTGt"],
				encodeOffsets: [
					[119992, 40041]
				]
			}
		}, {
			type: "Feature",
			id: "120102",
			properties: {
				name: "河东区",
				cp: [117.2571, 39.1209],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ZBVFFIGABEEA@KXBDOFM[EACJgOIE@QIMGDBHUFEEGAEHECEDGIAKQDWLKZcdQPEP@FOFBJTJ@HNORJf@DBCN"],
				encodeOffsets: [
					[120063, 40098]
				]
			}
		}, {
			type: "Feature",
			id: "120104",
			properties: {
				name: "南开区",
				cp: [117.1527, 39.1065],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@NMVDCG\\E^B@HlB@YEDS@CHsNSiMGDebUXAJEjidVTAFHDFJ"],
				encodeOffsets: [
					[119940, 40093]
				]
			}
		}, {
			type: "Feature",
			id: "120105",
			properties: {
				name: "河北区",
				cp: [117.2145, 39.1615],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@DBXFADB@L@LFHM\\NHED@JKZRb]QMRAFCJBDCBQYADMCAe@QIMP@GSIAIPE@E[EGH@ZEF]^HJAXK@KF"],
				encodeOffsets: [
					[119980, 40125]
				]
			}
		}, {
			type: "Feature",
			id: "120106",
			properties: {
				name: "红桥区",
				cp: [117.1596, 39.1663],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@J\\PNHEZBFEJELEL@BWGI^]FEkA@G]A[FDHUCMNEHJ^"],
				encodeOffsets: [
					[119942, 40112]
				]
			}
		}, {
			type: "Feature",
			id: "120101",
			properties: {
				name: "和平区",
				cp: [117.2008, 39.1189],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@DT@FCHG\\FFOROMEgYc@"],
				encodeOffsets: [
					[119992, 40041]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/world_geo", [], function() {
	return {
		type: "FeatureCollection",
		offset: {
			x: 170,
			y: 90
		},
		features: [{
			type: "Feature",
			id: "AFG",
			properties: {
				name: "Afghanistan"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ࡪ͇وŐǬϠڐŶӂʮǚڦ۾ǌƀ̚ІɣʪҴMوǯʲĹ،˒˰ǋ˖ϪԈiżŬĘͺβ̈Ҕȏĝʱʪ¡ý۷ͪ˟̊ǰώĊԼϖׂ×ࢀAƬʋӧĥяƹ७ĭࣗǭӫλȤΣĪллΛ͑ɳ̡ߛͦ։՗ɅΥԕ²ԋ͡ɿ̳þٝŋğɻسDҵӇ܍થΓבôǝȁԇņ࠿űටіހހåզُƚßՔ˟ڢάҢιŮɲؒ΂ਸ"],
				encodeOffsets: [
					[62680, 36506]
				]
			}
		}, {
			type: "Feature",
			id: "AGO",
			properties: {
				name: "Angola"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ȸصʌԋȘ˕͐ѯ֊æˤŠҬşŲɀɂӨԶ®ƤіHñ̡৴RfՉǞ͕ūԑÖԫ˪̷­ৃȼüκsԴŴϦ¹ĘʹĩСƨϿů̿î́ყZᦵ֤ۋպԽ໳΁᎝Š׋Ж₭ŵÏԃϞկ~ԉƝЙǅÿՈŜ݊̂ޒªΰ˚ݶȨΆӘռːϐĘج«ӊʣ̜ɡԚȵԎ®Ǩʶͬʭ߼ǣ֚сՐĄǎΌŔʒg̎ĸៜ["],
					["@@ɉėɣلͼδʪƘ̀˽̩ǯƍɍλ"]
				],
				encodeOffsets: [
					[
						[16719, -6018]
					],
					[
						[12736, -5820]
					]
				]
			}
		}, {
			type: "Feature",
			id: "ALB",
			properties: {
				name: "Albania"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ń˷ŢέΒȳiə˗ŧ»˙ϷСƛÐgȂү˰ñАîֶŖʼƗƂÉˌθаÂƿɨôǴɥȪďȨ̂"],
				encodeOffsets: [
					[21085, 42860]
				]
			}
		}, {
			type: "Feature",
			id: "ARE",
			properties: {
				name: "United Arab Emirates"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ƭ¤ɱڂƂ۞uԖ{ֺ֪ظՠՎԮǆ˹ŖڑѕGçճƪŝϝǑE΅ʓΏuͷǝǱᡋъ͏࡚Ț"],
				encodeOffsets: [
					[52818, 24828]
				]
			}
		}, {
			type: "Feature",
			id: "ARG",
			properties: {
				name: "Argentina"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ߗ§ѓ̔ԑx࣑@Aሞ͒ϵрؿનԋ୲ȿϙп"],
					["@@Ӵ؇͠ڰॠƊǷ໶ോۊŷਆاࡾ͡Ŧχࠡ౧ࡒɭ़ŷڔƈނ٢Ǝݐжǈфӝiڣۻҩ֟΁ॅࠃ૭ଧȽڥɣࡹT࠷ǽȇÝիËѫ੨ܙŗ׃Հν§Ч߯ઁఛ҉။ǩउĎǰԅǣػƺщԋ̏ࡱř̪͕߱ɗŜ࠳֨ʧҠˆʢѧޛʻڭԹūࡋȣ҇ߏEڃљʋؿؙࠞߦǝ˿ݭ঳Ӄձটލͧ΅Ͽ˔ࢍ֔ӡΟ¨ީƀ᎓ŒΑӪhؾ֓Ą̃̏óࢺ٤φˈՒĭьѾܔ̬૘ěӲξǄę̈́ϵǚˢΜϛ͈ȝॺ͸Ǣƙ਀ȠࡲɤݢԊ̨ʭࠐEޚَոo۰ӒࠎDޜɓƶϭฐԬࡺÿࠀ̜ބռ߂צԺʥ͢Ǭ˔ඔࣶд̀ࢎĹɂ۬ݺશȱ"]
				],
				encodeOffsets: [
					[
						[-67072, -56524]
					],
					[
						[-66524, -22605]
					]
				]
			}
		}, {
			type: "Feature",
			id: "ARM",
			properties: {
				name: "Armenia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@୞ƀǨə͌ƣǛɁ҄˽ʁˋΦɫϘƏl׋̣}΃ӢHżχCʝɤǩuͧʖرȼĄФƛ̒"],
				encodeOffsets: [
					[44629, 42079]
				]
			}
		}, {
			type: "Feature",
			id: "ATF",
			properties: {
				name: "French Southern and Antarctic Lands"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ը˃ߐĿǅɽϣಇÃq҂ŮΎÊǢ"],
				encodeOffsets: [
					[70590, -49792]
				]
			}
		}, {
			type: "Feature",
			id: "AUS",
			properties: {
				name: "Australia"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ߺ́ҜŘپǊԎÉÐঽ˽́ēگ̉ɰ׍בǧ®ԫԭܘŗֈӝܸtϬռõ"],
					["@@̢ڇբ̈́˦ΡЖ͟đϋǴܛŸнɄĹɬܕąѥ˖֭࣬ѭצЋ֞λŋȯӔՃࣧ͜ͲȂ;ηȴźƢࢹ׬ԩϸ͋ڀڹʀڭtӏËԳА܋µݓơϵɩݡjӕǕ׻χއثЭ̫ٱ˫гʝܧ͕нɅػŉׁªˇӕ̇वޡ·ϫ͙ԕέ۟ψԥƪżѬҝǃ݁؉ܩɪӉƄӑÔ߿ʐիԮƻْțьЭ;߱ĸˢРȯزЧ׉ݝƷѮҬŶӞ͘ЬãجہܑԿ˽͏ڛٽΊ~ҀԿ،ѹ̀ǂȘઃԚןz߯Цຓāછ̝ख़˫ߡÈࢻљܯȗǉѱ̳Ϳ܉qՅõݑƶ׿ğֽԁ҃ʕуʁЗˋؕ֛Bࢽ՜ҋǄlӖкŘƚȒ̠ĺאģӼѻࡖƏӒӎͭնsʚϋͰĽڄӓڔřΪτε˳ެиʑʞ͗aјеڎă˄țʦĠӠǢȸŘрęӮΎ؀Úٕ΢׀ۀˬЦΪٜ̰ϤàɴĻڎ̺ԚĤŶȀɞüҬoࢨʖҚώɊ҆ӲѐͲvҘט܎ΠܩΦǚ̗Ј˂ТψǻĸٖҠаȮͨцƜ`ɼτĭdɂτŦОŔبϫҲӽՂMՖÿǱҦДڪϜɘſȾκӒԘ̒јıۺǂeі؛ˢ҂Ū֎ȻҀ·ۼɋʈĐԶʵӬʊ͂ñȠǊϬеɡ͉҇ͻ˿Įͱʙп̗ЭÔʁڜҫ٨ˏѠ́؈ӻʂBѰɍŶʷߤ˵ֈ˼ǐҊǠόľҤʰڞŝОÔʔīӔŌنǈǠŽˬȮѾǆҦtʈ̸̾ʂЩÎՃȾķΛ̨ёÚӇ̥"]
				],
				encodeOffsets: [
					[
						[148888, -41771]
					],
					[
						[147008, -14093]
					]
				]
			}
		}, {
			type: "Feature",
			id: "AUT",
			properties: {
				name: "Austria"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Û΃ӁCǎǻ˧էǇƗܽsщȏۛÞயɐȉ̊ࠧƣĭǅԗŢѕxϝƶźȴƬʪ²ьɹŤɜݎ׸ƮЖ}ˀǣþƜšո̠ń̒ϰز˓ӀΆ̐ÚٶʱЂªϰǁãŃČ̅"],
				encodeOffsets: [
					[17388, 49279]
				]
			}
		}, {
			type: "Feature",
			id: "AZE",
			properties: {
				name: "Azerbaijan"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ʞɣψDGŻ΄ӡֽŒщϰƃ͆Ǫv"],
					["@@ϊËƞɈԈͺѴѵђ׭ϺʸɧۗãƣٵƟ̭̍ȝvзȽ¥ԻѲ̂дʝʚ̿×যإk׌ϗƐΥɬʂˌ҃˾ǜɂ͋ƤǧɚȶƎضʍҐ¹ŘĲбҔɔŚʀ׀ԙ"]
				],
				encodeOffsets: [
					[
						[46083, 40694]
					],
					[
						[48511, 42210]
					]
				]
			}
		}, {
			type: "Feature",
			id: "BDI",
			properties: {
				name: "Burundi"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Á০ɃϢԜßʲӎҀÅ¸ͧǸȏT˗ȹǭ͛ѫ̧̥΍"],
				encodeOffsets: [
					[30045, -4607]
				]
			}
		}, {
			type: "Feature",
			id: "BEL",
			properties: {
				name: "Belgium"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@؜áުǪՐοҦȝħ֧ɕĝһܿϦћßדІϷͶϷ`ũ̒ڪǔ"],
				encodeOffsets: [
					[3395, 52579]
				]
			}
		}, {
			type: "Feature",
			id: "BEN",
			properties: {
				name: "Benin"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ۛįȹ׆ኞǛǦЮ̇̌ʱʞņѶ̀ĨǠξЪĀȀʤˮʘ̠F٘ә˩ȎӽǓͷĘɧСԳʵʳǁՉt՗µണ"],
				encodeOffsets: [
					[2757, 6410]
				]
			}
		}, {
			type: "Feature",
			id: "BFA",
			properties: {
				name: "Burkina Faso"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ֹɐϽ̍Ƀϗǰƥ˦ϙǾÅӦɮΤo˴ښۢŬּɲȴОœΚǢŘɎٴϖǆˀ޼ΒҦŢɀǇՠJáСŔϣӀչНॺȏmֻǿʣЩÿǟν˿ħ݁lϳâ˓ƉωÖร¡qӉŘم"],
				encodeOffsets: [
					[-2895, 9874]
				]
			}
		}, {
			type: "Feature",
			id: "BGD",
			properties: {
				name: "Bangladesh"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@i׽̉ŶÆگʉѬµєǅКΕӨޟü΋˃ҳΧǠũƵʃĠ͗øŽۖ̅لƜԒԫɤȆ̪Հ̼؅Ѽ֮̔ږεВ£ô׏ߞřު^Ӟƛϯ܅ϕµʷӍҢѥƎ՞ɶFѶ೯"],
				encodeOffsets: [
					[94897, 22571]
				]
			}
		}, {
			type: "Feature",
			id: "BGR",
			properties: {
				name: "Bulgaria"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ʎΉ͚Ö٦ſ௾«иɌবȜ̩ؒӴĕѥΏ̫׹˔ӏܣŒࡥ˃Uлޅÿס̊ڧɱة|Ñ֊сːƒŢĝĴƘˌ͌ˀСδ÷̬ȸȐ"],
				encodeOffsets: [
					[23201, 45297]
				]
			}
		}, {
			type: "Feature",
			id: "BHS",
			properties: {
				name: "The Bahamas"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ȵ£ɇӜ̿ʐǾՔʨۣ̎Jӥ"],
					["@@ࣷƅÏ̴Ђäֈ{~ɕ"],
					["@@ƟׯƷņ`ѮϓͪCĪڐϗ"]
				],
				encodeOffsets: [
					[
						[-79395, 24330]
					],
					[
						[-79687, 27218]
					],
					[
						[-78848, 27229]
					]
				]
			}
		}, {
			type: "Feature",
			id: "BIH",
			properties: {
				name: "Bosnia and Herzegovina"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@̦FȿσМ͓ūЃȡƽû˙țūҥݓ͈ͅΘ͋Ȅϭ̾ǻʺЩϾǬΒ̞ȕǼǨϾnܠƓ׈\\Ϟȅ"],
				encodeOffsets: [
					[19462, 45937]
				]
			}
		}, {
			type: "Feature",
			id: "BLR",
			properties: {
				name: "Belarus"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@߼Mࣰ̈́ȚӄېːÿϔԜƚ͖ࣘࢮɁŢȻѲĴࠒȧĊЁǷɧՄս΂Ƴ»Ʊ֦Ʃʎɡ͝ǿڳǉÿȠ˧ȸ՝ܝ¹ʵȁÃхͭĆݷ¡əȞ̿ƥ́ŨڍjफȬࡕàٱmҡɩГeϐʷϴԌǢLͰɷ͌ϊ"],
				encodeOffsets: [
					[24048, 55207]
				]
			}
		}, {
			type: "Feature",
			id: "BLZ",
			properties: {
				name: "Belize"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@OŮĸƴı̞ԔǄZHūǄGaɭƋεôŻĕ̝ÀăīщǓɟƱǓ̅ʣ@àॆPژ"],
				encodeOffsets: [
					[-91282, 18236]
				]
			}
		}, {
			type: "Feature",
			id: "BMU",
			properties: {
				name: "Bermuda"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@OEMA]NOGNG\\Q^McMOI_OK@CQSGa@WNLVWHFLJXVFGJ`ZRTDLeeWKIHGIK@@[MQNi`]VDTBHCJAPBJLVFjT^LV\\RJZRn^RH`TfJjZHHOTTFJP_NOX[EYQQKMEJOLANJH@HQHAARF@ZEPS[U_IcRQXE@EEKKOCGGCQCOGISKYGUC"],
				encodeOffsets: [
					[-66334, 33083]
				]
			}
		}, {
			type: "Feature",
			id: "BOL",
			properties: {
				name: "Bolivia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@य़͟گӳ؈વȲ۫ݹ؅ŗ͡୆ҋऺˆ߾ѳ΢ŏ؆ЫֲՌ࣢αۺȖ˰ƭ̶͠рh܎¤נǸ˶ܩഠزíѠnȈʪ݀;Ѷ͂સƚęؽļ͓ãࣰ֛ݫऴƑ̻ͦ֨ǕΐʑՈTӦʟӟǐʕZγʓa͒এྖūӟĜͧҞɽȤԹƫڋɯρĄӏʿǥaʶ޳јޭ^ัʓЕ݋sҋͥ৕ƉǸ"],
				encodeOffsets: [
					[-64354, -22563]
				]
			}
		}, {
			type: "Feature",
			id: "BRA",
			properties: {
				name: "Brazil"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@૮ନॆࠄ֠΂ۼҪjڤуӞеǇǒӜŖӼBҦ̡ƴ̿Ƌ̻į͔ýޔƿʤ֥ɪ΃ǏࢱǈÈଜʝҴˀǦăӐɰςƬڌȣԺҝɾěͨŬӠྕ͑ঐʔbYδǏʖӠӥʠՇSΏʒ֧ǖ̼ͥळƒ࣯ݬä֜Ļ͔Ěؾષƙѵ́ܿͽȇʩџmرîӃƟϡĪÈ౨ۏӷݏv҄ͅ֏¶ǲΰұԞΓݴɜƶA΢ԖʎċҔɊ̈Ôϼ०ֲێǊŔŴݴϚᘰpθſӔύ̬LؐӀƒǚē͐ӯĔYՀ࿖k˦̂ɸˉǐӷǂļҨѻٸÆǌʲشȞΊƐĮΤ׸ʆ¯Ǯ܅ðśՊ֞ϓɒǀþجŅڜȿʐȤ؀žल̮͎̾ŏʂѪȜȗŉσ̀ŵȖϷɷ̏ƅ܏ɌыÔϳԬϿЮ¥ĢǒˆϠƦ˚ɢҬíȲҚçøǢƗǘĎʐͺõЈĒӔǱξǥʺɪȊŘɿДÒ͒͊ʴؤӼޒ˺¢ȺҫҼ฽҈Ƒxׅمەʾʩ๤Ɓࡃٔր੐̟ඊԡШӱƏҫ঎ʶ࿐ѹఴఔ۝੸व٪ʏܖ̦˅˸੭Ɣԗͯ൹ёշஅୡՙोثܯȿgɻءÒ༽ɹಓęօˇͧƫ૱࡛઱ƛࢁڹηȟԋ࣯Fೕ͓סύवʗ঩ڝ܅࠯ũطƔҫƽࡓȏЧחҥट๕݉ڗ֯Ͻϥߛ։ӑɷӈψЊӟֲڇҬࡹՠ̹{ࡅٰձę"],
				encodeOffsets: [
					[-59008, -30941]
				]
			}
		}, {
			type: "Feature",
			id: "BRN",
			properties: {
				name: "Brunei"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ͬ̾܎ҢЯ·՛Бǭ˹ϥѦ"],
				encodeOffsets: [
					[116945, 4635]
				]
			}
		}, {
			type: "Feature",
			id: "BTN",
			properties: {
				name: "Bhutan"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@΂ˍÏԩۇ{ۿÈՇſޅ͊kǚ֌زҒɈ׸șѺqπɥ"],
				encodeOffsets: [
					[93898, 28439]
				]
			}
		}, {
			type: "Feature",
			id: "BWA",
			properties: {
				name: "Botswana"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ǜƭ˄ӡॎइήĝD̑ʚՑٰŹ՚ϝ஑أݭع˩֓ʧ́ҙãƧГďʽ՝țہ¤БɾΟĸХșȵГЉʧпϑ׻đȇ̐üԠӽߚɧŲAរࠤ|Ჾشಖ͎̎΍՜ͤʮDӂȎưÙ͔ڣ"],
				encodeOffsets: [
					[26265, -18980]
				]
			}
		}, {
			type: "Feature",
			id: "CAF",
			properties: {
				name: "Central African Republic"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ۜÚƺɎƔgȾȏ੔͐Τ͠Ѭ̌ĉ̐ʂüߺ½߆ϴ؊ࣺю;ՐƜĪΫӜԿF΃ƋΓÄʻ̆ʍٖοҢͻT˗֠ѫΖεɆԋغͩƊˉˣęաpكĘ̹ïųȱ˕}ͧǲधнϥĎŗÝʥԕطǐؙĊ՗̴ۓ˸҉˓͛яùדգ²֩ƘԅѻѯޱėʐϦϧ˔̳Ѡï̠ЇѮæʢċΞÞٴȬƴц࡜"],
				encodeOffsets: [
					[15647, 7601]
				]
			}
		}, {
			type: "Feature",
			id: "CAN",
			properties: {
				name: "Canada"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@؎œުxЯ΅̵Å੥Φȿˬ͆ʸ̎С"],
					["@@Хcઝ˂ޯІ̄î૆Ɂ࡮Η|Ʒ"],
					["@@хŝൡϢʥ̘ݩ̌Ưʈࡻư͕ҜðȚࢨǿԨŵ߄ė˺̃дЋ࠼΍Όҩ"],
					["@@։ܿո˴֠ǵ̏̉ݚɱϰȴ࠼ʵʹ؛טƞņѿʼԷΝ݉ϝփǂǾیɻńইܯԅצЂ߫Ȳࣙ¹࿅~ŹʠԼ̐λɬ۸Ԓࢄ೾Զӎܲ̂϶ǋɫ҅Չ"],
					["@@@@@@@@߰äʥ॓ܶگͯDԑϪ̵ϮчʾƻτºˎЂŋ"],
					["@@͡ѳχîəʢ Î͖ʦΆkɈǣ"],
					["@@ঝҧץnǿɪزϲ଼SiǍ"],
					["@@ƼυјżӨɗं˽४ʽöЍؤÞ׶˥ݙ˃ಳȬҽϚ࠭ҁ஡ѣ˿Ӯଗăܴдņڌ˺ޔ؈å"],
					["@@ष¥ȿЪΦҼޖŜپɷXέħřձʛ"],
					["@@Է̍ଉʬۃğଫϘ݊ʼטζࢼʃԎƯʦǅԠ͍"],
					["@@G࡭૰ڄ৐եʡح߾֥࢚؈ؖܨ°ईஞÝఔūૼй¼зس҃פ҇ŃУ࿩חୡŻࢃʨʣуߵ۽ʓοই֩ளÇڏΡÇձ঍Ŀਉڻ࣭ु͙ڏ±উంƕϜ޻ϼّ୲ǔ༞εࡀ͋׺Ѕ੆ɳࢸΟ൶µࣴąƍܫʼࡋ،ळనߗ٨˚ҔࡺѭೢףѶഎЀ॒לҮהç֭֘܌৷لলࢤνݾ˫ಾגȘ෸ɫࡸć۠ɚ޴˵ਚӣʮ͙ຄÛ}۷˪ਜ਼ގſ،ӵ௖Ұߦऔ֌ϸٺݣબੳघ৙͵Յ૤Ӂݰӓംɏբˍͬ܃ټŏͶͅÖऻ؍́׽̏൯̗੏ۑ෇ƋᅛǮుPࢇÍ۱׽ੳω௉૗ॵޡ܌Ɛഘૄᄈ۪సČݔЫߍ֟ˊࣟ˜هતп൸ŨࡆीÎ؍ժ̥ਣսᇷԁ࠯ͽय؁ٓÖ܆ฤ۞഍णĹջӆBନύʐ֛ƛ˧ɚٙىʱٹ̕ϡΥŽˏ¥čȹ໽A౥MϛƷࢵ؃Ŀßˍ͝ޗBࠛGϛƅƊǑøʯeďષлࡽſউ҅Ɂ@˷ƂĥŦnĔȂ̎ЂҦʘӺǙܴǵނ࢕ЂľƬūĺɳ@ǛƆ¥ȤǍēɥ¾ĊȡĊćɚٵːڹ˪ࠑ͘߁̨ݧʃ˝Sਕɔڻŉࠁʺ࡫Ɔו¾ʻƜƫҤ˳IE͓჏BᮝA᭯@ᡃ@ᠿ@៙@ᢡ@ࠛ@᠁@ᛷ@őF྽ࠜ׵δຽΐҳݖŤԨ੻ΨƧڴ৭؎iѠҲКwՌෙ՘࡭ॠՁ׾ޑϚ֣ΈѿѢࡇ˕ࠇҹݛւדπࠋɸࠟ|JⷎNᷲ༬ȭ೘Й࢘û݆ΖৰˀఢĹ఼τ൘Ⱦ־ΑظȠȊЄ׈ęෆݫ૦֬ŖّਔƐ͆ʖৰ·౼Λዸ̭ୄƛࠖÄଊэ஁зຶǷᗘĲܒƦࣆԋࣴьࡩΦժ˼৾ڦĎڴȩࡊҗरä๢ϛಬƄ௬oĭԺݞƦದ˵KߑՖڠڰuϞࡊ࣑԰কͺäघশ؎ૌƇࡘχଞॅݗЭ༠ǝ"],
					["@@нϿሎʬୠщॊіސ˟یࠛфΒ׭ࡰ݊Ŭ࠲Ƈश͹ՆࠉʼץථеະЉĝσൡã՚͓˱ູ̯Ƃฃɪঋ»ཅ˷ᒃű๻āҕІଫɮݙģਛږ֔ĚಘƜஈરƦྷȞᅗã஗jѷ̴ዎͲಗ[ืɚ۶ـגͮᖬԠ࡬ǋ"],
					["@@݉ևಹך˸Ş૸ٔȁ"],
					["@@öɵࢿ|ࣟjࣿőʑ¼ऍѾ̠ИÈነěชң"],
					["@@ڎԽޤڴᒆΈ෺ࢅůջဒʒߒͮሀыୄЏŊν༚Ȑ࢘՗᎐ܸͩ͹ߐ޻໯ϹጘչೲȁீޙೖÇʽכ้ঋਗά೓߲ઙĿŁӕࢪӥଜϯΌɟմࠩ́׿੕ɪᑏڨஎܣ࢔ԕƎ̉ᗱͲᅩӤ৳Ц̌ʂయќ௥Т`ʑᝡƅ܃˾ֆؤ཈dႸņ˫̜̊оચࠊɳϊ͕˾౿Рၳ˺՞ɆࢷԺ݋´ڏ˸҇ʛ຿ŅᵝȈᄫʚഹŴۥ̐࢞Ϧ஝Hˉ࡚٦ݨࡺ΄ᓪɢأի"],
					["@@৊ǯຄńɖʑ޷Е౜αƱݳ൝͗߳ê׉͎ᐡٮjˎ႖ĽएռসР"],
					["@@࣓عय़Խ݆`кѮΨ࠰ɮცྈȱళݟ৉Ǎ"],
					["@@ᕍЙѷςኹѺήΤ׌ؘܰւࠑԦᭊƀ஬ǧᒰ±ࠄʑࣖΝ੍ɃᏝןਫי@ν"],
					["@@ҙ͙௝Øৱɖ҂Ϛீɨܼ̬̍ˇ"],
					["@@ٞϵљϣس൱đࣗƈjӬ൝ÝÁٮࣜౌ˺ஂµÜŎ"],
					["@@̙͢ݠƘࢢƪЩԝЋ᭗Žᑯη౩mŅ˜პϊ④ĳ୯Ʈପࠐ߈ɾᛄ˳๶ӻฺÛறߨޔ̪ࢄĭ˲Џ"],
					["@@ढ˓ကFܨˡȑ́८ȍՔȧଊ௬ë೸ǼႊðീÏ࣒ͅȊ΍ԽɟభǷ੽ĸᜱŻႫcഫļᖁ˔̃ҦĹжࡇξ჋ĺঅʼ͂ΈႾÁ"],
					["@@ŗ٣٩̇޹£༝Ϋ഍ŹଗǼ@@ුؼႮծಆ[ସŬ"],
					["@@ϣy༽Âɡɼၜ]מƻĵĩ"],
					["@@༩ʋఝ˔ڼˎ௮Đஈſ˩ʥ"],
					["@@৽ǏඉBbŤࡴʦҌદǝ"],
					["@@కǥۃȚέ͂áΎજӪÅ৐̇ɫ̣"],
					["@@͜Ε൏Ĥ൩˘ሏߺʠ৫ȮÕ͐࿶ŕᗢ̫ٞЍ"],
					["@@০˕ଽʟ༇ك๥Óდņࣗ΄^̦ڔɢ໡Oए˨ՑϠ׌ώ׊ʲࡴÎοȖዜ¨੶҅මǵ൞ǃڒև"],
					["@@ᖢßᅮŅ໤ɫɡᏅη᎙ǟݻȉᆬJጡԙേʃ෯ۇႿƓՙǡᡷěୈĿׇƭ۞бߙ˽ಛʃЋ͡୫ʣŞȏ෬lȳᖟԋᔧɴឿŻధĸཟªĿЖ༊Ȑб؆ԢÐᖤγ଩բഹǈڼ͘๰Ȩʄ̊஋͠ΥѠᘞڒĝ಼̪ቃĬ᰽Á๣˸۩ͼগʘȁ˺దǈঘ࿲ƌం̺ਬ©ࣤɽٔҒૐƈບĢᢲҀĝ᝚ƚᆔÁᆒÁ"]
				],
				encodeOffsets: [
					[
						[-65192, 47668]
					],
					[
						[-63289, 50284]
					],
					[
						[-126474, 49675]
					],
					[
						[-57481, 51904]
					],
					[
						[-135895, 55337]
					],
					[
						[-81168, 63651]
					],
					[
						[-83863, 64216]
					],
					[
						[-87205, 67234]
					],
					[
						[-77686, 68761]
					],
					[
						[-97943, 70767]
					],
					[
						[-92720, 71166]
					],
					[
						[-116907, 74877]
					],
					[
						[-107008, 75183]
					],
					[
						[-78172, 74858]
					],
					[
						[-88639, 74914]
					],
					[
						[-102764, 75617]
					],
					[
						[-95433, 74519]
					],
					[
						[-123351, 73097]
					],
					[
						[-95859, 76780]
					],
					[
						[-100864, 78562]
					],
					[
						[-110808, 78031]
					],
					[
						[-96956, 78949]
					],
					[
						[-118987, 79509]
					],
					[
						[-96092, 79381]
					],
					[
						[-112831, 79562]
					],
					[
						[-112295, 80489]
					],
					[
						[-98130, 79931]
					],
					[
						[-102461, 80205]
					],
					[
						[-89108, 81572]
					],
					[
						[-70144, 85101]
					]
				]
			}
		}, {
			type: "Feature",
			id: "CHE",
			properties: {
				name: "Switzerland"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ƫŹȳϞƵіwá΅χƙةŀǻ͹ЏơƄһ˵Л¡αǶ˽ςБſ^ϠؚҾɈϤûɲƞ܎MǦǼ࣒ʱ"],
				encodeOffsets: [
					[9825, 48666]
				]
			}
		}, {
			type: "Feature",
			id: "CHL",
			properties: {
				name: "Chile"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@Bም࣒@Ԓw˧ͻܛʻЭӻä؏ʨ࢟ŨੑҸ࡫Ҏୃशۘǭ୼֗૜̟ѢϬ˘ֺޠΎװı"],
					["@@͢୅؆ŘĺɁ˿ࢍࣵгඓǫ˓ʦ͡ץԹջ߁̛ރĀ߿ԫࡹϮฏɔƵCޛӑࠍpۯٍշFޙʮࠏԉ̧ɣݡȟࡱƚ৿ͷǡȞॹϜ͇ˡΛ϶ǙĚ̓νǃĜӱ̫૗ѽܓĮыˇՑ٣υôࢹ̧̐֔ÄgؽΒө᎔őުſݝPЙȷݷ̣Ɖ޹Σoॅ˚१ג@@ਲ਼ӔˁՒʄӰх֒Ņ෤Φ߰ࢴٰౣʔߞݒ˸ඊत̏Ѯგ֝ɠʿ਻ՉŠ˂ல˺༒ϮָʍࠎéूΠԨപ׈എΤబȗ఼ʤۚĵਞӮਆưྺ˒ნˀሤÕ൘ǩ஄ќɌɦњЬֱŐ؅ѴΡ˅߽Ҍह"]
				],
				encodeOffsets: [
					[
						[-70281, -53899]
					],
					[
						[-69857, -22010]
					]
				]
			}
		}, {
			type: "Feature",
			id: "CHN",
			properties: {
				name: "China"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ԑഓΫۏѷ܂ĩخӶࠜڦَϨʡƣԓ", "@@ܩЗۏʺyܢаϠࣾɾӚoȊ͍σσșӟ"],
					["@@ฬˍ঺ׯͼ߃౨Cܰͨ൸ʜѳݱ͙̭˽ः֡ࠇ৵ƪܝ̑ɜܙť঳ѕwLяթӺͯһಙαƀѹܩЍ˂ֽ׭ऑҋۃա୭ʑأϽࣝɭ҂ϴǭ͞ږ֠ѹѲܷ̓ॉ׏ԫթ࠙¡ѓϻѸ֩یƏϕڔʕस׶ݚ͝լuƌѱஓɻϻҏࠇућיࣜҥͦࠝԞޓ֮٥_دՅɯȪ҃ӶʻŻۃɇڗҷ÷ؗࣧڹિޭোିޡୟۻृĩԣύ̃˘Ӈй୭сࢵŹ˻ࢱҭ·ə؎Ȧ͘ૻːЇƍࡍɔЏ΀ƄӜޏƶЙܑ̀҃ࠇīڡJ҉ȳѥūŶ॥҃x÷Ȣ}Ύ؝ʓεƸر͂ʔۤՏǎȧޜࢱƓĴাߔۮۚ{٠νȨ˭ӶӭÙࣟŲ˴ΜϿԺ׳Ν۵ȸॷ՗އسڳĿοɦѹr׷Țґɇ֋رëڌԟǭওĈोȖڿτٵǔ˯ЖҽŦࡓոکʴΑȩଢ଼טࠛՒɽऐ׾őіͭјĐۆࣙঠ൧ͼʝ٦ةϼƫʌųӎ͜ԛȔ˟ďɇިʈȔśȠߤЈ׈ǐࢸő͆՜ંĲͮ̚೜ҔŠȐãӐּɔݱฦဘͲјȈ؆ຒဠˡҲϞ¢ࡆۦĀٖ֔͢èɚו۸ѽப̿׆ڱ͕ঙ̢ηূƝଆŝ৪ԻԲġϤޟӲӿऒnჄȉ૤Ŝࠦůఔԛ৮BόʽঐҌബ̈ాঘ̒׾҈ך˰Ƌˤˍ͔ѴըӀùࡺǝ࠸Ѿ౲͚؞֊נʆ௠ŐڐĥĠ̘ݿזګː٥̳ࠣžӇŃɏΆר࠾Цو৚̓ஆՎQτݸࢾҲːWҪңȦۜмਰƲ૜vసʡ݈̱԰ࡏ̀α̊ԩ̶ࠕ"]
				],
				encodeOffsets: [
					[
						[124701, 24980],
						[112988, 19127]
					],
					[
						[130722, 50955]
					]
				]
			}
		}, {
			type: "Feature",
			id: "CIV",
			properties: {
				name: "Ivory Coast"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ϣUוǒ՟Wহƥ׍ʍ̯ࠫǋvÞۖĄŀ}ͨΣΚˉÈʕɲǾώčО ʔƄB¸ξÝǌĄŜ̸ĶȹڨȗΎæ˸ǘÞŊúɸųٮOƸʖƢgʎĦžΫȞłΌŰϚǽƦ˥Ϙǯ̎ɄϾֺɏɠ஡Ο۷ɕेθܣͧ"],
				encodeOffsets: [
					[-2924, 5115]
				]
			}
		}, {
			type: "Feature",
			id: "CMR",
			properties: {
				name: "Cameroon"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ľ°ӻŇԝŒЋÅ൅nŬڒ͟֊ϧƚǟϖɋŦXɶɎתЎ߸ʒRԄӮ͈bҾΉ־˲ĀΔȌͺžь҆ΊǞךǲȊŢѨɜ՚۾ٲ¬˨ĠƲͫͰˌʂ¶ͮ՟Ê֏֏ҜޅҷTʁÏϥČǻЅӸөμƛŠΏˆ׃ſɩх࡛ȫƳÝٳČΝåʡЈѭð̴̟џϨ˓ϥĘʏÓґڛȤڷɜ੗"],
				encodeOffsets: [
					[13390, 2322]
				]
			}
		}, {
			type: "Feature",
			id: "COD",
			properties: {
				name: "Democratic Republic of the Congo"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@»ঙͶŕˑ̗͓ɟ͍ѫǯϷ±ګț͍OهʍɹԃŗÝýҟɄϡÂ৥ưޝċѧǘӣӤҹҒ੕ͥĒ૿ƙɣĵʇՙȊχƫষĻࡇɨƫט͝ɲƴìٟࣟR·Ҧ̳ΨٟŠȋѰԣ˅ڧŞ˫ϢՕüϽqµʾ́rϥºԳųιtȻû®ৄ˩̸ÕԬŬԒǝ͖eՊ৳Qò̢ѕG­ƣԵɁӧűȿҫŠˣş։å͏Ѱȗ˖ʋԌȷض៛\\̍ķʑh΋œşʼɊĘμƎɎ̪ǰɚđ˼͐ҜSÄʃ̼ƩӶՄӨШɆː۔θࠆϬўքМĪˌt̰Ǝ̆«ӊŀݖǐԾʦ҈¸Ԕúה͜ѐҊ˔۔˷՘ؚ̳ĉظǏʦԖŘÞϦčनоͨǱ˖~ŴȲ̺ðلėբoˤĚԘۙϘķɤƖϲÅҶǲȦΫ݊֏"],
				encodeOffsets: [
					[31574, 3594]
				]
			}
		}, {
			type: "Feature",
			id: "COG",
			properties: {
				name: "Republic of the Congo"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@̿˾ʩƗͻγۏࢸٖҪ̓֌˾ɂ֦ĺäό҆ЗݐʴЈł֒ĝڀЉӺζ঄ȽǘسçɻѢÔξ੘ڸɛڜȣÔҒѰ޲ԆѼ֪Ɨդ±·ԓʥ҇ǏԽĿݕ¬Ӊƍ̅s̯ĩˋփЛϫѝηࠅۓɅˏӧЧӵՃ̻ƪÃʄқT˻͏əĒ"],
				encodeOffsets: [
					[13308, -4895]
				]
			}
		}, {
			type: "Feature",
			id: "COL",
			properties: {
				name: "Colombia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ΫȤЭ˨ʅƅ܉Ŝȱΰƽ_࠿Ӓŕʺ̼ÚтȢ̦иÊΞՆ͐Ѵ̳ȦǄӦȏސǸɚƃ܄ͻ҄ņТ˔ÑǂʠțӶĺŬѢـהΌĚT˦ƺ܂ӖϸՊfäǪڂéڌъ͞ȊОК̖»ɚɛǍ˱գƕɇп͗ʋʓ̷Ĺ׵ɷӭѢÇņϭȄȁâ͹ĳ̵ǫȸéȨ̉ઊĄӦŃעܡͼĚ؂­ӐĪ̔ƟƱҍȇ˯ß׻ǜ֑ʆʟȉэл̨ȃɠ̋ʰ࠹ǁĻǏӸɷˊ˥́࿕lZԿӰē͏ǙĔҿƑK؏ώ̫ƀӓoηϙᘯп҂ʣpժࡤٟϾԍị̈ƤҧɝصŀӵࢤϳɐˍІ֑Њɡā"],
				encodeOffsets: [
					[-77182, -155]
				]
			}
		}, {
			type: "Feature",
			id: "CRI",
			properties: {
				name: "Costa Rica"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@җȆǟǮĬƤȄɷȪͥǔ́ņÅʖəƮÄʑǗȩȓɸˑĊŗǞLʮŎˆʁŠȖǌŴňֆɝȖŊˊéƔǥʜÇȪǲɈҙ͖ͷЂΩ͗õLͷǪűűıƱëǟ©Ǖ"],
				encodeOffsets: [
					[-84956, 8423]
				]
			}
		}, {
			type: "Feature",
			id: "CUB",
			properties: {
				name: "Cuba"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ܨÑڊW߄˹̭ͮ޺Ĩ̔ȡ܈ԳԺϛˢ\\ԆǟÕʁئٌ΅ıȟ֑Ń֡¥׃âளą֜Ҷ΁ɔէÈ̃ʐȥӎӃ޵ɦʥǬભž̋ǐ̀ɀࠗ¨׿ѧΏ[ťȳеğΫĂѺʸǼ̤ϞȈіǎَĄȰĢ"],
				encodeOffsets: [
					[-84242, 23746]
				]
			}
		}, {
			type: "Feature",
			id: "-99",
			properties: {
				name: "Northern Cyprus"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÐJŨȮ؄Yކʢ֧ΧÔƿęǇÙűj¥iĎÑ¾ǋVɫïƿ¬"],
				encodeOffsets: [
					[33518, 35984]
				]
			}
		}, {
			type: "Feature",
			id: "CYP",
			properties: {
				name: "Cyprus"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ãࡱͿЩŊȟͶЎǀ«ɬðǌUÒ½jč¦ŲiǈÚĚ"],
				encodeOffsets: [
					[34789, 35900]
				]
			}
		}, {
			type: "Feature",
			id: "CZE",
			properties: {
				name: "Czech Republic"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ϯǂЁ©ٵʲ̏Ùҿ΅ر˔ӃΰѕȬėΠƧʠؒǾ̸Ⱦ׾ǎɂǆɜīϒĖЊ˓ؼñ¿ɳҘǧŲɒּĥĄʿز»ϮЯʡCŽƯȕÅȑǇ¡wý˹ēϋbšȁ"],
				encodeOffsets: [
					[17368, 49764]
				]
			}
		}, {
			type: "Feature",
			id: "DEU",
			properties: {
				name: "Germany"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@d͗ࡔțS̗ࡢǂҾɰॊͧІˋȞёɹɣ̨̙Ⱥ҅ß́Έ՛ϑĕɛĬɁǅ׽Ǎ̷ȽؑǽƨʟĘΟіȫӄί̑ϯ̟ŃŢշýƛʿǤЕ~׷ƭݍţɛыɺʩ±࣑ʲǥǻ܍Nń״ьֺ௅ƸЇɘ´ςǗȐĨ֨ƗࢢԎ@Ɉ͂Ⱦޔƿ˴ǐǲ۰°Ƽȃ֮вȓ̀ӈٌōՠŸ"],
				encodeOffsets: [
					[10161, 56303]
				]
			}
		}, {
			type: "Feature",
			id: "DJI",
			properties: {
				name: "Djibouti"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ȤʹΑӏȩήɯ̱҇ȅƬȭÏҷb_ʮßɶ˴Ѐ̐ϊήñʪȴ"],
				encodeOffsets: [
					[44116, 13005]
				]
			}
		}, {
			type: "Feature",
			id: "DNK",
			properties: {
				name: "Denmark"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ԋڹ࢟ӄŝΒ௼˨ˎу"],
					["@@ȵ̓ʡĞ؁؁ɮХ՟ŷًŎͽҲ}࡬Ɣɪʌʦ݌À̐ɴڮʂѝʟ˙ĶɽҘŵ"]
				],
				encodeOffsets: [
					[
						[12995, 56945]
					],
					[
						[11175, 57814]
					]
				]
			}
		}, {
			type: "Feature",
			id: "DOM",
			properties: {
				name: "Dominican Republic"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ŀƞپIӾɏɜtƴ̕ҠhʡϐЮ̷̯ͿЍǼϫˡ¢ƱƵ͑½ŷȲˣťͳֻɏƆ§ʎjɬɍʦȲƚÞ͒óҜ"],
				encodeOffsets: [
					[-73433, 20188]
				]
			}
		}, {
			type: "Feature",
			id: "DZA",
			properties: {
				name: "Algeria"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ᮩཽᝩ࿷இϑटćU՘ϵƌԹʊȧЀᬻᆴᬻᆴṕᎠfǌ@ÊQ঺ബب࠼Ÿێɦ͎тচͪجӢòϞ̶સƚƸ͜ɛǲ̃ࢲ¹Ԟ́ՠ߰ҠࣦƢՌΎ߶ʰ෎Ƭർæшůߊͨ࣌P΀ȝֺ¾ǟћƄߟȡۙԭҵôمۊԃRȯԮ͹Ϊຝ˖ݏ°ϵƧۇÔϥŃҟòՇͫΗӺؓέ̘ҵϼƸڒϷςՃ"],
				encodeOffsets: [
					[12288, 24035]
				]
			}
		}, {
			type: "Feature",
			id: "ECU",
			properties: {
				name: "Ecuador"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@҂غǻξ͍ϵԉςǞʀƙބ̎ŴƺԼ͆զÍ΄ҢǸ׀Ͱࡀӑƾ`Ȳί܊śʆƆЮ˧άȣŞٓʽճࣷ࢟য়ͧԥܵǃ֣Ӆ΋ΙъͻĞ΍áw̮ʈȨıΔ"],
				encodeOffsets: [
					[-82229, -3486]
				]
			}
		}, {
			type: "Feature",
			id: "EGY",
			properties: {
				name: "Egypt"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ɽͷǹىɫѩȝƥ˩˔ϛϒ׵ஸđùΐࢯԪࡋٌವ̴ҙ˒ӃݮछǗƣճ঒ݭƨǣΏ@Ὁ@⁩@@ᶶ@Ჴʥڲɐ԰Żά̤Ж૦b߲ɝ࠲ʛϴſ٨ˊΌʊݎêװŃɮеȜ˜ڨȣټ³аɄւ෽"],
				encodeOffsets: [
					[35761, 30210]
				]
			}
		}, {
			type: "Feature",
			id: "ERI",
			properties: {
				name: "Eritrea"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@˻˖ΉӰϋ˒ɏܷ̄ͶֻXȭǬӯȡԛϢʽط঑ǬęʹβఀĊ֒ˆʴؤƐьӒӦঃɴޗҢУବߏҲӍҖӝˀ˿аʧʩȳέò"],
				encodeOffsets: [
					[43368, 12844]
				]
			}
		}, {
			type: "Feature",
			id: "ESP",
			properties: {
				name: "Spain"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@¦״΃θஒ؆ਊƱ૾NࣂƝۦªമͰ͛໺ϡ̨ǺीϝআŊ®ӥߓ֓ઁǯõ˱ԩү͕ہ͞ӑӟϑǹճىǗש٥੧_ߟhՃ͍̓ͅЩê̵˴ʃӚ޷žé˦̶̀Śɬ̃ʢɶրͳԌδèЈƎŬZپϲɪɻфөƝŁӹCɁЬ΃ū̥ɇ"],
				encodeOffsets: [
					[-9251, 42886]
				]
			}
		}, {
			type: "Feature",
			id: "EST",
			properties: {
				name: "Estonia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ĮӸ̱ŁՓ̘ñӘਫ਼ɼ੔Ũ࣮Ƒࢂ|Ŵƣׯӝʞ޵ΫˉۙDܡ̸ρļ܏Ʃ"],
				encodeOffsets: [
					[24897, 59181]
				]
			}
		}, {
			type: "Feature",
			id: "ETH",
			properties: {
				name: "Ethiopia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ԜϡӰȢȮǫּWܸ͵ɐ̃όˑΊӯ˼˕̏ω˳Ͽàɵ`ʭҸaȮÐȆƫǽ̴̕ҧ̴Й̛͎ᩨঽۺNᛛᡃફݟףաeɯ˅ַB͹˴ލΙʝΓ֕àȃĬȟwˇT੟܌ב@˹ˢ@ҾѧƘӻࣴϥȚƧʹэЦԧÒ˸ӐҀrŲʰ[ݲʞࢠЊɾĎ΄ήٜԔи΀ࠠƆܠ঒ǫʾظ"],
				encodeOffsets: [
					[38816, 15319]
				]
			}
		}, {
			type: "Feature",
			id: "FIN",
			properties: {
				name: "Finland"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ūיಀ֓ޡى঎ख़֡ܛݴس΅յఘֻ́ѓޭӟᅡੵໃá๑̯ൃǯӡҞ߿ˠȈࠢСݶАӪނՆ኎࣮֖Ǭē΢ୟЈ˳͜uಒ಻ֲ૩ЪԊɞतѻલ¦ࣘȭߠϊЬ؞ಬ˶઄ͯΡכ"],
				encodeOffsets: [
					[29279, 70723]
				]
			}
		}, {
			type: "Feature",
			id: "FJI",
			properties: {
				name: "Fiji"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@̂ʍƓѭԳŗҩļąτ͖̀ϤĻȼƐ"],
					["@@՛ǯŅ̼оǤˊ°Ӱˀ@ЧՕȷ"],
					["@@é­@ШǨĽЗ"]
				],
				encodeOffsets: [
					[
						[182655, -17756]
					],
					[
						[183669, -17204]
					],
					[
						[-184235, -16897]
					]
				]
			}
		}, {
			type: "Feature",
			id: "FLK",
			properties: {
				name: "Falkland Islands"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@৘Ԍ܎ȿԌʹڦϙʥ̋ଋʥϙ̌܋ϙпϚ"],
				encodeOffsets: [
					[-62668, -53094]
				]
			}
		}, {
			type: "Feature",
			id: "FRA",
			properties: {
				name: "France"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ˣ٭ϡǠș֢ǜ̺ը͎Ɯܛ"],
					["@@הЅќà݀ϥȊñʎjЈɗெƷыֹŃ׳ɱƝϣüɇؙҽ]ϟВƀ˾ρʁʚ̿̅ʯɐٱҖŃĩηݿӅစɬ௧˗ĩԑঅŉिϞ̧ǹ໹Ϣͯ͜ѢԎǆူࢁࢤإю౹͒čؖઠǾථɏˇॎߌέዠپʨێܾǞŪ̑ϸ_ϸ͵"]
				],
				encodeOffsets: [
					[
						[9790, 43165]
					],
					[
						[3675, 51589]
					]
				]
			}
		}, {
			type: "Feature",
			id: "GAB",
			properties: {
				name: "Gabon"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ࡹࡔ։ۚԙࢄ˨ǾˎȲؔǜخ˴¶௢SOৠЌÆԞőӼňľ¯ÓνɼѡشèȾǗεঃЊӹĞٿŁ֑ʳЇݏ҅Иãϋ֥Ĺ˽Ɂ̈́֋ٕҩ"],
				encodeOffsets: [
					[11361, -4074]
				]
			}
		}, {
			type: "Feature",
			id: "GBR",
			properties: {
				name: "United Kingdom"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@҉ֽًǦԱ[ǦҊǥ҈۴ࣔԳ"],
					["@@࣋ࣧࡦŘऄIɕۅݯݩࢄÃäĕݠ঱ֺƇԬढ़ʈͧৰǅķ՝ѓʗͲѣݱѯ૳Rෝɱϻǒ։ϿޥĪם͍ҁǘ௼ࢨݪǺOBಽƔʃͰ࢜ʺҡҐǆռఢ÷D@ŮӤ֛Ԯ_\\৵ƨȧɬ̨ϒˡɴҍЇ·߶щє̨ࢆٶھڤá০ì"]
				],
				encodeOffsets: [
					[
						[-5797, 55864]
					],
					[
						[-3077, 60043]
					]
				]
			}
		}, {
			type: "Feature",
			id: "GEO",
			properties: {
				name: "Georgia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ųάȿִӟ̲ҭĬ̯ʴĺĲ܄ƝఆƋଦЕƦƻԚƂ޶ǭʴ·Նșɓřвғŗıҏºصʎȵƍଢ଼ſ߳Юࣅ¡"],
				encodeOffsets: [
					[42552, 42533]
				]
			}
		}, {
			type: "Feature",
			id: "GHA",
			properties: {
				name: "Ghana"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@೉ӯҳ˽ݳʑݡʆͨηܤɖैΠ۸ɟ஢ŗنrӊฤ¢ϊÕ˔ƊϴáÕʿΖџC؍Ąڍɂ̫ȅݳäйɢՓȈ̍"],
				encodeOffsets: [
					[1086, 6072]
				]
			}
		}, {
			type: "Feature",
			id: "GIN",
			properties: {
				name: "Guinea"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ʃtǡͷʁJǏǴÈͶΗԨɕħǵmɳ³V̮ƇɘʔǻΜɹ̜ڥDțǁɵoƝǷīɹ҅σρӼ͛͢ɋŊȿǖħϊūȂʓƐώЦʮeɖƘȄDƄŎï˨ĢĖd˶МU؀ȱȄlÚĤҜáŨ´¶̭ƆBɖŒƔɸɇάãɲǺ˖ŒȬŠǚuȈȁĴɳΆΙǣɏ˙ǴĊŀį«ʡʲʍǗÝå˷Ș΍Ⱥڧ̷ĵăśÞǋ·νƃA"],
				encodeOffsets: [
					[-8641, 7871]
				]
			}
		}, {
			type: "Feature",
			id: "GMB",
			properties: {
				name: "Gambia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ņόࣶzȎȦˊ`ͨȷʼIˢƚǞʏεȋιdέǰ̷ȗƭQȫŝއl"],
				encodeOffsets: [
					[-17245, 13468]
				]
			}
		}, {
			type: "Feature",
			id: "GNB",
			properties: {
				name: "Guinea Bissau"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@҅ΘΝÈȕʀLŸʯǴÁǶѼƌ˦ɦĨ༈c˵ġĕð˧ƃōȃCɕƗʭfύХ"],
				encodeOffsets: [
					[-15493, 11306]
				]
			}
		}, {
			type: "Feature",
			id: "GNQ",
			properties: {
				name: "Equatorial Guinea"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ƿŴ़̀െmPয়௡T˳µ"],
				encodeOffsets: [
					[9721, 1035]
				]
			}
		}, {
			type: "Feature",
			id: "GRC",
			properties: {
				name: "Greece"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@Ҡ˱ٺ¶شÑqƣҜĶĿʛ௃íTƒਁǎƺΦ"],
					["@@ʹՁȥĥԟ|ѫĀৱɓ׌ҿяƋҳAѻўƿȁȊԅрЁ̓ǿҴϯжʑ^ӅޥɠʜѕՓĕ͈ݏ֏Yۍμ̿ڦƧ֒͝ϮљӐÉʆϸТ¼˚˘Ũjɚռö͌ȀҖgƒƦǆت{ڨɲע̉ކĀVмЦɝ"]
				],
				encodeOffsets: [
					[
						[24269, 36562]
					],
					[
						[27243, 42560]
					]
				]
			}
		}, {
			type: "Feature",
			id: "GRL",
			properties: {
				name: "Greenland"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ᬜԆ᱒ੴ̴ᲈĄ䀦Ŀ㉊ڗ༅͕ộ⭏ćшƫᲐĠᡚ́࿈ʴۦ̝इӧᒞ̺✘͚ᠼǋҾΫ⃝ױӃȕ᧑ơወ¡ছؕگկध৚շಽ൧ˇ༂ѽȢ܋࣍ýઞܡህÑঈ΁˟̑இŽ୥E੆֩\\Ϗပΐћɣଌȿ઼ԣ͈ڱກǉ٫͖ਣӘ˼֭উѵᕖ୆¯ᖯܵᗿڏឧ́ओIࢅ͓ୟࢱᅵכׅ૧ȷ஽ȝܛԱ[כыտോڧͺٿϗ۝љࠍஅ½఍ۈဿLࠁҢ֕ࠐฝਲэոŗݮ୓ޢ̢ئ֗̒ࠪচొ̺ͨΘǬڀॡ̕қůݯţਏ˜Éְ͢҂ެ\\႔ɟ෿Քݩ˾࠷ş۫ȼम޴ԝ̺ڗ׈ৡࢼ੯͚XΚᖷӮᄻÖᖟᏅ×ইˌวՈᕂ˄ၚ¬≹ɖ቉΄Ś͜ẊИᶎИ̪͘ᗗ̠ܺͰ᯲ז௢ĚΓϘጲɜᣚƂᣖRࣺʽᕺҨፘ̽୺áპ˙ፅҐŘή"],
				encodeOffsets: [
					[-47886, 84612]
				]
			}
		}, {
			type: "Feature",
			id: "GTM",
			properties: {
				name: "Guatemala"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ћƦԻfϩǖҍΌrʖĮȠšƾКۆ઄Ft˸Ƌ¾ġǺ̵Ț̹ˬϜDBӂ޸BަUOڗßॅʤ@˚ƱòŰʘŃϥ͍ЉɻÏǉâǑǧɇȟ½¬ıƿġ˽Ƀ}ŭ"],
				encodeOffsets: [
					[-92257, 14065]
				]
			}
		}, {
			type: "Feature",
			id: "GUF",
			properties: {
				name: "French Guiana"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@͉͑ГÑŗʀȉʹɩνǦɈΪòϤƢή͛ӸáֺѪܠ˸ğؤȥࢸۿƔ·ӻޑʳأ"],
				encodeOffsets: [
					[-53817, 2565]
				]
			}
		}, {
			type: "Feature",
			id: "GUY",
			properties: {
				name: "Guyana"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ր̯Դյzџ̈́o҈Чͪ̇Ƈݱԛɕ°ȣƹџϊ؏ːAŎӃԢܳȱҫî˙ɡϟƥ˅ġǑЭ¦ԫЀÓϴɋьƆܐɸ̐ȕϸ˿ŶŊτțȘѩْ֩ɬɲiϲԬƊȾƾ˽̸ô̬ږӲ"],
				encodeOffsets: [
					[-61192, 8568]
				]
			}
		}, {
			type: "Feature",
			id: "HND",
			properties: {
				name: "Honduras"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ơˀʭòÐʹŗĞǣÒσĳŔʩƈǷǚʛìǨɈáǒÐǊЊɼϦ͎ĔȂƨʊ\\þåž¦ϸùϲv˒ĢİĦˎ©ȪÉɘnǖòϨśƄkʲƿʐį̏Źɜɳ˽jśŕ̇ŋɃAȅŃǙƛźĕ{ŇȩăRaǥ̉ɳƹıđĽʛǞǹɣǫPȟqlЭūQĿȓʽ"],
				encodeOffsets: [
					[-89412, 13297]
				]
			}
		}, {
			type: "Feature",
			id: "HRV",
			properties: {
				name: "Croatia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ȳ͗ˊʇ͓̓ϝȆׇ[ܟƔϽmǻǧ̝ȖǫΑЪϽǼʹϮ̽͌ȃ͆Ηݔ͇ġƛ߃̶ӣ̢ޑʠ۹ؤǞØϥΞe˲եƄʱγʝˮn̆bגƸƚ˸ƍͤgGɼ̈ĒĈͺڞɠˊĻؼέۜǉ̼Ų"],
				encodeOffsets: [
					[19282, 47011]
				]
			}
		}, {
			type: "Feature",
			id: "HTI",
			properties: {
				name: "Haiti"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ԢܰƁôқÝ͑ȱƙɎʥiɫ֏ƜЅÍԡÔϽƿ҉ʾö˔ޜśيã̢ȈϧθP͎ՋžȌɶ"],
				encodeOffsets: [
					[-74946, 20394]
				]
			}
		}, {
			type: "Feature",
			id: "HUN",
			properties: {
				name: "Hungary"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@˨ըǍǼӂDÜ΄ђɋ̲ğ۸ļäǚͮ~ЦžĜÃЂŀȠȢˠ¼࣒ʭǴĒҲɭÎɣԡǭЉ֫ԕ֭کǁԽ١ə̻űۛǊػήˉļǍ˴ƗV"],
				encodeOffsets: [
					[16592, 47977]
				]
			}
		}, {
			type: "Feature",
			id: "IDN",
			properties: {
				name: "Indonesia"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@Λe૝ך޴ǒѴʭ̎ʭ»ɩ"],
					["@@ܙȁĳĶø˸ΰԢࠨͬĐǓfʫշع"],
					["@@̢ɣԲèȼΥॿǛ׉őҍP̀ӚҤPɤ̖"],
					["@@ūұ౅ʅૣľE̬ښǪՂʥ֔Üݬ̮"],
					["@@ྔċȂΌ༘З̪կీƵਐӿय़͋ऍ͸ݻwࢍØ޻ưঅ͎؝ČΓŁ໕ΌƣΰޑØּߤ৶·ڴ͡ΒÛŘ̗"],
					["@@ѝֱćنƬ̠Ǭ˴ȒʗCЏ"],
					["@@̿˥ׅƸǏΰࡘ¢Ⱦˣ"],
					["@@̨ٝۿΌۯìӃÅׇȦҦਠऎʕ"],
					["@@ɼയ࢈ԉ۰ࢼ८ԔݜBܘ̉خ̛ࣘǇbᩑbᩑݟې࡟ǜȷʇ੡}ΦۂՈɺɕࣲЕ۸࿃܆ۗêృަʛУ͑óȏ̮GκٛЮ̢ࣞ״gëɠ௵DͩԄݥƺΡдଈȰњ˜ഘ·Ƃ̹"],
					["@@ڭ࠭كǉ߱ǐඓ¥ܽŧţٍݪݛҒϠ༪˸çϯλŪιӯ͙݉ߒ੿Ƶ˿ݲॻQտ҅ʙ̐͡Мی࠙͗ȻɶŊ͖؅ӲØࠌ֕ʭîওறՓũίʚʌޜŽ߸ΛPʻֺΎվŤښф౎ǮΎ܎ذپʛ੖śॴࠨ؎Ʀȉ"],
					["@@©ܽџĈŷԝΌѷɽĵ͹Ւʟ੺ǚڤ˨̨ÔҝӸóĀ΃"],
					["@@सާহį˫ֵݿַ߱u࠷͕౻ŭ̚ॕϙͫԤ׳´лːৃ̟̩Оս¯ۗĬŹૺнɺЕܘŝ݀ĮުԂ֐Ɩָ֗ӅըǠ՜ÑӪъЖôߒɽۆǶњୠ͔̈̆क़ॲ@ܰƙӍݷآߓơϭ"],
					["@@छkۻ۰અۊέԚٍۄзؾٕ୴۪݅ʙܠ̳ڀݵՊѭܘمҺࢗऒóђզಢǋݔࠓٮ֫ҪΓߔࣙࡢ_ۺֹӠ۳٘ϥͳۉӖ̞̅sƜו̊ҵؠõФՏɁ਱ಟ"]
				],
				encodeOffsets: [
					[
						[123613, -10485]
					],
					[
						[127423, -10383]
					],
					[
						[120730, -8289]
					],
					[
						[125854, -8288]
					],
					[
						[111231, -6940]
					],
					[
						[137959, -6363]
					],
					[
						[130304, -3542]
					],
					[
						[133603, -3168]
					],
					[
						[137363, -1179]
					],
					[
						[128247, 1454]
					],
					[
						[131777, 1160]
					],
					[
						[120705, 1872]
					],
					[
						[108358, -5992]
					]
				]
			}
		}, {
			type: "Feature",
			id: "IND",
			properties: {
				name: "India"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ࣚটďۅͮїѕ׽ŒɾएࠜՑ୞חՑϟ͛޻ࠀͅߊЭરһସŉӜёٮāৠȝ۪bĪͪŋՖÞβԠǮìڋlǙކ͉Ոƀ܀Çۈ|ÐԪ΁ˎڴŀވشॸ՘۶ȷ״ΞЀԹ˳Λ࣠űÜ͇̍Ʒèԫ׷Ʋછׅ~ӓҩ۵§ХϏۗځȒࢇȏ˹ĚΣгȥѵ೰ɵEƍ՝ҡѦʸӎϖ¶ϰ܆ӝƜީ]ߝŚóאБ¤ڕζ֭̓؆ѻԿ̻ȅ̩Ԭɣƛԑ̆كžەţֱ̫Zਛǩ´ك҃ӻ௃֡ळ঩كՋ࠷ջCϭлȹݳ̝Ͻ«ʥٙǪધ®ۡΣߙI෗ѣ¡ϣٙʰˣދʃ˱֯͵ʍߑ޸ϳ୴͑ࡒ̍Јѿ߰ȻੂơՀޅ଼Α࿀ʣ੾HৰǍ޾௣ԉףĶ઱৲И̤ʝͤড܊֖֔ᇜCǗܞҽюĩ٨ջϘऒࢢঊÙ࢞ࢢՄ࡞ࠄࡈ_״ܒӠڳд֪݂̇̕Ьβ౤ȱपŰߺ۸"],
				encodeOffsets: [
					[79706, 36346]
				]
			}
		}, {
			type: "Feature",
			id: "IRL",
			properties: {
				name: "Ireland"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ƒ׷ًݣ๯ӹ஑Ŷڼ࢚ѭࡢତڄٌϼǦ҇ǥ҉Բ\\ٌǥ"],
				encodeOffsets: [
					[-6346, 55161]
				]
			}
		}, {
			type: "Feature",
			id: "IRN",
			properties: {
				name: "Iran"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@݈ǌװӔ֚{τƾװýघэڤğ।ݓظòۻ΁਷ɱؑκŭΫҡˠڡàՓِƙæեݿݿжѵ͸ԓߦυx݉ДƋêϯ௉ѡ̓উཌྷʪࣷȖेŊΧਐЕƪ٣ƭࡑНਇ˦ࡑ٦߳ʈ֗ߘا૪ҍƋՕ˦̻͝ҭѴS҂ˍ@Ɛ،ѝٔ਍Ң׉ߜȜپц̂ÙӬտʨխ৊ҟڨǐʼʿ६ּʈƄͅъϯ־ő̤~রئ̀Øʞʙ́гԼѱȾ¦ˈإߖǩ׎у஠ƟಾɞĄȞ"],
				encodeOffsets: [
					[55216, 38092]
				]
			}
		}, {
			type: "Feature",
			id: "IRQ",
			properties: {
				name: "Iraq"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@րʧÚӫх́țٽ׊ߛ਎ҡўٓƏ؋ˎ@TҁҮѳӿ¤֟ê؝߭༟äᛍၖఫךৡɪ͹৾ᇶ࢔͆৬āؘҢȺјԾΰž঎Ň̐ɉЖƚծ৉"],
				encodeOffsets: [
					[46511, 36842]
				]
			}
		}, {
			type: "Feature",
			id: "ISL",
			properties: {
				name: "Iceland"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@șիॊֵથٙᝓֹܣƵૉŮᚑˈࠠψᆧЪ๪ǎʘᄋȜ֨նౠŰಸ֭౨Ҝ੒ʃൌ҄ආÑ"],
				encodeOffsets: [
					[-14856, 68051]
				]
			}
		}, {
			type: "Feature",
			id: "ISR",
			properties: {
				name: "Israel"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ƥ˅̣Ŝǫ֓ɂĥɋřɛЄŖp͛нഉց෾ʔˢË¶ɞϼǠيŤɆzVˬCþƦɤ\\`·ŕŵhM"],
				encodeOffsets: [
					[36578, 33495]
				]
			}
		}, {
			type: "Feature",
			id: "ITA",
			properties: {
				name: "Italy"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@̟ڋŲʹǭѝٝ̈́ёĞ୩ѐŞќজûࡪĠْò"],
					["@@Ԍ׭ş૕ϣÂ΁˫͇ɞ২ȓӒҨ¥рʼ"],
					["@@ரɏĝЯȬΧڝŪہ̗²зĻʇˠё߀чцۛदڱچLȲȃɽǗݪ̥ؠʩܜѫĔƿƽ̛үϼܳƐΝի؈̷ıѫΗ¹҅ܛΕÝHʲǢҊǼǶ͝ӤʱшΑŀʛδգƴεͶثÆٿϜޑմ֯ӜʿࠪйĮہˤϯŕӝϵΓÕĪθҕńɏٲ̆ʰʙ̀ʂβǵМ¢Ҽ˶ƢƃАǼͺتĿψƚâΆԘšĮǆࠨƤȊ̉"]
				],
				encodeOffsets: [
					[
						[15893, 39149]
					],
					[
						[9432, 42200]
					],
					[
						[12674, 47890]
					]
				]
			}
		}, {
			type: "Feature",
			id: "JAM",
			properties: {
				name: "Jamaica"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@֢÷ҀȫƔɯןeʭƗҹƊӑ̪ĶȔΜÎȒ"],
				encodeOffsets: [
					[-79431, 18935]
				]
			}
		}, {
			type: "Feature",
			id: "JOR",
			properties: {
				name: "Jordan"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ʀˆपͫ࿪ࣆͺ৽ǅų၅у࠸࠿ˣƛƑ˭ٙřȩ̡εʵधƆŨоഊo͜Ůʚ@Ԥ"],
				encodeOffsets: [
					[36399, 33172]
				]
			}
		}, {
			type: "Feature",
			id: "JPN",
			properties: {
				name: "Japan"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ņ˽ҿԕΉːљțɝӭշʈRЊҬԆӌīΊΜؠǹ"],
					["@@́ڡƤсѩף੹Ѓ๏½ணॡ͔֡غษȃষЃঝe࡞أ֗෗իΝН͜ȶݶՏʒͿ־ߐʶѲՈࡌѢ؞ָာʤ࣎ǣࢠ๺֔Б௾ࡀӌ͜ՈਈƟा΢ՎࣀƸҞୗ}ڻޥࡍbࢁ"],
					["@@נǵרΤȈहఝɯ݁࠱೓ָқँण]ř࠴д٨࣌²ʖ୐ʜټন࢓٤˯"]
				],
				encodeOffsets: [
					[
						[137870, 34969]
					],
					[
						[144360, 38034]
					],
					[
						[147365, 45235]
					]
				]
			}
		}, {
			type: "Feature",
			id: "KAZ",
			properties: {
				name: "Kazakhstan"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ӕƹ્דο׹̹KɱЊ੫ǡێХNÚࡆ৓ؘ෷ßডũߣݶۋ͆ಥ׼ƽðᓗӹᶽљ£יچ֧ɼॕǩχ˧±ȲȶΖǅ̊অ˺ϛݮҩɆ˜ࠊāؘ܎ƎܼűƲࠎƭԲ࠿£܍ȴঃσ޵ǭяƌĐўՙ֘دw܉֬ӞِʕǢڢऊࡺӣŀؘჄࣴಾtᇢ׉঺ͻࢼΠ೰j੺ѥʔʠ୼ɂЊഷ׀߮Цƿɮ߮ɔ؅ֺϬ˼Ḯ̈ШȺᑆ̴ݰΒຢǹ˄ࢉ࢚Ȳઆ˹éҝ߮´ᑌߎ̭ˁ੶٭ሠᒑ҄ѰୄӛீɎҪƯКӟטǋΨΥ઎ŒѾԣٕ֓ۥÿ¡ࡅұϝဟˢ؅ຑїȇဗͱݲลֻɓäӏԭŬу̠ఝĖඃx̧ġ஥ΞӉǧŽӹ൩̂փşȉρ"],
				encodeOffsets: [
					[72666, 43281]
				]
			}
		}, {
			type: "Feature",
			id: "KEN",
			properties: {
				name: "Kenya"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ӾۙיͱȹΕ̿Õšףˑ͹Ǐ֑ͷ˥஻ࡀËӤᵁႌƙĢSࢺʊ;а֌̨ؔσ॰įтЉ׎ԬԈ֬ֆѨƗ@ҽ˺ˡג@੠܋ˈSȠxȄī֖ßʞΔގΚͺ˳ָAܽ॑Xᵣ"],
				encodeOffsets: [
					[41977, -878]
				]
			}
		}, {
			type: "Feature",
			id: "KGZ",
			properties: {
				name: "Kyrgyzstan"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ȊςքŠ൪́žӺӊǨ஦Ν̨Ģ඄wఞĕф̟Ԯūşȏ೛ғ̙ͭઁıͅ՛ࢷŒׇǏߣЇŜȟʇȓཟŵਡ˘࣫ÝĂӜࣴƕ̮ʸٖĉ੾؂঻ѸױȽإ͂۶ծʟĊ"],
				encodeOffsets: [
					[72666, 43281]
				]
			}
		}, {
			type: "Feature",
			id: "KHM",
			properties: {
				name: "Cambodia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@΁Ѭыࢄȣ২ՠۨઘǆ߀ťۚ͡Ϟׄݖ̱Ȝ֕Ļ৕ඳ٧τԙࢥÓܫͷ۱Ū"],
				encodeOffsets: [
					[105982, 10888]
				]
			}
		}, {
			type: "Feature",
			id: "KOR",
			properties: {
				name: "South Korea"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ܨযȺխPॷ̓ҥݽǉڥΏݳïĥҚƼـχ࢔ذƚֻܘÂúϒ͞Ϝצ¢ΨÈŨȮ"],
				encodeOffsets: [
					[131431, 39539]
				]
			}
		}, {
			type: "Feature",
			id: "CS-KM",
			properties: {
				name: "Kosovo"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ǣŃPĘ́ȩĐǳɦƾȌȪÒŜ˨ư²Ţşƾ¿ŌƅƒǎƻŢLĥȳĳĳ×ȉӹŻ"],
				encodeOffsets: [
					[21261, 43062]
				]
			}
		}, {
			type: "Feature",
			id: "KWT",
			properties: {
				name: "Kuwait"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ǭχõȓ˔هשuȽАݟĆ؞߮֠é"],
				encodeOffsets: [
					[49126, 30696]
				]
			}
		}, {
			type: "Feature",
			id: "LAO",
			properties: {
				name: "Laos"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@˚Ϝ܆ڹܸ¿ٕࠦھٍÎǛ̉ӯyʣƨࢯԅoݬȸࢮ֧³ԎηʸǴ̲ܐնøȡ҄wŵ०ѦŬӮڏϖޅਚO͚ܹ՝ɗʉ̟৔ԉۦ঳Ռ݋َ׏ɄץƵ࠿ݕ̲ϝ׃ۙ͢"],
				encodeOffsets: [
					[107745, 14616]
				]
			}
		}, {
			type: "Feature",
			id: "LBN",
			properties: {
				name: "Lebanon"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ɣ[ýƥ˫D̘ۄмעfϘ§Ɛͣқ̓ȷҟ"],
				encodeOffsets: [
					[36681, 34077]
				]
			}
		}, {
			type: "Feature",
			id: "LBR",
			properties: {
				name: "Liberia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ɗQࡽАޅٖ܏Ң֣ըȪː¬ʔϜҘϺϺǶnɖĨΘԧÇ͵ǐǳʂIǢ͸ʄsʓĎНǽύʖɱˊÇΤΙ~ͧăĿÝە"],
				encodeOffsets: [
					[-7897, 4470]
				]
			}
		}, {
			type: "Feature",
			id: "LBY",
			properties: {
				name: "Libya"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ק̷ҿҤ೧βρՄڑϸϻƷ̗ҶήӹؔͬΘñՈńҠÓϦƨۈ¯϶˕ݐШȜðΠėΒ־͔ʶːЦʌ´٦দ́ΜðۮƓ૞ϓЀݛݮǍஆΙࣆйЦɔЖϮț٠˂Ф؄ЀׂŘ଒ǣ˺ϑ̺Iˌƛ࠴ıȲˣ̣ЕżΫɏԯʦڱ@Ჳ@ᶵ@့ॱGYΙ‧ྐ‧ྒࡓҟ"],
				encodeOffsets: [
					[15208, 23412]
				]
			}
		}, {
			type: "Feature",
			id: "LKA",
			properties: {
				name: "Sri Lanka"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ų࢓ΙʇܵȓЍڜƫீϠ഼׆ұϺסО࢓"],
				encodeOffsets: [
					[83751, 7704]
				]
			}
		}, {
			type: "Feature",
			id: "LSO",
			properties: {
				name: "Lesotho"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@̆ʩʳУƛ˛ҳſƹˍ̛ċؿ٨҄ՐҖ͢ϼǠξʵ"],
				encodeOffsets: [
					[29674, -29650]
				]
			}
		}, {
			type: "Feature",
			id: "LTU",
			properties: {
				name: "Lithuania"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ãɊĚɲχƄࢡƨǱ۸२ʴඬÁࠜĊŞǩ҂Ã߲СĀϓۏˏșӃ࣯̓߻NȫʶљĜ"],
				encodeOffsets: [
					[23277, 55632]
				]
			}
		}, {
			type: "Feature",
			id: "LUX",
			properties: {
				name: "Luxembourg"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ǘȏ³ρʍiȉòĞҼɖ"],
				encodeOffsets: [
					[6189, 51332]
				]
			}
		}, {
			type: "Feature",
			id: "LVA",
			properties: {
				name: "Latvia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@نЮՆߊ˼ڜعڪhǊ٤ܐƪςĻܢ̷ۚCКȕîС˒ӷ͕ࣗԛƙ߱ТҁÄŝǪࠛĉණÂ१ʳ"],
				encodeOffsets: [
					[21562, 57376]
				]
			}
		}, {
			type: "Feature",
			id: "MAR",
			properties: {
				name: "Morocco"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ԒΥߜÎࢊȃκU͂՟ºԝ̄ࢱɜǱƷ͛ષƙϝ̵ӡñثঙ͍ͩсۍɥ࠻ŷഫاRহŷ@@@p҉Ա˓ȑϡ@̥Ŋ۹ě˛ٻʿÕЁ੕ୟ࣡ˣୋ΅ϗĵ̡ቅãaD ϶͒ɮ˞ѪÃ˶̀פҴՖ˲ƊɞӬp҂̤Բ̪֔Ւ࡬f\\ц͔ްĢڎָтɠۮۮȿਸ਼͊ܢŔѶդ֨ࡈϦخΐ֘࢈˄ԪؤI"],
				encodeOffsets: [
					[-5318, 36614]
				]
			}
		}, {
			type: "Feature",
			id: "MDA",
			properties: {
				name: "Moldova"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ȨŮ֒ĊؤʽΊϞɥÑ˵̪ƏŨΗ̊ɇÏűƾčɝ×ӷ|ĉŜǫãÒƭɱˍƥ˽ɁĝƯϦĘΪςӝԂˉΠʹʠʯĈ"],
				encodeOffsets: [
					[27259, 49379]
				]
			}
		}, {
			type: "Feature",
			id: "MDG",
			properties: {
				name: "Madagascar"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ɠΥȺ։Ɗঢ়ɒϽĉЗƩʙ˷ӰǁʝǈثõΥɵȗ¿܅ͧওб୅ԯཧ͑ୟϛইہȣܻΡӛɊڙ̜ɳѺÇݘ̑ڠù؂Ʈ؄ϰƢD˪Дِø՚șЈǃՌãޠ̊ҺŔՒмҶǤ̶Ʋτ\\ӐӎۖԮʦцŗάΦĵҪ׎fԐ˦ϔ̊ί"],
				encodeOffsets: [
					[50733, -12769]
				]
			}
		}, {
			type: "Feature",
			id: "MEX",
			properties: {
				name: "Mexico"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@͙݅ƥ؁Õ૷ąЧƤқʺЧǚٳ֎سȞӏ͢бࢾɝΐΙ݄ɾٚĎؼưՊƠՖ΂ȨӬè۸Ƣʖ֬ɚࢶȚݔԚîȬǱЙҋԁȥԝƸƥűγɁٽɅɎǭcǃY̝ԓƳĲķPŭޥV޷AAӁϛC̺˫̶șĢǹƌ½s˷ઃEЙۅŢƽĭȟqʕ्ࣞџ˘ۇɖҷÓګ́чĉץɜؿǄ޹ϬؿŠ्ϸ۱ВɃɤҹº࡯ˈΓϦࣗӊсՌȧЦ˪ĈđʈȖɔJ̄˱Ϙùͮ˭ъ݋࠴ࡋڀУԼܝ΄ƷȴŸԲѓȞӹФȽהҍæӣѸϿФˀҍو̓٠^͔؇ͬ˫ӑɴƇͿƔЕĆف̀΋خׁƒȡŸÓŎ˽Ƭ\\ǜթʮɇǴ̕Նё˨ޯʠρɸϿ²ѷКͶϡ̨ϑqƭΝ̱ƫJɛԞջӎ؃РїɈؚŵҖЏʺֿϒŏŇɃɖԭȰӷӦÖÚΊ³̸̼Ϝ٩׶ӱɶ̱Հ̷վϳڦͿݲॖÞ੪ĞÿǑ౔СኀףဪPژ@DΌผ@̪̕јˇԀσ˨ѭȾҥѢʩۤʥՊڒۊhפͱфֹ̄ӯӸӏȂחɾЃپʹ׮ȁ͞|"],
				encodeOffsets: [
					[-99471, 26491]
				]
			}
		}, {
			type: "Feature",
			id: "MKD",
			properties: {
				name: "Macedonia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ńOǤӺżȊ˺¶ϴbтˏÒ։ǅƑƥҕh͋ǿջõΑȴšήń˸"],
				encodeOffsets: [
					[21085, 42860]
				]
			}
		}, {
			type: "Feature",
			id: "MLI",
			properties: {
				name: "Mali"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@˰ƶƘӶˊpזɻӄǖ͖ÇŴȈ⁚^ȈךƣļЛ⋈Л⋆౾dᬼᆳᬼᆳȨϿԺʉ϶ƋV՗ठĈFካҟ֗íԭݛƃ଩ï̳̗ա՟Iȿǈҥš޻ΑǅʿٳϕŗɍΙǡНŔɱȳūֻڙۡp˳ɭΣÆӥ΋ůȝŁŽάʍĥơhƷʕ٭PɷŴŉùʱʎ¬ʢĿİǳĉ˚Ǥɐ΅ΚĳɴȇȂǙvȫş˕őɱǹΫäɷɈƓɕőƅAµ̮ʾí̽͘ʀǓӔԺ"],
				encodeOffsets: [
					[-12462, 14968]
				]
			}
		}, {
			type: "Feature",
			id: "MMR",
			properties: {
				name: "Myanmar"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ӫηץϥࣥΟƳО݅ՔؗΈօ̭ܵ̃ƹȪу֖ڙĪҷ_ϵ͠ދң޵Сࡷăذʴ٠˯ӼæࣸͽѤ˛৔Ʊਗ਼εۢօуॕ׳ҽöԳȠ̂ਪǫ޾څॺļ̢ӭņ׭ۆÅڰ̊ŵj׾дȦęΤȐ˺࢈ڂȑϐۘ¨ЦҪ۶}Ӕજ׆׸ƱçԬ̎ƸÛ͈ӮÚˮӵξȧ|ٟۙߓۭĳঽࢲƔȨޛՐǍʓۣز́ζƷ؞ʔ~΍܏յǳ̱ӓȗ"],
				encodeOffsets: [
					[101933, 20672]
				]
			}
		}, {
			type: "Feature",
			id: "MNE",
			properties: {
				name: "Montenegro"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÁǀηЯÊˋǫÞɽ˞εǖĢƜŬҦ˚ȜƾüɠƟŬśˠě͌ǧçïƽȋɧó"],
				encodeOffsets: [
					[20277, 43521]
				]
			}
		}, {
			type: "Feature",
			id: "MNG",
			properties: {
				name: "Mongolia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ࢮƢ྄ܤ౬Єܴʳ࢚]֘Ͻ࠼ௐɁࠈגͿӶࢊࢊश΍ނįনɍǈؿஜΛߐƺਫ਼ŌࡆōࠖЗԚѕެT੒Ƌޜȼૈƒ௸פԌĝѰ˭ৌêХهק࠽ɐ΅ӈńࠤŽ٦̴ڬˏހוğ̗ڏĦ௟ŏןʅ؝։౱͙࠷ѽࡹǞҿúѳէˎ͓ƌˣי˯׽҇গ̑ఽഫ̇এҋϋʾ৭AఓԜࠥŰૣśჃȊऑmӱԀϣޠԱĢ৩ԼଅŞুƞ̡θ͖চׅڲன̀۷Ѿəז"],
				encodeOffsets: [
					[89858, 50481]
				]
			}
		}, {
			type: "Feature",
			id: "MOZ",
			properties: {
				name: "Mozambique"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@لæ৞ʁɖńגt̚ʦԌaऀ͜ڞӤƊϕ࠷ľ݅ಿƨЫʣ׷͙׍՗Եޏ͉ृСॉ͓ࣕƵוׯ΋ȗí׳ЌُǔӱZʣƪ¦{ࠗƋϷȤƝűΓΗ̗ۗ˳য়ҕρ̳ðΟɊÉíѵّRïϊůϖí̠ƬपɓװГஂࢬ॔ɜ؆ŶúĨӶƉʞغǐ׌E੠ѥ˒ЏÔǹȼϳǰ۫gÅ̼āװᢈۘӚЕɴüͨɅ¸͵ǯϷØסոԱʲ׌ζǰíઊΙ؈̣˖̅]ɽદɾٔ"],
				encodeOffsets: [
					[35390, -11796]
				]
			}
		}, {
			type: "Feature",
			id: "MRT",
			properties: {
				name: "Mauritania"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@և־ԗؤ֍ɞГʚҵUЧǽйð˽ˏïҐɺаŀߊģࠨĵкČмɑЎѵδǾˬᾔMǃ௎ȴќ߀øᒸ᪂©F౞Ṗ᎟౽cМ⋅М⋇ƤĻȇי⁙]ųȇ͕ÈӃǕוɼˉoƗӵ˯Ƶ"],
				encodeOffsets: [
					[-12462, 14968]
				]
			}
		}, {
			type: "Feature",
			id: "MWI",
			properties: {
				name: "Malawi"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ɽٓɾથ̆^̤˕Κ؇îઉεǯʱ׋շԲ×עǰϸ·ͶͧɆɳûәЖѵɔʮޮ˄̈Ǉۢǚڼƞɪɉ܌Ѕϐ࠘ƽǜɵ˶Ϲɾଡ"],
				encodeOffsets: [
					[35390, -11796]
				]
			}
		}, {
			type: "Feature",
			id: "MYS",
			properties: {
				name: "Malaysia"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@àћֈĶ˞ΈȘýӸԓΜ֛¶֣ęϡĆ˿Öӻ̒ɵͤݑe˳׫Éߑخ঵ښįђӟ֚ś̡۠ҜĠؔȃΤƤƮۈρ"],
					["@@أ˹ܯƚॱ@̅ॗ͓̇љୟۅǵߑɾЕóөщ՛Òէǟַӆƕ֘؜˽ٮǀǜ܆άǂ৖Ǻ׾ڔЬՐϦѥǮ˺В¸՜а٪אшڀͼHќыιֆɻ۬ʧÑ֝͡¥ƮЧ"]
				],
				encodeOffsets: [
					[
						[103502, 6354]
					],
					[
						[121466, 4586]
					]
				]
			}
		}, {
			type: "Feature",
			id: "NAM",
			properties: {
				name: "Namibia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@رٌؖ͡ȃࠊȷ،˯ಒm৒ŅҞ͛Όѡۜѳ৘ǽՆۃࠐ»٢КǆԊƞհ}ԄϝŶÐ₮׌Е᎞ş໴΂یȒհµͨȍPéӁȍʭC՛͍ͣΎಕ̍س{ᲽࠣBយA᷋ݣѕҋÕՇǄϗÔƗάͩɰГг"],
				encodeOffsets: [
					[16738, -29262]
				]
			}
		}, {
			type: "Feature",
			id: "NCL",
			properties: {
				name: "New Caledonia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ېԵѨϭ͉ȫҥɪ׹ϚէѼ։פś˶β[Һ˹φ˷ˎɻ"],
				encodeOffsets: [
					[169759, -21585]
				]
			}
		}, {
			type: "Feature",
			id: "NER",
			properties: {
				name: "Niger"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nּॹȐОҿպœϤâТբ̴̘ପðݜƄîԮҠ֘Eኬஈϒᝪ࿸᮪ཾ೨αӀңר̸ȸಯ̾ɓ`ˋΔ˽ǻί͕ၻ«ધੳߋγૉΔ̵CեբmčЃʁµˋƻm֩ंȟځҷٱʔҍ¸ʏşӯ~ӷΧѓq৯ѢЉȵѓb̿͆ࡅ̼ࣗıɕǻşӗʋ͹ÍݣٗӚ̟E˭ʗ"],
				encodeOffsets: [
					[2207, 12227]
				]
			}
		}, {
			type: "Feature",
			id: "NGA",
			properties: {
				name: "Nigeria"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ࢍ̡͉¬͓ȉڥl҇Ղˡ؊שֆكYݍB¶തs՘ǂՊʶʴТԴėɨǔ͸ȍӾ˪ÎݤʌͺŠӘɖǼࣘĲࡆ̻̀ͅєaЊȶৰѡєrӸΨӰ}ʐŠҎ·ٲʓڂҸȠ֪ँƼnͬͯğƱ«˧۽ٱɛՙšѧǱȉǝי҅ΉŽыȋ͹ÿΓֽ˱ҽΊ͇aԃӭʑQЍ߷ɍש"],
				encodeOffsets: [
					[8705, 4887]
				]
			}
		}, {
			type: "Feature",
			id: "NIC",
			properties: {
				name: "Nicaragua"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@̃ˆϽͺȁ˲Ο˄сϜĤžƒŵÚÒʾŀȔŬRkЮȠrǬOǺɤʜǝĒľƺĲ̊ɴbǦĄQňȪĖ|ƜŹǚȆńɄB̈ŌŜŖ˾iïă§ȉĐ̫ȗ˹ěͷυ®ɏtϙŹĉýΫÌɛǣɋ ɩźƏȩǱʛÈƓǦˉêȕŉօɞųŇ"],
				encodeOffsets: [
					[-87769, 11355]
				]
			}
		}, {
			type: "Feature",
			id: "NLD",
			properties: {
				name: "Netherlands"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ۦyǀ˳Ƚޓɇ́ԍ@ƘࢡҥȞՏπީǩ؛âѠɲ݀ఆଲΘ"],
				encodeOffsets: [
					[6220, 54795]
				]
			}
		}, {
			type: "Feature",
			id: "NOR",
			properties: {
				name: "Norway"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@᥆ؙઍɣऄՅෛ͵ڵû΢לઃͰಫ˵Ы؝ߟωࣗȮ઱¥णѼԉɝԷūփནƊɝҵ߭Hևױ࠿झಫ஁̨˹̇ͫ࠯bձ޿¾૟՞э˥ধֻۧυӛ֝Ԫဋঁ૫ȟ୏є̛ࣚˇ኶ޞզᕠ۶ဌࢂ໤୦፺ྴඦلᘼ੊ᇎπ൪­౮ۢ໖ພǘ"],
					["@@ም΅๝Ȝ׆ɐԕˎეǚͮ̿ொȍ"],
					["@@᪖صᑟͥұأ݅ǁЍۡৣᅵԢނ̘ఽʐ࿕܂ٷڄᘎ̜Ң̋஦\\͊˼௾੖̋"],
					["@@࿮̏ఝҍ᝱ı៙ƖƫɴஹdँϬᣴɼ௞ȫࡘʤᑺȽ"]
				],
				encodeOffsets: [
					[
						[28842, 72894]
					],
					[
						[25318, 79723]
					],
					[
						[18690, 81615]
					],
					[
						[26059, 82338]
					]
				]
			}
		}, {
			type: "Feature",
			id: "NPL",
			properties: {
				name: "Nepal"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÝαŌՕĩͩ۩aয়Ȟ٭ĂӛђଷŊયҼ߉Ю߿͆͜޼ՒϠΒȪڪʳࡔշҾť˰ЕٶǓۀσौȕঔć"],
				encodeOffsets: [
					[90236, 28546]
				]
			}
		}, {
			type: "Feature",
			id: "NZL",
			properties: {
				name: "New Zealand"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@Ȓ΋װ;ʐΡBΝ̹ϳչإїͷ̴З٭Yܗ̓ɣջӋࡗڇϓнʇޝlխˢࣱÐƗ̰Ҍذ੐ࠦժǀ׾͌ܜѰԎѦώظ͈ɆŰҶלϴȆΧ"],
					["@@،ࢫlָϜɯŲًڰ˛֨ãӒ͎юĭȯݗʯӫٛjɡʭþαūƻͅҏзֹ٭ͯƟɘΕŨӞ۔˟ҨࣛͲz̦؈̌ƚ٨լͻ֜vƪБΎڋݔΗת̸àҚұٺɑʂݡ"]
				],
				encodeOffsets: [
					[
						[177173, -41901]
					],
					[
						[178803, -37024]
					]
				]
			}
		}, {
			type: "Feature",
			id: "OMN",
			properties: {
				name: "Oman"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ֹ̻ϟªǩȧƉэļ֗ÿĻϯFԽ̻ćХȓǯԹP͡ɃJͻПɷҩĂ֗˳ϱ³˝טٿ൴ᠾ࠾֖၂ϩתv͸ʔΐFΆϞǒƩŞèմіHϖֵҸ̧؞ŋӼƳϜӕɨ˧̞ŃCȉ̩ԃƅɽΟˏ"],
					["@@ŉƳǅ˺ʔ˺ľñā΍"]
				],
				encodeOffsets: [
					[
						[60274, 21621]
					],
					[
						[57745, 26518]
					]
				]
			}
		}, {
			type: "Feature",
			id: "PAK",
			properties: {
				name: "Pakistan"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@تϻʞ٥൨ͻ߹۷ऩůౣȲЫα̖݁̈֩ڴгܑӟ`׳ࠃࡇՃ࡝࢝ࢡউÚऑࢡռϗĪ٧ҾэǘܝᇛD֓֕؛Ɇʣ؀٭٘໻ǁിeஃŝ̈́ঊொѢéϰГƌw݊ߥφͷԔеѶඨѕࡀŲԈŅǞȂגóદΔ܎ҶӈشCĠɼٞŌ̴ý͢ʀ±ԌΦԖ՘Ɇͥ֊ߜɴ̢͒мΜĩмȣΤӬμࣘǮ८ĮѐƺӨĦ"],
				encodeOffsets: [
					[76962, 38025]
				]
			}
		}, {
			type: "Feature",
			id: "PAN",
			properties: {
				name: "Panama"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@˫ʎǵҒȺɢɅÎƿˤлɸοÁǝ̇ͻɁǽĉǩВҗɯŅŧŭϷ©ơԈŋƛˡ¸ǝ͸·ÈɓİέCǻĩŶªǖìǠƲŲĲǩŲK͸͘ö̠̝iǱͲĀæɴȵЮÔΨɄԜǞ˺ʤҬ·ĉҶώơ˜ʧ̈́ɵĹūȜӵǁʟ˓ÒŅС"],
				encodeOffsets: [
					[-79750, 7398]
				]
			}
		}, {
			type: "Feature",
			id: "PER",
			properties: {
				name: "Peru"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ɥљћɋࡅӘñΈရࡊທࣾ٫԰ΏۜƐʎ܅ાࠣ༄ߍီ΅Ϥ˃ؤٷպױͼ˖ϒПߢʼךڢՎĲΓʇȧx̭ΎâͼĝΚщӆΌǄ֤ԦܶৠͨࣸࢠʾմŝٔɢĂ֒ЉˎЅϴɏӶࢣضĿҨɞ̤ƣԎð٠Ͻթࡣʤoрҁݳ œųۍǉ॥ֱÓϻɉ̇ČғԕʍBΡɛƵΔݳҲԝǱί֐µ͆҃ݐuېӸÇ౧ϢĩӄƠܪടǷ˵£ןg܍͟пƮ̵ȕ˯β۹Ջ࣡"],
				encodeOffsets: [
					[-71260, -18001]
				]
			}
		}, {
			type: "Feature",
			id: "PHL",
			properties: {
				name: "Philippines"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@Đ֏ºҽ˹ޑ̫ࡨϽэˎإʉϿ঩Ӧɿ؊ʰЎՑЈˁΑЃثҵƑʖ͢۾ՌʀҜ̈́̔ϝٔɰƎϒרv·ٰڼЋêхÐ̱"],
					["@@̟ˡˁՍ˃ʝԫ׈ǦɤɂɾĢԸҨ¸Ɖ֣جߺāߡ"],
					["@@ૣߕЬט؈԰Ԏ׊Ѱ࠲Ʈۅևҧѳֿ"],
					["@@Ԏʹ՘BgΗϳΣՕʧϸÒєŽА"],
					["@@ʀभ٫ɞj˭ȶԯЍȋעʧªƁԘӶãY͈ԣٜ߮mɴ̻"],
					["@@ɟܩέоѓ٘ܚ̡̈"],
					["@@ԮʉʶɖüɇƍΑ˼׻ɛۥӷ˥ƁڳȊڝѾġϊĲਾүăҙ˜ȫēϯٻЮ̵Ѵɍ̯՗ԊރůлȆ¨ΎˀɊʣȘŇ̡бӚűμߨͺˡĔೄ˜ހԘA"]
				],
				encodeOffsets: [
					[
						[129410, 8617]
					],
					[
						[126959, 10526]
					],
					[
						[121349, 9540]
					],
					[
						[124809, 12178]
					],
					[
						[128515, 12455]
					],
					[
						[124445, 13384]
					],
					[
						[124234, 18949]
					]
				]
			}
		}, {
			type: "Feature",
			id: "PNG",
			properties: {
				name: "Papua New Guinea"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ɽčε͔ρՔǷ٘ŜĆĜʡʬȏРՑЈ˵ŝɽ"],
					["@@ѯçƃɽҟȱћȟѽBۏʔӑɺêʺݬũҠàŶЖŦrĆѽӐÜʂ˼Ҹ̚ġӸԌfǜƏgү˯ԡ"],
					["@@ݤտղࢻӖω٬ƛʥǁࣀΝġʏ֋ÏȷɔܟĦࡕŴٷ՚ӉҦѧ݀ભπ܇ʇԡˣńإڇ˿һƖࢅaᩒaᩒภ׃༊ӓׄїҴхŸӵඔԱȲѽޛěȄ֕"],
					["@@ʿɡǁӸȝ͘ϝ˞ӍΪ؇ʚɺȮҒɻ˸ȁΜȫʹΛ͊ˏĶѧ"]
				],
				encodeOffsets: [
					[
						[159622, -6983]
					],
					[
						[155631, -5609]
					],
					[
						[150725, -7565]
					],
					[
						[156816, -4607]
					]
				]
			}
		}, {
			type: "Feature",
			id: "POL",
			properties: {
				name: "Poland"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@·՜à̂ȹ̧҆̚ɺɤȝђָʘ಼ϴ੒˴࠼ƙÚȱ߸Yਚħ໶^њěȬʵωɸ͋KͯԋǡʸϳfϏцܻěɽзįރۥɒϗǿ¶ߙ͔؁šЇĒӹǵч̖Ήŕ³¼ϭаر¼ăˀֻĦűɑҗǨÀɴػòЉ˔"],
				encodeOffsets: [
					[15378, 52334]
				]
			}
		}, {
			type: "Feature",
			id: "PRI",
			properties: {
				name: "Puerto Rico"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@јõưǕɋɃمLӫ·άŢŬیK"],
				encodeOffsets: [
					[-67873, 18960]
				]
			}
		}, {
			type: "Feature",
			id: "PRK",
			properties: {
				name: "North Korea"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Şƥ͉ºη˵ʣ˷׽ѣȅƫƧ̓ʝ֓ƏηɥηįġͰƋӈσŧȭΧÇץ¡͝ϛϑÁùСǆĵƿʙéǀɑüɥƆɰφȤİõƶɆҒÅƎөĠЇɤۄբऒҌ־׮ЎˁܪſѺಚβͰҼժӹ"],
				encodeOffsets: [
					[133776, 43413]
				]
			}
		}, {
			type: "Feature",
			id: "PRT",
			properties: {
				name: "Portugal"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@̦Ɉ΄ŬɂЫӺDƞłӪɼуϱɩYٽƍūЇγçʹԋɵտ̄ʡřɫ̵̿ê˥ͷɓѷŠџġŸڂÿԬϓþȩ͈äռͰ̨ÒͼǪԎkΤǙ̠˲"],
				encodeOffsets: [
					[-9251, 42886]
				]
			}
		}, {
			type: "Feature",
			id: "PRY",
			properties: {
				name: "Paraguay"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ͦ৖tҌЖ݌าʔޮ]޴їbʵʞҳÇଛࢲǇ΄ǐ֦ɩǀʣþޓİ͓̼̀ƌ̢ƳAҥŕӻǑӛƍݏށ١ړƇऻŸࡑɮࠢ౨ťψࡽ͢ਅبۉŸ໵ൌ"],
				encodeOffsets: [
					[-64189, -22783]
				]
			}
		}, {
			type: "Feature",
			id: "QAT",
			properties: {
				name: "Qatar"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÇؔɨѲɰĜʬˁdӯǽӳɵÑʫǖ"],
				encodeOffsets: [
					[52030, 25349]
				]
			}
		}, {
			type: "Feature",
			id: "ROU",
			properties: {
				name: "Romania"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@δǶԴġՠGϸȳ˺źبĄɄȠΠ@ʰćʺʟˊΟӞԁρėΩưϥϒƹЂƊϠƟpɏПǹʯĀɻ৥ӳĖ̪ؑফțзɋ௽¬٥ƀ͙ÕʍΊƵƦȚƘȷŀ˃ȋөʔßΌԟȢĥˌҕͤڪǂԖ֮Њ֬ԢǮ"],
				encodeOffsets: [
					[23256, 49032]
				]
			}
		}, {
			type: "Feature",
			id: "RUS",
			properties: {
				name: "Russia"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ࡌ๫కˤԫ்ࠌࡳyוُԒսٱƻ۸Ĥࠊħ࣢Țٌ૴ӯࠜôରަϮͭϴϐŠɔ։̆ߵuࠟΎࡑ"],
					["@@໵]ਙĨȒτ୊˚ࢢƧψƃęɱäɉ"],
					["@@֦Ƚțؐᗸű࿨޻࠭λ൛ēsࠑͳǩ޽~ٗ̊ૣʖȉθ࡟Ǝॗŉҗ̎Ǽ̸৓ȥϚЃӉΣ@„Ꮪٛᔺ࠳ïԷ"],
					["@@ः©ƭˌੲΖ@ַ"],
					["@@ળ»@ָň܈E௒ʉïŗࡽȩ"],
					["@@ౡMႣĤƧ¬ߘͪੀþஞ͏ĸə"],
					["@@ॿͩഉø༛ͨȪ˖༨ųᑔɗ"],
					["@@ډرᶽzඃȣမղҎ׀૎ǂᕞᴬѽ"],
					["@@ӹóᩣŊɟώູɦūҒ࡮ǶҞသܒޙĺ፨݆ɩϢሤѺ᪪բ᫠ǀ෴̸࿐Ŋאͩ֟ʻᲗз᢭Џᤙߝఫࠍ೉߱Ǡۥྎۏ"],
					["@@ɨгސȲឤYቈЧڬ̿ȽѧङʝᕅүفʟਬşఖɃݴǄєաτɔഊƂ᧪ƑȴϽ↲ů´ٜᄼƥഄLബѷϮ՝ӹΙੌڋ೔Ϳ߸ࢦഖϙ෢ɦྼʵؤʀൖş؅ޮૐζ䢀ձܐӿᔲٛ₎ǄာƑ۪΍Ĺؙਜʇ૴Ǥ๰vཚǑཪĢะݛਪˎڷ՞ϐώᧆɻფºᝂБ୲ν@”MKઇσઝÖݶҁԄەϲɧĮΏɑɝ༧Ǿ᚝مݛĭ౽ן௛ԧ̱ϣய׊ᔗڇϣ̸ߵΫ૱Ř˓ց৙߽ͻड़ȋő௣ޭΫ۱Δα฽ѕ̅ॡభȳʥ࡟ே޳ׂ̳έ௬ҵለИ୘܀ԆªϾರȊຊ੒คࡺຢڢڮஆ৷ëԍۗᒉइۍਖᓧ˷ᑃටۚԧሙɕಝēÔ؊ಯŶ਩ЭᢵƠ᪏ʟᨩ࿛ủጝ೚ŁаՃࠄȅ՞оईÃௌऍ܍ځ࠽ë্ϛഉ్௓˯ׇଙ঑ଇॻթӹ૩ӱՉYՇФૻؙſ˩ŝƦKѐіxŦ঴ɛܚܞ̒৶Ʃ֢ࠈ˾ऄ͚̮Ѵݲ൷ʛܯͧ౧Dͻ߄হװหˎ̵ࠖ̉Ԫ̿βԯࡐ̲݇షʢ૛uਯƱۛлҤȥXҩұˑݷࢻRσஅՍ৙̈́োéѯˮԋĞ௷ףેƑޛȻੑƌޫSԙіࠕИࡅŎ੝ŋߏƹ஛ΜǇـধɎށİवΎࢉࢉ΀ӵࠇב௏ɂ࠻֗Ͼ࢙^ܳʴ౫Ѓྃܣࢭơ͡çѽԤઍőΧΦחǌЙӠҩưிɍୃӜ҃ѯሟᒒੵٮ̮˂ᑋߍ߭³êҞઅ˺࢙ȱ˃ࢊມǺݯΑᑅ̳Чȹḭ̇ϫ˻؆ֹ߭ɓǀɭ߭ХസֿɁЉ୻ʓʟ੹Ѧ೯iࢻΟহͼᇡ׊ಽsჃࣳĿؗࡹӤڡउʖǡӝُ܊֫ذx՚֗ďѝѐƋϥӽ߿Ƒ࠳ࢁކߕĉ֣ࣼফԇ͹ƝɇωÌֿԚɿՅȚʳΈ޵ǮԙƁƥƼଥЖఅƌ܃ƞĹıੱ܂य़̈́ܩӴؒƈۤ۰ҹͪఌ΄uȀݯƉώѠɼ߼ÖƄ˪ȅҪ΀ѰWʚఉ˚ӭUԯЀ١ƃ੩̐lǒ̗θڟ¤éʼɀǞ՝ӈࢋąʭ¦Ƀȑ̽ȷ՞ȟ˨ǊĀڴ͞Ȁʍɢ֥ƪ¼Ʋ΁ƴՃվǸɨĉЂࠑȨѱĳšȼࢭɂˑӸíТЙȖάˊʝ޶װӞųƤक़ҬࢡЎᅢ੶ޮӠ͂єగּΆնݳش֢ܜ঍ग़ޢي౿֔ŬךڶüොͶࢀ̈൦ԕᘨȧṺो٤ЋÆ֓टѳ൏ɡ⏷ٔ؟Ńൌ؛ÂϵÆ࡫ઌʯڂɓňРԑΰ՘͈᎖Թ۾Ȳ֣؜ዦࠖޢµ޸̋Ӫ׀۫ԄЪԊءԶᚠˑӔҹ੡ĻNҳڌ˽ಜǼȶ՚ჶАᰪܞي£ࠣԙਬĕ׼˼༾xఢΐफ़ԏॖ֌ࢡӢѪˤ២ʫ୒ʿᴾॣ֚ѰࡡѺ{ǴৣĈˢЌ҅ټ}ː༄ݾրކزǒᕮɛǬұߕڽԺˋ˒חȏଵऒԧέ֕࿫஝०ŭ̢ͮऎɎɞжܮЎөӌϼֈࣿêȫҲڢࡈણۆຒ֦șװмnѴүͧ߷࣐Ƶϥ؄ඤͦლ¬༈ӏݛ۪ċࣆศǞ፾ᆘŌہѮংւॲx࿎иᕠŐ˪ɲᕂþیȋሴҀ໲aɶδߤΨጤΈ෸˗ଥȷበŹ"],
					["@@ⵙ͕ໞીےĦقÃᒈӋʟͿ"],
					["@@૽ōݱÛśƏঙƑ࣫ȦӐʾል~࿞ƶ౨XǢɧӘȬߊƐఞǿ͗ŷ"],
					["@@ᆳĿᚉʎඅ͎٣׾଩ǔᔆָᆎȎ࿌чኬ߻ȹݯ"]
				],
				encodeOffsets: [
					[
						[147096, 51966]
					],
					[
						[23277, 55632]
					],
					[
						[-179214, 68183]
					],
					[
						[184320, 72533]
					],
					[
						[-182982, 72595]
					],
					[
						[147051, 74970]
					],
					[
						[154350, 76887]
					],
					[
						[148569, 77377]
					],
					[
						[58917, 72418]
					],
					[
						[109538, 78822]
					],
					[
						[107598, 80187]
					],
					[
						[52364, 82481]
					],
					[
						[102339, 80775]
					]
				]
			}
		}, {
			type: "Feature",
			id: "RWA",
			properties: {
				name: "Rwanda"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ͬӃµӵʏŁѿÆʱӍԛàþҠŘÞԄʎɺȰďԈʸ"],
				encodeOffsets: [
					[31150, -1161]
				]
			}
		}, {
			type: "Feature",
			id: "ESH",
			properties: {
				name: "Western Sahara"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@oҊŸ@@ÉeǋEౝ᪁ªᒷ޿÷ȳћǄ்ᾓNǽ˫΢bCቆäĶ̢ΆϘˤୌୠ࣢Ђ੖ˀÖ˜ټۺĜ̦ŉϢ@˔ȒԲ"],
				encodeOffsets: [
					[-9005, 27772]
				]
			}
		}, {
			type: "Feature",
			id: "SAU",
			properties: {
				name: "Saudi Arabia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ŉΪʩʨÝͲѡ̞҃۴ʁۆׇ׀ϑƐ֋ߠīאӾӕञϿ͠ґǨˡӖ°ȎɹѦʕȊ͝زԟڴѓ־лIžҦ̌ļͲनƅζʶȪ̢ٚŚƒˮˤƜ࠷ࡀ၆фǆŴৢɩబיᛎၕ༠ãݠąȾЏתv͠ܥаȓƠִ̏Λ¼΍ċ˩ł˯ʎɽŐ˟ŲȵʬǕɶÒǆ͍ș࡙͐ᡌщǞǲϪש֕၁ᠽ࠽ᝑ͑޷ϙ׻ࢥϹƕɁˬ͏§߻ĎƷČॹmɫùΉɔɝЭĒΟρˋ"],
				encodeOffsets: [
					[43807, 16741]
				]
			}
		}, {
			type: "Feature",
			id: "SDN",
			properties: {
				name: "Sudan"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@śhdмĵ̀џͨĵ؄ĶبϳÌÍȇԍ©Ȭʕðԍңңл؅џđ۹Ӫͅǥđʓџǃǥ࠵@řǦ؃̡ƝɳîѝӬƟɲ؃ŗɱϵɏݣ˿ǁʳğå ̅ʎÃʼƌΔE΄ӛՀĩάZȰ̱ʜUӦǭ͖̍µĎ̰ɒΖħΐˢʴǫȞɞ԰ϨئܦÏ¥ ZΚॲH@း⁪@Ὂ@ῼ@˔ࠗȁƳŪࡻ্̰͌ȷҠ̳ыӑأƏ˅ʳĉ֑α௿ĚͳƅܟͿࠟԓзέٛč΃Љɽʝ࢟Dĳ"],
				encodeOffsets: [
					[34779, 9692]
				]
			}
		}, {
			type: "Feature",
			id: "SDS",
			properties: {
				name: "South Sudan"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Xٽűʯѿq˷ӏԨÑюХƨͳϦșӼࣳ֫օԫԇԫϭסFگȟՕȊ΋ɭ݉֐ȥάҵǱϱÆɣƕϗĸԗۚƉˊعͪɅԌΕζ֟ѬS˘ҡͼ֯͠ʴĠ̀ǂɐݤɲ϶؄ŘƠɱўӫɴí̢ƞ؄Śǥ࠶@ǦѠǄĒʔ͆ǦۺөѠĒм؆ҤҤïԎȫʖԎªÎȈϴËĵاĶ؃ѠͧĶ˿cлŜg"],
				encodeOffsets: [
					[34779, 9692]
				]
			}
		}, {
			type: "Feature",
			id: "SEN",
			properties: {
				name: "Senegal"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@΍ٺн̚φǄРמȦќ˾ːкïШǾҶVДʙ֎ɝԘأֈֽԹǔӓ̾ɿî͗ʽŧ³қâÙģȃk׿ȲЛV༇ɥħ˥ѻƋƏ٢ވkȬŞƮR̸ȘήǯκcζȌǝʐˡƙʻJͧȸˉ_ȍȥࣵy"],
				encodeOffsets: [
					[-17114, 13922]
				]
			}
		}, {
			type: "Feature",
			id: "SLB",
			properties: {
				name: "Solomon Islands"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ɾ˿חN͉ԬԈȯǜ"],
					["@@͝mԧĎǫżÀͮֈƁ˜ǭƎə"],
					["@@ųƹحܰǫԈ˺@̠ڥʹЗ"],
					["@@ǛڅΦҟ̠̿˪ŰĐϮȫېϭȢˉ"],
					["@@Ǘ³οȒ·Ί¨ƖԈΡͰ˛"]
				],
				encodeOffsets: [
					[
						[166010, -10734]
					],
					[
						[164713, -10109]
					],
					[
						[165561, -9830]
					],
					[
						[163713, -8537]
					],
					[
						[161320, -7524]
					]
				]
			}
		}, {
			type: "Feature",
			id: "SLE",
			properties: {
				name: "Sierra Leone"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ɧØ؁ͺѩ҈Ƨ̬Ĺت҆τĬɺƞǸɶpȜǂڦCɺ̛ǼΛʓƈɗṶɴ´ϹϹϛҗ«ʓȩˏ"],
				encodeOffsets: [
					[-11713, 6949]
				]
			}
		}, {
			type: "Feature",
			id: "SLV",
			properties: {
				name: "El Salvador"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ġȡӡ^̡Ą΍ǘұÀʃǶ~Ů˾ɄǀĢ«ĲȠ¾ʜëǸǙʪƇœτĴǤÑŘĝÏͳ"],
				encodeOffsets: [
					[-89900, 13706]
				]
			}
		}, {
			type: "Feature",
			id: "-99",
			properties: {
				name: "Somaliland"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ϛԩד۫۹Mᩧা͍̜̳К̳ҨǾ̖̲҈˚ƹǒΏϜΗкGߊɌࣴĴ݌ʼиÆ̚ƶӎKaE΋Aࡑ@ѫ"],
				encodeOffsets: [
					[50113, 9679]
				]
			}
		}, {
			type: "Feature",
			id: "SOM",
			properties: {
				name: "Somalia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ѼĎЊ˾͈FpɵýӧHѳǯ̣ʁࣥЙयԱ੷ܝ௷ܓवধ଩ࡁڹష࠯޳ٕँৱȗѷȍȣӽۚWᵤܾ॒ɰˆբfݠפબᛜᡄה۬ϜԪ@ѬBࡒFΌLbːhϰŰ"],
				encodeOffsets: [
					[50923, 11857]
				]
			}
		}, {
			type: "Feature",
			id: "SRB",
			properties: {
				name: "Republic of Serbia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ԡȡà΋Ӫʓ˄ȌȸĿșƗƶƥȷȏø̫Тγ͋ʿƗˋĞĳƑšϳa˹µØĴĴĦȴšKǍƼƑ ŋƆƽÀšŠƯ±ś˧ȩÑèð͋Ǩ˟ĜūŜɟƠȢŬЄЛ͔ɀτ̥Ë͔́ˉʈȱ͘٢ɚԾҖͣĦˋ"],
				encodeOffsets: [
					[21376, 46507]
				]
			}
		}, {
			type: "Feature",
			id: "SUR",
			properties: {
				name: "Suriname"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@৔ǙĞưڶÔࣚɥѩܟâֹͤӽƥίóϩɉΛӓǲЇđ͹öčʏƘǗ÷ǡҙèԡܴōӄˏBωؐƺѠ¯ȤԜɖƈݲ"],
				encodeOffsets: [
					[-58518, 6117]
				]
			}
		}, {
			type: "Feature",
			id: "SVK",
			properties: {
				name: "Slovakia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@´»ΊŖш̕ӺǶЈđ؂Ţߚ͓ɷɓǏ͹ǳđ࣑ʮ˟»ȟȡЁĿěÄХŽͭ}ãǙ۷Ļ̱ĠёɌċ̆äńŢȂόa˺Ĕxþǈ¢ÆȒȖžưʢD"],
				encodeOffsets: [
					[19306, 50685]
				]
			}
		}, {
			type: "Feature",
			id: "SVN",
			properties: {
				name: "Slovenia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ۜÝъȐܾtǈƘƘUǎ˳ڝɟć͹̇đHɻͣh˷ƎƷƙבȈúȫΨĞа"],
				encodeOffsets: [
					[14138, 47626]
				]
			}
		}, {
			type: "Feature",
			id: "SWE",
			properties: {
				name: "Sweden"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ࠁוƀԥ೹ڭྱܡؓஃײףߦүޗॅ࢑ȝ͍තӋ޿৳ĆӅڗঃˉߐ۳॔ٓஐφӜּۨ˦ন՝ю½ૠղ߀࠰ä̧ͬ˺ಬஂࡀञֈײ߮GɞҶཔƉŬքԸ૪Щ಼ֱv಑˴͛ฃʃ"],
				encodeOffsets: [
					[22716, 67302]
				]
			}
		}, {
			type: "Feature",
			id: "SWZ",
			properties: {
				name: "Swaziland"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ǡύӭěԅҖS̄ɰ̀ĂʔʐÒшƵŰϕðω"],
				encodeOffsets: [
					[32842, -27375]
				]
			}
		}, {
			type: "Feature",
			id: "SYR",
			properties: {
				name: "Syria"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@࿩ࣅऩͬgNŖŶ_ΈȸҠҜ̈́Əͤϗ¨ÿٞȶΌɤȀɤȀ°Ҹ˞Ǐऎɺ҂ƿۖFॴ̀Ґaक़žїԽҡȹĂؗͅ৫ᇵ࢓"],
				encodeOffsets: [
					[39724, 34180]
				]
			}
		}, {
			type: "Feature",
			id: "TCD",
			properties: {
				name: "Chad"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ĎЄաnDզΓ̶δ૊ੴߌ¬ન͖ၼǼΰΓ˾_ˌ̽ɔȷರࡔҠ…ྑ…ྏ¦ ܥÐϧإɝԯǬȝˡʳĨΏɑΕč̯̎¶Ǯ͕Vӥ̲ʛYȯՏƛэͽ؉ࣹ߅ϳ߹¾ʁûĊ̏ѫ̋Σ͟੓͏ȽȐƓhƹɍۛÙƀɪ˅ׄşΐλƜӷӪǼІϦċʂÐҸSқކ֐É֐ͭՠ"],
				encodeOffsets: [
					[14844, 13169]
				]
			}
		}, {
			type: "Feature",
			id: "TGO",
			properties: {
				name: "Togo"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ڱǳȇ̎ɡՔãкȆݴɁ̬ăڎD؎ΕѠÖˀ݂kŅѵʲʝ̈̋ЭǜǥኝȺׅ"],
				encodeOffsets: [
					[1911, 6290]
				]
			}
		}, {
			type: "Feature",
			id: "THA",
			properties: {
				name: "Thailand"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ݭϬܗeŬڈ݉Káऋґ௯˙ݏÌ؋ն΀ދưܭҶӓԚĭѤѧ˝·ևĵßќۇςƣƭͧ͒ƝжҁӄПЌƏӳǃҲĠԾʚ߬ТࡸҤ޶͟ތ`϶ĩҸ֕ښȩф̄ƺ̮ܶ·ֆՓؘН݆ΠƴϦࣦצӬθӔȘθʷ´ԍ֨ȷࢭpݫࢰԆʤƧӰzǜَ̊ÍٖڽÀࠥںܷ܅˙ϛ޿Ŧગǅ՟ۧȤ১"],
				encodeOffsets: [
					[105047, 12480]
				]
			}
		}, {
			type: "Feature",
			id: "TJK",
			properties: {
				name: "Tajikistan"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@̭ʷࣳƖāӛ࣬Þਢ˗འŶɈާˠĐԜȓ͛ŴӍࡿBׁØԻϕύĉ̉ǯͩˠþ۸ʩ¢ĞʲғȐα̇ė͹Żūԇj˕ϩ˯ǌ؋ˑʱĺӀࡘǹض؟ȨɔφۮЌҬˌբ૲ȜǩϵŤɹΎv"],
				encodeOffsets: [
					[72719, 41211]
				]
			}
		}, {
			type: "Feature",
			id: "TKM",
			properties: {
				name: "Turkmenistan"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ñۼطॣݔڣĠगюׯþσƽ֙|ׯӓ݇ǋƻרŪ࢞ٽ˶Ɏֺ֏¸Ȇ۾ߊȵ݈ˎؓԎʉӔڱɋď؛ʿհψ˨ॖǪ֨ɻךڅњ¤ॆ\\Əцܖ̂۾ӦଆѹĜڡ͐ǣࣦˮƳаࡽ०ׇոЃ࢞Щ૤ΫwԥʩЅɤſ̙۽ǋǙڥӁʭڏŵǫϟهŏࡩ͈"],
				encodeOffsets: [
					[62680, 36506]
				]
			}
		}, {
			type: "Feature",
			id: "TLS",
			properties: {
				name: "East Timor"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ĲȤܢȌזˀŀ͆Ľ̯ɫ࢕ο۳ʋeʬďǔ"],
				encodeOffsets: [
					[127968, -9106]
				]
			}
		}, {
			type: "Feature",
			id: "TTO",
			properties: {
				name: "Trinidad and Tobago"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ӚŊǮصۭġƯúʒɲiͪ"],
				encodeOffsets: [
					[-63160, 11019]
				]
			}
		}, {
			type: "Feature",
			id: "TUN",
			properties: {
				name: "Tunisia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ΩພԭͺQȰۉԄóنԮҶȢۚƃߠǠќࣶͺךĵ}ы܊̲ÒǉпЫMϱ̆ȽōܫփхǄқѤaɄЍ͊ſ³٥Хʋʵˏֽ͓ĘΑïΟЧț"],
				encodeOffsets: [
					[9710, 31035]
				]
			}
		}, {
			type: "Feature",
			id: "TUR",
			properties: {
				name: "Turkey"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@஺͗ঐżܤõলѬࣆ¢ߴЭƜ̑ăУزȻͨʕֻʇˀ५ǏʻҠڧЕƙ̏Ɋ঍ňίŽॗŽҏbॳ̿ەEҁǀऍɹ˝ǐ¯ҷɣǿɣǿ̱Ϡ͈͂ԟí۱ȖֿәౣĥڹҊࣟȗΑׇĳ߻҄ࣻeӽ࠶ؗҰЦٸՓВठߨಒΜྀٔŏ৞հ঒ʄർlุף"],
					["@@۫ҏ˃Ϻ\\ǦȦĦʺՂХɞࡦ˄ܤőĴ͓ܼ˓Ƶȵি±Ωʷ"]
				],
				encodeOffsets: [
					[
						[37800, 42328]
					],
					[
						[27845, 41668]
					]
				]
			}
		}, {
			type: "Feature",
			id: "TZA",
			properties: {
				name: "United Republic of Tanzania"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ƚġᵂႋÌӣ஼࠿ϱਙ¸Ӊՠ̩~ɓɳԓ¶ʭÇГ̌Ճΐ̰ࠡǿڝӣࣿ͛ԋb̙ʥבsɕŃঢ়ʂكåɽଢ˵ϺǛɶࠗƾӉʨՕƘͯƘΗɈґ੖ӣҺǗӤČѨƯޞΎ ̨̦͜ѬȺǮS˘ǷȐ·ͨʐł¶Ӷͫӄ̎Ķऄ[ႎà"],
				encodeOffsets: [
					[34718, -972]
				]
			}
		}, {
			type: "Feature",
			id: "UGA",
			properties: {
				name: "Uganda"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ः\\̍ĵԇʷȯĐPوȜ͎²ڬǰϸ͎Ѭ͔ɠ˒̘͵Ŗ¼চΌɮՖȉڰȠעEԬϮЊ׍İсτ९̧ؓЯ֋ʉͽTࢹႍß"],
				encodeOffsets: [
					[32631, -1052]
				]
			}
		}, {
			type: "Feature",
			id: "UKR",
			properties: {
				name: "Ukraine"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@̾ɄȒʮ¥ࢌĆ՞Ӈȿǝêʻڠ£̘ηkǑ੪̏٢Ƅ԰ϿӮVఊ˙XʙͿѯȆҩƃ˩߻Õџɻύڡã֑˕޽«ܣ̻¸ԹЪȭࡨ¼Ǐ̛ँơଛӟұǠȄЂࣽʘƨǈߪ˪ʑȔಯɆË̼ީĻ̷ҧٱةϟƠЁƉϑƺɂĞƦ˾ɲˎÑƮǬäĊśӸ{ɞØƽĎÐŲ̉ɈŧΘ̩ƐÒ˶ϝɦΉأʾ֑ĉȧŭΟ@Ƀȟاă˹ŹϷȴ՟HԳĢγǵÍɤұɮǐͺɸɔȀµɑϘބۦиİĜɾхܼДҢɪٲnࡖßबȫڎi͂ŧ̀Ʀɚȝݸ¢ͮąÄцʶȂܞº"],
				encodeOffsets: [
					[32549, 53353]
				]
			}
		}, {
			type: "Feature",
			id: "URY",
			properties: {
				name: "Uruguay"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ղĚࡆٯ̺|ࡺ՟ڈҫӠֱχЉɸӇεՇॉұاǚғěޥΰ֫ԟҬÞլǾȈS࠸ɤࡺȾڦ"],
				encodeOffsets: [
					[-59008, -30941]
				]
			}
		}, {
			type: "Feature",
			id: "USA",
			properties: {
				name: "United States of America"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ũƕȽŤ|ɾƓ̨¦ĤƤƎÍǔ¸þÜe͐ƙƬñƌőɊ̍q¯͟ǵˏſ"],
					["@@˭ÑƟǮīèQÀĈî̘āɘŹëĵ"],
					["@@ĝ҉|Úĸа"],
					["@@­µÓŻŃȒɤŚêÃʐ˥"],
					["@@ıĉ˱ƴªÖŸĈȘijȝ"],
					["@@Ƭңʼƛז½࡬ƅࠂʹڼŊਖɓ˞Tݨʄ߂̧ࠒ͗ں˩ٶˏĈəȢĉ½ĉɦǎĔ¦ȣǜƅɴ@ŬĹĽƫ࢖ЁǶށǚܳʗӹЁҥȁ̍mēĦť˸Ɓɂ@ঊ҆ࡾƀસмfĐ÷ʰƉǒϜƆࠜHޘAˎ͞ŀàࢶ؄ϜƸ౦N໾BĎȺː¦Φž̖Ϣʲٺٚي˨ə֜ƜώʏAଧռӅƢ˝࣋Пࡷ̃ࢱʝѻӿƛȋSѽˤѽΒsė̬ʦȇãʇ֥ƋЗhةƥλ¥ӥ¥۫ʏఀǂʠǃ୳ʥ՗C|ĺʭɷʚǹ׽ؑ٧×Ɏȁª˟ɀǪҍȼƭ^ͅˏ͛ҿڡûʺֲѕ͎įۦǉεǴՑևƀׂ˓ߛʊÍĖ̃ŠࡁՕدࢇʝցӱнÁэ̱ţ˭इձӁЍЅӽŻׯƪ׍ˬܗώשLεЊঅ֥͛ȿԡʣŃЯĺƁς͋ȖѻܢϹٞű͢Ǥ֐ɽҦٻ۲͟źࡑϡƭ¦СϼՃȺोŁݗĤٙÍΏſƲɟaͽǴǓǇō̵Ů́ǃ؍طѺܻĿ؏ȚԹÏۻȝއح࠳γҝБȕϗUׅ¨ЕǄ˹͝{׭ȂٽʺɽЄȁטӷӐ̃ӰуֺףͲۉgՉڑۣʦѡʪȽҦ˧Ѯӿτїˈ̩̖ป@C΋ڗ@ဩOቿפ౓ТĀǒ੩ĝॕÝƙіխӚϻĴğʌһ¦̝ɪޭĊɉƌĹҢࠁࡊ۩ୠȚχˤٯ۴řۆ҃ҞȀۢܜˍ٢͠ߊĸނĺނƱૼˇܘʓ϶ĸǐ௒˷҂ߋȺɜƇې˷ێᛸ@᠂@ࠜ@ᢢ@៚@ᡀ@ᡄ@᭰@ᮞBაAF͔˴J"],
					["@@࠽͋ѕɐŽЀބ̘҆Ÿ֐ÉΤʻܫЍ"],
					["@@ԧŽսƾԛɮࠦƞښùĂ͑"],
					["@@԰ǅԾĒڸɛ࠲őéĝُǱٕǾ͋Ʋݍµȧôº̈́"],
					["@@؊ϛώǌහ»¹ȕ౾ƛࡨČᄚ˅ྤā٨ŉ૦Ǝౢʧࣲŝ@@MᷱIⷍࠠ{ࠌɵהρݜցࠈҺࡈ˖Ҁѡ֤·ޒϙՂ׽࡮य़ේ՗xՋұЙҥ͂ݍˌʃܺએںҍߎ߯Ä೷rটʌ჉ࢎߩǄ฽̜୑í࿻ϬৃΨटǯǦ׏ҫÁঁǫ݉˱झǳťӶϚࠚࣀʶɱɂੱҵֵ֑௅ױؚСߏ׿ࣗΗࡁʱȻωಽѡ˅ϿছΫֽÞ޷ɻ࡝˹ۧ˫෹ʉſƘऀϾࠔʸࣆҠਬĨвΈ୘ԊȈǚب̒ƢْђӸॹʫ˓Ơҕ̧շюɧ̝̽м࠿ͳԩBïԄƲ̮ե̚થǇ܁ЀַȬIӈ٩Ϊ͘ӘۆҸ̚њںÖ־ƇڴМ؎ï٘ʼƻϨҹưج͖ԩWࢻǽʯȃڏȄஏĥ௷ȬΛ͸੟Ӧ୾ΘመШ۔@ŕнᄢڽԶਕ͌ױр߫ΨଽˈҺѲ๰ਗ਼ϦȨФ࡬ЎࠊĪཪώޜÉಐ҄ౚǭ"]
				],
				encodeOffsets: [
					[
						[-159275, 19542]
					],
					[
						[-159825, 21140]
					],
					[
						[-160520, 21686]
					],
					[
						[-161436, 21834]
					],
					[
						[-163169, 22510]
					],
					[
						[-97093, 50575]
					],
					[
						[-156678, 58487]
					],
					[
						[-169553, 61348]
					],
					[
						[-175853, 65314]
					],
					[
						[-158789, 72856]
					]
				]
			}
		}, {
			type: "Feature",
			id: "UZB",
			properties: {
				name: "Uzbekistan"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@xԦૣά࢝ЪշЄ॥׈Яࡾ˭ƴࣥ͏ǤěڢଅѺ۽ӥܕ́Ɛхॅ[ᶾᓘӺƾïದ׻یͅߤݵঢŪ෸à৔ؗÙࡅЦMǢۍ੬ɲЉ̺Lπ׺૎הӖƺʠĉ۵խئ́ײȾ়ѷ੽؁ٕĊ΍uţɺǪ϶૱țˋաЋҫۭ ɓυؠȧǺصҿࡗهǰҳN"],
				encodeOffsets: [
					[68116, 38260]
				]
			}
		}, {
			type: "Feature",
			id: "VEN",
			properties: {
				name: "Venezuela"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@yȣӱĭ˜ϡYѭυӥ͆ڙδÆȌ؈ʻ̒§َਸ਼΀řІ̎ˆ̞ןל_մҵ˧ݮQ࣌ĔӖϕٞĻҼʾXɄਨ¼৖\\܉ʛ˼Їڦ×ِЯƆڧѬn͢ȣڕӱó̫˾̷ȽƽԫƉjϱɫɱّ֪Őʁ̭͍ऱ̽׿Žʏȣڛɀثņƿýϔɑ֝ŜՉ܆ï°ǭ׷ʅĭΣΉƏسȝǋʱٷÅҧѼʯ࠺ɟ̧̌ȄюмȊʅʠǛ֒à׼Ȉ˰ƲҎ̓Ơӏĩ؁®ͻęסܢӥńઉăȧ̊ȷêǬĴ̶áͺȃȂŅϮѡÈɸӮĺ׶ʔ̸͘ʌɈрդƖ"],
				encodeOffsets: [
					[-73043, 12059]
				]
			}
		}, {
			type: "Feature",
			id: "VNM",
			properties: {
				name: "Vietnam"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@૭ܗ۫ߍȁ׍٠ࢭ޺ળނԱԞګϪ།ŕ๓۫փ१եۇ۫਷ޱ̧ՠʀ֬دӌܬ͸ࢦÔσԚප٨ļ৖ț֖ƶࡀɃצٍאՋ݌ۥ঴৓Ԋʊ̠՞ɘ͙ܺਙPϕކӭڐҊȴڢIࠈĬܒ҄К̿ސƵƃӛАͿࡎɓ"],
				encodeOffsets: [
					[110644, 22070]
				]
			}
		}, {
			type: "Feature",
			id: "VUT",
			properties: {
				name: "Vanuatu"
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ˣō˭ςɤՆӗ"],
					["@@ƌڱɥŀǩ­ťɴi٢Дʵ"]
				],
				encodeOffsets: [
					[
						[171874, -16861]
					],
					[
						[171119, -15292]
					]
				]
			}
		}, {
			type: "Feature",
			id: "PSE",
			properties: {
				name: "West Bank"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@ԣŭʙЃŕɜɌŚɁĦǬ̤֔ś"],
				encodeOffsets: [
					[36399, 33172]
				]
			}
		}, {
			type: "Feature",
			id: "YEM",
			properties: {
				name: "Yemen"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@؉ɥǋύo˹࠷Οഇϻݩףυ±ʥºӭΑ՗ǉ۷©ɃµǿɛəÕŻɇеlˍœ׉¨ɓӬzҠƍʜǑتʋΊǚ¤đϨĸǊξςˌđΠɞЮΊɓɬúॺnƸċ߼č͐¨ɂ˫ϺƖ׼ࢦ޸Ϛᝒ͒ڀ൳˞ח"],
				encodeOffsets: [
					[54384, 17051]
				]
			}
		}, {
			type: "Feature",
			id: "ZAF",
			properties: {
				name: "South Africa"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ǏŧΣяɻћӇ׻ोࢁףԋًϣ࢛͙ѓ«ŇɷԛŰеǅ࣫ǊԙĹΏ¬ࡿͩܓƃԱͅϡoΣ̚˳fαϒśŏɦLӰ˙֞˔ƴs٤ս޼х܈AF׽તДдͪɯƘΫϘÓՈǃҌÖݤіB᷌ɨűӾߙûԟȈ̏׼ĒрϒЊʨȶДЦȚΠķВɽۂ£՞ȜĐʾƨДҚäʨ͂˪֔ݮغஒؤ΂UОƛ˲Ķ҂ċД஁ɔׯƫऩî̟чƶʏÑāʓɯ̿T̃ԆҕӮĜǢώْQȿؑıۥɑϛֵщ", "@@νʶϻǟҕ҃͡Տـ٧̜ČƺˎҴƀƜ˜ʴФ̅ʪ"],
				encodeOffsets: [
					[32278, -29959],
					[29674, -29650]
				]
			}
		}, {
			type: "Feature",
			id: "ZMB",
			properties: {
				name: "Zambia"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ІϏɊ܋ƝɩǙڻǈۡ˃̇ʭޭѶɓᢇۗĂׯٍřӍͯĹ̛̅ßܵۓҭխ˳o˗ĬऱĠƯÚOêͧȎկ¶ۋȑչԾ֣یᦶშYí̂Ű̀ƧЀĪТėʺ̂q¶ʽϾrՖûˬϡڨŝԤˆȌѯ٠ş̴ΧΈҥ٠Që࣠ɱƳח͞ɧƬļࡈƬসȉψʈ՚ɤĶ଀ƚͦđΘɇͰƗՖƗӊʧ"],
				encodeOffsets: [
					[33546, -9452]
				]
			}
		}, {
			type: "Feature",
			id: "ZWE",
			properties: {
				name: "Zimbabwe"
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ҁČ˱ĵНƜ΁VՙϞٯźʙՒC̒έĞ्ई˃ӢǛƮ͓ڤलğ˘ī˴pҮծܶ۔̜àĺ̆ӎͰَŚÆ̻۬hϴǯǺȻАÓѦˑF੟Ǐ׋عƊʝħӵŵùɛ؅ࢫ॓"],
				encodeOffsets: [
					[31941, -22785]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/xiang_gang_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "8100",
			properties: {
				name: "香港",
				cp: [114.2784, 22.3057],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@}ScTʟ@cWuJÁ]l¦RLj¼BĄà H@TOHCTDDDHDNAT@PEHDDNJLX@BABALHFF@DKHADBBLDHHFBLEJB@GDBBFBADDB@@KFAFBBJJA@BB@@FFDDADFF@FADDDBJC@AFBD@@DDD@DAA@D@DB@DHHBFJBBFEHDFAN@DGDC@DLCBDDCFDlAFBFCBEF@BC@GDAB@FD@DZJX´HĐMja@Ý`p_PCZ@lLnRGSDMFK|a\\Y}­§Mën"],
				encodeOffsets: [
					[117078, 22678]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/xin_jiang_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "6528",
			properties: {
				name: "巴音郭楞蒙古自治州",
				cp: [88.1653, 39.6002],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@ÈÒĊanwŎVȮ¦ͪŃĢÜōȂçČéƐżLɆóĊĊaʊŁ±¯²Um»ˌmÈ»VʠţWÑÅ¯ǓéôƑƒğÆīŎī@Ƿwô˺LÞ¯ƨVǪÑƒĢȘV°wĢôk°¯ƒ»΀@Ȃ»ĸǔ@΀͔ôôLɆó̐ÝɜLɲōͪƨóŤK@ī@IU܃ÛmȻţǩÝ˹ÛǉťǓǫō@Ɲ²¯VçōKͿŁΗÇţ»ƽɅƑLÓŏÅÅɱV@ÝĊU¯ÑĊĭÞLÞŎJ±̃XȣˌōlUÈ¯ŎKÆƅ°XÑÜ±nŗġV¯óaUƧUōŁÑ±çɲ¥lĉkğ°k¥nğţL¯ÝÝUƽĬ΁lķ°@ōXÿÝ¯V»ŹLʉÞɱŤĉó°ÝJ¦ÝKÝ£ţÜÈĉ@xǩUċƑ@ky͓¹`U²ĉVġ»ğa¯¥ť@ĉó@ŻÛÛJw¯nó¯ġWƽʩķÝɛwĉĕÝ¼ȭÞķō@ó£Å΀Ƒ¯ôȯÞ¯ȰÆōèĉXÇ¼ó@ÝnºĸÞVƜĸȚUʶõˀĵĖɱŎÝĖVࢰӒѢ°˘nϚVˌÈmɼĵŦW¤öʊõʔ@°ÈXVènŎȁb¯ǫĉ±Èğ`ġwōÔğ»mVVÝ¥ó@ĸķô@bXĶmV²²`Þ_ɴbͪÈ°ÞWĸÈŌmÞkɲÈUÆ»n¼ǬVķĸźô¯°n¦ɄÇÈ"],
				encodeOffsets: [
					[86986, 44534]
				]
			}
		}, {
			type: "Feature",
			id: "6532",
			properties: {
				name: "和田地区",
				cp: [81.167, 36.9855],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ƨ¥èź٨ΘƑᩄbUࢯÞĕɲōĶĕöʿVʵķșUƛÝķm¹Þô@È»ĊWŎçÅ°ȯȰÝ°óƒÆͿĉ»̽çnmɱĵƧºóUƽ@±wóL¯°̻L±Æ¯Vƴķb¯VÇ¥ğ²Ǖbk¥ÇKlÅɱġ@ÑóK@ÇaÝXğţxĉČǫķê¯K@ÑaŹƑK¼¯VóaónġwóÞéUġbóĉğÇl¹aUóğKWVÅ¯nÇŋƑķnʇ»óxĉwçÇ°Åw°ċXób±kÈÇJm²ţx@ÒÝŦÇºnó¼n°ÇbUÒ±¼XĸĠłƽXmwĉºzÈÜmnxmx²ĖmÒbnƧêUºĊêÆVóĖóUĉ¼ÅĬƑ°ɆƆŻŚlłÞL¼nĠ¼@ÞÞź@ŎÞ°VɄɴжϼِ͈Ŏ"],
				encodeOffsets: [
					[81293, 39764]
				]
			}
		}, {
			type: "Feature",
			id: "6522",
			properties: {
				name: "哈密地区",
				cp: [93.7793, 42.9236],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@WnŐÆĶLĢ¦ţºźlxÅĸƽŚɄĮè@ô²ÞUĔƐńV°¯ĸX¦Ɛm̐bƒ»Ɇa΀ĢƐLˤȘÑnІǉĸÿn¯ĶaŎ¯ĢĕȘ¯°΂la¯¥ǕǔwˤӱlťО̻nŻmɃĕċţUw°WUóƨÅţķ°ýV±óÅǓéʉ¯ƽŁéōǖȁÝƏůǕw˹ǫȗǓƧǕVýé@ĬţLƧôͩɱŎɛK̏ÞɅôóK@²@°ōŘ¼lŦ¯ŰóƜÛlV¼ķ¼°kȰŰĠǬŚÝŎmĖ`@ÇÜn"],
				encodeOffsets: [
					[93387, 44539]
				]
			}
		}, {
			type: "Feature",
			id: "6529",
			properties: {
				name: "阿克苏地区",
				cp: [82.9797, 41.0229],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VÆxˌŎÞŎ°nȂÒ°²VĊ¯VğƾˍǬƨÞÞKÈÞĊVźôɆÞĢèŌôWČ²ŤVÞĸʶbl¯ôn_VÆĸlmÞnVź_ĸ¼ȮmǖéĸW°°ĸJkʠ¼Æw°¤ÈlxɆzČºĶI²ÆǔU°ô@Þ¦UnUĠ¼ŎÓĢxĠ_²ÇĊǬ°ȂamōçUÇW@¯öʓõʉX£ĶťnɻÇUˋmϙ¯˗ӑѡᩃaΗƒɜ°xWƴUxɃÒˣ¤ɅwğʉōóÝŹ±°ȗ@¯Æƒ²¼", "@@ōгwȁ¥Ƨ°ŹÑķV¼ÞêĊ»lĵm¦ÅW@ĀôÈźaɜxÈbÞÆĶIОŘnIÇŃÛÝĊÑĠƏ"],
				encodeOffsets: [
					[80022, 41294],
					[83914, 41474]
				]
			}
		}, {
			type: "Feature",
			id: "6543",
			properties: {
				name: "阿勒泰地区",
				cp: [88.2971, 47.0929],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ɲˣĊIÈ¥ÅU±Ċýkō°ĉƽó»ĶƽXóʵʵȯƑÅȁɅ¯ĉ@ÇሗK֛@@ˤV֜ʵрƒǬVĸƑŎ@ƆϯÑóķ@ʇ»ķ¦έmlÈĸĊX¼WźÛÞÝѸĢČþĀĊôάVö¼ĊUƨ°°èŎČUÜÆóôVôô²êȘlˌç°`n²ǬĊaÛ°±kğmm»@°ÝɆÛÅÇVaÝVm͔ğôÝÈb@n¯ÜUĢÑĊ@źīżWŤÈǖWôŁÆI²ÓƨL@ĊXmmÑÆ»ȰÑkĶō@ý°m¯"],
				encodeOffsets: [
					[92656, 48460]
				]
			}
		}, {
			type: "Feature",
			id: "6531",
			properties: {
				name: "喀什地区",
				cp: [77.168, 37.8534],
				childNum: 13
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Č@°ĠôÓô@Ŏĉ@Ƴĸ@Ť£ĢlVôWVóřXĉŤêÞ@ƐÒĢÑlèÈV@ĠIk°ÆŘ@ÈÈĀ@ǶťÒğ@@ÒĉlŻ_@ƧĖÅĬōÆ@bźÞnƒlVÝĬWÆ¼ʇÝÅ@ÇÅÈwWóĉ±ğzĬČƨÆÝIĉÝ¯bÇÑĉ¯ʈV°xUŰĊ¤ƪ_ôÓɚI@lȚXȮŎlɴȘ՘¦ɲÆʈ_ɴźôÞʊŎĠɆxˤ£ɄÑVwXƳ¯wɛŹ٧çƧ¦ōُ͇еϻɃɳUÝ¯@ōÝŹ@Ý»mğ»ÝKkŁżřɅƅƒ¯ÆīĊ»ôVôĕÅUĉéV¹ƨémanÑ±ĕnwmwnÇÛyĉ¹ŹlŏkĵèķmōÞġKñÔċKÅèĉzômxȗÿƿI@þÅČÝKÝ°@¼ÈVº@ÅĢÆUċłnÝÆǕČĵJm£ÝJ¦@ĊxV°ƏLċ¼ǩ@m@ÅĢómÇÆğ¹ÇÆĖÞKxwô¦ÆÑÆL²ÆƾU±ŚÅŻĖ@ĬŤÈñ@ǔÇxÈÇƒ", "@@VÇţ°ğUĠ¯mk¯ó¥ķIġÿƏbĉa±ÒĸĀlKU_m»nwm@ÈŤ¦ĉbÞ°±Þżł̦°ĢŁVé"],
				encodeOffsets: [
					[76624, 39196],
					[81507, 40877]
				]
			}
		}, {
			type: "Feature",
			id: "6542",
			properties: {
				name: "塔城地区",
				cp: [86.6272, 45.8514],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ήnĸ¥ʈ¼ĸ@ôϰÒ@ƅƒōUķƑǫʶпU֛܃LګK@΋ĸ@Æ£ÞġÅĠċLVÝ»@Å»Ýnm¯»nŻĊ@nķŃ@¯ómóÛÝǟ¯aÝóȭ¥ōUmxĉbÇÑ@bUº¯X¯ÆƧbVÒĉnǕw¯°ƑVÇ@kx±UɱnÅK¯ƒĠǠU°ɜL@°xnĬĀŋŎÇLğϱÞέƜkôÅĀǕłĸĊŤUŰĢ°¦ȂϰÜɨ°x@°żǠÆƈČVĠ»ČL°ÇbĊÑ̐óÞlĶwÞɆVÞwǬxǪţÈ¼ÜLŐĶˢ@", "@@óKĵĀV͈ĉłƾǊÆŤzXl°ÆL²¼źôÈĢǔ¦lô°ɜÞʊĠğÅm»ʵƳƑʝȗīV¥¯ĉ°Ñ@ŃÅI»ĉmğnaċƨbVğwġ¯@UōaĉÝJğÑÆŎkŎÞĀlź¦"],
				encodeOffsets: [
					[87593, 48184],
					[86884, 45760]
				]
			}
		}, {
			type: "Feature",
			id: "6523",
			properties: {
				name: "昌吉回族自治州",
				cp: [89.6814, 44.4507],
				childNum: 7
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@መL@È°ĊȂɆƒÆĊ£ťôWÓɆbĢÅŎÆ¦ČÑW¥°ķU¯ƏŃVē±Ý@óçĭɃƾřÆķkwŹŤ¹ġ¥ĵKŏÅXmˍщwǓ¤Ƒ@wóōVķ£ɱġôÛa±ÒȁóèţIVƽ¼k¤ó¹ġJmx»ÝU²@ÅÆĸǫŎĊmŎǬ՘"],
					["@@Þô°bÞǠôÜôn@°ĸńǶkł¼UÞKğČÆÝĢÅ¤ķ@@ΌڬL܄K@ˣȂ˭lĉÅW¥ĵVÆý@ŃÞēUŃȗƅ@ŹƩǕĉ»k»ÇVğóřXŻKƏċêȁèÛŎġͩń"]
				],
				encodeOffsets: [
					[
						[90113, 46080]
					],
					[
						[87638, 44579]
					]
				]
			}
		}, {
			type: "Feature",
			id: "6530",
			properties: {
				name: "克孜勒苏柯尔克孜自治州",
				cp: [74.6301, 39.5233],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ˎǫĠƽ°UUĉ¯±ȁÑm¯ÝōˋōwUÅ±»ÅƑ°Ș@²¯ɳʇ`ɱÅ¥՗ɳȗōkȭșW@kəJóÔƩ`ĉ£Vů¯wU°ʇĊÈÒ°aĊÞÞJÅċƧīĠyĊ²XôÇxÈÆÆ@ÞʈÅ»XÞīUƑkmŹÝ@aŎÅÆīƨĕ@ż`Ċk@ÑĠ@ŦÑ@ǵÇÿ@ÇÅŗl¯ğJ@ÇUkçġÒƏÑÝ@ţéWĊôŚUóXUġkţ¤ķ@@ƴōĊó@óÔğ¯ċ@@Ò¤kôˣŰ͓k»KX¯ċwƧôğɐÒôIVÆ¯UķǬķn¼ôb°ÒȰVVÈÞ°ĸó¤V¼°V°²êlĢÒUƨ¦ôȰƴĊVV¼ǖIċĊÞɜénČW˸ǸařÈw±īçĸ¤ĊôwĸUĢ¦éǖĬĀô¼lÞkÒ°x°ƆÞxÆV²ǔ»b°wÞȘ¥°nŎV@°ʠèŰȂb"],
				encodeOffsets: [
					[80269, 42396]
				]
			}
		}, {
			type: "Feature",
			id: "6521",
			properties: {
				name: "吐鲁番地区",
				cp: [89.6375, 42.4127],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ôKĉǪa²¼lÜô@ʠê°ĬôȂ²ÑÜbĢóɲĸ¤ŎUô@xƒǔ£ъxˎmÈÛ@_nĕÞōřǫğůlȯ¯ĸ»U»Ükôƛ°ůkť»Ŏŗ@¯@±͓óͿǓ@ķȁ¼Ϳ@Ƒ¼¯°ólġ¯xȗUġƑǩÒƧUÝ°˹Kóx@ǸōĬÅĬƑĠóƒǔêÆ°XÒʟŤUÇ¼ˋnn¼±V²°ȂUŌÝbʟǔɅô@żǬaҎÈ"],
				encodeOffsets: [
					[90248, 44371]
				]
			}
		}, {
			type: "Feature",
			id: "6540",
			properties: {
				name: "伊犁哈萨克自治州",
				cp: [82.5513, 43.5498],
				childNum: 10
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ĉÆŘȁ̐mÞ¯ĀX°±¼@ƾ¯ƴ°ŎÝþŋ¦WÜÞbȂĉźUÇmwVUȂóô@ȰÝ΀nÆJnƾʠŌLČóǪ¯¥ǔaǖŌaôÝĢLxÆLɲm²VlwÈ@Uƒ°¯ǖxĊmUÑƨa°Å°WV¹aÇɃÈm¥°¯ŹóĸķǫUm»Å¼ÇVɱlÝŋnķÇÝX¯ͩÇɳaÝ`±_U±ĵnWa@ĸóķ¯ǓV±ÅĵJċ¹ɅykwÇ¯£Åxʟ»lķI¯X¯ķêǕȭnķ»Ź`±kÞ@Ýô@Þ°xŤŎIƨÆUxō¯²ǔĬǬlUŚ"],
					["@@ÞĀlź¦¯ĸŤKÞċƨbVğwġ¯@ţƽJ"]
				],
				encodeOffsets: [
					[
						[82722, 44337]
					],
					[
						[86817, 45456]
					]
				]
			}
		}, {
			type: "Feature",
			id: "6527",
			properties: {
				name: "博尔塔拉蒙古自治州",
				cp: [81.8481, 44.6979],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ήƛϲÝĠÈKŌōÿmīw@¯ɛKV¯ğǟ°ƑwġKóÞŋbǕǓb¦ǩ°ċôŋKʟƽmÅImͿȯÞó@ȁôUVnxÈŹVȁĊÝabŻ£¯°lóxȂŤĸkĊÞyĊêĊmĢxVƨÈĠXΘÆĠÔźɆţ°LXƾŤŤb"],
				encodeOffsets: [
					[84555, 46311]
				]
			}
		}, {
			type: "Feature",
			id: "6501",
			properties: {
				name: "乌鲁木齐市",
				cp: [87.9236, 43.5883],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@WôŚUĠÈl¼Ċ¼ƪǖ@źȘƆ@ýlÜXVŘÞ¦V¼kĖóÒèkĊȁˮ֜@ǫ՗nōĉǬōķÆÅ@±ÞV¼nwĢIôºl£ƾ»UŤJôçó¯īʟéó@kÛ±»ǩbĊóLҍÇǫb@ŻɆóʠǓaŋÞȁVʉłĉbĉɅô"],
				encodeOffsets: [
					[88887, 44146]
				]
			}
		}, {
			type: "Feature",
			id: "6502",
			properties: {
				name: "克拉玛依市",
				cp: [85.2869, 45.5054],
				childNum: 2
			},
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ɜÞʊĊýVaÅm»ʵƳƑʝȗīV¥¯ĉ°Ñ@ŃÅI»ĉmğnaÝţL°ķóKĵĀV͈ĉłƾǊÆŤzXl°ÆL²¼źôÈĢǔ¦lô°"],
					["@@ƾIŤ@UUwōaĉÝJğÑÆŎkŎ"]
				],
				encodeOffsets: [
					[
						[87424, 47245]
					],
					[
						[86817, 45456]
					]
				]
			}
		}, {
			type: "Feature",
			id: "659002",
			properties: {
				name: "阿拉尔市",
				cp: [81.2769, 40.6549],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nIÇŃÛÝĊÑĠƏōгwȁ¥Ƨ°ŹÑķV¼ÞêĊ»lĵm¦ÅW@ĀôÈźaɜxÈbÞÆĶIОŘ"],
				encodeOffsets: [
					[83824, 41929]
				]
			}
		}, {
			type: "Feature",
			id: "659003",
			properties: {
				name: "图木舒克市",
				cp: [79.1345, 39.8749],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VéVÇţ°ğUĠ¯mk¯ó¥ķIġÿƏbĉa±ÒĸĀlKU_m»nwm@ÈŤ¦ĉbÞ°±Þżł̦°ĢŁ"],
				encodeOffsets: [
					[81496, 40962]
				]
			}
		}, {
			type: "Feature",
			id: "659004",
			properties: {
				name: "五家渠市",
				cp: [87.5391, 44.3024],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@çôÑlĕU»¥ÝUŗWkÛ@þVńÝĔ@ńÅþĶUX¦Æ"],
				encodeOffsets: [
					[89674, 45636]
				]
			}
		}, {
			type: "Feature",
			id: "659001",
			properties: {
				name: "石河子市",
				cp: [86.0229, 44.2914],
				childNum: 1
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lŁǵmĉ@mż¼n°ÞmÆ¼@"],
				encodeOffsets: [
					[88178, 45529]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/xi_zang_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "5424",
			properties: {
				name: "那曲地区",
				cp: [88.1982, 33.3215],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ƨʔĸbÜºÞwnxźbÞ°ô@ĶĸIÈ¼ĊJŎÈôUÝƒ¤ǔLÞŎ@ĢȘblôLÇźçÈ¤ôL¥ÞIÞ¯ĶxʊťƨƿÑĉXVķŦ¯ȂKÇǕÑ¯IU£¯Óƿ£VĕÅÞÿÆwƑ£ǖxÞĕ±ÇÝaUÑÈU¯UōÈÝwWŁĵ±ÝóĢÿ°IÞ±mÅĢ¯mÿ¥°UnÑŤĢĕĶwǬŻͪwŎ¼źÇĢĠĕˎŁ°óƨ¼Èam@¥°wǔǖ°ƨÇŤġƨŎŃôbÈÛŎĊ°@Ġw²ÑÞJÆÆb²°êĊUÞlÈ²VÈKĊÒĸĉ»ÅôťUÅÇk¯@ÇÑklÇÅlĢVÑó@°@ÛĸV¯ÇĊn¯Uĕƽ¯m¯bÈ@Ò°Ĭbĵ¼kxķýÇJk£ÝaUÑÅóĶǟkÓʉnĉÝ¼Ƒó»Þmn£mČ¯@ȮÿV¯ĸk@Ýów»ğġ±ǓLōV¼Əèķĉè±b@ÒţUÑóakl£Ó@¯L@ÇlUóȁ¯aġÈÅĕÝLķ¯Ė¯@WĬxÒÈnW°ţôU²ǓÓġ²V°¯ôǔÝLċk»Ý»Ý¯ÞVwÛÝÇōͩÈĉċ»ĉm¯£W¥ţKkóġƏW@¯±kōÈb@ÒÇaÆ¯akóÛÇ¦Ýa¯Ýĉ@Ç»ÛmǓxķƛ¯lVĀÅÞġbÇJUÅVĖƑWzō»ōWn@è¯ÞóVkwƩnkźÇÞÒÞ¯ýğÇUxÆÈnè±bĉÝ»ÈŃwwÞ@m»ÈV@ýÇ°ķxaÝ¯Xċ¥ÈóW@ôkxlnxVÈóĊkŤġ¼@°¯ŰƑL̻Ű±ŎÝVÞVÇÞÅÇakƞ@èğŎĸżƾ°ÒLÞôĠKȰĖźVÈÒĠ¤VôUÈþťL@ôǬÞlÜÈnÇÒUŚ@ĊƨW°°X@ČÇþƴĉÒķ¦@ĢôWĀôłUÞĢǬź°¼@ôV°bUÆnzm¤ƽĸÈ"],
				encodeOffsets: [
					[88133, 36721]
				]
			}
		}, {
			type: "Feature",
			id: "5425",
			properties: {
				name: "阿里地区",
				cp: [82.3645, 32.7667],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Çƾķn£myVÅaU¯ó@¯»ŹġǫVÝóŁXÿġó@ĸ¥ĊÑƳÈý@ċW¯X¯ĉƧ@VřÈÑÇmkÛǫÝ@óŦKÇýVUó£ğÇÑŹUȯĕğLÝóK¯ÑƽķŻĠō@çlƝÈbÆÈÝUÝÞU²ō̼ůƒK°ů@¯UK±ĊƧbōÇmçÈġóÅóbźó¥kīÆ¯ólçKôĵUÅVŃķ¥nÅŏm¯¹Å»@ÑÇóxÝkʇȤU¤ķb@ƒ¯ĊÇx¯ĸĉKm°Āk¦lKnĬȀƾÛ¦WÆÅmǊĉ°ōUţ¤UŎ°ŎKÞłÆǓ¦Þř¯bmUÝl¯Umğl¯£șwÅǫaÝnĉĶk@¯Kō»ĉnaÞ»ťnkmlĸ¥UÅŻkÑťĉVôó°LôīĠUÿĉǕÅz±K¤²ō¤¯Ė¯UÝ¥VĵóÈťÝwķÈÑk¤óWýĵĕVĠVóǓķ°k±VU±ţ¦UǟÝÅJVÑ¥XUċUÅlÛƆǕÆȗƆ¯wŏÞÅ@ĉlÝóÒnUôÅlxólÝôÛ±LÛôÝL@ġ¯X¯ÇUÅ¼óaó¤¼XÒġŎóLk¦ôÅ¼ĸĠ¼KġƆô¦ÆƑÔĉĶ¯ImÒ°¦n°¯ÞlÝČnƒÒKĠÞĕklýƾťôIĖŤÒnƜm¼¯lnżóÞ@Ůó¦ôƽĖċŚn°Ý°ôÈUƜblÞó@ǖô°UÈƆ°XþôôlѢ²Ėm¦°@¤XĊblÜzkºƒĖmXŎWVóÞn°lĠxȚa°»żLźb@Æ°XĠÝȚxĊĕŤaȚ°È@@èŤ¦Ü¼WÞkÈ@V°lŤkŎ±²¦ƐUǉ°aÈÑŎbĢŎbÆ¥ÞIȘlôVÈUbkɲĶnmnXb̼òƾĖŎ@ĢȂÑôÓĠĖʊĊÔ"],
				encodeOffsets: [
					[88133, 36721]
				]
			}
		}, {
			type: "Feature",
			id: "5423",
			properties: {
				name: "日喀则地区",
				cp: [86.2427, 29.5093],
				childNum: 18
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ĶĖXþôl£ÒĸÇÞxÇŦôUĶÞ¦°V°ĕŎ£±£²LÆyĊǖĀğVóĬ¯KóôUĊŦlÒżVÆķ¦klnŦmÝ¼bĊmŎ¼L@°lĊĵÞmǬbÆȚx°¤Ġkn°VÞkVn°aŚÝǔ¥ÅÝŁōL¯ōVŤ£ŎVĊ¯nǉÆXÅÜ¥ǿƽmīLkl¥ÿn¯ĊL°ķÈw°ĉ@ƑĸaV£ʈȣÞlôwÈ@Ò¼Æ°ºŐnmÆĸ¦UńÆVóĶLèôkÅ°lĬ¦ŹôôaÆôÇĢnèŎÈƨaĉ²VLĢ»lţôĉUÇwkmlw@óôXÇČ¦°WÞbwĸÈ¯@þÇUn¼Ý@xxÇńÞ¼Ċ²amçÅÇVwĠÈþ°ÝÑÈÝlŹƪmlxôU°Ý@çmXŎŎ¼yƒXĕÆUVÈIĢaÆÝUÿ°kĸƜǔwnÜÈ¼Ċ@Þ°ÞbÈ¥Üôl°bÅÈb@ÑaÇ¯UU¯Vġ»¯aV¯Ç°ÅmnÑŤçǬVǬ±ĉ¯¥Vĕ¯Ýk£ōw@±ġÛ°ÇVÑ@Ûa@ČLƳÇa¯¤ÝIĵ¼U¥ƿōķÅţŻókÝóĕ¥¯U»Æ£X¯ġŃÛkÝ°V°ó¼¯èWôÞĖȎkĀƧĀówm¥¯JÅ¹ÝJÝōVVÅaÝƑ@ğŭÇ¯_ĵVnxÅónĵxÇĖĉVÝÈğVÒó¯±Żĉ£ķÆÅLǈĉýţÛ¯VnV¤ÝÈ@°ÅÞÝ¤ŰğŁm¦ÝxóK¥ɱÈUĠôêVôÛ¼ÇWÝçĵaō¦óĖƧlÇĢƑnŎÇV¼¼ºÛ@m¦ƽĉmm¯ÝKÛç¯bŏłĬb¼ÅLmxť°ÅUÝXkÝmĉ¦W¯KÒknÝaVÝè¯KɅńÝKnÞ¯¼"],
				encodeOffsets: [
					[84117, 30927]
				]
			}
		}, {
			type: "Feature",
			id: "5426",
			properties: {
				name: "林芝地区",
				cp: [95.4602, 29.1138],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VÈłVôÈk@°K@Ôk¤lôbVÒŤ@Ñ²açĸĊƐçU»ŎǔKĢ²Ġ¼ôx@ÞlƨĬUl¯ÈLVÞJ°ÜnʊwÜbXêVÞ¯°anaU°wÆ¼ɴÑWÑ°mÈýÈam¥Þ£Ť@¥ôblÞĢź¥ôxÈÅmÝĕÅV»ĉōŤōnó»ÈīķIUĠÑ°ġĸLÞ¯VÒÆ@Āb¼WôÈ@V¼ôóŤKÈÑU»wVǫżnWÒÈx¼lŦ£ĊōŤx²¯@ÆU¯çÆ@¤°£é°k°lůÈó@¯ŤÇÈĉkkÿó¥ÝXķÑÜ@ÒóŚÝ¯°ĉówÇ±¦ÅJUÒĉĀķw¯°mĖ¯±akxÝÅn»lÑK@¯lU¯UVÑ¯óĊ¯mōğVǓƅÞWÝÈÛ@ƿô¯ÜġzÅþ¯ólmôʇġĊÅUͿřŏȁˋŁóÇˡōƧÇbw°Ķôk¦ÒnUþġÒÔkǔķèó@²@ŘōńĵyzġaÝ¤ÅI¤Ƀť¦ğÑ¯¤ķbó¯ó±U²°¤ČÜVnÈÆŚŎ°ôĢþÆzèVĀÇĀÇXŹÑ¯¤ówċķk¦łUÒġzÇ@ÆÝx@²Þ@Æ¤Uô¦U°xU"],
				encodeOffsets: [
					[94737, 30809]
				]
			}
		}, {
			type: "Feature",
			id: "5421",
			properties: {
				name: "昌都地区",
				cp: [97.0203, 30.7068],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@VĖm°ĉÈU°ķÜ¯@@ôUÒġkÆkÈlÒ@Èl°ÈVÆóŦÆ¼aÅĢɄwnōw@¥Ŏ¦°ŹÞmV°wnÿwwÝw@¯mÞŗ°wĠĸkÞğlĔ²¦°@ĕĸwVóal@nĢÇĊn°@¦źUXçǔůĸVÆKÈÝĠ²ÅĔô@lÈ_mzǖlaU¼ôwV°¯¦ĬÈal@ČÇ¼nIxô»ɜ@ƨ¥ɆŁŃǪȁkƛƨȍʊȡóĭ@ÈÇVůÞĸƅmēƨťÅÈʉVǵ°ġVŭÅɧ°ÿnɛ£mķ²ŃóÑUĉ°mÇ»¯@mxUĀ¯èţ°ȁÝçġU¯ÆÇţÈ@°ÇôŰ¯k¯lê¯¤£Å@èV°Å@±°ţwĉŎť¤k»ÇwXÑŻmUǬxV¼ÇÒţLóôU»Ç@Xó»a@ÿÅUÑÝ°ķK¯ĢğÒVĸJÇĬ¼môţŎĊŎU¼ÆĖnÞÇÆówŹ¦ġkÝóa¦ţ@Ý¤n¦ÇbÇþ¯nXÒɳÒÅ»¯xVmbb¯Ý°UWéÛaxʉÛm¯ÝIUÇKk°VƧīķU°ȭĀ@ċ°nm¤Ýnô¼ƒÞ»ĊʊmlÔĵǠÆôVÒÞbl¤ÈIĸþlw»Ķa¯ī@ÑÇ°anƾ°"],
				encodeOffsets: [
					[97302, 31917]
				]
			}
		}, {
			type: "Feature",
			id: "5422",
			properties: {
				name: "山南地区",
				cp: [92.2083, 28.3392],
				childNum: 12
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°ÞUĖ°¦²ĊôÇÜLǖĀɜȘŰÞLĸźêÞ@UÜUŤ°ɞ¯Ü°WŦĀmŎ¦ĢyVÑŁl¥Čĸôx°£źÒWÈÿÈUÿçÅyýóġō¯řÅmÇÛUċ¯£V±²°ôôĸa°£ĠÒŦ¥Ʉ£ÆJÞ£ĢbyĶzŎŃ@ŗ±ô@ĸçlǓÓĢÑVýmÑl¥ĵó¯̻̥ƛǫÝһÇƧĉyţ¼ҍēVĶĉŎ°ĸmÞVÝĸÒÛaċóŹĖèÈÈl¼k¤ÝX@`Þŏ¼Æō¼ÇçĉKUÝÝ£ğ¤@¦ġl¯Òġĉ¯ómóxÝÞğVƴċK@b@ÜUÒ¯ÈĢÜ@²xŎl¤"],
				encodeOffsets: [
					[92363, 29672]
				]
			}
		}, {
			type: "Feature",
			id: "5401",
			properties: {
				name: "拉萨市",
				cp: [91.1865, 30.1465],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ŏ²l@°XĢƐlôŤLX¦°¤ĊnČ¼ÇĊŎͪÞÈÜxU°ÝÞÞ¼¼lČÞKǓ°óU¯Ģ±ǔÔV±ŤóX¯ÇmÑwXī°@°ĕĸÞKÆĖĢÇ°bȂÇŁUV¯wVó¥VÅ£Ý@@±ÞwÅÈ@¥nōťÿ¯XÛɝ°ţ¯ÛVVÝ@ŹéķÝKȗůɛǕÿÛKóÈǫǫUţèmÒn¯Æ°ÈU°b¼UĢV°°V"],
				encodeOffsets: [
					[92059, 30696]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/yun_nan_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "5308",
			properties: {
				name: "普洱市",
				cp: [100.7446, 23.4229],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Uô²a@²²Ķ¥V°Ķ²bl¤kVxl@°Ś²@y@ô¦¯@xxVxUVbVÜm¼ŎĢmºXXWÆ@ĀmmXU°ÅÒm¼Þx°w@°XêĠ°»nV°Ul@k@V±ôī@£ČŃÆ£KÞý@¥k@ya@nWVUVwm£Jknm@wmknXX¥mUUlUnb¯°nkVInlIUw°nmk@@mlanXlanmk@wVWUw_@éĠanmUaÜ£mX¥¯@@óUmÝ¯¯ÞÝlKnxô£»»ĠJ°aVUÝÿV¥ÛbI@wmón¯yÛL@WkÅmÈ`IWa¯K@¯mUnmaXmbmak¯ĢÒÝm¯mV¯KÇb¯KÛWWX@aVknċLUWVkXóW@ka@ób¯Uwmb¥UUlaU¥U£maķKXkmÝ@kwmÑ¯k±ċbUUVakaġ¦kL@`a¯xmÅLUW@ċnÅUV°LkL@b°°@¤²nôôkl°kèÒÈzV¤ÈWôônV@¦@¼Ux"],
				encodeOffsets: [
					[101903, 23637]
				]
			}
		}, {
			type: "Feature",
			id: "5325",
			properties: {
				name: "红河哈尼族彝族自治州",
				cp: [103.0408, 23.6041],
				childNum: 13
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@°°nÞôV@°@¦WnÛ¤Vbmnğb@ê`VxUX@xÆÞUnnWÞĸĢÈ@Çè@zÛÜWÅêl²KnV¯ĖĊx@bk@@°JÆ£Èblnnm°nlUkVUUwVmKnnVÞxVLX¥laX@@xl@VzÈVmk@b°ÈĸmV¦`WXbUbbX¼°x@aVVkn@lþnXUlVxŤÅyIUkaIŎĊ@lXx@bz@ô¥_V@ln@ôy@al_l`nmÈ»@kmXwWKU¯»aÅ@wmUÝKUaUUwW@w²»@kÆV£mm£VKkÑV@@»nw¥@kÆnllIVlnLVakalknJWmnaUaVÑVVÞn¥m@¯Uÿl@VçaXaV¯UyVLVk@nJlXLlkxlbla²Òl@nVJVkxKlkUaVķÝÑU@Åm¯@±Uó°ğńķĠmUÑ@Ç¯¯Å¼@nml@°¯¯`@w£@¯Çk@»nmċ¯U»I¯LÇĶÛn@bó°Uwm¯UmÇ¯aI@ykIVU¯bIğ¼¼ó¤mwkLÝÞ"],
				encodeOffsets: [
					[104243, 23429]
				]
			}
		}, {
			type: "Feature",
			id: "5326",
			properties: {
				name: "文山壮族苗族自治州",
				cp: [104.8865, 23.5712],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@wô@²¯maUmôUÆx@XbÞInlVUVwJVaUK°¥xmÞXnlKlnna°@ĊČÆwUmnkl@°£nyn@VV@Vak@@kÞÝbmx°Vnw°klÞInĖÞVlKl@Xa°KlVU@JnxU@ÈĢbUKlm@ak_wanWUk°l»k@Wk@lwU_@UalóU¥ÇnkJW@mVXx±bK@nV±a@Åa£ÝK²WknamKknÇk¯aVV¯ĀUÒ¥I@mm¯¯xÅW@@`k@ó»UU¯lm£ÅWlĵw@mmwÅmWU@y±UxmwU¯U¥Ý¥¯£m@kÇVUV°VbklLwUlUImk@±ÑkbkalwkWKkmI@UlUKVzU°WbbUè@kVĀ°@nm¦ÝUUUÒVbmbXnmIkllbUbmKUkkJmkÅ@l¦mx@¼U@lÒULn¤nU¤Å@l±¼@xXxVVVbÞLVn@xÆb°¼V"],
				encodeOffsets: [
					[106504, 25037]
				]
			}
		}, {
			type: "Feature",
			id: "5303",
			properties: {
				name: "曲靖市",
				cp: [103.9417, 25.7025],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@È¦lKÞĕUV¯Um¯ÇVUnVVUĉnĊÇƾLn°°ÈJÆw@lbÞa¦VXJ°¯W¯aÞJVkUa@lKnÅmWUk¯a¯»@m±@ÑkkbWWX_WÓU»_lkÑm@U»m@l@IWċn¯l@VanVUVUVwVxKÈVmUē@n@VÝÆLwVVwnVlmkUVÑÇ°ka@kÿÝaÞUl£ċĕX±±ĉa@UnVnalónk@wlUVmkÝJaW@ÅwóVVnnb±°@óxXLWxn@lÇ¼nmk_k`@bózm@kU@`¦ó@nW@ÜÅXWw@yb¦@ÒlnUb@xlÜk@²Ç@U¯bmy@kV@bb¦U`lLVx@bLl¼Þ¤@°VVÞU@WÞUbJ@nn@lnnmxUUUbK@ÇwklkUVWakn@lbU@@ULVxkKUn°¯Ò@¼km¦m@klȰ@lUl¦@Vl°wnnþĊUÆbUxbVĖU°annaVal@@b"],
				encodeOffsets: [
					[106099, 27653]
				]
			}
		}, {
			type: "Feature",
			id: "5323",
			properties: {
				name: "楚雄彝族自治州",
				cp: [101.6016, 25.3619],
				childNum: 10
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@mÒXU`Wn@Xl±¦Uxnbl°knmKUxxVôUx°¼ôÒÈ°JlnÞKĠW°¦Vx²JVw_°¥@UV@@wnymknK¯I@²b°£V¥wUV¤nLkÆJÈwôô°l»Č¯ġVUU@@°ÝXl@U»°Å@U¯@w±¯VmUUlm@mÑnIVyUwmak£Vwm±@Çw@n@UxkwlÇnLmkÅ@±kka@kóJV¯Ç»U£lw¯Xalbl¥¯UX@aUaÈL@ÇVIVkaU¯mmakLWkUJ¯Umxn@kUx¯xmWÅīÝkkbŤbkxWmXwWk¯wKkLÅ¤ċń@¤óĬU²@@lk¯VmU¯¼@xV@k°l°kbU°nmVnU@°UVèÞÆbUÒÞnU¦V¼lô@Vl"],
				encodeOffsets: [
					[103433, 26196]
				]
			}
		}, {
			type: "Feature",
			id: "5329",
			properties: {
				name: "大理白族自治州",
				cp: [99.9536, 25.6805],
				childNum: 12
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lbKVIUa@²m@bxôÒÜxXLmbnl@K°¼kUôxôlV¦nJUÆnm@xÆwbXÆôôLUVwôK@wlmaVw@WknmIUmlnJla@_@kÝmKUaÑm¯Xw°aUaVl»²JVbÆJkôĶĀ²VVkmbVwUówVwnLlmk¯maVw²¥Wk@XmV_WnÑUk@kó»UV¥ÝmVÑÅaÝUçV@¯VUmn¯mVlak¯l¯U@@wğWé¯@¯xÝw¯¯Jċa¯U¥mLU¤bÞȤbÇLWUwmIUVW¼kb`UVb¯L±ĊÛkÿÝKkwKţêUĉþÈV¯ÞVbU°KVk²ÝmImV@kmUkVxm¯KXÈķJU¦V°ULWxL@môb@bkx±LnVUVLnkÜWnwlLÅƒmW@kkJU_VWĊÞ"],
				encodeOffsets: [
					[101408, 26770]
				]
			}
		}, {
			type: "Feature",
			id: "5309",
			properties: {
				name: "临沧市",
				cp: [99.613, 24.0546],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@xĢl`²X°Vx@x°Þ°KXağUÑWbnIl`X²°bxl°V@xVxk¦mbl@xXVÆzX¤Æk°kx@lźêlaX»VUnJVxXÈKaÝȣaV£nKV¦°Čb°I°n»ÆÑV¯nWn@ÿXÅWWn¹ġōn»ÛUaUVUww@w°ó¥@z±@ř¯@kUwlk£±aĵ¯Uĵ¦±±@bó±VÝ@ó¤w¯I@mÅóm±X¯IólK@°UllbzkKlln@@ÔºUmVk²ôÒxŎUVóLbmÈnmbnlax@z@Æ¦k"],
				encodeOffsets: [
					[101251, 24734]
				]
			}
		}, {
			type: "Feature",
			id: "5334",
			properties: {
				name: "迪庆藏族自治州",
				cp: [99.4592, 27.9327],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@WXw@akk@yk°īX¥Uóķ¯w@n»UaVaUÛ¯mV¼kÞċô@n¯xÛÒmV¯Ô@x@kwmÅa@UaÝ¯VÅyVa@ÿn»ÝVmankmmÞÅô@n£±ğzÇmU¦VmnÜmbn@°nV@xmzÅ@mºV¦k°ln¤¼õôn@xkÆIUxU@Ť¦VmVkmkXW¤XzVx@Æx¼Þ¯b@lVĸÞVm¼Xm¦VÞ@Æ¹Vón¥ÆKnKX¯x@èĊÈ±łXaÆxnlV@UÛlȻkğV¥m²ǉmÅÞĕƒƛm°ÆmX¤mznÆV¦ÞVVb°bnÞWbn°l@VÈ@VĵĊ±@óInxÆw¥@£ÞW¯ĸ£UUKk±akkkbmWmÈķaÆÇUÈÆW@wmknmU¯"],
				encodeOffsets: [
					[102702, 28401]
				]
			}
		}, {
			type: "Feature",
			id: "5306",
			properties: {
				name: "昭通市",
				cp: [104.0955, 27.6031],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@mnK@wmUÅ¥móXǓŏmX@VmL@xţnk@mlUŻÒğŋ@L@mmLkm@bXÅW¼ka¯lÇŹ¯aÇ»ÝÝ_@m@@a@UklwUm@ak@bUmbmbV¯ĕUaVwÅaĉVmým¯xUk@k¥VUX¤VÈm`@ńÇÜ@ĀknĔkƞÆĠÞUVôƆÞI@UxÆ¦nl@ĊĊnxUÒ°¦Vb¯WUnWIml@xnUbô¤¼ÈxlI»KV@ÈÔJkUĖ±ÆVb@nVÜVUVLwĠlknĠ@nx°¥Æ²mUw@mmÅUl¯UÑÑUmLllIl±@VkwW@w°@U»kUóI°»ĢÑL`nUĠ²lmbôV@nJUxÆ¦X¦l@ŎUV@lVKVÅV£UaÞUnW@¯VU@ó"],
				encodeOffsets: [
					[107787, 28244]
				]
			}
		}, {
			type: "Feature",
			id: "5301",
			properties: {
				name: "昆明市",
				cp: [102.9199, 25.4663],
				childNum: 11
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@n@VkVUn²°@x°V@¯ÆV¼k@WÞ¯@@VVUĢċ°k¼VĊx¤Ōx°mVkÑÈL°x°X°VmĊLVxUĖ°bX¦VW@kȯlkn@¥ln@»°Ñ¯VmlLUwVK@V@ka@lmXbUlVlkÈx@LVaVVwnmm@km@mIVaÝ@XVUÝ¯U@Ý£k»K@aUwkKV_¥a@alU@nz°aVÈ@@±lÛk@wVakm@Ñ¥az@XxÆW@ÛX@m@y@aWw@kōĉJlbVJzţÆUwVkmWkým@UlU@b¯wVºUVUêĠXUaUbVĊUWXUmkKWnUUUVVVÝ@kk±¯Lk±WkXlVkl@wXbmLVUIVmk@Ubma@kkaVKUkmlXLWnJ¯ÒĊ°@zkºlLUŤn@@nô@lÆnmKkÈlxVw@@mÈx@n²Uxl¤nbVxUzmJÒn"],
				encodeOffsets: [
					[104828, 25999]
				]
			}
		}, {
			type: "Feature",
			id: "5307",
			properties: {
				name: "丽江市",
				cp: [100.448, 26.955],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@l@@w°ÓUnÜÑ°w@mČóÝlU»n°VÜUbVbm¼@°xôĸVW¦¯Ĭl@zll@bWxXaX@ÆĠÆaXwl@XaÆ¦n¼Jn@mnKW¯È»V¯°akVanXVwl@VyUĕVUbÈīlaUk°k¯l²VUkƛô@I@mVwĊaVakaÆbUVLaXIWKUwaWÑÅKUaVk°@Uw¯¥XğÝLkm¯IÇóÑ¯»anUl±UĵÿlóÅIaU±Ik¼UVb¯bWxn°ÒVbnLlÞ@@`kbmIkVnJmnXl@Uxbkn@xóLUxVKóóÅWaÅxw@nÅmVôXLlVU¤b¦m¼@ĀbUzUÆ°ÞVb@Æbnx"],
				encodeOffsets: [
					[101937, 28227]
				]
			}
		}, {
			type: "Feature",
			id: "5328",
			properties: {
				name: "西双版纳傣族自治州",
				cp: [100.8984, 21.8628],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@l²°nÒlxÞ@nWlLĸnbV¤V¦kbVV¦nax°Vôa@b@lôXlWUVXČKlmU@bWXXÜ°LÈa°LnU°ÞnÑġ°lnba¯¯KWó@kmK@UĉV@k°VV¹a@y_ċl_nÓlL@anI@óWl£VUlkĕlKVwU@kVam¯ÅL@bÝk@VnUbÇbÝwÅ@ċ¥¯lk¼ÅÒ°b@¦nlUn@ÇVmÆbWôU@ÝÅōm¯aUmkWWw@±n¯UèaL¯mLkwl@°mnÈÒ¯ów@VxĀU¤°Į°Xl"],
				encodeOffsets: [
					[102376, 22579]
				]
			}
		}, {
			type: "Feature",
			id: "5305",
			properties: {
				name: "保山市",
				cp: [99.0637, 24.9884],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@X°Il@¦È¼m¼ÞaÞÅlÈxV¼lVôÈÆlLÞ£ÈºlkUUw¯UĕVwĊ@n¦mlnVĸIWÇ°LnUwlVn@lnUnJÞl±U¯LVUa°ÝUÇĊýVŤéLlxÞLĀÜl²ĉ°KUaV_Źé@klw¯lÅW£ÅyUW@wknal¥Uw@wUk¯w¯aW±k_mJaXVÒĠWb¯L¯Ý@wwU¯±Wk_ġwwōKmb@¤bk°lĖôUJVnÅlťU¯°VbnbWxXmÞWUĀLyWzÛKmbUxVKknÝkVĀċ¤Ux@¯m@¦"],
				encodeOffsets: [
					[100440, 25943]
				]
			}
		}, {
			type: "Feature",
			id: "5304",
			properties: {
				name: "玉溪市",
				cp: [101.9312, 23.8898],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lL°xXlWxXnlwaţlaÞlÆĬnX°wVwl@mnw°VVIXllKbnnV°lbUUJ@ÈÇKVb@bW°Vk¦kaWb°kxV¤È¼U°ôI@llbl²@@ó@mm@VţkKl¹@yĉ¯°ÑIXmWKnklVULlb@lnbVal@UnVJUnKWax@lkkUlW²XlK°l²@lÞUUUVVVXmlLVnXWVUĉVaVbWğVéUVU¹W»aVaaWX_U¥nÇķ¯@alUnÇUyk@@wW@kbW¦UKÝwUmmLUnVxUVVlk¯mmnmkÇaÅ¤¯I@l@@aĉw°ĕmUL±kÆéXÜÛ@yÈç@ÇġÝķXmmÝVÅlmnkbmWkb@nl@nm¯VxkJmUJml¯°makVVnV¦WWmnl@xmnlI¤nxUVUmX@b@zl@¦Ýþ"],
				encodeOffsets: [
					[103703, 24874]
				]
			}
		}, {
			type: "Feature",
			id: "5333",
			properties: {
				name: "怒江傈僳族自治州",
				cp: [99.1516, 26.5594],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@WyX£lWlnnUU¥@ţVVwJlÅ@wmöó»£kml¯U¥n¹Æ@ny@wmU@¯mnamÛnUV¥ÈnĠy²m¤@ÆónÝnmlnbÞU¥aV£kUKWómIU¥ókwVól»¯Lk@mnaWKÛwóÑw@a±n@VbUJLkaÝXĉUV`lI@lnXÆƑkKmxÛXmlUKVmU²Klw@aaó@nKXwVKU¯V¥mUnkm¥ĉ@UxVĖ°VxVklmÞkKWĀkVWnl°Lnm@°UxlV@nk¦JVÈ°VÒ@nX°@ÆlUômlnô²nxmłnVV¯x@Èm°XblVUl°@xkXU¤WXXWXÆmkÅJmÞw±bxUīkKmÅVUĖÝèVkx@lXlnk¤LkĖk¦xUL°¯Ė@LnK@b°xVI¥Ua°Ñ@»nm@¹KŎÞÈWln²n"],
				encodeOffsets: [
					[101071, 28891]
				]
			}
		}, {
			type: "Feature",
			id: "5331",
			properties: {
				name: "德宏傣族景颇族自治州",
				cp: [98.1299, 24.5874],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@¥n@°@VwČ£ÿUlÞlmULVwnaÜLXyzKVÿXÝnWXwmaUa°¯VŦÆkUmVIókĕl¯a@£nama@¯m¯ó@óyţbġkÅm±ÛammVkLwU`Wk@VkUmÅlUUKmbkkUVUw¦ó°¼bn°ô¦lºz@x¯@U°nU¤ţU°VƆ@ÈmlnzÞl°¦ÆaxUxLkxWƒn@²ŰW@°ÈXl°Llx"],
				encodeOffsets: [
					[100440, 25943]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/mapData/geoJson/zhe_jiang_geo", [], function() {
	return {
		type: "FeatureCollection",
		features: [{
			type: "Feature",
			id: "3311",
			properties: {
				name: "丽水市",
				cp: [119.5642, 28.1854],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@VbVl@XnUXKV@¦nxlUXVnKVmnLUV@bn¤lLXK²`nnlJXIVJIVnn°KnnVll@VLXWV@UkVaVKzV@VVaUK@U»VUl@@WnUU@wVLn@Vwl@XW°LVbn@VU@Xl`@XnKVbkl@XVJlUnlVxlL@lnXl@VUnV°°@aUVLXblWVXn@VVUV@L¤VLVUVbnalLUUVX_laVaWVzXKV@@a@KUmImmXama@kU@yVIUKaVa@kXK@aWU@VIUmW@kkVmU@VwUa@K@k@U`@kUKVk@UV@VaUm²Vy@klUUWUkVmUa@_KVaXaXmU@mUlWkaUX@mmkL@wJnVVÅbWKXa@@I@aJUUÇ@VULW@akLmb@K@aXXw@mVmUVkUy@£@aU@@VkUWm@kUKXUWU_mW@wkkmJUUkLWWUXW@IkJ@k@mW_kÓ_UlLm@I@aUa¯m@ka¯LUJ@mVVxUba@LUKkXbm@Uak@@a@Um`IUbUJ@nUVW@@LnVV@lUbVlUX@`@blXklWUmXlm¦U@@V¯bml@@nUb@llnn@VbX@lV@UVULmU@JVnbVbkbVWxU@@nUVk@"],
				encodeOffsets: [
					[121546, 28992]
				]
			}
		}, {
			type: "Feature",
			id: "3301",
			properties: {
				name: "杭州市",
				cp: [119.5313, 29.8773],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@X@l°KXXlWb@²`bIX`l@@bWl@n@VnLUV@V@°¦@l@XVlU@@xVbUb@Vkb@@XVJVzJ@LÞ@VmLUxUJ@LUVxbxXUl@VaÈwbaÞa@Vl@XUVx@V@VLlbnVal@lbVnnLnKnL@VlbVJXalIb@KUU@mVInJUVl@xUVLnU@UÞaV@lkV@UanKL@UlKVUnbÆmn@@nUlVnVJl@@UXUL@WVIVJVxVLXV@IÜKnbn@V¥V@@I@y°b@UUwnk°ÆƨVlUçXm£aÇIkV@WV@@aWIUWUIkb@WW@UnK@UU@kaWVkVIVVnU@UWVUV@VmVkKkWIkVWaULU`UImJUImmU@wmwUVIUWVkUamaU@mVkb@KVU@aVU@anKULVJU@kÛUJUVkkVakU@aVwkW@UWkXmWaULUaUK@XJUUmVU@UVUkJ@ImwmKU@k@lUW@@akKmkamIkWl_UwVm@UkaVUUa@UamakbWlkL@aUalU@mkL@U@UlmK@XkKm@Ýakb@xnXb`nUUU@U@wU@@mKkkV¯U@lULUbVbUb@Va@LºÝb@bLmKx@VUL@bk@mxULWl"],
				encodeOffsets: [
					[121185, 30184]
				]
			}
		}, {
			type: "Feature",
			id: "3303",
			properties: {
				name: "温州市",
				cp: [120.498, 27.8119],
				childNum: 9
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@ll@xnXV`VXWVL@lXnlV@UV@@b@¤VzUlnVU@nWxW@b@LnalK@bXVKUÈ@VVI@b@J@WbXLÆaUUmI@xlKnn@VWlbkXV@nVWnWbUbL@`VbUnVlVXkV@lUz±VnUbU@@VUlVL@l_@V@l@LVbV@XLV`VÈlxn@lU@aaVVk@XJ@nl@@LU`°LVbL°a@aUVy@anI@aanV@²wÜJX@VVV°kna@WVkaWwU@m@kaUĕÝÝŤnÈaaóI»@±XWkUķ@kV±kwUkWwUÝ»ÛkɳlImaUaWóXÿǬkUnWVmmkKţnŏÞğlUlUx@XWbV@JkX°mb@VULVxUVk@@LWWk@WIkUkJmUkVmI@y@UakLmU@mUUUkaVk@mK@UlUU@UmKmbUUUJ@n@KVLUL@VkJWXX`mnULWlkL@JVLVb@°kxkU@LVV@VLV`UL@VUX"],
				encodeOffsets: [
					[122502, 28334]
				]
			}
		}, {
			type: "Feature",
			id: "3302",
			properties: {
				name: "宁波市",
				cp: [121.5967, 29.6466],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@Ċ¦ĸĀ°nXÞVKkƨƑźÿ°»n@wô¥ÜbU°ÆXÞWóçĉÝ±IUÈ¥@U°wÆ»²mm_@aXVKÞVlk@akk̅@£X»VwÆXWa¯aȗbKƽŰĊxLók@@¯nKUL@xkLÑkWULUUmJUXVU@mUX¯@V`mbXbV@@nn¤WXx@kJ@nVVUVl²UbÝVUVk@Wx@V@VXzmlaL@VlLU`XUVVVUnl@VbnJlnUVVnlUKkbmnnVxlJnxmbU@UL@KUVX@xmb@lk@mnVVUè"],
				encodeOffsets: [
					[123784, 30977]
				]
			}
		}, {
			type: "Feature",
			id: "3309",
			properties: {
				name: "舟山市",
				cp: [122.2559, 30.2234],
				childNum: 3
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@l΢ƒʠþÆVĢLĊǬXĊÜXôVÑÆwlƏÈóVĭVǓ@ĉwɛkmK@ĉXīWaĉUĵÝm¯ĉwĉ±±nÅ¼¯x@VÇ¦V²JĊÞôèÝXÅW¯VÛaó¦@xm¯¼ŹĀ"],
				encodeOffsets: [
					[124437, 30983]
				]
			}
		}, {
			type: "Feature",
			id: "3310",
			properties: {
				name: "台州市",
				cp: [121.1353, 28.6688],
				childNum: 7
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@lVIVWVz@bXJl@Xal@°nLll@nVxnVK@UJVb¦°k`UIWJXnÆ@bUJXl@lbWn@UzVV@bVVmVnnJVXnabKUKnUVVUnVLlKVLXaJm£@mU@WanaU_°@VWnV@UVWnIVVVKlXÒlK@wVKL°m@l@ôKwĉƾůUl£@»UVkm@ƅUaÛIŏmUk@mw@a£Wk@ţIm±@ankôUlaUUw¯ōabÇbţmÞÞVĖbl@@nVXxbUl@Xmb¯lUUUW@ÛI±xU@mb@bmJ@bUzV@b¯bKUa¯KV_@Kk@@mWI@lUUb@bkVm@kwUÇU_WKU@Ux@VUnllX@VnJ@UXV@bWL@lUbbVLUJ@zV@lnbWbnnnJV@L"],
				encodeOffsets: [
					[123312, 29526]
				]
			}
		}, {
			type: "Feature",
			id: "3307",
			properties: {
				name: "金华市",
				cp: [120.0037, 29.1028],
				childNum: 8
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@nbVb@VbUVlb@VUnVxk`lXnJlbnlL@bX@V@klV@nLnx@JlIVU@VUVnVVI@WVLVbVKXbWnXl@VlXUxb@lVUbllVUIÜVnalKX@@bV@@aUUlUwUw@naWWUVaUUaVbLlxXJVk°UlkU¥@ka@LVlXLVlVWznVn@lxJl_@WX_@mVaa@alU@kVVnaKVLlKb@UUaVabnUWmXU@k@yVI@aÅWmXIVJl_¯¥UaVI@LmUUw@mkkmK¯k@Wbk@WI@aUyUXJkU@bU@WLUyXUbkbW`UVVkKmbUaVUUK£@KVUUUm@UWkXWaUKV@b¯¯mUV@UkmW@kkKwUmkkVUI@WlkUamL@Wk_W@UVm@Ua¯KWXk@Uxm@UK@xVmV@Xk@UVV¼@VLUbUU@yULUbVlU@@XlVUVVbU@lXXVW@XUVl@@VUVÈn@VVU@lVa@UmL@`X@`WL@VUX@lUL@xlx"],
				encodeOffsets: [
					[122119, 29948]
				]
			}
		}, {
			type: "Feature",
			id: "3308",
			properties: {
				name: "衢州市",
				cp: [118.6853, 28.8666],
				childNum: 5
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@XkVKnwl@@aVK@UwnLK@aÞa¹@Kb@UVaUaVaVK@k°VUllnL@V@xV@V@VVm_Wam@wlaÞbn@lL@WnLk@V@VlK@nkVVb@blKXklakw@wVK@kVW@UXK@_W@_nKV@Ub@kVUUm@ÇVU@Uk@VU@WUXWW@kVUaVUkU@WWXUKk@Ukmm¯LmmUJUIWJkImm_±WLkKm£@aVUmKUnLmWUkVmw@¥ULVWm@WUka@UmmLmm@@bUX@@WUIm@UVUK@UVUUUVVJmb@bXnmV¼nnn¦mJUVLV@VW@UzUlVnUbl`UnVl@XU@kl@bmÈUxVk@@J@¼W@ÅaVVnzmV@WJk@kWJ@lXbWbXxmVnlLXb@°lKVXnWbWVXmbV@XlbI@Kn@@x@VLlm"],
				encodeOffsets: [
					[121185, 30184]
				]
			}
		}, {
			type: "Feature",
			id: "3306",
			properties: {
				name: "绍兴市",
				cp: [120.564, 29.7565],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@x@VnnVJnIVJV_VKXblUXJllLUUnU@UVVX@mVUUUJlXUlbV@@VLVmX@@XlaVJVXXJ@b@XU@lUJÈb¤ŌJçVUUnml@@kna@wWVU@LVKV@namwkIUwmnmlaVLkUmVUkmmIUak@VmUUVUWV_kK@UKbnkWyU@@UXwl@VUÞUVak±VUUU@mlI@wXWIWbUKkLUKVmUUmVVLLambUWmIUmnUU@aUUVym@Xkak@W@z@lWVXnmVaUbVb@VakLUKLmbUU@lkV@bbUb@nW`@Xk`Ikwm@mUXyUUkWKUk@Kb@lV¦klV¯UlWIkwKUabVVUbVXXmb@VxxkVVV@bU@@aW@kLmb@lVUIVKmL@bUV@bUV@LalnUV@nbVbUlVXJVUnx"],
				encodeOffsets: [
					[122997, 30561]
				]
			}
		}, {
			type: "Feature",
			id: "3304",
			properties: {
				name: "嘉兴市",
				cp: [120.9155, 30.6354],
				childNum: 6
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@@blIX@@VÜVUnn@lklKnI°Þl`²LVKVbnbVaVLUVn@W¦@VkVVb@VI`@blLnLaX@VVb@U@XlVa@@kVaUKV»U_lWXU@albk@VllnLVKn@@UVIUw@y°IVVXU@VV@lwm@wVkƾaJLkΡƧƒlLÝUmW¯ķÿĉ¥IŋWnèkVƧU¯ÅmlVx@V¯az@@JU@U¦m@@nVmn@VLV"],
				encodeOffsets: [
					[123233, 31382]
				]
			}
		}, {
			type: "Feature",
			id: "3305",
			properties: {
				name: "湖州市",
				cp: [119.8608, 30.7782],
				childNum: 4
			},
			geometry: {
				type: "Polygon",
				coordinates: ["@@kLlkm@VmÛU@UW@kJ@aUK@UnmmU@maÛL@JWUUKUwUIUJ@XKWV@Vk@UIUmVk@mm@ÅnmaUVkL@VKmLVbU@klU@ÝbV@mVUKV@wUkVmIUJ@nVV@LakJWbUIka@UmKmLKmmUUVk@@nmLX`WXUV@@nUlkmlU@UbxVVIlVnn@@nUÒ@°n@@xmb@VbnV@@b@`@L@L@x@blVklVbnnV@aXb°VlU@Wb°ULXWVUVVwÈwÜ»ĸaĠnUVw²X@V@lVU@wlaUUVm@knUV"],
				encodeOffsets: [
					[123379, 31500]
				]
			}
		}],
		UTF8Encoding: !0
	}
}), define("echarts/util/shape/HalfSmoothPolygon", ["require", "zrender/shape/Base", "zrender/shape/util/smoothBezier", "zrender/tool/util", "zrender/shape/Polygon"], function(e) {
	function i(e) {
		t.call(this, e)
	}
	var t = e("zrender/shape/Base"),
		n = e("zrender/shape/util/smoothBezier"),
		r = e("zrender/tool/util");
	return i.prototype = {
		type: "half-smooth-polygon",
		buildPath: function(t, r) {
			var i = r.pointList;
			if (i.length < 2) return;
			if (r.smooth) {
				var s = n(i.slice(0, -2), r.smooth);
				t.moveTo(i[0][0], i[0][1]);
				var o, u, a, f = i.length;
				for (var l = 0; l < f - 3; l++) o = s[l * 2], u = s[l * 2 + 1], a = i[l + 1], t.bezierCurveTo(o[0], o[1], u[0], u[1], a[0], a[1]);
				t.lineTo(i[f - 2][0], i[f - 2][1]), t.lineTo(i[f - 1][0], i[f - 1][1]), t.lineTo(i[0][0], i[0][1])
			} else e("zrender/shape/Polygon").prototype.buildPath(t, r);
			return
		}
	}, r.inherits(i, t), i
}), define("echarts/chart/line", ["require", "../component/base", "./base", "zrender/shape/BrokenLine", "../util/shape/Icon", "../util/shape/HalfSmoothPolygon", "../component/axis", "../component/grid", "../component/dataZoom", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/color", "../chart"], function(e) {
	function l(e, r, i, s, o) {
		t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
	}

	function c(e, t) {
		var n = t.x,
			r = t.y,
			s = t.width,
			o = t.height,
			u = o / 2;
		t.symbol.match("empty") && (e.fillStyle = "#fff"), t.brushType = "both";
		var a = t.symbol.replace("empty", "").toLowerCase();
		if (a.match("star")) u = a.replace("star", "") - 0 || 5, r -= 1, a = "star";
		else if (a == "rectangle" || a == "arrow") n += (s - o) / 2, s = o;
		var f = "";
		a.match("image") && (f = a.replace(new RegExp("^image:\\/\\/"), ""), a = "image", n += Math.round((s - o) / 2) - 1, s = o += 2), a = i.prototype.iconLibrary[a];
		if (a) {
			var l = t.x,
				c = t.y;
			e.moveTo(l, c + u), e.lineTo(l + 5, c + u), e.moveTo(l + t.width - 5, c + u), e.lineTo(l + t.width, c + u), a(e, {
				x: n + 4,
				y: r + 4,
				width: s - 8,
				height: o - 8,
				n: u,
				image: f
			})
		} else e.moveTo(n, r + u), e.lineTo(n + s, r + u)
	}
	var t = e("../component/base"),
		n = e("./base"),
		r = e("zrender/shape/BrokenLine"),
		i = e("../util/shape/Icon"),
		s = e("../util/shape/HalfSmoothPolygon");
	e("../component/axis"), e("../component/grid"), e("../component/dataZoom");
	var o = e("../config"),
		u = e("../util/ecData"),
		a = e("zrender/tool/util"),
		f = e("zrender/tool/color");
	return l.prototype = {
		type: o.CHART_TYPE_LINE,
		_buildShape: function() {
			var e = this.series;
			this.finalPLMap = {}, this._sIndex2ColorMap = {}, this._symbol = this.option.symbolList, this._sIndex2ShapeMap = {}, this.selectedMap = {}, this.xMarkMap = {};
			var t = {
					top: [],
					bottom: [],
					left: [],
					right: []
				},
				n, r, i, s;
			for (var u = 0, a = e.length; u < a; u++) e[u].type == this.type && (e[u] = this.reformOption(e[u]), n = e[u].xAxisIndex, r = e[u].yAxisIndex, i = this.component.xAxis.getAxis(n), s = this.component.yAxis.getAxis(r), i.type == o.COMPONENT_TYPE_AXIS_CATEGORY ? t[i.getPosition()].push(u) : s.type == o.COMPONENT_TYPE_AXIS_CATEGORY && t[s.getPosition()].push(u));
			for (var f in t) t[f].length > 0 && this._buildSinglePosition(f, t[f]);
			this.addShapeList()
		},
		_buildSinglePosition: function(e, t) {
			var n = this._mapData(t),
				r = n.locationMap,
				i = n.maxDataLength;
			if (i === 0 || r.length === 0) return;
			switch (e) {
				case "bottom":
				case "top":
					this._buildHorizontal(t, i, r, this.xMarkMap);
					break;
				case "left":
				case "right":
					this._buildVertical(t, i, r, this.xMarkMap)
			}
			for (var s = 0, o = t.length; s < o; s++) this.buildMark(t[s])
		},
		_mapData: function(e) {
			var t = this.series,
				n, r = 0,
				i = {},
				s = "__kener__stack__",
				o, u, a = this.component.legend,
				f = [],
				l = 0,
				c;
			for (var h = 0, p = e.length; h < p; h++) n = t[e[h]], u = n.name, this._sIndex2ShapeMap[e[h]] = this._sIndex2ShapeMap[e[h]] || this.query(n, "symbol") || this._symbol[h % this._symbol.length], a ? (this.selectedMap[u] = a.isSelected(u), this._sIndex2ColorMap[e[h]] = a.getColor(u), c = a.getItemShape(u), c && (c.style.iconType = "legendLineIcon", c.style.symbol = this._sIndex2ShapeMap[e[h]], a.setItemShape(u, c))) : (this.selectedMap[u] = !0, this._sIndex2ColorMap[e[h]] = this.zr.getColor(e[h])), this.selectedMap[u] && (o = n.stack || s + e[h], typeof i[o] == "undefined" ? (i[o] = r, f[r] = [e[h]], r++) : f[i[o]].push(e[h])), l = Math.max(l, n.data.length);
			return {
				locationMap: f,
				maxDataLength: l
			}
		},
		_buildHorizontal: function(e, t, n, r) {
			var i = this.series,
				s = n[0][0],
				o = i[s],
				u = o.xAxisIndex,
				a = this.component.xAxis.getAxis(u),
				f, l, c, h, p, d, v, m, g = {},
				y, b;
			for (var w = 0, E = t; w < E; w++) {
				if (typeof a.getNameByIndex(w) == "undefined") break;
				c = a.getCoordByIndex(w);
				for (var S = 0, x = n.length; S < x; S++) {
					f = i[n[S][0]].yAxisIndex || 0, l = this.component.yAxis.getAxis(f), d = p = m = v = l.getCoord(0);
					for (var T = 0, N = n[S].length; T < N; T++) {
						s = n[S][T], o = i[s], y = o.data[w], b = typeof y != "undefined" ? typeof y.value != "undefined" ? y.value : y : "-", g[s] = g[s] || [], r[s] = r[s] || {
							min: Number.POSITIVE_INFINITY,
							max: Number.NEGATIVE_INFINITY,
							sum: 0,
							counter: 0,
							average: 0
						};
						if (b == "-") {
							g[s].length > 0 && (this.finalPLMap[s] = this.finalPLMap[s] || [], this.finalPLMap[s].push(g[s]), g[s] = []);
							continue
						}
						b >= 0 ? (p -= T > 0 ? l.getCoordSize(b) : d - l.getCoord(b), h = p) : b < 0 && (v += T > 0 ? l.getCoordSize(b) : l.getCoord(b) - m, h = v), g[s].push([c, h, w, a.getNameByIndex(w), c, d]), r[s].min > b && (r[s].min = b, r[s].minY = h, r[s].minX = c), r[s].max < b && (r[s].max = b, r[s].maxY = h, r[s].maxX = c), r[s].sum += b, r[s].counter++
					}
				}
				p = this.component.grid.getY();
				var C;
				for (var S = 0, x = n.length; S < x; S++)
					for (var T = 0, N = n[S].length; T < N; T++) {
						s = n[S][T], o = i[s], y = o.data[w], b = typeof y != "undefined" ? typeof y.value != "undefined" ? y.value : y : "-";
						if (b != "-") continue;
						this.deepQuery([y, o, this.option], "calculable") && (C = this.deepQuery([y, o], "symbolSize"), p += C * 2 + 5, h = p, this.shapeList.push(this._getCalculableItem(s, w, a.getNameByIndex(w), c, h, "horizontal")))
					}
			}
			for (var k in g) g[k].length > 0 && (this.finalPLMap[k] = this.finalPLMap[k] || [], this.finalPLMap[k].push(g[k]), g[k] = []);
			for (var S = 0, x = n.length; S < x; S++)
				for (var T = 0, N = n[S].length; T < N; T++) s = n[S][T], r[s].counter > 0 && (r[s].average = (r[s].sum / r[s].counter).toFixed(2) - 0), h = this.component.yAxis.getAxis(i[s].yAxisIndex || 0).getCoord(r[s].average), r[s].averageLine = [
					[this.component.grid.getX(), h],
					[this.component.grid.getXend(), h]
				], r[s].minLine = [
					[this.component.grid.getX(), r[s].minY],
					[this.component.grid.getXend(), r[s].minY]
				], r[s].maxLine = [
					[this.component.grid.getX(), r[s].maxY],
					[this.component.grid.getXend(), r[s].maxY]
				];
			this._buildBorkenLine(e, this.finalPLMap, a, "horizontal")
		},
		_buildVertical: function(e, t, n, r) {
			var i = this.series,
				s = n[0][0],
				o = i[s],
				u = o.yAxisIndex,
				a = this.component.yAxis.getAxis(u),
				f, l, c, h, p, d, v, m, g = {},
				y, b;
			for (var w = 0, E = t; w < E; w++) {
				if (typeof a.getNameByIndex(w) == "undefined") break;
				h = a.getCoordByIndex(w);
				for (var S = 0, x = n.length; S < x; S++) {
					f = i[n[S][0]].xAxisIndex || 0, l = this.component.xAxis.getAxis(f), d = p = m = v = l.getCoord(0);
					for (var T = 0, N = n[S].length; T < N; T++) {
						s = n[S][T], o = i[s], y = o.data[w], b = typeof y != "undefined" ? typeof y.value != "undefined" ? y.value : y : "-", g[s] = g[s] || [], r[s] = r[s] || {
							min: Number.POSITIVE_INFINITY,
							max: Number.NEGATIVE_INFINITY,
							sum: 0,
							counter: 0,
							average: 0
						};
						if (b == "-") {
							g[s].length > 0 && (this.finalPLMap[s] = this.finalPLMap[s] || [], this.finalPLMap[s].push(g[s]), g[s] = []);
							continue
						}
						b >= 0 ? (p += T > 0 ? l.getCoordSize(b) : l.getCoord(b) - d, c = p) : b < 0 && (v -= T > 0 ? l.getCoordSize(b) : m - l.getCoord(b), c = v), g[s].push([c, h, w, a.getNameByIndex(w), d, h]), r[s].min > b && (r[s].min = b, r[s].minX = c, r[s].minY = h), r[s].max < b && (r[s].max = b, r[s].maxX = c, r[s].maxY = h), r[s].sum += b, r[s].counter++
					}
				}
				p = this.component.grid.getXend();
				var C;
				for (var S = 0, x = n.length; S < x; S++)
					for (var T = 0, N = n[S].length; T < N; T++) {
						s = n[S][T], o = i[s], y = o.data[w], b = typeof y != "undefined" ? typeof y.value != "undefined" ? y.value : y : "-";
						if (b != "-") continue;
						this.deepQuery([y, o, this.option], "calculable") && (C = this.deepQuery([y, o], "symbolSize"), p -= C * 2 + 5, c = p, this.shapeList.push(this._getCalculableItem(s, w, a.getNameByIndex(w), c, h, "vertical")))
					}
			}
			for (var k in g) g[k].length > 0 && (this.finalPLMap[k] = this.finalPLMap[k] || [], this.finalPLMap[k].push(g[k]), g[k] = []);
			for (var S = 0, x = n.length; S < x; S++)
				for (var T = 0, N = n[S].length; T < N; T++) s = n[S][T], r[s].counter > 0 && (r[s].average = (r[s].sum / r[s].counter).toFixed(2) - 0), c = this.component.xAxis.getAxis(i[s].xAxisIndex || 0).getCoord(r[s].average), r[s].averageLine = [
					[c, this.component.grid.getYend()],
					[c, this.component.grid.getY()]
				], r[s].minLine = [
					[r[s].minX, this.component.grid.getYend()],
					[r[s].minX, this.component.grid.getY()]
				], r[s].maxLine = [
					[r[s].maxX, this.component.grid.getYend()],
					[r[s].maxX, this.component.grid.getY()]
				];
			this._buildBorkenLine(e, this.finalPLMap, a, "vertical")
		},
		_buildBorkenLine: function(e, t, n, i) {
			var o = this.series,
				l, c, h, p, d, v, m, g, y, b, w, E, S, x, T;
			for (var N = e.length - 1; N >= 0; N--) {
				T = e[N], g = o[T], b = t[T];
				if (g.type == this.type && typeof b != "undefined") {
					l = this._sIndex2ColorMap[T], c = this.query(g, "itemStyle.normal.lineStyle.width"), h = this.query(g, "itemStyle.normal.lineStyle.type"), p = this.query(g, "itemStyle.normal.lineStyle.color"), d = this.getItemStyleColor(this.query(g, "itemStyle.normal.color"), T, -1), v = typeof this.query(g, "itemStyle.normal.areaStyle") != "undefined", m = this.query(g, "itemStyle.normal.areaStyle.color");
					for (var C = 0, k = b.length; C < k; C++) {
						w = b[C], x = this._isLarge(i, w);
						if (!x)
							for (var L = 0, A = w.length; L < A; L++) y = g.data[w[L][2]], (this.deepQuery([y, g], "showAllSymbol") || n.isMainAxis(w[L][2]) && this.deepQuery([y, g], "symbol") != "none" || this.deepQuery([y, g, this.option], "calculable")) && this.shapeList.push(this._getSymbol(T, w[L][2], w[L][3], w[L][0], w[L][1], i));
						else w = this._getLargePointList(i, w);
						E = new r({
							zlevel: this._zlevelBase,
							style: {
								miterLimit: c,
								pointList: w,
								strokeColor: p || d || l,
								lineWidth: c,
								lineType: h,
								smooth: this._getSmooth(g.smooth),
								shadowColor: this.query(g, "itemStyle.normal.lineStyle.shadowColor"),
								shadowBlur: this.query(g, "itemStyle.normal.lineStyle.shadowBlur"),
								shadowOffsetX: this.query(g, "itemStyle.normal.lineStyle.shadowOffsetX"),
								shadowOffsetY: this.query(g, "itemStyle.normal.lineStyle.shadowOffsetY")
							},
							hoverable: !1,
							_main: !0,
							_seriesIndex: T,
							_orient: i
						}), u.pack(E, o[T], T, 0, C, o[T].name), this.shapeList.push(E), v && (S = new s({
							zlevel: this._zlevelBase,
							style: {
								miterLimit: c,
								pointList: a.clone(w).concat([
									[w[w.length - 1][4], w[w.length - 1][5]],
									[w[0][4], w[0][5]]
								]),
								brushType: "fill",
								smooth: this._getSmooth(g.smooth),
								color: m ? m : f.alpha(l, .5)
							},
							hoverable: !1,
							_main: !0,
							_seriesIndex: T,
							_orient: i
						}), u.pack(S, o[T], T, 0, C, o[T].name), this.shapeList.push(S))
					}
				}
			}
		},
		_isLarge: function(e, t) {
			return t.length < 2 ? !1 : e == "horizontal" ? Math.abs(t[0][0] - t[1][0]) < .5 : Math.abs(t[0][1] - t[1][1]) < .5
		},
		_getLargePointList: function(e, t) {
			var n;
			e == "horizontal" ? n = this.component.grid.getWidth() : n = this.component.grid.getHeight();
			var r = t.length,
				i = [];
			for (var s = 0; s < n; s++) i[s] = t[Math.floor(r / n * s)];
			return i
		},
		_getSmooth: function(e) {
			return e ? .3 : 0
		},
		_getCalculableItem: function(e, t, n, r, i, s) {
			var o = this.series,
				u = o[e].calculableHolderColor || this.ecTheme.calculableHolderColor,
				a = this._getSymbol(e, t, n, r, i, s);
			return a.style.color = u, a.style.strokeColor = u, a.rotation = [0, 0], a.hoverable = !1, a.draggable = !1, a.style.text = undefined, a
		},
		_getSymbol: function(e, t, n, r, i, s) {
			var o = this.series,
				u = o[e],
				a = u.data[t],
				f = this.getSymbolShape(u, e, a, t, n, r, i, this._sIndex2ShapeMap[e], this._sIndex2ColorMap[e], "#fff", s == "vertical" ? "horizontal" : "vertical");
			return f.zlevel = this._zlevelBase + 1, this.deepQuery([a, u, this.option], "calculable") && (this.setCalculable(f), f.draggable = !0), f
		},
		getMarkCoord: function(e, t) {
			var n = this.series[e],
				r = this.xMarkMap[e],
				i = this.component.xAxis.getAxis(n.xAxisIndex),
				s = this.component.yAxis.getAxis(n.yAxisIndex);
			return !t.type || t.type != "max" && t.type != "min" && t.type != "average" ? [typeof t.xAxis != "string" && i.getCoordByIndex ? i.getCoordByIndex(t.xAxis || 0) : i.getCoord(t.xAxis || 0), typeof t.yAxis != "string" && s.getCoordByIndex ? s.getCoordByIndex(t.yAxis || 0) : s.getCoord(t.yAxis || 0)] : [r[t.type + "X"], r[t.type + "Y"], r[t.type + "Line"], r[t.type]]
		},
		refresh: function(e) {
			e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
		},
		ontooltipHover: function(e, t) {
			var n = e.seriesIndex,
				r = e.dataIndex,
				i, s, o = n.length;
			while (o--) {
				i = this.finalPLMap[n[o]];
				if (i)
					for (var u = 0, a = i.length; u < a; u++) {
						s = i[u];
						for (var f = 0, l = s.length; f < l; f++) r == s[f][2] && t.push(this._getSymbol(n[o], s[f][2], s[f][3], s[f][0], s[f][1], "horizontal"))
					}
			}
		},
		addDataAnimation: function(e) {
			var t = this.series,
				n = {};
			for (var r = 0, i = e.length; r < i; r++) n[e[r][0]] = e[r];
			var s, o, u, a, f, l, c;
			for (var r = this.shapeList.length - 1; r >= 0; r--) {
				f = this.shapeList[r]._seriesIndex;
				if (n[f] && !n[f][3]) {
					if (this.shapeList[r]._main && this.shapeList[r].style.pointList.length > 1) {
						l = this.shapeList[r].style.pointList, o = Math.abs(l[0][0] - l[1][0]), a = Math.abs(l[0][1] - l[1][1]), c = this.shapeList[r]._orient == "horizontal";
						if (n[f][2]) {
							if (this.shapeList[r].type == "polygon") {
								var h = l.length;
								this.shapeList[r].style.pointList[h - 3] = l[h - 2], c ? this.shapeList[r].style.pointList[h - 3][0] = l[h - 4][0] : this.shapeList[r].style.pointList[h - 3][1] = l[h - 4][1], this.shapeList[r].style.pointList[h - 2] = l[h - 1]
							}
							this.shapeList[r].style.pointList.pop(), c ? (s = o, u = 0) : (s = 0, u = -a)
						} else {
							this.shapeList[r].style.pointList.shift();
							if (this.shapeList[r].type == "polygon") {
								var p = this.shapeList[r].style.pointList.pop();
								c ? p[0] = l[0][0] : p[1] = l[0][1], this.shapeList[r].style.pointList.push(p)
							}
							c ? (s = -o, u = 0) : (s = 0, u = a)
						}
						this.zr.modShape(this.shapeList[r].id, {
							style: {
								pointList: this.shapeList[r].style.pointList
							}
						}, !0)
					} else {
						if (n[f][2] && this.shapeList[r]._dataIndex == t[f].data.length - 1) {
							this.zr.delShape(this.shapeList[r].id);
							continue
						}
						if (!n[f][2] && this.shapeList[r]._dataIndex === 0) {
							this.zr.delShape(this.shapeList[r].id);
							continue
						}
					}
					this.shapeList[r].position = [0, 0], this.zr.animate(this.shapeList[r].id, "").when(500, {
						position: [s, u]
					}).start()
				}
			}
		}
	}, i.prototype.iconLibrary.legendLineIcon = c, a.inherits(l, n), a.inherits(l, t), e("../chart").define("line", l), l
}), define("echarts/chart/bar", ["require", "../component/base", "./base", "zrender/shape/Rectangle", "../component/axis", "../component/grid", "../component/dataZoom", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/color", "../chart"], function(e) {
	function a(e, r, i, s, o) {
		t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
	}
	var t = e("../component/base"),
		n = e("./base"),
		r = e("zrender/shape/Rectangle");
	e("../component/axis"), e("../component/grid"), e("../component/dataZoom");
	var i = e("../config"),
		s = e("../util/ecData"),
		o = e("zrender/tool/util"),
		u = e("zrender/tool/color");
	return a.prototype = {
		type: i.CHART_TYPE_BAR,
		_buildShape: function() {
			var e = this.series;
			this.selectedMap = {}, this.xMarkMap = {}, this._sIndex2colorMap = {};
			var t = {
					top: [],
					bottom: [],
					left: [],
					right: []
				},
				n, r, s, o;
			for (var u = 0, a = e.length; u < a; u++) e[u].type == i.CHART_TYPE_BAR && (e[u] = this.reformOption(e[u]), n = e[u].xAxisIndex, r = e[u].yAxisIndex, s = this.component.xAxis.getAxis(n), o = this.component.yAxis.getAxis(r), s.type == i.COMPONENT_TYPE_AXIS_CATEGORY ? t[s.getPosition()].push(u) : o.type == i.COMPONENT_TYPE_AXIS_CATEGORY && t[o.getPosition()].push(u));
			for (var f in t) t[f].length > 0 && this._buildSinglePosition(f, t[f], this.xMarkMap);
			this.addShapeList()
		},
		_buildSinglePosition: function(e, t, n) {
			var r = this._mapData(t),
				i = r.locationMap,
				s = r.maxDataLength;
			if (s === 0 || i.length === 0) return;
			switch (e) {
				case "bottom":
				case "top":
					this._buildHorizontal(s, i, t, n);
					break;
				case "left":
				case "right":
					this._buildVertical(s, i, t, n)
			}
		},
		_mapData: function(e) {
			var t = this.series,
				n, r = 0,
				i = {},
				s = "__kener__stack__",
				o, u, a = this.component.legend,
				f = [],
				l = 0,
				c;
			for (var h = 0, p = e.length; h < p; h++) n = t[e[h]], u = n.name, a ? (this.selectedMap[u] = a.isSelected(u), this._sIndex2colorMap[e[h]] = a.getColor(u), c = a.getItemShape(u), c && (n.itemStyle.normal.borderWidth > 0 && (c.style.x += 1, c.style.y += 1, c.style.width -= 2, c.style.height -= 2, c.style.strokeColor = c.highlightStyle.strokeColor = n.itemStyle.normal.borderColor, c.highlightStyle.lineWidth = 3, c.style.brushType = "both"), a.setItemShape(u, c))) : (this.selectedMap[u] = !0, this._sIndex2colorMap[e[h]] = this.zr.getColor(e[h])), this.selectedMap[u] && (o = n.stack || s + e[h], typeof i[o] == "undefined" ? (i[o] = r, f[r] = [e[h]], r++) : f[i[o]].push(e[h])), l = Math.max(l, n.data.length);
			return {
				locationMap: f,
				maxDataLength: l
			}
		},
		_buildHorizontal: function(e, t, n, i) {
			var s = this.series,
				o = t[0][0],
				u = s[o],
				a = u.xAxisIndex,
				f = this.component.xAxis.getAxis(a),
				l, c, h = this._mapSize(f, t),
				p = h.gap,
				d = h.barGap,
				v = h.barWidthMap,
				m = h.barWidth,
				g = h.barMinHeightMap,
				y, b = h.interval,
				w, E, S, x, T, N, C, k, L;
			for (var A = 0, O = e; A < O; A++) {
				if (typeof f.getNameByIndex(A) == "undefined") break;
				w = f.getCoordByIndex(A) - p / 2;
				for (var M = 0, _ = t.length; M < _; M++) {
					l = s[t[M][0]].yAxisIndex || 0, c = this.component.yAxis.getAxis(l), x = S = N = T = c.getCoord(0);
					for (var D = 0, P = t[M].length; D < P; D++) {
						o = t[M][D], u = s[o], k = u.data[A], L = typeof k != "undefined" ? typeof k.value != "undefined" ? k.value : k : "-", i[o] = i[o] || {
							min: Number.POSITIVE_INFINITY,
							max: Number.NEGATIVE_INFINITY,
							sum: 0,
							counter: 0,
							average: 0
						};
						if (L == "-") continue;
						L > 0 ? (y = D > 0 ? c.getCoordSize(L) : x - c.getCoord(L), P == 1 && g[o] > y && (y = g[o]), S -= y, E = S) : L < 0 ? (y = D > 0 ? c.getCoordSize(L) : c.getCoord(L) - N, P == 1 && g[o] > y && (y = g[o]), E = T, T += y) : (y = 0, S -= y, E = S), i[o][A] = w + (v[o] || m) / 2, i[o].min > L && (i[o].min = L, i[o].minY = E, i[o].minX = i[o][A]), i[o].max < L && (i[o].max = L, i[o].maxY = E, i[o].maxX = i[o][A]), i[o].sum += L, i[o].counter++, A % b === 0 && (C = this._getBarItem(o, A, f.getNameByIndex(A), w, E, v[o] || m, y, "vertical"), this.shapeList.push(new r(C)))
					}
					for (var D = 0, P = t[M].length; D < P; D++) {
						o = t[M][D], u = s[o], k = u.data[A], L = typeof k != "undefined" ? typeof k.value != "undefined" ? k.value : k : "-";
						if (L != "-") continue;
						this.deepQuery([k, u, this.option], "calculable") && (S -= this.ecTheme.island.r, E = S, C = this._getBarItem(o, A, f.getNameByIndex(A), w + .5, E + .5, (v[o] || m) - 1, this.ecTheme.island.r - 1, "vertical"), C.hoverable = !1, C.draggable = !1, C.style.lineWidth = 1, C.style.brushType = "stroke", C.style.strokeColor = u.calculableHolderColor || this.ecTheme.calculableHolderColor, this.shapeList.push(new r(C)))
					}
					w += (v[o] || m) + d
				}
			}
			for (var M = 0, _ = t.length; M < _; M++)
				for (var D = 0, P = t[M].length; D < P; D++) o = t[M][D], i[o].counter > 0 && (i[o].average = (i[o].sum / i[o].counter).toFixed(2) - 0), E = this.component.yAxis.getAxis(s[o].yAxisIndex || 0).getCoord(i[o].average), i[o].averageLine = [
					[this.component.grid.getX(), E],
					[this.component.grid.getXend(), E]
				], i[o].minLine = [
					[this.component.grid.getX(), i[o].minY],
					[this.component.grid.getXend(), i[o].minY]
				], i[o].maxLine = [
					[this.component.grid.getX(), i[o].maxY],
					[this.component.grid.getXend(), i[o].maxY]
				], i[o].isHorizontal = !0, this.buildMark(o)
		},
		_buildVertical: function(e, t, n, i) {
			var s = this.series,
				o = t[0][0],
				u = s[o],
				a = u.yAxisIndex,
				f = this.component.yAxis.getAxis(a),
				l, c, h = this._mapSize(f, t),
				p = h.gap,
				d = h.barGap,
				v = h.barWidthMap,
				m = h.barWidth,
				g = h.barMinHeightMap,
				y, b = h.interval,
				w, E, S, x, T, N, C, k, L;
			for (var A = 0, O = e; A < O; A++) {
				if (typeof f.getNameByIndex(A) == "undefined") break;
				E = f.getCoordByIndex(A) + p / 2;
				for (var M = 0, _ = t.length; M < _; M++) {
					l = s[t[M][0]].xAxisIndex || 0, c = this.component.xAxis.getAxis(l), x = S = N = T = c.getCoord(0);
					for (var D = 0, P = t[M].length; D < P; D++) {
						o = t[M][D], u = s[o], k = u.data[A], L = typeof k != "undefined" ? typeof k.value != "undefined" ? k.value : k : "-", i[o] = i[o] || {
							min: Number.POSITIVE_INFINITY,
							max: Number.NEGATIVE_INFINITY,
							sum: 0,
							counter: 0,
							average: 0
						};
						if (L == "-") continue;
						L > 0 ? (y = D > 0 ? c.getCoordSize(L) : c.getCoord(L) - x, P == 1 && g[o] > y && (y = g[o]), w = S, S += y) : L < 0 ? (y = D > 0 ? c.getCoordSize(L) : N - c.getCoord(L), P == 1 && g[o] > y && (y = g[o]), T -= y, w = T) : (y = 0, w = S, S += y), i[o][A] = E - (v[o] || m) / 2, i[o].min > L && (i[o].min = L, i[o].minX = w + y, i[o].minY = i[o][A]), i[o].max < L && (i[o].max = L, i[o].maxX = w + y, i[o].maxY = i[o][A]), i[o].sum += L, i[o].counter++, A % b === 0 && (C = this._getBarItem(o, A, f.getNameByIndex(A), w, E - (v[o] || m), y, v[o] || m, "horizontal"), this.shapeList.push(new r(C)))
					}
					for (var D = 0, P = t[M].length; D < P; D++) {
						o = t[M][D], u = s[o], k = u.data[A], L = typeof k != "undefined" ? typeof k.value != "undefined" ? k.value : k : "-";
						if (L != "-") continue;
						this.deepQuery([k, u, this.option], "calculable") && (w = S, S += this.ecTheme.island.r, C = this._getBarItem(o, A, f.getNameByIndex(A), w + .5, E + .5 - (v[o] || m), this.ecTheme.island.r - 1, (v[o] || m) - 1, "horizontal"), C.hoverable = !1, C.draggable = !1, C.style.lineWidth = 1, C.style.brushType = "stroke", C.style.strokeColor = u.calculableHolderColor || this.ecTheme.calculableHolderColor, this.shapeList.push(new r(C)))
					}
					E -= (v[o] || m) + d
				}
			}
			for (var M = 0, _ = t.length; M < _; M++)
				for (var D = 0, P = t[M].length; D < P; D++) o = t[M][D], i[o].counter > 0 && (i[o].average = (i[o].sum / i[o].counter).toFixed(2) - 0), w = this.component.xAxis.getAxis(s[o].xAxisIndex || 0).getCoord(i[o].average), i[o].averageLine = [
					[w, this.component.grid.getYend()],
					[w, this.component.grid.getY()]
				], i[o].minLine = [
					[i[o].minX, this.component.grid.getYend()],
					[i[o].minX, this.component.grid.getY()]
				], i[o].maxLine = [
					[i[o].maxX, this.component.grid.getYend()],
					[i[o].maxX, this.component.grid.getY()]
				], i[o].isHorizontal = !1, this.buildMark(o)
		},
		_mapSize: function(e, t, n) {
			var r = this.series,
				i, s = {},
				o = {},
				u, a = 0,
				f = 0,
				l, c, h, p, d = 1;
			for (var v = 0, m = t.length; v < m; v++) {
				h = !1;
				for (var g = 0, y = t[v].length; g < y; g++) {
					i = t[v][g], p = r[i];
					if (!n)
						if (!h) {
							u = this.query(p, "barWidth");
							if (typeof u != "undefined") {
								s[i] = u, f += u, a++, h = !0;
								for (var b = 0, w = g; b < w; b++) {
									var E = t[v][b];
									s[E] = u
								}
							}
						} else s[i] = u;
					o[i] = this.query(p, "barMinHeight"), l = typeof l != "undefined" ? l : this.query(p, "barGap"), c = typeof c != "undefined" ? c : this.query(p, "barCategoryGap")
				}
			}
			var S, x;
			if (t.length != a)
				if (!n) {
					S = typeof c == "string" && c.match(/%$/) ? Math.floor(e.getGap() * (100 - parseFloat(c)) / 100) : e.getGap() - c, typeof l == "string" && l.match(/%$/) ? (l = parseFloat(l) / 100, x = Math.floor((S - f) / ((t.length - 1) * l + t.length - a)), l = Math.floor(x * l)) : (l = parseFloat(l), x = Math.floor((S - f - l * (t.length - 1)) / (t.length - a)));
					if (x <= 0) return this._mapSize(e, t, !0)
				} else S = e.getGap(), l = 0, x = Math.floor(S / t.length), x <= 0 && (d = Math.floor(t.length / S), x = 1);
			else {
				S = a > 1 ? typeof c == "string" && c.match(/%$/) ? Math.floor(e.getGap() * (100 - parseFloat(c)) / 100) : e.getGap() - c : f, x = 0, l = a > 1 ? Math.floor((S - f) / (a - 1)) : 0;
				if (l < 0) return this._mapSize(e, t, !0)
			}
			return {
				barWidthMap: s,
				barMinHeightMap: o,
				gap: S,
				barWidth: x,
				barGap: l,
				interval: d
			}
		},
		_getBarItem: function(e, t, n, r, i, o, a, f) {
			var l = this.series,
				c, h = l[e],
				p = h.data[t],
				d = this._sIndex2colorMap[e],
				v = [p, h],
				m = this.deepQuery(v, "itemStyle.normal.color") || d,
				g = this.deepQuery(v, "itemStyle.emphasis.color"),
				y = this.deepMerge(v, "itemStyle.normal"),
				b = y.borderWidth,
				w = this.deepMerge(v, "itemStyle.emphasis");
			c = {
				zlevel: this._zlevelBase,
				clickable: !0,
				style: {
					x: r,
					y: i,
					width: o,
					height: a,
					brushType: "both",
					color: this.getItemStyleColor(m, e, t, p),
					radius: y.borderRadius,
					lineWidth: b,
					strokeColor: y.borderColor
				},
				highlightStyle: {
					color: this.getItemStyleColor(g, e, t, p),
					radius: w.borderRadius,
					lineWidth: w.borderWidth,
					strokeColor: w.borderColor
				},
				_orient: f
			}, c.highlightStyle.color = c.highlightStyle.color || (typeof c.style.color == "string" ? u.lift(c.style.color, -0.3) : c.style.color), b > 0 && c.style.height > b && c.style.width > b ? (c.style.y += b / 2, c.style.height -= b, c.style.x += b / 2, c.style.width -= b) : c.style.brushType = "fill", c.highlightStyle.textColor = c.highlightStyle.color, c = this.addLabel(c, h, p, n, f);
			if (c.style.textPosition == "insideLeft" || c.style.textPosition == "insideRight" || c.style.textPosition == "insideTop" || c.style.textPosition == "insideBottom") {
				var E = 5;
				switch (c.style.textPosition) {
					case "insideLeft":
						c.style.textX = c.style.x + E, c.style.textY = c.style.y + c.style.height / 2, c.style.textAlign = "left", c.style.textBaseline = "middle";
						break;
					case "insideRight":
						c.style.textX = c.style.x + c.style.width - E, c.style.textY = c.style.y + c.style.height / 2, c.style.textAlign = "right", c.style.textBaseline = "middle";
						break;
					case "insideTop":
						c.style.textX = c.style.x + c.style.width / 2, c.style.textY = c.style.y + E / 2, c.style.textAlign = "center", c.style.textBaseline = "top";
						break;
					case "insideBottom":
						c.style.textX = c.style.x + c.style.width / 2, c.style.textY = c.style.y + c.style.height - E / 2, c.style.textAlign = "center", c.style.textBaseline = "bottom"
				}
				c.style.textPosition = "specific", c.style.textColor = c.style.textColor || "#fff"
			}
			return this.deepQuery([p, h, this.option], "calculable") && (this.setCalculable(c), c.draggable = !0), s.pack(c, l[e], e, l[e].data[t], t, n), c
		},
		getMarkCoord: function(e, t) {
			var n = this.series[e],
				r = this.xMarkMap[e],
				i = this.component.xAxis.getAxis(n.xAxisIndex),
				s = this.component.yAxis.getAxis(n.yAxisIndex),
				o, u;
			if (!t.type || t.type != "max" && t.type != "min" && t.type != "average")
				if (r.isHorizontal) {
					o = typeof t.xAxis == "string" && i.getIndexByName ? i.getIndexByName(t.xAxis) : t.xAxis || 0;
					var a = r[o];
					a = typeof a != "undefined" ? a : typeof t.xAxis != "string" && i.getCoordByIndex ? i.getCoordByIndex(t.xAxis || 0) : i.getCoord(t.xAxis || 0), u = [a, s.getCoord(t.yAxis || 0)]
				} else {
					o = typeof t.yAxis == "string" && s.getIndexByName ? s.getIndexByName(t.yAxis) : t.yAxis || 0;
					var f = r[o];
					f = typeof f != "undefined" ? f : typeof t.yAxis != "string" && s.getCoordByIndex ? s.getCoordByIndex(t.yAxis || 0) : s.getCoord(t.yAxis || 0), u = [i.getCoord(t.xAxis || 0), f]
				} else u = [r[t.type + "X"], r[t.type + "Y"], r[t.type + "Line"], r[t.type]];
			return u
		},
		refresh: function(e) {
			e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
		},
		addDataAnimation: function(e) {
			var t = this.series,
				n = {};
			for (var r = 0, i = e.length; r < i; r++) n[e[r][0]] = e[r];
			var o, u, a, f, l, c, h;
			for (var r = this.shapeList.length - 1; r >= 0; r--) {
				c = s.get(this.shapeList[r], "seriesIndex");
				if (n[c] && !n[c][3] && this.shapeList[r].type == "rectangle") {
					h = s.get(this.shapeList[r], "dataIndex"), l = t[c];
					if (n[c][2] && h == l.data.length - 1) {
						this.zr.delShape(this.shapeList[r].id);
						continue
					}
					if (!n[c][2] && h === 0) {
						this.zr.delShape(this.shapeList[r].id);
						continue
					}
					this.shapeList[r]._orient == "horizontal" ? (f = this.component.yAxis.getAxis(l.yAxisIndex || 0).getGap(), a = n[c][2] ? -f : f, o = 0) : (u = this.component.xAxis.getAxis(l.xAxisIndex || 0).getGap(), o = n[c][2] ? u : -u, a = 0), this.shapeList[r].position = [0, 0], this.zr.animate(this.shapeList[r].id, "").when(500, {
						position: [o, a]
					}).start()
				}
			}
		}
	}, o.inherits(a, n), o.inherits(a, t), e("../chart").define("bar", a), a
}), define("echarts/chart/pie", ["require", "../component/base", "./base", "zrender/shape/Text", "zrender/shape/Ring", "zrender/shape/Circle", "zrender/shape/Sector", "zrender/shape/BrokenLine", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/math", "zrender/tool/color", "../chart"], function(e) {
	function p(e, r, i, s, o) {
		t.call(this, e, r, i, s, o), n.call(this);
		var u = this;
		u.shapeHandler.onmouseover = function(e) {
			var t = e.target,
				n = f.get(t, "seriesIndex"),
				r = f.get(t, "dataIndex"),
				i = f.get(t, "special"),
				s = t._lastAddRadius,
				o = t.style.startAngle,
				a = t.style.endAngle,
				l = t.highlightStyle.color,
				c = u.getLabel(n, r, i, s, o, a, l, !0);
			c && u.zr.addHoverShape(c);
			var h = u.getLabelLine(n, r, s, t.style.r0, t.style.r, o, a, l, !0);
			h && u.zr.addHoverShape(h)
		}, this.refresh(s)
	}
	var t = e("../component/base"),
		n = e("./base"),
		r = e("zrender/shape/Text"),
		i = e("zrender/shape/Ring"),
		s = e("zrender/shape/Circle"),
		o = e("zrender/shape/Sector"),
		u = e("zrender/shape/BrokenLine"),
		a = e("../config"),
		f = e("../util/ecData"),
		l = e("zrender/tool/util"),
		c = e("zrender/tool/math"),
		h = e("zrender/tool/color");
	return p.prototype = {
		type: a.CHART_TYPE_PIE,
		_buildShape: function() {
			var e = this.series,
				t = this.component.legend;
			this.selectedMap = {}, this._selected = {};
			var n, r, o;
			this._selectedMode = !1;
			var u;
			for (var l = 0, c = e.length; l < c; l++)
				if (e[l].type == a.CHART_TYPE_PIE) {
					e[l] = this.reformOption(e[l]), u = e[l].name || "", this.selectedMap[u] = t ? t.isSelected(u) : !0;
					if (!this.selectedMap[u]) continue;
					n = this.parseCenter(this.zr, e[l].center), r = this.parseRadius(this.zr, e[l].radius), this._selectedMode = this._selectedMode || e[l].selectedMode, this._selected[l] = [], this.deepQuery([e[l], this.option], "calculable") && (o = {
						zlevel: this._zlevelBase,
						hoverable: !1,
						style: {
							x: n[0],
							y: n[1],
							r0: r[0] <= 10 ? 0 : r[0] - 10,
							r: r[1] + 10,
							brushType: "stroke",
							lineWidth: 1,
							strokeColor: e[l].calculableHolderColor || this.ecTheme.calculableHolderColor
						}
					}, f.pack(o, e[l], l, undefined, -1), this.setCalculable(o), o = r[0] <= 10 ? new s(o) : new i(o), this.shapeList.push(o)), this._buildSinglePie(l), this.buildMark(l)
				}
			this.addShapeList()
		},
		_buildSinglePie: function(e) {
			var t = this.series,
				n = t[e],
				r = n.data,
				i = this.component.legend,
				s, o = 0,
				u = 0,
				a = 0,
				f = Number.NEGATIVE_INFINITY;
			for (var l = 0, c = r.length; l < c; l++) s = r[l].name, i ? this.selectedMap[s] = i.isSelected(s) : this.selectedMap[s] = !0, this.selectedMap[s] && !isNaN(r[l].value) && (+r[l].value !== 0 ? o++ : u++, a += +r[l].value, f = Math.max(f, +r[l].value));
			var h = 100,
				p, d = 0,
				v = n.clockWise,
				m = n.startAngle.toFixed(2) - 0,
				g, y = n.minAngle || .01,
				b = 360 - y * o - .01 * u,
				w, E = n.roseType,
				S, x, T;
			for (var l = 0, c = r.length; l < c; l++) {
				s = r[l].name;
				if (!this.selectedMap[s] || isNaN(r[l].value)) continue;
				i ? w = i.getColor(s) : w = this.zr.getColor(l), p = h, h = r[l].value / a, E != "area" ? g = v ? m - h * b - (h !== 0 ? y : .01) : h * b + m + (h !== 0 ? y : .01) : g = v ? m - 360 / c : 360 / c + m, g = g.toFixed(2) - 0, h = (h * 100).toFixed(2), S = this.parseRadius(this.zr, n.radius), x = +S[0], T = +S[1], E == "radius" ? T = r[l].value / f * (T - x) * .8 + (T - x) * .2 + x : E == "area" && (T = Math.sqrt(r[l].value / f) * (T - x) + x);
				if (v) {
					var N;
					N = m, m = g, g = N
				}
				l > 0 && Math.abs(m - g) < 15 && p < 4 && this._needLabel(n, r[l], !1) && this.deepQuery([r[l], n], "itemStyle.normal.label.position") != "center" ? d += h < 4 ? 20 : -20 : d = 0, this._buildItem(e, l, h, d, r[l].selected, x, T, m, g, w), v || (m = g)
			}
		},
		_buildItem: function(e, t, n, r, i, s, o, u, a, l) {
			var c = this.series,
				h = this.getSector(e, t, n, i, s, o, u, a, l);
			f.pack(h, c[e], e, c[e].data[t], t, c[e].data[t].name, n), h._lastAddRadius = r, this.shapeList.push(h);
			var p = this.getLabel(e, t, n, r, u, a, l, !1);
			p && (f.pack(p, c[e], e, c[e].data[t], t, c[e].data[t].name, n), p._dataIndex = t, this.shapeList.push(p));
			var d = this.getLabelLine(e, t, r, s, o, u, a, l, !1);
			d && (f.pack(d, c[e], e, c[e].data[t], t, c[e].data[t].name, n), d._dataIndex = t, this.shapeList.push(d))
		},
		getSector: function(e, t, n, r, i, s, u, a, f) {
			var l = this.series,
				p = l[e],
				d = p.data[t],
				v = [d, p],
				m = this.parseCenter(this.zr, p.center),
				g = this.deepMerge(v, "itemStyle.normal") || {},
				y = this.deepMerge(v, "itemStyle.emphasis") || {},
				b = this.getItemStyleColor(g.color, e, t, d) || f,
				w = this.getItemStyleColor(y.color, e, t, d) || (typeof b == "string" ? h.lift(b, -0.2) : b),
				E = {
					zlevel: this._zlevelBase,
					clickable: !0,
					style: {
						x: m[0],
						y: m[1],
						r0: i,
						r: s,
						startAngle: u,
						endAngle: a,
						brushType: "both",
						color: b,
						lineWidth: g.borderWidth,
						strokeColor: g.borderColor,
						lineJoin: "round"
					},
					highlightStyle: {
						color: w,
						lineWidth: y.borderWidth,
						strokeColor: y.borderColor,
						lineJoin: "round"
					},
					_seriesIndex: e,
					_dataIndex: t
				};
			if (r) {
				var S = ((E.style.startAngle + E.style.endAngle) / 2).toFixed(2) - 0;
				E.style._hasSelected = !0, E.style._x = E.style.x, E.style._y = E.style.y;
				var x = this.query(p, "selectedOffset");
				E.style.x += c.cos(S, !0) * x, E.style.y -= c.sin(S, !0) * x, this._selected[e][t] = !0
			} else this._selected[e][t] = !1;
			this._selectedMode && (E.onclick = this.shapeHandler.onclick), this.deepQuery([d, p, this.option], "calculable") && (this.setCalculable(E), E.draggable = !0);
			if (this._needLabel(p, d, !0) || this._needLabelLine(p, d, !0)) E.onmouseover = this.shapeHandler.onmouseover;
			return E = new o(E), E
		},
		getLabel: function(e, t, n, i, s, o, u, a) {
			var f = this.series,
				h = f[e],
				p = h.data[t];
			if (!this._needLabel(h, p, a)) return;
			var d = a ? "emphasis" : "normal",
				v = l.merge(l.clone(p.itemStyle) || {}, h.itemStyle),
				m = v[d].label,
				g = m.textStyle || {},
				y = this.parseCenter(this.zr, h.center),
				b = y[0],
				w = y[1],
				E, S, x = ((o + s) / 2 + 360) % 360,
				T = this.parseRadius(this.zr, h.radius),
				N, C = "middle";
			return m.position = m.position || v.normal.label.position, m.position == "center" ? (T = T[1], E = b, S = w, N = "center") : m.position == "inner" ? (T = (T[0] + T[1]) / 2 + i, E = Math.round(b + T * c.cos(x, !0)), S = Math.round(w - T * c.sin(x, !0)), u = "#fff", N = "center") : (T = T[1] - -v[d].labelLine.length + i, E = b + T * c.cos(x, !0), S = w - T * c.sin(x, !0), N = x >= 90 && x <= 270 ? "right" : "left"), m.position != "center" && m.position != "inner" && (E += N == "left" ? 20 : -20), p.__labelX = E - (N == "left" ? 5 : -5), p.__labelY = S, new r({
				zlevel: this._zlevelBase + 1,
				hoverable: !1,
				style: {
					x: E,
					y: S,
					color: g.color || u,
					text: this.getLabelText(e, t, n, d),
					textAlign: g.align || N,
					textBaseline: g.baseline || C,
					textFont: this.getFont(g)
				},
				highlightStyle: {
					brushType: "fill"
				},
				_seriesIndex: e,
				_dataIndex: t
			})
		},
		getLabelText: function(e, t, n, r) {
			var i = this.series,
				s = i[e],
				o = s.data[t],
				u = this.deepQuery([o, s], "itemStyle." + r + ".label.formatter");
			if (!u) return o.name;
			if (typeof u == "function") return u.call(this.myChart, s.name, o.name, o.value, n);
			if (typeof u == "string") return u = u.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}").replace("{d}", "{d0}"), u = u.replace("{a0}", s.name).replace("{b0}", o.name).replace("{c0}", o.value).replace("{d0}", n), u
		},
		getLabelLine: function(e, t, n, r, i, s, o, a, f) {
			var h = this.series,
				p = h[e],
				d = p.data[t];
			if (this._needLabelLine(p, d, f)) {
				var v = f ? "emphasis" : "normal",
					m = l.merge(l.clone(d.itemStyle) || {}, p.itemStyle),
					g = m[v].labelLine,
					y = g.lineStyle || {},
					b = this.parseCenter(this.zr, p.center),
					w = b[0],
					E = b[1],
					S = i,
					x = this.parseRadius(this.zr, p.radius)[1] - -g.length + n,
					T = (o + s) / 2 % 360,
					N = c.cos(T, !0),
					C = c.sin(T, !0);
				return new u({
					zlevel: this._zlevelBase + 1,
					hoverable: !1,
					style: {
						pointList: [
							[w + S * N, E - S * C],
							[w + x * N, E - x * C],
							[d.__labelX, d.__labelY]
						],
						strokeColor: y.color || a,
						lineType: y.type,
						lineWidth: y.width
					},
					_seriesIndex: e,
					_dataIndex: t
				})
			}
			return
		},
		_needLabel: function(e, t, n) {
			return this.deepQuery([t, e], "itemStyle." + (n ? "emphasis" : "normal") + ".label.show")
		},
		_needLabelLine: function(e, t, n) {
			return this.deepQuery([t, e], "itemStyle." + (n ? "emphasis" : "normal") + ".labelLine.show")
		},
		reformOption: function(e) {
			var t = l.merge;
			return e = t(e || {}, this.ecTheme.pie), e.itemStyle.normal.label.textStyle = t(e.itemStyle.normal.label.textStyle || {}, this.ecTheme.textStyle), e.itemStyle.emphasis.label.textStyle = t(e.itemStyle.emphasis.label.textStyle || {}, this.ecTheme.textStyle), e
		},
		refresh: function(e) {
			e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
		},
		addDataAnimation: function(e) {
			var t = this.series,
				n = {};
			for (var r = 0, i = e.length; r < i; r++) n[e[r][0]] = e[r];
			var s = {},
				o = {},
				u = {},
				f = this.shapeList;
			this.shapeList = [];
			var l, c, h, p = {};
			for (var r = 0, i = e.length; r < i; r++) l = e[r][0], c = e[r][2], h = e[r][3], t[l] && t[l].type == a.CHART_TYPE_PIE && (c ? (h || (s[l + "_" + t[l].data.length] = "delete"), p[l] = 1) : h ? p[l] = 0 : (s[l + "_-1"] = "delete", p[l] = -1), this._buildSinglePie(l));
			var d, v;
			for (var r = 0, i = this.shapeList.length; r < i; r++) {
				l = this.shapeList[r]._seriesIndex, d = this.shapeList[r]._dataIndex, v = l + "_" + d;
				switch (this.shapeList[r].type) {
					case "sector":
						s[v] = this.shapeList[r];
						break;
					case "text":
						o[v] = this.shapeList[r];
						break;
					case "broken-line":
						u[v] = this.shapeList[r]
				}
			}
			this.shapeList = [];
			var m;
			for (var r = 0, i = f.length; r < i; r++) {
				l = f[r]._seriesIndex;
				if (n[l]) {
					d = f[r]._dataIndex + p[l], v = l + "_" + d, m = s[v];
					if (!m) continue;
					if (f[r].type == "sector") m != "delete" ? this.zr.animate(f[r].id, "style").when(400, {
						startAngle: m.style.startAngle,
						endAngle: m.style.endAngle
					}).start() : this.zr.animate(f[r].id, "style").when(400, p[l] < 0 ? {
						startAngle: f[r].style.startAngle
					} : {
						endAngle: f[r].style.endAngle
					}).start();
					else if (f[r].type == "text" || f[r].type == "broken-line")
						if (m == "delete") this.zr.delShape(f[r].id);
						else switch (f[r].type) {
							case "text":
								m = o[v], this.zr.animate(f[r].id, "style").when(400, {
									x: m.style.x,
									y: m.style.y
								}).start();
								break;
							case "broken-line":
								m = u[v], this.zr.animate(f[r].id, "style").when(400, {
									pointList: m.style.pointList
								}).start()
						}
				}
			}
			this.shapeList = f
		},
		onclick: function(e) {
			var t = this.series;
			if (!this.isClick || !e.target) return;
			this.isClick = !1;
			var n, r = e.target,
				i = r.style,
				s = f.get(r, "seriesIndex"),
				o = f.get(r, "dataIndex");
			for (var u = 0, l = this.shapeList.length; u < l; u++)
				if (this.shapeList[u].id == r.id) {
					s = f.get(r, "seriesIndex"), o = f.get(r, "dataIndex");
					if (!i._hasSelected) {
						var h = ((i.startAngle + i.endAngle) / 2).toFixed(2) - 0;
						r.style._hasSelected = !0, this._selected[s][o] = !0, r.style._x = r.style.x, r.style._y = r.style.y, n = this.query(t[s], "selectedOffset"), r.style.x += c.cos(h, !0) * n, r.style.y -= c.sin(h, !0) * n
					} else r.style.x = r.style._x, r.style.y = r.style._y, r.style._hasSelected = !1, this._selected[s][o] = !1;
					this.zr.modShape(r.id, r)
				} else this.shapeList[u].style._hasSelected && this._selectedMode == "single" && (s = f.get(this.shapeList[u], "seriesIndex"), o = f.get(this.shapeList[u], "dataIndex"), this.shapeList[u].style.x = this.shapeList[u].style._x, this.shapeList[u].style.y = this.shapeList[u].style._y, this.shapeList[u].style._hasSelected = !1, this._selected[s][o] = !1, this.zr.modShape(this.shapeList[u].id, this.shapeList[u]));
			this.messageCenter.dispatch(a.EVENT.PIE_SELECTED, e.event, {
				selected: this._selected,
				target: f.get(r, "name")
			}, this.myChart), this.zr.refresh()
		}
	}, l.inherits(p, n), l.inherits(p, t), e("../chart").define("pie", p), p
}), define("_chart", ["require", "echarts/chart/gauge", "echarts/chart/funnel", "echarts/chart/scatter", "echarts/chart/k", "echarts/chart/radar", "echarts/chart/chord", "echarts/chart/force", "echarts/chart/map", "echarts/util/mapData/geoJson/an_hui_geo", "echarts/util/mapData/geoJson/ao_men_geo", "echarts/util/mapData/geoJson/bei_jing_geo", "echarts/util/mapData/geoJson/china_geo", "echarts/util/mapData/geoJson/chong_qing_geo", "echarts/util/mapData/geoJson/fu_jian_geo", "echarts/util/mapData/geoJson/gan_su_geo", "echarts/util/mapData/geoJson/guang_dong_geo", "echarts/util/mapData/geoJson/guang_xi_geo", "echarts/util/mapData/geoJson/gui_zhou_geo", "echarts/util/mapData/geoJson/hai_nan_geo", "echarts/util/mapData/geoJson/hei_long_jiang_geo", "echarts/util/mapData/geoJson/he_bei_geo", "echarts/util/mapData/geoJson/he_nan_geo", "echarts/util/mapData/geoJson/hu_bei_geo", "echarts/util/mapData/geoJson/hu_nan_geo", "echarts/util/mapData/geoJson/jiang_su_geo", "echarts/util/mapData/geoJson/jiang_xi_geo", "echarts/util/mapData/geoJson/ji_lin_geo", "echarts/util/mapData/geoJson/liao_ning_geo", "echarts/util/mapData/geoJson/nei_meng_gu_geo", "echarts/util/mapData/geoJson/ning_xia_geo", "echarts/util/mapData/geoJson/qing_hai_geo", "echarts/util/mapData/geoJson/shang_hai_geo", "echarts/util/mapData/geoJson/shan_dong_geo", "echarts/util/mapData/geoJson/shan_xi_1_geo", "echarts/util/mapData/geoJson/shan_xi_2_geo", "echarts/util/mapData/geoJson/si_chuan_geo", "echarts/util/mapData/geoJson/tai_wan_geo", "echarts/util/mapData/geoJson/tian_jin_geo", "echarts/util/mapData/geoJson/world_geo", "echarts/util/mapData/geoJson/xiang_gang_geo", "echarts/util/mapData/geoJson/xin_jiang_geo", "echarts/util/mapData/geoJson/xi_zang_geo", "echarts/util/mapData/geoJson/yun_nan_geo", "echarts/util/mapData/geoJson/zhe_jiang_geo", "echarts/chart/line", "echarts/chart/bar", "echarts/chart/pie"], function(e) {
	e("echarts/chart/gauge"), e("echarts/chart/funnel"), e("echarts/chart/scatter"), e("echarts/chart/k"), e("echarts/chart/radar"), e("echarts/chart/chord"), e("echarts/chart/force"), e("echarts/chart/map"), e("echarts/util/mapData/geoJson/an_hui_geo"), e("echarts/util/mapData/geoJson/ao_men_geo"), e("echarts/util/mapData/geoJson/bei_jing_geo"), e("echarts/util/mapData/geoJson/china_geo"), e("echarts/util/mapData/geoJson/chong_qing_geo"), e("echarts/util/mapData/geoJson/fu_jian_geo"), e("echarts/util/mapData/geoJson/gan_su_geo"), e("echarts/util/mapData/geoJson/guang_dong_geo"), e("echarts/util/mapData/geoJson/guang_xi_geo"), e("echarts/util/mapData/geoJson/gui_zhou_geo"), e("echarts/util/mapData/geoJson/hai_nan_geo"), e("echarts/util/mapData/geoJson/hei_long_jiang_geo"), e("echarts/util/mapData/geoJson/he_bei_geo"), e("echarts/util/mapData/geoJson/he_nan_geo"), e("echarts/util/mapData/geoJson/hu_bei_geo"), e("echarts/util/mapData/geoJson/hu_nan_geo"), e("echarts/util/mapData/geoJson/jiang_su_geo"), e("echarts/util/mapData/geoJson/jiang_xi_geo"), e("echarts/util/mapData/geoJson/ji_lin_geo"), e("echarts/util/mapData/geoJson/liao_ning_geo"), e("echarts/util/mapData/geoJson/nei_meng_gu_geo"), e("echarts/util/mapData/geoJson/ning_xia_geo"), e("echarts/util/mapData/geoJson/qing_hai_geo"), e("echarts/util/mapData/geoJson/shang_hai_geo"), e("echarts/util/mapData/geoJson/shan_dong_geo"), e("echarts/util/mapData/geoJson/shan_xi_1_geo"), e("echarts/util/mapData/geoJson/shan_xi_2_geo"), e("echarts/util/mapData/geoJson/si_chuan_geo"), e("echarts/util/mapData/geoJson/tai_wan_geo"), e("echarts/util/mapData/geoJson/tian_jin_geo"), e("echarts/util/mapData/geoJson/world_geo"), e("echarts/util/mapData/geoJson/xiang_gang_geo"), e("echarts/util/mapData/geoJson/xin_jiang_geo"), e("echarts/util/mapData/geoJson/xi_zang_geo"), e("echarts/util/mapData/geoJson/yun_nan_geo"), e("echarts/util/mapData/geoJson/zhe_jiang_geo"), e("echarts/chart/line"), e("echarts/chart/bar"), e("echarts/chart/pie")
});