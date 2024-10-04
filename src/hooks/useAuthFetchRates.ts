import { useEffect } from "react";

import { useRateStore } from "@/store/useRateStore";

export const useAutoFetchRates = () => {
  const fetchRates = useRateStore((state) => state.fetchRates);

  useEffect(() => {
    fetchRates();

    const interval = setInterval(() => {
      fetchRates();
    }, 10000);

    return () => clearInterval(interval);
  }, []);
};
