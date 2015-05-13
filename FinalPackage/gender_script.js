google.load('visualization', '1.0', {'packages':['corechart']});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
      	
var techData = new google.visualization.DataTable();

techData.addColumn('string', 'Tech Companies'); // Implicit domain label col.
techData.addColumn('number', 'Women Engineers'); // Implicit series 1 data col.
techData.addColumn({type:'string', role:'style'});
techData.addColumn('number', 'Men Engineers'); // Implicit series 1 data col.
techData.addColumn({type:'string', role:'style'}); // annotation role col.


techData.addRows([
   ['Rent the Runway', 22,'color: #51b2e5', 78,  'color:#154866'],
    ['Venmo', 16,'color:#51b2e5', 84, 'color:#154866'],
    ['Paperless Post', 14,'color:#51b2e5', 86, 'color:#154866'],
    ['Etsy', 13,'color:#51b2e5', 87, 'color:#154866'],
    ['Foursquare', 07,'color:#51b2e5', 93, 'color:#154866'],
    
   ['Apple', 20, 'color:#C0C0C0', 80, 'color:#505050'],
   ['Google', 17,'color:#C0C0C0', 83, 'color:#505050'],
   ['LinkedIn', 17,'color:#C0C0C0', 83, 'color:#505050'],
   ['Facebook', 15,'color:#C0C0C0', 85, 'color:#505050'],
   ['Twitter', 10,'color:#C0C0C0', 90, 'color:#505050']
 
         
]);

var formatter = new google.visualization.NumberFormat({suffix:'%', fractionDigits:0});
formatter.format(techData,1); //Applying this formatter to data in column- index 1
formatter.format(techData,3);

//var secondFormatter = new google.visualization.PatternFormat();
//secondFormatter.format(techData,3);

       // var data = google.visualization.arrayToDataTable(techData);
        data = techData;
        
        // var data = new google.visualization.DataTable();


       	var options = {
       	width: '800',
       	height: '600',
		title: 'From small companies to large, gender diversity is a problem',
		// subtitle: 'Source: https://github.com/triketora/women-in-software-eng',
		isStacked: 'true', 
		fontName: 'Cutive',
		legend: { position: "none" },
		//colors: ['#51b2e5','#154866','#C0C0C0','#505050'],
		
        chartArea:{left:80,top:80, width:"95%",height:"50%"},
    
		hAxis :{
		title: 'Gender Breakdown in NYC Companies vs. Tech Giants',
		titleTextStyle: {fontSize: 12}, 
		slantedText: true,
		slantedTextAngle: 40
		},
		vAxis : {
		title: 'Percent of Employees',
		titleTextStyle: {fontSize: 12} 
		//format: '#%'
		}
		}

        var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_material'));

        chart.draw(data, options);
      }
