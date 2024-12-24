'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import mainImg from '../../public/mainImg.png'
import Button from '../components/ui/Button/Button'
import { sendHelperInfo } from '@/lib/sendHelperInfo'

const page = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone_number: '',
  })

  const [selectedInput, setSelectedInput] = useState<'phone' | 'email'>('phone')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await sendHelperInfo(formData)
      setFormData({
        name: '',
        surname: '',
        email: '',
        phone_number: '',
      })
      alert('Запрос успешно отправлен!')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Произошла ошибка при отправке запроса')
    }
  }

  return (
    <>
      <div className="flex flex-col items-center px-4 pt-8">
        <Image src={mainImg} alt="header logo" priority />
        <h1 className="text-headertext font-unbounded text-3xl md:text-5xl lg:text-5xl font-semibold px-7 pt-4">
          TOGETHER
        </h1>
        <h2 className="font-velasans text-xl md:text-2xl lg:text-2xl pt-2">
          Нужна помощь
        </h2>

        <div className="w-full max-w-lg mt-4">
          <div className="flex flex-row gap-4">
            <button
              type="button"
              onClick={() => setSelectedInput('phone')}
              className={`w-full px-4 py-2 rounded-full font-unbounded text-center ${
                selectedInput === 'phone'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              Номер телефона
            </button>
            <button
              type="button"
              onClick={() => setSelectedInput('email')}
              className={`w-full px-4 py-2 rounded-full font-unbounded text-center ${
                selectedInput === 'email'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              Электронная почта
            </button>
          </div>

          <form onSubmit={handleSubmit} className="w-full mt-6">
            <div className="mb-4">
              <label className="block font-unbounded mb-2" htmlFor="name">
                Имя:
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pr-3 pl-3 py-2 border-2 border-blue-500 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900"
                  autoComplete="true"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-unbounded mb-2" htmlFor="surname">
                Фамилия:
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full pr-3 pl-3 py-2 border-2 border-blue-500 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900"
                  autoComplete="true"
                />
              </div>
            </div>

            {selectedInput === 'phone' && (
              <div className="mb-4">
                <label
                  className="block font-unbounded mb-2"
                  htmlFor="phone_number"
                >
                  Номер телефона:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="w-full pr-3 pl-3 py-2 border-2 border-blue-500 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900"
                    autoComplete="true"
                  />
                </div>
              </div>
            )}

            {selectedInput === 'email' && (
              <div className="mb-4">
                <label className="block font-unbounded mb-2" htmlFor="email">
                  Еmail:
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pr-3 pl-3 py-2 border-2 border-blue-500 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900"
                    autoComplete="true"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-center pb-4 pt-2">
              <Button text="Отправить" className="w-1/2" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default page
