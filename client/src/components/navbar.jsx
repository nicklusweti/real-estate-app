import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme/theme-toggle";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "About", path: "" },
    { title: "Contacts", path: "" },
    { title: "Pricing", path: "" },
  ];
  return (
    <nav className="bg-background border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/" className="font-bold text-2xl">
            Nest<span className="text-primary">Finder.</span>
          </a>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setState(!state)}>
              {state ? <X className="w-5 h-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            <li>
              <ThemeToggle />
            </li>
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-muted-foreground hover:text-primary duration-200 font-medium"
                >
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
            <span className="hidden w-px h-6 bg-muted-foreground md:block"></span>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li>
                <Button className="block w-full" variant="outline">
                  <a href="">Log in</a>
                </Button>
              </li>
              <li>
                <Button className="block w-full md:inline">
                  <a href="">Sign In</a>
                </Button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
