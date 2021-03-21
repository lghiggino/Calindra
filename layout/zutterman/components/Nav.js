import React, { Component} from "react"
import Link from "next/link"
import {bubble as Menu} from "react-burger-menu"


class Nav extends React.Component{
    super (props){
        this.state = {
            menuOpen : false
        }
    }
    handleStateChange (state){
        this.setState({menuOpen: state.isOpen} )
    }
    closeMenu(){
        this.setState({menuOpen: false})
    }
    render(){
        return(
            <Menu noOverlay width={280} 
                isOpen={false}
                onStateChange={(state) => this.handleStateChange(state)}>
                <Link href="/"><a onClick={()=>this.closeMenu()} className="bm-item" >zutterman</a></Link>
                <Link href="/guarantee"><a onClick={()=>this.closeMenu()} className="bm-item" >guarantee</a></Link>
                <Link href="/about-us"><a onClick={()=>this.closeMenu()} className="bm-item" >about us</a></Link>
                <Link href="/models"><a onClick={()=>this.closeMenu()} className="bm-item" >models</a></Link>
            </Menu>
        )
    }

}

export default Nav