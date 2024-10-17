import React from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center">
        {/* Primeira Coluna */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
          <div className="text-left">
            <h5 className="text-lg font-bold mb-4">Menu Principal</h5>
            <ul>
              <li className="mb-2">
                <a href="/" className="transition duration-300 hover:text-gray-300">Home</a>
              </li>
              <li className="mb-2">
                <a href="/pesquisa" className= " transition duration-300 hover:text-gray-300">Linhas de Pesquisa</a>
              </li>
              <li>
                <a href="/projetos" className="transition duration-300 hover:text-gray-300">Projetos</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Segunda Coluna */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <div className="text-left">
            <h5 className="text-lg font-bold mb-4">Redes Sociais</h5>
            <ul>
              <li className="mb-2">
                <a href="https://www.instagram.com/gectam_cnpq/" className="flex items-center transition duration-300 hover:text-gray-300">
                <FaInstagram />
                  @gectam_cnpq
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="flex items-center transition duration-300 hover:text-gray-300">
                <FaRegEnvelope />
                   thais.braga@ufra.edu.br
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gectam_cnpq/" className="flex items-center transition duration-300 hover:text-gray-300"> 
                <FaWhatsapp />   
                (91) 99346-8595
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
