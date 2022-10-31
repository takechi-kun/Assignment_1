const db = require("../../DatabaseContection/db");

const getTopic = (req, res) => {
  const loadMore = req.query.loadMore || req.params.loadMore || 5;
  db.query("SELECT COUNT(*) as count FROM topic")
    .then(([row]) => {
      const MaxCount = row[0].count;
      db.query(
        "SELECT topic_id, title, author, vote_count, comment_count FROM topic LIMIT ?",
        [Number(loadMore)]
      )
        .then(([row]) => {
          res.json({
            success: true,
            data: row,
            last_id:
              Number(loadMore) >= MaxCount
                ? null
                : row[row.length - 1].topic_id,
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
};

module.exports.getTopic = getTopic;


const getTopicLoadMore = (req, res) => {
  const loadMore = req.query.loadMore || req.params.loadMore || 5;
  db.query("SELECT COUNT(*) as count FROM topic")
    .then(([row]) => {
      const MaxCount = row[0].count;
      db.query(
        "SELECT topic_id, title, author, vote_count, comment_count FROM topic LIMIT ?",
        [Number(loadMore)]
      )
        .then(([row]) => {
          res.json({
            success: true,
            data: row,
            last_id:
              Number(loadMore) >= MaxCount
                ? null
                : row[row.length - 1].topic_id,
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
};

module.exports.getTopicLoadMore = getTopicLoadMore;