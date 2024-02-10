

const LicenseSelector = ({ licenses, selectedLicense, setSelectedLicense }) => {
    return (
        <div className="mt-4">
            <label htmlFor="license-select" className="block mb-2 text-sm font-medium text-gray-900">Seleccionar Tipo de Licencia:</label>
            <select
                id="license-select"
                value={selectedLicense.type}
                onChange={(e) => setSelectedLicense(licenses.find(license => license.type === e.target.value))}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
                {licenses.map((license, index) => (
                    <option key={index} value={license.type}>{license.type} - ${license.price}</option>
                ))}
            </select>
        </div>
    );
};

export default LicenseSelector;