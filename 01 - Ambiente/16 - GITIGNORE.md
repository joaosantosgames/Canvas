# .gitignore

## O que é o `.gitignore`?

O arquivo `.gitignore` é um componente crucial em repositórios Git. Ele é usado para especificar quais arquivos e diretórios devem ser ignorados pelo controle de versão. Isto é especialmente útil para evitar o rastreamento de arquivos temporários, de configuração pessoal, ou de dependências que não precisam ser incluídas no repositório.

## Estrutura do arquivo `.gitignore`

O arquivo `.gitignore` é colocado geralmente na raiz do seu repositório. Cada linha no arquivo representa um padrão de arquivos e diretórios que devem ser ignorados pelo Git.

### Exemplos de uso

Aqui estão alguns exemplos de como configurar um arquivo `.gitignore`:

### Ignorar arquivos de sistema operacionais

```gitignore
# Ignorar arquivos do macOS
.DS_Store

# Ignorar arquivos do Windows
Thumbs.db

# Ignorar arquivos de sistema operacionais
.DS_Store
Thumbs.db

# Ignorar arquivos de log
*.log

# Ignorar diretórios de dependências
node_modules/
vendor/

# Ignorar diretórios de ambientes virtuais
venv/
.env/
.venv/

# Ignorar arquivos de configuração pessoal
*.env
*.local

# Ignorar arquivos de saída de build
dist/ 
0hh1-master/
build/
out/

# Ignorar arquivos de cache
.cache/
*.pyc

# Ignorar IDEs e editores de texto
.vscode/
.idea/
*.sublime-project
*.sublime-workspace

# Ignorar outros arquivos específicos do projeto
*.bak
*.tmp

# Fim do arquivo .gitignore
```