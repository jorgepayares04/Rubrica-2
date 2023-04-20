
    let operacion = [];
    let historial = [];
    let ultimoValor = '';

    function agregarNumero(valor){
        if(valor === '' && ultimoValor.includes('.')){
            return;
        }

        document.getElementById('display').value += valor;
        ultimoValor = valor;
    }

    let puntoBtn = document.getElementById('punto');
    puntoBtn.addEventListener('click', function() {
    agregarNumero('.');
});
    function agregarOperacion(operador){
        let valor = document.getElementById('display').value;

        if(valor === '' || operador === ''){
            return;
        }

        if(operacion.length === 2){
            calcularResultado();
        }

        operacion.push(parseFloat(valor));
        operacion.push(operador);
        document.getElementById('display').value = '';
    }

    function calcularResultado(){
        let valor = document.getElementById('display').value;
    
        if(valor === ''){
            return;
        }
    
        operacion.push(parseFloat(valor));
        let resultado;
    
        if (operacion.includes('/') && operacion[operacion.length - 1] == 0) {
            resultado = "No se puede dividir entre cero";
        } else {
            resultado = eval(operacion.join(' '));
        }
        
        document.getElementById('display').value = resultado;
        historial.push(operacion.join(' ') + ' = ' + resultado);
        actualizarHistorial();
        operacion = [];
    }

    function borrar(){
        document.getElementById('display').value = '';
        operacion = [];
    }

    function limpiarHistorial(){
        historial = [];
        actualizarHistorial();
    }

    function actualizarHistorial(){
        let lista = document.getElementById('historial');
        lista.innerHTML = '';

        historial.forEach(function(item){
            let li = document.createElement('li');
            li.className = 'list-group-item historial col-md-12 my-2';
            li.appendChild(document.createTextNode(item));
            lista.appendChild(li);
        });
    }
    function toggleTabla() {
        let tabla = document.getElementById('historial');
   

        tabla.classList.toggle("d-none");

      }
      let toggleBtn2 = document.getElementById('historial');
    if (toggleBtn) {
      toggleBtn.addEventListener("click", toggleTabla);
    } else {
      console.log("Element with ID 'toggleTabla' not found.");
    }
