import {createAction, handleActions} from 'redux-actions';
import produce from 'immer'
import * as authAPI from '../api/auth';
import createRequestSaga, { createRequestActionType } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
const CHANGE_FIELD = 'auth/CHANGE_FIELD'
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'



const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionType('auth/REGISTER')
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionType('auth/LOGIN')

export const changeField = createAction(
  CHANGE_FIELD,
  ({form, key, value}) => ({
    form,
    key,
    value
  })
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form)

export const register = createAction(REGISTER, ({username, password, name, nickname}) => ({
  username,
  password,
  name,
  nickname
}))

export const login = createAction(LOGIN, ({username, password}) => ({
  username,
  password
}))

const registerSaga = createRequestSaga(REGISTER, authAPI.register)
const loginSaga = createRequestSaga(LOGIN, authAPI.login)
export function* authSaga(){
  yield takeLatest(REGISTER, registerSaga)
  yield takeLatest(LOGIN, loginSaga)
}

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
    name: '',
    nickname: ''
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null
}

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, {payload: {form, key, value}}) => 
      produce(state, draft => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, {payload: {form}}) => ({
      ...state,
      [form]: initialState[form]
    }),

    [REGISTER_SUCCESS]: (state, {patyload: auth}) => ({
      ...state,
      authError: null,
      auth
    }),
    [REGISTER_FAILURE]: (state, {payload: error}) => ({
      ...state,
      authError: error
    }),

    [LOGIN_SUCCESS]: (state, {patyload: auth}) => ({
      ...state,
      authError: null,
      auth
    }),
    [LOGIN_FAILURE]: (state, {payload: error}) => ({
      ...state,
      authError: error
    })
  },
  initialState
);

export default auth