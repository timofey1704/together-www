import React from 'react'
import Link from 'next/link'
import { FaViber } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { FaTelegram } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="mx-auto bg-gray-100 text-black py-8 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">О нас</h3>
            <ul className="text-gray-700">
              <li className="mb-2">
                <Link href="/about-us" className="hover:underline">
                  Информация о компании
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact-us" className="hover:underline">
                  Cвязаться с нами
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Принять участие
            </h3>
            <ul className="text-gray-700">
              <li className="mb-2">
                <Link href="/requester" className="hover:underline">
                  Нужна помощь
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/helper" className="hover:underline">
                  Хочу помогать
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Наши контакты
            </h3>
            <div className="flex space-x-4 text-black">
              <a
                href="tel:+375291281832"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosCall className="h-6 w-6 hover:text-red-400" />
              </a>
              <a
                href="viber://chat?number=%"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaViber className="h-6 w-6 hover:text-red-400" />
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="h-6 w-6 hover:text-red-400" />
              </a>
              <a href="mailto:info.together24@gmail.com">
                <MdEmail className="h-6 w-6 hover:text-red-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-4">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Сайт разработан командой Together.
            Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
