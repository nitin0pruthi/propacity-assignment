import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserAlbum } from "../utils/apis/user";

const Albums = () => {
  const params = useParams();
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const load = async () => {
      const response = await getUserAlbum(params.userId);
      setAlbums(response);
    };

    if (params.userId) {
      load();
    }
  }, [params]);

  return (
    <div className="border border-gray-400 rounded space-y-2 p-4 m-2">
      <h1>Selected user albums:</h1>
      <div className="grid grid-cols-4 gap-2">
        {albums?.length > 0 &&
          albums.map((album) => {
            return (
              <Link
                to={`/users/${params.userId}/albums/${album.id}`}
                key={String(album.id)}
              >
                <div className="text-base p-4 bg-gray-300 hover:bg-gray-400 rounded ">
                  {album.title}
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Albums;
