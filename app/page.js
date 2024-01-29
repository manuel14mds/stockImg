import NavBar from "@/components/stock/NavBar/NavBar";
import Slider from "@/components/stock/Slider/Slider";
import FeaturedImages from "@/components/stock/FeaturedImages/FeaturedImages";

import { slides, featuredImages } from "./data/mock";

export default function Home() {

  return (
    <>
      <header className="w-100">
        <NavBar />
      </header>
      <main className="px-3">
        <Slider slides={slides} />
        <FeaturedImages images={featuredImages}/>
      </main>
    </>
  );
}
