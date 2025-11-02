package smarthome;

public class VentiladorInteligente extends DispositivoInteligente implements Conectividad {
    private int velocidad;
    private boolean conectadoWiFi;

    public VentiladorInteligente(String nombre) {
        super(nombre);
        this.velocidad = 1;
        this.conectadoWiFi = false;
    }

    @Override
    public void encender() {
        encendido = true;
        System.out.println(nombre + " está encendido.");
    }

    @Override
    public void apagar() {
        encendido = false;
        System.out.println(nombre + " está apagado.");
    }

    public void ajustarVelocidad(int nuevaVelocidad) {
        if (encendido) {
            velocidad = nuevaVelocidad;
            System.out.println("Velocidad ajustada a nivel " + velocidad);
        } else {
            System.out.println("No se puede cambiar la velocidad, el ventilador está apagado.");
        }
    }

    @Override
    public void mostrarEstado() {
        System.out.println("Ventilador: " + nombre);
        System.out.println("Encendido: " + encendido);
        System.out.println("Conectado a Wi-Fi: " + conectadoWiFi);
        System.out.println("Velocidad actual: " + velocidad);
    }

    @Override
    public void conectarWiFi(String red) {
        conectadoWiFi = true;
        System.out.println(nombre + " se ha conectado a la red Wi-Fi: " + red);
    }

    @Override
    public void desconectarWiFi() {
        conectadoWiFi = false;
        System.out.println(nombre + " se ha desconectado del Wi-Fi.");
    }

    @Override
    public boolean estadoConexion() {
        return conectadoWiFi;
    }
}
