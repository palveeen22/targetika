import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productFormSchema, ProductFormValues } from './productFormSchema';

export const useProductForm = () => {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      productName: '',
      productCode: '',
      characteristics: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "characteristics",
  });

  return {
    form,
    fields,
    append,
    remove,
  };
};