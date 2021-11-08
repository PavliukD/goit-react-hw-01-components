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
        <div className={s.profile} key = {name}>
            <div className={s.description}>
                <img
                src={avatar}
                alt="Аватар пользователя"
                className={s.avatar}
                />
                <p className={s.name}>{name}</p>
                <p className={s.tag}>{tag}</p>
                <p className={s.location}>{location}</p>
            </div>

            <ul className={s.stats}>
                <li className = {s.statItem}>
                <span className={s.label}>Followers</span>
                <span className={s.quantity}>{stats.followers}</span>
                </li>
                <li className = {s.statItem}>
                <span className={s.label}>Views</span>
                <span className={s.quantity}>{stats.views}</span>
                </li>
                <li className = {s.statItem}>
                <span className={s.label}>Likes</span>
                <span className={s.quantity}>{stats.likes}</span>
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