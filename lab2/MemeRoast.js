const roast = (function() {
	var burns = [
		"💀 bruh moment, ",
		"🤡 clown move, ",
		"📉 not stonks, ",
		"🥴 cringe, ",
		"🪦 oof, "
	];

	return {
		say: function(name) {
			var pick = burns[Math.floor(Math.random() * burns.length)];
			console.log(pick + name + "...");
		}
	}

})()


