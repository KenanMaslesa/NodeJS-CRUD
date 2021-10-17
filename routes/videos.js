const express = require('express');
const router = express.Router();

const videoController = require('../controllers/video')

//api/videos
router.get('/', videoController.getVideos);
router.get('/:videoId', videoController.getVideoById);
router.get('/load-more/:page', videoController.loadMoreVideos);
router.post('/add-video', videoController.addVideo);
router.put('/edit/:videoId', videoController.editVideo);
router.delete('/delete/:videoId', videoController.deleteVideo);

module.exports = router;