import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  Check,
  Menu,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  Volume2,
  X,
} from "lucide-react";
import "./styles.css";

const bears = [
  {
    name: "Гоша-Хохотун",
    size: "170 см",
    color: "Карамельный",
    price: "12 900 ₽",
    phrase: "Щекотно же!",
    position: "0% 0%",
    badge: "Хит объятий",
  },
  {
    name: "Соня-Шептунья",
    size: "140 см",
    color: "Молочный",
    price: "10 900 ₽",
    phrase: "Ещё пять минуточек…",
    position: "100% 0%",
    badge: "Самая мягкая",
  },
  {
    name: "Боря-Барабан",
    size: "200 см",
    color: "Какао",
    price: "15 900 ₽",
    phrase: "Ба-дум-тс!",
    position: "0% 50%",
    badge: "Ого, два метра!",
  },
  {
    name: "Кекс-Крутыш",
    size: "160 см",
    color: "Ириска",
    price: "11 900 ₽",
    phrase: "Я в домике!",
    position: "100% 50%",
    badge: "В очках",
  },
  {
    name: "Пончик-Праздник",
    size: "180 см",
    color: "Песочный",
    price: "13 900 ₽",
    phrase: "А торт будет?",
    position: "0% 100%",
    badge: "Душа компании",
  },
  {
    name: "Лапа-Обнимапа",
    size: "150 см",
    color: "Ванильный",
    price: "11 400 ₽",
    phrase: "Лови обнимашку!",
    position: "100% 100%",
    badge: "Подмигивает",
  },
];

const phrases = [
  "Ты сегодня — огонь! 🔥",
  "Обнимемся? Я уже готов!",
  "Ур-р-ра! Пора веселиться!",
  "Кто съел печенье? Не я!",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [phrase, setPhrase] = useState("Нажми мне на пузо!");
  const [cart, setCart] = useState(0);
  const [toast, setToast] = useState("");

  const makeBearTalk = () => {
    let next = phrases[Math.floor(Math.random() * phrases.length)];
    if (next === phrase)
      next = phrases[(phrases.indexOf(next) + 1) % phrases.length];
    setPhrase(next);
  };

  const addToCart = (name) => {
    setCart((value) => value + 1);
    setToast(`${name} запрыгнул в корзину!`);
    window.setTimeout(() => setToast(""), 2600);
  };

  return (
    <>
      <header className="site-header">
        <a
          className="logo"
          href="#top"
          aria-label="Громкие медведи — на главную"
        >
          <span className="logo-face">ʕ•ᴥ•ʔ</span>
          <span>
            Громкие
            <br />
            медведи
          </span>
        </a>
        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Основная навигация"
        >
          <a href="#top" onClick={() => setMenuOpen(false)}>
            Главная
          </a>
          <a href="#catalog" onClick={() => setMenuOpen(false)}>
            Каталог
          </a>
          <a href="#how" onClick={() => setMenuOpen(false)}>
            Как говорят?
          </a>
        </nav>
        <button
          className="cart-button"
          aria-label={`Корзина, товаров: ${cart}`}
        >
          <ShoppingBag size={21} /> <span>Корзина</span>
          <b>{cart}</b>
        </button>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span>●</span> Не просто плюшевые
            </p>
            <h1>
              Большие.
              <br />
              <em>Говорящие.</em>
              <br />
              Обнимательные!
            </h1>
            <p className="hero-lead">
              Нажимаешь на лапу — а медведь шутит, поздравляет и зовёт на битву
              подушками.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#catalog">
                Выбрать медведя <ArrowDown size={20} />
              </a>
              <span className="delivery-note">
                <Check size={18} /> Доставка по России
              </span>
            </div>
          </div>

          <div className="bear-stage" aria-label="Говорящий плюшевый медведь">
            <div className="speech-bubble" aria-live="polite">
              {phrase}
            </div>
            <div className="sound sound-one">ХА!</div>
            <div className="sound sound-two">БУ!</div>
            <div className="big-bear">
              <span className="ear left" />
              <span className="ear right" />
              <div className="bear-head">
                <i className="eye left" />
                <i className="eye right" />
                <i className="muzzle">
                  <b />
                </i>
              </div>
              <div className="bear-body">
                <span className="bow">★</span>
              </div>
              <span className="arm left" />
              <span className="arm right" />
              <span className="foot left" />
              <span className="foot right" />
              <button className="belly-button" onClick={makeBearTalk}>
                <Volume2 size={25} />
                <span>ЖМИ!</span>
              </button>
            </div>
          </div>
          <div className="ticker">
            <span>Говорит 20+ фраз</span>
            <b>★</b>
            <span>Ростом с тебя</span>
            <b>★</b>
            <span>Очень мягкий</span>
            <b>★</b>
            <span>Батарейки внутри</span>
          </div>
        </section>

        <section className="catalog" id="catalog">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span>●</span> Медвежий состав
              </p>
              <h2>
                Кого берём
                <br />
                домой?
              </h2>
            </div>
            <p>
              Все умеют говорить. Все обожают обниматься. Но характер — у
              каждого свой.
            </p>
          </div>
          <div className="product-grid">
            {bears.map((bear, index) => (
              <article
                className={`product-card card-${(index % 3) + 1}`}
                key={bear.name}
              >
                <div className="product-image">
                  <span className="product-badge">{bear.badge}</span>
                  <div
                    className="product-art"
                    role="img"
                    aria-label={`Мультяшный плюшевый медведь ${bear.name}`}
                    style={{ backgroundPosition: bear.position }}
                  />
                  <span className="product-phrase">
                    <MessageCircle size={16} /> «{bear.phrase}»
                  </span>
                </div>
                <div className="product-info">
                  <div className="product-title">
                    <h3>{bear.name}</h3>
                    <strong>{bear.price}</strong>
                  </div>
                  <p>
                    {bear.size}
                    <span>•</span>
                    {bear.color}
                  </p>
                  <button onClick={() => addToCart(bear.name)}>
                    Забрать домой <ShoppingBag size={19} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="how" id="how">
          <div className="how-copy">
            <p className="eyebrow">
              <span>●</span> Секрет внутри
            </p>
            <h2>
              Пузо с<br />
              характером
            </h2>
            <p>
              В мягкой лапе спрятана кнопка. Одно нажатие — и начинается
              медвежье шоу.
            </p>
          </div>
          <ol className="steps">
            <li>
              <b>1</b>
              <div>
                <strong>Обними</strong>
                <span>Это обязательная часть инструкции.</span>
              </div>
            </li>
            <li>
              <b>2</b>
              <div>
                <strong>Нажми на лапу</strong>
                <span>Кнопка мягкая и безопасная.</span>
              </div>
            </li>
            <li>
              <b>3</b>
              <div>
                <strong>Слушай и хохочи</strong>
                <span>Больше 20 фраз и звуков.</span>
              </div>
            </li>
          </ol>
          <div className="quality-seal">
            <Sparkles />
            <strong>
              Проверено
              <br />
              объятиями
            </strong>
            <span>5+</span>
          </div>
        </section>
      </main>

      <footer>
        <a className="logo footer-logo" href="#top">
          <span className="logo-face">ʕ•ᴥ•ʔ</span>
          <span>
            Громкие
            <br />
            медведи
          </span>
        </a>
        <p>Большие друзья для шумных приключений.</p>
        <a href="tel:+78005553535">8 800 555-35-35</a>
      </footer>
      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
