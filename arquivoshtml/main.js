
// const showData = (result)=>{
//     for(const campo in result){
//         if(document.querySelector("#"+campo)){
//             document.querySelector("#"+campo).value = result[campo]
//         }
//     }
// }

// cep.addEventListener("blur",(e)=>{
//     let search = cep.value.replace("-","")
//     const options = {
//         method: 'GET',
//         mode: 'cors',
//         cache: 'default'
    // }


// $.getJSON(linkdaapi, function (data) {
//     $.each(data.tipocliente, function (i, data) {
//         var tiposcliente = "<option value= + data.value + "> + data.text + "</option>";
//         $(tiposcliente).appendTo('tipo');
//     })
// })


// Buscar tipos de cliente


// const xhr = new XMLHttpRequest();
// xhr.open("GET", "linkdaapi");
// xhr.onload = function() {
//     if (xhr.status == 200) {
//         const data = JSON.parse(xhr.responsetext);
//         const select = document.getElementById("tipocliente");
//         data.forEach(type => {
//             const option = document.createElement("option");
//             option.value = type.id;
//             option.text = type.name;
//             select.appendChild(option);
//         });
//     } else {
//         console.error("não encontrei nada")
//     }
// };
// xhr.send();

// )

    
//Buscar o endereço pelo CEP
object.onclick = function buscarCep() {
    var fcep = document.getElementById("#cep").value;

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var ret = JSON.parse(this.responseText)

            if (ret.erro) {
                document.getElementById("logradouro").value = "";
                document.getElementById("bairro").value = "";
                document.getElementById("complemento").value = "";
                document.getElementById("localidade").value = "";
                document.getElementById("uf").value = "";
                alert("CEP não encontrado. Insira um CEP válido");
            } else {
                document.getElementById("logradouro").value = ret.logradouro;
                document.getElementById("bairro").value = ret.bairro;
                document.getElementById("complemento").value = ret.complemento;
                document.getElementById("localidade").value = ret.localidade;
                document.getElementById("uf").value = ret.uf;
            }
                
        }
    };
    request.open("GET", "https://viacep.com.br/ws/"+fcep+"/json/", true);
    request.send();
}

//Enviar o form por POST
function sendForm(){
    
    var nome, telefone, email, CEP, logradouro, bairro, complemento, localidade, uf;
    nome = document.getElementById("nome").value
    telefone = document.getElementById("telefone").value
    email = document.getElementById("email").value
    CEP = document.getElementById("cep").value
    logradouro = document.getElementById("logradouro").value
    bairro = document.getElementById("bairro").value
    complemento = document.getElementById("complemento").value
    localidade = document.getElementById("localidade").value
    uf = document.getElementById("uf").value
    tipo = document.getElementById("tipo").value
            
    var postForm = new XMLHttpRequest();
    
    
    postForm.onreadystatechange = function () {
        if (postForm.readyState == 4 && postForm.satus == 200){
        postForm.responseXML
        } else
            alert("Não foi possível enviar os dados.")
    }
postForm.setRequestHeader('form', 'text/xml');
postForm.open("POST", "/localhost:3000", true);
postForm.send()
    

}

//Buscar usuário por email ou ID
function getemail() {
    var mail = document.getElementById("#email");
    var emailget = new XMLHttpRequest();

    emailget.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var user = JSON.parse(this.responseText);

            if (user.erro) {
                alert("Não foi possível encontrar usuário.")
            } else {
                console.log(cliente);
            }
               
        }
    }
};

emailget.open("GET", "http://localhost:3000/cliente/"+mail+"/", true);
emailget.send();

// get id

function getid() {
    var id = document.getElementById("#id");
    var idget = new XMLHttpRequest();

    idget.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var user = JSON.parse(this.responseText);

            if (user.erro) {
                alert("Não foi possível encontrar usuário.")
            } else {
                console.log(cliente);
            }
               
        }
    }
};

emailget.open("GET", "http://localhost:3000/cliente/"+id+"/", true);
emailget.send();
	
//onload opções

$(document).ready(function() {
    $.getJSON("http://localhost:3000/tipo_cliente", function(data) {
        var tipo_cliente = $("#tipo_cliente") 

        $.each(data, function(i, tipo) {
            tipo_cliente.append($("<option></option>").value(tipo.id).text(tipo.descricao));
        })
    })
})

    // fetch(`https://viacep.com.br/ws/${search}//json`)
    // .then(response =>{ response.json()
    //     .then( data => showData(data))
    // })
    // .catch(e => alert('CEP não encontrado. Insira um CEP válido.'))
    //     return;
                
//     }
// )