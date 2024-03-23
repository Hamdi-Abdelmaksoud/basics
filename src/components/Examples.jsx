import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from './TabButton.jsx'

export default function Examples(){
    //NB : only on the top level of the function not nested
    const [selectedTopic, setSelectedTopic] = useState();
    //selectedTopic is a function
    let tabContent = <p>Please select a topic</p>;
    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
  
        </div>
      );
    }
    function handleSelect(selectedButton) {
      //selectedButton => components,jsx,props,state
      setSelectedTopic(selectedButton);
      // console.log(selectedTopic);
  
    }
  return(
    <section id='examples'>
    <h2> </h2>
    <menu>
      <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
      <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
      <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
      <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')} >State</TabButton>
    </menu>
    {tabContent}
  </section>
  )
}