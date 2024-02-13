import NavBar from "./components/NavBar";

export default function Auth({ children }) {
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
