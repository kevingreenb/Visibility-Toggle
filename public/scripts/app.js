"use strict";

console.log("App.js is running!");
var appRoot = document.getElementById("app");

var app = {
	options: ["Show details", "Hide details"],
	status: 1
};

var toggle = function toggle() {
	if (app.status === 1) {
		app.status = 0;
	} else {
		app.status = 1;
	}
	render();
};

var render = function render() {
	var template = React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			"Visibility Toggle"
		),
		React.createElement(
			"button",
			{ onClick: toggle },
			app.options[app.status]
		),
		React.createElement(
			"p",
			null,
			app.status === 1 ? "Here are some details" : false
		)
	);
	ReactDOM.render(template, appRoot);
};

render();
