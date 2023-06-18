export enum ErrorRoot {
  // session
  INVALID_CREDENTIALS = 'invalidCredentials'
}
export const MessageTranslate = {
  'Network request failed': 'Ha ocurrido un error con el servidor, por favor inténtelo de nuevo',
  'Failed to fetch': 'Ha ocurrido un error con el servidor, por favor inténtelo de nuevo',
  [ErrorRoot.INVALID_CREDENTIALS]: 'Usuario y/o contraseña incorrectas'
};

export const getValidationError = (code: keyof typeof MessageTranslate) => MessageTranslate[code] ?? code;
