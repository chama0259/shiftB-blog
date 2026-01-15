const ContactForm = () => {
  return (
    <>
      <form className="flex flex-col gap-6 max-w-2xl mx-auto">
        <h2 className="font-bold text-xl">問合わせフォーム</h2>
        <div className="flex items-center gap-10">
          <label htmlFor="name" className="w-32">
            お名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center gap-10">
          <label htmlFor="email" className="w-32 whitespace-nowrap">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center gap-10">
          <label htmlFor="message" className="w-32">
            本文
          </label>
          <textarea
            id="message"
            name="message"
            rows={10}
            className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center gap-4">
          <button
            type="submit"
            className="px-5 py-2.5 bg-black text-white font-bold rounded-lg hover:bg-gray-800"
          >
            送信
          </button>
          <button
            type="reset"
            className="px-5 py-2.5 bg-gray-200 text-black font-bold rounded-lg hover:bg-gray-300"
          >
            クリア
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
