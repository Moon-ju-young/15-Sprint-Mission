import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Input from "../components/Input";
import Tag from "../components/Tag";
import icPlus from "../assets/ic_plus.svg";
import icX from "../assets/ic_X.svg";
import "./AddItem.css";

function AddItem () {
    const [itemImage, setItemImage] = useState(null);
    const [isWrong, setIsWrong] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [tags, setTags] = useState([]);
    const formRef = useRef();

    const checkIsValid = () => {
        setIsValid((!!tags.length && formRef.current.checkValidity()));
    }

    const handleChange = (e) => { 
        if (e.target.files && e.target.files[0]) {
            setItemImage(URL.createObjectURL(e.target.files[0]));
        }
    }

    const handleClick = () => {
        setIsWrong(false);
        setItemImage(null);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (e.target.value) {
                setTags((prev) => [...prev, e.target.value]);
                e.target.value = '';
            }
        }
    }

    useEffect(() => checkIsValid(), [tags]);

    return (<div id="additem">
        <Helmet>
            <title>중고마켓</title>
        </Helmet>
        <Nav type="profile" />
        <form ref={formRef} onChange={checkIsValid}>
            <div>
                <div className="head">
                    <div className="title">상품 등록하기</div>
                    <Button disabled={!isValid}>등록</Button>
                </div>
                <div className="label">상품 이미지</div>
                <div className="file-image">
                    <label htmlFor="file" onClick={() => setIsWrong(!!itemImage)}>
                        <img src={icPlus} />
                        <div>이미지 등록</div>
                    </label>
                    {itemImage && <section style={{ backgroundImage: `url(${itemImage})` }}>
                            <button type="button" onClick={handleClick}>
                                <img src={icX} />
                            </button>
                        </section>}
                    <input id="file" name="file" type="file" accept="image/*" onChange={handleChange} disabled={itemImage} />
                </div>
                {isWrong && <div className="wrong-message">*이미지 등록은 최대 1개까지 가능합니다.</div>}
            </div>
            <Input label="상품명" name="item-name" placeholder="상품명을 입력해주세요" required />
            <Input label="상품 소개" name="item-introduction" type="textarea" placeholder="상품 소개를 입력해주세요" required />
            <Input label="판매가격" name="price" placeholder="판매 가격을 입력해주세요" required />
            <Input label="태그" name="tag" placeholder="태그를 입력해주세요" onKeyDown={handleKeyDown}>
                <div className="tags">
                    {tags.map((element) => <Tag key={element}>{'#'+element}</Tag>)}
                </div>
            </Input>
        </form>
    </div>);
}

export default AddItem;