export interface IUserAgent {
  __typename?: 'User';
  id: string;
  email?: string | null;
  fullName?: string | null;
}

export interface ISession {
  __typename?: 'Session';
  id: string;
  user: IUserAgent;
}

export interface IAgentSession {
  __typename?: 'AgentSession';
  id: string;
  session?: ISession | null;
}

export interface IUpload {
  __typename?: 'FileUpload';
  file: {
    __typename?: 'File';
    id: string;
    name?: string | null;
    size: number;
    checksum?: string | null;
    status: { __typename?: 'FileStatus'; id: string; name: string };
    type: {
      __typename?: 'FileType';
      id: string;
      name: string;
      extension: string;
      class: { __typename?: 'FileClass'; id: string; name: string };
    };
  };
  policy: { __typename?: 'UploadPolicy'; url: string; fields: string };
}

export interface ICustomUpload extends Omit<IUpload, 'file' | 'policy'> {
  file: File;
  req?: XMLHttpRequest | null | undefined;
  uploadProgress: number;
  uploading: boolean;
  done: boolean;
  policy: { __typename?: 'UploadPolicy' | undefined; url: string; fields: string } | undefined;
  name: string | undefined | null;
  id: string | undefined;
  error?: any;
}

export type ThemeMode = 'light' | 'dark';

export interface IGeneralPaginationList {
  totalCount: number;
  totalEdges: number;
  pag: number;
  hasMore: boolean;
}

export interface IGeneralSelect {
  id: string | number;
  name: string;
}
