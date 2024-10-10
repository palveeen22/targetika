import React from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '../../components/ui/input';
import { Select } from '../../components/ui/select';
import { Button } from '../../components/ui/button';
import { useProductForm } from './useProductForm';
import { characteristicOptions, typeOptions } from './productFormOptions';

export const ProductForm: React.FC = () => {
  const { form, fields, append, remove, onSubmit } = useProductForm();
  const { register, control, handleSubmit, formState: { errors }, watch } = form;

  const watchCharacteristics = watch("characteristics");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register("productName")}
          placeholder="Название товара"
        />
        {errors.productName && <p className="text-red-500">{errors.productName.message}</p>}
      </div>

      <div>
        <Input
          {...register("productCode")}
          placeholder="Код товара"
        />
        {errors.productCode && <p className="text-red-500">{errors.productCode.message}</p>}
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2">
          <Controller
            name={`characteristics.${index}.name`}
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
              >
                <Select.Trigger>
                  <Select.Value placeholder="Выберите характеристику" />
                </Select.Trigger>
                <Select.Content>
                  {characteristicOptions.map((option) => (
                    <Select.Item key={option.value} value={option.value}>
                      {option.label}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select>
            )}
          />
          {errors.characteristics?.[index]?.name && (
            <p className="text-red-500">{errors.characteristics[index].name.message}</p>
          )}

          <Controller
            name={`characteristics.${index}.type`}
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
              >
                <Select.Trigger>
                  <Select.Value placeholder="Выберите тип" />
                </Select.Trigger>
                <Select.Content>
                  {typeOptions[watchCharacteristics[index]?.name]?.map((option) => (
                    <Select.Item key={option.value} value={option.value}>
                      {option.label}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select>
            )}
          />
          {errors.characteristics?.[index]?.type && (
            <p className="text-red-500">{errors.characteristics[index].type.message}</p>
          )}

          <Button type="button" onClick={() => remove(index)}>Удалить характеристику</Button>
        </div>
      ))}

      <Button
        type="button"
        onClick={() => append({ name: '', type: '' })}
      >
        Добавить характеристику
      </Button>

      {errors.characteristics && <p className="text-red-500">{errors.characteristics.message}</p>}

      <Button type="submit">Отправить</Button>
    </form>
  );
};