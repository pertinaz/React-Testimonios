import './App.css';
import Weapon from './components/weaponWiki';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>FIND SOME INTERESTING INFORMATION ABOUT WEAPONS</h1>
        <Weapon
          name='AAC Honey Badger'
          cartridge='.300 AAC Blackout'
          image='AAC_Honey_badger'
          manufacturingCountry='United States'
          production='2011'
          details='El Honey Badger fue desarrollado con un receptor superior e inferior M4 estándar, un barril corto con un sistema de choque de gas muy corto y una velocidad rápida de giro de rifling, un gran desmontable convencional silenciador, y un tubo tampón patentado y un material plegable con dos puntas.' />
         <Weapon
          name='Heckler & Koch USP'
          cartridge='9*19mm Parabellum, .357 SIG, .40 S&W, .45 ACP'
          image='HKUSP'
          manufacturingCountry='West Germany'
          production='1993-present'
          details='Una de las características distintivas de la USP es el sistema mecánico de reducción de retroceso. Consiste en un corto resorte adicional ubicado dentro del resorte de retroceso principal en el extremo de la nalga del conjunto de resorte de retroceso. Diseñado principalmente para reducir el desgaste de los componentes de la pistola, el sistema también reduce las fuerzas de retroceso máximas que siente el tirador.' />
         <Weapon
          name='Accuracy International AS50'
          cartridge='.50 BMG'
          image='Ai_as50'
          manufacturingCountry='United Kingdom'
          production='2010'
          details='Este rifle de francotirador permite al tirador atacar objetivos a muy larga distancia, con alta precisión y la capacidad de disparar rápidamente con poco retroceso. El arma es fácil de transportar, duradera en diversas condiciones, tiene una forma ergonómica y es extremadamente cómoda de usar.' />    
      </div>
    </div>
  );
}

export default App;
