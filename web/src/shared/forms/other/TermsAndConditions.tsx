interface IProps {
  confirmButtonLabel?: string;
}

export default function TermsAndConditions({
  confirmButtonLabel = "Send",
}: IProps): JSX.Element {
  return (
    <div className="form-group text-center">
      <p>
        <small>
          By clicking {confirmButtonLabel}, You agree to our{" "}
          <a href="javascript:void(0);" className="font-weight-bold">
            Terms & Conditions
          </a>{" "}
          and have read and acknowledge our{" "}
          <a href="javascript:void(0);" className="font-weight-bold">
            Privacy & Services.
          </a>
        </small>
      </p>
    </div>
  );
}
