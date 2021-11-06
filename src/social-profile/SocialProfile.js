import PropTypes from "prop-types"
import s from './SocialProfile.module.css'

export default function SocialProfile({
    name = 'Username',
    tag,
    location,
    avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    stats = {
        followers: 0,
        views: 0,
        likes: 0,
    }}) {
    return (
        <div className="profile" key = {name}>
            <div className={s.description}>
                <img
                src={avatar}
                alt="Аватар пользователя"
                className="avatar"
                />
                <p className="name">{name}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
                </li>
                <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

SocialProfile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};