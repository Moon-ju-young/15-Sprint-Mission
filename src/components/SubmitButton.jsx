import { useNavigate } from "react-router-dom";

export default function SubmitButton ({ className, type="submit", link, children, disabled=true }) {
    const navigate = useNavigate();
    const onClick = (e) => {
        e.preventDefault();
        navigate(link);
    }
    return <button className={className} type={type} onClick={onClick} disabled={disabled}>{children}</button>
}