import express from 'express';
const notesCtrl = {};
const checkConection = (req, res) => {
  res.json({ mensaje: 'Conection with controller ok' });
};
const surveyIndex = (req, res) => {
  res.json({ mensaje: 'surveyIndex' });
};
const surveyStore = (req, res) => {
  res.json({ mensaje: 'surveyStore' });
};
const surveyUpdate = (req, res) => {
  res.json({ mensaje: 'surveyUpdate' });
};
const surveyDestroy = (req, res) => {
  res.json({ mensaje: 'surveyDestroy' });
};

export { checkConection, surveyIndex, surveyStore, surveyUpdate, surveyDestroy };
