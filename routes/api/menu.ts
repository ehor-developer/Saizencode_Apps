import menus from "../../data/menu.json" assert { type: "json" };

export const handler = (req: Request): Promise<Response> => {
  try {
    const params = new URLSearchParams(req.url.substring(req.url.indexOf("?") + 1));
    const code = params.get("code");

    if (!code) {
      return Promise.resolve(new Response("Bad Request: Code parameter is missing", { status: 400 }));
    }

    const menuItem = menus.find((item) => item.id === code);

    if (!menuItem) {
      return Promise.resolve(new Response("Menu item not found", { status: 404 }));
    }

    const responseJSON = JSON.stringify(menuItem);

    return Promise.resolve(new Response(responseJSON, { headers: { "Content-Type": "application/json" } }));
  } catch (error) {
    console.error(error);
    return Promise.resolve(new Response("Internal Server Error", { status: 500 }));
  }
};