import ErrorDialog from "../shared/modal/ErrorDialog";
import SuccessDialog from "../shared/modal/SuccessDialog";
import React, { useCallback, useState } from "react";

interface IErrorDialog {
  title?: string;
  description?: string;
  errorMessage?: string;
}

interface ISuccessDialog {
  title?: string;
  description?: string;
}

export interface IAlertDialogsContext {
  error: IErrorDialog | null;
  showErrorDialog: ({ title, description }: IErrorDialog) => void;
  hideErrorDialog: () => void;
  success: ISuccessDialog | null;
  showSuccessDialog: ({ title, description }: ISuccessDialog) => void;
  hideSuccessDialog: () => void;
}

export const AlertDialogsContext = React.createContext<IAlertDialogsContext>({
  error: null,
  showErrorDialog: () => undefined,
  hideErrorDialog: () => undefined,
  success: null,
  showSuccessDialog: () => undefined,
  hideSuccessDialog: () => undefined,
});

interface IArgsAlertDialogsProvider {
  children: JSX.Element;
}

export default function AlertDialogsProvider({
  children,
}: IArgsAlertDialogsProvider): JSX.Element {
  const [error, setError] = useState<IErrorDialog | null>(null);
  const [success, setSuccess] = useState<ISuccessDialog | null>(null);

  const hideErrorDialog = () => setError(null);

  const showErrorDialog = ({
    title = "Error: Something went wrong!",
    description = "Something went wrong, please try again latter.",
    errorMessage,
  }: IErrorDialog) => setError({ title, description, errorMessage });

  const hideSuccessDialog = () => setSuccess(null);

  const showSuccessDialog = ({
    title = "Congratulations!",
    description = "Operation completed successfuly.",
  }: ISuccessDialog) => setSuccess({ title, description });

  const contextValue = {
    error,
    success,
    showErrorDialog: useCallback(
      ({ title, description, errorMessage }: IErrorDialog) =>
        showErrorDialog({ title, description, errorMessage }),
      []
    ),
    hideErrorDialog: useCallback(() => hideErrorDialog(), []),
    showSuccessDialog: useCallback(
      ({ title, description }: ISuccessDialog) =>
        showSuccessDialog({ title, description }),
      []
    ),
    hideSuccessDialog: useCallback(() => hideSuccessDialog(), []),
  };

  return (
    <AlertDialogsContext.Provider value={contextValue}>
      <ErrorDialog />
      <SuccessDialog />
      {children}
    </AlertDialogsContext.Provider>
  );
}
