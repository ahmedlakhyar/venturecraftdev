import React from 'react'

const InputFields = () => {
  return (
    <>
          <div className="flex md:flex-row flex-col gap-8 w-full">
              <input className="input" placeholder="First" type="text" />
              <input className="input" placeholder="Last" type="text" />
          </div>
          <div className="flex md:flex-row flex-col gap-8 w-full">
              <input className="input" placeholder="Email" type="text" />
              <input className="input" placeholder="Number" type="text" />
          </div>
          <div className="flex md:flex-row flex-col gap-8 w-full">
              <input className="input" placeholder="Company" type="text" />
              <input className="input" placeholder="Title" type="text" />
          </div>
    </>
  )
}

export default InputFields;