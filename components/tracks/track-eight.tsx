import {
  AlertTriangle,
  CheckCircle2,
  Database,
  FileArchive,
  FileInput,
  FileOutput,
  FolderSync,
  HardDrive,
  List,
  Pencil,
  PlusCircle,
  Search,
  ShieldCheck,
  TerminalSquare,
  Trash2,
} from "lucide-react";

import { CodeBlock } from "@/components/code-block";
import { Activity, ConceptCard, Reveal, TrailSection } from "@/components/tracks/lesson-parts";
import type { Track } from "@/lib/course";

const createFile = `#include <stdio.h>

int main(void) {
    FILE *arquivo;

    arquivo = fopen("mensagem.txt", "w");

    if (arquivo == NULL) {
        printf("Nao foi possivel criar o arquivo.\n");
        return 1;
    }

    fputs("Meu primeiro arquivo criado em C!\n", arquivo);
    fclose(arquivo);

    printf("Arquivo criado com sucesso.\n");
    return 0;
}`;

const handleError = `#include <stdio.h>

int main(void) {
    FILE *arquivo = fopen("dados.txt", "r");

    if (arquivo == NULL) {
        perror("Nao foi possivel abrir dados.txt");
        return 1;
    }

    printf("Arquivo aberto para leitura.\n");
    fclose(arquivo);
    return 0;
}`;

const writeMode = `#include <stdio.h>

int main(void) {
    FILE *arquivo = fopen("placar.txt", "w");

    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo.\n");
        return 1;
    }

    fprintf(arquivo, "Luna;1200\n");
    fprintf(arquivo, "Kai;950\n");
    fclose(arquivo);

    printf("Placar recriado.\n");
    return 0;
}`;

const appendMode = `#include <stdio.h>

int main(void) {
    FILE *arquivo = fopen("placar.txt", "a");

    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo.\n");
        return 1;
    }

    fprintf(arquivo, "Maya;1430\n");
    fclose(arquivo);

    printf("Nova pontuacao adicionada.\n");
    return 0;
}`;

const saveProduct = `#include <stdio.h>

int main(void) {
    int id = 101;
    char nome[] = "Teclado mecanico";
    float preco = 249.90f;
    int estoque = 12;
    FILE *arquivo = fopen("produto.txt", "w");

    if (arquivo == NULL) {
        printf("Erro ao criar produto.txt.\n");
        return 1;
    }

    fputs("=== PRODUTO ===\n", arquivo);
    fprintf(arquivo, "Codigo: %d\n", id);
    fprintf(arquivo, "Nome: %s\n", nome);
    fprintf(arquivo, "Preco: %.2f\n", preco);
    fprintf(arquivo, "Estoque: %d\n", estoque);
    fclose(arquivo);

    printf("Dados gravados.\n");
    return 0;
}`;

const readCharacters = `#include <stdio.h>

int main(void) {
    FILE *arquivo = fopen("mensagem.txt", "r");
    int caractere;

    if (arquivo == NULL) {
        printf("Crie mensagem.txt antes de executar.\n");
        return 1;
    }

    while ((caractere = fgetc(arquivo)) != EOF) {
        putchar(caractere);
    }

    fclose(arquivo);
    return 0;
}`;

const readLines = `#include <stdio.h>

int main(void) {
    FILE *arquivo = fopen("placar.txt", "r");
    char linha[120];
    int numero = 1;

    if (arquivo == NULL) {
        printf("Arquivo placar.txt nao encontrado.\n");
        return 1;
    }

    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        printf("Linha %d: %s", numero, linha);
        numero++;
    }

    fclose(arquivo);
    return 0;
}`;

const saveContact = `#include <stdio.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    Contato contato = {1, "Ana Souza", "3199999-1234"};
    FILE *arquivo = fopen("contatos.txt", "w");

    if (arquivo == NULL) {
        printf("Erro ao criar contatos.txt.\n");
        return 1;
    }

    fprintf(arquivo, "%d;%s;%s\n",
            contato.id, contato.nome, contato.telefone);
    fclose(arquivo);

    printf("Contato salvo.\n");
    return 0;
}`;

