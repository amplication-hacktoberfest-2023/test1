import { CutomerWhereInput } from "./CutomerWhereInput";
import { CutomerOrderByInput } from "./CutomerOrderByInput";

export type CutomerFindManyArgs = {
  where?: CutomerWhereInput;
  orderBy?: Array<CutomerOrderByInput>;
  skip?: number;
  take?: number;
};
