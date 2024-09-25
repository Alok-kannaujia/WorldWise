import { Link } from "react-router-dom";
import styles from "./Search.module.css";

import { useOutsideClick } from "../Hooks/useOutsideClick";

function Search({ query, setQuery, obj, svalue, setSValue }) {
  const isOpen = obj.length === 0;

  const ref = useOutsideClick(close);
  function close() {
    setQuery("");
  }
  function handleClear() {
    setQuery("");
    setSValue("");
  }
  function handleClose(d) {
    setQuery("");
    setSValue(d);
  }

  return (
    <div className={styles.search} ref={ref}>
      <i className="ri-search-line"></i>
      <input
        className={styles.input}
        type="text"
        placeholder="Search Places..."
        value={query || svalue}
        onChange={(e) => {
          setQuery(e.target.value);
          setSValue(e.target.value);
        }}
      />
      {!isOpen && (
        <div className={styles.nav}>
          {obj?.map((o) => (
            <Link
              to={`form?lat=${o?.lat}&lng=${o?.lon}`}
              onClick={() => handleClose(o?.display_name)}
              className={styles.link}
              style={{ textDecoration: "none" }}
            >
              <i className={`ri-search-line ${styles.i}`}></i> {o?.display_name}
            </Link>
          ))}
        </div>
      )}
      {(query || svalue) && (
        <button className={styles.btn} onClick={handleClear}>
          <i className="ri-close-line"></i>
        </button>
      )}
    </div>
  );
}

export default Search;
