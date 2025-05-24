import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";
import ButtonHeart from "../components/ButtonHeart";
import Button from "../components/Button";
import Input from "../components/Input";
import { getProduct, getProductComments } from "../api/api";
import getDurationString from "../utils/getDurationString";
import imgInquiryEmpty from "../assets/inquiry_empty.png";
import icProfile from "../assets/ic_profile.svg";
import icBack from "../assets/ic_back.svg";
import "./ItemProduct.css";

function ItemProduct() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [data, setData] = useState();
  const [comments, setComments] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [editingComment, setEditingComment] = useState(null);
  const [disabledComment, setDisabledComment] = useState(false);

  const handleChange = (e) => { setDisabled(!e.currentTarget.checkValidity()); };
  const handleChangeComment = (e) => { setDisabledComment(!e.currentTarget.checkValidity()); };
  
  useEffect(() => {
    (async () => setData(await getProduct({ productId })))();
  }, []);

  useEffect(() => {
    (async () => {
      const { list } = await getProductComments({ productId, limit: 9999 });
      setComments(list);
    })();
  }, []);

  return (<div id="item-product">
    <Nav type="profile" />
    <main>
      <section className="item">
        <div className="image" style={data?.images ? {backgroundImage: `url(${data.images[0]})`} : {}} />
        <div className="data">
          <div className="info">
            <Dropdown className="dropdown" />
            <div className="head">
              <div className="name">{data?.name}</div>
              <div className="price">{data?.price.toLocaleString()}원</div>
            </div>
            <h6>상품 소개</h6>
            <div className="description">{data?.description}</div>
            <h6>상품 태그</h6>
            <div className="tags">
              {data?.tags?.map((element) => <Tag key={element}>{element}</Tag>)}
            </div>
          </div>
          <div className="addition">
            <div className="owner">
              <img src={icProfile} />
              <div>
                <div className="nickname">{data?.ownerNickname}</div>
                <div className="date">
                  {(new Date(data?.createdAt).toLocaleDateString("ko-KR")).slice(0,-1)}
                </div>
              </div>
            </div>
            <div className="favorite">
              <ButtonHeart isActive={false}>{data?.favoriteCount}</ButtonHeart>
            </div>
          </div>
        </div>
      </section>
      <section className="comments">
        <form className="inquiry" onChange={handleChange}>
          <Input label="문의하기" name="comment" type="textarea" required placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." />
          <Button type="button" disabled={disabled}>등록</Button>
        </form>
        {comments.length
          ? <div className="list">
              {comments.map((comment, index) => (<form key={comment.id} onChange={handleChangeComment}>
                <div className="content">
                  {index === editingComment
                    ? <Input className="input" type="textarea" defaultValue={comment.content} required />
                    : <>
                      <span>{comment.content}</span>
                      <Dropdown onClickEdit={() => setEditingComment(index)} />
                    </>}
                </div>
                <div className="profile">
                  <div className="info">
                    <img src={comment.writer.image || icProfile} />
                    <div>
                      <div className="nickname">{comment.writer.nickname}</div>
                      <div className="date">{getDurationString(comment.updatedAt)+" 전"}</div>
                    </div>
                  </div>
                  {index === editingComment && 
                    <div className="buttons">
                      <button id="cancel" type="button" onClick={() => setEditingComment(null)}>
                        취소
                      </button>
                      <Button type="button" disabled={disabledComment} 
                        onClick={(e) => { 
                          setEditingComment(null); 
                          comment.content = e.target.closest("form").querySelector("textarea").value; 
                        }}
                      >
                        수정 완료
                      </Button>
                    </div>}
                </div>
              </form>))}
            </div>
          : <div className="no-inquiry">
              <img src={imgInquiryEmpty} />
              <div>아직 문의가 없어요</div>
            </div>}
        <Button styleType="medium" id="back" type="button" onClick={() => navigate("/items")}>
          목록으로 돌아가기<img src={icBack} />
        </Button> 
      </section>
    </main>
  </div>);
}

export default ItemProduct;