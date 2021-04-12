const fileService = require("../services/fileService");
const config = require("config");
const fs = require("fs");
const Learner = require("../models/Learner");
const News = require("../models/News")
const Course = require("../models/Course");

class NewsController {
  async createNews(req, res) {
    try {
      const { title, newsImg, description } = req.body;
      const news = new News({
        title,
        newsImg,
        description,
        creator: req.learner.id,
      });
      await news.save();
      return res.json(news);
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  }
  async getAllNews(req, res) {
    try {
      const newses = await News.find({
        creator: req.learner.id,
      });
      return res.json(newses);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Can not get news" });
    }
  }
}

module.exports = new NewsController();
