import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import headerLogo from '../../../public/headerLogo.svg'
import Button from '../ui/Button/Button'

const Header = () => {
  return (
    <header className="flex items-center justify-center md:justify-between w-full px-4 md:px-8 lg:px-36 bg-white">
      <div className="relative flex items-center">
        <Link href="/" className="relative">
          <Image
            src={headerLogo}
            alt="header logo"
            className="aspect-square"
            priority
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a
          href="mailto:info.together24@gmail.com"
          className="text-base lg:text-xl hover:text-headertext font-unbounded"
        >
          info.together24@gmail.com
        </a>
        <a
          href="tel:+375291281832"
          className="text-base lg:text-xl hover:text-headertext font-unbounded"
        >
          +375291281832
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Link href="/helper">
          <Button text="Хочу помогать" />
        </Link>

        <Link href="/requester">
          <Button text="Нужна помощь" />
        </Link>
      </div>
    </header>
  )
}

export default Header
