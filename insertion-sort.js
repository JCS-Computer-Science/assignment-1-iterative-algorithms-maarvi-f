function insertionSort(array) {

		for(let i = 1; i < array.length; i++){
			let j = i - 1;

			while((j >= 0) && (j < i)){
				array[j + 1] = array[j];
		
			}
			array[j + 1] = array[i];
		}

		return array;

}

module.exports = insertionSort;
