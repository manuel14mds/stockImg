import { imagenesCatalogo } from "@/app/data/mock"
import CategoryNav from "@/components/stock/CategoryNav/CategoryNav"
import FilterSidebar from "@/components/stock/FilterSidebar/FilterSidebar"
import ImageGrid from "@/components/stock/ImageGrid/ImageGrid"
import SearchBar from "@/components/stock/SearchBar/SearchBar"

export const generateMetadata = async ({params})=>{
    return {
        title: `visioStock - ${params.categoria} images`
    }
}

function CatalogPage({params}) {
    const{categoria} = params
    return (
        <>
            <SearchBar />
            <CategoryNav />
            <div className="flex  h-[calc(100vh-190px)]">
                <FilterSidebar />
                {/* Aquí iría tu componente de cuadrícula de imágenes */}
                <div className="flex-grow p-4 overflow-y-auto">
                    <ImageGrid category={categoria} images={imagenesCatalogo}/>
                </div>
            </div>
        </>
    )
}

export default CatalogPage
