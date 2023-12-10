import Link from "next/link";
import Image from "next/image";
import { fredoka } from "@/ui/fonts";
const TrashBin = () => {
  return (
    <section className="container m-auto my-10">
      <div className="flex flex-col md:flex-row md:justify-between items-center px-4 lg:px-10">
        <div className="w-[100%] md:w-[70%] lg:w-[48%]">
          <span
            className={`${fredoka.className} font-bold text-primary-800 text-lg sm:text-2xl`}
          >
            Smart Trashbins
          </span>
          <h2 className="text-2xl md:text-4xl font-semibold !leading-tight">
            Elevate Your Scrap Management with Innovative Integration
          </h2>
          <p className="mt-4 mb-6">
            Revolutionize your waste management with DigitalScrap's Smart Trash
            Bins. Experience the future of efficient, cost-saving, and
            eco-friendly waste collection. Make the smart choice today for a
            cleaner, greener tomorrow.
          </p>
          <Link
            href="/smartbin"
            className="bg-primary-800 font-medium text-white py-2 px-6 border-2 border-transparent rounded-full transition-all duration-300 hover:bg-transparent hover:text-black hover:border-primary-800 mb-5 block w-fit ml-auto mr-auto md:ml-0 "
          >
            Explore more
          </Link>
        </div>
        <div className="px-8 md:0">
          <Image
            src="/images/smarttrashbin.png"
            height={520}
            width={520}
            alt="Smart TrashBin Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default TrashBin;
