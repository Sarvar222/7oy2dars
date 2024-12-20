  function FormInput({ type, label, placeholder, value, onChange, name }) {
    return (
      <label className="form-control w-full mb-2">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          className="input input-bordered w-full"
        />
      </label>
    );
  }
  export default FormInput;
