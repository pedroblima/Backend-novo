const express = require('express');
const Cargo = require('../models/Cargo');


const CargoController = {
  getAll: async (req, res) => {
    try {
      res.json(await Cargo.find());
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar cargos' });
    }
  },

  get: async (req, res) => {
    try {
      res.json(await Cargo.findById(req.params.id));
    } catch (error) {
      res.status(404).json({ error: 'Cargo não encontrado' });
    }
  },

  create: async (req, res) => {
    try {
      const novoCargo = await Cargo.create(req.body);
      res.status(201).json(novoCargo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  
  calcularReajuste: async (req, res) => {
    try {
      const { nome, percentualReajuste } = req.body;
      const cargo = await Cargo.findOne({ nome: nome });

      if (!cargo) {
        return res.status(404).json({ error: 'Cargo não encontrado' });
      }

      const novoSalario = cargo.salario * (1 + percentualReajuste / 100);
      cargo.salario = novoSalario;
      await cargo.save();

      res.json({ message: 'Reajuste aplicado com sucesso', novoSalario });
    } catch (error) {
      console.error('Erro ao calcular reajuste salarial:', error);
      res.status(500).json({ error: 'Erro ao calcular reajuste salarial' });
    }
  },
  getCargosUtilizados: async (req, res) => {
    try {
      const nomeCargo = req.params.nomeCargo;
      const cargosUtilizados = await Cargo.find({ cargo: nomeCargo });

      res.json(cargosUtilizados);
    } catch (error) {
      console.error('Erro ao buscar cargos utilizados:', error);
      res.status(500).json({ error: 'Erro ao buscar cargos utilizados' });
    }
  },

};

module.exports = CargoController;
