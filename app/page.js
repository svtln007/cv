import Image from "next/image";
import styles from "./page.module.css"; // Импортируем стили из модуля

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Мое резюме</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Контакты</h2>
        <p className={styles.sectionText}><strong>Имя:</strong> Александрова Анна Алексеевна</p>
        <p className={styles.sectionText}><strong>Возраст:</strong> 21 год</p>
        <p className={styles.sectionText}><strong>Email:</strong> my@gmail.com</p>
        <p className={styles.sectionText}>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/Anna1Alexandrova" className={styles.link}>github.com/Anna1Alexandrova</a>
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Опыт работы</h2>
        <p className={styles.sectionText}>
          <strong>Системный аналитик</strong> (1 год)
        </p>
        <ul className={styles.list}>
          <li>Анализ и формализация требований заказчиков.</li>
          <li>Разработка технической документации.</li>
          <li>Участие в проектировании архитектуры систем.</li>
          <li>Взаимодействие с командой разработки и тестирования.</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Образование</h2>
        <p className={styles.sectionText}>Моя школа</p>
        <p className={styles.sectionText}>
          Поволжский государственный технологический университет, 4 курс, высшее
          неоконченное
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Навыки</h2>
        <ul className={styles.list}>
          <li>Анализ и проектирование бизнес-процессов.</li>
          <li>Работа с требованиями (BPMN, Use Case, User Stories).</li>
          <li>Базовые знания SQL.</li>
          <li>Опыт работы с Jira, Confluence.</li>
          <li>Навыки работы в команде.</li>
        </ul>
      </section>
    </div>
  );
}