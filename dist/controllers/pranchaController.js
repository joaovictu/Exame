"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarPrancha = exports.listarPranchas = void 0;
const pranchaRepository_1 = require("../repositories/pranchaRepository");
const listarPranchas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pranchas = yield (0, pranchaRepository_1.obterTodasPranchas)();
        res.json(pranchas);
    }
    catch (error) {
        res.status(500).json({ mensagem: 'Erro ao listar pranchas' });
    }
});
exports.listarPranchas = listarPranchas;
const adicionarPrancha = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { quantidade, tamanhoEmPes, cor } = req.body;
    if (!quantidade || !tamanhoEmPes || !cor) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }
    try {
        const novaPrancha = yield (0, pranchaRepository_1.salvarPrancha)({ quantidade, tamanhoEmPes, cor });
        res.status(201).json(novaPrancha);
    }
    catch (error) {
        res.status(500).json({ mensagem: 'Erro ao cadastrar prancha' });
    }
});
exports.adicionarPrancha = adicionarPrancha;
