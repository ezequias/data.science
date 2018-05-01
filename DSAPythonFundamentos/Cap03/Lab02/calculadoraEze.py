from __future__ import division

def soma(a,b):
    return int(a) + int(b)

def subtracao(a,b):
    return int(a) - int(b)

def multiplicacao(a,b):
    return int(a)*int(b)

def divisao(a,b):
    return float(a)/float(b)

print("CALCULADORA do Zeca")
print("-------------------------")
print("")
print("Escolha qual operação deseja realizar:")
print("")
print("1: Soma")
print("2: Subtração")
print("3: Multiplicação")
print("4: Divisão")

opcao = input("Opção: ")

a = input("Informe o primeiro parâmetro: ")
b = input("Informe o segundo parâmetro: ")

result = 0.0;
print("")
if (opcao == "1"):
    result = str(soma(a,b))
    print("O resultado é igual a: " + result )
else:
    if (opcao == "2"):
        result = str(subtracao(a, b))
        print("O resultado é igual a: " + result)
    else:
        if (opcao == "3"):
            result = str(multiplicacao(a, b))
            print("O resultado é igual a: " + result)
        else:
            if (opcao == "4"):
                result = str(divisao(a, b))
                print("O resultado é igual a: " + result )
            else:
                print("Opção inválida")
