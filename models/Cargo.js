const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    tipoPessoa: {
        type: String,
        required: true,
        enum: ['PF', 'PJ', 'pf', 'pj'],
        validate: {
            validator: function (value) {
                return value === 'PF', 'pf' || value === 'PJ', 'pj';
            },
            message: props => `${props.value} não é um tipo de pessoa válido!`
        }
    },
    nome: {
        type: String,
        required: true,
        maxlength: 20,
        validate: {
            validator: function (value) {
                return value.length <= 20;
            },
            message: props => `${props.value} não é um nome válido!`
        }
    },
    cpf: {
        type: String,
        validate: {
            validator: function (value) {
                return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value);
            },
            message: props => `${props.value} não é um CPF válido!`
        }
    },
    cnpj: {
        type: String,
        validate: {
            validator: function (value) {
                return /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(value);
            },
            message: props => `${props.value} não é um CNPJ válido!`
        }
    },
    sexo: {
        type: String,
        enum: ['M', 'F', 'm', 'f'],
        validate: {
            validator: function (value) {
                return value === 'M', 'm' || value === 'F', 'f';
            },
            message: props => `${props.value} não é um sexo válido!`
        }
    },
    cargo: {
        type: String,
        enum: ['Estagiario', 'Tecnico', 'Gerente', 'Diretor', 'Presidente'],
        validate: {
            validator: function (value) {
                return ['Estagiario', 'Tecnico', 'Gerente', 'Diretor', 'Presidente'].includes(value);
            },
            message: props => `${props.value} não é um cargo válido!`
        }
    },
    salario: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return value >= 1412;
            },
            message: props => `${props.value} não é um salário válido!`
        }
    },
    reajuste: {
        type: Number
    }
});

Schema.pre('validate', function(next) {
    if (this.tipoPessoa === 'PF' && this.cnpj) {
        next(new Error('Favor informar somente o CPF, não o CNPJ'));
    } else if (this.tipoPessoa === 'PJ' && !this.cnpj) {
        next(new Error('CNPJ não informado'));
    } else if (this.tipoPessoa === 'PJ' && this.sexo) {
        next(new Error('O campo sexo só é permitido para PF'));
    } else if (this.tipoPessoa === 'PJ' && this.cargo) {
        next(new Error('O campo cargo só é permitido para PF'));
    } else if (this.cpf && this.cnpj) {
        next(new Error('Favor informar somente uma opção, CPF ou CNPJ, de acordo com o Tipo de Pessoa'));
    } else if (this.tipoPessoa === 'PF' && !this.cpf) {
        next(new Error('CPF não informado'));
    } else {
        next();
    }
});

const Cargo = mongoose.model('Cargo', Schema);

module.exports = Cargo;
