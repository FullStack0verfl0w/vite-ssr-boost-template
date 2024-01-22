import entryClient from '@lomray/vite-ssr-boost/browser/entry';
import App from './App.tsx'
import routes from './router';

void entryClient(App, routes, {});