import PropTypes from "prop-types"
import s from './transactions.module.css'


export default function TransactionHistory({ items }) {
    return (
    <table className={s.transactionHistory}>
    <thead className={s.thead}>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
    </thead>

    <tbody>
        {items.map(item => {
            return (
                <tr key = {item.id} className={s.trow}>
                    <td>{item.type}</td>
                    <td>{ item.amount }</td>
                    <td>{ item.currency }</td>
                </tr>
            )
        })}
    </tbody>
    </table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
       