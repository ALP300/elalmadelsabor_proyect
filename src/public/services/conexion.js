import pg from 'pg';
const { Client } = pg;

const config = {
    user: 'db_elalmadelsabor_user',
    password: 'Tgr99PQFgAksKGQ6m780A9Wpy64m3GYh',
    database: 'db_elalmadelsabor',
    host: 'dpg-d2l7k575r7bs73ddc0fg-a.oregon-postgres.render.com',
    port: 5432,
    ssl: { rejectUnauthorized: false }
};

export async function conectar() {
    const cliente = new Client(config);
    try {
        await cliente.connect();
        console.log('Conexión exitosa a la base de datos');
        return cliente;
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        await cliente.end(); // Cerrar conexión en caso de error
        throw error;
    }
}
export async function ConsultarProductos() {
    const cliente = new Client(config);
    try{
        await cliente.connect();
        const res = await cliente.query('SELECT * FROM productos');
        await cliente.end();
        return res.rows;
    } catch (error) {
        console.error('Error al consultar productos:', error);
        await cliente.end();
        throw error;
    }
}