'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;
  const [ providers, setProviders ] = useState(null);
  const [toggleDropdown, setToggleDrpodown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    setProviders();
  }, [])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg' 
          alt='Promptly logo'
          width={30}
          height={30}
          className='object-contain'
          />
          <p className='logo_text'>Promptly</p>
      </Link>


      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt'
            className='black_btn'>
              Create Post
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                scr='/assets/images/logo.svg'
                alt='Profile picture'
                width={37}
                height={37}
                className='rounded-full'            
             />
            </Link>
          </div>
        ): (
          <>
          {providers &&
            Object.values(providers).map((providers) => (
              <button type='button'
              key={providers.name}
              onClick={() => signIn(provider.id)}
              className='black_btn'>
                Sign In
              </button>
            ))}
          </>
        )}
      </div>

       {/* Mobile Navigation */}
       <div className='sm:hidden flex relative'>
         {isUserLoggedIn ? (
           <div className='flex'>
            <Image
             scr='/assets/images/logo.svg'
             alt='Profile picture'
             width={37}
             height={37}
             className='rounded-full' 
             onClick={() => setToggleDrpodown((prev) => !prev)}           
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                href='/profile'
                className='dropdown_link'
                onClick={() => setToggleDrpodown(false)}>
                  My Profile
                </Link>
                <Link
                href='/create-prompt'
                className='dropdown_link'
                onClick={() => setToggleDrpodown(false)}>
                  Create Prompt
                </Link>
                <button 
                  type='button'
                  className='mt-5 w-full black_btn'
                  onClick={() => {
                    setToggleDrpodown(false);
                    signOut();
                  }}>
                    Sign Out
                  </button>
              </div>
            )}
           </div>
         ): (
          <>
          {providers &&
            Object.values(providers).map((providers) => (
              <button type='button'
              key={providers.name}
              onClick={() => signIn(provider.id)}
              className='black_btn'>
                Sign In
              </button>
            ))}
          </>
        )}
       </div>

    </nav>
  )
}

export default Nav
