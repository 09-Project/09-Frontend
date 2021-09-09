import React,{useState} from 'react';
import './SignUp.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function SignUp(){
  const postHeader = {
    'Content-type': 'application/json'
  }
  const [inputEye,setInputEye] = useState(false);
  const [nickName,setNickName] = useState('')
  const [id,setId] = useState('');
  const [password,setPassword] = useState({
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
      })
    } else {
      alert("오류")
    }
  }
  const onClickHiddenOrShow = () => {
      if(inputEye) setInputEye(false);
      else setInputEye(true);
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
              <div className="eachInput"><p>비밀번호</p><div><input name="makepassword" id="input" onChange={onChangePassword} type={inputEye ? "text" : "password"} value={makepassword} /><label onClick={onClickHiddenOrShow} htmlFor="input"><FontAwesomeIcon icon={inputEye ? faEye : faEyeSlash}/></label></div></div>
              <div className="eachInput"><p>비밀번호 확인</p><input name="verifyPassword"  onChange={onChangePassword} type="password" value={verifyPassword} /></div>
            </div>
            <div className="signUpInputSection">
              <button className="submit" onClick={onClickSubmit}>확인</button>
              <button className="cancle">취소</button>
            </div>
          </div>
        </div>
      </section>
  );
}
export default SignUp;