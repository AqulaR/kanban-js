const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const { faker } = require('@faker-js/faker/locale/ru');
const app = express();
const server = http.createServer(app);
const fs = require('fs');

let data = require('./views/data.json');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.disable("x-powered-by");

app.use((err, req, res, next) => {
	logger.error(err.stack);
	res.status(500).send("Вы сломали сервер!");
});

app.use((err, req, res, next) => {
	if (error instanceof ForbiddenError) {
		return res.status(403).send({
			status: "forbidden",
			message: error.message,
		});
	}
});

app.set('view engine', 'pug')

app.use(express.static("views"));

app.use('/dashboard', function (request, res) {
	res.render('dashboard', {
		data:data,
	})
})

console.log("server is running");
server.listen(3000)
