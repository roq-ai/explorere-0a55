import axios from 'axios';
import queryString from 'query-string';
import { SalesManagerInterface, SalesManagerGetQueryInterface } from 'interfaces/sales-manager';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSalesManagers = async (
  query?: SalesManagerGetQueryInterface,
): Promise<PaginatedInterface<SalesManagerInterface>> => {
  const response = await axios.get('/api/sales-managers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSalesManager = async (salesManager: SalesManagerInterface) => {
  const response = await axios.post('/api/sales-managers', salesManager);
  return response.data;
};

export const updateSalesManagerById = async (id: string, salesManager: SalesManagerInterface) => {
  const response = await axios.put(`/api/sales-managers/${id}`, salesManager);
  return response.data;
};

export const getSalesManagerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/sales-managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSalesManagerById = async (id: string) => {
  const response = await axios.delete(`/api/sales-managers/${id}`);
  return response.data;
};
