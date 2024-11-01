import styles from './ButtonItem.module.css'

type Props = {
    onClick: ()=> void;
    content: string;
}

export const ButtonItem = ({onClick, content}: Props) => {
    return (
        <button
            className={styles.buttonStyle}
            onClick={onClick}
        >
            {content}
        </button>
    )
}