import Styles from './title-separator.module.css'

const TitleSeparator = (props) => {

    const { title } = props

    return (
        <div className={Styles.container}>
            <div className={Styles.title}>
                CRM
            </div>
        </div>
    )
}

export default TitleSeparator