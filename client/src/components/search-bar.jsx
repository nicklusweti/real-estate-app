import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const SearchBar = () => {
  return (
    <Tabs defaultValue="buy" className="w-full">
      <TabsList>
        <TabsTrigger value="buy">Buy</TabsTrigger>
        <TabsTrigger value="rent">Rent</TabsTrigger>
      </TabsList>
      <TabsContent value="buy" className="w-full">
        <form className="flex flex-col space-y-2 md:flex-row md:space-y-0 gap-x-1">
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-1">
            <Input
              type="text"
              name="location"
              placeholder="location"
              className="w-full outline-none "
            />
            <Input
              type="number"
              name="minPrice"
              min={0}
              max={10000000}
              placeholder="Min price"
              className="w-full outline-none "
            />
            <Input
              type="number"
              name="maxPrice"
              min={0}
              max={10000000}
              placeholder="Max price"
              className="w-full outline-none "
            />
          </div>
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </form>
      </TabsContent>
      <TabsContent value="rent">
        <form className="flex flex-col space-y-2 md:flex-row md:space-y-0 gap-x-1">
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-1 ">
            <Input
              type="text"
              name="location"
              placeholder="location"
              className="w-full outline-none border"
            />
            <Input
              type="number"
              name="minPrice"
              min={0}
              max={10000000}
              placeholder="Min price"
              className="w-full outline-none border"
            />
            <Input
              type="number"
              name="maxPrice"
              min={0}
              max={10000000}
              placeholder="Max price"
              className="w-full outline-none border"
            />
          </div>
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  );
};
export default SearchBar;
