import { useState } from 'react';
import icArrowDown from '../assets/ic_arrow_down.svg';
import icSort from '../assets/ic_sort.svg';
import styles from './Dropdown.module.css';

const option = { favorite: "좋아요순", recent: "최신순" }

function Dropdown({ state, setState, mode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <button 
            className={`${styles.dropdown} ${(mode === "Mobile" && styles.small)}`} 
            onClick={() => setIsOpen((prev) => !prev)} 
            onBlur={() => setIsOpen(false)}
        >
            { mode !== "Mobile" 
                ? <> <div>{option[state]}</div> <img src={icArrowDown} /> </>
                : <img src={icSort} /> }
            { isOpen &&
                <ul className={styles.dropdownList}>
                    <li onClick={() => setState("recent")}>{option.recent}</li>
                    <li onClick={() => setState("favorite")}>{option.favorite}</li>
                </ul>}    
        </button>
    );
}

export default Dropdown;