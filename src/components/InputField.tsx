import Link from "next/link";

export default function InputField({ label, fieldName }: any) {
  return (
    <div>
      <label
        htmlFor={fieldName}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          id={fieldName}
          name={fieldName}
          type={fieldName}
          required
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-ohji-lightBlue focus:outline-none focus:ring-ohji-lightBlue sm:text-sm"
        />
      </div>
    </div>
  );
}
