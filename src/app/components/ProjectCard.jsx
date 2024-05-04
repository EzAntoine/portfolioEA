import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  tecnologies,
  imgUrl,
  gitUrl,
  siteUrl,
}) {
  const maxLength = 150; // Establece la longitud máxima del texto.
  const [showMore, setShowMore] = useState(false);
  const truncatedDescription = description.slice(0, maxLength);
  const remainingDescription = description.slice(maxLength);

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPositionY: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:rounded-t-xl group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {gitUrl !== "" ? (
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              target="_blank"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          ) : null}
          {siteUrl !== "" ? (
            <Link
              href={siteUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              target="_blank"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          ) : null}
        </div>
      </div>
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
