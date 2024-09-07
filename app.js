function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos 
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

     // se campopesquisa for uma string sem nada 
     if (campoPesquisa == ""){
        section.innerHTML = "item nao  encontrado"   
        return
     }
     campoPesquisa = campoPesquisa.toLowerCase ()
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado e constrói o HTML dos resultados //
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase ()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))   {
            
            resultados += `
            <div class="item-resultado">
               
                <h2>
                    <a href=${dado.link} target="_blank">${dado.titulo}</a>
                </h2>
               
                <p class="descricao-meta">${dado.descricao}</p>
               
                <a href= ${dado.link} target="_blank">Compre Aqui!</a>
            </div>
        `;

        }
        
        // Cria um div para cada item do resultado //
        
    }

     if (!resultados) {
        resultados = "Nada foi encontrado"
     }


    // Atribui o HTML construído ao elemento section
    section.innerHTML = resultados;
}

