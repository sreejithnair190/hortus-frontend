import { React, Fragment } from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <Fragment>
        <div className='categories-container'>
          <Link className="category plants-category" to='/plants'>Plants</Link>
          <Link className="category plants-category" to='/seeds'>Seeds</Link>
          <Link className="category plants-category" to='/fertilizers'>Fertilizers</Link>
          <Link className="category plants-category" to='/accessories'>Accessories</Link>
        </div>
    </Fragment>
  )
}

export default Categories