import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;


    @RunWith(PowerMockRunner.class)
    @PrepareForTest(Calculadora.class)
    public class CalculadoraTest {


        @Test
        public void mensagem() {
            //arrange
            Calculadora calc = new Calculadora();
            String atual = "";
            String esperado = "UnitTest";

            //act
            atual = calc.mensagem("UnitTest");

            //assert
            Assert.assertEquals(esperado, atual);
        }

        @Test
        public void somar() {
            //arrange
            Calculadora calc = new Calculadora();
            int atual = 0;
            int esperado = 7;

            //act
            atual = calc.somar(2, 5);

            //assert
            Assert.assertEquals(esperado, atual);
        }

        @Test
        public void subtrair() {
            //arrange
            Calculadora calc = new Calculadora();
            int atual = 0;
            int esperado = 7;

            //act
            atual = calc.subtrair(29, 22);

            //assert
            Assert.assertEquals(esperado, atual);
        }

        @Test
        public void multiplicar() {
            //arrange
            Calculadora calc = new Calculadora();
            int atual = 0;
            int esperado = 20;

            //act
            atual = calc.multiplicar(2, 10);

            //assert
            Assert.assertEquals(esperado, atual);
        }

        @Test
        public void dividir() {
            //arrange
            Calculadora calc = new Calculadora();
            int atual = 0;
            int esperado = 10;

            //act
            atual = calc.dividir(30, 3);

            //assert
            Assert.assertEquals(esperado, atual);
        }

        @Test
        public void mediaAprovado() {
            //arrange
            Calculadora calc = new Calculadora();
            int atual = 0;
            int esperado = 7;

            //act
            atual = calc.media(10, 10, 1);

            //assert
            Assert.assertEquals(esperado, atual);
        }

        @Test
        public void mediaReprovado() {
            //arrange
            Calculadora calc = new Calculadora();
            int atual = 0;
            int esperado = 4;

            //act
            atual = calc.media(4, 4, 4);

            //assert
            Assert.assertEquals(esperado, atual);
        }

        @Test
        public void potenciaQuadrado() {
            //arrange
            Calculadora calc = new Calculadora();
            int atual = 0;
            int esperado = 4;

            //act
            atual = calc.elevaQuadrado(2);

            //assert
            Assert.assertEquals(esperado, atual);
        }

        @Test
        public void numeroPar() {
            //arrange
            Calculadora calc = new Calculadora();
            int atual = 0;
            int esperado = 0;

            //act
            atual = calc.parOuImpar(220);

            //assert
            Assert.assertEquals(esperado, atual);
        }

        @Test
        public void numeroImpar() {
            //arrange
            Calculadora calc = new Calculadora();
            int atual = 0;
            int esperado = 1;

            //act
            atual = calc.parOuImpar(113);

            //assert
            Assert.assertEquals(esperado, atual);
        }

        @Test
        public void mockRecuperacao() throws Exception {
            Calculadora calc = new Calculadora();
            final String METHOD = "getRecuperacao";

            Calculadora spy = PowerMockito.spy(calc);
            PowerMockito.when(spy, METHOD).thenReturn((int) 7);

            int atual = 0;
            int esperado = 7;

            atual = spy.recuperaNota(0);

            // act
            Assert.assertEquals(esperado, atual);

            PowerMockito.verifyPrivate(spy, Mockito.times(1)).invoke(METHOD);
        }

    }