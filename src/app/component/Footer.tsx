export default function Footer() {
    return (
      <footer className="w-full bg-[#009688] text-white py-5">
        <div className="flex flex-col md:flex-row justify-between px-12">
          <h4 className="text-lg font-bold">SkyPlane</h4>
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