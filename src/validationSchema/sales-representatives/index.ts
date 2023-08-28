import * as yup from 'yup';

export const salesRepresentativeValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  sales_manager_id: yup.string().nullable().required(),
});
