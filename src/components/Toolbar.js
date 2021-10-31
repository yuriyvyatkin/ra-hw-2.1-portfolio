var classNames = require('classnames');

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  return (
    <nav className="nav">
      <ul className="nav-menu">
        {filters.map((filter, index) => {
          const anchorClass = classNames({
            'nav-link': true,
            active: filter === selected,
          });

          return (
            <li className="nav-item" key={`${index}${filter}`}>
              <a
                href="#0"
                className={anchorClass}
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
