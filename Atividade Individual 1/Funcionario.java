class Funcionario extends Thread {
    private final Loja loja;
    private final Conta contaSalario;
    private final Conta contaInvestimento;
    private final String nome;

    public Funcionario(Loja loja, String nome) {
        super(nome); 
        this.loja = loja;
        this.contaSalario = new Conta(nome, 0); 
        this.contaInvestimento = new Conta("Investimento", 0);
        this.nome = nome; 
    }

    public Conta getContaSalario() {
        return contaSalario;
    }

    public Conta getContaInvestimento() {
        return contaInvestimento;
    }

    public void receberSalario(double valor) {
        contaSalario.creditar(valor);
        double valorInvestimento = valor * 0.20;
        contaSalario.debitar(valorInvestimento);
        contaInvestimento.creditar(valorInvestimento);
        System.out.println("Salário recebido por " + nome + ": R$" + valor + ", Investimento: R$" + valorInvestimento);
    }

    public String getNome() {
        return nome;
    }
}
