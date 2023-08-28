const mapping: Record<string, string> = {
  customers: 'customer',
  guests: 'guest',
  organizations: 'organization',
  'sales-managers': 'sales_manager',
  'sales-representatives': 'sales_representative',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
