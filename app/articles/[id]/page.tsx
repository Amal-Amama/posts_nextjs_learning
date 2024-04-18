import { Metadata } from "next";

export const metadata: Metadata = {
  title: "articleById Page",
};
const IdArticle = (props: any) => {
  console.log(props.params.id);

  return (
    <div>
      <div>IdArticle</div>
      <h1>{props.params.id}</h1>
    </div>
  );
};

export default IdArticle;
