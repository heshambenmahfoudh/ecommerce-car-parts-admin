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
        admin: state?.admin,
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
        admin: state?.admin,
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
    const adminData = localStorage.getItem('admin')
    const admin = {
      id: state?.admin?._id,
      firstname: state?.admin?.firstname,
      lastname: state?.admin?.lastname,
      username: state?.admin?.username,
      isAdmin: state?.admin?.isAdmin,
    }

    try {
      if (adminData !== undefined) {
        localStorage.setItem('admin', JSON.stringify(state?.admin || null))
      }
    } catch (err) {
      console.log(err)
    }
  }, [state?.admin])

  return (
    <AuthContext.Provider
      value={{
        admin: state?.admin,
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
