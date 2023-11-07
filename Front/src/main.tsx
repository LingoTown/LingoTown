import react from 'react';
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil';
import AlertDialog from './component/util/alert/AlertDialog.tsx';
import ConfirmDialog from './component/util/confirm/ConfirmDialog.tsx';
import PromptDialog from './component/util/prompt/PromptDialog.tsx';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <AlertDialog>
      <ConfirmDialog>
        <PromptDialog>
          <App />
        </PromptDialog>
      </ConfirmDialog>
    </AlertDialog>
  </RecoilRoot>
)
