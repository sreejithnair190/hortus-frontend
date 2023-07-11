import { React, Fragment } from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <Fragment>
        <div className='categories-container'>
          <Link className="category plants-category" to='/plants'>Plants</Link>
          <Link className="category plants-category" to='/'>Seeds</Link>
          <Link className="category plants-category" to='/'>Soils</Link>
          <Link className="category plants-category" to='/'>Flowers</Link>
          <Link className="category plants-category" to='/'>Fertilizers</Link>
        </div>
    </Fragment>
  )
}

export default Categories