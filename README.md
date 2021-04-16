<h1 align="center">
  <img alt="JobsCalc" title="JobsCalc" src="https://i.imgur.com/Veqm7Gh.png" width="220px" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="dev.finances" src=".github/jobscalc.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- NodeJS
- EJS
- Express
- SQLite

## 💻 Projeto

O JobsCalc é uma aplicação de estimativa de cálculo para projetos freelancer, onde é possível cadastrar e excluir jobs (projetos), obtendo uma estimativa de custo de cada job. Além disso, é possível traçar o valor da hora da pessoa que estará usando o sistema 💰

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/s4fytPFbDiSkv4GPSfKaLE/Jobs-Planning). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](.github/LICENSE.md) para mais detalhes.

---

Feito com ♥ by Rocketseat :wave: [Participe da nossa comunidade!](https://discordapp.com/invite/gCRAFhc)


## :memo: Comandos para adicionar ao github:
1) Adcionar um novo repositório lá no github
2) git init
3) git remote add origin git@github.com:johntravolta1/maratona-discover-2.git (comando ssh pego no git hub)
4) git add . (pré-empacota tudo que tem aqui pra subir pra lá)
   git status => mostra os arquivos que foram pré-empacotados
5) ela fez errado e agora é preciso tirar os arquivos do node_modules do git add . (dese)
6) criar o arquivo .gitignore e colocar nele a linha:
node_modules/ => o package.json já tem as dependências que precisa.
7) usar o comando pra remover os arquivos node_modules do empacotamento:
git rm -r --cached node_modules/
8) agora o git status não mostra mais as node_modules
9) git add . => pré empacotar o readme que estou mexendo agora e fica sempre vermelho no git status. Quando estiver tudo verdinho, damos um commit com uma mensagem
10) git commit => empacotamento
11) mensagem: commit inicial
12) git status agora não aparece mais nada pois já foi tudo empacotado

Fazer o check-in:
13) git branch -M main (muda o nome de master pra main)
14) git push -u origin main (faz o check-in pro github)

Não funcionou pois não configurei o SSH, para usar o métdos https, use o comando:
15) git remote set-url origin https://github.com/johntravolta1/maratona-discover-2.git