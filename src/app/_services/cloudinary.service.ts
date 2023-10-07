interface IImageCloudinary {
  max_results?: number;
  next_cursor?: string;
}

export interface IImage {
  asset_id: string;
  public_id: string;
  format: string;
  created_at: Date;
  bytes: number;
  width: number;
  height: number;
  folder: string;
  url: string;
}

const cloudName = process.env.CLOUDINARY_CLOUD_NAME as string;
const apiKey = process.env.CLOUDINARY_API_KEY as string;
const apiSecret = process.env.CLOUDINARY_API_SECRET as string;

export const getAllImages = (tag: string, params?: IImageCloudinary) => {
  let paramsURL = "";

  if (params) {
    Object.keys(params).map((key, index) => {
      if (index === 0) {
        paramsURL += `?${key}=${params[key as keyof typeof params]}`;
      } else {
        paramsURL += `&${key}=${params[key as keyof typeof params]}`;
      }
    });
  }

  return fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/${
      tag ? `tags/${tag}/` : ""
    }${paramsURL}`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${btoa(apiKey + ":" + apiSecret)}`,
      },
    }
  ).then((response) => response.json());
};

export const getAllTags = () => {
  return fetch(`https://api.cloudinary.com/v1_1/${cloudName}/tags/image`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${btoa(apiKey + ":" + apiSecret)}`,
    },
  }).then((response) => response.json());
};
