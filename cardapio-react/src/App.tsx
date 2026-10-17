import { Header } from "./components/layout/header"

function App() {

  return (
    <>
      <Header />

      <nav>
        <ul className="container">
          <li><a href="#" className="active">Todos</a></li>
          <li><a href="#">Lanches</a></li>
          <li><a href="#">Porções</a></li>
          <li><a href="#">Bebidas</a></li>
          <li><a href="#">Sobremesas</a></li>
        </ul>
      </nav>

      <main>
        <section>
          <header>
            <h2>Produtos</h2>
            <p>Categoria <span id="selected-category">Todos</span></p>
          </header>

          <article>
            <figure>
              <img src="./assets/img/burger.png" alt="Burguer" />
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Burguer</h3>
            <p>Pão Brioche, hamburguer 160g, queijo prato e molho da casa.</p>
            <p>R$22</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/burger-bacon.png" alt="Burguer Bacon" />
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Burguer Bacon</h3>
            <p>Hamburgueres de 160g, cheddar, bacon e cebola</p>
            <p>R$29</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/burger-double.png" alt="Burguer Duplo" />
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Burguer Duplo</h3>
            <p>Dois Hamburgueres de 160g, cheddar, bacon e cebola</p>
            <p>R$25</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/batata-rustica.png" alt="Batata Rustica" />
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Batata Rustica</h3>
            <p>Porção de batata com alecrim, parmesão e maionese</p>
            <p>R$10</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/batata-tradicional.png" alt="Batata Tradicional" />
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Batata Tradicional</h3>
            <p>Porção de batata com alecrim, parmesão e maionese</p>
            <p>R$10</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/agua.png" alt="Agua" />
              <figcaption>Bebidas</figcaption>
            </figure>
            <h3>Agua</h3>
            <p>Agua mineral 500ml</p>
            <p>R$5</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/refri.png" alt="Refri" />
              <figcaption>Bebidas</figcaption>
            </figure>
            <h3>Refrigerante</h3>
            <p>Refrigerante 500ml</p>
            <p>R$5</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/chopp.png" alt="Chopp" />
              <figcaption>Bebidas</figcaption>
            </figure>
            <h3>Chopp</h3>
            <p>Chopp 500ml</p>
            <p>R$10</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/petit-gateau.png" alt="Petit Gâteau" />
              <figcaption>Sobremesas</figcaption>
            </figure>
            <h3>Petit Gâteau</h3>
            <p>Petit Gâteau de chocolate</p>
            <p>R$10</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/mousse-maracuja.png" alt="Mousse de Maracujá" />
              <figcaption>Sobremesas</figcaption>
            </figure>
            <h3>Mousse de Maracujá</h3>
            <p>Mousse de maracujá com cobertura de chocolate</p>
            <p>R$12</p>
            <button type="button">Adicionar</button>
          </article>



        </section>


        <aside>
          <h2>seu pedido</h2>

          <div className="cart-empty">
            <img src="./assets/img/cart.svg" alt="Carrinho Vazio" />
            <p>Seu carrinho está vazio</p>
            <p>escolha um item do carrinho para começar</p>

          </div>
        </aside>
      </main>

      <footer>
        <div className="container">
          <p>Cardápio digital - Desenvolvimento de aplicações web</p>
          <p>Rua Mato Grosso, 200 - Pato Branco - PR</p>
        </div>
      </footer>
    </>
  )
}

export default App