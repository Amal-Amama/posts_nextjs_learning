import { Metadata } from "next";
import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
export const metdata: Metadata = {
  title: "postDetailPage",
};
const postDetailPage = async (props: any) => {
  const postId = props.params.postId;
  const loadingJsx = (
    <div>
      <h1>Loading...</h1>
    </div>
  );
  return (
    <div>
      <h1>postDetailPage</h1>
      <Suspense fallback={loadingJsx}>
        <div className="post_item">
          <PostDetails postId={postId} />
        </div>
      </Suspense>
    </div>
  );
};

export default postDetailPage;
