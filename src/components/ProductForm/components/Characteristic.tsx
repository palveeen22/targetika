import { Controller, FieldError, UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { characteristicOptions, typeOptions, CharacteristicName } from '../constants';
import { ProductFormValues } from '../hooks/productFormSchema';
import { ErrorMessage } from '@/components/ErrorMessage';

type TProps = {
  index: number;
  form: UseFormReturn<ProductFormValues>;
  remove: (index: number) => void;
};

export const Characteristic = ({ index, form, remove }: TProps) => {
  const { register, control, formState: { errors }, watch } = form;
  const watchCharacteristics = watch("characteristics");

  return (
    <div className="space-y-2">
      <Controller
        name={`characteristics.${index}.name`}
        control={control}
        render={({ field }) => (
          <>
            <Select
              onValueChange={(value: string) => {
                if (value === 'custom') {
                  field.onChange('');
                } else {
                  field.onChange(value);
                }
              }}
              value={field.value}
            >
              <SelectTrigger className='p-5'>
                <SelectValue placeholder="Выберите характеристику" />
              </SelectTrigger>
              <SelectContent
                className="bg-white border border-gray-300 rounded-md shadow-lg"
              >
                {characteristicOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {(field.value === 'custom' || !characteristicOptions.some(option => option.value === field.value)) && (
              <>
                <p className='text-center text-gray-400 text-sm'>---- или ----</p>
                <Input
                  {...register(`characteristics.${index}.name`)}
                  placeholder="Введите новую характеристику"
                  className="mt-2 p-5"
                />
              </>
            )}
          </>
        )}
      />
      <ErrorMessage error={errors.characteristics?.[index]?.name} />

      <Controller
        name={`characteristics.${index}.type`}
        control={control}
        render={({ field }) => (
          <>
            <Select
              onValueChange={(value) => {
                if (value === 'custom') {
                  field.onChange('');
                } else {
                  field.onChange(value);
                }
              }}
              value={field.value}
            >
              <SelectTrigger className='p-5'>
                <SelectValue placeholder="Выберите тип" />
              </SelectTrigger>
              <SelectContent
                className="bg-white border border-gray-300 rounded-md shadow-lg"
              >
                {typeOptions[watchCharacteristics[index]?.name as CharacteristicName]?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
                <SelectItem value="custom">Другое</SelectItem>
              </SelectContent>
            </Select>
            {(field.value === 'custom' || !typeOptions[watchCharacteristics[index]?.name as CharacteristicName]?.some(option => option.value === field.value)) && (
              <>
                <p className='text-center text-gray-400 text-sm'>---- или ----</p>
                <Input
                  {...register(`characteristics.${index}.type`)}
                  placeholder="Введите новый тип"
                  className="mt-2 p-5"
                />
              </>
            )}
          </>
        )}
      />
      <ErrorMessage error={errors.characteristics?.[index]?.type as FieldError} />

      <Button
        type="button"
        onClick={() => remove(index)}
        className='border border-[#8D7FC7] p-5 mt-10 text-[#8D7FC7]'
      >
        Удалить характеристику
      </Button>
    </div>
  );
};