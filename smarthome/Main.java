package smarthome;

public class Main {
    public static void main(String[] args) {
        VentiladorInteligente miVentilador = new VentiladorInteligente("Ventilador Sala");

        miVentilador.conectarWiFi("Casa_5G");
        miVentilador.encender();
        miVentilador.ajustarVelocidad(3);
        miVentilador.mostrarEstado();
        miVentilador.apagar();
        miVentilador.desconectarWiFi();
    }
}
