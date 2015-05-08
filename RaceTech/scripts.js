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
	data.addColumn('number', 'Native Hawaiian');
	data.addColumn('number', 'American Indian');
	data.addColumn('number', 'Multi-Racial');
	data.addColumn('number', 'Other');
	data.addColumn('number', 'Undeclared');
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
			var NativeHawaiian = dt.getValue(row, 5);
			var AmericanIndian = dt.getValue(row, 6);
			var MultiRacial = dt.getValue(row, 7);
			var Other = dt.getValue(row, 8);
			var Undeclared = dt.getValue(row, 9);
			return {
				v : Black / (White + Asian + Black + Hispanic + NativeHawaiian + AmericanIndian + MultiRacial + Other + Undeclared),
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
			var NativeHawaiian = dt.getValue(row, 5);
			var AmericanIndian = dt.getValue(row, 6);
			var MultiRacial = dt.getValue(row, 7);
			var Other = dt.getValue(row, 8);
			var Undeclared = dt.getValue(row, 9);
			return {
				v : Hispanic / (White + Asian + Black + Hispanic + NativeHawaiian + AmericanIndian + MultiRacial + Other + Undeclared),
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
			var NativeHawaiian = dt.getValue(row, 5);
			var AmericanIndian = dt.getValue(row, 6);
			var MultiRacial = dt.getValue(row, 7);
			var Other = dt.getValue(row, 8);
			var Undeclared = dt.getValue(row, 9);
			return {
				v : White / (White + Asian + Black + Hispanic + NativeHawaiian + AmericanIndian + MultiRacial + Other + Undeclared),
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
			var NativeHawaiian = dt.getValue(row, 5);
			var AmericanIndian = dt.getValue(row, 6);
			var MultiRacial = dt.getValue(row, 7);
			var Other = dt.getValue(row, 8);
			var Undeclared = dt.getValue(row, 9);
			return {
				v : Asian / (White + Asian + Black + Hispanic + NativeHawaiian + AmericanIndian + MultiRacial + Other + Undeclared),
				f : Asian.toString()
			};
		}
	}, {
		label : 'NativeHawaiian',
		type : 'number',
		calc : function(dt, row) {
			var White = dt.getValue(row, 1);
			var Asian = dt.getValue(row, 2);
			var Black = dt.getValue(row, 3);
			var Hispanic = dt.getValue(row, 4);
			var NativeHawaiian = dt.getValue(row, 5);
			var AmericanIndian = dt.getValue(row, 6);
			var MultiRacial = dt.getValue(row, 7);
			var Other = dt.getValue(row, 8);
			var Undeclared = dt.getValue(row, 9);
			return {
				v : NativeHawaiian / (White + Asian + Black + Hispanic + NativeHawaiian + AmericanIndian + MultiRacial + Other + Undeclared),
				f : NativeHawaiian.toString()
			};
		}
	}, {
		label : 'AmericanIndian',
		type : 'number',
		calc : function(dt, row) {
			var White = dt.getValue(row, 1);
			var Asian = dt.getValue(row, 2);
			var Black = dt.getValue(row, 3);
			var Hispanic = dt.getValue(row, 4);
			var NativeHawaiian = dt.getValue(row, 5);
			var AmericanIndian = dt.getValue(row, 6);
			var MultiRacial = dt.getValue(row, 7);
			var Other = dt.getValue(row, 8);
			var Undeclared = dt.getValue(row, 9);
			return {
				v : AmericanIndian / (White + Asian + Black + Hispanic + NativeHawaiian + AmericanIndian + MultiRacial + Other + Undeclared),
				f : AmericanIndian.toString()
			};
		}
	}, {
		label : 'MultiRacial',
		type : 'number',
		calc : function(dt, row) {
			var White = dt.getValue(row, 1);
			var Asian = dt.getValue(row, 2);
			var Black = dt.getValue(row, 3);
			var Hispanic = dt.getValue(row, 4);
			var NativeHawaiian = dt.getValue(row, 5);
			var AmericanIndian = dt.getValue(row, 6);
			var MultiRacial = dt.getValue(row, 7);
			var Other = dt.getValue(row, 8);
			var Undeclared = dt.getValue(row, 9);
			return {
				v : MultiRacial / (White + Asian + Black + Hispanic + NativeHawaiian + AmericanIndian + MultiRacial + Other + Undeclared),
				f : MultiRacial.toString()
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
			var NativeHawaiian = dt.getValue(row, 5);
			var AmericanIndian = dt.getValue(row, 6);
			var MultiRacial = dt.getValue(row, 7);
			var Other = dt.getValue(row, 8);
			var Undeclared = dt.getValue(row, 9);
			return {
				v : Other / (White + Asian + Black + Hispanic + NativeHawaiian + AmericanIndian + MultiRacial + Other + Undeclared),
				f : Other.toString()
			};
		}
	}, {
		label : 'Undeclared',
		type : 'number',
		calc : function(dt, row) {
			var White = dt.getValue(row, 1);
			var Asian = dt.getValue(row, 2);
			var Black = dt.getValue(row, 3);
			var Hispanic = dt.getValue(row, 4);
			var NativeHawaiian = dt.getValue(row, 5);
			var AmericanIndian = dt.getValue(row, 6);
			var MultiRacial = dt.getValue(row, 7);
			var Other = dt.getValue(row, 8);
			var Undeclared = dt.getValue(row, 9);
			return {
				v : Undeclared / (White + Asian + Black + Hispanic + NativeHawaiian + AmericanIndian + MultiRacial + Other + Undeclared),
				f : Undeclared.toString()
			};
		}
			
//		label : 'Female',
//		type : 'number',
//		calc : function(dt, row) {
//			var males = dt.getValue(row, 1);
//			var females = dt.getValue(row, 2);
//			return {
//				v : females / (males + females),
//				f : females.toString()
	}]);

	var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	chart.draw(view, {
		title : 'White and Asian Populations Make Up Majority of Major Tech Companies',
		annotations: {
    		alwaysOutside: true
		},
		width : 900,
		height : 500,
		fontName : 'Cutive',
		colors : ['#154866','#9300BF','#C0C0C0','#51b2e5','#E770FF','#E8E8E8','#505050','#ab5787','#4186aa'],
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
