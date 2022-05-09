import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); // gives back [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters , setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldstring = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldstring);
  };

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'/>
      <CardList monsters={filteredMonsters}/>
    </div>
  )
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => response.json())
  //   .then((users) => 
  //     this.setState(
  //       () => {
  //         return {monsters: users}
  //       }
  //     )
  //   );
  // }

  // onSearchChange = (event) => {
  //   const searchField = event.target.value.toLocaleLowerCase();
  //   this.setState(
  //     () => {
  //       return { searchField };
  //   })
  // }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

    // const filteredMonsters = monsters.filter((monster) => {
    //   return monster.name.toLocaleLowerCase().includes(searchField);
    // });

//     return (
     
//     );
//   }
// }

export default App;
