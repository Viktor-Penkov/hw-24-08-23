
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import StyleProps from './pages/Style_props';
import DataProps from './pages/Data_props';
import styleProps from './utils/style_config';
import mavka from './utils/mavka_data';
import State from './pages/State';
import s from './components/styles/color_picker.module.css';
import { useState } from 'react';
import HomeWork from './pages/HomeWork';
import infoItStep from './utils/homeWork';
import ListWork from './pages/List_work';
import list_data from './utils/list_data';


function App() {
  list_data();
  const [isDark, setLight]=useState(false)






  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:isDark?"white":"#282c34"}}>
        <div>
        <label className={s.switch}>
  <input type="checkbox" checked={isDark} onChange={()=>{setLight(!isDark)}}/>
  <span className={s.slider}></span>
</label>



        </div>
        <BrowserRouter>
        <Navigation temaNavigation={isDark} />
        <div>
          <Routes>
            <Route path='style-props' element={<StyleProps styleProps={styleProps}/>} />
            <Route path='data-props' element={<DataProps mavka ={mavka} thema={isDark}/>} />
            <Route path='state' element = {<State/>} />
            <Route path='HomeWork' element = {<HomeWork infoItStep={infoItStep}  thema={isDark}/>} />
            <Route path='Work_list'element={<ListWork  />} />
            
            

          </Routes>

        </div>


        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
