import React from 'react'
import Image from 'next/image'
import valueImg from '../../../public/valueImg.svg'

const Value = () => {
  return (
    <div className="md:pl-20 lg:pl-20 px-2 py-16">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[400px] order-last md:order-first">
          <Image
            src={valueImg}
            alt="man and woman image"
            className="object-cover"
            fill
            priority
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 px-4 md:px-10 ">
          <h2 className="text-headertext font-unbounded text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 py-4">
            В чём наша ценность?
          </h2>
          <div className="mb-6 md:py-3 lg:py-3">
            <h3 className="font-unbounded text-headertext font-semibold text-lg md:text-xl mb-2 ">
              Для тех, кому нужна помощь:
            </h3>
            <p className="font-unbounded font-light text-base md:text-xl lg:text-xl">
              Мы решаем сложности в выполнении повседневных бытовых дел и
              обычного общения, чтобы вы могли нормально жить и получать
              необходимую поддержку
            </p>
          </div>
          <div className="mb-6 md:py-3 lg:py-3">
            <h3 className="font-unbounded text-lg text-headertext font-semibold md:text-xl mb-2">
              Для родственников нуждающихся:
            </h3>
            <p className="font-unbounded font-light text-base md:text-xl lg:text-xl">
              Если ваши пожилые родные или близкие с инвалидностью нуждаются в
              помощи, наше приложение подберёт волонтёров, которые смогут
              предоставить нужную поддержку. Мы поможем вам обеспечить им заботу
              и внимание, даже если вы сами не можете быть рядом
            </p>
          </div>
          <div className="mb-6 md:py-3 lg:py-3">
            <h3 className="font-unbounded text-lg text-headertext font-semibold md:text-xl mb-2">
              Для тех, кто готов помогать:
            </h3>
            <p className="font-unbounded font-light text-base md:text-xl lg:text-xl">
              Мы адресно соединяем вас с теми, кто действительно нуждается в
              вашей помощи, и вместе создаём мир возможностей для людей с
              ограниченными возможностями. Погружение в социальную активность и
              забота об обществе даёт гораздо больше, чем просто ощущение
              значимости
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Value
