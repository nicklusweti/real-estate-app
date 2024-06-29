import SearchBar from "./search-bar";
import Stats from "./stats";

const Hero = () => {
  return (
    <section className="my-12">
      <div className="max-w-screen-xl mx-auto  gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h1 className="text-sm font-medium ">Over 200+ homes</h1>
          <h2 className="text-4xl font-extrabold md:text-5xl">
            <span className="text-primary">Find Your Perfect</span> Home with
            Ease
          </h2>
          <p className="text-muted-foreground">
            Discover the best properties in your desired location, tailored to
            your needs. Seamlessly search, compare, and connect with real estate
            experts to make your dream home a reality.
          </p>
          <div className="items-center w-full">
            <SearchBar />
          </div>
        </div>
        <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
          <img
            src="https://images.unsplash.com/photo-1512699355324-f07e3106dae5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHJlYWwlMjBlc3RhdGUlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D"
            className=" md:rounded-tl-[108px]"
            alt=""
          />
        </div>
      </div>
      <div className="mt-14 px-4 md:px-8">
        <Stats />
      </div>
    </section>
  );
};
export default Hero;
