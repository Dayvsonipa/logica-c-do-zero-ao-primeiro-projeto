# Guia simples — GitHub e Vercel

## 1. Extraia o ZIP

Abra o arquivo `PORTAL-LOGICA-C-GITHUB-VERCEL.zip` e extraia seu conteúdo para uma pasta do computador.

## 2. Crie o repositório no GitHub

1. Acesse o GitHub e clique em **New repository**.
2. Nome sugerido: `logica-c-do-zero-ao-primeiro-projeto`.
3. Escolha repositório público ou privado.
4. Não adicione README, `.gitignore` ou licença nessa tela, pois o pacote já possui os arquivos necessários.
5. Clique em **Create repository**.

## 3. Envie os arquivos

1. No repositório vazio, clique em **uploading an existing file** ou **Add file → Upload files**.
2. Abra a pasta extraída.
3. Arraste **todo o conteúdo que está dentro dela** para a área de upload.
4. Aguarde o carregamento.
5. Em **Commit changes**, mantenha a opção de salvar diretamente na branch `main`.
6. Clique em **Commit changes**.

Confirme que `package.json`, `app`, `components`, `public` e `vercel.json` aparecem na raiz do repositório.

## 4. Publique na Vercel

1. Acesse a Vercel e clique em **Add New → Project**.
2. Importe o repositório criado no GitHub.
3. A Vercel deverá reconhecer **Next.js** automaticamente.
4. Não é necessário cadastrar variáveis de ambiente.
5. O arquivo `vercel.json` já orienta a compilação com `npm run build:vercel`.
6. Clique em **Deploy**.

## 5. Atualizações futuras

Quando novos arquivos forem enviados ou alterados na branch `main`, a Vercel criará uma nova publicação automaticamente.

## Não enviar ao repositório público

O ZIP `MATERIAL-PROFESSOR-LOGICA-C-NAO-PUBLICAR.zip` contém gabaritos e orientações reservadas. Mantenha-o fora do GitHub e da Vercel.
