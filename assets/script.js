const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

bulmaCarousel.attach('#post_images', {
    slidesToScroll:1,
    slidesToShow: 1,
    loop:true
})

// API for reteraunt locator
function googleId(input){
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b8b5fc1570msh5dd81e1d22999bep1f3016jsn2862ba039444',
			'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
		}
	};
	
	return fetch(`https://the-fork-the-spoon.p.rapidapi.com/locations/v2/auto-complete?text=${input}`, options)
		.then(response => response.json())
		.catch(err => console.error(err));
};

function getCityId(placeId, geoText){
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b8b5fc1570msh5dd81e1d22999bep1f3016jsn2862ba039444',
			'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
		}
	};
	
	return fetch(`https://the-fork-the-spoon.p.rapidapi.com/locations/v2/list?google_place_id=${placeId}&geo_ref=false&geo_text=${geoText}&geo_type=locality`, options)
		.then(response => response.json())
		.catch(err => console.error(err));
};


function getResterauntListData(cityId){
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b8b5fc1570msh5dd81e1d22999bep1f3016jsn2862ba039444',
			'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
		}
	};
	
	return fetch(`https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=${cityId}&pageSize=10&pageNumber=1`, options)
		.then(response => response.json())
		.then(data => {
			displayRestaurant(data);
		})
		.catch(err => console.error(err));
	
};

function displayRestaurant(array) {
	console.log(array);
	const body = document.querySelector("body");
	for (let i=0; i<array.data.length; i++){
		const text = document.createElement("div");
		const restaurantName = document.createElement("div")
		restaurantName.classList.add("resNameContainer")
		restaurantName.innerHTML = array.data[i].name
		const restaurantAddress = document.createElement("div")
		restaurantAddress.classList.add("resAddressContainer")
		restaurantAddress.innerHTML = `${array.data[i].address.street}, ${array.data[i].address.locality}`
		text.appendChild(restaurantName)
		text.appendChild(restaurantAddress)
		text.classList.add("restaurant")

		document.getElementById("search-results").appendChild(text)
	}
}

function addSearchHistory(input) {
	const searchHistory = localStorage.getItem("searchHistory")
	if (searchHistory !== null) {
		const newHistory = searchHistory + "," + input
		localStorage.setItem("searchHistory", newHistory)
	} else {
		localStorage.setItem("searchHistory", input)
	}
}

document.getElementById("search-form").onsubmit = (event) => {
	event.preventDefault();
	const input = document.getElementById("search").value
	addSearchHistory(input)
	googleId(input)
		.then(response => {
			const place = response.data.geolocation[0];
			return getCityId(place.id.id, place.name.text)
		})
		.then(response => {
			const cityId = response.id_city
			return getResterauntListData(cityId)
		})
}