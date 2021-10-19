import React, { useState } from 'react';
import './Upload.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { API_HOST } from '../../constant/api';

const CO_BUYING_RADIO_ID = 'co-buying';
const DONATION_RADIO_ID = 'donation';

function Upload(props){
    const [selectedRadio,setSelectedRadio] = useState("co-buying");
    const onChangeRadio = (event) => {
        const { id } = event.target;
        setSelectedRadio(id);
    }
    const [postContent,setPostContent] = useState({
        title : '',
        content : '',
        price : '',
        transactionRegion : '',
        openChatLink : '',
        image : ''
    })
    const {title,content,price,transactionRegion,openChatLink,image} = postContent;
    const onClickPostContent = e => {
        setPostContent({
            ...postContent,
            [e.target.name] : e.target.value
        })
    }
    const onSubmitPost = () => {
        axios.post(API_HOST + '/post',postContent).then(res=>{})
    }
  return(
      <section className="uploadPage">
          <div className="introducing"><h1>게시물 올리기</h1><p>*은 필수항목입니다</p></div>
          <section className="selectPostOption">
            <label><div><input type="radio" onChange={onChangeRadio} name="typeCheckbox" id={CO_BUYING_RADIO_ID} className="checkbox-round" checked={selectedRadio === CO_BUYING_RADIO_ID}  /></div>공동구매</label>
            <label><div><input type="radio" onChange={onChangeRadio} name="typeCheckbox" id={DONATION_RADIO_ID} className="checkbox-round" checked={selectedRadio === DONATION_RADIO_ID}/></div>기부</label>
          </section>
          <section className="uploadImgSection">
            <div className="imgCount"><p>상품 이미지</p><p>(3/4)</p></div>
            <div className="uploadImgs">
                <ul className="imgs">
                    <label className="eachImg"><FontAwesomeIcon className="img" icon={faCamera}/><p>이미지 등록</p></label>
                </ul>
                <p>- 이미지는 상품등록 시 정사각형으로 잘려서 등록됩니다.</p>
            </div>
          </section>
          <section className="productInfo">
              <div className="title"><h3>글 제목*</h3><input name="title" type="text" placeholder="글 제목을 입력해주세요" onChange={onClickPostContent} value={title} /><p className="letterCount">({}/{})</p></div>
              <div className="introduce"><h3>글 설명</h3><textarea name="content" placeholder="글 설명을 입력해주세요" onChange={onClickPostContent} value={content}/><p>({}/{})</p></div>
          </section>
          {selectedRadio === CO_BUYING_RADIO_ID ? 
          <section className="productPrice">
              <div className="price"><h3>가격*</h3><input name="price" onChange={onClickPostContent} type="text" placeholder="숫자만 입력해주세요" value={price} className="priceInput" /><p>원</p></div>
          </section> : ''
            }
          <section className="productLocation">
              <div className="location"><h3>거래지역*</h3><input name="transactionRegion" onChange={onClickPostContent} type="text" placeholder="거래지역을 입력해주세요(ex.대덕소프트웨어마이스터고)" value={transactionRegion} /></div>
          </section>
          <section className="productOpenChatting">
              <div className="openChatting"><h3>오픈채팅*</h3><input name="openChatLink" onChange={onClickPostContent} type="text" value={openChatLink} placeholder="오픈채팅방 링크를 입력해주세요" /></div>
          </section>
          <div className="completion"><button onClick={onSubmitPost}>완료</button></div>
      </section>
  );
}
export default Upload;