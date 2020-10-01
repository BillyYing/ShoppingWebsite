function createBarChart(ctx, names, datas) {
	// var ctx = document.getElementById('criVulnChart').getContext('2d');
	// var names = [[${data.names}]];
	// var datas = [[${data.values}]];
	var myChart = new Chart(ctx, {
		type : 'bar',
		data : {
			labels : names,
			datasets : [ {
				backgroundColor : "#ea464d",
				borderColor : "#ea464d",
				data : datas,
				borderWidth : 0
			} ]
		},
		options : {
			barPercentage : 0.9,
			responsive : true,
			legend : {
				display : false
			},
			hover : {
				animationDuration : 0
			},
			
			animation : {
				duration : 1,
				onComplete : function() {
					var chartInstance = this.chart, ctx = chartInstance.ctx;
					ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';
					this.data.datasets.forEach(function(dataset, i) {
						var meta = chartInstance.controller.getDatasetMeta(i);
						meta.data.forEach(function(bar, index) {
							var data = dataset.data[index];
							ctx.fillText(data, bar._model.x, bar._model.y - 5);
						});
					});
				}
			}
		}
	});
}