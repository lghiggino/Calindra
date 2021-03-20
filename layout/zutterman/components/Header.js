import Link from "next/link"

export default function Header(){
    return (
        <header>
            <nav>
                <div className="flex ml-2">
                    <div className="dots is-hidden-desktop"> <i className="fas fa-ellipsis-v"></i></div>
                        <Link href="/">
                            <a>
                                <img className="logo" src="./images/logo-Z.webp"alt="zuterman logo"/>
                                <div className="text-container ml-4">
                                    <div><h1 className="lower-case is-hidden-mobile">zutterman</h1></div>
                                    <div><span className="is-hidden-mobile">Measure Tapes</span></div>
                                </div>
                            </a>
                        </Link>
                </div>
                <div className="flex column mr-2">
                    <Link href="/guarantee"><a className="is-hidden-mobile .mr-2" >guarantee</a></Link>
                    <Link href="/about-us"><a className="is-hidden-mobile .mr-2" >about us</a></Link>
                    <Link href="/models"><a className="is-hidden-mobile .mr-2" >models</a></Link>
                </div>
            </nav>
        </header>
    )
}