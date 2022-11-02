import { useState } from "react";
import styles from "../../styles/components/home/FilterAndSearch.module.css";

interface Props {
  uniqueFamilies: string[];
  uniqueFullNames: string[];
  onFilter: (e: React.FormEvent<HTMLSelectElement>) => void;
  onCleanFilter: () => void;
  onSearch: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const FilterAndSearch: React.FC<Props> = ({
  uniqueFamilies,
  uniqueFullNames,
  onFilter,
  onCleanFilter,
  onSearch,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string[]>(uniqueFullNames);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target: string = (e.target as HTMLInputElement).value;
    if (target !== null) {
      const filter: string[] = uniqueFullNames.filter(fullName =>
        fullName.toLowerCase().startsWith(target.toLowerCase())
      );
      filter.length > 0 && setSuggestions(filter);
    }
  };

  return (
    <form className={styles.side__form}>
      <label>Search a character</label>
      <input
        type="text"
        onFocus={() => setIsFocus(true)}
        onBlur={() => {
          setIsFocus(false);
          setSuggestions(uniqueFullNames);
        }}
        onChange={e => onChange(e)}
      />
      {isFocus ? (
        <ul className={styles.suggestions}>
          {suggestions.length > 0 &&
            suggestions.map((fullName, id) => {
              return (
                <li
                  key={id}
                  className={styles.suggestions__item}
                  onMouseDown={onSearch}
                >
                  {fullName}
                </li>
              );
            })}
        </ul>
      ) : (
        ""
      )}
      <label> Filter by family</label>
      <select name="families" id="" onChange={onFilter}>
        <option value="">--Choose-a-family</option>
        {uniqueFamilies.map((family, i: number) => (
          <option key={i} value={family}>
            {family}
          </option>
        ))}
      </select>
      <button onClick={onCleanFilter}>Clean filter</button>
    </form>
  );
};

export default FilterAndSearch;
