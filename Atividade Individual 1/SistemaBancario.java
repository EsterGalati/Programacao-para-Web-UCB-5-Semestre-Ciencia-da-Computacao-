public class SistemaBancario {
    public static void main(String[] args) {
        Banco banco = new Banco();
        
        Loja loja1 = new Loja("Loja 1", 1000.00);
        Loja loja2 = new Loja("Loja 2", 1000.00);

        Funcionario[] funcionarios = {
            new Funcionario(loja1, "Funcionário 1 - Loja 1"),
            new Funcionario(loja1, "Funcionário 2 - Loja 1"),
            new Funcionario(loja2, "Funcionário 1 - Loja 2"),
            new Funcionario(loja2, "Funcionário 2 - Loja 2")
        };

        Cliente[] clientes = {
            new Cliente(banco, "Cliente 1", 1000, new Loja[]{loja1, loja2}),
            new Cliente(banco, "Cliente 2", 1000, new Loja[]{loja1, loja2}),
            new Cliente(banco, "Cliente 3", 1000, new Loja[]{loja1, loja2}),
            new Cliente(banco, "Cliente 4", 1000, new Loja[]{loja1, loja2}),
            new Cliente(banco, "Cliente 5", 1000, new Loja[]{loja1, loja2})
        };

        for (Funcionario funcionario : funcionarios) {
            funcionario.start();
        }
        for (Cliente cliente : clientes) {
            cliente.start();
        }

        for (Cliente cliente : clientes) {
            try {
                cliente.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        loja1.pagarSalarios(funcionarios[0], funcionarios[1]);
        loja2.pagarSalarios(funcionarios[2], funcionarios[3]);

        System.out.println("Saldo final da Loja 1: R$" + loja1.getConta().getSaldo());
        System.out.println("Saldo final da Loja 2: R$" + loja2.getConta().getSaldo());
        System.out.println("Saldo final dos Funcionários:");
        for (Funcionario funcionario : funcionarios) {
            System.out.println(funcionario.getNome() + ": R$" + funcionario.getContaSalario().getSaldo());
            System.out.println("Investimento de " + funcionario.getNome() + ": R$" + funcionario.getContaInvestimento().getSaldo());
        }

        System.out.println("Saldo final dos Clientes:");
        for (Cliente cliente : clientes) {
            System.out.println(cliente.getName() + ": R$" + cliente.getConta().getSaldo());
        }
    }
}
