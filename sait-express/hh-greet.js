const myGreetings = [];
myGreetings[0] = "Hello!";
myGreetings[1] = "Konnichiwa";
myGreetings[2] = "Guten Tag";
myGreetings[3] = "How are you today?";
myGreetings[4] = "Welcome to the site of your dreams!"
	exports.randomGreeting = function () {
		var randNum = Math.floor(Math.random()*myGreetings.length);
		return myGreetings[randNum];
	};