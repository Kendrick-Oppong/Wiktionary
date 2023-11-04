import "./FontType.css";

export const FontType = () => {
  return (
    <select
      id=""
      className=" cursor-pointer p-1 outline-none rounded-lg border-solid border-2 border-slate-400"
    >
      <option value="serif">serif</option>
      <option value="sans serif">sans serif</option>
      <option value="monospace">monospace</option>
    </select>
  );
};
