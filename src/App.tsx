import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from './assets/powered.svg'
import { GridItem } from "./components/GridItem";

import {levels, calculateIMC} from './helpers/imc';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  
  const handleCalculateButton = () => {
    if(heightField && weightField) {

    } else {
      window.alert("digite todos os campos")
    }
  }
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="logo" width={150} height={100} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
        <h1>Calcule o seu IMC</h1>
        <p>IMC (Índice de Massa Corporal) é uma medida usada para avaliar se uma pessoa está dentro do peso ideal, considerando a altura e o peso. Ele ajuda a identificar possíveis condições de peso inadequado, como baixo peso, sobrepeso ou obesidade.</p>
        <input 
          type="number"
          placeholder="Digite sua altura Ex: 1.5 (em metros)"
          value={heightField > 0 ? heightField: ''}
          onChange={e =>setHeightField(parseFloat(e.target.value.replace(',', '.')))}
        />
        <input 
          type="number"
          placeholder="Digite seu peso Ex: 75.8 (em Kg)"
          value={weightField > 0 ? weightField: ''}
          onChange={e =>setWeightField(parseFloat(e.target.value.replace(',', '.')))}
        />
        <button
          onClick={handleCalculateButton}
        >Calcular</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;