import Styles from './title-separator.module.css'

const SubTitleSeparator = (props) => {

    const { title,style } = props

    return (
        <div className={Styles.container} style={...style}>
            <div className={Styles.title} style={{ fontSize: '18px' }}>
                {title}
            </div>
        </div>
    )
}

export default SubTitleSeparator