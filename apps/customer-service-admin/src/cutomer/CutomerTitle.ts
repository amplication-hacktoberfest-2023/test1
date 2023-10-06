import { Cutomer as TCutomer } from "../api/cutomer/Cutomer";

export const CUTOMER_TITLE_FIELD = "firstName";

export const CutomerTitle = (record: TCutomer): string => {
  return record.firstName?.toString() || String(record.id);
};
