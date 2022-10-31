const db = require("../../DatabaseContection/db");

const getTouristAttraction = (req, res) => {
    const loadMore = req.query.loadMore || req.params.loadMore || 5;
    db.query("SELECT COUNT(*) as count FROM touristattraction")
      .then(([row]) => {
        const MaxCount = row[0].count;
        db.query(
          "SELECT place_id as id, place_name as name, image_url as img_url FROM touristattraction LIMIT ?",
          [Number(loadMore)]
        )
          .then(([row]) => {
            res.json({
              success: true,
              data: row,
              last_id:
                Number(loadMore) >= MaxCount
                  ? null
                  : row[row.length - 1].id,
            });
          })
          .catch((error) => {
            res.json({
              success: false,
              message: error,
            });
          });
      })
      .catch((error) => {
        res.json({
          success: false,
          message: error,
        });
      });
}

module.exports.getTouristAttraction = getTouristAttraction