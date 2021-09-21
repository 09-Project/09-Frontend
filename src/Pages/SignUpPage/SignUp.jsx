import React,{useState} from 'react';
import './SignUp.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function SignUp(){
  const postHeader = {
    'Content-type': 'application/json'
  }
  const [mainShow,setMainPage] = useState(false); //나중에 useState 1개로
  const [checkShow,setCheckShow] = useState(false); //나중에 useState 1개로
  const [nickName,setNickName] = useState('') //나중에 useState 1개로
  const [id,setId] = useState(''); //나중에 useState 1개로
  const [password,setPassword] = useState({ //나중에 useState 1개로
    makepassword : '',
    verifyPassword : ''
  })

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  }
  const onChangeId = (e) => {
    setId(e.target.value);
  }
  const {makepassword,verifyPassword} = password;
  const onChangePassword = (e) => {
    setPassword({
      ...password,
      [e.target.name] : e.target.value
    })
    console.log(e.target.value)
  }
  console.log(password)
  const onClickSubmit = () => {
    if(makepassword === verifyPassword){
      axios.post('http://3.19.60.23:8080/auth/join',{
        name : nickName,
        username : id,
        password : makepassword
      },{headers:postHeader})
      .then(function(respose){
        console.log(respose);
        setId('')
        setNickName('')
        setPassword({
          makepassword : '',
          verifyPassword : ''
        })
      })
      .error(function(){
        alert("오류");
      })
    } else {
      alert("오류");
    }
  }

  const mainShowHide = () => {
    if(mainShow)setMainPage(false)
    else setMainPage(true)
  }
  const checkShowHide = () => {
    if(checkShow)setCheckShow(false)
    else setCheckShow(true)
  }
  return(
      <section className="SignUpPage">
        <div className="SignUpContainer">
          <div className="empty"></div>
          <div className="logoInSignup">
            <i><img src="" alt="" /></i>
          </div>
          <div className="joinUs">JOIN US</div>
          <div className="signUpInputContainer">
            <p className="introduceInput">기본 정보 입력</p>
            <div className="inputSection">
              <div className="eachInput"><p>닉네임</p><input onChange={onChangeNickName} type="text" value={nickName} /></div>
              <div className="eachInput"><p>아이디</p><input name="makepassword" onChange={onChangeId} type="text" value={id} /></div>
              <div className="eachInput">
                <p>비밀번호</p>
                <div>
                  <input name="makepassword" id="input" onChange={onChangePassword} type={mainShow ? "text" : "password"} value={makepassword} />
                  <label onClick={mainShowHide} htmlFor="input">
                    <FontAwesomeIcon  icon={mainShow ? faEye : faEyeSlash}/></label>
                </div>
              </div>
              <div className="eachInput">
                <p>비밀번호 확인</p>
                <div><input name="verifyPassword" id="check"  onChange={onChangePassword} type={checkShow ? "text" : "password"} value={verifyPassword} />
                  <label  onClick={checkShowHide} htmlFor="check">
                    <FontAwesomeIcon  icon={checkShow ? faEye : faEyeSlash}/>
                  </label></div>
                </div>
            </div>
            <div className="signUpInputSection">
              <button className="submit" onClick={onClickSubmit}>확인</button>
              <Link to="/"><button className="cancle">취소</button></Link>
            </div>
          </div>
        </div>
      </section>
  );
}
export default SignUp;