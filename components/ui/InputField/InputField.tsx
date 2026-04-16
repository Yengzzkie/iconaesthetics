import { IoMdSend } from "react-icons/io";

const InputField = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Enter your email"
        className="bg-white border border-white text-black focus:outline-none focus:ring-0 px-4 py-2 w-full"
      />
      <div>
        <IoMdSend className="absolute text-(--secondary) text-2xl right-2.5 top-1/2 -translate-y-1/2 cursor-pointer"/>
      </div>
    </div>
  );
};

export default InputField;
