import Link from "next/link"
import {HiDotsVertical} from "react-icons/hi"
import {slide as Menu} from "react-burger-menu"
import Nav from "./Nav"

export default function Header(){
    return (
        <header>
            {/* <nav>
                <div className="flex ml-2">
                    <div className="dots is-hidden-desktop"> <HiDotsVertical /></div>
                        <Link href="/">
                            <a class="logo-container">
                                <img className="logo" src="./images/logo-Z.webp"alt="zuterman logo"/>
                                <div className="text-container ml-4">
                                    <div><h1 className="lower-case is-hidden-mobile">zutterman</h1></div>
                                    <div><span className="is-hidden-mobile">Measure Tapes</span></div>
                                </div>
                            </a>
                        </Link>
                </div>
                <div className="flex column mr-2">
                    <Link href="/guarantee"><a className="is-hidden-mobile .mr-2 link" >guarantee</a></Link>
                    <Link href="/about-us"><a className="is-hidden-mobile .mr-2 link" >about us</a></Link>
                    <Link href="/models"><a className="is-hidden-mobile .mr-2 link" >models</a></Link>
                </div>
            </nav> */}
            
            <div className="flex">
                <Nav></Nav>
                <Link href="/">
                    <a class="logo-container flex">
                        <img className="logo" src="./images/logo-Z.webp"alt="zuterman logo"/>
                    </a>
                </Link>
                <div className="text-container ml-4 is-hidden-mobile">
                    <div><h1 className="lower-case ">zutterman</h1></div>
                    <div><span className="">Measure Tapes</span></div>
                </div>
                <nav className="flex links-container column is-hidden-mobile mr-2">
                    <Link href="/guarantee"><a className="mr-2 link" >guarantee</a></Link>
                    <Link href="/about-us"><a className="mr-2 link" >about us</a></Link>
                    <Link href="/models"><a className="mr-2 link" >models</a></Link>
                </nav>
            </div>
            
        </header>
    )
}