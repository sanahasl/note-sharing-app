import "./App.css";
import { useState, useEffect } from "react";
import { storage } from "./firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const deleteImage = (imageUrl) => {
    const imageRef = ref(storage, imageUrl);
    deleteObject(imageRef)
      .then(() => {
        alert("file deleted succesfully");
      })
      .catch((error) => {
        alert("an error occured").then((error) => {
          console.log(error);
        });
      });
  };

  const imageListRef = ref(storage, "/images");
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      alert("uploaded");
    });
  };

  useEffect(() => {
    listAll(imageListRef)
      .then((response) => {
        const promises = response.items.map((item) => getDownloadURL(item));
        return Promise.all(promises);
      })
      .then((urls) => {
        setImageList(urls);
      });
  }, []);

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}> Upload image</button>

      {imageList.map((url) => {
        return (
          <div class="note_document" key={url}>
            <img src={url} />
            <button class="delete-note-btn" onClick={() => deleteImage(url)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
