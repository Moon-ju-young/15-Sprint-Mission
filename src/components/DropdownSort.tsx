import { useEffect, useRef, useState, type ButtonHTMLAttributes, type Dispatch, type SetStateAction } from 'react';
import icArrowDown from '../assets/ic_arrow_down.svg';
import icSort from '../assets/ic_sort.svg';
import styles from './DropdownSort.module.css';

const option: { [id:string]: string } = { 
    recent: "최신순", 
    favorite: "좋아요순", 
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    state: any;
    setState: Dispatch<SetStateAction<any>>;
    mode: string;
}

function Dropdown({ state, setState, mode }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && e.target instanceof Node && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);;
    }, []);

    return (
        <button 
            type="button"
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