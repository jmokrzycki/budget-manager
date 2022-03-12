import { Formik, Form, Field } from "formik";
import { Value } from "sass";


function AddDataForm() {
    return (
      <Formik
        initialValues={{name: 'name'}}
        onSubmit={
          (values) => {console.log(values)}
        }
      >
          {
            ({}) => (
              <Form>
                <Field
                  type="text"
                  name="name"
                />
                <Field
                  type="text"
                  name="category"
                />
                <Field
                  type="date"
                  name="date"
                />
                <Field
                  type="text"
                  name="date"
                />  
                <button type="submit">Submit</button>
              </Form>
            )
          }
      </Formik>
    );
  }
  
  export default AddDataForm;
  