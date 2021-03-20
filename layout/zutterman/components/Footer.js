import Link from "next/link"
import {FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa"

export default function Footer(){
    return(
        <footer className="gray-bg">
            <section className="social">
                <h4>Follow Us</h4>
                <Link href="http://www.youtube.com/zuttermanTapes" ><a target="blank"> <FaYoutube/> </a></Link>
                <Link href="http://www.facebook.com/zuttermanTapes"><a target="blank"> <FaFacebookF/> </a></Link>
                <Link href="http://www.twitter.com/zuttermanTapes" ><a target="blank"> <FaTwitter/> </a></Link>
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