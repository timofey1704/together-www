import React from 'react'
import Image from 'next/image'
import descImg from '../../../public/descImg.svg'

const Description = () => {
  return (
    <div className="md:pl-20 lg:pl-20 px-2 py-10">
      <div>
        <h2 className="text-headertext font-unbounded text-3xl md:text-4xl lg:text-4xl font-semibold px-7 py-4">
          Наш сервис - это нить связывающая тех, кто нуждается в помощи, и тех,
          кто готов помочь
        </h2>

        <div className="flex flex-col md:flex-row lg:flex-row ">
          <div className="px-10 font-unbounded font-light text-lg md:text-xl lg:text-xl py-5 md:w-5/6 lg:w-5/6 mx-auto">
            <p className="font-unbounded text-headertext font-semibold text-xl md:text-2xl lg:text-2xl py-1 md:py-5">
              Как это работает:
            </p>
            <li className="py-1 md:py-5 text-base md:text-xl lg:text-xl">
              Приложение подбирает волонтёров в радиусе от вас, чтобы помощь
              всегда была рядом
            </li>
            <li className="py-1 md:py-5 text-base md:text-xl lg:text-xl">
              Мы тщательно проверяем волонтёров и обеспечиваем безопасность
              взаимодействия
            </li>
            <li className="py-1 md:py-5 text-base md:text-xl lg:text-xl">
              Когда вам нужна помощь — будь то доставка продуктов, или
              сопровождение в медучреждения — вы сможете быстро найти надёжного
              помощника
            </li>
            <li className="py-1 md:py-5 text-base md:text-xl lg:text-xl">
              Мы поддерживаем волонтёров, делая процесс оказания помощи простым,
              адресным и безопасным
            </li>
          </div>
          <div className="relative w-full min-h-[300px] -ml-3 md:ml-0 my-0 md:my-20 lg:my-20">
            <Image
              src={descImg}
              alt="granny image"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
