import { Book } from "./book";

export interface BookResponse{
  code: number;
  data: Book[];
  status: string;
  total: number;
}
