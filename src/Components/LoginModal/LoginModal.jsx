import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import SignUp from '../../Pages/SignUpPage/SignUp';
import './LoginModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import OutsideClickHandler from 'react-outside-click-handler';
import Symbol from '../../assets/images/Symbol.png';
import axios from 'axios';
function LoginModal(props){
  const {onclickModalOnOff,setLoginModalStatus,setLoginStatus} = props;
  const [eye,setEye] = useState(false);
  const onClickChangeEye = () => {
    if(eye) setEye(false);
    else setEye(true);
  }
  const [loginContent,setLoginContent] = useState({
    username : '',
    password : ''
  })
  const {username,password} = loginContent;
  const onChangeLoginContent = (e) => {
    const nextObj = {
      ...loginContent,
      [e.target.name] : e.target.value
    }
    setLoginContent(nextObj);
  }
  const onClickLogin = () => {
    axios.post('http://3.36.26.221:8080/member/auth/login',{
      "username" : username,
      "password" : password
    })
    .then(function(){
      setLoginStatus(true);
      setLoginModalStatus(false)
    })
  }
  return(
    <section className="loginModal" name="backGround">
      <OutsideClickHandler onOutsideClick={()=>{
        setLoginModalStatus(false)
      }}>
        {console.log(loginContent)}
      <div className="modalContents">
        <div onClick={onclickModalOnOff} className="closeImg" ><FontAwesomeIcon icon={faTimes}/></div>
        <i><img src={Symbol} alt="" /></i>
        <p className="modalTitle">공동구매부터 무료나눔까지</p>
        <p className="Login">LOG IN</p>
        <input onChange={onChangeLoginContent} value={username}  name="username" type="text" className="input inputBorder" placeholder="ID" />
        <div className="input inputBorder"><input type={eye ? "text" : "password"} name="password" onChange={onChangeLoginContent} value={password} placeholder="PASSWORD" id="loginPassword" /><label htmlFor="loginPassword"><FontAwesomeIcon onClick={onClickChangeEye} icon={faEye}/></label></div>
        <div className="saveIdBox">
            <input className="saveId" type="checkbox" /><p>아이디 저장</p>
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