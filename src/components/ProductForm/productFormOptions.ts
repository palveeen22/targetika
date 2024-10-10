export const characteristicOptions = [
  { value: "Цвет", label: "Цвет" },
  { value: "Прочность", label: "Прочность" },
  { value: "Тип упаковки", label: "Тип упаковки" },
] as const;

export type CharacteristicName = typeof characteristicOptions[number]['value'];

export const typeOptions: Record<CharacteristicName, { value: string; label: string }[]> = {
  "Цвет": [
    { value: "Красный", label: "Красный" },
    { value: "Синий", label: "Синий" },
    { value: "Зеленый", label: "Зеленый" },
  ],
  "Прочность": [
    { value: "Хрупкое", label: "Хрупкое" },
    { value: "Взрывоопасное", label: "Взрывоопасное" },
  ],
  "Тип упаковки": [
    { value: "Коробка", label: "Коробка" },
    { value: "Пакет", label: "Пакет" },
  ],
};