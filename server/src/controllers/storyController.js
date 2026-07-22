import Story from "../models/Story.js";

export const createStory = async (req, res) => {
  try {
    const { title, description, image, category, author } = req.body;

    // Validation
    if (!title || !description || !author) {
      return res.status(400).json({
        success: false,
        message: "Title, Description and Author are required",
      });
    }

    // Create Story
    const story = await Story.create({
      title,
      description,
      image,
      category,
      author,
    });

    res.status(201).json({
      success: true,
      message: "Story created successfully",
      story,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


export const getAllStories = async (req, res) => {
  try {
    const stories = await Story.find().populate(
      "author",
      "name email role"
    );

    res.status(200).json({
      success: true,
      count: stories.length,
      stories,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getStoryById = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id).populate(
      "author",
      "name email role"
    );

    if (!story) {
      return res.status(404).json({
        success: false,
        message: "Story not found",
      });
    }

    res.status(200).json({
      success: true,
      story,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};