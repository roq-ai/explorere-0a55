import { SalesRepresentativeInterface } from 'interfaces/sales-representative';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface SalesManagerInterface {
  id?: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  sales_representative?: SalesRepresentativeInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    sales_representative?: number;
  };
}

export interface SalesManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
}
