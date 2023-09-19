function binarySearch(array, searchTerm) {

	let left = 0;
	let right = array.length - 1;

	while(left <= right){
		
		let middle = Math.floor((right + left) /2);

		if(array[middle] === searchTerm){
			return middle;

		} else if(array[middle] > searchTerm){
			right = middle - 1;

		} else {
			left = middle + 1;
		
		}
	}

}

module.exports = binarySearch;
