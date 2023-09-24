import React from 'react'
import Category from "./Category/Category";
import Prices from "./Prices/Prices";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import './sidebar.css'

function Sidebar() {
  return (
    <div>
        <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category />
        <Prices />
        <Colors />
      </section>
    </div>
  )
}

export default Sidebar