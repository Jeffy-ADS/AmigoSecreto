# Amigo Secreto

Um aplicativo web simples para organizar sorteios de amigo secreto entre amigos, familiares ou colegas de trabalho.

![Amigo Secreto Screenshot](assets/amigo-secreto.png)

## Descrição

O "Amigo Secreto" é uma aplicação que permite aos usuários adicionar nomes de participantes e realizar um sorteio automático, garantindo que cada pessoa receba um amigo secreto de forma aleatória e sem repetições. A interface é intuitiva e fácil de usar, tornando simples a organização de um evento de amigo secreto.

## Funcionalidades

- Adicionar participantes à lista de amigos
- Remover participantes da lista
- Realizar sorteio aleatório entre os participantes
- Visualizar resultados do sorteio
- Validações para garantir que ninguém tire a si mesmo
- Interface responsiva e amigável

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)

## Demonstração

### Vídeo Tutorial

[![Vídeo tutorial do Amigo Secreto](https://img.youtube.com/vi/t2bHdHU_tzg/0.jpg)](https://youtu.be/t2bHdHU_tzg?si=Y99m1EhiUNVhqFqJ)

*Clique na imagem acima para assistir ao vídeo tutorial completo*

### GIF Demonstrativo

![Demonstração do Amigo Secreto](link-para-seu-gif.gif)

## Como Usar

### Instalação

1. Clone este repositório para o seu computador:
   ```
   git clone https://github.com/seu-usuario/amigo-secreto.git
   ```

2. Navegue até a pasta do projeto:
   ```
   cd amigo-secreto
   ```

3. Abra o arquivo `index.html` em qualquer navegador moderno.

Alternativamente, você pode simplesmente baixar os arquivos e abrir o `index.html` em seu navegador.

### Utilização

1. Digite o nome de um participante no campo de texto
2. Clique no botão "Adicionar" ou pressione Enter para adicionar o nome à lista
3. Repita os passos 1 e 2 para adicionar todos os participantes (mínimo de 3)
4. Clique no botão "Sortear amigo" para realizar o sorteio
5. Os resultados serão exibidos abaixo, mostrando quem tirou quem
6. Para remover um participante, clique no botão "X" ao lado do nome

## Regras do Sorteio

- É necessário adicionar no mínimo 3 participantes para realizar o sorteio
- Nenhum participante pode tirar a si mesmo
- O sistema garante aleatoriedade no sorteio
- Todos os participantes serão incluídos no sorteio

## Estrutura do Projeto

```
amigo-secreto/
├── index.html         # Estrutura da página
├── style.css          # Estilos e aparência
├── app.js             # Lógica da aplicação
└── assets/            # Imagens e recursos
    ├── amigo-secreto.png
    └── play_circle_outline.png
```

## Personalização

Você pode personalizar a aparência do aplicativo modificando as variáveis CSS no início do arquivo `style.css`:

```css
:root {
    --color-primary: #4B69FD;    /* Cor de fundo principal */
    --color-secondary: #FFF9EB;  /* Cor de fundo secundária */
    --color-button: #fe652b;     /* Cor dos botões */
    --color-button-hover: #e55720; /* Cor do hover dos botões */
    --color-text: #444444;       /* Cor do texto */
    /* ... outras variáveis ... */
}
```

## Possíveis Melhorias Futuras

- Adicionar opção para salvar os resultados em um arquivo
- Implementar funcionalidade para enviar os resultados por e-mail
- Adicionar sistema de sugestões de presentes
- Criar versão mobile como aplicativo nativo
- Adicionar persistência de dados usando localStorage

## Solução de Problemas

### Nomes duplicados
O sistema impede a adição de nomes duplicados. Se você tentar adicionar um nome que já existe na lista, receberá um alerta.

### Sorteio não funciona
Certifique-se de que há pelo menos 3 participantes na lista. O sistema requer um mínimo de 3 pessoas para garantir que o sorteio funcione corretamente.

### Compatibilidade com navegadores
Esta aplicação foi testada nos navegadores modernos (Chrome, Firefox, Safari, Edge). Se você encontrar problemas em navegadores mais antigos, considere atualizar para uma versão mais recente.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## Autor

[Jefferson Brito] - [jeffesonbrito.ads@gmail.com]

---

Desenvolvido como parte de um desafio de programação focado em lógica JavaScript.
