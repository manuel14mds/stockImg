import NavBar from "@/components/stock/NavBar/NavBar";

export const metadata = {
    title: "Stock Image",
    description: "Stock Image platform",
};

export default function Stock({ children }) {
    return (
        <html lang="es">
            <body>
                <header>
                    <NavBar />
                </header>
                {children}
            </body>
        </html>
    );
}
