import React, { useEffect, useState } from "react";

function Background() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://pixabay.com/api/?key=31686751-bb705cb5988446f9aa2a2126c&q=wildlife+wallpaper&image_type=photo&pretty=true")
      .then((r) => r.json())
      .then((results) => setImages(results.hits));
  }, []);

  console.log(images)

  return (
    <div className="Background">
      {/* {images.map((image) => (
        <img src={image.largeImageURL} />
      ))} */}
      {/* <img src={images[0].largeImageURL} alt="background" style={{ width: '100%', height: '100%', objectFit: 'cover'}} /> */}
    </div>
  );
}

export default Background;
