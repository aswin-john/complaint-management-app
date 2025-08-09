import { useState } from 'react';

const useSignupScreenModel = () => {
  const [form, setForm] = useState({
    username: '',
    lastName: '',
    mobile: '',
    email: '',
    password: '',
    retypePassword: '',
  });

  const updateField = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  return {
    form,
    updateField,
  };
};

export default useSignupScreenModel;
