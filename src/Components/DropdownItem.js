export default function DropdownItem(props){
    return(
        <li className="dropdownItem">
            <a>{props.text}</a>
        </li>
    );
};