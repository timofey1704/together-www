'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Button from '../ui/Button/Button'
import { sendRequestForm } from '@/lib/sendRequestForm'

const LandingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    request: '',
    email: '',
  })

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
      await sendRequestForm(formData)
      setFormData({
        name: '',
        request: '',
        email: '',
      })
      alert('Форма успешно отправлена!')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Произошла ошибка при отправке формы')
    }
  }

  return (
    <div className="md:pl-20 lg:pl-20 px-2 py-10">
      <h2 className="text-headertext font-ttruns text-3xl md:text-4xl lg:text-4xl font-semibold py-4">
        Меняйте мир вместе с нами и станьте частью нашего проекта!
      </h2>
      <div className="font-unbounded font-light text-base md:text-xl lg:text-xl py-5">
        Мы разрабатываем сайт и приложение, создавая мир возможностей.
        Пожалуйста, оставьте свои контакты и мы Вас проинформируем, когда все
        заработает
      </div>
      <div className="flex items-center space-x-4 py-5">
        <Link href="/helper">
          <Button text="Хочу помогать" />
        </Link>

        <Link href="/requester">
          <Button text="Нужна помощь" />
        </Link>
      </div>
      <div className="font-unbounded font-light text-base md:text-xl lg:text-xl pt-5 md:pt-14 lg:pt-14">
        Если у Вас остались вопросы или есть предложения, пожелания, замечания,
        оставьте, пожалуйста, свой комментарий и мы с Вами свяжемся
      </div>
      <form onSubmit={handleSubmit} className="ml-6 md:ml-14 lg:ml-14">
        <div className="mb-4 pt-8">
          <label className="block font-unbounded mb-2" htmlFor="name">
            Имя:
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="pr-3 pl-3 py-2 border-2 border-blue-500 text-black rounded-full w-5/6 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
        </div>
        <div className="mb-4 py-2">
          <label className="block font-unbounded mb-2" htmlFor="request">
            Вопрос:
          </label>
          <div className="relative">
            <textarea
              id="request"
              value={formData.request}
              onChange={handleChange}
              className="pr-3 pl-3 py-2 border-2 border-blue-500 text-black rounded-full w-5/6 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
        </div>
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
              className="pr-3 pl-3 py-2 border-2 border-blue-500 text-black rounded-full w-5/6 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-5/6">
          <Button text="Отправить" />
        </div>
      </form>
    </div>
  )
}

export default LandingForm
