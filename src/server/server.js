import express from 'express';
import ReactDOM from'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './index-template';


const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App())),
  );
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});