export const getFirstError = (field?: string[]) =>
  Array.isArray(field) && field.length > 0 ? field[0] : undefined;
