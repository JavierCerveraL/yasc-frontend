import React from 'react';
import logoYASC from '../public/logoYASC.png';
import Image from 'next/image';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { CgMenuGridR } from 'react-icons/cg';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="shadow-md ">
      <div className="">
        <section class=" mx-auto">
          <nav class="flex  bg-lime-100 text-stone-800 w-screen ">
            <div class="px-5  py-2 flex w-full items-center ">
              <h3></h3>
              <Link class="text-3xl font-bold font-heading" href="#">
                <Image
                  width={42}
                  height={100}
                  class="h-9 relative right"
                  src="/../public/logoYASC.png"
                  alt="logo"
                />
              </Link>

              <h3 className="ml-2 font-medium relative righ  ">YASC PORTAL</h3>
            </div>

            <Link
              class=" flex mr-6 items-center border-lime-500 text-lime-800 phone "
              href="#"
            >
              <BsFillTelephoneInboundFill />
            </Link>
            <Link class="navbar-burger self-center  text-xl " href="#">
              <CgMenuGridR />
            </Link>

            <div class=" p-2 z-50  ">
              <div class=" inline-block text-left dropdown   ">
                <span class="rounded-md  z-50 ">
                  <button
                    class="z-50  inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-stone-700 transition duration-150 ease-in-out"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-controls="headlessui-menu-items-117"
                  >
                    <svg
                      class="w-5 h-5 ml-2 -mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </span>
                <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                  <div
                    class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md outline-none"
                    aria-labelledby="headlessui-menu-button-1"
                    id="headlessui-menu-items-117"
                    role="menu"
                  >
                    <div class="px-4 py-3">
                      <p class="text-sm leading-5">Signed in as</p>
                      <p class="text-sm font-medium leading-5 text-stone-900 truncate">
                        user@Yasc.com
                      </p>
                    </div>
                    <div class="py-1">
                      <Link
                        href="javascript:void(0)"
                        tabindex="1"
                        class="text-stone-700 hover:text-lime-900 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem"
                      >
                        Support
                      </Link>
                      <span
                        role="menuitem"
                        tabindex="1"
                        class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-stone-700 hover:text-lime-900 "
                        aria-disabled="true"
                      >
                        Settings
                      </span>
                      <Link
                        href="javascript:void(0)"
                        tabindex="2"
                        class="text-stone-700 hover:text-lime-900 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem"
                      >
                        Schedule
                      </Link>
                    </div>
                    <div class="py-1">
                      <Link
                        href="javascript:void(0)"
                        tabindex="3"
                        class="text-stone-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:text-lime-900"
                        role="menuitem"
                      >
                        Sign out
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
}

export default Navbar;
