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
![resumo](https://user-images.githubusercontent.com/88235577/159070125-f12ec2b1-9181-4d6c-bf85-3ec878d0b861.png)


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
* O valor total de transações realizadas recebe o parâmetro transactions, que se encontra em summary.

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
![add](https://user-images.githubusercontent.com/88235577/159070202-97f9f29a-b6b5-4f5c-9069-ebf25598b9a9.png)

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
* Obs: A restrição foi aplicada somente como demonstração. Caso a página seja recarregada, o limite será reiniciado.

### Modal - Adicionar novo robô

![modal](https://user-images.githubusercontent.com/88235577/159070255-ea773e59-6900-407a-9dc5-6a2a95ce8a1d.png)

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

### Container de exibição dos cards dos robôs
![container](https://user-images.githubusercontent.com/88235577/159070810-7cb32d4a-ce8a-489c-b984-77ad5705ccf0.png)

```javascript
 useEffect(() => {
        api
            .get('/robot', {
                headers: {
                    limit: 8,
                    page: page
                }
            })
            .then((res) => {
                setRobots(res.data.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [page])
```

* Recebe os dados dos robôs pelo endpoint api.get('/robot'), com limite de 8 robôs por página.
* O array de dependências dessa função faz com que ela seja executada novamente sempre que a página for alterada, exibindo outros robôs. 

```javascript
useEffect(() => {
        api
            .get('/robot')
            .then((res) => {
                setPages(Math.ceil(res.data.data.length / 8));
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [robots])

```

* Recebe os dados de todos os robôs pelo endpoint api.get('/robot') e divide a quantidade de robôs por oito, para encontrar o número de páginas de maneira automatizada.
* A função Math.ceil recebe o valor da divisão por oito e retorna o número inteiro imediatamente superior, que será o número de páginas disponíveis.
* O array de dependências dessa função faz com que ela seja executada novamente sempre que novos robôs forem criados, exibindo a quantidade correta de páginas. 

```javascript
const handleChange = (event, value) => {
        setPage(value);
    };
```
* Recebe o valor da página selecionada e atribui esse valor à variável page, fazendo com que a página mude e os robôs correspondentes daquela página sejam exibidos na tela.

```javascript
robots.map((item) => {
          return <RobotCard robot={item} key={item.id} />
      })
``` 
* A função map recebe o array de objetos robots e retorna o card do robô.
* robot={item} faz com que os dados daquele robô sejam enviados para o card do robô por props.
 
### Card do robô


```javascript
   const robot = props.robot
```
* Recebe por props as propriedades do robô.

![card](https://user-images.githubusercontent.com/88235577/159070304-206c2b87-091e-43b3-ab16-97b461f325f3.png)
![cardna](https://user-images.githubusercontent.com/88235577/159070331-2e07be8c-7080-48a6-b3e2-1ee79b4652aa.png)
* N/A é exibido caso robot não possua a propriedade last_paper

```javascript
useEffect(() => {
        if (robot.running === 1) {
            setStatus(true)
        } else {
            setStatus(false)
        }

        if (robot.simulation === 0) {
            setSimulation("Pessimista")
        } else {
            setSimulation("Otimista")
        }
    }, [robot])

```
* Recebe os parâmetros running e simulation de robots.
* Caso robot.running = 1, o card aparecerá com um circulo verde e o escrito "Em execução".
* Caso robot.running = 0, o card aparecerá com um circulo vermelho e o escrito "Pausado".
* Caso robot.simulation = 0, o card aparecerá com o escrito "Pessimista".
* Por fim, caso robot.simulation = 1, o card aparecerá com o escrito "Otimista".

```javascript
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const currentDate = year + '-' + month + '-' + day;
    
    const filterDayTrades = () => {
        if (robot) {
            robot.movimentations.filter((item) => {
                if (item.date.includes(currentDate)) {
                    let array = todayTransactions
                    let newArray = array.push(item)
                    return setTodayTransactions(newArray)
                }
                return <></>
            })
        }
    }
    
    useEffect(() => {
        filterDayTrades()
        setTodayTransactionsCount(todayTransactions.length)
    }, [robot.movimentations])

```
* O trecho acima é responsável por verificar a quantidade de movimentações feitas no dia atual.
* Na primeira parte, recebe a data atual e a separa em dia. mês e ano. Entaõ, retorna a data no formato utilizado nos dados dos robôs (ano-mês-dia).
* Obs: A função padStart(2, '0') é responsável por verificar se o dia e o mês possuem dois dígitos e, caso não possuam, adiciona o dígito zero à frente.
* A função filterDayTrades() recebe os dados de robots e filtra as movimentações(robot.movimentations) pela data, retornando somente as datas que equivalem ao dia atual.
* Por fim, no useEffect, a função filterDayTrades() é executada e o valor de transações diárias recebe o tamanho do array retornado pela função filter, que equivale à quantidade de transações realizadas no dia atual.
* O array de dependências dessa função faz com que ela seja executada novamente sempre que novas movimentações ocorrerem.

```javascript
const handleClickBalanceView = () => {
        setShowBalance(!showBalance)
    }
```
* A função acima é responsável por exibir o valor resultante do dia somente se houver o clique no botão, tornando showBalance = true. 

```javascript
    const startRobot = () => {
         api.put(`/robot/${robot.id}/start`)
     }

     const stopRobot = () => {
         api.put(`/robot/${robot.id}/stop`)
     }
```
* Funções responsáveis por ativar ou desativar o robô. Estão comentadas no código, pois o endpoint está bloqueado por CORS.
