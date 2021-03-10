function HowWorkItem({ title, text, svg }) {
  return (
    <div className="howwork__item">
      <div className="howwork__item-inner">
        <div className="howwork__item-title">{title}</div>
        <div className="howwork__item-text">{text}</div>
      </div>
      <div className="howwork__item-img">
        <img src={svg} alt="" />
      </div>
    </div>
  );
}

export default HowWorkItem;
