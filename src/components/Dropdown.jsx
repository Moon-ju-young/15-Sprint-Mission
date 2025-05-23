import { useEffect, useRef, useState } from "react";
import icKebab from "../assets/ic_kebab.svg";
import styles from "./Dropdown.module.css";

function Dropdown({ className='', onClickEdit, onClickDelete, ...props }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsOpen(false);
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);;
    }, []);

    return (<button type="button" className={styles.dropdown+' '+className} ref={dropdownRef} onClick={() => setIsOpen((prev) => !prev)} {...props}>
        <img src={icKebab} />
        {isOpen && <div className={styles.list}>
            <input type="button" value="수정하기" onClick={onClickEdit} />
            <input type="button" value="삭제하기" onClick={onClickDelete}/>
        </div>}
    </button>);
}

export default Dropdown;