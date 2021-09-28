import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RectifyPage.scss';

function RectifyPage(props){
    const [textCount,setTextCount] = useState({
        nickName : '',
        nickNameCount : 0,
        introduce : '',
        introduceCount : 0
    })
    const {nickName,nickNameCount,introduce,introduceCount} = textCount;
    const textLimitCount = {
        nickNameLimit : 10,
        introduceLimit : 200
    }
    const {nickNameLimit,introduceLimit} = textLimitCount;
    const onChangeInput = (e) => {
        if((e.target.name === "nickName" && e.target.value.length <= nickNameLimit) || (e.target.name === "introduce" && e.target.value.length <= introduceLimit)){
            setTextCount({
                ...textCount,
                [e.target.name] : e.target.value,
                [e.target.name+"Count"] : e.target.value.length
            })
        }
    }
    console.log(textCount);
  return(
      <section className="RectifyPage">
          <h1 className="title">마이페이지</h1>
          <section className="RectifySection">
              <div className="ChangeImg">
                  <img src="" alt="" />
                  <button>이미지 변경</button>
              </div>
              <div className="changeWirterInformation">
                  <div className="nickName"><p>닉네임</p><input type="text" name="nickName" onChange={onChangeInput} value={nickName} placeholder="asd" /><div>({nickNameCount}/{nickNameLimit})</div></div>
                  <div className="introduce"><p>자기소개</p><textarea type="text" name="introduce" onChange={onChangeInput} value={introduce} placeholder="asd" /><div>({introduceCount}/{introduceLimit})</div></div>
                  <Link to="/signup?name=recitify"><div className="RectifyPassword"><button>비밀번호 변경하기</button></div></Link>
              </div>
          </section>
              <div className="completionBtn"><button>완료</button></div>
      </section>
  );
}
export default RectifyPage;