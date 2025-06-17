"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center text-center">
            <span className="ml-2 text-3xl font-semibold text-blue-600">
              <Image 
              src="/assets/logo-horizontal.jpg" 
              width={120} 
              height={100} 
              alt="Nome" />
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
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
              href="/comunidade"
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
              href="/contacto"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
            >
              Contacto
            </Link>
          </nav>

          <div className="hidden md:flex flex-row items-center gap-2  ">
            <Link
              href="/Cadastro"
            >
              <Button className="bg-white text-black">
             Login
            </Button>
            </Link>
            <Link
              href="/Cadastro"
            >
             <Button className="bg-white text-black">
              Sign Up
            </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link
            href="/"
          >
            Home
          </Link>
          <Link
            href="/sobre"
          >
            Sobre
          </Link>
          <Link
            href="/comunidade"
            className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Comunidade
          </Link>
          <Link
            href="/agenda"
            className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Agenda
          </Link>
          <Link
            href="/contacto"
            className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contacto
          </Link>
          <div className="md:hidden">
            <Link
              href="/Cadastro"
              className="bg-blue-600 py-2 px-4 text-white  text-sm rounded-md hover:bg-blue-800 hover:duration-300"
            >
              <Button className="bg-white text-black">
             Login
            </Button>
            </Link>
            <Link
              href="/Cadastro"
              className=" py-2 px-4 text-black border border-black  text-sm rounded-md hover:bg-blue-600 hover:duration-300 hover:border-none"
            >
             <Button className="bg-white text-black">
              Sign Up
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
