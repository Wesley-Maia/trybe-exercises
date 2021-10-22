#=======================================================================================================
# Bloco 2 - Git & GitHub
#=======================================================================================================
# Parte 1 - Instalação e configuração

#1- Instalação
sudo apt-get install git-all

#2- Configuração
#2.1 - Identidade
git config --global user.name "Wesley Maia"
git config --global user.email maia.weol@gmail.com

#2.2- Editor
git config --global core.editor "code --wait"

#2.3- Abrir o arquivo de configuração no VS Code
code .gitconfig

#3- Verificando a instalação e a configuração
#3.1- Saber qual versão do git está instalada
git --version

#3.2- Verificar e-mail e user name
git config --list

#=======================================================================================================
# Parte 2 - Criar conta no GitHub

#=======================================================================================================
# Parte 3 - Adicionando uma chave SSH na sua conta do GitHub

#1- Gerando uma chave SSH
#1.1- Criar uma nova chave SSH, usando o seu email como rótulo
ssh-keygen -t rsa -b 4096 -C "maia.weol@gmail.com"

#1.2- Durante o processo irá aparecer escrito no terminal Enter a file in which to save the key , quando isso acontecer pressione Enter para aceitar a localização padrão /home/you/.ssh/id_rsa .
Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]

#1.3- Agora você deve digitar uma senha segura.
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]

#2- Adicionando sua chave SSH ao ssh-agent
#2.1- Iniciar o ssh-agent em background
eval "$(ssh-agent -s)"

#2.2- Adicionar sua chave privada SSH ao ssh-agent
ssh-add ~/.ssh/id_rsa

#3- Adicionando a chave SSH na sua conta do GitHub
# Como o xclip não vem instalado por padrão na maioria das distribuições,
# precisaremos instalá-lo usando o comando a seguir:
sudo apt-get install xclip

# Agora utilize o comando abaixo para copiar o conteúdo da sua chave id_rsa.pub
# Para garantir que o conteúdo foi copiado dê Ctrl + V em um editor de texto
xclip -sel clip < ~/.ssh/id_rsa.pub

#4- Caso o xclip não funcione, execute o comando abaixo e copie manualmente a saída do terminal.
cat ~/.ssh/id_rsa.pub


#5- Entre no seu GitHub e siga os passos abaixo:
#5.1- No canto superior direito do GitHub , clique na sua foto de perfil e clique em Settings ;
#5.2- Na barra lateral esquerda, clique em SSH and GPG keys ;
#5.3- Clique em New SSH key ou Add SSH key ;
#5.4- No campo Título , adicione um descrição para a nova chave;
#5.5- Cole sua chave dentro do campo Key ;
#5.6- Clique em Add SSH key ;
#5.7- Caso seja solicitado, confirme sua senha do Github.

#=======================================================================================================
# Parte 4 - Do git init ao git push

#1- Criando um repositório local
git init

#2- Adicionando e comitando
# Adicionar todos os arquivos modificados
git add .

# Você também pode adicionar arquivos específicos
git add meu_arquivo.js

# Então você comita a alteração
# Ao comitar você deve adicionar também uma mensagem que descreve o que aquela alteração faz

git commit -m "Mensagem sobre a alteração feita"

#3- Criando um repositório no GitHub

#4- Conectando o repositório local com o remoto
git remote add origin git@github.com:user-github/repo-name.git

#5- Para verificar que tudo funcionou corretamente
git remote -v
#origin  git@github.com:user-github/repo-name.git (fetch)
#origin  git@github.com:user-github/repo-name.git (push)

#=======================================================================================================
# Parte 5 - O seu repositório no GitHub

#=======================================================================================================
