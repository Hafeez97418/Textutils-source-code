function Alert(props) {
   
    return (props.alert && <div className={`alert  ${props.alert.type}`}>
        {props.alert.message}
    </div>);
}
export default Alert;