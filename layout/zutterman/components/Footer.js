import Link from "next/link"
import {FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa"

export default function Footer(){
    return(
        <footer className="gray-bg">
            <section className="social">
                <h4>Follow Us</h4>
                <div>
                    <Link href="http://www.youtube.com/zuttermanTapes" ><a target="blank"> <FaYoutube className="circle-txt"/> </a></Link>
                    <Link href="http://www.facebook.com/zuttermanTapes"><a target="blank"> <FaFacebookF className="circle-txt"/> </a></Link>
                    <Link href="http://www.twitter.com/zuttermanTapes" ><a target="blank"> <FaTwitter className="circle-txt"/> </a></Link>
                </div>
            </section>
            <section className="address">
                <h4>Contact</h4>
                <ul>
                    <li>2490 Leisure Lane</li>
                    <li>San Luis Obispo</li>
                    <li>California</li>
                </ul>
            </section>
        </footer>
    )
}