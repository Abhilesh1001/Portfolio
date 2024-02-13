import Homepagety from '@/components/homepage/Homepagety';


import { Metadata } from 'next';



export const metadata: Metadata = {
  title: "Home : Home Page",
  description: "Abhilesh Portfolio Home Page",
};

export default function Home() {

  return (
    <div className='' >
      <Homepagety />
      </div>
  );
}
