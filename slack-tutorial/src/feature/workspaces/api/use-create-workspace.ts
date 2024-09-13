import { useMutation } from 'convex/react';

import { useCallback } from 'react';
import { api } from '../../../../convex/_generated/api';

type RequestType = any;
type ResponseType = any;

type Options = {
  onSuccess?: () => void;
  onError?: () => void;
  onSettled?: () => void;
}

export const useCreateWorkspace = () => {
  const mutation = useMutation(api.workspaces.create);

  const mutate = useCallback(async(values: RequestType, options?: Options) => {
    try {
      const response = await mutation(values);
      options?.onSuccess?.();
    } catch {
      options?.onError?.();
    }finally {
      options?.onSettled?.();
    }
  }, [mutation]);

  return {
    mutate,
  };
};