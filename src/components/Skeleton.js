import React from 'react'
import './Skeleton.css'
const Skeleton = () => {
    return (
        <div className="skeleton__wrapper">
            <div className="skeleton__img skeleton"></div>
            <div className="skeleton__text skeleton"></div>
            <div className="skeleton__text skeleton"></div>
            <div className="skeleton__text skeleton"></div>
            
        </div>
    )
}

export default Skeleton;