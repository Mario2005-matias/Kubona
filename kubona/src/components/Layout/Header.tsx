"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter()
  
  const irParaPaginaLogin = () => {
    router.push('/login')
  }

  const irParaPaginaSignUp = () => {
    router.push('/signUp')
  }

  return (
    <header id="header" className="bg-white shadow-md fixed w-full  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="block">
            <Image
              src="/assets/logo-horizontal.jpg"
              width={120}
              height={50}
              alt="Kubona empresa"
              className="object-contain"
              loading="eager"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden min-[888px]:flex space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 "
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
            >
              Sobre
            </Link>
            <Link
              href="/registrar"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
            >
              Registar salão
            </Link>
            <Link
              href="/agenda"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
            >
              Agenda
            </Link>
            <Link
              href="/contato"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
            >
              Contacto
            </Link>
          </nav>

          <div className="hidden min-[888px]:flex flex-row items-center gap-2  ">
              <Button onClick={irParaPaginaLogin} className="bg-[#1E293B] hover:bg-[#1E293B] text-white hover:duration-300">
                Login
              </Button>
              <Button onClick={irParaPaginaSignUp} className="border border-[#1E293B] bg-white text-[#1E293B] hover:bg-[#1E293B] hover:duration-300 hover:text-white">
                Sign Up
              </Button>
          </div>

          {/* Mobile menu button */}
          <div className="min-[888px]:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 "
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              <div className="w-6 flex flex-col items-center">
                <span
                  className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "transform rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-gray-600 my-1 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  } transition-opacity duration-300 ease-in-out`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`min-[888px]:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 flex flex-col  pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link
            href="/"
            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 "
          >
            Home
          </Link>
          <Link
            href="/sobre"
            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
          >
            Sobre
          </Link>
          <Link
            href="/registrar"
            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
          >
            Registar salão
          </Link>
          <Link
            href="/agenda"
            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
          >
            Agenda
          </Link>
          <Link
            href="/contato"
            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
          >
            Contacto
          </Link>
          <div className="min-[888px]:hidden flex flex-row gap-2">
              <Button onClick={irParaPaginaLogin} className="bg-[#1E293B] hover:bg-[#1E293B] text-white hover:duration-300">
                Login
              </Button>
              <Button onClick={irParaPaginaSignUp} className="border border-[#1E293B] bg-white text-[#1E293B] hover:bg-[#1E293B] hover:duration-300 hover:text-white">
                Sign Up
              </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
