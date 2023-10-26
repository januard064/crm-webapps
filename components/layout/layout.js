import styles from './layout.module.css'

const Layout = (props) => {

    return (
        <div className={styles.layoutContainer}>
            {props.children}
        </div>
    )
}

export default Layout