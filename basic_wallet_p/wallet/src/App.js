import React, { Component } from 'react';
import axios from 'axios'
import Wallet from './comps/wallet';

function App(){

  const [chain] = [];

  const apiURL = "http://localhost:5000/chain";

  const fetchData = async () => {
      const response = await axios.get(apiURL)

      setBooks(response.data) 
  

  return (
      // returned JSX here
      <div>
      
      <button className="fetch-button" onClick={fetchData}>
        Fetch Data
      </button>
    </div>
    
  ); }
