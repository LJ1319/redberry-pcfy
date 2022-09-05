const NextButton = ({ text, validate }) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={validate}
        className="w-44 h-16 mt-12 bg-[#62A1EB] rounded-lg text-white text-xl hover:bg-[#317AD0] active:bg-[#1A5DAB]"
      >
        {text}
      </button>
    </div>

  );
};

export default NextButton;