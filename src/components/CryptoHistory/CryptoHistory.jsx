import { formatDate } from 'helpers/formatDate';
import style from './CryptoHistory.module.css'


export const CryptoHistory = ({items}) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, i) => (
          <tr className={style.tr} key={item.id}>
            <td className={style.td}>{i + 1}</td>
            <td className={style.td}>{item.price}</td>
            <td className={style.td}>{item.amount}</td>
            <td className={style.td}>{formatDate (item.date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
