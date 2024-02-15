import FeaturedImages from "@/components/stock/FeaturedImages/FeaturedImages";
import NavBar from "@/components/stock/NavBar/NavBar";
import Slider from "@/components/stock/Slider/Slider";
import Image from "next/image";

import { featuredImages, slides } from "./data/mock";

export default function Home() {

  return (
    <>
      <header className="w-100">
        <NavBar />
      </header>
      <main className="px-3">
        <Slider slides={slides} />
        <FeaturedImages images={featuredImages}/>
        <Image src="https://firebasestorage.googleapis.com/v0/b/visiostock-914b6.appspot.com/o/images%2FFrXDQ2FXwAAsi0-.jpg?alt=media&token=f82433f7-dc19-4428-b378-92a5438df5f4" width={100} height={100} alt=""></Image>
      </main>
    </>
  );
}
