import { CustomerInterface } from 'interfaces/customer';
import { UserInterface } from 'interfaces/user';
import { SalesManagerInterface } from 'interfaces/sales-manager';
import { GetQueryInterface } from 'interfaces';

export interface SalesRepresentativeInterface {
  id?: string;
  user_id: string;
  sales_manager_id: string;
  created_at?: any;
  updated_at?: any;
  customer?: CustomerInterface[];
  user?: UserInterface;
  sales_manager?: SalesManagerInterface;
  _count?: {
    customer?: number;
  };
}

export interface SalesRepresentativeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  sales_manager_id?: string;
}
