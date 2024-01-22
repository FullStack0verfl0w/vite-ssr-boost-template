import entryServer from '@lomray/vite-ssr-boost/node/entry';
import App from './App';
import routes from './router';

export default entryServer(App, routes, {
	abortDelay: 20000,
});