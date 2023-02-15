import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm, UseFormReturn } from 'react-hook-form'
import { AnyObjectSchema } from 'yup'

interface IUseValidate {
  validationSchema: AnyObjectSchema
  defaultValue: object
}

interface IUseValidateReturn<T extends FieldValues> {
  methods: UseFormReturn<T, object>
  handleClearForm: (callBack?: () => void) => void
}
const useValidate = <T extends object>(
  props: Partial<IUseValidate>
): IUseValidateReturn<T> => {
  const methods = useForm<T>({
    resolver: props.validationSchema ? yupResolver(props?.validationSchema) : undefined,
    criteriaMode: 'all',
    mode: 'onBlur'
  })
  const handleClearForm = (callBack?: () => void) => {
    methods.reset({} as T, {
      keepErrors: true,
      keepDirty: true,
      keepIsSubmitted: false,
      keepTouched: false,
      keepIsValid: false,
      keepSubmitCount: false
    })
    callBack && callBack()
  }

  return { methods, handleClearForm }
}

export default useValidate
