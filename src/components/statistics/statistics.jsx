import data from './data.json';
import css from './statistic.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => {
          const backgroundStyle = { backgroundColor: backgroundColor() };
          return (
            <li key={stat.id} className={`${css.item}`} style={backgroundStyle}>
              <span className="label">{stat.label}</span>
              <span className="percentage"> {stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function backgroundColor() {
  const color = `#${Math.floor(Math.random() * 12345)}`;
  return color;
}

function Table() {
  return (
    <div>
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}

export default Table;
