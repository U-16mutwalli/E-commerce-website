import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import GenericInputField from '../Forms/Input/GenericInputField';
import GenericButton from '../Forms/Buttons/GenericButton';

const ProductForm: React.FC = () => {
  const methods = useForm(); // Minimal react-hook-form

  const onSubmit = (data: any) => {
    console.log('Submitted:', data);
    alert('Form submitted!');
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="mx-auto max-w-md space-y-4 rounded-md bg-white p-6 shadow-md"
      >
        <GenericInputField name="name" label="Product Name" />
        <GenericInputField name="price" label="Price" />
        <GenericInputField name="stock" label="Stock" />
        <GenericInputField name="category" label="Category" />
        <GenericInputField type="file" name="image" label="Image" />

        <div className="flex justify-center">
          <GenericButton
            type="submit"
            className="mt-4"
            children="Save Product"
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default ProductForm;
