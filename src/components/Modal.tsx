import React from "react";
import emitter from "../utils/eventEmitter";
import { IMAGEURL, EVENTS } from "../data/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import Score from "./Score";

const Modal = ({
  poster_path,
  title,
  original_title,
  name,
  original_name,
  overview,
  vote_average,
  runtime,
  number_of_seasons,
}: any) => {
  const handleClick = () => {
    emitter.emit(EVENTS.ModalClose);
  };

  return (
    <div className="fixed z-10 top-0 left-0 py-56 px-12 w-full h-screen grid place-items-center">
      <article className="w-full h-full grid grid-flow-col auto-cols-auto py-12 px-8 bg-black opacity-90">
        <img
          className="w-auto h-96"
          src={`${IMAGEURL}/w500/${poster_path}`}
          alt={title ? title : name}
        />
        <div className="relative ml-6">
          <FontAwesomeIcon
            className="cursor-pointer absolute top-0 right-0 text-red-600"
            icon={faTimesCircle}
            size="2x"
            onClick={handleClick}
          />
          <h2 className="text-3xl font-bold">{title ? title : name}</h2>
          <h6 className="font-bold italic">
            {original_title ? original_title : original_name}
          </h6>
          <p className="my-8">{overview}</p>
          <Score value={vote_average} />
          <span className="bg-red-600 rounded py-2 px-4 ml-2">
            {runtime
              ? `${runtime}min`
              : number_of_seasons > 1
              ? `${number_of_seasons} temporadas`
              : `${number_of_seasons} temporada`}
          </span>
        </div>
      </article>
    </div>
  );
};

export default Modal;
