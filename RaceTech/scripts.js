//The following code is taken from http://jsfiddle.net/qy6cn/

google.load("visualization", "1", {
	packages : ["corechart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Test');
	data.addColumn('number', 'White');
	data.addColumn('number', 'Asian');
	data.addColumn('number', 'Black');
	data.addColumn('number', 'Hispanic');
	data.addColumn('number', 'Native Hawaiian');
	data.addColumn('number', 'American Indian');
	data.addColumn('number', 'Multi-Racial');
	data.addColumn('number', 'Other');
	data.addColumn('number', 'Undeclared');
	data.addRows([['Apple', 55, 15, 7, 11, 0, 0, 2, 1, 9], ['eBay', 61, 24, 7, 5, 0, 0, 1, 1, 0], ['Facebook', 2526, 1411, 45, 141, 13, 5, 122, 0, 0], ['Google', 16524, 7891, 483, 798, 64, 48, 751, 0, 0], ['LinkedIn', 1859, 1172, 59, 134, 11, 3, 81, 0, 0], ['Twitter', 1760, 970, 49, 68, 13, 3, 47, 0, 0], ['Yahoo', 3308, 2257, 138, 313, 12, 15, 95, 0, 0]]);

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
