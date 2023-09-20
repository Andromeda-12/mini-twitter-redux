import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useTypedDispatch: () => RootDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
