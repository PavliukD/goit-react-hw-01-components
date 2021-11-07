import PropTypes from "prop-types"
import s from './FriendsListItem.module.css'

export default function FriendsListItem({ friendsList }) {
    return (
        friendsList.map(friend => {
        return (
            <li className={s.item} key = {friend.id}>
                <span className={`${s.status} ${friend.isOnline && s.online}`}></span>
                <img className={s.avatar} src={friend.avatar} alt={friend.name} width="48" />
                <p className={s.name}>{friend.name}</p>
            </li>
            )
        })
    )
}

FriendsListItem.propTypes = {
  friendsList: PropTypes.arrayOf(PropTypes.object),
};