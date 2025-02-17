import { ProductForm } from '@/components/ProductForm/ProductForm';
import AlertMessage from '@/components/AlertMessage';
import { useProduct } from '@/components/ProductForm/hooks';

const ProductPage = () => {
  const { showAlert, key, handleSubmit } = useProduct()

  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-8 md:px-0">
      <div className='flex flex-col items-center bg-white p-8 shadow-md max-w-xl w-full rounded-3xl overflow-hidden'>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Создание товара</h1>
        <AlertMessage show={showAlert} title='Успех' desc='Форма отправлена успешно' />
        <div className="w-full max-h-[calc(100vh-200px)] overflow-y-auto">
          <ProductForm key={key} onSubmit={handleSubmit} />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;