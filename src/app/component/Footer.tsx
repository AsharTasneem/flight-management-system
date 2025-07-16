import Link from "next/link";
export default function Footer() {
    return (
      <footer className="w-full bg-[#009688] text-white py-5">
        <div className="flex flex-col md:flex-row justify-between px-12">
          <Link href="/">
          <h4 className="text-lg font-bold">Tripzy</h4>
          </Link>
          <ul className="mt-2 md:mt-0 space-y-1">
            <li>Help</li>
            <li>FAQ</li>
            <li>Customer Service</li>
            <li>How to Guides</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </footer>
    );
  }