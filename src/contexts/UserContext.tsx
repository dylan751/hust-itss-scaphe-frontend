import React, { useEffect } from 'react';
import { createContext, useReducer } from 'react';
import { toast } from 'react-toastify';

interface UserContextProps {
  user: any;
  loading: boolean;
  error: any;
  dispatch?: React.Dispatch<any>;
}

const INITIAL_STATE: UserContextProps = {
  user: JSON.parse((localStorage as any).getItem('user')) || null,
  loading: false,
  error: null,
};

export const UserContext = createContext<UserContextProps>(INITIAL_STATE);

const UserReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { user: null, loading: true, error: null };
    case 'LOGIN_SUCCESS': {
      toast.success('ログインできました', { toastId: 'LOGIN_SUCCESS' });
      return { user: action.payload, loading: false, error: null };
    }
    case 'LOGIN_FAILURE': {
      return { user: null, loading: false, error: action.payload };
    }
    case 'LOGOUT': {
      toast.success('ログアウトできました', { toastId: 'LOGOUT' });
      return { user: null, loading: false, error: null };
    }
    default:
      return state;
  }
};

export const UserContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  // Store user information into localStorage as stringified JSON
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
