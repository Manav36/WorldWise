// useFlagImageUrl.js
import { useMemo } from "react";

const useFlagImageUrl = (flagEmoji) => {
  const url = useMemo(() => {
    if (!flagEmoji) return null;

    const countryCode = Array.from(flagEmoji, (codeUnit) =>
      String.fromCharCode(codeUnit.codePointAt() - 127397).toLowerCase()
    ).join("");

    return `https://flagcdn.com/24x18/${countryCode}.png`;
  }, [flagEmoji]);

  return url;
};

export default useFlagImageUrl;
