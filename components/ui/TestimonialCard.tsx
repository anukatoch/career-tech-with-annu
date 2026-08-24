type TestimonialProps = {
    name: string;
    role: string;
    message: string;
  };
  
  const TestimonialCard = ({
    name,
    role,
    message,
  }: TestimonialProps) => {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
  
        {/* Avatar */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl">
          👨‍🎓
        </div>
  
        {/* Rating */}
        <div className="mb-4 text-xl text-yellow-500">
          ⭐⭐⭐⭐⭐
        </div>
  
        {/* Message */}
        <p className="italic leading-7 text-slate-600">
          "{message}"
        </p>
  
        {/* Student */}
        <div className="mt-6">
          <h3 className="text-xl font-bold text-slate-900">
            {name}
          </h3>
  
          <p className="text-slate-500">
            {role}
          </p>
        </div>
  
      </div>
    );
  };
  
  export default TestimonialCard;