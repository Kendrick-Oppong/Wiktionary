import "./FontType.css";

export const FontType = () => {
  return (
    <div className="border-e-2 border-r-[#9cb9ee] pr-4">
      <select
        id=""
        className="cursor-pointer p-1 outline-none rounded-lg border-solid border-2 border-slate-400"
      >
        <option value="math">math</option>
        <option value="system-ui" selected>
          system-ui
        </option>
        <option value="sans serif">sans serif</option>
        <option value="monospace">monospace</option>
      </select>
    </div>
  );
};
