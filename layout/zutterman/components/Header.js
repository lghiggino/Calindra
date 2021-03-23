import Link from "next/link"
import {HiDotsVertical} from "react-icons/hi"
import {slide as Menu} from "react-burger-menu"
import Nav from "./Nav"

export default function Header(){
    return (
        <header>         
            <div className="flex">
                <Nav className="is-hidden-desktop"></Nav>
                <Link href="/">
                    <a className="logo-container flex">
                        <img className="logo" src="./images/logo.svg"alt="zuterman logo"/>
                    </a>
                </Link>
                <div className="text-container ml-4 is-hidden-mobile">
                    <div><h1>zutterman</h1></div>
                    <div><span>Measure Tapes</span></div>
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