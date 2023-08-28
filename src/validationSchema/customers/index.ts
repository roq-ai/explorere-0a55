import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  sales_representative_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
