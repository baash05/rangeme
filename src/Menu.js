import './Menu.css'

const Menu = ({ onChange }) => {
  return (
    <menu>
      <span className="logo">Photos</span>
      <div className="search_box">
        Find Images By Tag: <input className="tags" type="text" onChange={onChange}/>
      </div>
    </menu>
  );
}
export default Menu;
