import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FiMenu } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'

import { IconButton, Logo, SearchField } from '../'

export function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false)

  const toggleMenu = () => setMenuOpened((x) => !x)

  return (
    <nav className="relative z-40 flex items-center justify-between text-[#D9D9D9] text-lg max-w-7xl mx-auto py-10 px-5">
      <div>
        <Logo />
      </div>

      <div className="fixed z-50 xl:hidden top-11 right-5">
        <IconButton
          Icon={menuOpened ? RxCross1 : FiMenu}
          onClick={toggleMenu}
          className="block my-auto child:w-12 child:h-12"
        />
      </div>

      <div
        className={`${
          menuOpened ? 'block' : 'hidden'
        } fixed right-0 top-0 z-40 w-full max-w-sm h-screen p-10 bg-[#292F4E] text-center xl:flex xl:items-start xl:static xl:w-auto xl:max-w-none xl:h-auto xl:p-0 xl:bg-transparent xl:text-start`}
      >
        <ul className="block mt-12 direct-child:mb-10 [&_a]:px-4 xl:flex xl:items-center xl:justify-start xl:mt-0 xl:direct-child:mr-10 xl:child:inline-block">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/rutas">Rutas</Link>
          </li>
          <li>
            <Link to="/frontend">Frontend</Link>
          </li>
          <li>
            <Link to="/backend">Backend</Link>
          </li>
          <li>
            <Link to="/otros-recursos">Otros recursos</Link>
          </li>
        </ul>

        <div className="direct-child:inline-block direct-child:mr-2 last:direct-child:mr-0">
          <SearchField />
        </div>
      </div>
    </nav>
  )
}
