import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbumPhoto } from "../utils/apis/user";

const Album = () => {
  const params = useParams();
  const [albumPhotos, setAlbumPhotos] = useState([]);

  useEffect(() => {
    const load = async () => {
      const response = await getAlbumPhoto(params.albumId);
      setAlbumPhotos(response);
    };

    if (params.albumId) {
      load();
    }
  }, [params]);

  return (
    <div className="grid grid-cols-4 gap-2 p-4">
      {albumPhotos?.length > 0 &&
        albumPhotos.map((albumPhoto) => {
          return (
            <div key={String(albumPhoto.id)}>
              <img src={albumPhoto.url} alt={albumPhoto.title} />
            </div>
          );
        })}
    </div>
  );
};

export default Album;
