import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    return <div className="flex flex-col h-screen">
        <Head>
            <title>Adam Moussa</title>
        </Head>
        <Component {...pageProps} />
    </div>
}