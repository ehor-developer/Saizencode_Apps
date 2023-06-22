import { useEffect, useState } from "preact/hooks";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  emoji: string;
}

interface SaizencodeProps {
  menus: MenuItem[];
}

export default function Saizencode({ menus }: SaizencodeProps) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredMenus, setFilteredMenus] = useState(menus);

  useEffect(() => {
    if (searchValue === "") {
      setFilteredMenus(menus);
    } else {
      const regex = new RegExp(searchValue, "i");
      const filtered = menus.filter(
        (menu) =>
          regex.test(menu.name) ||
          regex.test(menu.id) ||
          regex.test(menu.emoji) ||
          regex.test(menu.price.toString())
      );
      setFilteredMenus(filtered);
    }
  }, [searchValue, menus]);

  return (
    <div>
      <div className="flex m-4">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="メニュー番号や価格から検索できるよ"
            value={searchValue}
            onInput={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>

      {filteredMenus.map((menuItem) => (
        <div
          key={menuItem.id}
          className="flex justify-between items-center bg-white p-4 mb-4 shadow-xl rounded-md font-bold"
        >
          <div className="flex items-center">
            <div className="rounded-full flex justify-center items-center text-white font-bold text-3xl mr-4">
              {menuItem.emoji}
            </div>
            <div>
              <p className="text-gray-500 text-sm font-bold">{menuItem.id}</p>
              <h3 className="text-lg font-bold">{menuItem.name}</h3>
            </div>
          </div>
          <div className="flex items-center ">
            <span className="text-lg font-bold text-gray-800 mr-2">
              {menuItem.price}円
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
