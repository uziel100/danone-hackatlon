export enum ErrorRoot {
  // session
  INVALID_CREDENTIALS = 'invalidCredentials',
  SESSION_WITHOUT_USER = 'sessionWithoutUser',
  SESSION_EXPIRED = 'sessionExpired',
  USER_NOT_ACTIVE = 'userNotActive',
  USER_WITHOUT_PERMISSIONS = 'userWithoutPermissions',
  RECAPTCHA_NOT_VALID = 'recaptchaNotValid',
  RECOVER_NOT_VALID = 'recoverNotValid',
  RECOVER_NOT_EXIST = 'recoverNotExist',
  RECOVER_EXPIRED = 'recoverExpired',
  // file
  FILE_NOT_FOUND = 'fileNotFound',
  FILE_IS_NOT_IMAGE = 'fileIsNotImage',
  // level
  LEVEL_NAME_ALREADY_EXIST = 'levelNameAlreadyExist',
  LEVEL_TEMPLATE_ID_REQUIRED = 'levelTemplateIdRequired',
  CREATE_LEVEL_WITH_TEMPLATE_NOT_EXIST = 'createLevelWithTemplateNotExist',
  THERE_NOT_NEXT_LEVEL = 'thereNotNextLevel',
  // template
  TEMPLATE_NAME_REQUIRED = 'templateNameRequired',
  TEMPLATE_NAME_ALREADY_EXIST = 'templateNameAlreadyExist',
  // Area
  AREA_NAME_ALREADY_EXIST = 'areaAlreadyExist',
  // Job
  JOB_NAME_ALREADY_EXIST = 'jobNameAlreadyExist',
  JOB_SHORT_NAME_ALREADY_EXIST = 'jobShortNameAlreadyExist',
  // area level
  AREA_ID_REQUIRED = 'areaIdRequired',
  LEVEL_ID_REQUIRED = 'levelIdRequired',
  AREA_AND_LEVEL_EXIST = 'areaAndLevelExist',
  // userLevelHistory
  USER_ID_REQUIRED = 'userIdRequired',
  USER_IN_LEVEL_ALREADY_EXIST = 'userAlreadyExist',
  // user
  USER_ALREADY_EXISTS = 'userAlreadyExist',
  USER_NOT_EXIST = 'userNotExist',
  USER_EMAIL_REQUIRED = 'userEmailRequired',
  USER_EMAIL_ALREADY_EXIST = 'userEmailAlreadyExist',
  // typeSKill
  TYPE_SKILL_NO_ICON = 'typeSkillNoIcon',
  TYPE_SKILL_EMPTY_NAME = 'typeSkillEmptyName',
  TYPE_SKILL_NOT_FOUND = 'typeSkillNotFound',
  TYPE_SKILL_NAME_ALREADY_EXIST = 'typeSkillNameAlreadyExist',
  // skill
  SKILL_NO_ICON = 'skillNoIcon',
  SKILL_EMPTY_NAME = 'skillEmptyName',
  SKILL_NOT_FOUND = 'skillNotFound',
  SKILL_NAME_ALREADY_EXIST = 'skillNameAlreadyExist',

  // CLIENT
  INVALID_CODE_RECOVER = 'invalidCodeRecover'
}
export const MessageTranslate = {
  'Network request failed': 'Ha ocurrido un error con el servidor, por favor inténtelo de nuevo',
  'Failed to fetch': 'Ha ocurrido un error con el servidor, por favor inténtelo de nuevo',
  [ErrorRoot.INVALID_CREDENTIALS]: 'Usuario y/o contraseña incorrectas',
  welcomeAfterLogin: 'Bienvenido pixeliano',
  [ErrorRoot.INVALID_CODE_RECOVER]: 'Código invalido'
};

export const getValidationError = (code: keyof typeof MessageTranslate) => MessageTranslate[code] ?? code;
