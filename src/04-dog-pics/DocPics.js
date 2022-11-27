import React, { useEffect, useState } from "react";

// API : https://dog.ceo/api/breeds/image/random

const getDocPicture = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const dog = await response.json();
  return dog.message;
};

export default function DocPics() {
  const [dogPicture, setDogPicture] = useState("");
  useEffect(() => {
    getDocPicture().then((picture) => setDogPicture(picture));
  }, []);

  return (
    <div className="container">
      <h2>Doc Picture API</h2>
      <br />
      <img src={dogPicture} alt="Dog Picture" width={500} />
      <br />
      <br />
      <button
        type="button"
        onClick={async (e) => setDogPicture(await getDocPicture())}
      >
        🐕 Show Image
      </button>
    </div>
  );
}
