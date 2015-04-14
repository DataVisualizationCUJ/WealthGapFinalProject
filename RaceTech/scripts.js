//The following code is taken from http://jsfiddle.net/qy6cn/

google.load("visualization", "1", {
	packages : ["corechart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Test');
	data.addColumn('number', 'Male');
	data.addColumn('number', 'Female');
	data.addRows([['One', 30, 70], ['Two', 60, 140], ['Three', 40, 40], ['Four', 80, 10]]);

	var view = new google.visualization.DataView(data);

	view.setColumns([0, {
		label : 'Male',
		type : 'number',
		calc : function(dt, row) {
			var males = dt.getValue(row, 1);
			var females = dt.getValue(row, 2);
			return {
				v : males / (males + females),
				f : males.toString()
			};
		}
	}, {
		label : 'Female',
		type : 'number',
		calc : function(dt, row) {
			var males = dt.getValue(row, 1);
			var females = dt.getValue(row, 2);
			return {
				v : females / (males + females),
				f : females.toString()
			};
		}
	}]);

	var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	chart.draw(view, {
		vAxis : {
			format : '#.##%'
		},
		isStacked : true
	});
}
