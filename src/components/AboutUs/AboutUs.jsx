import React from "react";
import "./AboutUs.css";
import Logo from "../../Image/Logo.jpg"
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="Sidebar-About">
        <img src={Logo} alt="logo" width="120px" />
        <br />
        <span>Главная О компании</span>
        <h2>О компании</h2>
        <p>
          <h3>Сезоны</h3>
          <span>Все новые сезоны</span>
        </p>
        <p>19 октября 2022 Новое поступление новых Томов «Мёртвые ду́ши»</p>
        <p>
          <h3>Страна</h3>
          <span>Япония</span>
        </p>
        <p>
          Творческий путь автора оригинальной манги Коёхару Готогэ напоминает
          карьерный взлет Кайю Сирай. Обе создательницы графических работ
          публиковали свои произведения в японском журнале Shonen Jump, начинали
          с коротких рассказов, а потом молниеносно обретали славу благодаря
          первой длинной истории
        </p>
        <p>Видеообзор на произведение 2020</p>
        <p>поступление Новой Статьи 2023г </p>
      </div>
      <div className="Content-About">
        <p>
          Mango Books – это современный магазин товаров для Книг и Комиксов в
          Бишкеке. Мы представляем широкий выбор товаров для самых разнообразных
          видов жанров:фантастика , манга , фентези , драма, Детектив ,
          бестселлеры, шитье и многое другое. Ассортимент магазина постоянно
          расширяется , а в продажу регулярно поступают новинки от лучших
          брендов. Мы стараемся подбирать товары с учетом интересов клиентов
          различного уровня, как профессионалов, так новичков и любителей.
        </p>
        <p>
          Неоспоримым достоинством "Mango Books" является оптимальное
          соотношение цены и качества. Мы сотрудничаем с проверенными,
          зарекомендовавшими себя производителями и торговыми марками.
        </p>
        <p>
          <p>
            Заботясь о наших клиентах, мы стараемся сделать все, чтобы процесс
            выбор товара был максимально простым и удобным:
          </p>
          <ul>
            <li>
              Магазин Mango Books работает по принципу самообслуживания, весь
              товар можно посмотреть и потрогать, а в случае, если у вас
              возникнут вопросы, на них всегда с радостью ответят наши
              квалифицированные консультанты.
            </li>
            <li>
              Ознакомиться со всем нашим ассортиментом и сделать заказ, вы
              можете не выходя из дома через наш интернет-магазин.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
