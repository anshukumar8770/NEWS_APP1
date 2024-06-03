import React,{useState,useEffect} from "react"
import './NavItem.css'

function NavItem(props){
    return (
        <div onClick={props.callfun} className="NavItem">
            {props.Nav}
        </div>
    )
}
export default NavItem;