const parseContact = `#include <stdio.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    char linha[120] = "7;Bruno Lima;3198888-7654";
    Contato contato;
    int camposLidos;

    camposLidos = sscanf(linha, "%d;%59[^;];%24[^\n]",
                         &contato.id, contato.nome, contato.telefone);

    if (camposLidos == 3) {
        printf("ID: %d\n", contato.id);
        printf("Nome: %s\n", contato.nome);
        printf("Telefone: %s\n", contato.telefone);
    } else {
        printf("Linha em formato invalido.\n");
    }
    return 0;
}`;

const appendContact = `#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

void limparEntrada(void);
void lerTexto(char texto[], int tamanho);

int main(void) {
    Contato contato;
    FILE *arquivo;

    printf("ID: ");
    scanf("%d", &contato.id);
    limparEntrada();

    printf("Nome: ");
    lerTexto(contato.nome, 60);
    printf("Telefone: ");
    lerTexto(contato.telefone, 25);

    arquivo = fopen("contatos.txt", "a");
    if (arquivo == NULL) {
        printf("Erro ao abrir contatos.txt.\n");
        return 1;
    }

    fprintf(arquivo, "%d;%s;%s\n",
            contato.id, contato.nome, contato.telefone);
    fclose(arquivo);
    printf("Contato acrescentado.\n");
    return 0;
}

void limparEntrada(void) {
    int caractere;
    while ((caractere = getchar()) != '\n' && caractere != EOF) {
    }
}

void lerTexto(char texto[], int tamanho) {
    fgets(texto, tamanho, stdin);
    texto[strcspn(texto, "\n")] = '\0';
}`;

const listContacts = `#include <stdio.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    FILE *arquivo = fopen("contatos.txt", "r");
    char linha[120];
    Contato contato;
    int camposLidos;
    int quantidade = 0;

    if (arquivo == NULL) {
        printf("Nenhum contato salvo.\n");
        return 0;
    }

    printf("ID | NOME                       | TELEFONE\n");
    printf("----------------------------------------------\n");

    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        camposLidos = sscanf(linha, "%d;%59[^;];%24[^\n]",
                             &contato.id, contato.nome, contato.telefone);
        if (camposLidos == 3) {
            printf("%2d | %-26s | %s\n",
                   contato.id, contato.nome, contato.telefone);
            quantidade++;
        }
    }

    fclose(arquivo);
    printf("Total: %d contato(s).\n", quantidade);
    return 0;
}`;

const searchContact = `#include <stdio.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    FILE *arquivo = fopen("contatos.txt", "r");
    char linha[120];
    Contato contato;
    int idProcurado;
    int encontrado = 0;

    if (arquivo == NULL) {
        printf("Nenhum contato salvo.\n");
        return 0;
    }

    printf("ID procurado: ");
    scanf("%d", &idProcurado);

    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (sscanf(linha, "%d;%59[^;];%24[^\n]",
                   &contato.id, contato.nome, contato.telefone) == 3 &&
            contato.id == idProcurado) {
            printf("Encontrado: %s | %s\n",
                   contato.nome, contato.telefone);
            encontrado = 1;
            break;
        }
    }

    fclose(arquivo);
    if (!encontrado) {
        printf("Contato nao encontrado.\n");
    }
    return 0;
}`;

const updateContact = `#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

void limparEntrada(void);
void lerTexto(char texto[], int tamanho);

int main(void) {
    FILE *origem = fopen("contatos.txt", "r");
    FILE *temporario;
    char linha[120];
    Contato contato;
    int idProcurado;
    int encontrado = 0;

    if (origem == NULL) {
        printf("Nenhum contato salvo.\n");
        return 0;
    }

    temporario = fopen("contatos.tmp", "w");
    if (temporario == NULL) {
        printf("Erro ao criar arquivo temporario.\n");
        fclose(origem);
        return 1;
    }

    printf("ID que deseja atualizar: ");
    scanf("%d", &idProcurado);
    limparEntrada();

    while (fgets(linha, sizeof(linha), origem) != NULL) {
        if (sscanf(linha, "%d;%59[^;];%24[^\n]",
                   &contato.id, contato.nome, contato.telefone) == 3) {
            if (contato.id == idProcurado) {
                printf("Novo nome: ");
                lerTexto(contato.nome, 60);
                printf("Novo telefone: ");
                lerTexto(contato.telefone, 25);
                encontrado = 1;
            }
            fprintf(temporario, "%d;%s;%s\n",
                    contato.id, contato.nome, contato.telefone);
        }
    }

    fclose(origem);
    fclose(temporario);

    if (!encontrado) {
        remove("contatos.tmp");
        printf("Contato nao encontrado.\n");
        return 0;
    }

    remove("contatos.bak");
    if (rename("contatos.txt", "contatos.bak") != 0) {
        printf("Erro ao proteger o arquivo original.\n");
        remove("contatos.tmp");
        return 1;
    }

    if (rename("contatos.tmp", "contatos.txt") != 0) {
        rename("contatos.bak", "contatos.txt");
        printf("Erro ao substituir. O original foi restaurado.\n");
        return 1;
    }

    remove("contatos.bak");
    printf("Contato atualizado.\n");
    return 0;
}

void limparEntrada(void) {
    int caractere;
    while ((caractere = getchar()) != '\n' && caractere != EOF) {
    }
}

void lerTexto(char texto[], int tamanho) {
    fgets(texto, tamanho, stdin);
    texto[strcspn(texto, "\n")] = '\0';
}`;

