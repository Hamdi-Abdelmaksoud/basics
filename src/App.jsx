 import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  function handleSelect(selectedButton){
    //selectedButton => components,jsx,props,state
 
      console.log('hello');
 
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* les attrributs = props */}
            <CoreConcept {...CORE_CONCEPTS[0]}/>{/* shortcut if we using the same names*/}
            <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
            <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
          </ul>
        </section>
<section id='examples'>
  <h2> </h2>
  <menu>
<TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
<TabButton onSelect={()=>handleSelect('JSX')}>JSX</TabButton>
<TabButton onSelect={()=>handleSelect('Props')}>Props</TabButton>
<TabButton onSelect={()=>handleSelect('State')} >State</TabButton>
  </menu>


</section>
      </main>
    </div>
  );
}

export default App;