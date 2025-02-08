const Footer = () => {
  return (
    <div className="bg-secondery text-white p-5 mt-2 h-auto md:h-[60vh] flex flex-col justify-between">
      <div className=" grid grid-cols-1 md:grid-cols-4  ">
        <div className="flex flex-col justify-around h-[40vh] space-y-3">
          <h3>تماس با ما</h3>
          <p>آدرس : بلوار فرزانگان</p>
          <p>تماس: 09131968481</p>
          <p>تماس: 09399943527</p>
          <p>با مدیریت فرشید ضیا تبری</p>
        </div>
        <div className="flex flex-col justify-around space-y-3">
          <h3>لیست خدمات</h3>
          <p>نصب و راه‌اندازی داربست فلزی</p>
          <p>اجاره داربست فلزی</p>
          <p>تعمیر و نگهداری داربست</p>
          <p>طراحی و اجرای داربست خاص</p>
        </div>
        <div className="flex flex-col justify-around space-y-3">
          <h3> اجرای داربست</h3>
          <p>نما</p>
          <p>نصب و راه‌اندازی داربست فلزی</p>
          <p>دیوار برشی</p>
          <p>چاهک آسانسور</p>
          <p> حفاظ </p>
          <p> چهار پایه </p>
          <p> زیر بتن </p>
          <p> نورگیر </p>
        </div>
      </div>
      <div className="border-white border-2 p-2 flex items-center justify-center mt-10">
        <p>تمامی حقوق این سایت متعلق به شرکت تبری می باشد</p>
      </div>
    </div>
  );
};

export default Footer;
