function filter (xs, condition) {
	var result = [];
	xs.forEach(function(entry){
		if (condition(entry)) {
			result.push(entry);
		}
	});
	return result;
}
