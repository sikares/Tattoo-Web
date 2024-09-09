import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/Tattoos';
import AppSearch from './components/AppSearch';

function App() {
  const [ selectedTattoo, setSelectedTattoo ] = useState(null)
  const [ searchText, setSearchText ] = useState('')

  function TattooOpenClick(theTattoo) {
    setSelectedTattoo(theTattoo)
  }

  function TattooCloseClick() {
    setSelectedTattoo(null)
  }
  
  const filter = tattoos.filter((tattoo) => {
    return tattoo.text.toLowerCase().includes(searchText.toLowerCase())
  })
  const tattooElement = filter.map((tattoo, index) => {
    return <TattooItem key = {index} tattoo = {tattoo} onTattooClick = {TattooOpenClick} />
  })

  let tattooPost = null;
  if (!!selectedTattoo) {
    tattooPost = <TattooPost tattoo = {selectedTattoo} closeTattooClick = {TattooCloseClick} />
  }

  return (
    <div className="app">
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
            <div className="app-grid">
              {tattooElement}
          </div>
        </div>
      </section>
      {tattooPost}
    </div>
  );
}

export default App;