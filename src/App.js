import Header from "./Components/Header/Header";
import MainPage from "./Components/Pages/MainPage/MainPage";
import Footer from "./Components/Footer/Footer";
import LoginModal from "./Components/LoginModal/LoginModal";
import { BrowserRouter } from 'react-router-dom';
import { Route } from "react-router";
import React,{useState} from 'react';
import SignUp from "./Components/Pages/SignUpPage/SignUp";
import Product from "./Components/Pages/Product/Product";
import MyPage from "./Components/Pages/Product/Product";
function App() {
  const onclickModalOnOff = () => {
    if(loginModalStatus) setLoginModalStatus(false);
    else setLoginModalStatus(true)
  }
  const [loginStatus,setLoginStatus] = useState(false);
  const [loginModalStatus,setLoginModalStatus] = useState(false);
  const RecomendGoddsArr = [
    [
      {
        type:"공동구매",
        title:"마라탕 공동구매1",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매2",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매3",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매4",
        price : '10000',
        img : '',
        location : '여기'
      }
    ],
    [
      {
        type:"공동구매",
        title:"마라탕 공동구매5",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매6",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매7",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매8",
        price : '10000',
        img : '',
        location : '여기'
      }
    ],
    [
      {
        type:"공동구매",
        title:"마라탕 공동구매9",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매10",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매11",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매12",
        price : '10000',
        img : '',
        location : '여기'
      }
    ],
    [
      {
        type:"공동구매",
        title:"마라탕 공동구매13",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매14",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매15",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매16",
        price : '10000',
        img : '',
        location : '여기'
      }
    ]
  ]

  return (
    <div className="App">
      <BrowserRouter>
        {loginModalStatus ? <LoginModal setLoginModalStatus={setLoginModalStatus} onclickModalOnOff={onclickModalOnOff} />: ''}
        <Route path="/signup" component={SignUp}/>
        <Header loginStatus={loginStatus} onclickModalOnOff={onclickModalOnOff}/>
        <Route exact path="/">
          <MainPage component={MainPage} RecomendGoddsArr={RecomendGoddsArr}/>
          </Route>
        <Route path="/product" >
          <Product component={Product}/>
          </Route>
          <Route>
            <MyPage component={MyPage} />
          </Route>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
