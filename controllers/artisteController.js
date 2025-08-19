//Import Model
const artisteModel = require("../models/artiste");

//POST: Create an artiste
exports.createArtiste = async (req, res) => {
  try {
    //check if a user already exists
    if (artisteModel.findOne({ where: { name: req.body.name } })) {
      return res.status(404).json({
        message: `Artiste with name ${req.body.name} already exists`,
      });
    } else {
      const { name, gender, genre, is_Married, country, record_label } = req.body;

      //Create a new Instance of the model and save to the database automatically
      const newArtiste = await artisteModel.create({
        name,
        gender,
        genre,
        record_label,
        is_Married,
        country,
      });
      //Send a success response
      res.status(201).json({
        message: `Created successfully`,
        data: newArtiste,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Read: Get all Artistes
exports.getAllArtistes = async (req, res) => {
  try {
    const allArtistes = await artisteModel.findAll();

    res.status(201).json({
      message: `All Artiste in the database`,
      data: allArtistes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getOneArtiste = async (req, res) => {
  try {
    //Extract the ID from params
    const { id } = req.params;
    //Find the Artiste with the corresponding ID
    const Artiste = await artisteModel.findByPk(id);
    if (!Artiste) {
      res.status(404).json({
        message: `Artiste with ID:${id} not found`,
      });
    }
    //Send a success response
    res.status(200).json({
      message: `Artiste Found`,
      data: Artiste,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateArtiste = async (req, res) => {
  try {
    //Extract the ID from params
    const { id } = req.params;
    //Find the Artiste with the corresponding ID
    const Artiste = await artisteModel.findByPk(id);
    if (!Artiste) {
      res.status(404).json({
        message: `Artiste with ID:${id} not found`,
      });
    } else {
      //Update the Artiste with the new data from the request body
      const { name, gender, genre, is_Married, country, record_label } = req.body;
      //Update the Artiste
      const updatedArtiste = await Artiste.update({
        name,
        gender,
        genre,
        is_Married,
        country,
        record_label,
      });
      res.status(200).json({
        message: `Artiste Updated Successfully`,
        data: updatedArtiste,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteOneArtiste = async (req, res) => {
  try {
    //Extract the ID from params
    const { id } = req.params;
    //Find the Artiste with the corresponding ID
    const Artiste = await artisteModel.findByPk(id);
    if (!Artiste) {
      res.status(404).json({
        message: `Artiste with ID:${id} not found`,
      });
    }
    //Delete the Artiste
    const deleteArtiste = await Artiste.destroy(id);
    res.status(200).json({
      message: `Artiste Deleted Successfully`,
      data: deleteArtiste,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteAllArtistes = async (req, res) => {
  try {
    //Delete all Artistes
    await artisteModel.destroy({
      where: {},
      truncate: true,
    });
    res.status(200).json({
      message: `All Artistes Deleted Successfully`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
