//. task--> amazon img & all ko click krne pr 1st page open hona (with page header.js, subheader.js, card.js copmo)
// . -----> subheader me shirt & pant ko click krne pr shirt & pant compo open hona
// -------------------------------------------------------------------------------------------------------------------------------- 
//1. ctrl+c to stop server & install nmp i react-router-dom than check,it show on package.json than open server with npm start
// --->>>>> import router with new version {BrowserRouter, Routes, Route} from 'react-router-dom'
// 2. make router ------>>>>>
// "/"-->1st page--> ye hame direct show krega brouser me
// "/any_name"-->this is route -->browser k is link k sath "/any-name" add krne pr iska content show hoga 
// 3. <Link> --> kisi bhi btn pr lga skte hai jisse hm is btn ko click krne pr ek se dusre page me chale jaye
// -->>>>(go header.js(amazon img) & subheader.js(all))
// 4. shirt/pant me click krne ke bad bhi shirt ke content k sarh sath Header & Subheader.js compo bhi rahe-----
// ---->>>>>home.js se waps header.js, subheader.js, card.js ko app.js me import krann h
// ---->>>> Make Common Compo to  CONSTANT----------------

import './App.css';
// import Home from './components/Home'
import Header from './components/Header'
import Subheader from './components/Subheader';
import Card from './components/Card'
import Shirt from './components/subheaderOption/Shirt'
import Pant from './components/subheaderOption/Pant'

import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  let task = "i am best";
  let name ="sushma";
  
  return (
    <div className="App">

      {/* 2. make router----------------- */}
      <BrowserRouter>
        {/* 4. MAKE COMPO TO CONSTANT-------------------- */}
        <Header data={{task, name}}/>
        <Subheader />

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Card />} />
          <Route path="/card" element={<Card />} />
          <Route path="/shirt" element={<Shirt />} />
          <Route path="/pant" element={<Pant />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}
export default App;