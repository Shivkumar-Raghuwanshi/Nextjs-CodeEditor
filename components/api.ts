import axios, { AxiosInstance } from 'axios';
import { LANGUAGE_VERSIONS } from './constants';

interface File {
  content: string;
}

interface ExecuteCodePayload {
  language: string;
  version: string;
  files: File[];
}

interface ExecuteCodeResponse {
  run: {
    output: string;
    stderr: string | null;
  };
}

const API: AxiosInstance = axios.create({
  baseURL: 'https://emkc.org/api/v2/piston',
});

export const executeCode = async (
  language: string,
  sourceCode: string
): Promise<ExecuteCodeResponse> => {
  const response = await API.post<ExecuteCodeResponse>('/execute', {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  } as ExecuteCodePayload);

  return response.data;
};