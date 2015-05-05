google.load('visualization', '1.0', {
	'packages' : ['corechart']
});
google.setOnLoadCallback(drawChartGenderTech);

var techData = 
([
          ['Tech Companies in NYC', 'Women Engineers', 'Men Engineers'],
          ['Etsy', 19, 130],
          ['Foursquare', 6, 80],
          ['Rent the Runway', 7, 25],
          ['Venmo', 5, 27],
          ['Paperless Post', 4, 24],
          ['The New York Times', 3, 18],
          ['Sailthru', 5, 15],
          ['HowAboutWe', 4, 16],
          ['Flatiron Health', 1, 6]
        ]); 
        
function drawChartGenderTech() {

	var data = google.visualization.arrayToDataTable(techData);

	var options = {
		width : '600',
		height : '600',
		title : 'More women needed in tech',
		subtitle : 'Source: https://github.com/triketora/women-in-software-eng',
		isStacked : true,
		fontName : 'Cutive',
		colors : ['#E770FF', '#9300BF'],

		chartArea : {
			left : 40,
			top : 80,
			width : "100%",
			height : "50%"
		},

		hAxis : {
			title : 'NYC Tech Companies',
			titleTextStyle : {
				fontSize : 12
			},
			slantedText : true,
			slantedTextAngle : 40
		},
		vAxis : {
			title : 'Number of Employees',
			titleTextStyle : {
				fontSize : 12
			},
		}
	}

	var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_material'));

	chart.draw(data, options);
}