import { ConnectButton } from "web3uikit"
import styles from "../styles/Home.module.css"

export default function Header() {
    return (
        <nav className={styles.Header}>
            <h1 className={styles.textHeader}> Eth Bank </h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}