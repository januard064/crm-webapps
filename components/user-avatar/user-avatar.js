
import Image from "next/image"

import Styles from './user-avatar.module.css'

const UserAvatar = (props) => {

    const { style, imageUrl } = props

    return (
        <div className={Styles.imageContainer} style={...style}>
            <Image alt="user-profile" className={Styles.image} src={imageUrl} width={400} height={400} />
        </div>

    )
}

export default UserAvatar