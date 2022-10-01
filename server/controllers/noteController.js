const express = require('express');

exports.getAllNotes = async (req, res) => {
  res.status(200).json({
    message: 'all notes',
  });
};
