import friends from './FriendsList.json'
import FriendsListItem from '../FriendsListItem/FriendsListItem'
import s from './FriendsList.module.css'

export default function FriendsList() {
    return (
        <ul className={s.friendList}>
            <FriendsListItem friendsList = {friends} />
        </ul>
    )
}
