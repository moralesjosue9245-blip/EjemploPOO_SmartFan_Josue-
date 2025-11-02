package smarthome;

public abstract class DispositivoInteligente {
    protected String nombre;
    protected boolean encendido;

    public DispositivoInteligente(String nombre) {
        this.nombre = nombre;
        this.encendido = false;
    }

    public abstract void encender();
    public abstract void apagar();
    public abstract void mostrarEstado();
}
