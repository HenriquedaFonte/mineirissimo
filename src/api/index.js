import Image from "next/image";
import { useEffect, useState } from "react";

const InstagramFeed = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchInstagramPhotos = async () => {
      const accessToken = "seu-access-token";
      const userId = "id-do-seu-usuario";

      try {
        const response = await fetch(
          `https://graph.instagram.com/v12.0/${userId}/media?fields=id,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`
        );

        if (!response.ok) {
          throw new Error("Erro ao obter fotos do Instagram");
        }

        const data = await response.json();
        setPhotos(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInstagramPhotos();
  }, []);

  return (
    <div>
      <h2>Instagram</h2>
      <div style={{ display: "flex" }}>
        {photos.slice(0, 4).map((photo) => (
          <Image
            key={photo.id}
            src={photo.thumbnail_url}
            alt={photo.caption || "Instagram Photo"}
            style={{ width: "25%", margin: "0.5rem" }}
          />
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
