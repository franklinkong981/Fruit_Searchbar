const fruits = [
	'Apple', 
	'Apricot', 
	'Avocado', 
	'Banana', 
	'Bilberry', 
	'Blackberry', 
	'Blackcurrant', 
	'Blueberry', 
	'Boysenberry', 
	'Currant', 
	'Cherry', 
	'Coconut', 
	'Cranberry', 
	'Cucumber', 
	'Custard apple', 
	'Damson', 
	'Date', 
	'Dragonfruit', 
	'Durian', 
	'Elderberry', 
	'Feijoa', 
	'Fig', 
	'Gooseberry', 
	'Grape', 
	'Raisin', 
	'Grapefruit', 
	'Guava', 
	'Honeyberry', 
	'Huckleberry', 
	'Jabuticaba', 
	'Jackfruit', 
	'Jambul', 
	'Juniper berry', 
	'Kiwifruit', 
	'Kumquat', 
	'Lemon', 
	'Lime', 
	'Loquat', 
	'Longan', 
	'Lychee', 
	'Mango', 
	'Mangosteen',
	'Marionberry', 
	'Melon', 
	'Cantaloupe', 
	'Honeydew', 
	'Watermelon', 
	'Miracle fruit', 
	'Mulberry', 
	'Nectarine', 
	'Nance', 
	'Olive', 
	'Orange', 
	'Clementine',
	'Mandarine', 
	'Tangerine', 
	'Papaya', 
	'Passionfruit', 
	'Peach', 
	'Pear', 
	'Persimmon', 
	'Plantain', 
	'Plum', 
	'Pineapple', 
	'Pomegranate', 
	'Pomelo', 
	'Quince', 
	'Raspberry', 
	'Salmonberry', 
	'Rambutan', 
	'Redcurrant', 
	'Salak', 
	'Satsuma', 
	'Soursop', 
	'Star fruit', 
	'Strawberry', 
	'Tamarillo', 
	'Tamarind', 
	'Yuzu'
];

const fruitSearchBar = document.getElementById("fruit-search-bar");
fruitSearchBar.addEventListener("keyup", (event) => {
	if (event.key !== "Shift") { 
		filterAndDisplay(event.target.value.toLowerCase());
	}
}); //filter and display dropdown suggestions each time value in fruit search bar changes.

function filterAndDisplay(searchBarValue) {
	const matchingSuggestions = findMatchingSuggestions(searchBarValue);
	console.log(matchingSuggestions);
}

function findMatchingSuggestions(searchBarValue) { //filter fruits array to return all entries that contain current value in the search bar.
	return fruits.filter((value) => value.toLowerCase().includes(searchBarValue));
}



