import { TRate } from "@/domain/entities/Rate";

export const sortRatesByConversion = (rates: TRate[]) => {
  return rates.sort((a, b) => b.rate - a.rate);
};