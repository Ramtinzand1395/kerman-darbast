const Search = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => alert(`"${text}" به کلیپ‌بورد کپی شد!`),
      (err) => console.error("خطا در کپی کردن: ", err)
    );
  };
  return (
    <div className="hidden items-center justify-between md:flex">
      <button className="bg-primary p-2 rounded-lg text-white ml-2" onClick={() => copyToClipboard("09399943527")} type="button">
        اطلاعات تماس 1 :09131968481
      </button>
      <button className="bg-primary p-2 rounded-lg text-white" onClick={() => copyToClipboard("09399943527")} type="button">
        اطلاعات تماس 2 :09399943527
      </button>
    </div>
  );
};

export default Search;
