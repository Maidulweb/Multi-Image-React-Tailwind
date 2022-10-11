import React from "react";
import withImage from "./HOC/withImage";

const InputImageFive = ({ result, handleInput, removeInput }) => {
  return (
    <div>
      {!result ? (
        <input
          className="w-n-1"
          type="file"
          accept=".jpg, .png"
          onChange={handleInput}
        />
      ) : (
        <div className="relative w-full h-full">
          <img
            className="max-w-full max-h-full m-0 mx-auto"
            src={result}
            alt="nai"
          />
          <div className="absolute right-0 top-0">
            <button
              className="remove-shadow"
              type="button"
              onClick={removeInput}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default withImage(InputImageFive);
