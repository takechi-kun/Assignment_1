const express = require("express");
const router = express.Router();
const getTopic = require("../Controller/1-1_and_assignment3/getTopic");
const getTopicLoadMore = require("../Controller/1-1_and_assignment3/getTopic");
const getTouristAttraction = require("../Controller/1-2/getTouristAttraction");
const getTouristAttractionById = require("../Controller/1-2/getTouristAttractionById");
router.get("/get_topic", getTopic.getTopic);
router.get("/get_topic_more/:loadMore", getTopicLoadMore.getTopicLoadMore);
router.get(
  "/get_tourist_attraction",
  getTouristAttraction.getTouristAttraction
);
router.get(
  "/get_tourist_attraction/:place_id",
  getTouristAttractionById.getTouristAttractionById
);

module.exports = router;
