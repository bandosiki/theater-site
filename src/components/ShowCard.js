import React from "react";
import { Link } from "react-router-dom";

const ShowCard = ({ title, date, imageSrc, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}>
      <div className="md:w-1/2">
        <img className="w-full h-auto object-cover" src={imageSrc} alt={title} />
      </div>
      <div className="md:w-1/2 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{date}</p>
        </div>
        <div className="mt-4">
          <Link to="/buy-ticket" className="btn btn-outline-primary">Купить билет</Link>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
