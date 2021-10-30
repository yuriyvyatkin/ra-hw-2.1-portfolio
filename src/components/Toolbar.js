export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  return (
    <nav className="nav">
      <ul className="nav-menu">
        {filters.map((filter, index) => {
          return (
            <li className="nav-item" key={`${index}${filter}`}>
              <a
                href="#0"
                className={`nav-link ${filter === selected ? 'active' : ''}`}
                onClick={() => onSelectFilter(filter)}
              >
                {filter}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
