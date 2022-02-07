import { useState, useEffect } from "react";

function getLocalStorageValue(key: string, initialValue: any) {
  const savedValue = JSON.parse(localStorage.getItem(key) || "{}");
  if (!localStorage.getItem(key)) {
    if (initialValue instanceof Function) {
      return initialValue();
    }
    return initialValue;
  } else {
    return savedValue;
  }
}

export default function usePersistedState<S>(key: string, initialValue: S) {
  const [value, setValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [value]);

  return [value, setValue];
}
