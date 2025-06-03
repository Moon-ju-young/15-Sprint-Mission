import { useEffect, useRef, useState, type ButtonHTMLAttributes, type MouseEventHandler } from "react";
import icKebab from "../assets/ic_kebab.svg";
import styles from "./Dropdown.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    onClickEdit?: MouseEventHandler;
    onClickDelete?: MouseEventHandler;
}

function Dropdown({ className='', onClickEdit, onClickDelete, ...props }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLButtonElement>(null);
    
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && e.target instanceof Node && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
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