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

```
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
