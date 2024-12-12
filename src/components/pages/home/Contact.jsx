import contact from "../../../assets/contact.jpg"
const Contact = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(
          () => alert(`"${text}" به کلیپ‌بورد کپی شد!`),
          (err) => console.error('خطا در کپی کردن: ', err)
        );
      };
  return (
    <div className='bg-primary  grid grid-cols-1 md:grid-cols-2 gap-5 md:container md:mx-auto mx-2 p-5 text-white'>
        <div className="flex flex-col items-start justify-evenly h-[40vh]">
            <h5 className="font-bold text-3xl">با ما در تماس باشید</h5>
            <p>
                جهت در یافت مشاوره رایگان تماس بگیرید.
            </p>
            <button  onClick={() => copyToClipboard('09399943527')} className='bg-black p-5 rounded-lg' type='button'>
                اطلاعات تماس 1 :09131968481
            </button>
            <button  onClick={() => copyToClipboard('09399943527')} className='bg-black p-5 rounded-lg' type='button'>
                اطلاعات تماس 2 :09399943527
            </button>
        </div>
        <div className="self-end">
            <img src={contact} className="w-full h-[40vh] rounded-md" alt="contact.jpg" />
        </div>
    </div>
  )
}

export default Contact