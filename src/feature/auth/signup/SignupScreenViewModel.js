// import useSignupScreenModel from '../model/SignupScreenModel';

import useSignupScreenModel from "./SignupScreenModel";

const useSignupScreenViewModel = () => {
  const model = useSignupScreenModel();

  const handleChange = key => value => {
    model.updateField(key, value);
  };

  return {
    form: model.form,
    handleChange,
  };
};

export default useSignupScreenViewModel;
