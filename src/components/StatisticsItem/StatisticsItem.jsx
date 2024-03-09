import { IconContext } from 'react-icons';
import style from './Statistics.module.css';

export const StatisticsItem = ({ title, total, img }) => {
  return (
    <>
      <IconContext.Provider
        value={{ color: 'blue', className: 'global-class-name', size: '1.5em' }}
      >
        {img}
      </IconContext.Provider>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};
