interface InputFieldProps {
  labelName: string;
  type: string;
  value?: "";
  placeholder?: "Input";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // hasLabel: boolean
}

function InputField(props: InputFieldProps) {
  return (
    <>
      <div>
        <label htmlFor="">{props.labelName}</label>
      </div>

      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        className="border rounded-xs px-2 py-1 w-100"
        onChange={props.onChange}
      />
    </>
  );
}

export default InputField;