const deleteContact = `#include <stdio.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    FILE *origem = fopen("contatos.txt", "r");
    FILE *temporario;
    char linha[120];
    Contato contato;
    int idProcurado;
    int encontrado = 0;

    if (origem == NULL) {
        printf("Nenhum contato salvo.\n");
        return 0;
    }

    temporario = fopen("contatos.tmp", "w");
    if (temporario == NULL) {
        printf("Erro ao criar arquivo temporario.\n");
        fclose(origem);
        return 1;
    }

    printf("ID que deseja excluir: ");
    scanf("%d", &idProcurado);

    while (fgets(linha, sizeof(linha), origem) != NULL) {
        if (sscanf(linha, "%d;%59[^;];%24[^\n]",
                   &contato.id, contato.nome, contato.telefone) == 3) {
            if (contato.id == idProcurado) {
                encontrado = 1;
            } else {
                fprintf(temporario, "%d;%s;%s\n",
                        contato.id, contato.nome, contato.telefone);
            }
        }
    }

    fclose(origem);
    fclose(temporario);

    if (!encontrado) {
        remove("contatos.tmp");
        printf("Contato nao encontrado.\n");
        return 0;
    }

    remove("contatos.bak");
    if (rename("contatos.txt", "contatos.bak") != 0) {
        printf("Erro ao proteger o arquivo original.\n");
        remove("contatos.tmp");
        return 1;
    }

    if (rename("contatos.tmp", "contatos.txt") != 0) {
        rename("contatos.bak", "contatos.txt");
        printf("Erro ao substituir. O original foi restaurado.\n");
        return 1;
    }

    remove("contatos.bak");
    printf("Contato excluido.\n");
    return 0;
}`;

const countValidRecords = `#include <stdio.h>

int main(void) {
    FILE *arquivo = fopen("contatos.txt", "r");
    char linha[120];
    int id;
    char nome[60];
    char telefone[25];
    int validos = 0;
    int invalidos = 0;

    if (arquivo == NULL) {
        printf("Nenhum contato salvo.\n");
        return 0;
    }

    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (sscanf(linha, "%d;%59[^;];%24[^\n]",
                   &id, nome, telefone) == 3) {
            validos++;
        } else {
            invalidos++;
        }
    }

    fclose(arquivo);
    printf("Registros validos: %d\n", validos);
    printf("Linhas ignoradas: %d\n", invalidos);
    return 0;
}`;

const backupFile = `#include <stdio.h>

int main(void) {
    FILE *origem = fopen("contatos.txt", "r");
    FILE *backup;
    int caractere;

    if (origem == NULL) {
        printf("Nenhum arquivo para copiar.\n");
        return 0;
    }

    backup = fopen("contatos-backup.txt", "w");
    if (backup == NULL) {
        printf("Erro ao criar o backup.\n");
        fclose(origem);
        return 1;
    }

    while ((caractere = fgetc(origem)) != EOF) {
        fputc(caractere, backup);
    }

    fclose(origem);
    fclose(backup);
    printf("Backup concluido.\n");
    return 0;
}`;

