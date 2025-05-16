import { useEffect, useRef, useState } from 'react';
import icArrowDown from '../assets/ic_arrow_down.svg';
import icSort from '../assets/ic_sort.svg';
import styles from './Dropdown.module.css';

const option = { recent: "최신순", favorite: "좋아요순", }

function Dropdown({ state, setState, mode }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsOpen(false);
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);;
    }, []);

    return (
        <button 
            className={`${styles.dropdown} ${(mode === "Mobile" && styles.small)}`} 
            onClick={() => setIsOpen((prev) => !prev)} 
            ref={dropdownRef}
        >
            { mode !== "Mobile" 
                ? <> <div>{option[state]}</div> <img src={icArrowDown} /> </>
                : <img src={icSort} /> }
            { isOpen &&
                <ul className={styles.dropdownList}>
                    {Object.entries(option).map(([key, value]) => (<li key={key}>
                        <input type="button" value={value} onClick={() => setState(key)} />
                    </li>))}
                </ul>}    
        </button>
    );
}

export default Dropdown;