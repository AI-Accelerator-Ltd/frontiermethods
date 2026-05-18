// Adds noindex/nofollow meta tags for bid companion pages.
// Reviewers can still reach these via direct URL, but they won't surface in search.
export default function Noindex() {
  return null;
}

export const noindexMetadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noimageindex: true,
  },
};
