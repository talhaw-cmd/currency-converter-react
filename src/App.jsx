
import React, { useEffect, useState } from 'react'
import data from './data'

const App = () => {
  const [inp, setinp] = useState("")
  const [from, setfrom] = useState("USD")
  const [to, setto] = useState("PKR")
  let rates = data
  let fromObj = rates.find(c => c.code == from)
  let toObj = rates.find(c => c.code == to)

  let finalresult = (inp / fromObj.rate) * toObj.rate

  return (
    <>
      <h1 className='text-center mt-10'><i className='text-3xl font-bold '>NEOEXCHANGE</i><br /><span className='text-gray-500 text-lg'> Exchange Rates</span></h1>

      <div className=' mt-2 px-10 py-14 border-1 border-gray-300 bg-white min-w-100 flex flex-col justify-center items-between gap-6 rounded-xl'>
        <div className='flex justify-center items-center'>
          <input
            type="number"
            inputMode='decimal'
            pattern='[0-9]*'
            className='font-semibold w-full border-b-2 border-gray-100 text-zinc-900 outline-0 py-2 focus:border-gray-500 transition-all '
            placeholder='Enter amount . . .'
            value={inp}
            onChange={(e) => (setinp(e.target.value))}
          />
          <h3 className='ml-[-20px] text-2xl font-bold text-zinc-500'>
            {fromObj.symbol}
          </h3>
        </div>
        <div className='flex flex-col justify-center gap-4'>
          <div className='flex flex-col'>
            <div className='flex justify-between items-center px-2'>
            <h3 className='font-normal text-gray-400'>
              from
            </h3>
            <img src={fromObj.flag} className='h-8' alt="" />
            </div>
            <select
              value={from}
              onChange={(e) => (setfrom(e.target.value))}
              className='text-gray-800 font-bold w-full bg-gray-100 border-gray-200 py-3 px-2 outline-0 border-2 rounded-lg ' name="" id="">
              {
                rates && rates.map((c, index) => {
                  return (
                    <option value={c.code} key={c.code}
                    >
                      {c.code}</option>
                  )
                })
              }
            </select>
          </div>
          {/* <div className='flex justify-center items-center text-black'>
            to
          </div> */}
          <div className='flex flex-col'>
            <div className='flex justify-between items-center px-2'>
            <h3 className='font-normal text-gray-400'>
              to
            </h3>
            <img src={toObj.flag} className='h-8' alt="" />
            </div>
            <select
              value={to}
              onChange={(e) => { setto(e.target.value) }}
              className='text-gray-900 bg-gray-100 font-bold w-full py-3 px-2 rounded-lg outline-0 border-2 border-gray-200' name="" id="">
              {rates.map((c, index) => {
                return (
                  <option value={c.code} key={c.code}>{c.code}</option>
                )
              })
              }
            </select>
          </div>
        </div>

        <div className='flex justify-between p-4 border-2 border-dashed border-gray-200 rounded-xl'>

          <h1 className='text-gray-900'><b>{from}:</b> <span>{inp || 0}</span><span className='ml-1'>{fromObj.symbol}</span></h1>

          <h1 className='text-gray-900'><b>{to}:</b> <span className=''>{finalresult.toFixed(2)}</span><span className='ml-1'>{toObj.symbol}</span></h1>
          
        </div>
      </div>

    </>
  )
}

export default App
