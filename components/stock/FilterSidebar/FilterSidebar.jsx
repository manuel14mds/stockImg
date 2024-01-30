

function FilterSidebar() {
    return (
        <div className="p-4 w-64 bg-sky-900 max-w-36">
            {/* Aquí puedes añadir tus filtros, como rangos de precios, checkboxes, etc. */}
            <h3 className="font-semibold mb-2">Filtros</h3>
            {/* Ejemplo de un filtro */}
            <div>
                <label htmlFor="price-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Rango de precio</label>
                <input type="range" id="price-range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            </div>
        </div>
    )
}

export default FilterSidebar
