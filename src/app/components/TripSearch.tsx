"use client"

import React from 'react'
import Button from '@/components/Button'
import Input from '@/components/input'
import DatePicker from '@/components/DatePicker'
import CurrencyInput from '@/components/CurrencyInput'

const index = () => {
  return (
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" />

        <div className="flex gap-4">
          <DatePicker placeholderText="Data de Ida" onChange={() => {}} className="w-full" />
          <CurrencyInput placeholder="Orçamento" />
        </div>

      <Button>Buscar</Button>
      </div>
    </div>
  )
}

export default index