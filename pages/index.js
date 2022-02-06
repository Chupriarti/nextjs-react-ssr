import Head from "next/head"
import Link from "next/link"
import A from "../components/A"
import MainContainer from "../components/MainContainer"

const Index = () => {
    return (
        <>
            <MainContainer>
                <h1>Main page</h1>
                <style jsx>
                    {`
                        .navbar {
                            background: orange;
                            padding: 15px;
                        }
                    `}
                </style>
            </MainContainer>
        </>
    )
}

export default Index
