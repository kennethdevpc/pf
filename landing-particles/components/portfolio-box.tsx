'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image, urlDemo, urlGithub, description } = data;
  // Declara el estado para la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Funciones para abrir y cerrar el popup
  const openPopup = (image: string) => setSelectedImage(image);
  const closePopup = () => setSelectedImage(null);

  return (
    <div key={id} className="p-4 border border-teal-50 rounded-xl   ">
      <h3 className="mb-4 text-xl md:min-h-[40px]  min-h-[10px] ">{title}</h3>
      <Image
        src={image}
        alt="Image"
        width={200}
        height={200}
        className="w-full md:w-[200px] rounded-2xl  md:h-32 h-auto self-center"
        onClick={() => openPopup(image)}
      />
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="relative bg-white rounded-md shadow-lg p-4 max-w-[600px]"
            style={{ width: '80%' }}
          >
            <button className="absolute top-2 right-2 text-red-500 text-xl" onClick={closePopup}>
              &times;
            </button>
            {/* <img className="w-full h-48 md:h-auto" src={selectedImage} alt="Popup" /> */}
            <Image
              src={selectedImage}
              alt="Image"
              width={600}
              height={200}
              onClick={() => openPopup(image)}
            />
          </div>
        </div>
      )}
      <p className="text-justify">{description}</p>

      <div className="flex gap-5 mt-5">
        <Link
          href={urlGithub}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
        >
          Github
        </Link>

        <Link
          href={urlDemo}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
        >
          Live demo
        </Link>
      </div>
    </div>
  );
};

export default PortfolioBox;
