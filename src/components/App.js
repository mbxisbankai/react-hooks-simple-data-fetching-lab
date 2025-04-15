import React, {useState, useEffect} from "react";


const API_URL = "https://dog.ceo/api/breeds/image/random";

function App() {

  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        setImage(data.message)
    })
  }, [])


  return (
    <>
      { image ? <img src={image} alt="A Random Dog"/> : <p>Loading...</p>}
    </>
  )
}

export default App;

