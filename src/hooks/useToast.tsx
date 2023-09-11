import toast, { Toaster } from 'react-hot-toast';

const useToast = () => {

  const showErrorToast = (message:string) => {
    toast.error(message, {
      duration: 4000,
      position: 'top-center',
    });
  };

  const showSuccessToast = (message:string) => {
    toast.success(message, {
      duration: 4000,
      position: 'top-center',
    });
  };

  const toaster = () => {
    return (
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    )
  }

  return {
    showErrorToast,
    showSuccessToast,
    toaster    
  }
}

export default useToast