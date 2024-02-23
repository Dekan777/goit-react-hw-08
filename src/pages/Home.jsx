import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Contact book</h1>
      <h3>In developing:</h3>
      <p>
        - filtering will be performed not only by name but also by phone number
        - the function of editing contacts will be added.
      </p>
    </div>
  );
}
