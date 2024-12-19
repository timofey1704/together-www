import React from 'react'
import Link from 'next/link'
import Button from '../ui/Button/Button'

const Intro = () => {
  return (
    <div className="px-5">
      <h1 className="text-headertext font-unbounded text-5xl md:text-8xl lg:text-8xl font-semibold px-7 py-4">
        TOGETHER
      </h1>
      <div className="font-velasans px-7 text-xl md:text-3xl lg:text-3xl py-3">
        Создаем мир возможностей вместе
      </div>
      <div className="font-velasans px-7 text-xl md:text-3xl lg:text-3xl py-3">
        Вы когда-нибудь задумывались, что для некоторых людей простой выход на
        улицу может быть непреодолимой проблемой?
      </div>
      <div className="font-velasans px-7 text-xl md:text-3xl lg:text-3xl py-3">
        Пожилые люди и инвалиды сталкиваются с трудностями, о которых
        большинство даже не задумывается. Закройте глаза и представьте, что вам
        нужно сходить в магазин за продуктами, посетить аптеку или поликлинику,
        заполнить документы, не имея для этого возможностей
      </div>
      <div className="flex items-center space-x-4 p-2 md:px-6 md:py-9 md:space-x-9 lg:px-6 lg:py-9 lg:space-x-9">
        <Link
          href="/helper"
          className="px-6 py-2 bg-blue-500 text-white text-sm font-unbounded rounded-full  transition-colors duration-300"
        >
          <Button text="Хочу помогать" />
        </Link>

        <Link
          href="/requester"
          className="px-6 py-2 bg-blue-500 text-white text-sm font-unbounded rounded-full  transition-colors duration-300"
        >
          <Button text="Ищу помощь" />
        </Link>
      </div>
    </div>
  )
}

export default Intro
