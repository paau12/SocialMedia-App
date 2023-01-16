import React from 'react'
import './TrendCart.css'
import {TrendData} from '../../Data/TrendData.js'

const TrendCart = () => {
  return (
    <div className="TrendCart">
        <h3>Trends for you</h3>
        {TrendData.map((trend)=>{
            return(
                <div className='trend'>
                    <span>#{trend.name}</span>
                    <span>{trend.shares} shares </span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCart