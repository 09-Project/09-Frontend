import Header from "./Components/Header/Header";
import MainPage from "./Components/Pages/MainPage/MainPage";
import Footer from "./Components/Footer/Footer";
import LoginModal from "./Components/LoginModal/LoginModal";
import { BrowserRouter } from 'react-router-dom';
import { Route } from "react-router";
import React,{useState} from 'react';
import SignUp from "./Components/SignUpPage/SignUp";

function App() {
  const onclickModalOnOff = () => {
    if(loginModalStatus) setLoginModalStatus(false);
    else setLoginModalStatus(true)
  }
  const [loginStatus,setLoginStatus] = useState(false);
  const [loginModalStatus,setLoginModalStatus] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {loginModalStatus ? <LoginModal onclickModalOnOff={onclickModalOnOff} />: ''}
        <Route path="/signup" component={SignUp}/>
        <Header loginStatus={loginStatus} onclickModalOnOff={onclickModalOnOff}/>
        <Route exact path="/" component={MainPage} />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
