
import express from 'express';
import routes from './source/routes/route.js';

const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';


app.use(express.json());
app.use(express.urlencoded(
	{
  		extended: true
	}
));


routes(app);

app.listen(PORT, HOST, function () {
  console.log(`Server started on http://${HOST}:${PORT}`);
  module.exports = app;
});
