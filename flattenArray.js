let array = [1, [2,3], [4], [5, [7,8]]];

function flattenArray(arrayItem) {
	return flattedArray = arrayItem.reduce(function(acc, curr) {
		
		if(Array.isArray(curr)){
			acc = acc.concat(flattenArray(curr));
		} else {
			acc.push(curr);
		}

		return acc;

	}, []);
}

console.log(flattenArray(array));