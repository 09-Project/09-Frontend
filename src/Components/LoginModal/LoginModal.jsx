import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import SignUp from '../../Pages/SignUpPage/SignUp';
import './LoginModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import OutsideClickHandler from 'react-outside-click-handler';
import Symbol from '../../assets/images/Symbol.png';
import axios from 'axios';
import { API_HOST } from '../../constant/api';

function LoginModal(props){
  const {onclickModalOnOff,setLoginModalStatus,setLoginStatus,setToken,token} = props;
  const [eye,setEye] = useState(false);
  const onClickChangeEye = () => {
    setEye(!eye);
  }
  const [loginContent,setLoginContent] = useState({
    username : '',
    password : ''
  })
  const {username,password} = loginContent;
  const onChangeLoginContent = (e) => {
    setLoginContent({
      ...loginContent,
      [e.target.name] : e.target.value
    });
  }
  const onClickLogin = () => {
    axios.post(API_HOST + '/auth/login',{
      username,
      password
    })
    .then(function(res){
      setToken(res.data.access_token);
      setLoginStatus(true);
      setLoginModalStatus(false);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    })
  }
  return(
    <section className="loginModal" name="backGround">
      <OutsideClickHandler onOutsideClick={()=>{
        setLoginModalStatus(false)
      }}>
      <div className="modalContents">
        <div onClick={onclickModalOnOff} className="closeImg" ><FontAwesomeIcon icon={faTimes}/></div>
        <i><img src={Symbol} alt="" /></i>
        <p className="modalTitle">공동구매부터 무료나눔까지</p>
        <p className="Login">LOG IN</p>
        <input onChange={onChangeLoginContent} value={username}  name="username" type="text" className="input inputBorder" placeholder="ID" />
        <div className="input inputBorder"><input type={eye ? "text" : "password"} name="password" onChange={onChangeLoginContent} value={password} placeholder="PASSWORD" id="loginPassword" /><label htmlFor="loginPassword"><FontAwesomeIcon onClick={onClickChangeEye} icon={faEye}/></label></div>
        <div className="saveIdBox">
            <input className="saveId" id="saveId" type="checkbox" /><label htmlFor="saveId"><p>아이디 저장</p></label>
        </div>
        <div className="buttonBox">
          <button className="LoginBtn button" onClick={onClickLogin}>LOGIN</button>
          <Link className="button" onClick={onclickModalOnOff} to="signup">JOIN US</Link>
        </div>
    </div>
    </OutsideClickHandler>
</section>
  );
}
export default LoginModal;