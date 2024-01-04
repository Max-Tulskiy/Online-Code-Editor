import { useState, useEffect } from 'react';

export default function useLocalStorage (key, initialValue) {
  // Попытка получить значение из localStorage
  const storedValue = localStorage.getItem(key);
  // Использование initialValue, если значение в localStorage не найдено
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Состояние для хранения текущего значения
  const [value, setValue] = useState(initial);

  // Эффект для сохранения значения в localStorage при его изменении
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};



