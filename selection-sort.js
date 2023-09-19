function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */

	 let n = array.length;

	 for(let i = 0; i < n-1; i++){
		 let min_num = i;

		 for(let j = i + 1; j < n; j++){
			 if(array[j] < array[min_num]){
				 min_num = j;
			 }

			 let sort = array[min_num];
			 array[min_num] = array[i];
			 array[i] = sort;
		 }
	 }
	
	}
module.exports = selectionSort;
