import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TRate } from '@/domain/entities/Rate';

import { getRates } from '@/query/getRates';

type RateStore = {
  rates: TRate[];
  isLoading: boolean;
  fetchRates: () => Promise<void>;
};

export const useRateStore = create<RateStore>()(
  persist(
    set => ({
      isLoading: true,
      rates: [] as TRate[],
      fetchRates: async () => {
        try {
          set({ isLoading: true });
          const data = await getRates();
          const rates = Object.values(data);
          set({ rates });
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'rate-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
