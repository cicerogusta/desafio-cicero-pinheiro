import {ItemCardapio} from "./model/ItemCardapio.js";
import {Pedido} from "./model/Pedido.js";
import {Cardapio} from "./model/Cardapio.js";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let carrinho = []
        if (itens.length === 0) {
            console.log("Quantidade inválida!")
        } else {
            carrinho = itens
            if (metodoDePagamento !== "credito" || metodoDePagamento !== "debito" || metodoDePagamento !== "dinheiro") {
                console.log("Forma de pagamento inválida!")
            } else {
                const possuiCodigoCafe = itensPedido.some(item => item.itemCardapio.codigo === "cafe");
                const possuiCodigoSanduiche = itensPedido.some(item => item.itemCardapio.codigo === "sanduiche");

                if (!possuiCodigoSanduiche || !possuiCodigoCafe) {
                    console.log("Item extra não pode ser pedido sem o principal")
                } else {
                    if (carrinho.length === 0 && metodoDePagamento === "dinheiro") {
                        console.log("Não há itens no carrinho de compra!")
                    } else {
                        if (carrinho.length === 0 && metodoDePagamento === "debito") {
                            console.log("Não há itens no carrinho de compra!")
                        } else {
                            if (carrinho.length === 0 && metodoDePagamento === "credito") {
                                console.log("Não há itens no carrinho de compra!")
                            } else {
                                let total = 0
                                for (let i = 0; i < carrinho.length; i++) {
                                    if (carrinho[i].itemCardapio.codigo === null) {
                                        console.log("Item inválido!")
                                    } else {
                                        if (metodoDePagamento === "dinheiro") {
                                            const taxaReducao = 0.05
                                            let qtd = carrinho[i].qtd
                                            total += carrinho[i].itemCardapio.valor * qtd - (carrinho[i].itemCardapio.valor * taxaReducao)
                                        } else {
                                            if (metodoDePagamento === "credito") {
                                                const taxaAumento = 0.03;
                                                let qtd = carrinho[i].qtd
                                                total += carrinho[i].itemCardapio.valor * qtd + (carrinho[i].itemCardapio.valor * taxaAumento)
                                            } else {
                                                let qtd = carrinho[i].qtd
                                                total += carrinho[i].itemCardapio.valor * qtd
                                            }
                                        }
                                    }
                                }
                                console.log(total)
                            }
                        }
                    }
                }
            }


        }


    }

}

const cafe = new ItemCardapio("cafe", "Café", 3.00);
const chantily = new ItemCardapio("chantily", "Chantily (extra do Café)", 1.50);
const suco = new ItemCardapio("suco", "Suco Natural", 6.20);
const sanduiche = new ItemCardapio("sanduiche", "Sanduíche", 6.50);
const queijo = new ItemCardapio("queijo", "Queijo (extra do Sanduíche)", 2.00);
const salgado = new ItemCardapio("salgado", "Salgado", 7.25);
const combo1 = new ItemCardapio("combo1", "1 Suco e 1 Sanduíche", 9.50);
const combo2 = new ItemCardapio("combo2", "1 Café e 1 Sanduíche", 7.50);

const itensCardapio = [
    cafe, chantily, suco, sanduiche, queijo, salgado, combo1, combo2
]

const cardapio = new Cardapio(itensCardapio);
const pedidoCafe = new Pedido(cardapio.listaItens[0], 1);

const pedidoChantilySemCafe = new Pedido(cardapio.listaItens[1], 1)
const pedidoQueijoSemSanduiche = new Pedido(cardapio.listaItens[4], 1)
const pedidoSanduiche = new Pedido(cardapio.listaItens[3], 1)

const metodoDePagamento = "aaa";


const itensPedido = []
new CaixaDaLanchonete().calcularValorDaCompra(metodoDePagamento, itensPedido)

export {CaixaDaLanchonete};
