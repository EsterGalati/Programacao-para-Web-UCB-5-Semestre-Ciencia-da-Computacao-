class Loja {
    private final Conta conta;
    private final double salarioFuncionario = 1400.00;
    private final String identificador; 

    public Loja(String identificador, double saldoInicial) {
        this.identificador = identificador;
        this.conta = new Conta(identificador, saldoInicial);
    }

    public Conta getConta() {
        return conta;
    }

    public String getIdentificador() {
        return identificador;
    }

    public void pagarSalarios(Funcionario... funcionarios) {
        double totalSalarios = funcionarios.length * salarioFuncionario;
        if (conta.getSaldo() >= totalSalarios) {
            for (Funcionario funcionario : funcionarios) {
                conta.debitar(salarioFuncionario);
                funcionario.receberSalario(salarioFuncionario);
            }
            System.out.println("Salários dos funcionários pagos pela " + identificador + ".");
        } else {
            System.out.println("A " + identificador + " não possui saldo suficiente para pagar os salários dos funcionários.");
        }
    }
}
