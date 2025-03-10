import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <h1>Мое резюме</h1>
      <section>
        <h2>Контакты</h2>
        <p>Email: my@gmail.com</p>
        <p>
          GitHub:{" "}
          <a href="https://github.com">github.com</a>
        </p>
      </section>
      <section>
        <h2>Образование</h2>
        <p>Моя школа</p>
        <p>
          Поволжский государственный технологический университет, 4 курс, высшее
          неоконченное
        </p>
      </section>
    </div>
  );
}