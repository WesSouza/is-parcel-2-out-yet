import got from "got";

export default (req, res) => {
  got<Record<string, string>>(
    "http://registry.npmjs.org/-/package/parcel/dist-tags",
    {
      responseType: "json"
    }
  )
    .then(response => {
      const tagVersions = response.body;
      res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate");
      res.json(
        typeof tagVersions === "object" && tagVersions?.latest?.startsWith("2.")
      );
    })
    .catch(error => {
      res.status(500);
      res.json(error.toString());
    });
};
