*/
I used a column chart because I feel it best displays the ranking of social media sites being used by a certain percentage of adults
My Username on GitHub is TomDavisColumbia - https://github.com/TomDavisColumbia/SPRING

This is a chart I would use if I wanted to briefly coorelate these numbers within my article on socail media.

/*


var chartTextStyle = { 
'color': '#FF99FF', // Changed my color twice since I figured out how to actually do it
'fontName': "Helvetica",
'fontSize': 21, // lowered my font size from 40 - it was too large
'bold': false,  // unneccessary to make it bold
'italic': true // italics 

}; 


// Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        // Add a Chart that displays your data
        // Add Rows and Columns
        var data = new google.visualization.DataTable();
        // I want tell Aptana that my social media sites are platforms
        // I want each bar to indicate that it resembles percentage of adults using Social Media
        data.addColumn('string', 'Platforms');
        data.addColumn('number', '% of Adults');
        // Didn't add percentage sign because the lable beneath the numbers describes that it's percent of adults
        data.addRows([
        // Below I want to now show my social media sites
        // Along with the social media sites - I want the percentage to portray adults using the site
        // Once I added my percentages, I closed the categories so that I can indicate the style
          ['Twitter', 23],
          ['Instagram', 26],
          ['Pinterest', 28],
          ['LinkedIn', 28],
          ['FB', 56]
        ]); // here are my 5 social media sites

        // Set chart options
     var options = {
        title: '% of Adults on Social Media',
        width: 900,
        height: 763,
        hAxis: {
          title: 'Percentage of Adults',
          minValue: 0
        },
        vAxis: {
          title: 'Platforms' // this is what I labled my hAxis
        } 
      };
      
      options.hAxis.textStyle = chartTextStyle;
      console.log(options.height)
     
                     
 // Here is where I will begin to style my chart
 // I want the color pink
  
          
       options.hAxis.chart         
               
        // Per Dona Wong, I made my chart begin with zero             
        options.hAxis.minValue = 0; // as per Dona Wong
  
  /*      
               var data = google.visualization.arrayToDataTable([
         ['Twitter', '% of Adults', { role: 'style' }, { role: 'annotation' } ],
         ['Instagram', 8.94, '#b87333', 'Cu' ],
         ['Pinterest', 10.49, 'silver', 'Ag' ],
         ['LinkedIn', 19.30, 'gold', 'Au' ],
         ['FB', 21.45, 'color: #e5e4e2', 'Pt' ]
      ]);
        
        */
        
        
        
        
       
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }