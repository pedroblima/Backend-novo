const Alunos = require("../models/Alunos");

const AlunosController = {
  getAll: async (req, res) => {
    try {
      const alunos = await Alunos.find();

      const alunosComMedia = alunos.map(alunos => {
        const notas = alunos.notas;
        const totalNotas = notas.length;
        const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
        const media = totalNotas > 0 ? somaNotas / totalNotas : 0;
        const situacao = media >= 5 ? 'Aprovado' : 'Reprovado';

        return {
          _id: alunos._id,
          nome: alunos.nome,
          turma: alunos.turma,
          notas: alunos.notas,
          media: media,
          situacao: situacao 
        };
      });

      res.json(alunosComMedia);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },


  get: async (req, res) => {
    try {
      res.json(await Alunos.findById(req.params.id));
    } catch (error) {
      res.status(404).json({ error: 'Aluno não encontrado' });
    }
  },

  create: async (req, res) => {
    try {
      res.json(await Alunos.create(req.body));
    } catch (error) {
      res.status(400).json({ error: 'Erro ao criar aluno' });
    }
  },


  update: async (req, res) => {
    try {
      res.json(await Alunos.findByIdAndUpdate(req.params.id, req.body, { new: true }));
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar aluno' });
    }
  },


  delete: async (req, res) => {
    try {
      res.json(await Alunos.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ error: 'Erro ao deletar aluno' });
    }
  },


  Reprovados: async (req, res) => {
    try {
      const alunosReprovados = await Alunos.find({ notas: { $lt: 3 } });
      res.json(alunosReprovados);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar alunos reprovados' });
    }
  },
  Recuperacao: async (req, res) => {
    try {
      const alunosRecuperacao = await Alunos.find({ notas: { $gte: 3, $lt: 5 } });
      res.json(alunosRecuperacao);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar alunos em recuperação' });
    }
  },


  Aprovados: async (req, res) => {
    try {
      const alunosAprovados = await Alunos.find({ notas: { $gte: 5 } });
      res.json(alunosAprovados);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar alunos aprovados' });
    }
  },

  migrar: async (req, res) => {
    try {
      const alunosTurmaE = await Alunos.find({ turma: 'E' });

      alunosTurmaE.forEach(async aluno => {
        await Alunos.findByIdAndUpdate(aluno._id, { turma: 'B' });
      });

      res.json({ message: 'Alunos da turma E migrados para a turma B com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao migrar alunos da turma E para a turma B' });
    }
  },
  excluirAlunos: async (req, res) => {
    try {
      await Alunos.deleteMany({ nome: { $in: ['Teste', 'teste'] } });
      res.json({ message: 'Alunos com o nome "Teste" excluídos com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir alunos com o nome "Teste"' });
    }
  }

};

module.exports = AlunosController;
