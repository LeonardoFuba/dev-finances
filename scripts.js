const Modal = {
  open() {
    // Abir modal
    // Adicionar a classe active ao modal
    document
      .querySelector('.modal-overlay')
      .classList
      .add('active')
  },
  close() {
    // fechar o modal
    // remover a classe active do modal
    document
      .querySelector('.modal-overlay')
      .classList
      .remove('active')
  }
}

const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,           // escrever em centavos para ficar inteiro
    date: '23/01/2021'
  },
  {
    id: 2,
    description: 'Criação de websites',
    amount: 500000,           // escrever em centavos para ficar inteiro
    date: '23/01/2021'
  },
  {
    id: 3,
    description: 'Internet',
    amount: -20000,           // escrever em centavos para ficar inteiro
    date: '23/01/2021'
  },
]

const Transaction = {
  incomes() {
    // somar as entradas
  },
  expenses() {
    // somar as saídas
  },
  total() {
    // entradas - saidas
  }
}

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)

    DOM.transactionsContainer.appendChild(tr)

  },
  innerHTMLTransaction(transaction) {
    const CSSclasse = transaction.amount > 0 ? "income" : "expense"

    const html = `
      <td class="description">${transaction.description}</td>
      <td class="${CSSclasse}">${transaction.amount}</td>
      <td class="date">${transaction.date}</td>
      <td><img src="./assets/minus.svg" alt="Remover transação"></td>

    `
    return html
  }
}

transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction)
})
