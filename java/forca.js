
//criando palavras

const palavras = [
	palavras001={
		nome: "INTERESTELAR",
		categoria: "FILMES",
		dica: "DICA: FICÇÃO CIENTÍFICA"
	},
	palavras002={
		nome: "HARRYPOTTER",
		categoria: "FILMES",
		dica: "DICA: FICÇÃO"

	},
	palavras003={
		nome: "CONTAGIO",
		categoria: "FILMES",
		dica: "DICA: FICÇÃO CIENTÍFICA"

	},
	palavras004={
		nome: "GRAVIDADE",
		categoria: "FILMES",
		dica: "DICA: FICÇÃO CIENTÍFICA"
	},
	palavras005={
		nome: "PROMETHEUS",
		categoria: "FILMES",
		dica: "DICA: FICÇÃO"
	},
	palavras006={
		nome: "BRASILIA",
		categoria: "CARROS",
		dica: "DICA: WOLKSVAGEN"
	},
	palavras007={
		nome: "VECTRA",
		categoria: "CARROS",
		dica: "DICA: CHEVROLET"
	},
	palavras008={
		nome: "SANDERO",
		categoria: "CARROS",
		dica: "DICA: RENAULT"
	},
	palavras009={
		nome: "POLO",
		categoria: "CARROS",
		dica: "DICA: WOLKSVAGEN"
	},
	palavras010={
		nome: "CIVIC",
		categoria: "CARROS",
		dica: "DICA: HONDA"
	},
	palavras011={
		nome: "HIPOPOTAMO",
		categoria: "ANIMAIS",
		dica: "DICA: SEMI-AQUATICOS"
	},
	palavras012={
		nome: "ELEFANTE",
		categoria: "ANIMAIS",
		dica: "DICA: SAVANAS"
	},
	palavras013={
		nome: "GUAXINIM",
		categoria: "ANIMAIS",
		dica: "DICA: MÃO-PELADA"
	},
	palavras014={
		nome: "BELUGA",
		categoria: "ANIMAIS",
		dica: "DICA: AQUATICO"
	},
	palavras015={
		nome: "TUCANO",
		categoria: "ANIMAIS",
		dica: "DICA: AVE"
	},	
	palavras016={
		nome: "CARAMBOLA",
		categoria: "FRUTAS",
		dica: "DICA: CINCO GOMOS"
	},
	palavras017={
		nome: "FRAMBOESA",
		categoria: "FRUTAS",
		dica: "DICA: VERMELHO-ESCURO"
	},
	palavras018={
		nome: "GROSELHA",
		categoria: "FRUTAS",
		dica: "DICA: PARECE COM TAMARINDO"
	},
	palavras019={
		nome: "JABUTICABA",
		categoria: "FRUTAS",
		dica: "DICA: É QUASE UM ANIMAL"
	},
	palavras020={
		nome: "TAMARINDO",
		categoria: "FRUTAS",
		dica: "DICA: TEM DE GROSELHA"
	},
];

	let tentativas = 6;
	let listaDinamica = [];
	let palavraSecretaSorteada;
	let palavraSecretaCategoria;
	let palavraSecretaDica;

//criar palavra secreta

criaPlavraSecreta();
function criaPlavraSecreta() {
	const palavraSorteada = parseInt(Math.random() * palavras.length);
	
	palavraSecretaSorteada = palavras[palavraSorteada].nome;
	palavraSecretaCategoria = palavras[palavraSorteada].categoria;
	palavraSecretaDica = palavras[palavraSorteada].dica;
	
	console.log(palavraSecretaSorteada);
	console.log(palavraSecretaCategoria);
	console.log(palavraSecretaDica);
};

//mostrar palavra na rela

montaPalavraTela();
function montaPalavraTela()
{

	const dicas = document.getElementById("dica");
	dica.innerHTML = palavraSecretaDica;

	const categoria = document.getElementById("categoria");
	categoria.innerHTML = palavraSecretaCategoria;

	const palavraTela = document.getElementById("palavra-secreta");
	palavraTela.innerHTML = "";

	for (i = 0; i < palavraSecretaSorteada.length; i++)
	{
		if (listaDinamica[i] == undefined){
			listaDinamica[i] = "&nbsp;"
			palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
		}
		else
		{
			palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
		}
	}
}

//Verificação de letras

function verificaLetra(letra)
{
	if (tentativas > 0)
	{
		document.getElementById("tecla-" + letra).disabled = true;
		mudarStyleLetra("tecla-" + letra);
		comparaListas(letra);
		montaPalavraTela();
	}
}

//Estilizando teclas

function mudarStyleLetra(tecla)
{
	document.getElementById(tecla).style.background = "orangered";
	document.getElementById(tecla).style.color = "dimgray";

}

//validando tentativas

function comparaListas(letra)
{
	const posicao =palavraSecretaSorteada.indexOf(letra);
	if (posicao < 0)
	{
		tentativas--;
		mostraImagem();
		if (tentativas == 0) 
		{
			alert('Opss, não foi dessa vez, a palavra era: ' + palavraSecretaSorteada);
		}
	}
	else
	{
		for (i = 0; i < palavraSecretaSorteada.length; i++)
		{
			if (palavraSecretaSorteada[i] == letra)
			{
				listaDinamica[i] = letra;
			}
		}
	}

	let vitoria = true;

	for (var i = 0; i < palavraSecretaSorteada.length; i++)
	{
		if(palavraSecretaSorteada[i] != listaDinamica[i])
		{
			vitoria = false;
		}
	}

	if (vitoria == true) 
	{
		alert('Parabéns, você ganhou!!');
		tentativas == 0;
	}	
}

//Mostrando imagens da forca

function mostraImagem() {
	switch(tentativas){
		case 5:
			document.getElementById("imagem").style.background = "url('img/forca2.png')";
			break;
		case 4:
			document.getElementById("imagem").style.background = "url('img/forca3.png')";
			break;
		case 3:
			document.getElementById("imagem").style.background = "url('img/forca4.png')";
			break;
		case 2:
			document.getElementById("imagem").style.background = "url('img/forca5.png')";
			break;
		case 1:
			document.getElementById("imagem").style.background = "url('img/forca6.png')";
			break;
		case 0:
			document.getElementById("imagem").style.background = "url('img/forca7.png')";
			break;
		default:
			document.getElementById("imagem").style.background = "url('img/forca1.png')";
	}
}