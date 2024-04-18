import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home Page",
};
export default function Home() {
  return <h1 className="main_dev">hello world</h1>;
}
