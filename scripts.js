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
  {
    id: 4,
    description: 'App',
    amount: 100000,           // escrever em centavos para ficar inteiro
    date: '23/01/2021'
  },
]

const Transaction = {
  incomes() {
    // somar as entradas
    let income = 0;
    transactions.forEach(transaction => {
      if(transaction.amount > 0) {
        income += transaction.amount;
      }
    })

    return income;
  },
  expenses() {
    // somar as saídas
    let expense = 0;
    transactions.forEach(transaction => {
      if(transaction.amount < 0) {
        expense += transaction.amount;
      }
    })

    return expense;
  },
  total() {
    // entradas - saidas
    return Transaction.incomes() + Transaction.expenses();
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

    const amount = Utils.formatCurrency(transaction.amount)

    const html = `
      <td class="description">${transaction.description}</td>
      <td class="${CSSclasse}">${amount}</td>
      <td class="date">${transaction.date}</td>
      <td><img src="./assets/minus.svg" alt="Remover transação"></td>

    `
    return html
  },
  updateBalance() {
    document
      .getElementById('incomeDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.incomes())
    document
      .getElementById('expenseDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.expenses())
    document
      .getElementById('totalDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.total())
  }
}

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : ""

    value = String(value).replace(/\D/g, "")

    value = Number(value) / 100

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })

    return signal + value
  }
}

transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction)
})

DOM.updateBalance();