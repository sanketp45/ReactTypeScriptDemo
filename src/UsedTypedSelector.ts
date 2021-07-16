import { useSelector, TypedUseSelectorHook } from 'react-redux';


import { RootStates } from './state/reducer';

export const useTypedSelector: TypedUseSelectorHook<RootStates> = useSelector;

