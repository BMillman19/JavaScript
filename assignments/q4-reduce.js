function reduce (xs, fn, seed) {
	var memo = seed;
	for (var i = !memo ? 1 : 0; i < xs.length; i++) {
		memo = fn(!memo ? xs[0] : memo, xs[i]);
	}
	return memo;
}