import React from 'react'

const Clock = () => {
  return (
    <div>{new Date().toLocaleString()}</div>
  )
}

export default Clock