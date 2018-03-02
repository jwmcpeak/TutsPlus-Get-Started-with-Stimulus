import {Application} from 'stimulus';
import {definitionsFromContext} from 'stimulus/webpack-helpers';

const app = Application.start();
const context = require.context('./controllers', true, /\.js$/);

app.load(definitionsFromContext(context));