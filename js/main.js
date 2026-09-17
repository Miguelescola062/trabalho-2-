import { aleatorio } from "./aleatorio.js";
import {perguntas } from "./pergunta.js"


const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")




const perguntas = [
    {
        enunciado: "Assim que saiu da escola você encontra um dispositivo tecnológico capaz de criar textos, imagens, músicas e até ajudar a resolver problemas. Você nunca tinha visto algo parecido. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao:[ "No início ficou com medo do que essa tecnologia pode fazer.","De primeira, deu aquele receio do que essa tecnologia é capaz de fazer.","No começo rolou um certo medo de até onde essa tecnologia pode ir."]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: ["Quis descobrir como utilizar a tecnologia em diferentes situações do seu dia a dia.","Decidiu explorar como aplicar a tecnologia nas mais diversas situações do seu cotidiano.","Bateu a vontade de entender como encaixar essa tecnologia na sua rotina diária."]
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora decidiu fazer uma sequência de aulas sobre como ela pode ser utilizada. No fim de uma aula ela pede que você crie uma solução para um problema da escola. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de IA para pesquisar ideias, encontrar informações relevantes e ajudar a organizar uma solução para o problema.",
                afirmacao: ["Conseguiu utilizar a IA para encontrar informações úteis e desenvolver uma solução para a escola.","Deu um jeito de usar a IA para garimpar dados úteis e bolar uma solução certeira para a escola.","Conseguiu aplicar a inteligência artificial para pesquisar coisas relevantes e criar um projeto para o colégio."]
            },
            {
                texto: "Cria uma solução com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o problema.",
                afirmacao: ["Sentiu mais facilidade em utilizar seus próprios conhecimentos para desenvolver sua solução.","Percebeu que ficou bem mais fácil usar a própria bagagem de conhecimento para construir a resposta do problema.","Sentiu muito mais firmeza ao colocar o que já sabia em prática para criar a própria solução."]
            }
        ]
    },
    {
        enunciado: "Após a criação da solução, a professora realizou um debate entre a turma para entender como cada projeto foi desenvolvido. Nessa conversa também foi levantado um ponto muito importante: como a IA pode mudar o futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e ajudar as pessoas a desenvolver novas habilidades.",
                afirmacao: ["Vem buscando aprender mais sobre IA e luta para abrir novos caminhos profissionais utilizando a tecnologia.","Segue na busca por dominar a IA, batalhando para abrir novas portas na carreira através da tecnologia.","Está sempre atrás de aprender mais sobre IA, correndo atrás de criar novas oportunidades profissionais com a tecnologia."]
            },
            {
                texto: "Se preocupa com as pessoas que podem perder seus empregos para máquinas e defende a importância de preparar os trabalhadores.",
                afirmacao: ["Sua preocupação com as pessoas motivou a criar um grupo de estudos para discutir formas de utilizar IA de maneira ética.","O cuidado que tem com as pessoas falou mais alto e fez nascer um grupo de estudos focado no uso ético da IA.","Moveu céus e terra pelas pessoas ao seu redor, criando um grupo de debates para pensar no impacto ético da inteligência artificial."]
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse sua opinião sobre o futuro da tecnologia. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma ferramenta de desenho tradicional, como o Paint.",
                afirmacao: ["Notou também que muitas pessoas ainda não sabem utilizar ferramentas tradicionais e decidiu compartilhar seus conhecimentos de desenho digital.","Percebeu que muita gente ainda apanha para mexer no básico, então resolveu ensinar o que sabe sobre desenho digital.","Viu que vários colegas não dominavam nem as ferramentas tradicionais e decidiu passar pra frente sua bagagem em arte digital."]
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagens com Inteligência Artificial.",
                afirmacao: ["Acelerou o processo de criação utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar.","Turbinou o ritmo das suas criações com os geradores de imagem e hoje em dia ainda dá uma força para quem se atrapalha na hora de desenhar.","Conseguiu agilizar o processo criativo usando geradores de imagem e agora até ensina quem tem dificuldades com o desenho."]
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de ciências para entregar na semana seguinte, o andamento do trabalho está atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho ficou totalmente igual ao que foi gerado pelo chat. O que você faz?",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: ["Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da tecnologia para tudo.","Acabou caindo na armadilha de deixar tudo nas mãos da IA e agora se sente refém da tecnologia até para o básico.","Passou a usar a inteligência artificial como muleta para qualquer tarefa, criando uma dependência incômoda no dia a dia."]
            },
            {
                texto: "A IA pode ser uma tecnologia muito avançada, mas é preciso revisar suas respostas, corrigir possíveis erros e contribuir com as próprias ideias.",
                afirmacao: ["Percebeu que os textos gerados pela IA podem apresentar erros e opiniões que não refletem o que pensava, por isso utiliza a ferramenta apenas como auxílio.","Viu que a IA vira e mexe solta uns deslizes e umas ideias nada a ver com o que pensa, então passou a usar a ferramenta só como um apoio.","Notou que os textos da inteligência artificial podem vir com furos ou opiniões diferentes das suas, optando por usar a tecnologia apenas como ponto de partida."]
            }
        ]
    },
]



let atual = 0;
let perguntaAtual;
let historiaFinal = ""

function mostraPergunta() {

if (atual>=perguntas.length) {
     mostraResultado()
    return
    }
    perguntaAtual=perguntas[atual]
    caixaPerguntas.textContent=perguntaAtual.enunciado
    caixaAlternativas.textContent="";
    mostraAltenativas()
}


function mostraAltenativas(){
for (const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas= document.createElement("button")
    botaoAlternativas.textContent= alternativa.texto
    botaoAlternativas.addEventListener("click",()=> respostaSelecionada(alternativa))
    caixaAlternativas.appendChild(botaoAlternativas)
}
}

function respostaSelecionada(opcaoSelecionada){
const afirmacoes = aleatorio(opcaoSelecionada.afirmacao)
historiaFinal += afirmacoes + " "
atual++
mostraPergunta()



}


function mostraResultado(){
caixaPerguntas.textContent="Em 2049..."
textoResultado.textContent= historiaFinal
caixaAlternativas.textContent="";
}




mostraPergunta()

