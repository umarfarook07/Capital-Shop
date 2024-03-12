import './MenuRow.css'; 

const MenuRow = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <section className="menu-row">
      <div className="menu-div">
        <button className="menu-btn" onClick={toggleMenu}>
          MENU<i className='bx bx-menu'></i>
        </button>
      </div>
      {isMenuVisible && (
        <ul className="menu-list">
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
          <li><a href="#">Item 4</a></li>
        </ul>
      )}
    </section>
  );
};

export default MenuRow;