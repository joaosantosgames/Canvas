# Exercício 6: Formulário Básico

Tarefa: Crie um formulário HTML simples que contenha campos para "Nome" e "Email". Adicione botões de "Enviar" e "Resetar" no formulário. Utilize as tags <form>, <label>, <input type="text">, <input type="email">, <input type="submit"> e <input type="reset">.

``` html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Formulário HTML</title>
    </head>
    <body>
        <h1>Formulário de Contato</h1>
        <form>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome">
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <br>
            <input type="submit" value="Enviar">
            <input type="reset" value="Resetar">
        </form>
    </body>
    </html>
```