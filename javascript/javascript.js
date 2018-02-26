var videoLabel = document.getElementById("video");
var totalMultimedia = ["multimedia/Snowing - Kirk Cameron Crowe.mp3", "multimedia/Borracho arbolada.mp4", "multimedia/Ocean Jet - Distant.mp3", "multimedia/forest.mp4", "multimedia/Cap'n Jazz - Little League.mp3", "multimedia/pato.mp4"];
var reproduciendo = "";

$(function() {
    $(document).ready(function() {
        $("#video").attr("poster", "multimedia/imagen inicio.svg");
    });
});

//Botones
function PlayPause() {
    if (videoLabel.paused) {
        videoLabel.play();
        $("#play").attr("d", "M1024,42.67101315686659C1024,42.67101315686659,1024,981.3280131568665,1024,981.3280131568665C1024,992.8640131568666,1019.781,1002.8690131568666,1011.344,1011.3440131568666C1002.907,1019.8180131568665,992.902,1024.0370131568666,981.329,1024.0000131568665C981.329,1024.0000131568665,639.995,1024.0000131568665,639.995,1024.0000131568665C628.46,1024.0000131568665,618.454,1019.7810131568665,609.98,1011.3440131568666C601.505,1002.9070131568666,597.287,992.9020131568666,597.324,981.3280131568665C597.324,981.3280131568665,597.324,42.67101315686659,597.324,42.67101315686659C597.324,31.135013156866535,601.543,21.13001315686654,609.98,12.656013156866493C618.417,4.181013156866584,628.422,-0.03798684313346712,639.995,0.000013156866543795331C639.995,0.000013156866543795331,981.329,0.000013156866543795331,981.329,0.000013156866543795331C992.864,0.000013156866543795331,1002.87,4.218013156866505,1011.344,12.656013156866493C1019.819,21.093013156866505,1024.037,31.0980131568665,1024,42.67101315686659C1024,42.67101315686659,1024,42.67101315686659,1024,42.67101315686659M426.676,42.67101315686659C426.676,42.67101315686659,426.676,981.3280131568665,426.676,981.3280131568665C426.676,992.8640131568666,422.457,1002.8690131568666,414.02,1011.3440131568666C405.583,1019.8180131568665,395.578,1024.0370131568666,384.005,1024.0000131568665C384.005,1024.0000131568665,42.671,1024.0000131568665,42.671,1024.0000131568665C31.136,1024.0000131568665,21.13,1019.7810131568665,12.656,1011.3440131568666C4.181,1002.9070131568666,-0.037,992.9020131568666,0,981.3280131568665C0,981.3280131568665,0,42.67101315686659,0,42.67101315686659C0,31.135013156866535,4.219,21.13001315686654,12.656,12.656013156866493C21.093,4.181013156866584,31.098,-0.03798684313346712,42.671,0.000013156866543795331C42.671,0.000013156866543795331,384.005,0.000013156866543795331,384.005,0.000013156866543795331C395.54,0.000013156866543795331,405.546,4.218013156866505,414.02,12.656013156866493C422.495,21.093013156866505,426.713,31.0980131568665,426.676,42.67101315686659C426.676,42.67101315686659,426.676,42.67101315686659,426.676,42.67101315686659")
    } else if (videoLabel.paused == false) {
        videoLabel.pause();
        $("#play").attr("d", "M800.007,512.000364013672C800.007,529.304364013672,793.679,544.312364013672,781.023,557.023364013672C781.023,557.023364013672,333.03,1005.0163640136719,333.03,1005.0163640136719C320.374,1017.672364013672,305.367,1024.000364013672,288.007,1024.000364013672C270.647,1024.000364013672,255.64,1017.672364013672,242.984,1005.0163640136719C230.328,992.360364013672,224,977.3533640136719,224,959.9933640136719C224,959.9933640136719,224,64.00736401367192,224,64.00736401367192C224,46.703364013671944,230.328,31.696364013671996,242.984,18.984364013672007C255.64,6.272364013672018,270.647,-0.05563598632807043,288.007,0.00036401367196958745C305.367,0.056364013672009605,320.374,6.384364013671984,333.03,18.984364013672007C333.03,18.984364013672007,781.023,466.97736401367195,781.023,466.97736401367195C793.679,479.633364013672,800.007,494.64036401367196,800.007,512.000364013672C800.007,512.000364013672,800.007,512.000364013672,800.007,512.000364013672");
    }
}

function Adelantar() {
    videoLabel.currentTime += 10;
}

function SetVolumePlus() {
    if (videoLabel.volume < 1) {
        videoLabel.volume += 0.1;
        volumen();
    }
}

function SetVolumeLess() {
    if (videoLabel.volume > 0) {
        videoLabel.volume -= 0.1;
        volumen();
    }
}

//Lista
function multimedia() {
    $(document).ready(function() {
        $(".multimedia-elements").on("click", function() { 
            if ($("#video").attr("src").charAt($("#video").attr("src").length-1) == "3") {
                $("#video").attr("poster", ($(this).attr("id")+".svg"));
                $("#video").attr("src", $(this).attr("id"));
            }
            else {
                $("#video").attr("src", $(this).attr("id"));
            }

            cambiaLista();
            PlayPause();
        });
    });
}

function outputUpdate(vol) {
    videoLabel.volume += vol;
    document.querySelector('#volume').value = vol;
}

// Recorrer lista de multimedia
function cambiaLista() {
    $(document).ready(function() {

        $(".li").each(function() {
            if ($(this).attr("id") == $("#video").attr("src")) {
                
                $(this).addClass("claseHover");

                $(this).find(".multimedia-elements").css("background", "orange");
                $(this).find(".icono").css("fill", "Yellow");
                $(this).css("background", "orange");
                //$(this).css("box-shadow", "5px 5px 5px black");
            }
            else {
                 $(this).removeClass("claseHover");
                $(this).find(".multimedia-elements").css("background", "#40D7A4");
                $(this).find(".icono").css("fill", "#40D7A4");
                $(this).css("background", "#40D7A4");
                $(this).css("color", "black");
                
            }
        });
    });
}

function login() {
    var nombre = prompt("Introduce nombre"); 
    var contraseña = prompt("Introduce contraseña"); 

    if (nombre == "admin" && contraseña == "1234") {
        alert("Acceso concedido");
    }
    else {
        alert("Acceso denegado");
    }
}

function volumen() {
    $(".volumebkg").css('width', videoLabel.volume*100);   
}

//Reproducción automática de la lista 
videoLabel.onended = function() {
    for (var i = 0; i <= totalMultimedia.length; i++) {
        if (totalMultimedia[i] == $("#video").attr("src")) {
            reproduciendo = totalMultimedia[i+1];
            $("#video").attr("poster", (reproduciendo+".svg"));
            cambiaLista();
        }
        else if (totalMultimedia[totalMultimedia.length - 1] == $("#video").attr("src")) {
            reproduciendo = totalMultimedia[0];
            $("#video").attr("poster", (reproduciendo + ".svg"));
            cambiaLista();
        }
    }
    
    $("#video").attr("src", reproduciendo);
}


