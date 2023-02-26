import React from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './features/App';
import './index.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);
