function insertionSort(array) {

	for(let i = 1; i < array.length; i++){
		let number = array[i];
		let next = i - 1;

		while(next >= 0 && array[next] > number){
			array[next+1] = array[next];
			next--;
		}
		array[next+1] = number;
	}
	return array;
} 


module.exports = insertionSort;
