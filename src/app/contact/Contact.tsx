import Form from "@/components/Form";


const ContactPage = () => {
  
  return (
    <div className="min-h-screen flex flex-col  items-center bg-green-600 dark:bg-gray-950">
         <div className="mt-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">Contact Address:</h2>
          <div className="dark:text-gray-50">Contact No: +919083926254, +919064164277</div>
          <div className="dark:text-gray-50">Email: abhilesh925@gmail.com</div>
        </div>
      <div className="max-w-md p-8 dark:bg-gray-800 bg-green-400 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
        <Form />
      </div>
    </div>
  );
};

export default ContactPage;
