import { SalesManagerInterface } from 'interfaces/sales-manager';
import { SalesRepresentativeInterface } from 'interfaces/sales-representative';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;
  created_at: string;
  updated_at: string;

  sales_manager: SalesManagerInterface[];
  sales_representative: SalesRepresentativeInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  roq_user_id?: string;
  tenant_id?: string;
}
