const items = [
    {
    id: 0,
    nome: 'camisetas',
    img: 'imagem',
    quantidade : 0
    },
    {
    id: 1,
    nome: 'calças',
    img: 'imagem',
    quantidade : 0
    },
    {
    id: 2,
    nome: 'moletom',
    img: 'imagem',
    quantidade : 0
    }    
]

startStore = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML+= `

        <div class="produto-single">
             <img src="`+val.img+`" />
             <p>`+val.nome+`</p>
             <a key="`+val.id+`" href="#">Adicionar ao carrinho!<a/>
        </div>
        `
    }    
    )
} 

startStore()

atualizarCarrinho = () => {
console.log(items);
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttibute(`key`);
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}

