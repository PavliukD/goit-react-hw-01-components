import PropTypes from "prop-types"
import s from './statistics.module.css'

export default function Statistics({ title, stats }) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}

            <ul className={s.statList}>
                {stats.map((statItem) => {
                    return (
                        <li className={s.item} key = {statItem.id}>
                            <span className={s.label}>{ statItem.label }</span>
                            <span className={s.percentage}>{ statItem.percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,
}