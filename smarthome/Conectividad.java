package smarthome;

public interface Conectividad {
    void conectarWiFi(String red);
    void desconectarWiFi();
    boolean estadoConexion();
}
