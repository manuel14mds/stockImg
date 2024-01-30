import CategoryNav from "@/components/stock/CategoryNav/CategoryNav"
import SearchBar from "@/components/stock/SearchBar/SearchBar"
import FilterSidebar from "@/components/stock/FilterSidebar/FilterSidebar"

import { imagenesCatalogo } from "@/app/data/mock"
import ImageGrid from "@/components/stock/ImageGrid/ImageGrid"

export const generateMetadata = async ({params})=>{
    return {
        title: `visioStock - ${params.category} images`
    }
}

function CatalogPage({params}) {
    const{category} = params
    return (
        <>
            <SearchBar />
            <CategoryNav />
            <div className="flex  h-[calc(100vh-190px)]">
                <FilterSidebar />
                {/* Aquí iría tu componente de cuadrícula de imágenes */}
                <div className="flex-grow p-4 overflow-y-auto">
                    <ImageGrid category={category} images={imagenesCatalogo}/>
                </div>
            </div>
        </>
    )
}

export default CatalogPage
