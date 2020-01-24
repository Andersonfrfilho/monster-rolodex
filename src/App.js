import React, { useState, useEffect } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setMonsters(users);
        setFilterMonsters(users);
      });
  }, []);//eslint-disable-line
  useEffect(() => {
    const filterMonstersAux = !searchField
      ? monsters
      : monsters.filter(monster =>
          monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
        );
    setFilterMonsters(filterMonstersAux);
  }, [searchField]);//eslint-disable-line
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        placeholder="search monster"
        handleChange={text => {
          setSearchField(text.target.value);
        }}
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
}

export default App;
