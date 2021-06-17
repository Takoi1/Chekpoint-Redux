import React from 'react'
import FilterLink from '../containers/FilterLink'

const Nav = () => (
  <div  className='nav'>
    {/* Show: */}
    {' '}
    <FilterLink filter="SHOW_ALL"> My List </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">  UnDone  </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">  Done  </FilterLink>
  </div>
)

export default Nav