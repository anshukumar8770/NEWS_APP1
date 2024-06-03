import './App.css';
import News from './components/news/News';
import React,{useState,useEffect} from 'react';
import Nav from './components/navbar/Nav';
var apikey="65289642fedd44ac8d7e4ea936306d11"
function App() {

  var [data1,setdata1] = useState([])
  var [data2,setdata2] = useState([])
  var [data3,setdata3] = useState([])
  var [data4,setdata4] = useState([])
  var [data5,setdata5] = useState([])
  var [data,setdata] = useState([])
  async function callapi(link,setdata){
    var data = await fetch(link);
    data = await data.json();
    setdata(data.articles);
    console.log(data,"data")
  }
  var [allnews,setallnews] = useState([]);
  async function allnewsrandom(){
    var array = [...data1,...data2,...data3,...data4,...data5];
    for (var i = array.length - 1; i > 0; i--) {
      
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }
   console.log(array.length,"array length")
   setallnews(array);
   setdata(array)
  }
  useEffect(()=>{
    allnewsrandom()
  },[data5])
  useEffect(()=>{
    console.log("inside")
    async function api(){
      await callapi(`https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=${apikey}`,setdata1)
      await callapi(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${apikey}`,setdata2)
      await callapi(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apikey}`,setdata3)
      await callapi(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${apikey}`,setdata4)
      await callapi(`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apikey}`,setdata5)
    }
    api()
      console.log(data1)
  },[])
  useEffect(()=>{
    setdata(data1)
    console.log(data1,"data 1")
  },[data1])
  return (
    <div className="App">
      <Nav data1={data1} alldata={allnews} data2={data2} data3={data3} data4={data4} data5={data5} setdata={setdata}></Nav>
      <News data={data}/>
    </div>
  );
}

export default App;
