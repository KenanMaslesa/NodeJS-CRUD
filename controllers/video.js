const Video = require('../models/Video')
const mongoose = require('mongoose')

exports.addVideo = async (req, res) => {
  try {
    const newVideo = new Video({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      language: req.body.language,
      ytID: req.body.ytID,
      isFree: req.body.isFree
    })

    await newVideo.save().then((result) => {
      res.status(201).json(result)
    });

  } catch (error) {
    res.status(500).json({
      error: {
        message: 'Desila se greška na serveru. Pokušajte ponovo.',
      },
    })
  }
}

exports.getVideos = async (req, res) => {
  await Video.find().then((videos) => {
    res.json(videos);
  })
}

exports.getVideoById = async (req, res) => {
  try{
    const videoId = req.params.videoId;
    await Video.findOne({ _id: videoId}).then((video) => {
    res.json(video)
    })
  }catch(err){
    res.status(500).send('Server error:' + err.message);
  }
}

exports.loadMoreVideos = async (req, res) => {
  const page = req.params.page;
  const take = 8;
  try{
    await Video.find()
    .limit(take)
    .skip(take * page)
    .then((videos) => {
      res.json(videos)
    })
  }catch(err){
    res.status(500).send('Server error');
  }

}

exports.deleteVideo = async (req, res) => {
  try{
    const videoId = req.params.videoId;
    await Video.deleteOne({_id: videoId}).then((result) => res.json(result));
  }catch(err){
    res.status(500).send('Server error');
  }
}

exports.editVideo = async (req, res) => {
  try{
    const videoId = req.params.videoId;
    const newData = req.body;
    await Video.updateOne({_id: videoId}, newData).then((result) => res.json(result));
  }catch(err){
    res.status(500).send('Server error');
  }
}
