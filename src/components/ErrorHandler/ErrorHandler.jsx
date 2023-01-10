import React from 'react'

function ErrorHandler({error}) {
  return (
    <p className="text-red-600 font-medium">{error}</p>
  )
}

export default ErrorHandler