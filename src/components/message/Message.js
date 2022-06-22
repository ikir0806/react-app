import style from './style.module.css';

export const Message = (props) => {
    return (
        <>
            <p className={style.background}>{props.text}</p>
        </>
    );
}  