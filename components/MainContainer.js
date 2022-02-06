import A from "./A"

const MainContainer = ({children}) => {
    return (
        <>
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