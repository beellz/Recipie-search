import React, { useEffect , useState} from "react" ;
import Recipie from "./recipie";
import "./App.css";

// Main function app
function App() {
const appid ="4dd8354a"
const appkey = "c44a825f9296d024c2e3d8b9088f45d3"

// using states
const[recipies , setRecipies] = useState([]);
const [search , setSearch] = useState("");
const [query , setQuery] = useState("chicken")

// main Url
const url =`https://api.edamam.com/search?q=${query}&app_id=${appid}&app_key=${appkey}`

// using from usestates
const getRecipie = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.hits);
  setRecipies(data.hits)
}
useEffect(() => {getRecipie();} , [query]);

const updateSearch = e => {
  setSearch(e.target.value);
  console.log(e.target.value);
}
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
}


// return all

  return (
    <div className="App">
      <form onSubmit={getSearch} className="seacrh-form">
        <input className="Search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="Search-button" type="submit">Search</button>
      </form>
      <div className="recipie">
        {recipies.map(recipe => (
        <Recipie 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients} />
      ))}
      </div>
    </div>
  );
}

export default App;
// exported to App