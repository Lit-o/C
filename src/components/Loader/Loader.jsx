import style from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={style.loader}>
            <svg>
                <circle cx="50" cy="50" r="40" stroke="gold" strokeDasharray="78.5 235.5" strokeWidth="3"
                    fill="none" />
                <circle cx="50" cy="50" r="30" stroke="white" strokeDasharray="62.8 188.8" strokeWidth="3"
                    fill="none" />
                <circle cx="50" cy="50" r="20" stroke="gold" strokeDasharray="47.1 141.3" strokeWidth="3"
                    fill="none" />
            </svg>
        </div>
    )
}

export default Loader;