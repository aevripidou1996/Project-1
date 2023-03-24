// API for reteraunt locator
function googleId(){
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b8b5fc1570msh5dd81e1d22999bep1f3016jsn2862ba039444',
			'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
		}
	};
	
	fetch('https://the-fork-the-spoon.p.rapidapi.com/locations/v2/auto-complete?text=milan', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
};

function getCityId(){
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b8b5fc1570msh5dd81e1d22999bep1f3016jsn2862ba039444',
			'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
		}
	};
	
	fetch('https://the-fork-the-spoon.p.rapidapi.com/locations/v2/list?google_place_id=ChIJu46S-ZZhLxMROG5lkwZ3D7k&geo_ref=false&geo_text=Roma%2C%20Metropolitan%20City%20of%20Rome%2C%20Italy&geo_type=locality', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
};


function getResterauntListData(){
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b8b5fc1570msh5dd81e1d22999bep1f3016jsn2862ba039444',
			'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
		}
	};
	
	fetch('https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=348156&pageSize=10&pageNumber=1', options)
		.then(response => response.json())
		.then(data => {
			test(data);
		})
		.catch(err => console.error(err));
	
};

googleId();
getCityId();
console.log(getResterauntListData());

function test(array) {
	console.log(array);
	const body = document.querySelector("body");
	for (let i=0; i<array.data.length; i++){
		const text = document.createElement("p");
		text.textContent = array.data[i].name;
		body.appendChild(text);
		console.log("restaurant" + i,array.data[i].geo.latitude, array.data[i].geo.longitude)
		// display more than only the name of the restaurant
		console.log("restaurant" + i,array.data[i].address_components, array.data[i].address_components)


	}
}


var resterauntNames = [ "Uovodiseppia Milano", " Ristorante Rubacuori", "The Pure Cafe", 'A Buon Rendere', 'South Garage Bistrot', 'Ristorante Mezzo'  ]




