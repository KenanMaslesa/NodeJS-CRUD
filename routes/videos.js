const express = require('express');
const router = express.Router();

const videoController = require('../controllers/video')

//api/videos
router.get('/get-all-videos', videoController.getVideos);
router.get('/get-video/:videoId', videoController.getVideoById);
router.post('/add-video', videoController.addVideo);
router.patch('/edit/:videoId', videoController.editVideo);
router.delete('/delete/:videoId', videoController.deleteVideo);

module.exports = router;