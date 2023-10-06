function selectionSort(array) {
	
	for(let i = 0; i < array.length - 1; i++){
		let smallest = i;

		for(let next = i + 1; next < array.length; next++){
			if(array[next] < array[smallest]){
				smallest = next;
			}
		}

		if(smallest != i){
			let temp = array[i];
			array[i] = array[smallest];
			array[smallest] = temp;
		}
	}
	return array;
}


module.exports = selectionSort;
