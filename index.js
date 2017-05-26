const express = require('express');
const app = express();

// setup template
const path = require('path');
const ect = require('ect');
const viewDir = path.resolve(__dirname, 'templates');
const renderer = ect({
	watch: true,
	root: viewDir,
	ext: '.ect'
});

app.set('view engine', 'ect');
app.engine('ect', renderer.render);
app.set('views', viewDir);

// static file handler
app.use('/node_modules', express.static(path.resolve(__dirname, 'node_modules')));
app.use('/semantic', express.static(path.resolve(__dirname, 'semantic')));
app.use('/css', express.static(path.resolve(__dirname, 'css')));
app.use('/js', express.static(path.resolve(__dirname, 'js')));
app.use('/img', express.static(path.resolve(__dirname, 'img')));

app.use((req, res, next) => {
	next();
});

app.get('/', (req, res, next) => {
	res.render('index');
})

app.listen(3000, () => console.log('Listen at :3000'));
