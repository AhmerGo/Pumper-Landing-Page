import { footerLinks } from "@/data/footerLinks";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
          <p>ogEndeavors, LLC, PO Box 7091, Abilene, TX 79608</p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
            <Button>Get started</Button>
            <Button variant="secondary">Learn more</Button>
          </div>
        </div>
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p> 325-261-0070 </p>
          <p> info@ogPumper.com</p>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
