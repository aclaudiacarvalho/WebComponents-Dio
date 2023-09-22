class Cardnews extends HTMLElement{
  constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
     }

     build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardEsquerda = document.createElement("div");
        cardEsquerda.setAttribute("class","card___esquerda");

        const autor = document.createElement("span");
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p")

        cardEsquerda.appendChild(autor);
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        cardEsquerda.appendChild(linkTitle);
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        cardEsquerda.appendChild(newsContent);
        newsContent.textContent = this.getAttribute("contet")

        const cardDireita = document.createElement("div");
        cardDireita.setAttribute("class","card___direita");
        
        const newsImage = document.createElement("img");
        newsImage.src = (this.getAttribute("photo") || "assest/default-img.jpg");
        newsImage.alt = "Foto da noticia";

        cardDireita.appendChild(newsImage);

        componentRoot.appendChild(cardEsquerda);
        componentRoot.appendChild(cardDireita);

        return componentRoot;
     }
     styles(){
         const style = document.createElement("style");
         style.textContent=`
            .card{
               width: 80%;
               margin-left: 5px;
               -webkit-box-shadow: 9px 8px 30px 2px rgba(0,0,0,0.75);
               -moz-box-shadow: 9px 8px 30px 2px rgba(0,0,0,0.75);
               box-shadow: 9px 8px 30px 2px rgba(0,0,0,0.75);
               display: flex;
               flex-direction: row;
               justify-content: space-between;
            }
            .card___esquerda{
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  padding-left: 10px;
            }
            .card___esquerda >span{
                  font-weight: 400;
            }
            .card___esquerda >a{
                  margin-top: 15px ;
                  font-size: 25px;
                  color: black;
                  font-weight: 400;
            }
            .card___esquerda >p{
            color: rgb(124, 124, 124);
            }
            .card___direita >img{
                  margin-top: 5px;
                  margin-right: 5px;
                  max-width:200px;
                  max-height:150px;
                  width: auto;
                  height: auto;
               }
         `;
    return style;
   }

}

customElements.define('card-news', Cardnews);