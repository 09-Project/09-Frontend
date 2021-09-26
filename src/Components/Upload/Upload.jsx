import React, { useState } from 'react';
import './Upload.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
function Upload(props){
    const {checked,setChecked} = props;
    const [textCount,setTextCount] = useState({
        title : 0,
        titleValue : '',
        introduce : 0,
        introduceValue : ''
    });
    const onClickCheckBox = (e) => {
        setChecked([false,false]);
        checked[e] = true;
        console.log(e);
    }
    const {title,introduce,titleValue,introduceValue} = textCount;
    const limit = {
        titleLimit : 20,
        introduceLimit : 550
    }
    const {titleLimit,introduceLimit} = limit;
    const onChangeTextCount = (e) => {
        if((e.target.name === "title" && e.target.value.length <= titleLimit) || (e.target.name === "introduce" && e.target.value.length <= introduceLimit)){
            setTextCount({
                ...textCount,
                [e.target.name] : e.target.value.length,
                [e.target.name+'Value'] : e.target.value
            })
        }
    }
  return(
      <section className="uploadPage">
          {console.log(checked)}
          <div className="introducing"><h1>게시물 올리기</h1><p>*은 필수항목입니다</p></div>
          <ul className="selectOption">
              <li className="09" onClick={()=>onClickCheckBox(0)}><div className="circle"><input type="checkbox" name="" className="checkbox-round" id="09" checked={checked[0]} /></div><label htmlFor="09">공동구매</label></li>
              <li className="donation" onClick={()=>onClickCheckBox(1)}><div className="circle"><input type="checkbox" className="checkbox-round" name="" id="donation" checked={checked[1]} /></div><label htmlFor="donation">기부</label></li>
          </ul>
          <section className="uploadImgSection">
            <div className="imgCount"><p>상품 이미지</p><p>(3/4)</p></div>
            <div className="uploadImgs">
                <ul className="imgs">
                    <li className="eachImg"><FontAwesomeIcon className="img" icon={faCamera}/><p>이미지 등록</p></li>
                </ul>
                <p>- 이미지는 상품등록 시 정사각형으로 잘려서 등록됩니다.</p>
            </div>
          </section>
          <section className="productInfo">
              <div className="title"><h3>글 제목*</h3><input name="title" type="text" placeholder="글 제목을 입력해주세요" onChange={onChangeTextCount} value={titleValue} /><p className="letterCount">({title}/{titleLimit})</p></div>
              <div className="introduce"><h3>글 설명</h3><textarea name="introduce" placeholder="글 설명을 입력해주세요" onChange={onChangeTextCount} value={introduceValue}/><p>({introduce}/{introduceLimit})</p></div>
          </section>
          {checked[0] ? 
          <section className="productPrice">
              <div className="price"><h3>가격*</h3><input type="text" placeholder="숫자만 입력해주세요" className="priceInput" /><p>원</p></div>
          </section> : ''
            }
          <section className="productLocation">
              <div className="location"><h3>거래지역*</h3><input type="text" placeholder="거래지역을 입력해주세요(ex.대덕소프트웨어마이스터고)" /></div>
          </section>
          <section className="productOpenChatting">
              <div className="openChatting"><h3>오픈채팅*</h3><input type="text" placeholder="오픈채팅방 링크를 입력해주세요" /></div>
          </section>
          <div className="completion"><button>완료</button></div>
      </section>
  );
}
export default Upload;