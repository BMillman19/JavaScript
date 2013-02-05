function map (xs, fn) {
	var result = [];
	for (var i = 0; i < xs.length; i++) {
		result[i] = fn(xs[i]);
	}
	return result;
}
