# 🛒 E-commerce - Projeto Front-End

Este é um projeto de um e-commerce desenvolvido como parte de um processo seletivo.  
O foco foi criar a estrutura visual e interativa utilizando **HTML**, **Sass** (pré-processador CSS) e **JavaScript** puros.

---

## 🚀 Link do Projeto
[👉 Acesse o site publicado aqui](https://ecommerce-4xlm.onrender.com/)

---

## ⚠️ Observações

Durante a análise após o deploy do projeto, identifiquei alguns pontos que não estavam totalmente alinhados com o protótipo original:

- **Cor de fundo das imagens:** percebi que, após o deploy, algumas imagens apresentaram uma cor de fundo incorreta. Isso ocorreu pela ausência da propriedade `background-color` nas classes relacionadas. O navegador, nesse caso, aplicou uma cor padrão automaticamente, causando uma divergência visual em relação ao protótipo. Importante ressaltar que, durante o desenvolvimento local utilizando o `vite run dev`, esse problema **não se manifestava**, o que dificultou sua identificação antecipada.

- **Sessão de "Lançamentos":** os itens dessa seção deveriam conter uma borda sutil, que não percebi durante os testes. Isso aconteceu porque utilizei um monitor antigo com baixa fidelidade de cores, dificultando a distinção entre os elementos visuais.

- **Newsletter e Footer:** o mesmo problema de percepção ocorreu nessas seções. Algumas cores e bordas definidas no protótipo acabaram não sendo aplicadas corretamente por não terem sido notadas nas condições de teste.

Todos esses ajustes são simples de serem corrigidos com pequenas alterações no CSS. No entanto, optei por não modificá-los após o prazo final do processo seletivo, a fim de preservar a integridade da entrega original.

---

## 🛠️ Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


---

## 📋 Descrição do Projeto
- Estrutura completa de um e-commerce.
- Header com logo, barra de pesquisa, ícones de login e carrinho.
- Listagem de departamentos.
- Layout responsivo para diferentes dispositivos.
- Estilização utilizando **Sass**, permitindo organização e manutenção mais eficiente do CSS.
- Interações básicas com JavaScript para melhorar a experiência do usuário.

