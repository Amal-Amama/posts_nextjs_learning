const PostDetails = async (props: any) => {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${props.postId}`,
    { next: { revalidate: 120 } }
  );
  const post = await response.json();

  return (
    <div>
      <h1>{post.id}</h1>
      <hr />
      <h2>{post.title}</h2>
      <hr />
      <h3>{post.body}</h3>
      <hr />
      <p>
        <strong>{post.userId}</strong>
      </p>
    </div>
  );
};

export default PostDetails;
