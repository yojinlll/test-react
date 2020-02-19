// import {FormValue} from './form'

interface FormRule{
  key: string
  required?: boolean
  minLength?: number
  maxLength?: number
}
interface FormErrors{
  
}
interface FormValue{
  
}

type FormRules = Array<FormRule>

const Validator = (formValue: FormValue, rules: FormRules):FormErrors => {
  return 'fuck'
}

export default Validator