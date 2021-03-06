import React, { useState, } from 'react';
import Slider from 'rc-slider';

import Input from "./components/Input";
import Button from './components/Button';

import 'rc-slider/assets/index.css';

function App() {

  const [montoTotal, setMontoTotal] = useState(5000);
  const [plazo, setPlazo] = useState(3);

  const cuotas = Math.round((montoTotal / plazo) * 100) / 100;

  const handleChangeMontoTotal = (event) => {
    const { value } = event.target;
    setMontoTotal(value);
  }

  const handleChangePlazo = (event) => {
    const { value } = event.target;
    setPlazo(value);
  }

  return (
    <div className="main container mt-5">
      <header className="text-center">
        Simulá tu crédito
      </header>
      <div className="content">
        <div className="row">
          <div className="col">
            <span className="amount-label">MONTO TOTAL</span>
          </div>
          <div className="col text-right">
            <Input
              id="montoTotal"
              name="montoTotal"
              min={5000}
              max={50000}
              type="number" className="amount-border" value={montoTotal} onChange={handleChangeMontoTotal} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <Slider
              min={5000}
              max={50000}
              value={montoTotal}
              onChange={setMontoTotal}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="sub-slider">$ 5.0000</span>
          </div>
          <div className="col text-right">
            <span className="sub-slider">$ 50.0000</span>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <span className="amount-label">Plazo</span>
          </div>
          <div className="col text-right">
            <Input
              id="plazo"
              name="plazo"
              min={3}
              max={24}
              type="number" className="amount-border" value={plazo} onChange={handleChangePlazo} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <Slider
              min={3}
              max={24}
              value={plazo}
              onChange={setPlazo}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="sub-slider">3</span>
          </div>
          <div className="col text-right">
            <span className="sub-slider">24</span>
          </div>
        </div>
        <footer className="mt-4">
          <div className="credit-description">
            <div className="row">
              <div className="col-sm-7">
                CUOTAS FIJAS POR MES
              </div>
              <div className="col-sm-5 text-right">
                <span className="amount-big">
                  $ {cuotas}
                </span>
              </div>
            </div>
          </div>
          <Button className="btn-credit">OBTENÉ CRÉDITO</Button>
          <Button className="btn-details">VER DETALLES <br /> DE CUOTAS</Button>
        </footer>
      </div>
    </div>
  );
}

export default App;
