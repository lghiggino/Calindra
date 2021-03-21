import Header from "./Header"
// import Main from "./Main"
import Footer from "./Footer"

export default function Layout ({children}){
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    )
}