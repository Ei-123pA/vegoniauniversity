// Start Jquery Area

$(document).ready(function(){
	// Start Header
	  // Start Navbar
	$('.navbuttons').click(function(){
		$(this).toggleClass('crossxs');
	})

	  // End Navbar
	 // End Header

	 // Start Login Box
	 $('#openform').click(function(){
	 	document.getElementById('form-popup').style.display = 'block';
	 });

	 $('#formclose-btn').click(function(){
	 	document.getElementById("form-popup").style.display = 'none';
	 });
	 // End Login Box
});

// End Jquery Area

// Start Javascript Area
	// Start Student Counter Section

	var getcountervalues = document.querySelectorAll('.countervalues');
	// console.log(getcountervalues);

	getcountervalues.forEach(function(getcountervalue){
		getcountervalue.textContent = 0;

		const updatecounter = function(){
			const getcttarget = +getcountervalue.getAttribute('data-target');
			// console.log(getcttarget);
			// console.log(typeof getcttarget);

			const getcontent = +getcountervalue.innerText;
			// console.log(getcontent);

			const incnumber = getcttarget / 100;
			// console.log(incnumber);

			if(getcontent < getcttarget){
				getcountervalue.textContent = getcontent+incnumber;

				setTimeout(updatecounter,50);
			}

		}

		updatecounter();
	})
	// End Student Counter Section

	// Start Rating Section
	 // start google code for chart
	  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar',     8],
          ['Thailand',      2],
          ['Singapore',  4],
          ['Indonesia', 2],
          ['Srilanka',    8]
        ]);

        var options = {
          title: 'International Students',
          // is3D: true,
          // pieHole: 0.4,
          width:550,
          height:400
          
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
	 // end google code for chart
	// End Rating Section

	const getyear = document.getElementById('getyear');
	const getfullyear = new Date().getUTCFullYear();
	getyear.textContent = getfullyear;
// End Javascript Area