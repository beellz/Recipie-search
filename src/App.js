import React from 'react';





function App() {
const appid ="4dd8354a"
const appkey = "c44a825f9296d024c2e3d8b9088f45d3"
  // const appid = "0cb40fd4" ;

// const appkey = "36bb35ecba78b9d0473a7473a79d61a9";
// const url =`https://api.edamam.com/search?q=chicken&app_id=${appid}&app_key=${appkey}`

const getRecipie = async () => {

  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${appid}&app_key=${appkey}`);
  const data = await response.json();
  console.log(data);

}

getRecipie();

  return (
    <div className="App">
      <form className="seacrh-Form">
        <input className="Search-bar" type="text" />
        <button type="submit">Search</button>
      </form>
      
   
    </div>
  );
}

export default App;
