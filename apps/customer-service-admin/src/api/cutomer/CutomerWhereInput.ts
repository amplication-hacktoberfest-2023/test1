import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CutomerWhereInput = {
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
