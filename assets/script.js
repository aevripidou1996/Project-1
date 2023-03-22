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
		.then(response => console.log(response))
		.catch(err => console.error(err));
	
};

googleId();
getCityId();
getResterauntListData();