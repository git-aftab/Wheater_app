import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Fav_cards from './components/Fav_cards'
import My_location from './components/My_location'
import Forecast from './components/Forecast'
import WheaterDets from './components/WheaterDets'

const App = () => {
  return (
    <>
    <Header/>
    <p className="mt-10 ml-10 text-white text-2xl font-bold">Favourites</p>
    <Fav_cards/>
    <p className="mt-10 ml-10 text-white text-2xl font-bold">My Location</p>
    <My_location/>
    <Forecast/>
    <WheaterDets/>
    </>
  )
}

export default App