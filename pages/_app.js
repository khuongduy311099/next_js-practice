import MainLayout from "../src/components/layout/mainLayout";
import "../styles/globals.css";
import "../styles/Home.sass";

function MyApp({Component, pageProps}) {
    return (
        <>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    );
}

export default MyApp;
