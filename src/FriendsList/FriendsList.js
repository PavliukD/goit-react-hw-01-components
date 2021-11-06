
import friends from './FriendsList.json'
import FriendsListItem from '../FriendsListItem/FriendsListItem'

export default function FriendsList() {
    return (
        <ul className="friend-list">
            <FriendsListItem friendsList = {friends} />
        </ul>
    )
}
