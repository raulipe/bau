public class Calculadora {

    // atributo
    private int resultado = 0;

    // método somar
    public int somar(int n1, int n2) {
        resultado = n1 + n2;
        return resultado;
    }

    // método subtrair
    public int subtrair(int n1, int n2) {
        resultado = n1 - n2;
        return resultado;
    }

    // método multiplicar
    public int multiplicar(int n1, int n2) {
        resultado = n1 * n2;
        return resultado;
    }

    // método dividir
    public int dividir(int n1, int n2) {
        resultado = n1 / n2;
        return resultado;
    }
    //método média
    public int media(int n1, int n2, int n3) {
        resultado = n1 + n2 + n3;
        resultado = resultado / 3;
        if (resultado >= 7) {
            System.out.println("Parabens, você foi aprovado!!!");
        } else {
            System.out.println("que pena você foi reprovado");
        }
        return resultado;
    }
    //método para teste mockado
    public int recuperaNota(int n1) {

        return n1 + getRecuperacao();
    }
    //método para teste mockado
    private int getRecuperacao() {

        return 10;
    }

    public int elevaQuadrado(int n1){
        resultado=n1*n1;
        return resultado;
    }

    //método com string
    public String mensagem (String msg){
        msg="UnitTest";
        System.out.println("Bem vindo professor aos testes unitários da Classe Calculadora.java");
        return msg;
    }

    public int parOuImpar(int n){
        resultado = n % 2;
        if(resultado==0){
            System.out.println("número par");
        } else{
            System.out.println("número ímpar");
        }
        return resultado;
    }
}