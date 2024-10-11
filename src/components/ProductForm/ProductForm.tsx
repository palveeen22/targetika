import {FieldError } from 'react-hook-form';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { useProductForm } from './hooks/useProductForm';
import { ErrorMessage } from '../ErrorMessage';
import { Characteristic } from './components/Characteristic';
import { ProductFormValues } from './hooks/productFormSchema';

type TProps = {
  onSubmit: (data: ProductFormValues) => void;
}

export const ProductForm = ({ onSubmit }: TProps) => {
  const { form, fields, append, remove } = useProductForm();
  const { register, handleSubmit, formState: { errors } } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
      {/* product name input */}
      <div>
        <Input
          {...register("productName")}
          placeholder="Название товара"
          className='p-5 placeholder:text-sm'
        />
        <ErrorMessage error={errors.productName} />
      </div>

      {/* product code input */}
      <div>
        <Input
          {...register("productCode")}
          placeholder="Код товара"
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '');
            e.target.value = `A2-${value}`;
            form.setValue("productCode", value);
          }}
          className='p-5 placeholder:text-sm'
        />
        <ErrorMessage error={errors.productCode} />
      </div>
      
        {/* select name input */}
        {fields.map((field, index) => (
        <Characteristic key={field.id} index={index} form={form} remove={remove} />
      ))}

      <div className='flex justify-between gap-4 items-center'>
        <div className='flex flex-col'>
          {Array.isArray(errors.characteristics) ? (
            errors.characteristics.map((error, index) => (
              <ErrorMessage key={index} error={error as FieldError} />
            ))
          ) : (
            <ErrorMessage error={errors.characteristics as FieldError} />
          )}
          <Button
            type="button"
            onClick={() => append({ name: '', type: '' })}
            className='bg-[#8D7FC7]  p-5 text-white hover:bg-white hover:text-[#8D7FC7]'
          >
            Добавить характеристику
          </Button>
        </div>
      </div>
      <Button type="submit" className='bg-[#8D7FC7] p-5 mt-5 text-white hover:bg-white hover:text-[#8D7FC7] mr-auto'>Отправить</Button>
    </form>
  );
};