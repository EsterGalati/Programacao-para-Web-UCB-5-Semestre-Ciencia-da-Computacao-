class Cliente extends Thread {
    private final Banco banco;
    private final Conta conta;
    private final Loja[] lojas = new Loja[2];
    private final String nome;

    public Cliente(Banco banco, String nome, double saldoInicial, Loja[] lojas) {
        super(nome); 
        this.banco = banco;
        this.conta = new Conta(nome, saldoInicial);
        this.lojas[0] = lojas[0];
        this.lojas[1] = lojas[1];
        this.nome = nome; 
    }

    public Conta getConta() {
        return conta;
    }

    public void run() {
        while (true) {
            int lojaIndex = (int) (Math.random() * 2);
            Loja loja = lojas[lojaIndex];
            double valorCompra = Math.random() < 0.5 ? 100 : 200;

            banco.transferir(conta, loja.getConta(), valorCompra);
            try {
                sleep(100); 
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            if (conta.getSaldo() <= 0) {
                break; 
            }
        }
    }

    public String getNome() {
        return nome;
    }
}
