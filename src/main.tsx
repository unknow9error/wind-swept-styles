import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { StyleProvider } from '../lib/main.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StyleProvider>
        <App />
    </StyleProvider>
);
