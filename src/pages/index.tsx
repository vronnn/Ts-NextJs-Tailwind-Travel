import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Homepage from "./sections/page-1/Homepage";
import Destpage from "./sections/page-2/Destpage";
import Aboutpage from "./sections/page-3/Aboutpage";
import Reviewpage from "./sections/page-4/Reviewpage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* Home */}
        <Homepage />
        {/* section 2 */}
        <Destpage />
        {/* section 3 */}
        <Aboutpage />
        {/* section 4 */}
        <Reviewpage />
      </div>
    </>
  );
}
