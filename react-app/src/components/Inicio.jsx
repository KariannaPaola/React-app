/**
 * @component
 * Componente para buscar una ciudad.
 * 
 * Muestra un input y un botón con icono de bssqueda
 * 
 * @param value - Valor actual input 
 * @param onChange - Funcion que se ejecuta al cambiar el texto del input.
 * @param onBuscar - Funcion que se ejecuta al hacer click en el boton de busqueda.
 *
 * @returns html con boton de busqueda para ingresar ciudades
 */


function Inicio({value,onChange,onBuscar}){
  return(
  <div className="flex justify-between w-[400px] border-[2px] border-blue-900 border-solid rounded-[30px] p-[10px] shadow-lg shadow-blue-900/50">
    <input className="w-full bg-cyan-700 dark:bg-gray-950" type="text" 
      placeholder="Buscar una ciudad..."
      value={value}
      onChange={onChange}
      />
    <button onClick={onBuscar}><i class="fa-solid fa-magnifying-glass"></i></button>
  </div>)
}

export{ Inicio };