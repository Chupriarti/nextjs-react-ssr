import Head from "next/head"
import Link from "next/link"
import A from "../components/A"

const Index = () => {
    return (
        <>
            <Head>
                <meta keywords="testing nextjs"></meta>
                <title>Main page</title>
            </Head>
            <div>
                <div className="navbar">
                    <A href={"/"} text={"Main page"} />
                    <A href={"/users"} text={"Users"} />
                </div>
                <h1>Main page</h1>
                <style jsx>
                    {`
                        .navbar {
                            background: orange;
                            padding: 15px;
                        }
                    `}
                </style>
            </div>
        </>
    )
}

export default Index
