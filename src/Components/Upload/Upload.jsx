import React from 'react';
import './Upload.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
function Upload(props){
    const {uploadType} = props;
  return(
      <section className="uploadPage">
          <div className="introducing"><h1>게시물 올리기</h1><p>*은 필수항목입니다</p></div>
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
              <div className="title"><h3>글 제목*</h3><input type="text" placeholder="글 제목을 입력해주세요" /><p className="letterCount">(0/20)</p></div>
              <div className="introduce"><h3>글 설명</h3><textarea placeholder="글 설명을 입력해주세요"/><p>(0/550)</p></div>
          </section>
          <section className="productPrice">
              <div className="price">가격*</div><input type="text" placeholder="숫자만 입력해주세요" />원
          </section>
      </section>
  );
}
export default Upload;