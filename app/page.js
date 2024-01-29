import NavBar from "@/components/stock/NavBar/NavBar";
import Slider from "@/components/stock/Slider/Slider";

export default function Home() {
  const slides = [
    {
      image: 'https://concepto.de/wp-content/uploads/2018/02/artes-plasticas-cuadro-min-e1519328313204-800x432.jpg',
      title: 'Colección Primavera',
      description: 'Descubre las últimas tendencias.'
    },
    {
      image: 'https://www.nus.agency/wp-content/uploads/elementor/thumbs/musica-arte-scaled-q3s9zjmsgnvmn73optv6vm808qaju2jakn089uojbg.jpg',
      title: 'Promoción Especial',
      description: 'Ofertas exclusivas por tiempo limitado.'
    },
    {
      image: 'https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1700615784/content-items/014/585/948/image-1920x1080%2520%25281%2529-original.jpg?1700615784',
      title: 'Promoción Especial',
      description: 'Ofertas exclusivas por tiempo limitado.'
    },
  ];
  return (
    <>
      <header className="w-100">
        <NavBar />
      </header>
      <main className="px-3">
        <Slider slides={slides} />
      </main>
    </>
  );
}
