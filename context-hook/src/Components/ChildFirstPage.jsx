import React from 'react'
import GrandChildFirstPage from './GrandChildFirstPage'

function ChildFirstPage() {
  return (
    <div>
        
        <h1>ChildFirstPage</h1>
        <div> <GrandChildFirstPage /> </div>
        
    </div>
  )
}

export default ChildFirstPage