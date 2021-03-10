import Bolit from "./Bolit";
import bolLamp from "../assets/svg/bolLamp.svg";
import bolFinger from "../assets/svg/bolFinger.svg";
import bolMedal from "../assets/svg/bolMedal.svg";

function Bolits() {

  const descriptionBolit = [
    {
      img: bolLamp,
      title: 'Воплощаем ваши идеи',
      description: 'Делаем мебель на основе ваших предпочтений и желаний. Получаете именно то, что хотите.',
    },
    {
      img: bolFinger,
      title: 'Делаем уникальную мебель',
      description: 'Мебель сделанная специально для вас, будет подчеркивать вашу индивидуальность и стиль.',
    },
    {
      img: bolMedal,
      title: 'Обеспечиваем премиум качество',
      description: 'Благодаря 25 летнему опыту работы с мебелью учитываем все детали. Заказываем лучшие материалы по всеми миру.',
    },
  ]

  return (
    <div className="bolits">
      <div className="container">
        <div className="bolits__wrapper">
          {descriptionBolit.map(item => <Bolit key={`${item.title}`} {...item} />)}
        </div>
      </div>
    </div>
  );
}

export default Bolits;
