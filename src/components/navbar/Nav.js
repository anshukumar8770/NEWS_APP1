import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import "./Nav.css";
var apikey="65289642fedd44ac8d7e4ea936306d11"
function Nav(props) {
    var [element,setelement] = useState(null)
    useEffect(()=>{
        var node = document.getElementsByClassName("news")[0]
        setelement(node)
        console.log(node,"ram");
    },[])
    async function changeDateBykeyword(){
        var apidata = await fetch(`https://newsapi.org/v2/everything?q=${inputValue}&apiKey=${apikey}`)
        apidata = await apidata.json();
        console.log(apidata)
       
        props.setdata(apidata.articles);
        element?.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          setpreValue(inputValue)
          setValue("")
    }
    var [inputValue,setValue] = useState("")
    var [preInputValue,setpreValue] = useState("Search title of the news")
    var [element,setelement] = useState(null)
    useEffect(()=>{
        var node = document.getElementById("news")
        setelement(node)
    },[])
  function changedataAll() {
    props.setdata(props.alldata);
    document.getElementsByClassName("news")[0]?.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }
  function changedata1() {

    props.setdata(props.data1);
    document.getElementsByClassName("news")[0]?.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }
  function changedata2() {
    props.setdata(props.data2);
    document.getElementsByClassName("news")[0]?.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }
  function changedata3() {
    props.setdata(props.data3);
    document.getElementsByClassName("news")[0]?.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }
  function changedata4() {
    props.setdata(props.data4);
    document.getElementsByClassName("news")[0]?.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }
  function changedata5() {
    props.setdata(props.data5);
    console.log(props.data5, "data");
    document.getElementsByClassName("news")[0]?.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }
  return (
    <div className="Nav">
      <div className="text">INDIA TODAY</div>
      <div className="Navi">
        <NavItem callfun={changedataAll} Nav={"All"}></NavItem>
        <NavItem callfun={changedata1} Nav={"Politics"}></NavItem>
        <NavItem callfun={changedata2} Nav={"Entertainment"}></NavItem>
        <NavItem callfun={changedata3} Nav={"Sports"}></NavItem>
        <NavItem callfun={changedata4} Nav={"Tech"}></NavItem>
        <NavItem callfun={changedata5} Nav={"Health"}></NavItem>
      </div>
      <div className="element">
      <div className="search">
        <input
         type="text" onChange={(event)=>setValue(event.target.value)} value={inputValue} placeholder={preInputValue} />
      </div>
        <div onClick={changeDateBykeyword} class="btn">Search</div>
      </div>
    </div>
  );
}
export default Nav;
