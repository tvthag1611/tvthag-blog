import GhostContentAPI, { GhostError } from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.GHOST_URL as string,
  key: process.env.GHOST_KEY as string,
  version: "v5.0",
});

export async function getNavigation() {
  return await api.settings.browse().catch((error: Error) => {
    console.log(error);
  });
}

export async function getPosts(limit?: number | string, featured?: boolean) {
  return await api.posts
    .browse({
      include: ["tags", "authors"],
      limit: limit || 10,
      ...(featured !== undefined && {
        filter: `featured:${featured}`,
      }),
    })
    .catch((error: GhostError) => {
      throw error;
    });
}

export async function getPaginationPosts(limit: number | string, page: number) {
  return await api.posts
    .browse({
      include: ["tags", "authors"],
      limit: limit || 10,
      page: page,
    })
    .catch((error: Error) => {
      console.log(error);
    });
}

export async function getSinglePost(postSlug: string) {
  return await api.posts
    .read(
      {
        slug: postSlug,
      },
      { include: ["tags", "authors"] }
    )
    .catch((error: Error) => {
      console.log(error);
    });
}

export async function getTagPosts(tagSlug: string) {
  return await api.posts
    .browse({ filter: `tag:${tagSlug}`, include: "count.posts" })
    .catch((error: Error) => {
      console.log(error);
    });
}

export async function getSingleTag(tagSlug: string) {
  return await api.tags.read({ slug: tagSlug }).catch((error: Error) => {
    console.log(error);
  });
}

export async function getAllTags() {
  return await api.tags
    .browse({
      limit: "all",
    })
    .catch((error: Error) => {
      console.log(error);
    });
}

export async function getSearchPosts() {
  return await api.posts
    .browse({ include: ["tags", "authors"], limit: "all" })
    .catch((error: Error) => {
      console.log(error);
    });
}

export async function getMe() {
  return await api.authors
    .read({
      slug: "tvthag",
    })
    .catch((error: Error) => {
      console.log(error);
    });
}
