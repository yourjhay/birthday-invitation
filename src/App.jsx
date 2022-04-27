import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import background from './assets/images/3629542.jpg';
import seven from './assets/images/seven.png';
import border from './assets/images/border3.png';
import "./assets/fairy.scss"
import Sparkle from 'react-sparkle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen text-center mx-auto" style={{background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${background})`, backgroundSize:'cover'}}>
      <div className='h-screen'>
      <div className="relative text-center container mx-auto  flex justify-center">
      <div className='container absolute top-0 -left-10'> </div>
      <Sparkle fadeOutSpeed={20} flicker={true} flickerSpeed={'slower'} minSize={10}
  maxSize={20} />
        <img src={seven} className="mb-2 md:mb-5 mt-10 md:mt-24 w-40 h-60 md:w-72 md:h-96"/>
      </div>
       <p className="text-2xl md:text-4xl font-bold name text-pink-500 animate-pulse">JOIN US TO CELEBRATE</p>
       <p className="mx-5 text-5xl md:text-8xl font-thin mt-5 name glow">Ellarhaine Charm's Birthday</p>
       <p className="mx-5 mt-15 md:mt-20 text-5xl md:text-6xl font-thin mt-5 name glow">May 14 2022 | 02:00 PM</p>
       <p className="mx-5 mt-10 text-2xl md:text-5xl font-bold mt-5 name glow">Phase 6 Camarin Caloocan</p>
       <p className="mx-5 mt-10 text-2xl md:text-5xl font-bold mt-5 name glow">CATCH THE FAIRY!</p>
      
       <label className="fairy modal-button"  htmlFor="my-modal" >
          <div className="wings"></div>
          <div className="glowf">
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
          </div>
        </label>
      </div>
      <input type="checkbox" id="my-modal" className="modal-toggle"/>
      <div className="modal text-white">
        <div className="modal-box relative font-semibold w-11/12 max-w-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <Sparkle fadeOutSpeed={20} flicker={true} flickerSpeed={'normal'} minSize={5}
  maxSize={10} />
          <div className="flex flex-col md:flex-row justify-between md:px-20">
            <div>
              <h3 className="font-bold text-lg">Seven Bills 💵</h3>
              <p className="name text-2xl">Marielle Lalaine</p>
              <p className="name text-2xl">Judith</p>
              <p className="name text-2xl">Angelica Jean</p>
              <p className="name text-2xl">Bryan James</p>
              <p className="name text-2xl">Ate Lyn</p>
              <p className="name text-2xl">Jielo</p>
              <p className="name text-2xl">Lester John</p>
            </div>
            <div>
              <h3 className="font-bold mt-10 md:mt-0 text-lg">Seven Candles 🕯︎</h3>
              <p className="name text-2xl">Mama Janet</p>
              <p className="name text-2xl">Tita Jessa</p>
              <p className="name text-2xl">Hanna Jane</p>
              <p className="name text-2xl">Jhealyn</p>
              <p className="name text-2xl">Alexia</p>
              <p className="name text-2xl">Angielyn</p>
              <p className="name text-2xl">Grace Anne</p>
            </div>
            <div>
              <h3 className="font-bold mt-10 md:mt-0  text-lg">Seven Dance 🎵</h3>
              <p className="name text-2xl">Rey Jhon</p>
              <p className="name text-2xl">Ethan</p>
              <p className="name text-2xl">Rigel</p>
              <p className="name text-2xl">Khervy</p>
              <p className="name text-2xl">Jared</p>
              <p className="name text-2xl">Xander</p>
              <p className="name text-2xl">Dwayne</p>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn bg-purple-600">Yay!</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
