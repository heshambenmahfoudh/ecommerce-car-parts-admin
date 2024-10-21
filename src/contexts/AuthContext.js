import React, { useReducer, createContext } from 'react'

const INITIAL_STATE = {
  admin: JSON.parse(localStorage.getItem('admin')) || null,
  loading: false,
  err: false,
}
const AuthContext = createContext(INITIAL_STATE)
const AuthReducer = (state, action) => {
  switch (action?.type) {
    case 'AUTH_START':
      return {
        admin: null,
        loading: true,
        err: false,
      }
    case 'AUTH_SUCCESS':
      return {
        admin: action.payload,
        loading: false,
        err: false,
      }
    case 'AUTH_FAIL':
      return {
        admin: null,
        loading: false,
        err: action.payload,
      }
    case 'UPDATE_START':
      return {
        ...state,
        admin: state.admin,
        loading: true,
        err: false,
      }
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        admin: action.payload,
        loading: false,
        err: false,
      }
    case 'UPDATE_FAIL':
      return {
        ...state,
        admin: state.admin,
        loading: false,
        err: action.payload,
      }
    case 'LOG_OUT':
      return {
        admin: null,
        loading: false,
        err: false,
      }
    default:
      return state
  }
}
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
  React.useEffect(() => {
    localStorage.setItem('admin', JSON.stringify(state.admin))
  }, [state.admin])

  return (
    <AuthContext.Provider
      value={{
        admin: state.admin,
        loading: state.loading,
        err: state.err,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useStateContextAuth = () => React.useContext(AuthContext)
export default AuthContextProvider
