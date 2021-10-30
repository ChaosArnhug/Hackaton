function direction(dest1, dest2) { //dest1 et dest2 sont les deux villes
		
		let body = {
		"locations": [
		dest1,
		dest2
	  ],
	  "options": {
		"allToAll": false
	  }
	};
	body = JSON.stringify(body)
	console.log(body);
	let xhr = new XMLHttpRequest();
		xhr.open('post', 'http://open.mapquestapi.com/directions/v2/routematrix?key=GD6PXRruQPPv1pRXEwPSUomrtyMGDpfe', true)
		xhr.onload = result;
		xhr.send(body);
		function result()
		{
			let distance = JSON.parse(this.responseText);
			console.log(distance.distance[1]);// affiche la distance peut'être utiliser return ?
		}
}