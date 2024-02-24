import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Contact book</h1>
      <h3>In developing:</h3>
      <ul>
        <li>
          - filtering will be performed not only by name but also by phone
          number
        </li>
        <li>- the function of editing contacts will be added.</li>
      </ul>
    </div>
  );
}
