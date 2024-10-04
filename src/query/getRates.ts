import { TRate } from '@/domain/entities/Rate';

import { api } from '@/services/api';

export const getRates = async (): Promise<Record<string, TRate>> => {
  const response = await api.get('/usd.json');
  return response.data;
};
