console.log("App.js is running!");
const appRoot = document.getElementById("app");

const app = {
	options: ["Show details", "Hide details"],
	status: 1
};

const toggle = () => {
	if (app.status === 1) {
		app.status = 0;
	} else {
		app.status = 1;
	}
	render();
};

const render = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={toggle}>{app.options[app.status]}</button>
			<p>{app.status === 1 ? "Here are some details" : false}</p>
		</div>
	);
	ReactDOM.render(template, appRoot);
};

render();

