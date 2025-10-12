const praise = (function() {
	var phrases = [
		"🗿 sigma move, ",
		"🔥 based choice, ",
		"✨ 200 IQ play, ",
		"🚀 to the moon, ",
		"🌈 wholesome, "
	];

	return {
		say: function(name) {
			var pick = phrases[Math.floor(Math.random() * phrases.length)];
			console.log(pick + name + "!");
		}
	}

})()


