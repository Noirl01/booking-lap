
import { Field, useField, ErrorMessage } from 'formik'
const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props);
  
    return (
    <div className='w-full'> 
        <label htmlFor={Field.name}>{label}</label><br/>
        <input 
        className={`${meta.touched && meta.error && 'is-invalid'}`}
        placeholder=''
        {...field}{...props}
        autoComplete="off"/><br/>
        <ErrorMessage name={field.name} className='error' component="div"/>
    </div>
  )
}

export default TextField