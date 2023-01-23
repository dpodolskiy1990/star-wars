import s from './ErrorMessage.module.scss'
const ErrorMessage = () => {
    return(
        <div className={s.error}>
            <p>We cannot display data. <br />
            Come back when we fix it!</p>
        </div>
    )
}
export default ErrorMessage