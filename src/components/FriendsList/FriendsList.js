import PropTypes from "prop-types"
import s from './FriendsList.module.css'

export default function FriendsList({friends}) {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => {
                return (
                    <li className={s.item} key = {friend.id}>
                        <span className={`${s.status} ${friend.isOnline && s.online}`}></span>
                        <img className={s.avatar} src={friend.avatar} alt={friend.name} width="48" />
                        <p className={s.name}>{friend.name}</p>
                    </li>
                    )
            })}
        </ul>
    )
}

FriendsList.propTypes = {
    friendsList: PropTypes.arrayOf(PropTypes.object),
  };
