import { Nullable } from "@tryghost/content-api";
import { format } from "date-fns";

export const getDateFormat = (date?: Nullable<string>) => {
  return date ? format(new Date(date), "dd/MM/yyyy") : "";
};
