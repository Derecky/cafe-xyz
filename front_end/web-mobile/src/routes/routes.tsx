import { Route, BrowserRouter } from 'react-router-dom';
import { Checkout } from '../pages/Checkout';
import { Home } from '../pages/Home';
import { QRCode } from '../pages/QRCode';
import { Success } from '../pages/Success';

export function Routes() {
  return (
    <BrowserRouter>
      <Route component={QRCode} path='/' exact />
      <Route component={Home} path='/cardapio' exact />
      <Route component={Checkout} path='/checkout' exact />
      <Route component={Success} path='/success' exact />
    </BrowserRouter>
  );
}