import React from 'react'
import logoNav from '../assets/images/Logo_navbar_white1.svg'
import Image from 'next/image'
import HamburgerIcon from '../assets/icons/hamburger.svg'
import Link from 'next/link'
// bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 fixed w-full z-10
const Nav = () => {
  return (
    <header className='py-1 px-14 w-full bg-white sticky top-0 border-solid z-10 bg-opacity-95 backdrop-filter backdrop-blur-lg'>
      <nav className='flex justify-between items-center leading-6  text-slate-700 dark:text-slate-200 font-medium text-sm antialiased'>
        <Link href={'/'}>
          <Image src={logoNav} height={42} alt='Logo' />
        </Link>
        <div className='flex space-x-8 justify-center items-center'>
          <Link href={'/shop'} className='max-md:hidden'>Sklep</Link>
          <Link href={'/about'} className='max-md:hidden'>O nas</Link>
          <Link href={'/contact'} className='max-md:hidden'>Kontakt</Link>
          <button title='Przedmioty w koszyku' className='pr-8 border-r-2'>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill='none'
              viewBox="0 0 24 24"
            >
              <path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
              <text x="50" y="60" fontSize="24" fill="white" textAnchor="middle">
                1
              </text>
            </svg>
          </button>
          <button className='text-primary rounded-md p-2 block max-md:hidden hover:text-primary/80 '>Moje konto</button>
          <button className='block md:hidden w-[24px] h-[24px]'>
            <Image width={24} height={24} alt='menu' src={HamburgerIcon} />
          </button>
        </div>

      </nav>
    </header>
  )
}

export default Nav