import React, { useState } from 'react'
import Head from 'next/head'

const banks = [
  {name:"GARANTi BANKASI",account:"TR18  0006  2001  1520  0006  2985  70"},
  {name:"iS BANKASI",account:"TR75  0006  4000  0014  3001  6422  69"},
  {name:"AKBANK",account:"TR85  0004  6001  0788  8000  1671  81"},
  {name:"YAPI KREDi BANKASI",account:"TR88  0006  7010  0000  0095  7594  36"},
  {name:"FiNANSBANK",account:"TR91  0011  1000  0000  0058  1183  60"},
  {name:"HALKBANK",account:"TR13  0001  2009  2560  0010  2604  17"},
  {name:"ZiRAAT BANKASI",account:"TR13  0001  0000  5070  3293  9850  01"},
  {name:"VAKIFBANK",account:"TR64  0001  5001  5800  7305  1855  78"},
  {name:"TEB",account:"TR64  0003  2000  0000  0025  9863  30"},
]


export default function Home() {

  const copyToClipboard =(value)=>{
    const tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  return (
    <div>
      <Head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
      </Head>
      <div className='p-6'>
      <h1 className='font-bold text-center text-lg'>Banka Hesap Bilgileri</h1>
        <div className='flex flex-col 4 py-4'>
          {banks.map((bank,i)=>(<div key={i}  className='mb-4 flex flex-col' onClick={()=> copyToClipboard(bank.account)}>
            <div className='my-4 text-center'><span className='px-4 py-2 border-2 border-gray-600 rounded-xl bg-gray-100'>{bank.name}</span></div>
            <span className='p-2 border-2 border-gray-600 rounded-md' >{bank.account}</span>
          </div>))}
        </div>
      </div>

    </div>
  )
}
