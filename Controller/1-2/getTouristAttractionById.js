const db = require("../../DatabaseContection/db");

const getTouristAttractionById = (req, res) => {
  const place_id = req.params.place_id;
  db.query(
    "SELECT place_name as name, image_url as img_url FROM touristattraction where place_id = ?",
    [place_id]
  )
    .then(([row]) => {
      if (row.length > 0) {
        return res.json({
          success: true,
          data: row,
        });
      }
      res.json({
        success: false,
        message: `PlaceId : ${place_id} haven't in Database.`,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: error,
      });
    });
};

module.exports.getTouristAttractionById = getTouristAttractionById;
