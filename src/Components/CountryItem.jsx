import styles from "./CountryItem.module.css";
import useFlagImageUrl from "../hooks/useFlagImageUrl";

function CountryItem({ country }) {
  const flagUrl = useFlagImageUrl(country.emoji);

  return (
    <li className={styles.countryItem}>
      <span> {flagUrl && <img src={flagUrl} alt="flag" />}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
