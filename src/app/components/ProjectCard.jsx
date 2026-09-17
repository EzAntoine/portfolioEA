import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EyeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function ProjectCard({
  title,
  description,
  tecnologies,
  imgUrl,
  images,
  gitUrl,
  siteUrl,
}) {
  const maxLength = 150; // Establece la longitud máxima del texto.
  const [showMore, setShowMore] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const closeButtonRef = useRef(null);
  const previewImages = images?.length ? images : imgUrl ? [imgUrl] : [];
  const isPreviewOpen = activeImage !== null;
  const truncatedDescription = description.slice(0, maxLength);

  useEffect(() => {
    if (!isPreviewOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveImage(null);
      if (event.key === "ArrowRight") {
        setActiveImage((index) => (index + 1) % previewImages.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveImage((index) => (index - 1 + previewImages.length) % previewImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [isPreviewOpen, previewImages.length]);

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: imgUrl ? `url(${imgUrl})` : undefined,
          backgroundSize: "cover",
          backgroundPositionY: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {images && (
          <div className="flex h-full items-center justify-center gap-2 overflow-hidden rounded-t-xl bg-[#f8fafc] p-2">
            {images.map((image, index) => (
              <Image
                key={image}
                src={image}
                alt={`${title}: captura ${index + 1}`}
                width={385}
                height={833}
                className="h-full min-w-0 flex-1 object-contain"
              />
            ))}
          </div>
        )}
        {(gitUrl || siteUrl || previewImages.length > 0) && (
          <div className="overlay absolute left-0 top-0 flex h-full w-full items-center justify-center gap-2 rounded-t-xl bg-[#181818]/60 md:hidden md:group-hover:flex md:group-focus-within:flex md:group-hover:bg-[#181818]/80">
            {gitUrl ? (
              <Link
                href={gitUrl}
                aria-label={`Ver código de ${title}`}
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
              </Link>
            ) : null}
            {previewImages.length > 0 && (
              <button
                type="button"
                onClick={() => setActiveImage(0)}
                aria-label={`Ver imágenes de ${title}`}
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
              </button>
            )}
            {siteUrl ? (
              <Link
                href={siteUrl}
                aria-label={`Ir al sitio de ${title}`}
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowTopRightOnSquareIcon className="h-9 w-9 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
              </Link>
            ) : null}
          </div>
        )}
      </div>
      {activeImage !== null &&
        createPortal(
          <div
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setActiveImage(null);
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
          >
            <div role="dialog" aria-modal="true" aria-label={`Imágenes de ${title}`} className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveImage(null)}
                aria-label="Cerrar imagen"
                className="absolute right-0 top-0 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-white/20"
              >
                <XMarkIcon className="h-7 w-7" />
              </button>
              <div className="relative h-full w-full min-h-0">
                <Image
                  src={previewImages[activeImage]}
                  alt={`${title}: captura ${activeImage + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              {previewImages.length > 1 && (
                <div className="absolute bottom-0 flex items-center gap-6 rounded-full bg-black/70 px-3 py-2 text-white">
                  <button type="button" onClick={() => setActiveImage((activeImage - 1 + previewImages.length) % previewImages.length)} aria-label="Imagen anterior" className="rounded-full p-1 hover:bg-white/20">
                    <ArrowLeftIcon className="h-6 w-6" />
                  </button>
                  <span>{activeImage + 1} / {previewImages.length}</span>
                  <button type="button" onClick={() => setActiveImage((activeImage + 1) % previewImages.length)} aria-label="Imagen siguiente" className="rounded-full p-1 hover:bg-white/20">
                    <ArrowRightIcon className="h-6 w-6" />
                  </button>
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
      <div className="text-white rounded-b-xl mt-1 bg-[#181818] py-6 px-4">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">
          {showMore ? description : truncatedDescription}
          {!showMore && description.length > maxLength && (
            <span>
              {"..."}
              <br />
              <button
                onClick={() => setShowMore(true)}
                className="text-gray-200 hover:underline"
              >
                Mostrar más
              </button>
            </span>
          )}
          {showMore && (
            <div>
              {" "}
              <button
                onClick={() => setShowMore(false)}
                className="text-gray-200 hover:underline"
              >
                Mostrar menos
              </button>
            </div>
          )}
          {showMore}
        </p>
        <h6 className="font-xl font-semibold mb-2 mt-4">Tecnologías:</h6>
        <p className="text-[#ADB7BE] text-sm">{tecnologies}</p>
      </div>
    </div>
  );
}
