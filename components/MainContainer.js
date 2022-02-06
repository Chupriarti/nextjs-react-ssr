import Head from "next/head"
import A from "./A"

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"testing nextjs" + keywords}></meta>
                <title>Main page</title>
            </Head>
            <div className="navbar">
                <A href={"/"} text={"Main page"} />
                <A href={"/users"} text={"Users"} />
            </div>
            <div>
                {children}
            </div>
        </>
    )
}

export default MainContainer