function Bolit({ title, description, img } ) {

  return <div className='bolits__item'>
    <img src={img} alt="" className="bolits__svg" />
    <h2 className="bolits__title">{title}</h2>
    <p className="bolits__desctiption">{ description }</p>
  </div>;
}

export default Bolit;
