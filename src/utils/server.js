import { createServer, Response } from "miragejs";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const namespace = "/api";

export default function () {
  return createServer({
    routes() {
      // Return a game based on ID
      this.get(namespace + "/game/:id", (schema, request) => {
        let id = request.params.id;
        if (!(id >= 0 && id < arr.length)) {
          return new Response(404, { errors: ["ID is invald"] });
        }

        return { product: arr[id] };
      });

      // Return all games
      this.get(
        namespace + "/game",
        () => {
          return { products: arr };
        },
        { timing: 3000 },
      );

      // Return all games based on a filter
      this.post(namespace + "/game", (schema, request) => {
        const { filters } = JSON.parse(request.requestBody);

        // If no filters are present, just return all games
        if (!filters) {
          return new Response(400, { errors: ["Filters not present"] });
        }

        const fltr_platform = filters.platform; //arr[str]
        const fltr_rating = filters.rating; //arr[str]
        let fltr_minPrice, fltr_maxPrice;
        if (filters.minPrice && filters.minPrice !== -1) {
          fltr_minPrice = filters.minPrice; //int
        }
        if (filters.maxPrice && filters.maxPrice !== -1) {
          fltr_maxPrice = filters.maxPrice; //int
        }

        console.log(fltr_platform);
        console.log(fltr_rating);
        console.log(fltr_minPrice);
        console.log(fltr_maxPrice);

        const tmpArr = filters;

        return { products: tmpArr };
      });
    },
  });
}
