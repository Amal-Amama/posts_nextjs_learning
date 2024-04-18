import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Articles Oage",
};
const ArticlesPage = () => {
  return (
    <div>
      <div>ArticlesPage</div>
      <Link href="/posts">
        <button>go to posts page</button>
      </Link>
    </div>
  );
};

export default ArticlesPage;
