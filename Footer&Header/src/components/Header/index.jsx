import styles from "./Header.module.css";

export const Header = () =>{
    return(
        <header className={styles.header}>
            <span>CedupFlix</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    );
}