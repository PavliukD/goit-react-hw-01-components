import PropTypes from "prop-types"

export default function FriendsListItem({ friendsList }) {
    return (
        friendsList.map(friend => {
        return (
            <li className="item" key = {friend.id}>
                <span className="status"></span>
                <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
                <p className="name">{friend.name}</p>
            </li>
            )
        })
    )
}

FriendsListItem.propTypes = {
  friendsList: PropTypes.arrayOf(PropTypes.object),
};