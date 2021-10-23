import Header from "./Components/Header/Header";
import MainPage from './Pages/MainPage/MainPage'
import Footer from "./Components/Footer/Footer";
import LoginModal from "./Components/LoginModal/LoginModal";
import { BrowserRouter } from 'react-router-dom';
import { Route } from "react-router";
import React,{useEffect, useState} from 'react';
import SignUp from "./Components/SignUpPage/SignUp";
import Product from "./Pages/Product/Product";
import MyPage from "./Pages/MyPage/MyPage";
import Upload from './Components/Upload/Upload'
import RectifyPage from "./Pages/RectifyPage/RectifyPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import axios from "axios";
import {API_HOST} from './constant/api'
import { getCookie,setCookie } from "./cookie";

function App() {
  const onclickModalOnOff = () => {
    setLoginModalStatus(!loginModalStatus)
  }
  useEffect(()=>{
    axios.get(API_HOST+'/post').then(res=>setRecomendGoddsArr(res.data));
},[]);
  const [loginStatus,setLoginStatus] = useState(false);
  useEffect(()=>{
    const access_token = getCookie('myToken');
    axios.get(API_HOST + '/member/information',{
      headers:{Authorization : `Bearer ${access_token}`}
    }).then(res => {
      setLoginStatus(true);
      axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    })
    .catch(res=>{
      setCookie('myToken','')
    })
  },[]);
  const [loginModalStatus,setLoginModalStatus] = useState(false);
  const [RecomendGoddsArr,setRecomendGoddsArr] = useState([])
  const [myProductArr,setMyProductArr] = useState([
    {
      type:"공동구매",
      title:"마라탕 공동구매1",
      price : '10000',
      img : '',
      location : '여기'
    }
  ])
  const [myWishList,setMyWishList] = useState([
    {
      img : '',
      title : '마라탕 공동구매1',
      status : false
    }
  ])
  const [selectedTypeBox,setSelectedTypeBox] = useState([true,false,false]);
  return (
    <div className="App">
      <BrowserRouter>
        {loginModalStatus ? <LoginModal setLoginModalStatus={setLoginModalStatus} onclickModalOnOff={onclickModalOnOff} setLoginStatus={setLoginStatus} />: ''}
        <Route path="/signup">
          <SignUp  />
        </Route>
        <Header loginStatus={loginStatus} onclickModalOnOff={onclickModalOnOff} setSelectedTypeBox={setSelectedTypeBox} setLoginStatus={setLoginStatus}/>
        <Route exact path="/">
          <MainPage component={MainPage} RecomendGoddsArr={RecomendGoddsArr} setRecomendGoddsArr={setRecomendGoddsArr}/>
        </Route>
        <Route path="/product" >
          <Product component={Product}/>
          </Route>
          <Route path="/myPage">
            <MyPage component={MyPage} myProductArr={myProductArr} myWishList={myWishList} selectedTypeBox={selectedTypeBox} setSelectedTypeBox={setSelectedTypeBox} setMyProductArr={setMyProductArr} setMyWishList={setMyWishList}/>
          </Route>
          <Route path="/upload">
            <Upload component={Upload}/>
          </Route>
          <Route path="/rectify">
            <RectifyPage component={RectifyPage}/>
          </Route>
          <Route path="/search">
            <SearchPage component={SearchPage} />
          </Route>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
