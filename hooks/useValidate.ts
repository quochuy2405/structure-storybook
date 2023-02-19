import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm, UseFormReturn } from 'react-hook-form'
import { DeepPartial } from 'react-hook-form/dist/types'
import { AnyObjectSchema } from 'yup'

interface IUseValidate<T extends object> {
  validationSchema: AnyObjectSchema
  defaultValues: DeepPartial<T> | undefined
}

interface IUseValidateReturn<T extends FieldValues> {
  methods: UseFormReturn<T, object>
  handleClearForm: (callBack?: () => void) => void
}
const useValidate = <T extends object>(
  props: Partial<IUseValidate<T>>
): IUseValidateReturn<T> => {
  const methods = useForm<T>({
    resolver: props.validationSchema ? yupResolver(props?.validationSchema) : undefined,
    defaultValues: props.defaultValues,
    criteriaMode: 'all'
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
