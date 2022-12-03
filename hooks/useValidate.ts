import { DeepPartial, FieldValues, Resolver, useForm } from 'react-hook-form'
interface IUseValidate<T extends FieldValues> {
  defaultValues?: DeepPartial<T> | undefined
  resolver?: Resolver<T, any> | undefined
}

const useValidate = <T extends object>({ resolver, defaultValues }: IUseValidate<T>) => {
  const methods = useForm<T>({ defaultValues, resolver })
  return methods
}

export default useValidate
