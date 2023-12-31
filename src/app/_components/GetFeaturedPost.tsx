import { getPosts } from "../_services/ghost-client";
import CardPostHozi from "./CardPostHozi";
import CardPostVerti from "./CardPostVerti";

const GetFeaturedPost: any = async () => {
  const posts = await getPosts(4, true);

  return (
    <div>
      {posts[0] && <CardPostHozi post={posts[0]} />}
      {posts?.length > 1 && (
        <div className="grid grid-cols-1 gap-2 md:gap-3 lg:gap-4 lg:grid-cols-3 md:grid-cols-2 mt-2 md:mt-3 lg:mt-4">
          {posts?.map((post, index) => {
            if (index > 0) {
              return <CardPostVerti post={post} key={index} />;
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default GetFeaturedPost;
