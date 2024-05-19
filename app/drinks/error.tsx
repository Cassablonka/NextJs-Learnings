'use client'
const error = ({error}:any) => {    
  return (
    <>
      <h1 className="text-2xl text-red-600">Error : {error.message}</h1>
    </>
  )
}

export default error
