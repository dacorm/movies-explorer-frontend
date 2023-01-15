import { createContext } from 'react';
import { currentUserType } from '../types/user';

const CurrentUserContext = createContext<currentUserType | null>(null);

export default CurrentUserContext;
