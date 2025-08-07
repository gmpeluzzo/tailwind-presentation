import React from "react";
import Image from "next/image";
import { Layout } from "../components/Layout";

const HomePage: React.FC = () => (
  <Layout>
    <h2 className="text-2xl font-semibold mb-4">
      Bem-vindo ao Tema Escuro/Claro!
    </h2>
    <p className="mb-4">
      Este é um exemplo de como implementar temas com Tailwind.
    </p>
    <p className="mb-16">Use o botão no topo para alternar o tema.</p>
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          Product X
        </h2>
        <p className="text-gray-600 mt-2">Brief product description.</p>
        <button className="mt-4 dark:bg-gray-500 bg-blue-500 text-white px-4 py-2 rounded">
          Buy
        </button>
      </div>
    </div>
  </Layout>
);

export default HomePage;
