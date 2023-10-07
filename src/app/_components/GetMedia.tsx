import Image from "next/image";
import { getAllImages, IImage } from "../_services/cloudinary.service";

const GetMedia: any = async () => {
  const images = await getAllImages("", { max_results: 12 });

  const resources: IImage[][] = [[], [], [], []];
  images?.resources?.forEach((image: IImage, index: number) => {
    if (index < 3) {
      resources[0]?.push(image);
    }
    if (index >= 3 && index < 6) {
      resources[1]?.push(image);
    }
    if (index >= 6 && index < 9) {
      resources[2]?.push(image);
    }
    if (index >= 9) {
      resources[3]?.push(image);
    }
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
      {resources?.map((resource, index) => {
        return (
          <div className="grid gap-4" key={index}>
            {resource?.map((item) => {
              return (
                <div key={item.asset_id}>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src={item.url}
                    alt={item.public_id || ""}
                    width={item.width}
                    height={item.height}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GetMedia;
