const Video = require('../models/Video')
const mongoose = require('mongoose')

exports.addVideo = async (req, res, next) => {
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

exports.getVideos = async (req, res, next) => {
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

exports.deleteVideo = async (req, res, next) => {
  try{
    const videoId = req.params.videoId;
    console.log(videoId)
    await Video.deleteOne({_id: videoId}).then((result) => res.json(result));
  }catch(err){
    res.status(500).send('Server error');
  }
}

exports.editVideo = async (req, res, next) => {
  try{
    const videoId = req.params.videoId;
    const newData = req.body;
    console.log(videoId + ' '+ newData)
    await Video.updateOne({_id: videoId}, newData).then((result) => res.json(result));
  }catch(err){
    res.status(500).send('Server error');
  }
}
