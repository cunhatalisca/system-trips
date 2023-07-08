import React from 'react'
import Image from 'next/image'

const QuickSearch = () => {
  return (
    <div className='container mx-auto p-5'>
      <div className='flex items-center'>
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className='px-5 font-medium text-grayPrimary whitespace-nowrep'>Pesquisar:</h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex w-full justify-between mt-4">
        <div className="flex flex-col items-center gap-1">
            <Image width={25} height={25} src={'/hotel-icon.png'} alt={'hotel'} />

            <p className="text-sm text-grayPrimary">Hotel</p>
        </div>

        <div className="flex flex-col items-center gap-1">
            <Image width={25} height={25} src={'/farm-icon.png'} alt={'hotel'} />

            <p className="text-sm text-grayPrimary">Fazenda</p>
        </div>

        <div className="flex flex-col items-center gap-1">
            <Image width={25} height={25} src={'/cottage-icon.png'} alt={'hotel'} />

            <p className="text-sm text-grayPrimary">Chalé</p>
        </div>

        <div className="flex flex-col items-center gap-1">
            <Image width={25} height={25} src={'/inn-icon.png'} alt={'hotel'} />

            <p className="text-sm text-grayPrimary">Pousada</p>
        </div>
      </div>
    </div>
  )
}

export default QuickSearch