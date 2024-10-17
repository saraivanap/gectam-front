import React from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contato = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Conteúdo principal */}
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        {/* Título com separador */}
        <h2 className="text-3xl font-bold text-center mb-4">Redes Sociais</h2>
        <hr className="border-gray-300 mb-8" />

        {/* Redes Sociais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <div className="text-left">
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
      </main>
    </div>
  );
}

export default Contato;
