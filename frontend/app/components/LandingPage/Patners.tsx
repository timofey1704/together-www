import React from 'react'
import Image from 'next/image'
import hutkiPartner from '../../../public/hutkiPartner.svg'
import podariPartner from '../../../public/podariPartner.svg'
import SVCPartner from '../../../public/SVCPartner.svg'

const Patners = () => {
  return (
    <div className="md:pl-20 lg:pl-20 px-2 py-10">
      <h2 className="text-headertext font-ttruns text-3xl md:text-4xl lg:text-4xl font-semibold py-4">
        Наши партнеры:
      </h2>
      <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 justify-start items-center relative">
        <div className="relative w-[120px] h-[60px] md:w-[300px] md:h-[150px] lg:w-[400px] lg:h-[200px]">
          <Image
            src={podariPartner}
            alt="podari partner"
            className="object-contain"
            fill
            priority
          />
        </div>

        <div className="relative w-[120px] h-[60px] md:w-[300px] md:h-[150px] lg:w-[400px] lg:h-[200px]">
          <Image
            src={SVCPartner}
            alt="svc partner"
            className="object-contain"
            fill
            priority
          />
        </div>
        <div className="relative w-[120px] h-[60px] md:w-[300px] md:h-[150px] lg:w-[400px] lg:h-[200px]">
          <Image
            src={hutkiPartner}
            alt="hutki partner"
            className="object-contain"
            fill
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Patners
