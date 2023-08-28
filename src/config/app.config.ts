interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Guest'],
  tenantRoles: ['Sales Manager', 'Sales Representative', 'Admin', 'Customer'],
  tenantName: 'Organization',
  applicationName: 'Explorere',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
