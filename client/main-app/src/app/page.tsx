import Header from "@/components/Header";
import Footer  from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div><Header/></div>
      
          <div className='p-28 bg-gradient-to-r from-white via-blue-100 to-red-100'>
           đây là home
          </div>
        <div> <Footer/></div>
     
    </div>
  );
}
