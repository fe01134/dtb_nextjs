import styles from "../styles/Present.module.css"
export default function Present(){
    return(
        <div>
            <div className={styles.present}>
             <div className={styles.cover}></div>
                <div className={styles.body}>
                    <div className={styles.ribbon2}></div> 
                </div> 
                <div className={styles.ribbon1}></div>

            </div>
        </div>
    )
}