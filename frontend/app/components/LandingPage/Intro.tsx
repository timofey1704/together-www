import React from 'react'
import Link from 'next/link'
import Button from '../ui/Button/Button'

const Intro = () => {
  return (
    <div className="md:pl-20 lg:pl-20 px-2 py-10">
      <h1 className="text-headertext font-unbounded text-5xl md:text-8xl lg:text-8xl font-semibold px-7 py-4">
        TOGETHER
      </h1>
      <div className="font-velasans px-7 text-xl md:text-2xl lg:text-2xl py-3">
        Создаем мир возможностей вместе
      </div>
      <div className="font-velasans px-7 text-xl md:text-2xl lg:text-2xl py-3">
        Вы когда-нибудь задумывались, что для некоторых людей простой выход на
        улицу может быть непреодолимой проблемой?
      </div>
      <div className="font-velasans px-7 text-xl md:text-2xl lg:text-2xl py-3">
        Пожилые люди и инвалиды сталкиваются с трудностями, о которых
        большинство даже не задумывается. Закройте глаза и представьте, что вам
        нужно сходить в магазин за продуктами, посетить аптеку или поликлинику,
        заполнить документы, не имея для этого возможностей
      </div>
      <div className="flex items-center space-x-4 p-2 pl-6 md:px-6 md:py-9 md:space-x-9 lg:px-6 lg:py-9 lg:space-x-9">
        <Link href="/helper">
          <Button text="Хочу помогать" />
        </Link>

        <Link href="/requester">
          <Button text="Ищу помощь" />
        </Link>
      </div>
    </div>
  )
}

export default Intro
