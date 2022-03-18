# Smarttbot

```javascript
# //Clone este repositório
$ git clone https://github.com/FredNeves95/smarttbot.git

# //Acesse a pasta do projeto no terminal
$ cd smarttbot

# //Instale as dependências
$ npm i ou npm install

# //Para iniciar o projeto
$ npm start

# //O servidor iniciará na porta:3000 - acesse <http://localhost:3000>
```

## Página principal

### Resumo geral de operações

#### Resumo de movimentação
```javascript
const sum = robots.map((item) => item.profit)
                .reduce((prev, curr) => prev + curr, 0)
            setProfit(parseFloat(sum.toFixed(2)))
```
* Recebe um array de objetos (robots), obtido no endpoint api.get('/robot/paper'). 
* A função map percorre cada item desse array e retorna um novo array, do tamanho do original, mas somente com as informações do profit (lucro).
* A função reduce percorre cada item do novo array, incrementando o valor inicial, que era zero, com o valor do item atual.
* A função setProfit atribui à variável profit, criada anteriormente, o valor retornado pelo reduce, com restrição de duas casas decimais.

#### Total de transações realizadas e papéis negociados
* Dados obtidos no endpoint api.get('/robot/overview'), que retorna um objeto (summary). 
* O valor total de transações realizadas recebe o parâmetro transactions do objeto acima.

```javascript
summary.papers.map((item, index) => {
                            return (
                                <Summary key={index}>
                                    <p id='name'>{item.name}</p>
                                    <hr />
                                    <p id='transactions'>{item.trasactions} <span>transações</span></p>
                                </Summary>
                            )
```
* Os papéis negociados recebem o parâmetro papers, do objeto summary, que é um array com os dados das últimas transações.
* A função map recebe cada item do array papers e retorna um jsx com o nome e a quantidade de transações feitas naquele papel.

### Adicionar novo robô

```javascript
    const availableRobots = useSelector((state) => state.availableRobots.available)

    const openModal = () => {
        if (availableRobots <= 0) {
            alert('Oops! Você já atingiu o limite de robôs disponíveis.')
        } else {
            dispatch(setShow(true))
        }
    }
```
* Recebe um valor (availableRobots) e uma função (setShow) do redux. 
* Caso availableRobots for menor ou igual a zero, o modal não será aberto e aparecerá um alert na tela.
* Caso availableRobots for maior que zero, setShow receberá o booleano true e, então, o modal de adicionar robô aparecerá  na tela.
* A função openModal somente será executada com o clique.

### Modal - Adicionar novo robô


* Essa tela é exibida após openModal receber o valor true;
* A função abaixo recebe os valores digitados nos inputs e atribui ao valor correspondente no objeto body.

```javascript
   const handleChangeBody = (event) => {
        setBody({ ...body, [event.target.name]: event.target.value })
    }
```

* As funções abaixo alteram o parametro id do objeto body ao clicar em cada caixa, além de realizar a mudança de cores. Apesar de existirem outras estratégias, foram utilizadas somente essas duas, para manter a proposta de design.

```javascript
   const selectRaptor = () => {
        setRaptor(true)
        setTangram(false)
        setBody({ ...body, strategy_id: 1 })
    }

    const selectTangram = () => {
        setTangram(true)
        setRaptor(false)
        setBody({ ...body, strategy_id: 2 })
    }
```

* A função abaixo verifica se todas as informações foram preenchidas corretamente. Se não, exibirá um alert na tela do usuário. Se sim, enviará os dados do novo robô para a api através do endpoint api.post('/robot', body), notifica o usuário sobre o sucesso da criação do robô e executa a função closeModal().

```javascript
  const submitForm = () => {
        if (body.title === '' || body.initial_capital === '' || body.strategy_id === '') {
            alert('Preencha todas as informações necessárias.')
        } else if (body.initial_capital < 0) {
            alert('Digite um capital inicial do robô válido.')
        } else {
            api.post('/robot', body)
                .then((res) => {
                    alert('Robô adicionado com sucesso!')
                    dispatch(setAvailable(availableRobots - 1))
                    closeModal()
                })
                .catch((err) => {
                    alert('Oops! Ocorreu algum erro.')
                })
        }

    }
```
* A função closeModal() é responsável por fazer a alteração do setShow novamente para false, deixando de exibir o modal na tela. Ela será executada quando o usuário clicar em X, em cancelar ou ao criar com sucesso um robô.
```javascript
const closeModal = () => {
        dispatch(setShow(false))
    }
```
