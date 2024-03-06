import { Form, useForm, connect } from 'formfusion';
import './App.css';

const MyForm = () => {
  const config = useForm({
    onSubmit: (e) => {
      console.log('Success ' + JSON.stringify(e));
    },
    validateOnChange: true,
  });

  return (
    <Form config={config} className="form">
      <input
        {...connect(config, 'alphabetic')}
        id="alphabetic"
        name="firstName"
        className="form__field"
      />
      {config.errors.firstName}
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
