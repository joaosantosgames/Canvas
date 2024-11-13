# Exercício: Criar Componente e Obstáculo no Canvas

## Objetivo
Neste exercício, você vai aprender a criar um componente laranja no meio da tela do canvas e um obstáculo abaixo desse componente. O obstáculo deve ser comprido na posição horizontal e de cor azul escuro em escala hexadecimal.

## Instruções
1. Abra o arquivo `script.js` na pasta `js`.
2. Crie um novo componente de cor laranja com largura e altura de 50 pixels.
3. Posicione este componente no meio da tela do canvas.
4. Crie um obstáculo abaixo do componente laranja. O obstáculo deve ser comprido na posição horizontal, com largura de 200 pixels e altura de 20 pixels, e de cor azul escuro (hexadecimal: `#00008B`).
5. Atualize o método `updateGameArea` para incluir este novo componente e obstáculo.

### Dicas
- Lembre-se de que a posição `(x, y)` do componente deve ser ajustada para que ele fique centralizado. 
- A largura e altura do canvas são 480 e 270 pixels, respectivamente.
- Utilize as variáveis `canvas.width` e `canvas.height` para auxiliar no cálculo da posição central.
- Posicione o obstáculo abaixo do componente laranja ajustando sua posição y.