import PropTypes from "prop-types"

export default function Statistics({ title, stats }) {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}

            <ul className="stat-list">
                {stats.map((statItem) => {
                    return (
                        <li className="item" key = {statItem.id}>
                            <span className="label">{ statItem.label }</span>
                            <span className="percentage">{ statItem.percentage}</span>
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