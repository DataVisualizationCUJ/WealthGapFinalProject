//The following code is taken from http://jsfiddle.net/qy6cn/

google.load("visualization", "1", {
	packages : ["corechart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Company');
	data.addColumn('number', 'White');
	data.addColumn('number', 'Asian');
	data.addColumn('number', 'Black');
	data.addColumn('number', 'Hispanic');
	data.addColumn('number', 'Other');
	//data.addColumn({type:'string', role:'annotation'}); // annotationText col.
	
	data.addRows([
	['Apple*', 53900, 14700, 6860, 10780, 11760], 
	['eBay*', 21106, 8304, 2422, 1730, 692], 
	['Facebook', 2526, 1411, 45, 141, 140], 
	['Google', 16524, 7891, 483, 798, 863], 
	['LinkedIn', 1859, 1172, 59, 134, 95], 
	['Twitter', 1760, 970, 49, 68, 63], 
	['Yahoo', 3308, 2257, 138, 313, 122]]);

	var view = new google.visualization.DataView(data);

	view.setColumns([0, {
		label : 'Black',
		type : 'number',
		calc : function(dt, row) {
			var White = dt.getValue(row, 1);
			var Asian = dt.getValue(row, 2);
			var Black = dt.getValue(row, 3);
			var Hispanic = dt.getValue(row, 4);
			var Other = dt.getValue(row, 5);
			return {
				v : Black / (White + Asian + Black + Hispanic + Other),
				f : Black.toString()
			};
		}
	}, {
		label : 'Hispanic',
		type : 'number',
		calc : function(dt, row) {
			var White = dt.getValue(row, 1);
			var Asian = dt.getValue(row, 2);
			var Black = dt.getValue(row, 3);
			var Hispanic = dt.getValue(row, 4);
			var Other = dt.getValue(row, 5);
			return {
				v : Hispanic / (White + Asian + Black + Hispanic + Other),
				f : Hispanic.toString()
			};
		}
	}, {
		label : 'White',
		type : 'number',
		calc : function(dt, row) {
			var White = dt.getValue(row, 1);
			var Asian = dt.getValue(row, 2);
			var Black = dt.getValue(row, 3);
			var Hispanic = dt.getValue(row, 4);
			var Other = dt.getValue(row, 5);
			return {
				v : White / (White + Asian + Black + Hispanic + Other),
				f : White.toString()
			};
		}
	}, {
		label : 'Asian',
		type : 'number',
		calc : function(dt, row) {
			var White = dt.getValue(row, 1);
			var Asian = dt.getValue(row, 2);
			var Black = dt.getValue(row, 3);
			var Hispanic = dt.getValue(row, 4);
			var Other = dt.getValue(row, 5);
			return {
				v : Asian / (White + Asian + Black + Hispanic + Other),
				f : Asian.toString()
			};
		}
	}, {
		label : 'Other',
		type : 'number',
		calc : function(dt, row) {
			var White = dt.getValue(row, 1);
			var Asian = dt.getValue(row, 2);
			var Black = dt.getValue(row, 3);
			var Hispanic = dt.getValue(row, 4);
			var Other = dt.getValue(row, 5);
			return {
				v : Other / (White + Asian + Black + Hispanic + Other),
				f : Other.toString()
			};
		}
	}]);
			
//		label : 'Female',
//		type : 'number',
//		calc : function(dt, row) {
//			var males = dt.getValue(row, 1);
//			var females = dt.getValue(row, 2);
//			return {
//				v : females / (males + females),
//				f : females.toString()

	var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	chart.draw(view, {
		title : 'White and Asian Populations Make Up Majority of Major Tech Companies',
		annotations: {
    		alwaysOutside: true
		},
		width : 900,
		height : 500,
		fontName : 'Cutive',
		colors : ['#154866','#9300BF','#C0C0C0','#51b2e5','#E770FF'],
		hAxis :{
			title: 'Company'
		},
		vAxis : {
			title: 'Employee Percentage',
			format : '#.##%'
		},
		isStacked : true
	});
}
//colors : ['#154866','#9300BF','#C0C0C0','#51b2e5','#E770FF','#E8E8E8','#505050','#ab5787','#4186aa'],
