;(function() {
    var config = {
        asciiThreshold: 450,
        lastLetterRule: {
            enabled: true,
            targetLetter: 'a' 
        }
    }

    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

	// Метод 1: класичний з умови на першу літеру (j/J)
	for (let name of names) {
		if (["j", "J"].includes(name.charAt(0))) {
			roast.say(name)
		} else {
			praise.say(name)
		}
	}

    let explain = `Метод 2: Обчислюємо суму ASCII-кодів літер імені.
	Якщо score >= threshold — мемна похвала, інакше — мемний роаст.`
	console.log(explain)

	function asciiScore(str) {
		var sum = 0;
		for (let ch of str) {
			sum += ch.charCodeAt(0);
		}
		return sum;
	}

    let threshold = config.asciiThreshold; 
	for (let name of names) {
		let score = asciiScore(name.toLowerCase());
		let sayPraise = score >= threshold;
		sayPraise ? praise.say(name) : roast.say(name);
	}

    if (config.lastLetterRule.enabled) {
        let note = `Метод 3: Якщо ім'я закінчується на '${config.lastLetterRule.targetLetter}', даємо похвалу, інакше — роаст.`
        console.log(note)
        for (let name of names) {
            let endsWith = name.toLowerCase().endsWith(config.lastLetterRule.targetLetter.toLowerCase());
            endsWith ? praise.say(name) : roast.say(name);
        }
    }
})()