export function TrackEight({ track }: { track: Track }) {
  return (
    <div className="mt-10 space-y-5">
      <div className="track-download-banner"><div><p className="section-kicker">Materiais da trilha</p><strong>Dezesseis programas em C sobre arquivos e persistência</strong><span>Exemplos progressivos, operações isoladas e desafios preparados para o Dev-C++.</span></div><a className="button-primary" href="/downloads/trilha-08/trilha-08-codigos.zip" download><FileArchive /> Baixar todos os códigos</a></div>
      <div className="devcpp-banner"><TerminalSquare /><div><strong>Observe onde o Dev-C++ cria os arquivos</strong><p>Ao usar somente o nome, como <code>contatos.txt</code>, o arquivo é criado na pasta de execução do programa. Se não o encontrar, pesquise dentro da pasta do projeto.</p></div></div>

      <TrailSection topic={track.topics[0]} number="01">
        <p>Na trilha anterior, os contatos existiam somente enquanto o programa estava aberto. Quando a execução terminava, a memória usada pelo vetor era liberada. <strong>Persistir</strong> significa registrar os dados em um local que continue existindo depois que o programa fechar.</p>
        <div className="persistence-compare"><div><Database /><small>MEMÓRIA</small><strong>Rápida e temporária</strong><p>Variáveis e vetores desaparecem ao encerrar.</p></div><div><HardDrive /><small>ARQUIVO</small><strong>Mais duradouro</strong><p>Os dados podem ser recuperados na próxima execução.</p></div></div>
        <div className="learning-callout"><ShieldCheck /><div><strong>Arquivo de texto não é banco de dados</strong><p>Ele é excelente para aprender persistência e construir o primeiro projeto. Sistemas maiores precisam de recursos adicionais, como controle de acesso, concorrência e transações.</p></div></div>
        <Activity title="Mapeie o ciclo dos dados" level="guiada"><p>Explique o que acontece com um contato cadastrado apenas em um vetor quando o programa termina.</p><Reveal title="Revelar explicação"><p>O contato estava na memória usada pelo processo. Ao encerrar, essa memória é liberada e o próximo início do programa cria um vetor vazio.</p></Reveal></Activity>
        <Activity title="Escolha o que deve persistir" level="pratica"><p>Em um jogo, classifique como temporários ou persistentes: posição atual, volume escolhido, nome do jogador, animação em andamento e recorde.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[1]} number="02">
        <p>A biblioteca <code>stdio.h</code> define o tipo <code>FILE</code>. Uma variável <code>FILE *</code> não contém todo o texto; ela funciona como uma referência para o fluxo aberto entre o programa e o arquivo.</p>
        <CodeBlock code={createFile} filename="criar-primeiro-arquivo.c" downloadUrl="/downloads/trilha-08/criar-primeiro-arquivo.c" />
        <div className="file-lifecycle"><div><FileInput /><strong>1. Abrir</strong><code>fopen</code></div><span>→</span><div><FileOutput /><strong>2. Usar</strong><code>fputs / fprintf</code></div><span>→</span><div><CheckCircle2 /><strong>3. Fechar</strong><code>fclose</code></div></div>
        <p>O fechamento confirma que os dados pendentes foram enviados ao arquivo e libera o recurso. Por isso, todo caminho bem-sucedido de abertura precisa chegar a um <code>fclose</code>.</p>
        <Activity title="Leia o ponteiro" level="guiada"><p>Na declaração <code>FILE *arquivo;</code>, qual é o nome da variável e por que existe um asterisco?</p><Reveal title="Revelar resposta"><p>A variável se chama <code>arquivo</code>. O asterisco indica que ela é um ponteiro para uma estrutura controlada pela biblioteca de entrada e saída.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[2]} number="03">
        <p><code>fopen</code> recebe o caminho e o modo de abertura. Quando não consegue abrir, devolve <code>NULL</code>. O programa deve verificar esse resultado <strong>antes</strong> de tentar ler ou escrever.</p>
        <CodeBlock code={handleError} filename="tratar-erro-de-abertura.c" downloadUrl="/downloads/trilha-08/tratar-erro-de-abertura.c" />
        <div className="concept-grid"><ConceptCard label="SUCESSO" title="arquivo != NULL" tone="blue">A referência pode ser usada e depois fechada.</ConceptCard><ConceptCard label="FALHA" title="arquivo == NULL" tone="amber">Pare a operação e mostre uma mensagem útil.</ConceptCard><ConceptCard label="DIAGNÓSTICO" title="perror(...)" tone="slate">Acrescenta a causa informada pelo sistema operacional.</ConceptCard></div>
        <div className="warning-callout"><AlertTriangle /><div><strong>Nunca use o arquivo depois de receber NULL</strong><p>Funções como <code>fprintf</code> e <code>fgets</code> precisam de uma referência válida. Continuar após a falha pode encerrar o programa de forma inesperada.</p></div></div>
        <Activity title="Teste uma falha real" level="pratica"><p>Execute o programa sem criar <code>dados.txt</code>. Depois crie o arquivo, execute novamente e compare os resultados.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[3]} number="04">
        <p>O modo informa o que o programa pretende fazer. Escolher o modo errado pode apagar dados ou impedir a abertura. Os três primeiros modos que precisamos dominar são <code>r</code>, <code>w</code> e <code>a</code>.</p>
        <div className="file-mode-cards"><div><code>r</code><strong>read · ler</strong><p>Exige que o arquivo já exista. Começa no início.</p></div><div className="danger-mode"><code>w</code><strong>write · reescrever</strong><p>Cria o arquivo ou apaga o conteúdo anterior.</p></div><div><code>a</code><strong>append · acrescentar</strong><p>Cria se necessário e grava sempre no final.</p></div></div>
        <CodeBlock code={writeMode} filename="modo-w-recriar.c" downloadUrl="/downloads/trilha-08/modo-w-recriar.c" />
        <CodeBlock code={appendMode} filename="modo-a-acrescentar.c" downloadUrl="/downloads/trilha-08/modo-a-acrescentar.c" />
        <Activity title="Preveja antes de executar" level="guiada"><p>Execute o programa do modo <code>w</code> duas vezes. Quantas duplas permanecem? Depois execute o modo <code>a</code> duas vezes.</p><Reveal title="Revelar previsão"><p>O modo <code>w</code> deixa apenas Luna e Kai, pois recria o arquivo. Cada execução com <code>a</code> acrescenta outra linha de Maya ao final.</p></Reveal></Activity>
        <Activity title="Escolha o modo" level="pratica"><p>Indique o modo para: consultar uma agenda, zerar um relatório antigo e adicionar um novo registro sem apagar os anteriores.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[4]} number="05">
        <p><code>fputs</code> grava um texto pronto. <code>fprintf</code> funciona como o <code>printf</code>, mas recebe o destino antes do formato. Assim, valores de variáveis podem ser convertidos em texto dentro do arquivo.</p>
        <CodeBlock code={saveProduct} filename="gravar-produto-formatado.c" downloadUrl="/downloads/trilha-08/gravar-produto-formatado.c" />
        <div className="stream-flow"><div><small>NA TELA</small><code>printf("%d", id);</code></div><span>→</span><div><small>NO ARQUIVO</small><code>fprintf(arquivo, "%d", id);</code></div></div>
        <p>O <code>\n</code> também precisa ser gravado. Sem ele, o próximo conteúdo continuará na mesma linha.</p>
        <Activity title="Crie um boletim" level="pratica"><p>Grave nome do aluno, duas notas e média em <code>boletim.txt</code>, deixando cada informação em uma linha.</p></Activity>
        <Activity title="Relatório de vendas" level="desafio"><p>Use um vetor de três produtos e grave uma linha formatada para cada registro.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[5]} number="06">
        <p>Para ler, abrimos com <code>r</code> e repetimos enquanto houver conteúdo. <code>fgetc</code> lê um caractere por vez; <code>fgets</code> tenta ler uma linha inteira respeitando o tamanho do vetor.</p>
        <CodeBlock code={readCharacters} filename="ler-caractere-por-caractere.c" downloadUrl="/downloads/trilha-08/ler-caractere-por-caractere.c" />
        <CodeBlock code={readLines} filename="ler-arquivo-por-linhas.c" downloadUrl="/downloads/trilha-08/ler-arquivo-por-linhas.c" />
        <div className="read-strategies"><div><code>fgetc</code><strong>Unidade: caractere</strong><p>Útil para copiar, contar ou analisar cada símbolo.</p></div><div><code>fgets</code><strong>Unidade: linha</strong><p>Mais conveniente para registros textuais completos.</p></div></div>
        <div className="learning-callout"><ShieldCheck /><div><strong>Por que caractere é int?</strong><p><code>fgetc</code> precisa representar todos os caracteres possíveis e também o valor especial <code>EOF</code>, que sinaliza o fim do arquivo.</p></div></div>
        <Activity title="Conte linhas" level="pratica"><p>Adapte o segundo programa para mostrar apenas a quantidade total de linhas.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[6]} number="07">
        <p>Para reconstruir uma <code>struct</code> depois, precisamos de um padrão previsível. Nesta trilha, cada contato ocupará uma linha e seus campos serão separados por ponto e vírgula.</p>
        <CodeBlock code={saveContact} filename="salvar-registro-delimitado.c" downloadUrl="/downloads/trilha-08/salvar-registro-delimitado.c" />
        <div className="line-record"><span>1</span><b>;</b><span>Ana Souza</span><b>;</b><span>3199999-1234</span></div>
        <div className="record-labels"><small>ID</small><small>separador</small><small>NOME</small><small>separador</small><small>TELEFONE</small></div>
        <p>Esse formato é simples e legível, mas cria uma regra: os próprios campos não devem conter o separador. No nosso primeiro projeto, validaremos o texto para impedir ponto e vírgula.</p>
        <Activity title="Desenhe o formato" level="guiada"><p>Como ficaria a linha do contato de ID 8, nome Lucas Mendes e telefone 313333-4444?</p><Reveal title="Revelar linha"><p><code>8;Lucas Mendes;313333-4444</code></p></Reveal></Activity>
        <Activity title="Modele produtos" level="pratica"><p>Defina uma linha para produto com id, nome, preço e estoque. Escolha a ordem e mantenha-a em todos os registros.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[7]} number="08">
        <p>Ler a linha não basta: precisamos separar seus campos e convertê-los para os tipos da estrutura. <code>sscanf</code> lê a partir de uma string. Os conjuntos <code>[^;]</code> significam “leia até encontrar ponto e vírgula”.</p>
        <CodeBlock code={parseContact} filename="converter-linha-em-struct.c" downloadUrl="/downloads/trilha-08/converter-linha-em-struct.c" />
        <div className="parse-pipeline"><div><small>TEXTO</small><code>7;Bruno Lima;...</code></div><span>→</span><div><small>SSCANF</small><strong>separa e converte</strong></div><span>→</span><div><small>STRUCT</small><code>contato.nome</code></div></div>
        <p>O retorno de <code>sscanf</code> informa quantos campos foram preenchidos. Só usamos o registro quando o resultado é 3; assim, uma linha incompleta não entra silenciosamente no sistema.</p>
        <CodeBlock code={countValidRecords} filename="contar-registros-validos.c" downloadUrl="/downloads/trilha-08/contar-registros-validos.c" />
        <Activity title="Quebre uma linha" level="guiada"><p>Remova o telefone de uma linha e execute o contador. Em qual grupo ela deve aparecer?</p><Reveal title="Revelar resposta"><p>Ela aparece entre as linhas ignoradas, pois somente dois campos puderam ser convertidos.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[8]} number="09">
        <p>Agora juntamos três operações fundamentais. O cadastro abre com <code>a</code> e acrescenta uma linha; a listagem converte todas as linhas válidas; a pesquisa interrompe quando encontra o ID desejado.</p>
        <CodeBlock code={appendContact} filename="cadastrar-contato-no-arquivo.c" downloadUrl="/downloads/trilha-08/cadastrar-contato-no-arquivo.c" />
        <CodeBlock code={listContacts} filename="listar-contatos-do-arquivo.c" downloadUrl="/downloads/trilha-08/listar-contatos-do-arquivo.c" />
        <CodeBlock code={searchContact} filename="pesquisar-contato-no-arquivo.c" downloadUrl="/downloads/trilha-08/pesquisar-contato-no-arquivo.c" />
        <div className="file-operation-grid"><div><PlusCircle /><strong>Cadastrar</strong><code>modo a</code></div><div><List /><strong>Listar</strong><code>fgets até EOF</code></div><div><Search /><strong>Pesquisar</strong><code>comparar ID</code></div></div>
        <Activity title="Monte a sequência de teste" level="pratica"><p>Cadastre três contatos, feche os programas, liste todos e pesquise um ID existente e outro inexistente.</p></Activity>
        <Activity title="ID sem repetição" level="desafio"><p>Antes de acrescentar, percorra o arquivo e impeça o cadastro quando o ID já estiver presente.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[9]} number="10">
        <p>Arquivos de texto não oferecem uma substituição simples de uma linha com tamanho variável. Para atualizar com segurança didática, lemos o original e escrevemos todos os registros em um temporário, alterando apenas o contato procurado.</p>
        <CodeBlock code={updateContact} filename="atualizar-contato-com-temporario.c" downloadUrl="/downloads/trilha-08/atualizar-contato-com-temporario.c" />
        <div className="temp-file-flow"><div><small>ORIGINAL</small><strong>contatos.txt</strong></div><span>→</span><div><small>REESCRITA</small><strong>contatos.tmp</strong></div><span>→</span><div><small>SUBSTITUIÇÃO</small><strong>novo contatos.txt</strong></div></div>
        <ol className="step-list"><li><span>1</span><div><strong>Abrir os dois arquivos</strong><p>O original em leitura e o temporário em escrita.</p></div></li><li><span>2</span><div><strong>Copiar ou alterar</strong><p>Cada registro é gravado no temporário; somente o ID procurado recebe os novos dados.</p></div></li><li><span>3</span><div><strong>Trocar com proteção</strong><p>O original vira backup; o temporário assume seu nome. Se a troca falhar, restauramos o backup.</p></div></li></ol>
        <div className="warning-callout"><AlertTriangle /><div><strong>Não substitua se o ID não existir</strong><p>Nesse caso, apagamos apenas o temporário e preservamos o arquivo original exatamente como estava.</p></div></div>
        <Activity title="Atualização parcial" level="desafio"><p>Altere o programa para permitir a troca apenas do telefone, mantendo o nome atual.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[10]} number="11">
        <p>Excluir usa o mesmo padrão do temporário, mas deixa de copiar o registro escolhido. Nada é “apagado no meio”: o novo arquivo simplesmente é criado sem aquela linha.</p>
        <CodeBlock code={deleteContact} filename="excluir-contato-com-temporario.c" downloadUrl="/downloads/trilha-08/excluir-contato-com-temporario.c" />
        <div className="file-crud-map"><div><PlusCircle /><strong>Create</strong><p>Acrescenta uma linha.</p></div><div><Search /><strong>Read</strong><p>Lê, lista e pesquisa.</p></div><div><Pencil /><strong>Update</strong><p>Reescreve alterando uma linha.</p></div><div><Trash2 /><strong>Delete</strong><p>Reescreve omitindo uma linha.</p></div></div>
        <p>Antes de mudanças importantes, uma cópia pode ajudar na recuperação. O exemplo abaixo percorre o arquivo caractere por caractere e cria um backup separado.</p>
        <CodeBlock code={backupFile} filename="criar-backup-do-arquivo.c" downloadUrl="/downloads/trilha-08/criar-backup-do-arquivo.c" />
        <Activity title="Desafio integrado da trilha" level="desafio"><p>Crie um menu que execute cadastro, listagem e pesquisa chamando funções separadas. Atualização e exclusão podem continuar em programas próprios por enquanto.</p><Reveal title="Revelar orientação"><p>Use um <code>do while</code>, um <code>switch</code> e funções como <code>cadastrar</code>, <code>listar</code> e <code>pesquisar</code>. Cada função abre e fecha somente os arquivos de que precisa.</p></Reveal></Activity>
        <div className="final-checklist"><div><CheckCircle2 /><h3>Você concluiu a ponte para o projeto final</h3></div><ul><li><CheckCircle2 />Abre arquivos e trata falhas antes de usar.</li><li><CheckCircle2 />Diferencia leitura, reescrita e acréscimo.</li><li><CheckCircle2 />Transforma uma linha em registro e valida o formato.</li><li><CheckCircle2 />Pesquisa, atualiza e exclui dados persistidos.</li><li><CheckCircle2 />Está pronto para integrar tudo no CRUD da Trilha 09.</li></ul></div>
        <div className="learning-callout"><FolderSync /><div><strong>Próxima parada: Agenda LevelUp completa</strong><p>Na Trilha 09, reuniremos as operações em um único sistema com menu, validações, funções organizadas e arquivo permanente.</p></div></div>
      </TrailSection>
    </div>
  );
}
