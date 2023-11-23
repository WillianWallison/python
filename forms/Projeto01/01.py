from functools import reduce
# Função para calcular a soma dos números no arquivo
def calcular_soma_arquivo(arquivo):
    with open(arquivo, 'r') as f:
        numeros = [int(line.strip()) for line in f if line.strip().isdigit()]
    
    if not numeros:
        return None  # ou outra ação apropriada se o arquivo estiver vazio ou sem números
    
    return sum(numeros)

# Função para calcular o produto dos números no arquivo
def calcular_produto_arquivo(arquivo):
    with open(arquivo, 'r') as f:
        numeros = [int(line.strip()) for line in f if line.strip().isdigit()]

    if not numeros:
        print("Aviso: O arquivo está vazio ou não contém números.")
        return None  # ou outra ação apropriada se o arquivo estiver vazio ou sem números

    produto = reduce(lambda x, y: x * y, numeros)
    return produto

# Função para encontrar o maior elemento no arquivo

def encontrar_maior_elemento(arquivo):
    with open(arquivo, 'r') as f:
        numeros = [int(line.strip()) for line in f]
    
    if not numeros:
        return None  # ou outra ação apropriada se o arquivo estiver vazio
    
    return max(numeros)
# Função principal para imprimir a soma dos números no arquivo
def main():
    arquivo_entrada = 'entrada.txt'

    # Calcular e imprimir a soma
    soma = calcular_soma_arquivo(arquivo_entrada)
    print(f"SOMA = {soma}")

    # Calcular e imprimir o produto
    produto = calcular_produto_arquivo(arquivo_entrada)
    print(f"PRODUTO = {produto}")

    # Encontrar e imprimir o maior elemento
    maior_elemento = encontrar_maior_elemento(arquivo_entrada)
    print(f"MAIOR ELEMENTO = {maior_elemento}")

if __name__ == "__main__":
    main()
